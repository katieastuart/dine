"use strict";var precacheConfig=[["/index.html","e6e8a57036cd0e8c6b55c6cf95307149"],["/static/css/main.63b58f19.css","70e08f781d7396296677a8e45cfa33e2"],["/static/js/main.0c8f9d41.js","673586557b21489ad0fd6c2824912d2d"],["/static/media/americanThumbnail.7873070f.jpg","7873070fbb7d9eca0a3e50e9f7bddf00"],["/static/media/asianThumbnail.41a620af.jpg","41a620af9d398e8cc8023cc172db2ecd"],["/static/media/bakeryThumbnail.a2e1ac26.jpeg","a2e1ac267577ab8771ef763329b87201"],["/static/media/cheesecakeThumbnail.4402d944.jpeg","4402d9447728a332045c75e217aa6886"],["/static/media/cookieThumbnail.24e6520a.jpg","24e6520a81213b564b445059799beb51"],["/static/media/dineBackground.249272a6.jpg","249272a6f61479b1f8272c4ce3b25a71"],["/static/media/iceCreamThumbnail.6f3e3012.jpg","6f3e301212e3eac33fe0ac0aeb6bb840"],["/static/media/italianThumbnail.473b93e9.jpg","473b93e97ac621f6330a8cb998fa5c26"],["/static/media/logoBlack.edf9bb56.png","edf9bb56c6f2aed1cf5f46283e3caa26"],["/static/media/logoWhite.00af9145.png","00af914504bbe135097fc1b7aeca7e05"],["/static/media/mexicanThumbnail.a69a22a3.jpg","a69a22a3f52a5bb0b67814beecc9f311"],["/static/media/pizzaThumbnail.abc2edbe.jpg","abc2edbed5e653ef145f9df702c9401d"],["/static/media/saladThumbnail.e1aa4d31.jpg","e1aa4d31b8ccd41eddfb02a5a84f9ef8"],["/static/media/smoothieThumbnail.eaea99c3.jpeg","eaea99c31ef0b0a9a95a08b874b47977"],["/static/media/sodaThumbnail.60b5fecd.jpeg","60b5fecd3fc270d862ecc336a1d9fde1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});