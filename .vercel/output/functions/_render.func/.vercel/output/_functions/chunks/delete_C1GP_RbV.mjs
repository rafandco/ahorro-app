import { d as db, E as Entry } from "./_astro_db_DY7iTdg9.mjs"
import "lucia"
import { eq } from "@astrojs/db/dist/runtime/virtual.js"

async function POST(context) {
  const formData = await context.request.formData()
  const entryId = formData.get("entryid")
  if (!entryId) {
    return new Response("This entry does not exist", {
      status: 400
    })
  }
  if (typeof entryId !== "string" || entryId.length < 15) {
    return new Response("Invalid  initial amount", { status: 400 })
  }
  await db.delete(Entry).where(eq(Entry.id, entryId))
  return context.redirect("/dashboard")
}

export { POST }
