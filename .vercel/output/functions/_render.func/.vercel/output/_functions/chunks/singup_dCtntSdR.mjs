import { generateId } from "lucia"
import { Argon2id } from "oslo/password"
import { d as db, U as User } from "./_astro_db_DY7iTdg9.mjs"
import { l as lucia } from "./auth_D83w-6tN.mjs"

async function POST(context) {
  const formData = await context.request.formData()
  const username = formData.get("username")
  const email = formData.get("email")
  const firstName = formData.get("firstname")
  const lastName = formData.get("lastname")
  const password = formData.get("password")
  if (!username || !email || !firstName || !lastName || !password) {
    return new Response(
      "First name, last name, username and password are required",
      { status: 400 }
    )
  }
  if (typeof username !== "string" || username.length < 4) {
    return new Response("Username must be at least 4 characters long", {
      status: 400
    })
  }
  if (typeof email !== "string" || !email.includes("@")) {
    return new Response("Email must contain @", {
      status: 400
    })
  }
  if (typeof firstName !== "string" || firstName.length < 2) {
    return new Response("First name must be at least 2 characters long", {
      status: 400
    })
  }
  if (typeof lastName !== "string" || lastName.length < 2) {
    return new Response("Last name must be at least 2 characters long", {
      status: 400
    })
  }
  if (typeof password !== "string" || password.length < 8) {
    return new Response("Password must be at least 8 characters long", {
      status: 400
    })
  }
  const userId = generateId(15)
  const hashedPassword = await new Argon2id().hash(password)
  await db.insert(User).values([
    {
      id: userId,
      username,
      email,
      firstName,
      lastName,
      password: hashedPassword
    }
  ])
  const session = await lucia.createSession(userId, {})
  const sessionCookie = lucia.createSessionCookie(session.id)
  context.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )
  return context.redirect("/dashboard")
}

export { POST }
