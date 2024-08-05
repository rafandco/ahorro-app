import type { APIContext } from "astro"
import { db, Entry } from "astro:db"
import { generateId } from "lucia"

export async function POST(context: APIContext): Promise<Response> {
  // Recoger datos del formulario de añadir entrada a partir del "context"
  const formData = await context.request.formData()
  /* Recogemos del formulario todos los datos
     Recuerda que estos nombres deben coincidir con los atributos name de los inputs del formulario
    */
  const initialAmount = formData.get("initialamount")
  const finalAmount = formData.get("finalamount")

  // Validar los datos
  if (!initialAmount || !finalAmount) {
    return new Response("Date and amounts are required", {
      status: 400,
    })
  }
  if (typeof initialAmount !== "string" || parseFloat(initialAmount) < 0) {
    return new Response("Invalid  initial amount", { status: 400 })
  }
  if (typeof finalAmount !== "string" || parseFloat(finalAmount) < 0) {
    return new Response("Invalid final amount", { status: 400 })
  }

  // Comprobamos la autenticación del usuario
  const user = context.locals.user
  if (!user) {
    return new Response("Unauthorized", { status: 401 })
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

  return context.redirect("/dashboard")
}
