import { prisma } from '../../utils/prisma';

export default defineEventHandler(async (event) => {
    await requireUserSession(event);

    const arriendos = await prisma.arriendo.findMany({
        include: {
            vehiculo: true,
            usuario: { select: { rut: true, email: true } }
        }
    });

    return arriendos;
});