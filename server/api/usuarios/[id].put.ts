import { prisma } from '../../utils/prisma';

export default defineEventHandler(async (event) => {
  await requireUserSession(event);

  const arriendos = await prisma.arriendo.findMany({
    include: {
      vehiculo: true,
      usuario: { select: { email: true, rut: true } } //Guarda quien arrendo el vehiculo 
    }
  });

  return arriendos;
});