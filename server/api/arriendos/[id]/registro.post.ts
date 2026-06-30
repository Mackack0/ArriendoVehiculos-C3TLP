import { prisma } from '../../../utils/prisma';
import fs from 'node:fs';
import path from 'node:path';

export default defineEventHandler(async (event) => {
    await requireUserSession(event);
    const id = Number(event.context.params?.id);
    
    const formData = await readMultipartFormData(event);
    if (!formData) {
        throw createError({ statusCode: 400, message: "No se enviaron datos" });
    }

    let tipoRegistro = ''; 
    let fechaHoraReal = '';
    let nombreArchivo = '';

    for (const field of formData) {
        if (field.name === 'tipoRegistro') tipoRegistro = field.data.toString();
        if (field.name === 'fechaHoraReal') fechaHoraReal = field.data.toString();
        
        if (field.name === 'foto' && field.filename) {
            nombreArchivo = `arriendo-${id}-${Date.now()}-${field.filename}`;
            const rutaDestino = path.join(process.cwd(), 'app', 'public', 'uploads', nombreArchivo);
            
            fs.writeFileSync(rutaDestino, field.data);
        }
    }

    if (!tipoRegistro || !fechaHoraReal || !nombreArchivo) {
        throw createError({ statusCode: 400, message: "Faltan datos requeridos o la fotografia" });
    }

    if (tipoRegistro === 'entrega') {
        await prisma.arriendo.update({
            where: { id },
            data: {
                fechaEntrega: new Date(fechaHoraReal),
                fotoEntrega: `/uploads/${nombreArchivo}`
            }
        });
    } 
    else if (tipoRegistro === 'recepcion') {
        const arriendo = await prisma.arriendo.update({
            where: { id },
            data: {
                fotosRecepcion: `/uploads/${nombreArchivo}`
            }
        });

        await prisma.vehiculo.update({
            where: { id: arriendo.vehiculoId },
            data: { estado: 'disponible' }
        });
    } else {
        throw createError({ statusCode: 400, message: "Tipo de registro no valido" });
    }

    return { success: true, message: `Registro de ${tipoRegistro} guardado correctamente` };
});