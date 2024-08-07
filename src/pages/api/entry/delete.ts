import type { APIContext } from "astro"
import { db, Entry, eq } from "astro:db"
import { generateId } from "lucia"

export async function POST(context: APIContext): Promise<Response> {
  // Recoger datos del formulario de añadir entrada a partir del "context"
  const formData = await context.request.formData()
  /* Recogemos del formulario todos los datos
     Recuerda que estos nombres deben coincidir con los atributos name de los inputs del formulario
    */
  const entryId = formData.get("entryid")

  // Validar los datos
  if (!entryId) {
    return new Response("This entry does not exist", {
      status: 400,
    })
  }
  if (typeof entryId !== "string" || entryId.length < 15) {
    return new Response("Invalid  initial amount", { status: 400 })
  }

  // Eliminamos la entrada de la base de datos
  await db.delete(Entry).where(eq(Entry.id, entryId))

  return context.redirect("/dashboard")
}
