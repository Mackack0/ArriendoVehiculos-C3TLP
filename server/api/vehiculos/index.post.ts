import { prisma } from "../../utils/prisma";
import fs from 'node:fs'; //it lets you interact with the file system
import path from 'node:path'; // it handles directory paths automatically

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

    //variables para almacenar datos
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

        // Guarda la foto en la carpeta 'public/uploads' y genera un nombre único para el archivo
        if (field.name === 'fotoUrl' && field.filename) {
            try {
                nombreArchivo = `${Date.now()}_${field.filename}`;
                const rutaDestino = path.join(process.cwd(), 'app', 'public', 'uploads', nombreArchivo);
                fs.writeFileSync(rutaDestino, field.data);
            } catch (error) {
                throw createError({ statusCode: 500, message: "Error al guardar la foto" });
            }
        }
    }

    const nuevoVehiculo = await prisma.vehiculo.create({
        data: {
            patente,
            marca,
            modelo,
            anio,
            estado: 'disponible', 
            fotoUrl: '/uploads/' + nombreArchivo,
            tipoId
        }
    });

    return { success: true, vehiculo: nuevoVehiculo };
});
