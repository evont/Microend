(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["mvue2"]=t():e["mvue2"]=t()})(window,(function(){return function(e){function t(t){for(var r,i,a=t[0],c=t[1],l=t[2],s=0,f=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},u=[];function i(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f38ed83a"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=i(e);var l=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",l.name="ChunkLoadError",l.type=r,l.request=u,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/mvue2/",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp_mvue2"]=window["webpackJsonp_mvue2"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var p=l;return u.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return g})),n.d(t,"mount",(function(){return j})),n.d(t,"unmount",(function(){return P}));var r=n("1da1"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("83f4"),n("2b0e")),u=n("8c4f"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"vu"}},[n("router-view")],1)},a=[],c=(n("034f"),n("2877")),l={},s=Object(c["a"])(l,i,a,!1,null,null,null),p=s.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("This is an home page, hit: "+e._s(e.hit))]),n("button",{on:{click:e.hitMe}},[e._v("hit me")])])},d=[],h={data:function(){return{hit:0}},methods:{hitMe:function(){this.hit+=1}}},m=h,v=Object(c["a"])(m,f,d,!1,null,null,null),_=v.exports;o["a"].config.productionTip=!1,o["a"].use(u["a"]);var b=null,w=null;function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.container;b=new u["a"]({base:window.__POWERED_BY_QIANKUN__?"/c/mvue2":"/",mode:"history",routes:[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),w=new o["a"]({router:b,render:function(e){return e(p)}}).$mount(t?t.querySelector("#app"):"#app")}function g(){return O.apply(this,arguments)}function O(){return O=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=n.length>0&&void 0!==n[0]?n[0]:{},console.log("[vue] vue2 app bootstraped"),console.log("props from parent: ",t);case 3:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function j(e){return E.apply(this,arguments)}function E(){return E=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[vue] props from main framework",t),y(t);case 2:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function P(){return x.apply(this,arguments)}function x(){return x=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:w.$destroy(),w.$el.innerHTML="",w=null,b=null;case 4:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||y()},"83f4":function(e,t,n){n("99af"),function(){window.__POWERED_BY_QIANKUN__&&(console.log(Object({NODE_ENV:"production",VUE_APP_PORT:"8222",BASE_URL:"/mvue2/"})),n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)}()},"85ec":function(e,t,n){}})}));
//# sourceMappingURL=app.317b29c3.js.map