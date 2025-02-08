import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_JvAZbl_W.mjs';
import 'kleur/colors';
import { $ as $$FormButton } from '../chunks/FormButton_gWVQJ1C8.mjs';
import { F as Form, $ as $$Input } from '../chunks/Form_BVTzm0As.mjs';
import { $ as $$Hero } from '../chunks/Hero_BPZCcWEx.mjs';
import { $ as $$Layout } from '../chunks/Layout_L9Zxeu4E.mjs';
export { renderers } from '../renderers.mjs';

const $$Signup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Registro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "id": "singup-form" }, { "default": ($$result3) => renderTemplate` <h1>Registrarse</h1> ${renderComponent($$result3, "Form", Form, { "action": "/api/auth/signup", "method": "POST", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/rafa/Developer/ahorro-app/src/components/molecules/Form.vue", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Input", $$Input, { "type": "text", "id": "firstname", "name": "firstname", "label": "Nombre", "placeholder": "Fernando...", "required": true, "minlength": 2 })} ${renderComponent($$result4, "Input", $$Input, { "type": "text", "id": "lastname", "name": "lastname", "label": "Apellidos", "placeholder": "Garc\xEDa Rodr\xEDguez...", "required": true, "minlength": 2 })} ${renderComponent($$result4, "Input", $$Input, { "type": "email", "id": "email", "name": "email", "label": "Correo electr\xF3nico", "placeholder": "fernando@gmail.com", "required": true })} ${renderComponent($$result4, "Input", $$Input, { "type": "text", "id": "username", "name": "username", "label": "Nombre de usuario", "placeholder": "fer07", "required": true })} ${renderComponent($$result4, "Input", $$Input, { "type": "password", "id": "password", "name": "password", "label": "Contrase\xF1a", "placeholder": "********", "required": true })} ${renderComponent($$result4, "FormButton", $$FormButton, { "type": "submit", "color": "var(--white)", "bgColor": "var(--dark-spring-green)", "bgColorHover": "var(--dark-spring-green-light)" }, { "default": ($$result5) => renderTemplate`
Registrarse
` })} ` })} ` })} </main> ` })}`;
}, "C:/Users/rafa/Developer/ahorro-app/src/pages/signup.astro", void 0);

const $$file = "C:/Users/rafa/Developer/ahorro-app/src/pages/signup.astro";
const $$url = "/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
