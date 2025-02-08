import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_JvAZbl_W.mjs';
import 'kleur/colors';
import { d as db, U as User } from '../chunks/_astro_db_DN_Sa-JY.mjs';
import { $ as $$FormButton } from '../chunks/FormButton_gWVQJ1C8.mjs';
import { F as Form, $ as $$Input } from '../chunks/Form_BVTzm0As.mjs';
import { $ as $$Hero } from '../chunks/Hero_BPZCcWEx.mjs';
import { $ as $$Layout } from '../chunks/Layout_L9Zxeu4E.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$UpdateUser = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UpdateUser;
  const user = Astro2.locals.user;
  if (!user) {
    return Astro2.redirect("/signup");
  }
  const userData = (await db.select().from(User).where(eq(User.id, user.id))).at(
    0
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Registro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "id": "update-user-form" }, { "default": ($$result3) => renderTemplate` <h1>Editar perfil</h1> ${renderComponent($$result3, "Form", Form, { "action": "/api/users", "method": "PUT", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/rafa/Developer/ahorro-app/src/components/molecules/Form.vue", "client:component-export": "default" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Input", $$Input, { "type": "text", "id": "firstname", "name": "firstname", "label": "Nombre", "value": userData?.firstName, "required": true, "minlength": 2 })} ${renderComponent($$result4, "Input", $$Input, { "type": "text", "id": "lastname", "name": "lastname", "label": "Apellidos", "value": userData?.lastName, "required": true, "minlength": 2 })} ${renderComponent($$result4, "Input", $$Input, { "type": "email", "id": "email", "name": "email", "label": "Correo electr\xF3nico", "value": userData?.email, "required": true })} ${renderComponent($$result4, "Input", $$Input, { "type": "text", "id": "username", "name": "username", "label": "Nombre de usuario", "value": userData?.username, "required": true })} ${renderComponent($$result4, "Input", $$Input, { "type": "password", "id": "password", "name": "password", "label": "Confirmar contrase\xF1a actual", "placeholder": "*******", "required": true })} ${renderComponent($$result4, "FormButton", $$FormButton, { "type": "submit", "color": "var(--white)", "bgColor": "var(--dark-spring-green)", "bgColorHover": "var(--dark-spring-green-light)" }, { "default": ($$result5) => renderTemplate`
Editar perfil
` })} ` })} ` })} </main> ` })}`;
}, "C:/Users/rafa/Developer/ahorro-app/src/pages/update-user.astro", void 0);

const $$file = "C:/Users/rafa/Developer/ahorro-app/src/pages/update-user.astro";
const $$url = "/update-user";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$UpdateUser,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
