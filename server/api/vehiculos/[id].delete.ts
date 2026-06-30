import { prisma } from '../../utils/prisma';
import fs from 'node:fs';
import path from 'node:path';

export default defineEventHandler(async (event) => {

  const session = await requireUserSession(event);
  const perfil = (session.user as { perfil?: string }).perfil;
  if (perfil !== 'administrador') {
    throw createError({ statusCode: 403, message: "Funcionalidad exclusiva de administrador" });
  }

  const id = Number(event.context.params?.id);
  if (!id) {
    throw createError({ statusCode: 400, message: "ID de vehiculo no valido" });
  }

  //borrar foto
  const vehiculo = await prisma.vehiculo.findUnique({ where: { id } });
  if (!vehiculo) {
    throw createError({ statusCode: 404, message: "Vehiculo no encontrado" });
  }

  if (vehiculo.fotoUrl) {
    const nombreArchivo = vehiculo.fotoUrl.replace('/uploads/', '');
    const rutaDestino = path.join(process.cwd(), 'app', 'public', 'uploads', nombreArchivo);
    
    if (fs.existsSync(rutaDestino)) {
      fs.unlinkSync(rutaDestino);
    }
  }

  await prisma.vehiculo.delete({ where: { id } });

  return { ok: true, message: "Vehiculo y foto eliminados correctamente" };
});