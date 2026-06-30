import { prisma } from '../../utils/prisma';

export default defineEventHandler(async (event) => {
    await requireUserSession(event);
    const tipos = await prisma.tipoVehiculo.findMany();
    return tipos;
});