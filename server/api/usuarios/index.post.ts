import bcrypt from "bcryptjs";
import { prisma } from "../../utils/prisma";

export default defineEventHandler(async (event) => {
    const session = await requireUserSession(event);
    const perfil = (session.user as { perfil?: string }).perfil;
    if (perfil !== 'administrador') {
        throw createError({ statusCode: 403, message: "Funcionalidad exclusiva de administrador" });
    }

    const body = await readBody(event);

    const passwdHash = await bcrypt.hash(body.password, 10);

    const nuevoUsuario = await prisma.usuario.create({
        data: {
            rut: body.rut,
            email: body.email,
            password: passwdHash,
            perfilId: body.perfilId
        }
    });

    return { success: true, usuario: { id: nuevoUsuario.id, email: nuevoUsuario.email } };
});