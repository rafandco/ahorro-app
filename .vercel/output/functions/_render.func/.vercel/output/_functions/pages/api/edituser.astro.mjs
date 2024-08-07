import 'lucia';
import { Argon2id } from 'oslo/password';
import { d as db, U as User } from '../../chunks/_astro_db_DN_Sa-JY.mjs';
import '../../chunks/auth_N4u3ISEh.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

async function POST(context) {
  const user = context.locals.user;
  if (!user) {
    return new Response(null, { status: 401 });
  }
  const formData = await context.request.formData();
  const username = formData.get("username");
  const email = formData.get("email");
  const firstName = formData.get("firstname");
  const lastName = formData.get("lastname");
  const password = formData.get("password");
  if (!username || !email || !firstName || !lastName || !password) {
    return new Response(
      "First name, last name, username and password are required",
      { status: 400 }
    );
  }
  if (typeof username !== "string" || username.length < 4) {
    return new Response("Username must be at least 4 characters long", {
      status: 400
    });
  }
  if (typeof email !== "string" || !email.includes("@")) {
    return new Response("Email must contain @", {
      status: 400
    });
  }
  if (typeof firstName !== "string" || firstName.length < 2) {
    return new Response("First name must be at least 2 characters long", {
      status: 400
    });
  }
  if (typeof lastName !== "string" || lastName.length < 2) {
    return new Response("Last name must be at least 2 characters long", {
      status: 400
    });
  }
  if (typeof password !== "string" || password.length < 8) {
    return new Response("Password must be at least 8 characters long", {
      status: 400
    });
  }
  const hashedPassword = await new Argon2id().hash(password);
  await db.update(User).set({
    id: user.id,
    username,
    email,
    firstName,
    lastName,
    password: hashedPassword
  }).where(eq(User.id, user.id));
  return context.redirect("/dashboard");
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
