import { Argon2id } from 'oslo/password';
import { d as db, U as User, S as Session, E as Entry } from '../../chunks/_astro_db_DN_Sa-JY.mjs';
import { eq, and, ne } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

const GET = async ({ locals }) => {
  const user = locals.user;
  if (!user) {
    console.log("No autorizado");
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
      { status: 404 }
    );
  }
  return new Response(
    JSON.stringify({
      id: foundUser.id,
      username: foundUser.username,
      email: foundUser.email,
      firstName: foundUser.firstName,
      lastName: foundUser.lastName
    }),
    { status: 200 }
  );
};
const PUT = async ({
  request,
  locals,
  redirect
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
  const username = formData.get("username");
  const email = formData.get("email");
  const firstName = formData.get("firstname");
  const lastName = formData.get("lastname");
  const password = formData.get("password");
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
  if (email === (await db.select().from(User).where(and(ne(User.id, user.id), eq(User.email, email)))).at(0)?.email) {
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
  if (username === (await db.select().from(User).where(and(ne(User.id, user.id), eq(User.username, username)))).at(0)?.username) {
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
  const validPassword = await new Argon2id().verify(
    foundUser.password,
    password
  );
  if (!validPassword) {
    return new Response(
      JSON.stringify({
        message: "Confirmación de contraseña incorrecta"
      }),
      { status: 400 }
    );
  }
  await db.update(User).set({
    id: user.id,
    username,
    email,
    firstName,
    lastName
  }).where(eq(User.id, user.id));
  return redirect("/profile", 303);
};
const DELETE = async ({
  request,
  locals,
  redirect
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
  const formData = await request.formData();
  const password = formData.get("password");
  if (!password) {
    return new Response(
      JSON.stringify({
        message: "La constaseña es obligatoria"
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
  const foundUser = (await db.select().from(User).where(eq(User.id, user.id))).at(0);
  if (!foundUser) {
    return new Response(
      JSON.stringify({
        message: "Usuario no encontrado"
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
        message: "Contraseña incorrecta"
      }),
      { status: 400 }
    );
  }
  await db.delete(Session).where(eq(Session.userId, user.id));
  await db.delete(Entry).where(eq(Entry.userId, user.id));
  await db.delete(User).where(eq(User.id, user.id));
  return redirect("/", 303);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
