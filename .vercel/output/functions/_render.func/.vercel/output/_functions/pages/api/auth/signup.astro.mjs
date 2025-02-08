import { generateId } from 'lucia';
import { Argon2id } from 'oslo/password';
import { d as db, U as User } from '../../../chunks/_astro_db_DN_Sa-JY.mjs';
import { l as lucia } from '../../../chunks/auth_N4u3ISEh.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../../renderers.mjs';

const POST = async ({
  request,
  redirect,
  cookies
}) => {
  const data = await request.formData();
  const firstName = data.get("firstname");
  const lastName = data.get("lastname");
  const email = data.get("email");
  const username = data.get("username");
  const password = data.get("password");
  if (!username || !email || !firstName || !lastName || !password) {
    return new Response(
      JSON.stringify({
        message: "Todos los campos son obligatorios"
      }),
      { status: 400 }
    );
  }
  if (typeof firstName !== "string" || firstName.length < 2) {
    return new Response(
      JSON.stringify({
        message: "El nombre debe contener al menos 2 caracteres"
      }),
      {
        status: 400
      }
    );
  }
  if (typeof lastName !== "string" || lastName.length < 2) {
    return new Response(
      JSON.stringify({
        message: "Los apellidos deben tener al menos 2 caracteres"
      }),
      {
        status: 400
      }
    );
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(
      JSON.stringify({
        message: "El email debe ser válido"
      }),
      {
        status: 400
      }
    );
  }
  if (email === (await db.select().from(User).where(eq(User.email, email))).at(0)?.email) {
    return new Response(
      JSON.stringify({
        message: "El email ya está en uso"
      }),
      {
        status: 400
      }
    );
  }
  if (typeof username !== "string" || username.length < 4) {
    return new Response(
      JSON.stringify({
        message: "El nombre de usuario debe tener al menos 4 caracteres"
      }),
      {
        status: 400
      }
    );
  }
  if (username === (await db.select().from(User).where(eq(User.username, username))).at(0)?.username) {
    return new Response(
      JSON.stringify({
        message: "El usuario ya está en uso"
      }),
      {
        status: 400
      }
    );
  }
  if (typeof password !== "string" || password.length < 8) {
    return new Response(
      JSON.stringify({
        message: "La contraseña debe tener al menos 8 caracteres"
      }),
      {
        status: 400
      }
    );
  }
  const userId = generateId(15);
  const hashedPassword = await new Argon2id().hash(password);
  await db.insert(User).values([
    {
      id: userId,
      username,
      email,
      firstName,
      lastName,
      password: hashedPassword
    }
  ]);
  const session = await lucia.createSession(userId, {});
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
