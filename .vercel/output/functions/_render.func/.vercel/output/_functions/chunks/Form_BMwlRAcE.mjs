import { k as createComponent, l as renderTemplate, m as maybeRenderHead, n as addAttribute, q as renderSlot, o as createAstro } from "./astro/server_B4Rl0Gpj.mjs"
import "kleur/colors"
import "html-escaper"
import "clsx"
/* empty css                             */

const $$Astro$2 = createAstro()
const $$FormButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots)
  Astro2.self = $$FormButton
  const { type } = Astro2.props
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")} data-astro-cid-vjeok6qa>${renderSlot($$result, $$slots["default"])}</button> `
}, "C:/Users/rafa/Developer/ahorro-app/src/components/atoms/FormButton.astro", void 0)

const $$Astro$1 = createAstro()
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots)
  Astro2.self = $$Input
  const {
    type,
    id,
    name,
    label,
    value,
    placeholder,
    required,
    minlength,
    maxlength,
    min,
    max,
    step
  } = Astro2.props
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-c7ogtspa> <label${addAttribute(name, "for")} data-astro-cid-c7ogtspa>${label}</label> <input${addAttribute(type, "type")}${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(value, "value")} type="text"${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(minlength, "minlength")}${addAttribute(maxlength, "maxlength")}${addAttribute(min, "min")}${addAttribute(max, "max")}${addAttribute(step, "step")} data-astro-cid-c7ogtspa> </div> `
}, "C:/Users/rafa/Developer/ahorro-app/src/components/atoms/Input.astro", void 0)

const $$Astro = createAstro()
const $$Form = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
  Astro2.self = $$Form
  const { method, action } = Astro2.props
  return renderTemplate`${maybeRenderHead()}<form${addAttribute(method, "method")}${addAttribute(action, "action")} data-astro-cid-kjn4tp7m> ${renderSlot($$result, $$slots["default"])} </form> `
}, "C:/Users/rafa/Developer/ahorro-app/src/components/molecules/Form.astro", void 0)

export { $$Form as $, $$Input as a, $$FormButton as b }
