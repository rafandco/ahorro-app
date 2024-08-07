import { k as createComponent, l as renderTemplate, m as maybeRenderHead, n as addAttribute, q as renderSlot, o as createAstro, p as renderComponent } from "./astro/server_B4Rl0Gpj.mjs"
import "kleur/colors"
import "html-escaper"
import { d as db, U as User } from "./_astro_db_DY7iTdg9.mjs"
import { $ as $$Form, a as $$Input, b as $$FormButton } from "./Form_BMwlRAcE.mjs"
import { $ as $$Hero } from "./Hero_DjGCXqCS.mjs"
import { $ as $$Layout } from "./Layout_1Jj4l3mg.mjs"
import "clsx"
/* empty css                               */
import { eq } from "@astrojs/db/dist/runtime/virtual.js"

const $$Astro$1 = createAstro()
const $$RedFormButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots)
  Astro2.self = $$RedFormButton
  const { type } = Astro2.props
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")} data-astro-cid-7akuo3ib>${renderSlot($$result, $$slots["default"])}</button> `
}, "C:/Users/rafa/Developer/ahorro-app/src/components/atoms/RedFormButton.astro", void 0)

const $$Astro = createAstro()
const $$UpdateUser = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
  Astro2.self = $$UpdateUser
  const user = Astro2.locals.user
  if (!user) {
    return Astro2.redirect("/singup")
  }
  const userData = (await db.select().from(User).where(eq(User.id, user.id))).at(
    0
  )
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Registro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "id": "singup-form" }, { "default": ($$result3) => renderTemplate` <h1 class="display">Editar perfil</h1> ${renderComponent($$result3, "Form", $$Form, { "action": "/api/edituser", "method": "POST" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Input", $$Input, { "type": "text", "id": "firstname", "name": "firstname", "label": "Nombre", "value": userData?.firstName, "required": true, "minlength": 2 })} ${renderComponent($$result4, "Input", $$Input, { "type": "text", "id": "lastname", "name": "lastname", "label": "Apellidos", "value": userData?.lastName, "required": true, "minlength": 2 })} ${renderComponent($$result4, "Input", $$Input, { "type": "email", "id": "email", "name": "email", "label": "Correo electr\xF3nico", "value": userData?.email, "required": true })} ${renderComponent($$result4, "Input", $$Input, { "type": "text", "id": "username", "name": "username", "label": "Nombre de usuario", "value": userData?.username, "required": true })} ${renderComponent($$result4, "Input", $$Input, { "type": "password", "id": "password", "name": "password", "label": "Contrase\xF1a *", "placeholder": "*******", "required": true })} <p class="caption">
* Introduce tu nueva contraseña o la contraseña actual si no quieres
          cambiarla.
</p> ${renderComponent($$result4, "FormButton", $$FormButton, { "type": "submit" }, { "default": ($$result5) => renderTemplate`Editar perfil` })} ` })} ${renderComponent($$result3, "Form", $$Form, { "action": "/api/singout", "method": "post" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "RedFormButton", $$RedFormButton, { "type": "submit" }, { "default": ($$result5) => renderTemplate`Cerrar sesión` })} ` })} ` })} </main> ` })}`
}, "C:/Users/rafa/Developer/ahorro-app/src/pages/update-user.astro", void 0)

const $$file = "C:/Users/rafa/Developer/ahorro-app/src/pages/update-user.astro"
const $$url = "/update-user"

export { $$UpdateUser as default, $$file as file, $$url as url }
