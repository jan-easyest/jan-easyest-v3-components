import{d as r,g as i,o as c,c as l,r as d,n as f,l as m,V as s,a2 as h,u as A,j as g,A as y,a3 as b,a4 as P,a5 as _,a6 as v,a7 as j,a8 as C,a9 as w,aa as E,ab as R,ac as S,ad as O,ae as T,af as D,ag as $}from"./chunks/framework.cd69b660.js";import{t as x}from"./chunks/theme.3eacdd42.js";const B=r({name:"jan-button"}),V=r({...B,props:{type:null},setup(e){const t=e,a=i(()=>({[`jan-button--${t.type}`]:t.type}));return(n,N)=>(c(),l("button",{class:f(["jan-button",m(a)])},[d(n.$slots,"default")],2))}}),F=e=>(e.install=t=>{const a=e.name;t.component(a,e)},e),L=F(V),p=Object.freeze(Object.defineProperty({__proto__:null,Button:L},Symbol.toStringTag,{value:"Module"})),k={install:e=>{for(let t in p)e.use(p[t])}},z={...x,enhanceApp:async({app:e})=>{e.use(k)}};function u(e){if(e.extends){const t=u(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=u(z),I=r({name:"VitePressApp",setup(){const{site:e}=A();return g(()=>{y(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),b(),P(),_(),o.setup&&o.setup(),()=>v(o.Layout)}});async function M(){const e=H(),t=G();t.provide(j,e);const a=C(e.route);return t.provide(w,a),t.component("Content",E),t.component("ClientOnly",R),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:S}),{app:t,router:e,data:a}}function G(){return O(I)}function H(){let e=s,t;return T(a=>{let n=D(a);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),$(()=>import(n),[])):null},o.NotFound)}s&&M().then(({app:e,router:t,data:a})=>{t.go().then(()=>{h(t.route,a.site),e.mount("#app")})});export{M as createApp};
