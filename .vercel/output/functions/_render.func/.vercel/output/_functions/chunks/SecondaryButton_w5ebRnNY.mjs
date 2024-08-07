import { k as createComponent, l as renderTemplate, m as maybeRenderHead, n as addAttribute, q as renderSlot, o as createAstro } from "./astro/server_B4Rl0Gpj.mjs"
import "kleur/colors"
import "html-escaper"
import "clsx"
/* empty css                             */

const $$Astro = createAstro()
const $$SecondaryButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
  Astro2.self = $$SecondaryButton
  const { href } = Astro2.props
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-36kq3cgc> ${renderSlot($$result, $$slots["default"])} </a> `
}, "C:/Users/rafa/Developer/ahorro-app/src/components/atoms/SecondaryButton.astro", void 0)

export { $$SecondaryButton as $ }
