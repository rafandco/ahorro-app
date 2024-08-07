import { d as db, E as Entry } from "./_astro_db_DY7iTdg9.mjs"
import { generateId } from "lucia"

async function POST(context) {
  const formData = await context.request.formData()
  const initialAmount = formData.get("initialamount")
  const finalAmount = formData.get("finalamount")
  if (!initialAmount || !finalAmount) {
    return new Response("Date and amounts are required", {
      status: 400
    })
  }
  if (typeof initialAmount !== "string" || parseFloat(initialAmount) < 0) {
    return new Response("Invalid  initial amount", { status: 400 })
  }
  if (typeof finalAmount !== "string" || parseFloat(finalAmount) < 0) {
    return new Response("Invalid final amount", { status: 400 })
  }
  if (parseFloat(finalAmount) - parseFloat(initialAmount) === 0) {
    return new Response("Amounts must be different", { status: 400 })
  }
  const user = context.locals.user
  if (!user) {
    return new Response("Unauthorized", { status: 401 })
  }
  const entryId = generateId(15)
  const initialAmountFloat = parseFloat(initialAmount)
  const finalAmountFloat = parseFloat(finalAmount)
  const cratedAt = new Date(Date.now())
  const userId = user.id
  await db.insert(Entry).values([
    {
      id: entryId,
      initialAmount: initialAmountFloat,
      finalAmount: finalAmountFloat,
      createdAt: cratedAt,
      userId
    }
  ])
  return context.redirect("/dashboard")
}

export { POST }
