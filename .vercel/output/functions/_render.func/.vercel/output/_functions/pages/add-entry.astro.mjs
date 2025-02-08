import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_JvAZbl_W.mjs';
import 'kleur/colors';
import { d as db, E as Entry } from '../chunks/_astro_db_DN_Sa-JY.mjs';
import { $ as $$FormButton } from '../chunks/FormButton_gWVQJ1C8.mjs';
import { F as Form, $ as $$Input } from '../chunks/Form_BVTzm0As.mjs';
import { $ as $$Hero } from '../chunks/Hero_BPZCcWEx.mjs';
import { $ as $$Layout } from '../chunks/Layout_L9Zxeu4E.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$AddEntry = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AddEntry;
  const user = Astro2.locals.user;
  if (!user) {
    return Astro2.redirect("/signup");
  }
  const lastEntry = (await db.select().from(Entry).where(eq(Entry.userId, user.id))).at(-1);
  console.log(lastEntry);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "A\xF1adir entrada" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "id": "add-entry-form" }, { "default": ($$result3) => renderTemplate` <h1>Añadir entrada</h1> ${renderComponent($$result3, "Form", Form, { "action": "/api/entries", "method": "POST", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/rafa/Developer/ahorro-app/src/components/molecules/Form.vue", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Input", $$Input, { "type": "number", "id": "initialamount", "name": "initialamount", "label": "Cantidad inicial", "placeholder": "100,00", "required": true, "value": "" + lastEntry?.finalAmount, "min": 0, "step": 0.01 })} ${renderComponent($$result4, "Input", $$Input, { "type": "number", "id": "finalamount", "name": "finalamount", "label": "Cantidad final", "placeholder": "100,00", "required": true, "min": 0, "step": 0.01 })} ${renderComponent($$result4, "FormButton", $$FormButton, { "type": "submit", "color": "var(--white)", "bgColor": "var(--dark-spring-green)", "bgColorHover": "var(--dark-spring-green-light)" }, { "default": ($$result5) => renderTemplate`
Añadir entrada
` })} ` })} ` })} </main> ` })}`;
}, "C:/Users/rafa/Developer/ahorro-app/src/pages/add-entry.astro", void 0);

const $$file = "C:/Users/rafa/Developer/ahorro-app/src/pages/add-entry.astro";
const $$url = "/add-entry";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AddEntry,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
