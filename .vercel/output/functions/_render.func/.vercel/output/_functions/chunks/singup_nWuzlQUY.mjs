import { k as createComponent, l as renderTemplate, p as renderComponent, m as maybeRenderHead } from "./astro/server_B4Rl0Gpj.mjs"
import "kleur/colors"
import "html-escaper"
import { $ as $$Form, a as $$Input, b as $$FormButton } from "./Form_BMwlRAcE.mjs"
import { $ as $$Hero } from "./Hero_DjGCXqCS.mjs"
import { $ as $$Layout } from "./Layout_1Jj4l3mg.mjs"

const $$Singup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Registro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "id": "singup-form" }, { "default": ($$result3) => renderTemplate` <h1 class="display">Registrarse</h1> ${renderComponent($$result3, "Form", $$Form, { "action": "/api/singup", "method": "POST" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Input", $$Input, { "type": "text", "id": "firstname", "name": "firstname", "label": "Nombre", "placeholder": "Fernando...", "required": true, "minlength": 2 })} ${renderComponent($$result4, "Input", $$Input, { "type": "text", "id": "lastname", "name": "lastname", "label": "Apellidos", "placeholder": "Garc\xEDa Rodr\xEDguez...", "required": true, "minlength": 2 })} ${renderComponent($$result4, "Input", $$Input, { "type": "email", "id": "email", "name": "email", "label": "Correo electr\xF3nico", "placeholder": "fernando@gmail.com", "required": true })} ${renderComponent($$result4, "Input", $$Input, { "type": "text", "id": "username", "name": "username", "label": "Nombre de usuario", "placeholder": "fer07", "required": true })} ${renderComponent($$result4, "Input", $$Input, { "type": "password", "id": "password", "name": "password", "label": "Contrase\xF1a", "placeholder": "********", "required": true })} ${renderComponent($$result4, "FormButton", $$FormButton, { "type": "submit" }, { "default": ($$result5) => renderTemplate`Registrarse` })} ` })} ` })} </main> ` })}`
}, "C:/Users/rafa/Developer/ahorro-app/src/pages/singup.astro", void 0)

const $$file = "C:/Users/rafa/Developer/ahorro-app/src/pages/singup.astro"
const $$url = "/singup"

export { $$Singup as default, $$file as file, $$url as url }
