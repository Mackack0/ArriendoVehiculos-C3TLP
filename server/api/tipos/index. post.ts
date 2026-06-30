import { prisma } from '../../utils/prisma';

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);
  if ((session.user as any).perfil !== 'administrador') {
    throw createError({ statusCode: 403, message: "Acceso exclusivo de administrador" });
  }

  const body = await readBody(event);

  const nuevoTipo = await prisma.tipoVehiculo.create({
    data: {
      nombre: body.nombre,
      valorDiario: Number(body.valorDiario)
    }
  });

  return { ok: true, tipo: nuevoTipo };
});