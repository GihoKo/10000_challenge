if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const f=e=>n(e,t),r={module:{uri:t},exports:i,require:f};s[t]=Promise.all(a.map((e=>r[e]||f(e)))).then((e=>(c(...e),i)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"9dff2bcf096a88ca4b3eb2e2ccae2ef7"},{url:"/_next/static/JZgJ2bwBfhFnuf0cBZpjf/_buildManifest.js",revision:"ff91a99aabb758e82803c01d2eaa3ba9"},{url:"/_next/static/JZgJ2bwBfhFnuf0cBZpjf/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/16-8edff84e6d541579.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/173-3a421a18de779094.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/2-80ed5597ef66cf30.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/231-c9fac06ce8ad6d34.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/35.03ae917f238a8966.js",revision:"03ae917f238a8966"},{url:"/_next/static/chunks/472-129a047dd4560a0b.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/878-57d7df4dd29005c2.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/_not-found/page-410cac2ed1e10124.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/challenge/%5BchallengeId%5D/layout-f8b4b08e95fe4f22.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/challenge/%5BchallengeId%5D/page-f53cca29fadc5b95.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/challenge/add/error-70d7c462297a702a.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/challenge/add/layout-d30423644ff4b10e.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/challenge/add/page-9af2d535ab1de829.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/challenge/error-8e8cdc22443bc8a1.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/challenge/layout-28c073734b777eda.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/challenge/page-e5deec57c700e78f.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/error-d06822317939b08a.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/expenses/add/error-c96a721aba33ab60.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/expenses/add/layout-f142cc94976f5d8c.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/expenses/add/page-d47595c712e8b56e.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/expenses/edit/%5BexpenseId%5D/error-462477c335561efc.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/expenses/edit/%5BexpenseId%5D/layout-6f2efbeed7925007.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/expenses/edit/%5BexpenseId%5D/page-a73b78f35fb2c1a4.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/expenses/error-844d3bcbc060ad9a.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/expenses/layout-3929cacc39c5099d.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/expenses/loading-3c91b449e172c759.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/expenses/page-0fab9ddd55888920.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/layout-333d65f5cb4f6eff.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/page-0e7a6df4e5aedf57.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/home/setting/page-5751a610ad2d4b5e.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/landing/error-50a1e5710dd6efb0.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/landing/page-0ac18f4d0b2aa665.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/layout-b9479e89167cd402.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/page-75b9d53b0976fce0.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/signIn/error-03db3a2b347cfb19.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/signIn/page-183b4e1c23b82117.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/signUp/error-80761d75c0aa450c.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/app/signUp/page-32809c6009d49adf.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/fd9d1056-523979734bb38545.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/framework-d4f4b0af9d6f2668.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/main-app-463a2be07e5a9fcb.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/main-d433d2f49732762a.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/pages/_app-db7c95ba984bf583.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/pages/_error-8d1dfd9023e97a81.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-7ce23506a3872b36.js",revision:"JZgJ2bwBfhFnuf0cBZpjf"},{url:"/_next/static/css/ffaf7923b2772543.css",revision:"ffaf7923b2772543"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/challenge.06cc4158.svg",revision:"1246713500f4dc56b580a47c8ff3be83"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/media/dropdown-arrow-focused.6eacc44b.svg",revision:"53201e02eef8b5b5d17e72d565ffc864"},{url:"/_next/static/media/dropdown-arrow.7d4dee54.svg",revision:"f6536e8ab070998a90308f7e03408f82"},{url:"/_next/static/media/home-black.ff6f8bd4.svg",revision:"99e0bd82009ba9e98aca6f8354393f87"},{url:"/_next/static/media/logo.3e6145e2.png",revision:"480f0c68124c03845a64a3070ad81355"},{url:"/_next/static/media/money.8b773e10.svg",revision:"774346daf30382e61d94b36d17516e57"},{url:"/_next/static/media/right-arrow.54d52f11.svg",revision:"909931bb592db9b7efb118fa52b37f66"},{url:"/_next/static/media/setting-black.e6d6e196.svg",revision:"e8a477f4d1b6e1cf61089b18083f488a"},{url:"/logo192.png",revision:"480f0c68124c03845a64a3070ad81355"},{url:"/logo512.png",revision:"480f0c68124c03845a64a3070ad81355"},{url:"/manifest.json",revision:"f10c0a31d2c67233e8bf0ce9e5ab5db3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
