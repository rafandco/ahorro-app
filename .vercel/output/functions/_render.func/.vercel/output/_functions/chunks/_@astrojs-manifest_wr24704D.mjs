import 'cookie';
import 'kleur/colors';
import { D as DEFAULT_404_COMPONENT } from './astro/server_BVqQ5TZh.mjs';
import 'clsx';
import { escape } from 'html-escaper';
import { compile } from 'path-to-regexp';

function template({
  title,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}

const DEFAULT_404_ROUTE = {
  component: DEFAULT_404_COMPONENT,
  generate: () => "",
  params: [],
  pattern: /\/404/,
  prerender: false,
  pathname: "/404",
  segments: [[{ content: "404", dynamic: false, spread: false }]],
  type: "page",
  route: "/404",
  fallbackRoutes: [],
  isIndex: false
};
function ensure404Route(manifest) {
  if (!manifest.routes.some((route) => route.route === "/404")) {
    manifest.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest;
}
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
default404Page.isAstroComponentFactory = true;
const default404Instance = {
  default: default404Page
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/rafa/Developer/ahorro-app/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"button[data-astro-cid-vjeok6qa]{font-family:Inter Variable,sans-serif;font-size:16px;font-weight:600;padding:16px 32px;background-color:var(--dark-spring-green);border:0px;border-radius:var(--rounded-small);color:var(--white)}button[data-astro-cid-vjeok6qa]:hover{background:var(--dark-spring-green-light)}@media (max-width: 1023px){button[data-astro-cid-vjeok6qa]{font-size:12px}}div[data-astro-cid-c7ogtspa]{display:flex;flex-direction:column;gap:var(--gap-small)}label[data-astro-cid-c7ogtspa]{font-weight:600}input[data-astro-cid-c7ogtspa]{font-family:Inter Variable,sans-serif;font-size:16px;font-weight:600;color:var(--gray-dark);background-color:var(--gray-light);line-height:1.5em;letter-spacing:.05em;margin:0;padding:16px;border:0px;border-radius:var(--rounded-small)}input[data-astro-cid-c7ogtspa]:focus{outline:2px solid var(--dark-spring-green-light)}form[data-astro-cid-kjn4tp7m]{width:50%;display:flex;flex-direction:column;justify-content:stretch;gap:var(--gap-large)}@media (min-width: 768px) and (max-width: 1023px){form[data-astro-cid-kjn4tp7m]{width:75%}}@media (max-width: 767px){form[data-astro-cid-kjn4tp7m]{width:90%}}\nsection[data-astro-cid-yfogg3tk]{width:960px;height:auto;padding:var(--padding);display:flex;flex-direction:column;align-items:center;gap:var(--gap-xlarge)}@media (min-width: 768px) and (max-width: 1023px){section[data-astro-cid-yfogg3tk]{width:768px;gap:var(--gap-large)}}@media (max-width: 767px){section[data-astro-cid-yfogg3tk]{width:360px;gap:var(--gap-large)}}\n:root{--gunmetal: #0a2e36ff;--spring-green: #27fb6bff;--dark-spring-green: #0c7c59ff;--black-bean: #2e0f15ff;--poppy: #da2c38ff;--gunmetal-light: #104956ff;--spring-green-light: #4bfb83ff;--dark-spring-green-light: #0f956aff;--black-bean-light: #3e141cff;--poppy-light: #dd404bff;--white: white;--gray-ultra-light: #fafafa;--gray-light: #f2f2f2;--gray-medium: #e6e6e6;--gray-dark: #808080;--gray-ultra-dark: #1a1a1a;--black: black;--rounded-small: 8px;--rounded: 16px;--gap-small: 8px;--gap: 16px;--gap-large: 32px;--gap-xlarge: 64px;--padding-small: 8px;--padding: 16px;--padding-large: 32px;--margin-small: 8px;--margin: 16px;--margin-large: 32px}@font-face{font-family:Inter Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/inter-latin-wght-normal.BgVq2Tq4.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body{min-height:100vh;font-family:Inter Variable,sans-serif;font-size:16px;display:grid;grid:\"header\" auto \"main\" 1fr \"footer\" auto / 1fr;gap:16px;margin:0}header{grid-area:header;display:flex;flex-direction:column;align-items:center;justify-content:center}main{grid-area:main;display:flex;flex-direction:column;align-items:center;justify-content:center}footer{grid-area:footer;display:flex;flex-direction:column;align-items:center;justify-content:center}.display{font-size:64px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h1,.h1{font-size:40px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h2,.h2{font-size:32px;font-weight:550;line-height:1.25em;letter-spacing:.05em;margin:0}h3,.h3{font-size:28px;font-weight:500;line-height:1.25em;letter-spacing:.05em;margin:0}strong,.strong{font-weight:600}p,.p{font-size:16px;line-height:1.5em;letter-spacing:.05em;margin:0}caption,.caption{font-size:10px;line-height:1.5em;letter-spacing:.05em;margin:0}table{width:100%;border-spacing:0}th{text-align:left;padding:var(--padding-small);background-color:var(--gray-medium)}tr:nth-child(odd){background-color:var(--gray-light)}tr:nth-child(2n){background-color:var(--gray-ultra-light)}table tr:first-child th:first-child{border-top-left-radius:var(--rounded)}table tr:first-child th:last-child{border-top-right-radius:var(--rounded)}table tr:last-child td:first-child{border-bottom-left-radius:var(--rounded)}table tr:last-child td:last-child{border-bottom-right-radius:var(--rounded)}td{padding:var(--padding-small)}::-webkit-scrollbar{height:12px;border-radius:0 0 16px 16px}::-webkit-scrollbar-track{background:var(--gray-ultra-light);border-radius:0 0 16px 16px}::-webkit-scrollbar-thumb{background:var(--gray-medium);border-radius:8px}::-webkit-scrollbar-thumb:hover{background:var(--gray-dark);border-radius:8px}@media (max-width: 1023px){body{font-size:12px}.display{font-size:48px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h1,.h1{font-size:32px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h2,.h2{font-size:28px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h3,.h3{font-size:24px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}}\n"}],"routeData":{"route":"/add-entry","isIndex":false,"type":"page","pattern":"^\\/add-entry\\/?$","segments":[[{"content":"add-entry","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/add-entry.astro","pathname":"/add-entry","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/edituser","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/edituser\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"edituser","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/edituser.ts","pathname":"/api/edituser","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/entry/create","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/entry\\/create\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"entry","dynamic":false,"spread":false}],[{"content":"create","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/entry/create.ts","pathname":"/api/entry/create","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/entry/delete","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/entry\\/delete\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"entry","dynamic":false,"spread":false}],[{"content":"delete","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/entry/delete.ts","pathname":"/api/entry/delete","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/singin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/singin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"singin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/singin.ts","pathname":"/api/singin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/singout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/singout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"singout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/singout.ts","pathname":"/api/singout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/singup","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/singup\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"singup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/singup.ts","pathname":"/api/singup","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.D5niZdgH.css"},{"type":"inline","content":":root{--gunmetal: #0a2e36ff;--spring-green: #27fb6bff;--dark-spring-green: #0c7c59ff;--black-bean: #2e0f15ff;--poppy: #da2c38ff;--gunmetal-light: #104956ff;--spring-green-light: #4bfb83ff;--dark-spring-green-light: #0f956aff;--black-bean-light: #3e141cff;--poppy-light: #dd404bff;--white: white;--gray-ultra-light: #fafafa;--gray-light: #f2f2f2;--gray-medium: #e6e6e6;--gray-dark: #808080;--gray-ultra-dark: #1a1a1a;--black: black;--rounded-small: 8px;--rounded: 16px;--gap-small: 8px;--gap: 16px;--gap-large: 32px;--gap-xlarge: 64px;--padding-small: 8px;--padding: 16px;--padding-large: 32px;--margin-small: 8px;--margin: 16px;--margin-large: 32px}@font-face{font-family:Inter Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/inter-latin-wght-normal.BgVq2Tq4.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body{min-height:100vh;font-family:Inter Variable,sans-serif;font-size:16px;display:grid;grid:\"header\" auto \"main\" 1fr \"footer\" auto / 1fr;gap:16px;margin:0}header{grid-area:header;display:flex;flex-direction:column;align-items:center;justify-content:center}main{grid-area:main;display:flex;flex-direction:column;align-items:center;justify-content:center}footer{grid-area:footer;display:flex;flex-direction:column;align-items:center;justify-content:center}.display{font-size:64px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h1,.h1{font-size:40px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h2,.h2{font-size:32px;font-weight:550;line-height:1.25em;letter-spacing:.05em;margin:0}h3,.h3{font-size:28px;font-weight:500;line-height:1.25em;letter-spacing:.05em;margin:0}strong,.strong{font-weight:600}p,.p{font-size:16px;line-height:1.5em;letter-spacing:.05em;margin:0}caption,.caption{font-size:10px;line-height:1.5em;letter-spacing:.05em;margin:0}table{width:100%;border-spacing:0}th{text-align:left;padding:var(--padding-small);background-color:var(--gray-medium)}tr:nth-child(odd){background-color:var(--gray-light)}tr:nth-child(2n){background-color:var(--gray-ultra-light)}table tr:first-child th:first-child{border-top-left-radius:var(--rounded)}table tr:first-child th:last-child{border-top-right-radius:var(--rounded)}table tr:last-child td:first-child{border-bottom-left-radius:var(--rounded)}table tr:last-child td:last-child{border-bottom-right-radius:var(--rounded)}td{padding:var(--padding-small)}::-webkit-scrollbar{height:12px;border-radius:0 0 16px 16px}::-webkit-scrollbar-track{background:var(--gray-ultra-light);border-radius:0 0 16px 16px}::-webkit-scrollbar-thumb{background:var(--gray-medium);border-radius:8px}::-webkit-scrollbar-thumb:hover{background:var(--gray-dark);border-radius:8px}@media (max-width: 1023px){body{font-size:12px}.display{font-size:48px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h1,.h1{font-size:32px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h2,.h2{font-size:28px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h3,.h3{font-size:24px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}}\na[data-astro-cid-36kq3cgc]{padding:16px 32px;background-color:var(--gray-light);border-radius:var(--rounded-small);color:var(--black);text-decoration:none;font-weight:600}a[data-astro-cid-36kq3cgc]:hover{background:var(--gray-medium)}\n"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"button[data-astro-cid-vjeok6qa]{font-family:Inter Variable,sans-serif;font-size:16px;font-weight:600;padding:16px 32px;background-color:var(--dark-spring-green);border:0px;border-radius:var(--rounded-small);color:var(--white)}button[data-astro-cid-vjeok6qa]:hover{background:var(--dark-spring-green-light)}@media (max-width: 1023px){button[data-astro-cid-vjeok6qa]{font-size:12px}}div[data-astro-cid-c7ogtspa]{display:flex;flex-direction:column;gap:var(--gap-small)}label[data-astro-cid-c7ogtspa]{font-weight:600}input[data-astro-cid-c7ogtspa]{font-family:Inter Variable,sans-serif;font-size:16px;font-weight:600;color:var(--gray-dark);background-color:var(--gray-light);line-height:1.5em;letter-spacing:.05em;margin:0;padding:16px;border:0px;border-radius:var(--rounded-small)}input[data-astro-cid-c7ogtspa]:focus{outline:2px solid var(--dark-spring-green-light)}form[data-astro-cid-kjn4tp7m]{width:50%;display:flex;flex-direction:column;justify-content:stretch;gap:var(--gap-large)}@media (min-width: 768px) and (max-width: 1023px){form[data-astro-cid-kjn4tp7m]{width:75%}}@media (max-width: 767px){form[data-astro-cid-kjn4tp7m]{width:90%}}\nsection[data-astro-cid-yfogg3tk]{width:960px;height:auto;padding:var(--padding);display:flex;flex-direction:column;align-items:center;gap:var(--gap-xlarge)}@media (min-width: 768px) and (max-width: 1023px){section[data-astro-cid-yfogg3tk]{width:768px;gap:var(--gap-large)}}@media (max-width: 767px){section[data-astro-cid-yfogg3tk]{width:360px;gap:var(--gap-large)}}\n:root{--gunmetal: #0a2e36ff;--spring-green: #27fb6bff;--dark-spring-green: #0c7c59ff;--black-bean: #2e0f15ff;--poppy: #da2c38ff;--gunmetal-light: #104956ff;--spring-green-light: #4bfb83ff;--dark-spring-green-light: #0f956aff;--black-bean-light: #3e141cff;--poppy-light: #dd404bff;--white: white;--gray-ultra-light: #fafafa;--gray-light: #f2f2f2;--gray-medium: #e6e6e6;--gray-dark: #808080;--gray-ultra-dark: #1a1a1a;--black: black;--rounded-small: 8px;--rounded: 16px;--gap-small: 8px;--gap: 16px;--gap-large: 32px;--gap-xlarge: 64px;--padding-small: 8px;--padding: 16px;--padding-large: 32px;--margin-small: 8px;--margin: 16px;--margin-large: 32px}@font-face{font-family:Inter Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/inter-latin-wght-normal.BgVq2Tq4.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body{min-height:100vh;font-family:Inter Variable,sans-serif;font-size:16px;display:grid;grid:\"header\" auto \"main\" 1fr \"footer\" auto / 1fr;gap:16px;margin:0}header{grid-area:header;display:flex;flex-direction:column;align-items:center;justify-content:center}main{grid-area:main;display:flex;flex-direction:column;align-items:center;justify-content:center}footer{grid-area:footer;display:flex;flex-direction:column;align-items:center;justify-content:center}.display{font-size:64px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h1,.h1{font-size:40px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h2,.h2{font-size:32px;font-weight:550;line-height:1.25em;letter-spacing:.05em;margin:0}h3,.h3{font-size:28px;font-weight:500;line-height:1.25em;letter-spacing:.05em;margin:0}strong,.strong{font-weight:600}p,.p{font-size:16px;line-height:1.5em;letter-spacing:.05em;margin:0}caption,.caption{font-size:10px;line-height:1.5em;letter-spacing:.05em;margin:0}table{width:100%;border-spacing:0}th{text-align:left;padding:var(--padding-small);background-color:var(--gray-medium)}tr:nth-child(odd){background-color:var(--gray-light)}tr:nth-child(2n){background-color:var(--gray-ultra-light)}table tr:first-child th:first-child{border-top-left-radius:var(--rounded)}table tr:first-child th:last-child{border-top-right-radius:var(--rounded)}table tr:last-child td:first-child{border-bottom-left-radius:var(--rounded)}table tr:last-child td:last-child{border-bottom-right-radius:var(--rounded)}td{padding:var(--padding-small)}::-webkit-scrollbar{height:12px;border-radius:0 0 16px 16px}::-webkit-scrollbar-track{background:var(--gray-ultra-light);border-radius:0 0 16px 16px}::-webkit-scrollbar-thumb{background:var(--gray-medium);border-radius:8px}::-webkit-scrollbar-thumb:hover{background:var(--gray-dark);border-radius:8px}@media (max-width: 1023px){body{font-size:12px}.display{font-size:48px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h1,.h1{font-size:32px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h2,.h2{font-size:28px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h3,.h3{font-size:24px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}}\n"}],"routeData":{"route":"/singin","isIndex":false,"type":"page","pattern":"^\\/singin\\/?$","segments":[[{"content":"singin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/singin.astro","pathname":"/singin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"button[data-astro-cid-vjeok6qa]{font-family:Inter Variable,sans-serif;font-size:16px;font-weight:600;padding:16px 32px;background-color:var(--dark-spring-green);border:0px;border-radius:var(--rounded-small);color:var(--white)}button[data-astro-cid-vjeok6qa]:hover{background:var(--dark-spring-green-light)}@media (max-width: 1023px){button[data-astro-cid-vjeok6qa]{font-size:12px}}div[data-astro-cid-c7ogtspa]{display:flex;flex-direction:column;gap:var(--gap-small)}label[data-astro-cid-c7ogtspa]{font-weight:600}input[data-astro-cid-c7ogtspa]{font-family:Inter Variable,sans-serif;font-size:16px;font-weight:600;color:var(--gray-dark);background-color:var(--gray-light);line-height:1.5em;letter-spacing:.05em;margin:0;padding:16px;border:0px;border-radius:var(--rounded-small)}input[data-astro-cid-c7ogtspa]:focus{outline:2px solid var(--dark-spring-green-light)}form[data-astro-cid-kjn4tp7m]{width:50%;display:flex;flex-direction:column;justify-content:stretch;gap:var(--gap-large)}@media (min-width: 768px) and (max-width: 1023px){form[data-astro-cid-kjn4tp7m]{width:75%}}@media (max-width: 767px){form[data-astro-cid-kjn4tp7m]{width:90%}}\nsection[data-astro-cid-yfogg3tk]{width:960px;height:auto;padding:var(--padding);display:flex;flex-direction:column;align-items:center;gap:var(--gap-xlarge)}@media (min-width: 768px) and (max-width: 1023px){section[data-astro-cid-yfogg3tk]{width:768px;gap:var(--gap-large)}}@media (max-width: 767px){section[data-astro-cid-yfogg3tk]{width:360px;gap:var(--gap-large)}}\n:root{--gunmetal: #0a2e36ff;--spring-green: #27fb6bff;--dark-spring-green: #0c7c59ff;--black-bean: #2e0f15ff;--poppy: #da2c38ff;--gunmetal-light: #104956ff;--spring-green-light: #4bfb83ff;--dark-spring-green-light: #0f956aff;--black-bean-light: #3e141cff;--poppy-light: #dd404bff;--white: white;--gray-ultra-light: #fafafa;--gray-light: #f2f2f2;--gray-medium: #e6e6e6;--gray-dark: #808080;--gray-ultra-dark: #1a1a1a;--black: black;--rounded-small: 8px;--rounded: 16px;--gap-small: 8px;--gap: 16px;--gap-large: 32px;--gap-xlarge: 64px;--padding-small: 8px;--padding: 16px;--padding-large: 32px;--margin-small: 8px;--margin: 16px;--margin-large: 32px}@font-face{font-family:Inter Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/inter-latin-wght-normal.BgVq2Tq4.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body{min-height:100vh;font-family:Inter Variable,sans-serif;font-size:16px;display:grid;grid:\"header\" auto \"main\" 1fr \"footer\" auto / 1fr;gap:16px;margin:0}header{grid-area:header;display:flex;flex-direction:column;align-items:center;justify-content:center}main{grid-area:main;display:flex;flex-direction:column;align-items:center;justify-content:center}footer{grid-area:footer;display:flex;flex-direction:column;align-items:center;justify-content:center}.display{font-size:64px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h1,.h1{font-size:40px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h2,.h2{font-size:32px;font-weight:550;line-height:1.25em;letter-spacing:.05em;margin:0}h3,.h3{font-size:28px;font-weight:500;line-height:1.25em;letter-spacing:.05em;margin:0}strong,.strong{font-weight:600}p,.p{font-size:16px;line-height:1.5em;letter-spacing:.05em;margin:0}caption,.caption{font-size:10px;line-height:1.5em;letter-spacing:.05em;margin:0}table{width:100%;border-spacing:0}th{text-align:left;padding:var(--padding-small);background-color:var(--gray-medium)}tr:nth-child(odd){background-color:var(--gray-light)}tr:nth-child(2n){background-color:var(--gray-ultra-light)}table tr:first-child th:first-child{border-top-left-radius:var(--rounded)}table tr:first-child th:last-child{border-top-right-radius:var(--rounded)}table tr:last-child td:first-child{border-bottom-left-radius:var(--rounded)}table tr:last-child td:last-child{border-bottom-right-radius:var(--rounded)}td{padding:var(--padding-small)}::-webkit-scrollbar{height:12px;border-radius:0 0 16px 16px}::-webkit-scrollbar-track{background:var(--gray-ultra-light);border-radius:0 0 16px 16px}::-webkit-scrollbar-thumb{background:var(--gray-medium);border-radius:8px}::-webkit-scrollbar-thumb:hover{background:var(--gray-dark);border-radius:8px}@media (max-width: 1023px){body{font-size:12px}.display{font-size:48px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h1,.h1{font-size:32px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h2,.h2{font-size:28px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h3,.h3{font-size:24px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}}\n"}],"routeData":{"route":"/singup","isIndex":false,"type":"page","pattern":"^\\/singup\\/?$","segments":[[{"content":"singup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/singup.astro","pathname":"/singup","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"button[data-astro-cid-vjeok6qa]{font-family:Inter Variable,sans-serif;font-size:16px;font-weight:600;padding:16px 32px;background-color:var(--dark-spring-green);border:0px;border-radius:var(--rounded-small);color:var(--white)}button[data-astro-cid-vjeok6qa]:hover{background:var(--dark-spring-green-light)}@media (max-width: 1023px){button[data-astro-cid-vjeok6qa]{font-size:12px}}div[data-astro-cid-c7ogtspa]{display:flex;flex-direction:column;gap:var(--gap-small)}label[data-astro-cid-c7ogtspa]{font-weight:600}input[data-astro-cid-c7ogtspa]{font-family:Inter Variable,sans-serif;font-size:16px;font-weight:600;color:var(--gray-dark);background-color:var(--gray-light);line-height:1.5em;letter-spacing:.05em;margin:0;padding:16px;border:0px;border-radius:var(--rounded-small)}input[data-astro-cid-c7ogtspa]:focus{outline:2px solid var(--dark-spring-green-light)}form[data-astro-cid-kjn4tp7m]{width:50%;display:flex;flex-direction:column;justify-content:stretch;gap:var(--gap-large)}@media (min-width: 768px) and (max-width: 1023px){form[data-astro-cid-kjn4tp7m]{width:75%}}@media (max-width: 767px){form[data-astro-cid-kjn4tp7m]{width:90%}}\nsection[data-astro-cid-yfogg3tk]{width:960px;height:auto;padding:var(--padding);display:flex;flex-direction:column;align-items:center;gap:var(--gap-xlarge)}@media (min-width: 768px) and (max-width: 1023px){section[data-astro-cid-yfogg3tk]{width:768px;gap:var(--gap-large)}}@media (max-width: 767px){section[data-astro-cid-yfogg3tk]{width:360px;gap:var(--gap-large)}}\n:root{--gunmetal: #0a2e36ff;--spring-green: #27fb6bff;--dark-spring-green: #0c7c59ff;--black-bean: #2e0f15ff;--poppy: #da2c38ff;--gunmetal-light: #104956ff;--spring-green-light: #4bfb83ff;--dark-spring-green-light: #0f956aff;--black-bean-light: #3e141cff;--poppy-light: #dd404bff;--white: white;--gray-ultra-light: #fafafa;--gray-light: #f2f2f2;--gray-medium: #e6e6e6;--gray-dark: #808080;--gray-ultra-dark: #1a1a1a;--black: black;--rounded-small: 8px;--rounded: 16px;--gap-small: 8px;--gap: 16px;--gap-large: 32px;--gap-xlarge: 64px;--padding-small: 8px;--padding: 16px;--padding-large: 32px;--margin-small: 8px;--margin: 16px;--margin-large: 32px}@font-face{font-family:Inter Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/inter-latin-wght-normal.BgVq2Tq4.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body{min-height:100vh;font-family:Inter Variable,sans-serif;font-size:16px;display:grid;grid:\"header\" auto \"main\" 1fr \"footer\" auto / 1fr;gap:16px;margin:0}header{grid-area:header;display:flex;flex-direction:column;align-items:center;justify-content:center}main{grid-area:main;display:flex;flex-direction:column;align-items:center;justify-content:center}footer{grid-area:footer;display:flex;flex-direction:column;align-items:center;justify-content:center}.display{font-size:64px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h1,.h1{font-size:40px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h2,.h2{font-size:32px;font-weight:550;line-height:1.25em;letter-spacing:.05em;margin:0}h3,.h3{font-size:28px;font-weight:500;line-height:1.25em;letter-spacing:.05em;margin:0}strong,.strong{font-weight:600}p,.p{font-size:16px;line-height:1.5em;letter-spacing:.05em;margin:0}caption,.caption{font-size:10px;line-height:1.5em;letter-spacing:.05em;margin:0}table{width:100%;border-spacing:0}th{text-align:left;padding:var(--padding-small);background-color:var(--gray-medium)}tr:nth-child(odd){background-color:var(--gray-light)}tr:nth-child(2n){background-color:var(--gray-ultra-light)}table tr:first-child th:first-child{border-top-left-radius:var(--rounded)}table tr:first-child th:last-child{border-top-right-radius:var(--rounded)}table tr:last-child td:first-child{border-bottom-left-radius:var(--rounded)}table tr:last-child td:last-child{border-bottom-right-radius:var(--rounded)}td{padding:var(--padding-small)}::-webkit-scrollbar{height:12px;border-radius:0 0 16px 16px}::-webkit-scrollbar-track{background:var(--gray-ultra-light);border-radius:0 0 16px 16px}::-webkit-scrollbar-thumb{background:var(--gray-medium);border-radius:8px}::-webkit-scrollbar-thumb:hover{background:var(--gray-dark);border-radius:8px}@media (max-width: 1023px){body{font-size:12px}.display{font-size:48px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h1,.h1{font-size:32px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h2,.h2{font-size:28px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h3,.h3{font-size:24px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}}\nbutton[data-astro-cid-7akuo3ib]{font-family:Inter Variable,sans-serif;font-size:16px;font-weight:600;padding:16px 32px;background-color:var(--poppy);border:0px;border-radius:var(--rounded-small);color:var(--white)}button[data-astro-cid-7akuo3ib]:hover{background:var(--poppy-light)}@media (max-width: 1023px){button[data-astro-cid-7akuo3ib]{font-size:12px}}\n"}],"routeData":{"route":"/update-user","isIndex":false,"type":"page","pattern":"^\\/update-user\\/?$","segments":[[{"content":"update-user","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/update-user.astro","pathname":"/update-user","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"a[data-astro-cid-3pspvxuc]{padding:16px 32px;background-color:var(--dark-spring-green);border-radius:var(--rounded-small);color:var(--white);text-decoration:none;font-weight:600}a[data-astro-cid-3pspvxuc]:hover{background:var(--dark-spring-green-light)}div[data-astro-cid-j7pv25f6]{display:flex;flex-direction:row;gap:var(--gap)}\na[data-astro-cid-36kq3cgc]{padding:16px 32px;background-color:var(--gray-light);border-radius:var(--rounded-small);color:var(--black);text-decoration:none;font-weight:600}a[data-astro-cid-36kq3cgc]:hover{background:var(--gray-medium)}\nsection[data-astro-cid-yfogg3tk]{width:960px;height:auto;padding:var(--padding);display:flex;flex-direction:column;align-items:center;gap:var(--gap-xlarge)}@media (min-width: 768px) and (max-width: 1023px){section[data-astro-cid-yfogg3tk]{width:768px;gap:var(--gap-large)}}@media (max-width: 767px){section[data-astro-cid-yfogg3tk]{width:360px;gap:var(--gap-large)}}\n:root{--gunmetal: #0a2e36ff;--spring-green: #27fb6bff;--dark-spring-green: #0c7c59ff;--black-bean: #2e0f15ff;--poppy: #da2c38ff;--gunmetal-light: #104956ff;--spring-green-light: #4bfb83ff;--dark-spring-green-light: #0f956aff;--black-bean-light: #3e141cff;--poppy-light: #dd404bff;--white: white;--gray-ultra-light: #fafafa;--gray-light: #f2f2f2;--gray-medium: #e6e6e6;--gray-dark: #808080;--gray-ultra-dark: #1a1a1a;--black: black;--rounded-small: 8px;--rounded: 16px;--gap-small: 8px;--gap: 16px;--gap-large: 32px;--gap-xlarge: 64px;--padding-small: 8px;--padding: 16px;--padding-large: 32px;--margin-small: 8px;--margin: 16px;--margin-large: 32px}@font-face{font-family:Inter Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/inter-latin-wght-normal.BgVq2Tq4.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body{min-height:100vh;font-family:Inter Variable,sans-serif;font-size:16px;display:grid;grid:\"header\" auto \"main\" 1fr \"footer\" auto / 1fr;gap:16px;margin:0}header{grid-area:header;display:flex;flex-direction:column;align-items:center;justify-content:center}main{grid-area:main;display:flex;flex-direction:column;align-items:center;justify-content:center}footer{grid-area:footer;display:flex;flex-direction:column;align-items:center;justify-content:center}.display{font-size:64px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h1,.h1{font-size:40px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h2,.h2{font-size:32px;font-weight:550;line-height:1.25em;letter-spacing:.05em;margin:0}h3,.h3{font-size:28px;font-weight:500;line-height:1.25em;letter-spacing:.05em;margin:0}strong,.strong{font-weight:600}p,.p{font-size:16px;line-height:1.5em;letter-spacing:.05em;margin:0}caption,.caption{font-size:10px;line-height:1.5em;letter-spacing:.05em;margin:0}table{width:100%;border-spacing:0}th{text-align:left;padding:var(--padding-small);background-color:var(--gray-medium)}tr:nth-child(odd){background-color:var(--gray-light)}tr:nth-child(2n){background-color:var(--gray-ultra-light)}table tr:first-child th:first-child{border-top-left-radius:var(--rounded)}table tr:first-child th:last-child{border-top-right-radius:var(--rounded)}table tr:last-child td:first-child{border-bottom-left-radius:var(--rounded)}table tr:last-child td:last-child{border-bottom-right-radius:var(--rounded)}td{padding:var(--padding-small)}::-webkit-scrollbar{height:12px;border-radius:0 0 16px 16px}::-webkit-scrollbar-track{background:var(--gray-ultra-light);border-radius:0 0 16px 16px}::-webkit-scrollbar-thumb{background:var(--gray-medium);border-radius:8px}::-webkit-scrollbar-thumb:hover{background:var(--gray-dark);border-radius:8px}@media (max-width: 1023px){body{font-size:12px}.display{font-size:48px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h1,.h1{font-size:32px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h2,.h2{font-size:28px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}h3,.h3{font-size:24px;font-weight:600;line-height:1.25em;letter-spacing:.05em;margin:0}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/rafa/Developer/ahorro-app/src/pages/add-entry.astro",{"propagation":"none","containsHead":true}],["C:/Users/rafa/Developer/ahorro-app/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["C:/Users/rafa/Developer/ahorro-app/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/rafa/Developer/ahorro-app/src/pages/singin.astro",{"propagation":"none","containsHead":true}],["C:/Users/rafa/Developer/ahorro-app/src/pages/singup.astro",{"propagation":"none","containsHead":true}],["C:/Users/rafa/Developer/ahorro-app/src/pages/update-user.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/add-entry@_@astro":"pages/add-entry.astro.mjs","\u0000@astro-page:src/pages/api/edituser@_@ts":"pages/api/edituser.astro.mjs","\u0000@astro-page:src/pages/api/entry/create@_@ts":"pages/api/entry/create.astro.mjs","\u0000@astro-page:src/pages/api/entry/delete@_@ts":"pages/api/entry/delete.astro.mjs","\u0000@astro-page:src/pages/api/singin@_@ts":"pages/api/singin.astro.mjs","\u0000@astro-page:src/pages/api/singout@_@ts":"pages/api/singout.astro.mjs","\u0000@astro-page:src/pages/api/singup@_@ts":"pages/api/singup.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/singin@_@astro":"pages/singin.astro.mjs","\u0000@astro-page:src/pages/singup@_@astro":"pages/singup.astro.mjs","\u0000@astro-page:src/pages/update-user@_@astro":"pages/update-user.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/rafa/Developer/ahorro-app/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_B_oBz5wz.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/inter-latin-wght-normal.BgVq2Tq4.woff2","/_astro/dashboard.D5niZdgH.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { DEFAULT_404_ROUTE as D, default404Instance as d, ensure404Route as e, manifest as m };