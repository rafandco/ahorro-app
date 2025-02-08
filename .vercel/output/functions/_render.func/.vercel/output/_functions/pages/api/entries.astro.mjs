import { d as db, E as Entry } from '../../chunks/_astro_db_DN_Sa-JY.mjs';
import { generateId } from 'lucia';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

const GET = async ({ locals }) => {
  const user = locals.user;
  if (!user) {
    return new Response(
      JSON.stringify({
        message: "No autorizado"
      }),
      { status: 401 }
    );
  }
  const entries = await db.select().from(Entry).where(eq(Entry.userId, user.id));
  if (!entries) {
    return new Response(
      JSON.stringify({
        message: "No se encontraron entradas"
      }),
      { status: 404 }
    );
  }
  return new Response(JSON.stringify({ data: entries }), { status: 200 });
};
const POST = async ({
  request,
  locals,
  redirect
}) => {
  const user = locals.user;
  if (!user) {
    return new Response(
      JSON.stringify({
        message: "No autorizado"
      }),
      { status: 401 }
    );
  }
  const formData = await request.formData();
  const initialAmount = formData.get("initialamount");
  const finalAmount = formData.get("finalamount");
  if (!initialAmount || !finalAmount) {
    return new Response(
      JSON.stringify({
        message: "Todos los campos son requeridos"
      }),
      {
        status: 400
      }
    );
  }
  if (typeof initialAmount !== "string" || parseFloat(initialAmount) < 0) {
    return new Response(
      JSON.stringify({
        message: "Cantidad inicial  no válida"
      }),
      { status: 400 }
    );
  }
  if (typeof finalAmount !== "string" || parseFloat(finalAmount) < 0) {
    return new Response(
      JSON.stringify({
        message: "Cantidad final no válida"
      }),
      { status: 400 }
    );
  }
  const entryId = generateId(15);
  const initialAmountFloat = parseFloat(initialAmount);
  const finalAmountFloat = parseFloat(finalAmount);
  const cratedAt = new Date(Date.now());
  const userId = user.id;
  await db.insert(Entry).values([
    {
      id: entryId,
      initialAmount: initialAmountFloat,
      finalAmount: finalAmountFloat,
      createdAt: cratedAt,
      userId
    }
  ]);
  return redirect("/dashboard", 303);
};
const DELETE = async ({
  request,
  locals,
  redirect
}) => {
  const user = locals.user;
  if (!user) {
    return new Response(
      JSON.stringify({
        message: "No autorizado"
      }),
      { status: 401 }
    );
  }
  const formData = await request.formData();
  const entryId = formData.get("entryid");
  if (!entryId) {
    return new Response(
      JSON.stringify({
        message: "Entrada no encontrada"
      }),
      {
        status: 400
      }
    );
  }
  if (typeof entryId !== "string" || entryId.length < 15) {
    return new Response(
      JSON.stringify({
        message: "Entrada no válida"
      }),
      { status: 400 }
    );
  }
  await db.delete(Entry).where(eq(Entry.id, entryId));
  return redirect("/dashboard", 303);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
