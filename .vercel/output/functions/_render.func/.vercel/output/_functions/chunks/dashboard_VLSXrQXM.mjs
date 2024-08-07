import { k as createComponent, l as renderTemplate, m as maybeRenderHead, n as addAttribute, q as renderSlot, o as createAstro, p as renderComponent } from "./astro/server_B4Rl0Gpj.mjs"
import "kleur/colors"
import "html-escaper"
import { d as db, U as User, E as Entry } from "./_astro_db_DY7iTdg9.mjs"
import "clsx"
/* empty css                             */
import { $ as $$Layout } from "./Layout_1Jj4l3mg.mjs"
import { $ as $$SecondaryButton } from "./SecondaryButton_w5ebRnNY.mjs"
import { eq } from "@astrojs/db/dist/runtime/virtual.js"

const $$Astro$5 = createAstro()
const $$HeaderSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots)
  Astro2.self = $$HeaderSection
  const { id } = Astro2.props
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} data-astro-cid-l47elceu> ${renderSlot($$result, $$slots["default"])} </section> `
}, "C:/Users/rafa/Developer/ahorro-app/src/components/organisms/HeaderSection.astro", void 0)

const $$Astro$4 = createAstro()
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots)
  Astro2.self = $$Section
  const { id } = Astro2.props
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} data-astro-cid-tp6qac6w> ${renderSlot($$result, $$slots["default"])} </section> `
}, "C:/Users/rafa/Developer/ahorro-app/src/components/organisms/Section.astro", void 0)

const $$TotalCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article data-astro-cid-yhrqcnit> ${renderSlot($$result, $$slots["default"])} </article> `
}, "C:/Users/rafa/Developer/ahorro-app/src/components/atoms/TotalCard.astro", void 0)

const $$Astro$3 = createAstro()
const $$FloatButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots)
  Astro2.self = $$FloatButton
  const { href } = Astro2.props
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-msinocta> <a${addAttribute(href, "href")} data-astro-cid-msinocta> ${renderSlot($$result, $$slots["default"])} </a> </section> `
}, "C:/Users/rafa/Developer/ahorro-app/src/components/atoms/FloatButton.astro", void 0)

const $$Astro$2 = createAstro()
const $$BarChartOnlyPositives = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots)
  Astro2.self = $$BarChartOnlyPositives
  const { data, label } = Astro2.props
  const max = Math.max.apply(
    Math,
    data.map((row) => row.value)
  )
  const min = Math.min.apply(
    Math,
    data.map((row) => row.value)
  )
  const labelsv = (max2, min2) => {
    const labelspos = []
    if (min2 < 0) {
      for (let index = min2; index < 0; index += max2 / 4) {
        labelspos.push({ label: index.toLocaleString() })
      }
    }
    for (let index = 0; index <= max2; index += max2 / 4) {
      labelspos.push({ label: index.toLocaleString() })
    }
    return labelspos.reverse()
  }
  return renderTemplate`${maybeRenderHead()}<div class="bar-chart"${addAttribute(`--num-bars: ${data.length};`, "style")} data-astro-cid-uvvflyxi> <strong data-astro-cid-uvvflyxi>${label}</strong> <div class="data-wrapper" data-astro-cid-uvvflyxi> <div class="labels-v" data-astro-cid-uvvflyxi> ${labelsv(max, min).map((item) => renderTemplate`<p class="caption label-v" data-astro-cid-uvvflyxi>${item.label}</p>`)} </div> <div class="data-container" data-astro-cid-uvvflyxi> <div class="bar-container" data-astro-cid-uvvflyxi> <div class="bars-positive" data-astro-cid-uvvflyxi> ${data.map((item) => renderTemplate`<div class="bar-positive"${addAttribute(`height: calc(${item.value / max * 100}%`, "style")} data-astro-cid-uvvflyxi></div>`)} </div> </div> <div class="labels-h" data-astro-cid-uvvflyxi> ${data.map((item) => renderTemplate`<p class="caption label" data-astro-cid-uvvflyxi>${item.label}</p>`)} </div> </div> </div> </div>`
}, "C:/Users/rafa/Developer/ahorro-app/src/components/molecules/BarChartOnlyPositives.astro", void 0)

const $$Astro$1 = createAstro()
const $$BarChartWithNegatives = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots)
  Astro2.self = $$BarChartWithNegatives
  const { data, label } = Astro2.props
  const max = Math.max.apply(
    Math,
    data.map((row) => row.value)
  )
  const min = Math.min.apply(
    Math,
    data.map((row) => row.value)
  )
  const labelsv = (max2, min2) => {
    const labelspos = []
    if (min2 < 0) {
      for (let index = -max2; index < 0; index -= -max2 / 2) {
        labelspos.push({ label: index.toLocaleString() })
      }
    }
    for (let index = 0; index <= max2; index += max2 / 2) {
      labelspos.push({ label: index.toLocaleString() })
    }
    return labelspos.reverse()
  }
  return renderTemplate`${maybeRenderHead()}<div class="bar-chart"${addAttribute(`--num-bars: ${data.length};`, "style")} data-astro-cid-evdie3id> <strong data-astro-cid-evdie3id>${label}</strong> <div class="data-wrapper" data-astro-cid-evdie3id> <div class="labels-v" data-astro-cid-evdie3id> ${labelsv(max, min).map((item) => renderTemplate`<p class="caption label-v" data-astro-cid-evdie3id>${item.label}</p>`)} </div> <div class="data-container" data-astro-cid-evdie3id> <div class="bar-container" data-astro-cid-evdie3id> <div class="bars-positive" data-astro-cid-evdie3id> ${data.map((item) => renderTemplate`<div class="bar-positive"${addAttribute(`height: calc(${item.value / max * 100}%`, "style")} data-astro-cid-evdie3id></div>`)} </div> <div class="bars-negative" data-astro-cid-evdie3id> ${data.map((item) => renderTemplate`<div class="bar-negative"${addAttribute(`height: calc(${item.value / (-min > max ? min : -max) * 100}%`, "style")} data-astro-cid-evdie3id></div>`)} </div> </div> <div class="labels-h" data-astro-cid-evdie3id> ${data.map((item) => renderTemplate`<p class="caption label" data-astro-cid-evdie3id>${item.label}</p>`)} </div> </div> </div> </div>`
}, "C:/Users/rafa/Developer/ahorro-app/src/components/molecules/BarChartWithNegatives.astro", void 0)

const $$DeleteButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button type="submit" data-astro-cid-34d6lkkz>${renderSlot($$result, $$slots["default"])}</button> `
}, "C:/Users/rafa/Developer/ahorro-app/src/components/atoms/DeleteButton.astro", void 0)

const $$Astro = createAstro()
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
  Astro2.self = $$Dashboard
  const user = Astro2.locals.user
  if (!user) {
    return Astro2.redirect("/singup")
  }
  const userData = (await db.select().from(User).where(eq(User.id, user.id))).at(
    0
  )
  const entries = await db.select().from(Entry).where(eq(Entry.userId, user.id))
  const averageSavings = (entries2) => {
    let i
    let element = 0
    for (i = 0; i < entries2.length; i++) {
      const savings = entries2[i].finalAmount - entries2[i].initialAmount
      element = element + savings
    }
    return element / i
  }
  const totalSavings = (entries2) => {
    let i
    let element = 0
    for (i = 0; i < entries2.length; i++) {
      const savings = entries2[i].finalAmount - entries2[i].initialAmount
      element = element + savings
    }
    return element
  }
  const totalChart = (entries2) => {
    return entries2.map((entry) => ({
      label: entry.createdAt.toLocaleDateString("Es-es"),
      value: entry.finalAmount
    }))
  }
  const totalChartData = totalChart(entries)
  const savingsChart = (entries2) => {
    return entries2.map((entry) => ({
      label: entry.createdAt.toLocaleDateString("Es-es"),
      value: entry.finalAmount - entry.initialAmount
    }))
  }
  const savingsChartData = savingsChart(entries)
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard", "data-astro-cid-3nssi2tu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-3nssi2tu> ${renderComponent($$result2, "HeaderSection", $$HeaderSection, { "id": "header", "data-astro-cid-3nssi2tu": true }, { "default": ($$result3) => renderTemplate` <h1 data-astro-cid-3nssi2tu>${userData?.firstName + " " + userData?.lastName}</h1> ${renderComponent($$result3, "SecondaryButton", $$SecondaryButton, { "href": "/update-user", "data-astro-cid-3nssi2tu": true }, { "default": ($$result4) => renderTemplate`Perfil` })} ` })} </header> <main data-astro-cid-3nssi2tu> ${renderComponent($$result2, "FloatButton", $$FloatButton, { "href": "/add-entry", "data-astro-cid-3nssi2tu": true }, { "default": ($$result3) => renderTemplate`Añadir entrada` })} ${entries.length == 0 ? renderTemplate`<p data-astro-cid-3nssi2tu>Aún no tienes entradas</p>` : renderTemplate`${renderComponent($$result2, "Section", $$Section, { "id": "totals", "data-astro-cid-3nssi2tu": true }, { "default": ($$result3) => renderTemplate` <div class="container-horizontal" data-astro-cid-3nssi2tu> ${renderComponent($$result3, "TotalCard", $$TotalCard, { "data-astro-cid-3nssi2tu": true }, { "default": ($$result4) => renderTemplate` <strong data-astro-cid-3nssi2tu>Dinero total</strong> <p class="h2" data-astro-cid-3nssi2tu> ${new Intl.NumberFormat("Es-es", {
    style: "currency",
    currency: "EUR"
  }).format(entries[entries.length - 1].finalAmount)} </p> ` })} ${renderComponent($$result3, "TotalCard", $$TotalCard, { "data-astro-cid-3nssi2tu": true }, { "default": ($$result4) => renderTemplate` <strong data-astro-cid-3nssi2tu>Ahorro acumulado</strong> <p class="h2" data-astro-cid-3nssi2tu> ${new Intl.NumberFormat("Es-es", {
    style: "currency",
    currency: "EUR"
  }).format(totalSavings(entries))} </p> ` })} ${renderComponent($$result3, "TotalCard", $$TotalCard, { "data-astro-cid-3nssi2tu": true }, { "default": ($$result4) => renderTemplate` <strong data-astro-cid-3nssi2tu>Media de ahorro</strong> <p class="h2" data-astro-cid-3nssi2tu> ${new Intl.NumberFormat("Es-es", {
    style: "currency",
    currency: "EUR"
  }).format(averageSavings(entries))} / mes
</p> ` })} </div> ` })}
    ${renderComponent($$result2, "Section", $$Section, { "id": "entries", "data-astro-cid-3nssi2tu": true }, { "default": ($$result3) => renderTemplate` <div class="container-horizontal" data-astro-cid-3nssi2tu> <table data-astro-cid-3nssi2tu> <tr data-astro-cid-3nssi2tu> <th data-astro-cid-3nssi2tu>Fecha</th> <th data-astro-cid-3nssi2tu>Catidad inicial</th> <th data-astro-cid-3nssi2tu>Catidad final</th> <th data-astro-cid-3nssi2tu>Ahorro</th> <th data-astro-cid-3nssi2tu></th> </tr> ${entries.map((entry) => renderTemplate`<tr data-astro-cid-3nssi2tu> <td data-astro-cid-3nssi2tu>${entry.createdAt.toLocaleDateString("Es-es")}</td> <td data-astro-cid-3nssi2tu> ${new Intl.NumberFormat("Es-es", {
    style: "currency",
    currency: "EUR"
  }).format(entry.initialAmount)} </td> <td data-astro-cid-3nssi2tu> ${new Intl.NumberFormat("Es-es", {
    style: "currency",
    currency: "EUR"
  }).format(entry.finalAmount)} </td> <td data-astro-cid-3nssi2tu> ${new Intl.NumberFormat("Es-es", {
    style: "currency",
    currency: "EUR"
  }).format(entry.finalAmount - entry.initialAmount)} </td> <td data-astro-cid-3nssi2tu> <form action="/api/entry/delete" method="post" data-astro-cid-3nssi2tu> <input id="entryid" type="hidden" name="entryid"${addAttribute(entry.id, "value")} data-astro-cid-3nssi2tu> ${renderComponent($$result3, "DeleteButton", $$DeleteButton, { "data-astro-cid-3nssi2tu": true }, { "default": ($$result4) => renderTemplate`X` })} </form> </td> </tr>`)} </table> <div class="container-vertical" data-astro-cid-3nssi2tu> ${renderComponent($$result3, "BarChartOnlyPositives", $$BarChartOnlyPositives, { "data": totalChartData, "label": "Dinero total", "data-astro-cid-3nssi2tu": true })} ${renderComponent($$result3, "BarChartWithNegatives", $$BarChartWithNegatives, { "data": savingsChartData, "label": "Ahorro", "data-astro-cid-3nssi2tu": true })} </div> </div> ` })}`} </main> ` })} `
}, "C:/Users/rafa/Developer/ahorro-app/src/pages/dashboard.astro", void 0)

const $$file = "C:/Users/rafa/Developer/ahorro-app/src/pages/dashboard.astro"
const $$url = "/dashboard"

export { $$Dashboard as default, $$file as file, $$url as url }
