import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_JvAZbl_W.mjs';
import 'kleur/colors';
import { d as db, U as User } from '../chunks/_astro_db_DN_Sa-JY.mjs';
import { $ as $$Button } from '../chunks/Button_BcXUxVEK.mjs';
import { $ as $$FormButton } from '../chunks/FormButton_gWVQJ1C8.mjs';
import { $ as $$Layout } from '../chunks/Layout_L9Zxeu4E.mjs';
import { $ as $$HeaderSection } from '../chunks/HeaderSection_BPy1n0en.mjs';
import { $ as $$Hero } from '../chunks/Hero_BPZCcWEx.mjs';
/* empty css                                   */
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Profile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Profile;
  const user = Astro2.locals.user;
  if (!user) {
    return Astro2.redirect("/signup");
  }
  console.log(user);
  const userData = (await db.select().from(User).where(eq(User.id, user.id))).at(
    0
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Perfil", "data-astro-cid-wwes6yjo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-wwes6yjo> ${renderComponent($$result2, "HeaderSection", $$HeaderSection, { "id": "header", "data-astro-cid-wwes6yjo": true }, { "default": ($$result3) => renderTemplate` <h1 data-astro-cid-wwes6yjo>Perfil</h1> <form action="/api/auth/signout" method="post" data-astro-cid-wwes6yjo> ${renderComponent($$result3, "FormButton", $$FormButton, { "type": "submit", "color": "var(--black)", "bgColor": "var(--gray-light)", "bgColorHover": "var(--gray-medium)", "data-astro-cid-wwes6yjo": true }, { "default": ($$result4) => renderTemplate`Cerrar sesión` })} </form> ` })} </header> <main data-astro-cid-wwes6yjo> ${renderComponent($$result2, "Hero", $$Hero, { "id": "user-info", "data-astro-cid-wwes6yjo": true }, { "default": ($$result3) => renderTemplate` <article data-astro-cid-wwes6yjo> <label data-astro-cid-wwes6yjo>Nombre <p data-astro-cid-wwes6yjo>${userData?.firstName}</p></label> <label data-astro-cid-wwes6yjo>Apellidos <p data-astro-cid-wwes6yjo>${userData?.lastName}</p></label> <label data-astro-cid-wwes6yjo>Email <p data-astro-cid-wwes6yjo>${userData?.email}</p></label> <label data-astro-cid-wwes6yjo>Nombre de usuario <p data-astro-cid-wwes6yjo>${userData?.username}</p></label> </article> <div data-astro-cid-wwes6yjo> ${renderComponent($$result3, "Button", $$Button, { "href": "/update-user", "color": "var(--white)", "bgColor": "var(--dark-spring-green)", "bgColorHover": "var(--dark-spring-green-light)", "data-astro-cid-wwes6yjo": true }, { "default": ($$result4) => renderTemplate`
Editar perfil
` })} ${renderComponent($$result3, "Button", $$Button, { "href": "/change-password", "color": "var(--white)", "bgColor": "var(--dark-spring-green)", "bgColorHover": "var(--dark-spring-green-light)", "data-astro-cid-wwes6yjo": true }, { "default": ($$result4) => renderTemplate`
Cambiar contraseña
` })} ${renderComponent($$result3, "Button", $$Button, { "href": "/delete-user", "color": "var(--white)", "bgColor": "var(--poppy)", "bgColorHover": "var(--poppy-light)", "data-astro-cid-wwes6yjo": true }, { "default": ($$result4) => renderTemplate`
Eliminar cuenta
` })} </div> ` })} </main> ` })} `;
}, "C:/Users/rafa/Developer/ahorro-app/src/pages/profile.astro", void 0);

const $$file = "C:/Users/rafa/Developer/ahorro-app/src/pages/profile.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profile,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
