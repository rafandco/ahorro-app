import { lucia } from "../../auth"
import type { APIRoute } from "astro"

export const POST: APIRoute = async ({
  locals,
  redirect,
  cookies,
}): Promise<Response> => {
  // Comprobamos si hay una sesión y si no la hay devolvemos error 401
  if (!locals.session) {
    return new Response(
      JSON.stringify({
        message: "No autorizado",
      }),
      { status: 401 }
    )
  }
  // En caso de si existir la sesión, la invalidamos
  await lucia.invalidateSession(locals.session.id)
  // Y creamos una cookie de sesión vacía
  const sessionCookie = lucia.createBlankSessionCookie()
  cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
  // Redireccionamos a la página principal
  return redirect("/", 303)
}
