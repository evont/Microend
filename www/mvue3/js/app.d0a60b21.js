(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["mvue3"]=t():e["mvue3"]=t()})(window,(function(){return function(e){function t(t){for(var r,c,i=t[0],a=t[1],f=t[2],p=0,l=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);s&&s(t);while(l.length)l.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"cfecdf58"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=c(e);var f=new Error;u=function(t){a.onerror=a.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",f.name="ChunkLoadError",f.type=r,f.request=u,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:a})}),12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/mvue3/",i.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp_mvue3"]=window["webpackJsonp_mvue3"]||[],f=a.push.bind(a);a.push=t,a=a.slice();for(var p=0;p<a.length;p++)t(a[p]);var s=f;return u.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"32cc":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return w})),n.d(t,"mount",(function(){return g})),n.d(t,"unmount",(function(){return E}));var r=n("1da1"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("83f4"),n("7a23")),u=Object(o["d"])("Home"),c=Object(o["d"])("About");function i(e,t){var n=Object(o["r"])("router-link"),r=Object(o["r"])("router-view");return Object(o["n"])(),Object(o["c"])("div",null,[Object(o["e"])(n,{to:"/"},{default:Object(o["v"])((function(){return[u]})),_:1}),Object(o["e"])(n,{to:"/about"},{default:Object(o["v"])((function(){return[c]})),_:1}),Object(o["e"])(r)])}n("7ff0");const a={};a.render=i;var f=a,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),s={class:"about"},l=Object(o["e"])("h1",null,"This is an home page",-1);function d(e,t,n,r,u,c){return Object(o["n"])(),Object(o["c"])("div",s,[l])}var b={mounted:function(){console.log(this.$route)}};b.render=d;var m=b,v=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],h=Object(p["a"])({history:Object(p["b"])(window.__POWERED_BY_QIANKUN__?"/c/mvue3/":"/mvue3/"),routes:v}),_=h,O=null;function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.container;O=Object(o["b"])(f),O.use(_),O.mount(t?t.querySelector("#app"):"#app")}function w(){return y.apply(this,arguments)}function y(){return y=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[vue] vue3 app bootstraped");case 1:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function g(e){return P.apply(this,arguments)}function P(){return P=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[vue] props from main framework",t),j(t);case 2:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function E(){return x.apply(this,arguments)}function x(){return x=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:O.unmount(),O=null;case 2:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||j()},"7ff0":function(e,t,n){"use strict";n("32cc")},"83f4":function(e,t,n){n("99af"),function(){window.__POWERED_BY_QIANKUN__&&(console.log(Object({NODE_ENV:"production",VUE_APP_PORT:"8333",BASE_URL:"/mvue3/"})),n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)}()}})}));
//# sourceMappingURL=app.d0a60b21.js.map