import { l as lucia } from "./auth_D83w-6tN.mjs"

async function POST(context) {
  if (!context.locals.session) {
    return new Response(null, {
      status: 401
    })
  }
  await lucia.invalidateSession(context.locals.session.id)
  const sessionCookie = lucia.createBlankSessionCookie()
  context.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )
  return context.redirect("/")
}

export { POST }
