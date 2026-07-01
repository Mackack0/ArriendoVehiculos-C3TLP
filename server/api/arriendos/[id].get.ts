import { prisma } from '../../utils/prisma';

export default defineEventHandler(async (event) => {
  await requireUserSession(event);
  
  const id = Number(event.context.params?.id);
  if (!id) {
    throw createError({ statusCode: 400, message: "ID no válido" });
  }

  const arriendo = await prisma.arriendo.findUnique({
    where: { id },
    include: {
      vehiculo: {
        include: { tipo: true }
      }
    }
  });

  if (!arriendo) {
    throw createError({ statusCode: 404, message: "Arriendo no encontrado" });
  }

  return arriendo;
});