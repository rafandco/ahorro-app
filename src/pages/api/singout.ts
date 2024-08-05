import { lucia } from "../../auth"
import type { APIContext } from "astro"

export async function POST(context: APIContext): Promise<Response> {
  // Comprobamos si hay una sesión y si no la hay devolvemos error 401
  if (!context.locals.session) {
    return new Response(null, {
      status: 401,
    })
  }
  // En caso de si existir la sesión, la invalidamos
  await lucia.invalidateSession(context.locals.session.id)
  // Y creamos una cookie de sesión vacía
  const sessionCookie = lucia.createBlankSessionCookie()
  context.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )
  // Redireccionamos a la página principal
  return context.redirect("/")
}
