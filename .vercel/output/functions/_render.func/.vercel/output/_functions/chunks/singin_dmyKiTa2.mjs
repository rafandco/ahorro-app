import { d as db, U as User } from "./_astro_db_DY7iTdg9.mjs"
import { Argon2id } from "oslo/password"
import { l as lucia } from "./auth_D83w-6tN.mjs"
import { eq } from "@astrojs/db/dist/runtime/virtual.js"

async function POST(context) {
  const formData = await context.request.formData()
  const username = formData.get("username")
  const password = formData.get("password")
  if (!username || !password) {
    return new Response("Username and password are required", { status: 400 })
  }
  if (typeof username !== "string") {
    return new Response("Invalid username", { status: 400 })
  }
  if (typeof password !== "string") {
    return new Response("Invalid password", { status: 400 })
  }
  const foundUser = (await db.select().from(User).where(eq(User.username, username))).at(0)
  if (!foundUser) {
    return new Response("Invalid username or password", { status: 400 })
  }
  const validPassword = await new Argon2id().verify(
    foundUser.password,
    password
  )
  if (!validPassword) {
    return new Response("Invalid username or password", { status: 400 })
  }
  const session = await lucia.createSession(foundUser.id, {})
  const sessionCookie = lucia.createSessionCookie(session.id)
  context.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )
  return context.redirect("/dashboard")
}

export { POST }
