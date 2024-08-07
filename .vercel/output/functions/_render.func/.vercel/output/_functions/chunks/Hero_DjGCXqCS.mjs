import { k as createComponent, l as renderTemplate, m as maybeRenderHead, n as addAttribute, q as renderSlot, o as createAstro } from "./astro/server_B4Rl0Gpj.mjs"
import "kleur/colors"
import "html-escaper"
import "clsx"
/* empty css                             */

const $$Astro = createAstro()
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
  Astro2.self = $$Hero
  const { id } = Astro2.props
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} data-astro-cid-yfogg3tk> ${renderSlot($$result, $$slots["default"])} </section> `
}, "C:/Users/rafa/Developer/ahorro-app/src/components/organisms/Hero.astro", void 0)

export { $$Hero as $ }
