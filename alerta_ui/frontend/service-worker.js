!function(){"use strict";const e="cache1582216009223",t=["client/index.9c196a74.js","client/client.937a14c7.js","client/index.5b44501e.js","client/about.a6e23749.js","client/[identifier].200c7746.js","client/data.b9deb335.js"].concat(["service-worker-index.html","favicon.png","global.css","great-success.png","img/loader.gif","logo-192.png","logo-512.png","manifest.json"]),s=new Set(t);self.addEventListener("install",s=>{s.waitUntil(caches.open(e).then(e=>e.addAll(t)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",t=>{t.waitUntil(caches.keys().then(async t=>{for(const s of t)s!==e&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&s.has(n.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open(e).then(async e=>{try{const s=await fetch(t.request);return s&&200===s.status&&"basic"===s.type?(e.put(t.request,s.clone()),s):s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}}))))})}();