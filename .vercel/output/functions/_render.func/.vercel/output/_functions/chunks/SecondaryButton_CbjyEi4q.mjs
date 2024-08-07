import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as createAstro } from './astro/server_BVqQ5TZh.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

const $$Astro = createAstro();
const $$SecondaryButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SecondaryButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-36kq3cgc> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "C:/Users/rafa/Developer/ahorro-app/src/components/atoms/SecondaryButton.astro", void 0);

export { $$SecondaryButton as $ };
