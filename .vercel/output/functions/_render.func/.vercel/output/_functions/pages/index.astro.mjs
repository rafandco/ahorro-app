import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_JvAZbl_W.mjs';
import 'kleur/colors';
import { $ as $$Button } from '../chunks/Button_BcXUxVEK.mjs';
import { $ as $$Hero } from '../chunks/Hero_BPZCcWEx.mjs';
import { $ as $$Layout } from '../chunks/Layout_L9Zxeu4E.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ahorro App - Tu app de ahorro", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "id": "Inicio", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <h1 class="display" data-astro-cid-j7pv25f6>Ahorro App</h1> <div data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Button", $$Button, { "href": "/signin", "color": "var(--white)", "bgColor": "var(--dark-spring-green)", "bgColorHover": "var(--dark-spring-green-light)", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`Iniciar sesión` })} ${renderComponent($$result3, "Button", $$Button, { "href": "/signup", "color": "var(--black)", "bgColor": "var(--gray-light)", "bgColorHover": "var(--gray-medium)", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`Registrarse` })} </div> ` })} </main> ` })} `;
}, "C:/Users/rafa/Developer/ahorro-app/src/pages/index.astro", void 0);

const $$file = "C:/Users/rafa/Developer/ahorro-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
