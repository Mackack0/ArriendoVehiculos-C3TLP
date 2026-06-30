import { prisma } from '../../utils/prisma';

export default defineEventHandler(async (event) => {

  const vehiculos = await prisma.vehiculo.findMany({
    include: {
      tipo: true 
    }
  });

  return vehiculos;
});