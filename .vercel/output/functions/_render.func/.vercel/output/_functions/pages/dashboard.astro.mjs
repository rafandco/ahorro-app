import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as createAstro, d as renderComponent } from '../chunks/astro/server_JvAZbl_W.mjs';
import 'kleur/colors';
import { d as db, U as User, E as Entry } from '../chunks/_astro_db_DN_Sa-JY.mjs';
import { $ as $$HeaderSection } from '../chunks/HeaderSection_BPy1n0en.mjs';
import 'clsx';
/* empty css                                     */
import { $ as $$Layout } from '../chunks/Layout_L9Zxeu4E.mjs';
import { useSSRContext, defineComponent, onMounted } from 'vue';
import '../chunks/FormButton_gWVQJ1C8.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../chunks/_plugin-vue_export-helper_pcqpp-6-.mjs';
import Chart from 'chart.js/auto';
import { $ as $$Button } from '../chunks/Button_BcXUxVEK.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Section;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} data-astro-cid-tp6qac6w> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/rafa/Developer/ahorro-app/src/components/organisms/Section.astro", void 0);

const $$TotalCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article data-astro-cid-yhrqcnit> ${renderSlot($$result, $$slots["default"])} </article> `;
}, "C:/Users/rafa/Developer/ahorro-app/src/components/atoms/TotalCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$FloatButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FloatButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-msinocta> <a${addAttribute(href, "href")} data-astro-cid-msinocta> ${renderSlot($$result, $$slots["default"])} </a> </section> `;
}, "C:/Users/rafa/Developer/ahorro-app/src/components/atoms/FloatButton.astro", void 0);

const $$DeleteButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button type="submit" data-astro-cid-34d6lkkz>${renderSlot($$result, $$slots["default"])}</button> `;
}, "C:/Users/rafa/Developer/ahorro-app/src/components/atoms/DeleteButton.astro", void 0);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NoInputForm",
  props: {
    action: {},
    method: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const { action, method } = __props;
    async function submit(e) {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const response = await fetch(action, {
        method,
        body: formData
      });
      if (response.redirected) {
        window.location.href = response.url;
      } else {
        const data = await response.json();
        responseMessage.value = data.message;
      }
    }
    const __returned__ = { submit };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(_attrs)} data-v-88c7c308>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</form>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/molecules/NoInputForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NoInputForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-88c7c308"]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BarChart",
  props: {
    label: {},
    data: {},
    id: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const { label, data, id } = __props;
    const barColors = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].value >= 0) {
        barColors.push("#27fb6bff");
      }
      if (data[i].value < 0) {
        barColors.push("#da2c38ff");
      }
    }
    onMounted(() => {
      new Chart(id, {
        type: "bar",
        data: {
          labels: data.map((row) => row.label),
          datasets: [
            {
              label,
              data: data.map((row) => row.value),
              backgroundColor: barColors
            }
          ]
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: "bottom",
              labels: {
                boxWidth: 20,
                useBorderRadius: true,
                borderRadius: 4
              }
            }
          },
          elements: {
            bar: {
              borderRadius: {
                topLeft: 8,
                topRight: 8,
                bottomLeft: 8,
                bottomRight: 8
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
    const __returned__ = { barColors };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-a86a1667><strong data-v-a86a1667>${ssrInterpolate($props.label)}</strong><canvas${ssrRenderAttr("id", `${$props.id}`)} data-v-a86a1667></canvas></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/molecules/BarChart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BarChart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a86a1667"]]);

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const user = Astro2.locals.user;
  if (!user) {
    return Astro2.redirect("/signup");
  }
  const userData = (await db.select().from(User).where(eq(User.id, user.id))).at(0);
  const entries = await db.select().from(Entry).where(eq(Entry.userId, user.id));
  const averageSavings = (entries2) => {
    if (entries2.length === 0) return 0;
    let totalSavings2 = 0;
    entries2.forEach((entry) => {
      totalSavings2 += entry.finalAmount - entry.initialAmount;
    });
    return totalSavings2 / entries2.length;
  };
  const totalSavings = (entries2) => {
    let total = 0;
    entries2.forEach((entry) => {
      total += entry.finalAmount - entry.initialAmount;
    });
    return total;
  };
  const totalChart = (entries2) => {
    return entries2.map((entry) => ({
      label: entry.createdAt.toLocaleDateString("es-ES"),
      value: entry.finalAmount
    }));
  };
  const savingsChart = (entries2) => {
    return entries2.map((entry) => ({
      label: entry.createdAt.toLocaleDateString("es-ES"),
      value: entry.finalAmount - entry.initialAmount
    }));
  };
  const totalChartData = totalChart(entries);
  const savingsChartData = savingsChart(entries);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard", "data-astro-cid-3nssi2tu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-3nssi2tu> ${renderComponent($$result2, "HeaderSection", $$HeaderSection, { "id": "header", "data-astro-cid-3nssi2tu": true }, { "default": ($$result3) => renderTemplate` <h1 data-astro-cid-3nssi2tu>${"Hola, " + userData.firstName}</h1> ${renderComponent($$result3, "Button", $$Button, { "href": "/profile", "color": "var(--black)", "bgColor": "var(--gray-light)", "bgColorHover": "var(--gray-medium)", "data-astro-cid-3nssi2tu": true }, { "default": ($$result4) => renderTemplate`Perfil` })} ` })} </header> <main data-astro-cid-3nssi2tu> ${renderComponent($$result2, "FloatButton", $$FloatButton, { "href": "/add-entry", "data-astro-cid-3nssi2tu": true }, { "default": ($$result3) => renderTemplate`Añadir entrada` })} ${entries.length == 0 ? renderTemplate`<p data-astro-cid-3nssi2tu>Aún no tienes entradas</p>` : renderTemplate`${renderComponent($$result2, "Section", $$Section, { "id": "totals", "data-astro-cid-3nssi2tu": true }, { "default": ($$result3) => renderTemplate` <div class="container-horizontal" data-astro-cid-3nssi2tu> ${renderComponent($$result3, "TotalCard", $$TotalCard, { "data-astro-cid-3nssi2tu": true }, { "default": ($$result4) => renderTemplate` <strong data-astro-cid-3nssi2tu>Dinero total</strong> <p class="h2" data-astro-cid-3nssi2tu> ${new Intl.NumberFormat("Es-es", {
    style: "currency",
    currency: "EUR"
  }).format(entries[entries.length - 1].finalAmount)} </p> ` })} ${renderComponent($$result3, "TotalCard", $$TotalCard, { "data-astro-cid-3nssi2tu": true }, { "default": ($$result4) => renderTemplate` <strong data-astro-cid-3nssi2tu>Ahorro acumulado</strong> <p class="h2" data-astro-cid-3nssi2tu> ${new Intl.NumberFormat("Es-es", {
    style: "currency",
    currency: "EUR"
  }).format(totalSavings(entries))} </p> ` })} ${renderComponent($$result3, "TotalCard", $$TotalCard, { "data-astro-cid-3nssi2tu": true }, { "default": ($$result4) => renderTemplate` <strong data-astro-cid-3nssi2tu>Media de ahorro por mes</strong> <p class="h2" data-astro-cid-3nssi2tu> ${new Intl.NumberFormat("Es-es", {
    style: "currency",
    currency: "EUR"
  }).format(averageSavings(entries))} </p> ` })} </div> ` })}
    ${renderComponent($$result2, "Section", $$Section, { "id": "entries", "data-astro-cid-3nssi2tu": true }, { "default": ($$result3) => renderTemplate` <div class="container-horizontal" data-astro-cid-3nssi2tu> <table data-astro-cid-3nssi2tu> <tr data-astro-cid-3nssi2tu> <th data-astro-cid-3nssi2tu>Fecha</th> <th data-astro-cid-3nssi2tu>C. inicial</th> <th data-astro-cid-3nssi2tu>C. final</th> <th data-astro-cid-3nssi2tu>Ahorro</th> <th data-astro-cid-3nssi2tu></th> </tr> ${entries.map((entry) => renderTemplate`<tr data-astro-cid-3nssi2tu> <td data-astro-cid-3nssi2tu>${entry.createdAt.toLocaleDateString("Es-es")}</td> <td data-astro-cid-3nssi2tu> ${new Intl.NumberFormat("Es-es", {
    style: "currency",
    currency: "EUR"
  }).format(entry.initialAmount)} </td> <td data-astro-cid-3nssi2tu> ${new Intl.NumberFormat("Es-es", {
    style: "currency",
    currency: "EUR"
  }).format(entry.finalAmount)} </td> <td data-astro-cid-3nssi2tu> ${new Intl.NumberFormat("Es-es", {
    style: "currency",
    currency: "EUR"
  }).format(entry.finalAmount - entry.initialAmount)} </td> <td data-astro-cid-3nssi2tu> ${renderComponent($$result3, "NoInputForm", NoInputForm, { "action": "/api/entries", "method": "DELETE", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/rafa/Developer/ahorro-app/src/components/molecules/NoInputForm.vue", "client:component-export": "default", "data-astro-cid-3nssi2tu": true }, { "default": ($$result4) => renderTemplate` <input id="entryid" type="hidden" name="entryid"${addAttribute(entry.id, "value")} data-astro-cid-3nssi2tu> ${renderComponent($$result4, "DeleteButton", $$DeleteButton, { "data-astro-cid-3nssi2tu": true }, { "default": ($$result5) => renderTemplate`X` })} ` })} </td> </tr>`)} </table> <div class="container-vertical" data-astro-cid-3nssi2tu> ${renderComponent($$result3, "BarChart", BarChart, { "label": "Dinero total", "data": totalChartData, "id": "total", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/rafa/Developer/ahorro-app/src/components/molecules/BarChart.vue", "client:component-export": "default", "data-astro-cid-3nssi2tu": true })} ${renderComponent($$result3, "BarChart", BarChart, { "label": "Ahorro", "data": savingsChartData, "id": "savings", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/rafa/Developer/ahorro-app/src/components/molecules/BarChart.vue", "client:component-export": "default", "data-astro-cid-3nssi2tu": true })} </div> </div> ` })}`} </main> ` })} `;
}, "C:/Users/rafa/Developer/ahorro-app/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/rafa/Developer/ahorro-app/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
