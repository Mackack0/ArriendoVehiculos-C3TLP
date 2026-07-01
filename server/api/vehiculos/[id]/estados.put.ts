import { prisma } from '../../../utils/prisma';

export default defineEventHandler(async (event) => {
  await requireUserSession(event);
  
  const id = Number(event.context.params?.id);
  const body = await readBody(event);
  
  const estadosPermitidos = ['disponible', 'arrendado', 'mantenimiento', 'baja'];
  if (!estadosPermitidos.includes(body.estado)) {
    throw createError({ statusCode: 400, message: "Estado no válido" });
  }

  return await prisma.vehiculo.update({
    where: { id },
    data: { estado: body.estado }
  });
});