import { prisma } from '../../utils/prisma';

export default defineEventHandler(async (event) => {
    const session = await requireUserSession(event);
    const perfil = (session.user as { perfil?: string }).perfil;
    if (perfil !== 'administrador') {
        throw createError({ statusCode: 403, message: "Funcionalidad exclusiva de administrador" });
    }

  const id = Number(event.context.params?.id);
  
  const userId = (session.user as { id?: number }).id;
  if (userId && id === userId) {
    throw createError({ statusCode: 400, message: "No puedes eliminar tu propia cuenta" });
  }

  await prisma.usuario.delete({ where: { id } });

  return { ok: true, message: "Usuario eliminado" };
});