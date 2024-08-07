import { k as createComponent, l as renderTemplate, p as renderComponent, m as maybeRenderHead } from "./astro/server_B4Rl0Gpj.mjs"
import "kleur/colors"
import "html-escaper"
import { $ as $$Form, a as $$Input, b as $$FormButton } from "./Form_BMwlRAcE.mjs"
import { $ as $$Hero } from "./Hero_DjGCXqCS.mjs"
import { $ as $$Layout } from "./Layout_1Jj4l3mg.mjs"

const $$Singin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Iniciar sesi\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "id": "singin-form" }, { "default": ($$result3) => renderTemplate` <h1 class="display">Iniciar sesión</h1> ${renderComponent($$result3, "Form", $$Form, { "action": "/api/singin", "method": "POST" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Input", $$Input, { "type": "text", "id": "username", "name": "username", "label": "Nombre de usuario", "placeholder": "fer07", "required": true })} ${renderComponent($$result4, "Input", $$Input, { "type": "password", "id": "password", "name": "password", "label": "Contrase\xF1a", "placeholder": "********", "required": true })} ${renderComponent($$result4, "FormButton", $$FormButton, { "type": "submit" }, { "default": ($$result5) => renderTemplate`Iniciar sesión` })} ` })} ` })} </main> ` })}`
}, "C:/Users/rafa/Developer/ahorro-app/src/pages/singin.astro", void 0)

const $$file = "C:/Users/rafa/Developer/ahorro-app/src/pages/singin.astro"
const $$url = "/singin"

export { $$Singin as default, $$file as file, $$url as url }
