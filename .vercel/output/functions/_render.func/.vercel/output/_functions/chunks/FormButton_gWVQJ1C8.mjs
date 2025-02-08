import { c as createComponent, f as defineStyleVars, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as createAstro } from './astro/server_JvAZbl_W.mjs';
/* empty css                             */
import 'clsx';

const $$Astro = createAstro();
const $$FormButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormButton;
  const { type, color, bgColor, bgColorHover } = Astro2.props;
  const $$definedVars = defineStyleVars([{ color, bgColor, bgColorHover }]);
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")} data-astro-cid-vjeok6qa${addAttribute($$definedVars, "style")}>${renderSlot($$result, $$slots["default"])}</button> `;
}, "C:/Users/rafa/Developer/ahorro-app/src/components/atoms/FormButton.astro", void 0);

export { $$FormButton as $ };
