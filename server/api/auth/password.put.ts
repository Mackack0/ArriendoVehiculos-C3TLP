import bcrypt from "bcryptjs";
import { prisma } from '../../utils/prisma';

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);
  const body = await readBody(event);

  if (!body.password) {
    throw createError({ statusCode: 400, message: "La nueva contraseña es obligatoria" });
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  await prisma.usuario.update({
    where: { id: (session.user as any).id },
    data: { password: hashedPassword }
  });

  return { ok: true, message: "Contraseña actualizada con éxito" };
});