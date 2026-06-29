import bcrypt from "bcryptjs";
import { prisma } from '../../utils/prisma';

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  if (!email || !password) {
    throw createError({ statusCode: 401, message: "Credenciales no son válidas" });
  }

  const usuario = await prisma.usuario.findUnique({
    where: { email },
    include: { perfil: true }
  });

  if (!usuario) {
    throw createError({ statusCode: 401, message: "Credenciales no son válidas" });
  }

  const passwordValido = await bcrypt.compare(password, usuario.password);
  if (!passwordValido) {
    throw createError({ statusCode: 401, message: "Credenciales no son válidas" });
  }

 
  await setUserSession(event, {
    user: {
      id: usuario.id,
      rut: usuario.rut,
      email: usuario.email,
      perfil: usuario.perfil.nombre
    }});
    

  return { success: true };
});