import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BVqQ5TZh.mjs';
import 'kleur/colors';
import { $ as $$Form, a as $$Input, b as $$FormButton } from '../chunks/Form_ClJ76wnv.mjs';
import { $ as $$Hero } from '../chunks/Hero_CawdMTa2.mjs';
import { $ as $$Layout } from '../chunks/Layout_CxfuduNG.mjs';
export { renderers } from '../renderers.mjs';

const $$Singin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Iniciar sesi\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "id": "singin-form" }, { "default": ($$result3) => renderTemplate` <h1 class="display">Iniciar sesión</h1> ${renderComponent($$result3, "Form", $$Form, { "action": "/api/singin", "method": "POST" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Input", $$Input, { "type": "text", "id": "username", "name": "username", "label": "Nombre de usuario", "placeholder": "fer07", "required": true })} ${renderComponent($$result4, "Input", $$Input, { "type": "password", "id": "password", "name": "password", "label": "Contrase\xF1a", "placeholder": "********", "required": true })} ${renderComponent($$result4, "FormButton", $$FormButton, { "type": "submit" }, { "default": ($$result5) => renderTemplate`Iniciar sesión` })} ` })} ` })} </main> ` })}`;
}, "C:/Users/rafa/Developer/ahorro-app/src/pages/singin.astro", void 0);

const $$file = "C:/Users/rafa/Developer/ahorro-app/src/pages/singin.astro";
const $$url = "/singin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Singin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
