import type { APIRoute } from "astro"
import { db, Entry, eq } from "astro:db"
import { generateId } from "lucia"

export const GET: APIRoute = async ({ locals }): Promise<Response> => {
  const user = locals.user
  if (!user) {
    return new Response(
      JSON.stringify({
        message: "No autorizado",
      }),
      { status: 401 }
    )
  }
  const entries = await db.select().from(Entry).where(eq(Entry.userId, user.id))
  if (!entries) {
    return new Response(
      JSON.stringify({
        message: "No se encontraron entradas",
      }),
      { status: 404 }
    )
  }

  return new Response(JSON.stringify({ data: entries }), { status: 200 })
}

export const POST: APIRoute = async ({
  request,
  locals,
  redirect,
}): Promise<Response> => {
  // Comprobamos la autenticación del usuario
  const user = locals.user
  if (!user) {
    return new Response(
      JSON.stringify({
        message: "No autorizado",
      }),
      { status: 401 }
    )
  }
  // Recoger datos del formulario de añadir entrada a partir del "context"
  const formData = await request.formData()
  /* Recogemos del formulario todos los datos
     Recuerda que estos nombres deben coincidir con los atributos name de los inputs del formulario
    */
  const initialAmount = formData.get("initialamount")
  const finalAmount = formData.get("finalamount")

  // Validar los datos
  if (!initialAmount || !finalAmount) {
    return new Response(
      JSON.stringify({
        message: "Todos los campos son requeridos",
      }),
      {
        status: 400,
      }
    )
  }
  if (typeof initialAmount !== "string" || parseFloat(initialAmount) < 0) {
    return new Response(
      JSON.stringify({
        message: "Cantidad inicial  no válida",
      }),
      { status: 400 }
    )
  }
  if (typeof finalAmount !== "string" || parseFloat(finalAmount) < 0) {
    return new Response(
      JSON.stringify({
        message: "Cantidad final no válida",
      }),
      { status: 400 }
    )
  }
  // Añadir la entrada a la base de datos
  // Generamos y adaptamos los campos necesarios que no son introducidos en el formulario
  const entryId = generateId(15)
  const initialAmountFloat = parseFloat(initialAmount)
  const finalAmountFloat = parseFloat(finalAmount)
  const cratedAt = new Date(Date.now())
  const userId = user.id
  // Insertamos en la base de datos
  await db.insert(Entry).values([
    {
      id: entryId,
      initialAmount: initialAmountFloat,
      finalAmount: finalAmountFloat,
      createdAt: cratedAt,
      userId: userId,
    },
  ])

  return redirect("/dashboard", 303)
}

export const DELETE: APIRoute = async ({
  request,
  locals,
  redirect,
}): Promise<Response> => {
  // Almacenamos el usuario de la sesión actual
  const user = locals.user
  if (!user) {
    return new Response(
      JSON.stringify({
        message: "No autorizado",
      }),
      { status: 401 }
    )
  }
  // Recoger datos del formulario de añadir entrada a partir del "context"
  const formData = await request.formData()
  /* Recogemos del formulario todos los datos
     Recuerda que estos nombres deben coincidir con los atributos name de los inputs del formulario
    */
  const entryId = formData.get("entryid")

  // Validar los datos
  if (!entryId) {
    return new Response(
      JSON.stringify({
        message: "Entrada no encontrada",
      }),
      {
        status: 400,
      }
    )
  }
  if (typeof entryId !== "string" || entryId.length < 15) {
    return new Response(
      JSON.stringify({
        message: "Entrada no válida",
      }),
      { status: 400 }
    )
  }

  // Eliminamos la entrada de la base de datos
  await db.delete(Entry).where(eq(Entry.id, entryId))

  return redirect("/dashboard", 303)
}
