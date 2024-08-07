import { k as createComponent, l as renderTemplate, n as addAttribute, t as renderHead, q as renderSlot, o as createAstro } from "./astro/server_B4Rl0Gpj.mjs"
import "kleur/colors"
import "html-escaper"
import "clsx"
/* empty css                             */

const $$Astro = createAstro()
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
  Astro2.self = $$Layout
  const { title } = Astro2.props
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`
}, "C:/Users/rafa/Developer/ahorro-app/src/layouts/Layout.astro", void 0)

export { $$Layout as $ }