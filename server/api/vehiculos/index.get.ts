import { prisma } from '../../utils/prisma';

export default defineEventHandler(async (event) => {
  try {
    const vehiculos = await prisma.vehiculo.findMany({
      include: {
        tipo: true 
      }
    });

    return vehiculos;
  } catch (error) {
    throw createError({ statusCode: 500, message: "Error al obtener vehículos" });
  }
});