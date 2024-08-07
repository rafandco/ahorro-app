import { k as createComponent, l as renderTemplate, m as maybeRenderHead, n as addAttribute, q as renderSlot, o as createAstro, p as renderComponent } from "./astro/server_B4Rl0Gpj.mjs"
import "kleur/colors"
import "html-escaper"
import "clsx"
/* empty css                         */
import { $ as $$SecondaryButton } from "./SecondaryButton_w5ebRnNY.mjs"
import { $ as $$Hero } from "./Hero_DjGCXqCS.mjs"
import { $ as $$Layout } from "./Layout_1Jj4l3mg.mjs"

const $$Astro = createAstro()
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
  Astro2.self = $$Button
  const { href } = Astro2.props
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-3pspvxuc> ${renderSlot($$result, $$slots["default"])} </a> `
}, "C:/Users/rafa/Developer/ahorro-app/src/components/atoms/Button.astro", void 0)

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ahorro App - Tu app de ahorro", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "id": "Inicio", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <h1 class="display" data-astro-cid-j7pv25f6>Ahorro App</h1> <div data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Button", $$Button, { "href": "/singin", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`Iniciar sesión` })} ${renderComponent($$result3, "SecondaryButton", $$SecondaryButton, { "href": "/singup", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`Registrarse` })} </div> ` })} </main> ` })} `
}, "C:/Users/rafa/Developer/ahorro-app/src/pages/index.astro", void 0)

const $$file = "C:/Users/rafa/Developer/ahorro-app/src/pages/index.astro"
const $$url = ""

export { $$Index as default, $$file as file, $$url as url }
