import { d as db, U as User } from '../../../chunks/_astro_db_DN_Sa-JY.mjs';
import { Argon2id } from 'oslo/password';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../../renderers.mjs';

const PUT = async ({
  request,
  redirect,
  locals
}) => {
  const user = locals.user;
  if (!user) {
    return new Response(
      JSON.stringify({
        message: "No autorizado"
      }),
      { status: 401 }
    );
  }
  const foundUser = (await db.select().from(User).where(eq(User.id, user.id))).at(0);
  if (!foundUser) {
    return new Response(
      JSON.stringify({
        message: "Usuario no encontrado"
      }),
      { status: 400 }
    );
  }
  const formData = await request.formData();
  const currentPassword = formData.get("currentPassword");
  const newPassword = formData.get("newPassword");
  if (!currentPassword || !newPassword) {
    return new Response(
      JSON.stringify({
        message: "Ambos campos son obligatorios"
      }),
      { status: 400 }
    );
  }
  if (typeof currentPassword !== "string" || currentPassword.length < 8) {
    return new Response(
      JSON.stringify({
        message: "La contraseña actual debe tener al menos 8 caracteres"
      }),
      { status: 400 }
    );
  }
  if (typeof newPassword !== "string" || newPassword.length < 8) {
    return new Response(
      JSON.stringify({
        message: "La nueva contraseña debe tener al menos 8 caracteres"
      }),
      { status: 400 }
    );
  }
  const validPassword = await new Argon2id().verify(
    foundUser.password,
    currentPassword
  );
  if (!validPassword) {
    return new Response(
      JSON.stringify({
        message: "Contraseña actual incorrectos"
      }),
      { status: 400 }
    );
  }
  const hashedNewPassword = await new Argon2id().hash(newPassword);
  await db.update(User).set({ password: hashedNewPassword }).where(eq(User.id, user.id));
  return redirect("/profile", 303);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
