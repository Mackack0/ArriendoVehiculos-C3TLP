import { prisma } from '../../utils/prisma';

export default defineEventHandler(async (event) => {
    //mismo codigo q en delete.ts para la seguridad
  const session = await requireUserSession(event);
  const perfil = (session.user as { perfil?: string }).perfil;
  if (perfil !== 'administrador') {
    throw createError({ statusCode: 403, message: "Funcionalidad exclusiva de administrador" });
  }

  const id = Number(event.context.params?.id);
  if (!id) {
    throw createError({ statusCode: 400, message: "ID de vehiculo no valido" });
  }

  const body = await readBody(event);

  const vehiculoActualizado = await prisma.vehiculo.update({
    where: { id },
    data: {
      patente: body.patente,
      marca: body.marca,
      modelo: body.modelo,
      ano: Number(body.ano),
      tipoId: Number(body.tipoId)
    }
  });

  return { ok: true, vehiculo: vehiculoActualizado };
});