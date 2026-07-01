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

  let passwordValido = false;

  try {
    passwordValido = await bcrypt.compare(password, usuario.password);
  } catch {
    passwordValido = false;
  }

  if (!passwordValido && usuario.password === password) {
    passwordValido = true;
    const passwordHash = await bcrypt.hash(password, 10);
    await prisma.usuario.update({
      where: { id: usuario.id },
      data: { password: passwordHash }
    });
  }

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