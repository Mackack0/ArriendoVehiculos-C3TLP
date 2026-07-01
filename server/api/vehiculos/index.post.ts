import { prisma } from "../../utils/prisma";
import fs from 'node:fs';
import path from 'node:path';

export default defineEventHandler(async (event) => {
    const session = await requireUserSession(event);
    const perfil = (session.user as { perfil?: string }).perfil;
    if (perfil !== 'administrador') {
        throw createError({ statusCode: 403, message: "Funcionalidad exclusiva de administrador" });
    }

    const formData = await readMultipartFormData(event);

    if (!formData) {
        throw createError({ statusCode: 400, message: "No se enviaron datos." });
    }

    let patente = '';
    let marca = '';
    let modelo = '';
    let anio = 0;
    let tipoId = 0;
    let nombreArchivo = '';

    for (const field of formData) {
        if (field.name === 'patente') {
            patente = field.data.toString();
        }
        if (field.name === 'marca') {
            marca = field.data.toString();
        }
        if (field.name === 'modelo') {
            modelo = field.data.toString();
        }
        if (field.name === 'anio') {
            anio = Number(field.data.toString());
        }
        if (field.name === 'tipoId') {
            tipoId = Number(field.data.toString());
        }

        if (field.name === 'fotoUrl' && field.filename) {
            try {
                const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
                fs.mkdirSync(uploadsDir, { recursive: true });

                const extension = path.extname(field.filename) || '.jpg';
                nombreArchivo = `${Date.now()}${extension}`;
                const rutaDestino = path.join(uploadsDir, nombreArchivo);
                fs.writeFileSync(rutaDestino, field.data);
            } catch (error) {
                throw createError({ statusCode: 500, message: "Error al guardar la foto" });
            }
        }
    }

    if (!nombreArchivo) {
        throw createError({ statusCode: 400, message: "Debes adjuntar una foto del vehículo" });
    }

    const nuevoVehiculo = await prisma.vehiculo.create({
        data: {
            patente,
            marca,
            modelo,
            anio,
            estado: 'disponible',
            fotoUrl: `/uploads/${nombreArchivo}`,
            tipoId
        }
    });

    return { success: true, vehiculo: nuevoVehiculo };
});
