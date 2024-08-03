import type { APIContext } from "astro"
import { generateId } from "lucia"
import { Argon2id } from "oslo/password"
import { db, User } from "astro:db"
import { lucia } from "../../auth"

export async function POST(context: APIContext): Promise<Response> {
  // Recoger datos del formulario de registro a partir del "context"
  const formData = await context.request.formData()
  /* Recogemos del formulario todos los datos
     Recuerda que estos nombres deben coincidir con los atributos name de los inputs del formulario
    */
  const username = formData.get("username")
  const email = formData.get("email")
  const firstName = formData.get("firstname")
  const lastName = formData.get("lastname")
  const password = formData.get("password")

  // Validar los datos
  /* En caso de que no introduzca los campos obligatorios, respondemos con error 400 error de cliente */
  if (!username || !email || !firstName || !lastName || !password) {
    return new Response(
      "First name, last name, username and password are required",
      { status: 400 }
    )
  }
  /* En caso de que no introduzca usuario de tipo string o de longitud menor a 4 caracteres respondemos con error 400 error de cliente */
  if (typeof username !== "string" || username.length < 4) {
    return new Response("Username must be at least 4 characters long", {
      status: 400,
    })
  }
  /* En caso de que no introduzca email de tipo string o que no contenga @ respondemos con error 400 error de cliente */
  if (typeof email !== "string" || !email.includes("@")) {
    return new Response("Email must contain @", {
      status: 400,
    })
  }
  /* En caso de que no introduzca nombre de tipo string o de longitud menor a 2 caracteres respondemos con error 400 error de cliente */
  if (typeof firstName !== "string" || firstName.length < 2) {
    return new Response("First name must be at least 2 characters long", {
      status: 400,
    })
  }
  /* En caso de que no introduzca apellidos de tipo string o de longitud menor a 2 caracteres respondemos con error 400 error de cliente */
  if (typeof lastName !== "string" || lastName.length < 2) {
    return new Response("Last name must be at least 2 characters long", {
      status: 400,
    })
  }
  /* En caso de que no introduzca contraseña de tipo string o de longitud menor a 8 caracteres respondemos con error 400 error de cliente */
  if (typeof password !== "string" || password.length < 8) {
    return new Response("Password must be at least 8 characters long", {
      status: 400,
    })
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
  const sessionCookie = await lucia.createSessionCookie(session.id)
  // Añadimos la cookie al contexto del navegador
  context.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )
  // Redireccionamos al usuario registrado a la página principal
  return context.redirect("/dashboard")
}