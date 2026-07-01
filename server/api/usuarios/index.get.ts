import { prisma } from '../../utils/prisma';

export default defineEventHandler(async (event) => {
    const session = await requireUserSession(event);
    const perfil = (session.user as { perfil?: string }).perfil;
    if (perfil !== 'administrador') {
        throw createError({ statusCode: 403, message: "Funcionalidad exclusiva de administrador" });
    }

    const usuarios = await prisma.usuario.findMany({
        select: {
            id: true,
            rut: true,
            email: true,
            perfil: {
                select: { nombre: true }
            }
        }
    });

    return usuarios;
});
