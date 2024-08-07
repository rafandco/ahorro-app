import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as createAstro } from './astro/server_BVqQ5TZh.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} data-astro-cid-yfogg3tk> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/rafa/Developer/ahorro-app/src/components/organisms/Hero.astro", void 0);

export { $$Hero as $ };
