import { l as lucia } from '../../chunks/auth_N4u3ISEh.mjs';
export { renderers } from '../../renderers.mjs';

async function POST(context) {
  if (!context.locals.session) {
    return new Response(null, {
      status: 401
    });
  }
  await lucia.invalidateSession(context.locals.session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  context.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return context.redirect("/");
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
