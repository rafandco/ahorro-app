import { d as db, U as User } from '../../../chunks/_astro_db_DN_Sa-JY.mjs';
import { Argon2id } from 'oslo/password';
import { l as lucia } from '../../../chunks/auth_N4u3ISEh.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../../renderers.mjs';

const POST = async ({
  request,
  redirect,
  cookies
}) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  if (!username || !password) {
    return new Response(
      JSON.stringify({
        message: "Todos los campos son obligatorios"
      }),
      { status: 400 }
    );
  }
  if (typeof username !== "string") {
    return new Response(
      JSON.stringify({
        message: "Usuario inválido"
      }),
      { status: 400 }
    );
  }
  if (typeof password !== "string") {
    return new Response(
      JSON.stringify({
        message: "Contraseña inválida"
      }),
      { status: 400 }
    );
  }
  const foundUser = (await db.select().from(User).where(eq(User.username, username))).at(0);
  if (!foundUser) {
    return new Response(
      JSON.stringify({
        message: "Usuario o contraseña incorrectos"
      }),
      { status: 400 }
    );
  }
  const validPassword = await new Argon2id().verify(
    foundUser.password,
    password
  );
  if (!validPassword) {
    return new Response(
      JSON.stringify({
        message: "Usuario o contraseña incorrectos"
      }),
      { status: 400 }
    );
  }
  const session = await lucia.createSession(foundUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return redirect("/dashboard", 303);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
