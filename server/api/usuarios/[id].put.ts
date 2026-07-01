import bcrypt from "bcryptjs";
import { prisma } from '../../utils/prisma';

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);
  const perfil = (session.user as { perfil?: string }).perfil;

  if (perfil !== 'administrador') {
    throw createError({ statusCode: 403, message: 'Funcionalidad exclusiva de administrador' });
  }

  const id = Number(event.context.params?.id);
  const body = await readBody(event);

  const data: {
    rut?: string;
    email?: string;
    password?: string;
    perfilId?: number;
  } = {
    rut: body.rut,
    email: body.email,
    perfilId: Number(body.perfilId)
  };

  if (body.password) {
    data.password = await bcrypt.hash(body.password, 10);
  }

  const usuarioActualizado = await prisma.usuario.update({
    where: { id },
    data
  });

  return {
    success: true,
    usuario: {
      id: usuarioActualizado.id,
      email: usuarioActualizado.email,
      rut: usuarioActualizado.rut
    }
  };
});