import { prisma } from '../../utils/prisma';

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);
  const perfil = (session.user as { perfil?: string }).perfil;
  if (perfil !== 'administrador') {
    throw createError({ statusCode: 403, message: 'Funcionalidad exclusiva de administrador' });
  }

  const id = Number(event.context.params?.id);
  if (!id) {
    throw createError({ statusCode: 400, message: 'ID de tipo no valido' });
  }

  const tipo = await prisma.tipoVehiculo.findUnique({ where: { id } });
  if (!tipo) {
    throw createError({ statusCode: 404, message: 'Tipo no encontrado' });
  }

  await prisma.tipoVehiculo.delete({ where: { id } });

  return { ok: true, message: 'Tipo eliminado correctamente' };
});
