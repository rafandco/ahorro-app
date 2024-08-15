import { generateId } from "lucia"
import { Argon2id } from "oslo/password"
import { db, eq, User } from "astro:db"
import { lucia } from "../../../auth"
import type { APIRoute } from "astro"

export const POST: APIRoute = async ({
  request,
  redirect,
  cookies,
}): Promise<Response> => {
  // Recoger datos del formulario de registro a partir de la petición
  const data = await request.formData()
  /* Recogemos del formulario todos los datos
     Recuerda que estos nombres deben coincidir con los atributos name de los inputs del formulario
    */
  const firstName = data.get("firstname")
  const lastName = data.get("lastname")
  const email = data.get("email")
  const username = data.get("username")
  const password = data.get("password")
  // Validar los datos
  /* En caso de que no introduzca los campos obligatorios, respondemos con error 400 error de cliente */
  if (!username || !email || !firstName || !lastName || !password) {
    return new Response(
      JSON.stringify({
        message: "Todos los campos son obligatorios",
      }),
      { status: 400 }
    )
  }
  /* En caso de que no introduzca nombre de tipo string o de longitud menor a 2 caracteres respondemos con error 400 error de cliente */
  if (typeof firstName !== "string" || firstName.length < 2) {
    return new Response(
      JSON.stringify({
        message: "El nombre debe contener al menos 2 caracteres",
      }),
      {
        status: 400,
      }
    )
  }
  /* En caso de que no introduzca apellidos de tipo string o de longitud menor a 2 caracteres respondemos con error 400 error de cliente */
  if (typeof lastName !== "string" || lastName.length < 2) {
    return new Response(
      JSON.stringify({
        message: "Los apellidos deben tener al menos 2 caracteres",
      }),
      {
        status: 400,
      }
    )
  }

  /* En caso de que no introduzca email de tipo string o que no cumpla con la regex para emails, respondemos con error 400 error de cliente */
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(
      JSON.stringify({
        message: "El email debe ser válido",
      }),
      {
        status: 400,
      }
    )
  }
  /* En caso de que se introduzca un email que ya está en uso responderemos con error 400 error de cliente */
  if (
    email ===
    (await db.select().from(User).where(eq(User.email, email))).at(0)?.email
  ) {
    return new Response(
      JSON.stringify({
        message: "El email ya está en uso",
      }),
      {
        status: 400,
      }
    )
  }
  /* En caso de que no introduzca usuario de tipo string o de longitud menor a 4 caracteres respondemos con error 400 error de cliente */
  if (typeof username !== "string" || username.length < 4) {
    return new Response(
      JSON.stringify({
        message: "El nombre de usuario debe tener al menos 4 caracteres",
      }),
      {
        status: 400,
      }
    )
  }
  /* En caso de que se introduzca un email que ya está en uso responderemos con error 400 error de cliente */
  if (
    username ===
    (await db.select().from(User).where(eq(User.username, username))).at(0)
      ?.username
  ) {
    return new Response(
      JSON.stringify({
        message: "El usuario ya está en uso",
      }),
      {
        status: 400,
      }
    )
  }
  /* En caso de que no introduzca contraseña de tipo string o de longitud menor a 8 caracteres respondemos con error 400 error de cliente */
  if (typeof password !== "string" || password.length < 8) {
    return new Response(
      JSON.stringify({
        message: "La contraseña debe tener al menos 8 caracteres",
      }),
      {
        status: 400,
      }
    )
  }
  // Añadir el usuario a la base de datos
  // Generamos el id del nuevo usuario
  const userId = generateId(15)
  // Encriptamos la contraseña para insertar el hash en la base de datos usando oslo
  const hashedPassword = await new Argon2id().hash(password)
  // Insertamos en db
  await db.insert(User).values([
    {
      id: userId,
      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: hashedPassword,
    },
  ])
  // Generamos la sesión correspondiente
  // Creamos la sesión
  const session = await lucia.createSession(userId, {})
  // Creamos la cookie de esa sesión
  const sessionCookie = lucia.createSessionCookie(session.id)
  // Añadimos la cookie al contexto del navegador
  cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
  // Redireccionamos al usuario registrado a la página principal
  return redirect("/dashboard", 303)
}
