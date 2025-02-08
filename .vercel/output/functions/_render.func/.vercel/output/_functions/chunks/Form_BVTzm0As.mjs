import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_JvAZbl_W.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */
import { useSSRContext, defineComponent, ref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper_pcqpp-6-.mjs';

const $$Astro = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Input;
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
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(name, "for")} data-astro-cid-c7ogtspa> ${label} <input${addAttribute(type, "type")}${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(value, "value")} type="text"${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(minlength, "minlength")}${addAttribute(maxlength, "maxlength")}${addAttribute(min, "min")}${addAttribute(max, "max")}${addAttribute(step, "step")} data-astro-cid-c7ogtspa> </label> `;
}, "C:/Users/rafa/Developer/ahorro-app/src/components/atoms/Input.astro", void 0);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Form",
  props: {
    action: {},
    method: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const { action, method } = __props;
    const responseMessage = ref();
    async function submit(e) {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const response = await fetch(action, {
        method,
        body: formData
      });
      if (response.redirected) {
        window.location.replace(response.url);
      } else {
        const data = await response.json();
        responseMessage.value = data.message;
      }
    }
    const __returned__ = { responseMessage, submit };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(_attrs)} data-v-c8bb9145>`);
  if ($setup.responseMessage) {
    _push(`<p data-v-c8bb9145>${ssrInterpolate($setup.responseMessage)}</p>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</form>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/molecules/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Form = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c8bb9145"]]);

export { $$Input as $, Form as F };
