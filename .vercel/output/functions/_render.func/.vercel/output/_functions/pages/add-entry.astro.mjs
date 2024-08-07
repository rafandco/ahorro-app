import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BVqQ5TZh.mjs';
import 'kleur/colors';
import { $ as $$Form, a as $$Input, b as $$FormButton } from '../chunks/Form_ClJ76wnv.mjs';
import { $ as $$Hero } from '../chunks/Hero_CawdMTa2.mjs';
import { $ as $$Layout } from '../chunks/Layout_CxfuduNG.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$AddEntry = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AddEntry;
  const user = Astro2.locals.user;
  if (!user) {
    return Astro2.redirect("/singup");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "A\xF1adir entrada" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "id": "add-entry-form" }, { "default": ($$result3) => renderTemplate` <h1 class="display">Añadir entrada</h1> ${renderComponent($$result3, "Form", $$Form, { "action": "/api/entry/create", "method": "POST" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Input", $$Input, { "type": "number", "id": "initialamount", "name": "initialamount", "label": "Cantidad inicial", "placeholder": "100,00", "required": true, "min": 0, "step": 0.01 })} ${renderComponent($$result4, "Input", $$Input, { "type": "number", "id": "finalamount", "name": "finalamount", "label": "Cantidad final", "placeholder": "100,00", "required": true, "min": 0, "step": 0.01 })} ${renderComponent($$result4, "FormButton", $$FormButton, { "type": "submit" }, { "default": ($$result5) => renderTemplate`Añadir entrada` })} ` })} ` })} </main> ` })}`;
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
