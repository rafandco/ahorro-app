import type { APIRoute } from "astro"
import { db, eq, User } from "astro:db"
import { Argon2id } from "oslo/password"
import { lucia } from "../../auth"

export const POST: APIRoute = async ({
  request,
  redirect,
  cookies,
}): Promise<Response> => {
  // Recoger datos del formulario de inicio de sesión a partir del "context"
  const formData = await request.formData()
  /* Recogemos del formulario todos los datos
     Recuerda que estos nombres deben coincidir con los atributos name de los inputs del formulario
    */
  const username = formData.get("username")
  const password = formData.get("password")

  // Validar los datos
  /* En caso de que no introduzca los campos obligatorios, respondemos con error 400 error de cliente */
  if (!username || !password) {
    return new Response(
      JSON.stringify({
        message: "Todos los campos son obligatorios",
      }),
      { status: 400 }
    )
  }
  /* En caso de que no introduzca usuario de tipo string respondemos con error 400 error de cliente */
  if (typeof username !== "string") {
    return new Response(
      JSON.stringify({
        message: "Usuario inválido",
      }),
      { status: 400 }
    )
  }
  /* En caso de que no introduzca contraseña de tipo string respondemos con error 400 error de cliente */
  if (typeof password !== "string") {
    return new Response(
      JSON.stringify({
        message: "Contraseña inválida",
      }),
      { status: 400 }
    )
  }
  // Buscar el usuario en la base de datos
  /* Si hemos indicado que el username en la base de datos es un campo único nos devolverá un 
    array con 1 usuario. Por ello le haremos el .at(0), aunque solo haya 1 */
  const foundUser = (
    await db.select().from(User).where(eq(User.username, username))
  ).at(0)
  //Si no encontramos a ningún usuario en la base de datos
  if (!foundUser) {
    return new Response(
      JSON.stringify({
        message: "Usuario o contraseña incorrectos",
      }),
      { status: 400 }
    )
  }

  // Verificar que el usuario tiene contraseña en caso de ofrecer otros medios de iniciar sesión, como Google o Github
  /* if(!foundUser.password){
        return new Response("Invalid password", { status: 400 })
    } */

  // Verificar la contraseña
  //Creamos una variable booleana que verifique la contraseña
  const validPassword = await new Argon2id().verify(
    foundUser.password,
    password
  )
  // Si la verificación de la contraseña es errónea, devolvemos error
  if (!validPassword) {
    return new Response(
      JSON.stringify({
        message: "Usuario o contraseña incorrectos",
      }),
      { status: 400 }
    )
  }
  // Si la verificación de la contraseña es correcta, generamos la sesión
  // Creamos la sesión
  const session = await lucia.createSession(foundUser.id, {})
  // Creamos la cookie de esa sesión
  const sessionCookie = lucia.createSessionCookie(session.id)
  // Añadimos la cookie al contexto del navegador
  cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
  return redirect("/dashboard", 303)
}
