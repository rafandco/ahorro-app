import type { APIRoute } from "astro"
import { Argon2id } from "oslo/password"
import { db, eq, ne, and, User } from "astro:db"

// TODO: Crear GET: APIRoute

export const PUT: APIRoute = async ({
  request,
  locals,
  redirect,
}): Promise<Response> => {
  // Almacenamos el usuario de la sesión actual
  const user = locals.user
  // En caso de no existir usuario autenticado, redireccionamos a la página de registro
  if (!user) {
    return new Response(null, { status: 401 })
  }
  // Buscar el usuario en la base de datos
  /* Si hemos indicado que el username en la base de datos es un campo único nos devolverá un 
    array con 1 usuario. Por ello le haremos el .at(0), aunque solo haya 1 */
  const foundUser = (
    await db.select().from(User).where(eq(User.id, user.id))
  ).at(0)
  //Si no encontramos a ningún usuario en la base de datos
  if (!foundUser) {
    return new Response(
      JSON.stringify({
        message: "Usuario no encontrado",
      }),
      { status: 400 }
    )
  }
  // Recoger datos del formulario de registro a partir del "context"
  const formData = await request.formData()
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
  /* En caso de que no introduzca email de tipo string o que no contenga @ respondemos con error 400 error de cliente */
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
    (
      await db
        .select()
        .from(User)
        .where(and(ne(User.id, user.id), eq(User.email, email)))
    ).at(0)?.email
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
    (
      await db
        .select()
        .from(User)
        .where(and(ne(User.id, user.id), eq(User.username, username)))
    ).at(0)?.username
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
        message: "Confirmación de contraseña incorrecta",
      }),
      { status: 400 }
    )
  }

  // Insertamos en db
  await db
    .update(User)
    .set({
      id: user.id,
      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
    })
    .where(eq(User.id, user.id))
  // Redireccionamos al usuario registrado a la página principal
  return redirect("/dashboard", 303)
}