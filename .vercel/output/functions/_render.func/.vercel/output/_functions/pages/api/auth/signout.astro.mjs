import { l as lucia } from '../../../chunks/auth_N4u3ISEh.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({
  locals,
  redirect,
  cookies
}) => {
  if (!locals.session) {
    return new Response(
      JSON.stringify({
        message: "No autorizado"
      }),
      { status: 401 }
    );
  }
  await lucia.invalidateSession(locals.session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return redirect("/", 303);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
