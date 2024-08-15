import { db, eq, User } from "astro:db"
import { Argon2id } from "oslo/password"
import type { APIRoute } from "astro"

export const PUT: APIRoute = async ({
  request,
  redirect,
  locals,
}): Promise<Response> => {
  // Almacenamos el usuario de la sesión actual
  const user = locals.user

  // En caso de no existir usuario autenticado, redireccionamos a la página de login
  if (!user) {
    return new Response(
      JSON.stringify({
        message: "No autorizado",
      }),
      { status: 401 }
    )
  }

  // Buscar el usuario en la base de datos
  const foundUser = (
    await db.select().from(User).where(eq(User.id, user.id))
  ).at(0)

  // Si no encontramos al usuario en la base de datos
  if (!foundUser) {
    return new Response(
      JSON.stringify({
        message: "Usuario no encontrado",
      }),
      { status: 400 }
    )
  }

  // Recoger los datos del formulario
  const formData = await request.formData()
  const currentPassword = formData.get("currentPassword")
  const newPassword = formData.get("newPassword")

  // Validar que ambos campos están presentes
  if (!currentPassword || !newPassword) {
    return new Response(
      JSON.stringify({
        message: "Ambos campos son obligatorios",
      }),
      { status: 400 }
    )
  }

  // Validar la longitud de la contraseña actual
  if (typeof currentPassword !== "string" || currentPassword.length < 8) {
    return new Response(
      JSON.stringify({
        message: "La contraseña actual debe tener al menos 8 caracteres",
      }),
      { status: 400 }
    )
  }

  // Validar la longitud de la nueva contraseña
  if (typeof newPassword !== "string" || newPassword.length < 8) {
    return new Response(
      JSON.stringify({
        message: "La nueva contraseña debe tener al menos 8 caracteres",
      }),
      { status: 400 }
    )
  }

  // Verificar la contraseña
  //Creamos una variable booleana que verifique la contraseña
  const validPassword = await new Argon2id().verify(
    foundUser.password,
    currentPassword
  )
  // Si la verificación de la contraseña es errónea, devolvemos error
  if (!validPassword) {
    return new Response(
      JSON.stringify({
        message: "Contraseña actual incorrectos",
      }),
      { status: 400 }
    )
  }
  // Encriptar y actualizar la nueva contraseña
  const hashedNewPassword = await new Argon2id().hash(newPassword)
  await db
    .update(User)
    .set({ password: hashedNewPassword })
    .where(eq(User.id, user.id))

  // Respuesta de éxito
  return redirect("/profile", 303)
}
