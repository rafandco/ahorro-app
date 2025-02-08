import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as createAstro } from './astro/server_JvAZbl_W.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

const $$Astro = createAstro();
const $$HeaderSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderSection;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} data-astro-cid-l47elceu> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/rafa/Developer/ahorro-app/src/components/organisms/HeaderSection.astro", void 0);

export { $$HeaderSection as $ };
