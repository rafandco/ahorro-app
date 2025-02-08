import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_JvAZbl_W.mjs';
import 'kleur/colors';
import { $ as $$FormButton } from '../chunks/FormButton_gWVQJ1C8.mjs';
import { F as Form, $ as $$Input } from '../chunks/Form_BVTzm0As.mjs';
import { $ as $$Hero } from '../chunks/Hero_BPZCcWEx.mjs';
import { $ as $$Layout } from '../chunks/Layout_L9Zxeu4E.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$DeleteUser = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DeleteUser;
  const user = Astro2.locals.user;
  if (!user) {
    return Astro2.redirect("/signup");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Registro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "id": "delete-user-form" }, { "default": ($$result3) => renderTemplate` <h1>Eliminar cuenta</h1> ${renderComponent($$result3, "Form", Form, { "action": "/api/users", "method": "DELETE", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/rafa/Developer/ahorro-app/src/components/molecules/Form.vue", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Input", $$Input, { "type": "password", "id": "password", "name": "password", "label": "Confirmar contrase\xF1a actual", "placeholder": "*******", "required": true })} ${renderComponent($$result4, "FormButton", $$FormButton, { "type": "submit", "color": "var(--white)", "bgColor": "var(--poppy)", "bgColorHover": "var(--poppy-light)" }, { "default": ($$result5) => renderTemplate`Eliminar cuenta` })} ` })} ` })} </main> ` })}`;
}, "C:/Users/rafa/Developer/ahorro-app/src/pages/delete-user.astro", void 0);

const $$file = "C:/Users/rafa/Developer/ahorro-app/src/pages/delete-user.astro";
const $$url = "/delete-user";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DeleteUser,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
