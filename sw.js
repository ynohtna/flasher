if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(s[u])return;let r={};const t=e=>l(e,u),a={module:{uri:u},exports:r,require:t};s[u]=Promise.all(i.map((e=>a[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-e0782b83"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app_/immutable/assets/_page-1158c72c.css",revision:null},{url:"app_/immutable/chunks/_page-da46b06b.js",revision:null},{url:"app_/immutable/chunks/0-c141d743.js",revision:null},{url:"app_/immutable/chunks/1-fbd85847.js",revision:null},{url:"app_/immutable/chunks/2-ab45d5e1.js",revision:null},{url:"app_/immutable/chunks/index-ab783ea0.js",revision:null},{url:"app_/immutable/chunks/index-e7fb4a95.js",revision:null},{url:"app_/immutable/chunks/singletons-83396498.js",revision:null},{url:"app_/immutable/components/error.svelte-0494f4e3.js",revision:null},{url:"app_/immutable/components/layout.svelte-83ef6d7b.js",revision:null},{url:"app_/immutable/components/pages/_page.svelte-4e97f555.js",revision:null},{url:"app_/immutable/modules/pages/_page.js-dc85b7cd.js",revision:null},{url:"app_/immutable/start-33b1eed6.js",revision:null},{url:"registerSW.js",revision:"cc7000d7ebf6875b7a2b95575d6dce1d"},{url:"./",revision:"576bf66bc3c10137a3cdceed0a3e2910"},{url:"manifest.webmanifest",revision:"b76c93cda3adc95691df460697d55a73"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./")))}));
