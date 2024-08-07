import { k as createComponent, l as renderTemplate, p as renderComponent, o as createAstro, m as maybeRenderHead } from "./astro/server_B4Rl0Gpj.mjs"
import "kleur/colors"
import "html-escaper"
import { $ as $$Form, a as $$Input, b as $$FormButton } from "./Form_BMwlRAcE.mjs"
import { $ as $$Hero } from "./Hero_DjGCXqCS.mjs"
import { $ as $$Layout } from "./Layout_1Jj4l3mg.mjs"

const $$Astro = createAstro()
const $$AddEntry = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
  Astro2.self = $$AddEntry
  const user = Astro2.locals.user
  if (!user) {
    return Astro2.redirect("/singup")
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "A\xF1adir entrada" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "id": "add-entry-form" }, { "default": ($$result3) => renderTemplate` <h1 class="display">Añadir entrada</h1> ${renderComponent($$result3, "Form", $$Form, { "action": "/api/entry/create", "method": "POST" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Input", $$Input, { "type": "number", "id": "initialamount", "name": "initialamount", "label": "Cantidad inicial", "placeholder": "100,00", "required": true, "min": 0, "step": 0.01 })} ${renderComponent($$result4, "Input", $$Input, { "type": "number", "id": "finalamount", "name": "finalamount", "label": "Cantidad final", "placeholder": "100,00", "required": true, "min": 0, "step": 0.01 })} ${renderComponent($$result4, "FormButton", $$FormButton, { "type": "submit" }, { "default": ($$result5) => renderTemplate`Añadir entrada` })} ` })} ` })} </main> ` })}`
}, "C:/Users/rafa/Developer/ahorro-app/src/pages/add-entry.astro", void 0)

const $$file = "C:/Users/rafa/Developer/ahorro-app/src/pages/add-entry.astro"
const $$url = "/add-entry"

export { $$AddEntry as default, $$file as file, $$url as url }
