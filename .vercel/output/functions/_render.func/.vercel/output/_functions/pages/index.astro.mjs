import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as createAstro, d as renderComponent } from '../chunks/astro/server_BVqQ5TZh.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { $ as $$SecondaryButton } from '../chunks/SecondaryButton_CbjyEi4q.mjs';
import { $ as $$Hero } from '../chunks/Hero_CawdMTa2.mjs';
import { $ as $$Layout } from '../chunks/Layout_CxfuduNG.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-3pspvxuc> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "C:/Users/rafa/Developer/ahorro-app/src/components/atoms/Button.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ahorro App - Tu app de ahorro", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "id": "Inicio", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <h1 class="display" data-astro-cid-j7pv25f6>Ahorro App</h1> <div data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Button", $$Button, { "href": "/singin", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`Iniciar sesión` })} ${renderComponent($$result3, "SecondaryButton", $$SecondaryButton, { "href": "/singup", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`Registrarse` })} </div> ` })} </main> ` })} `;
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
