import { c as createComponent, f as defineStyleVars, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as createAstro } from './astro/server_JvAZbl_W.mjs';
/* empty css                             */
import 'clsx';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { href, color, bgColor, bgColorHover } = Astro2.props;
  const $$definedVars = defineStyleVars([{ color, bgColor, bgColorHover }]);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-3pspvxuc${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "C:/Users/rafa/Developer/ahorro-app/src/components/atoms/Button.astro", void 0);

export { $$Button as $ };
