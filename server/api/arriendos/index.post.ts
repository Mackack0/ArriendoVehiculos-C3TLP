import { prisma } from '../../utils/prisma';

export default defineEventHandler(async (event) => {
    const session = await requireUserSession(event);
    const body = await readBody(event);

    const vehiculoId = Number(body.vehiculoId);
    if (!vehiculoId) {
        throw createError({ statusCode: 400, message: "ID de vehiculo no valido" });
    }

    const fechaInicio = new Date(body.fechaInicio);
    const fechaTermino = new Date(body.fechaTermino);
    const clienteRut = String(body.clienteRut || '').trim();
    const clienteNombre = String(body.clienteNombre || '').trim();

    if (fechaInicio >= fechaTermino) {
        throw createError({ statusCode: 400, message: "La fecha de inicio debe ser anterior a la fecha de fin" });
    }

    if (!clienteRut || !clienteNombre) {
        throw createError({ statusCode: 400, message: "Faltan datos del cliente" });
    }

    const conflicto = await prisma.arriendo.findFirst({
        where: {
            vehiculoId: vehiculoId,
            fechaInicio: { lte: fechaTermino }, //lte = less than or equal
            fechaTermino: { gte: fechaInicio } //gte = greater than or equal
        }
    });

    if (conflicto) {
        throw createError({ statusCode: 400, message: "El vehiculo ya esta arrendado en las fechas seleccionadas" });
    }

    const usuarioId = (session.user as { id?: number }).id;

    if (!usuarioId) {
        throw createError({ statusCode: 401, message: 'Usuario no autenticado' });
    }

    const vehiculo = await prisma.vehiculo.findUnique({
        where: { id: vehiculoId },
        include: { tipo: true }
    });

    if (!vehiculo || vehiculo.estado !== 'disponible') {
        throw createError({ statusCode: 400, message: "Solo se pueden arrendar vehículos disponibles" });
    }

    //Calcular dias (milisegundos a dias) y precio total (i forgor)
    const msPorDia = 1000 * 60 * 60 * 24;
    const dias = Math.ceil((fechaTermino.getTime() - fechaInicio.getTime()) / msPorDia) || 1;
    const valorArriendo = dias * vehiculo.tipo.valorDiario;

    const nuevoArriendo = await prisma.arriendo.create({
        data: {
            fechaInicio,
            fechaTermino,
            vehiculoId,
            clienteRut,
            clienteNombre,
            usuarioId,
            valorArriendo
        }
    });

    await prisma.vehiculo.update({
        where: { id: vehiculoId },
        data: { estado: 'arrendado' }
    });

    return { success: true, arriendo: nuevoArriendo };
});
