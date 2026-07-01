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

  const body = await readBody(event);

  const tipoActualizado = await prisma.tipoVehiculo.update({
    where: { id },
    data: {
      nombre: body.nombre,
      valorDiario: Number(body.valorDiario)
    }
  });

  return { success: true, tipo: tipoActualizado };
});
