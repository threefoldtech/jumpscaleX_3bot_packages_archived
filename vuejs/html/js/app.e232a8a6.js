(function(e){function t(t){for(var r,a,u=t[0],c=t[1],i=t[2],p=0,f=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(f.length)f.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(l.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},l=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/location-example/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var s=c;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._v("\n  Hello to App\n  "),n("br"),n("router-link",{attrs:{to:"/hello"}},[e._v("Go to Hello world")]),n("br"),n("router-link",{attrs:{to:"/test"}},[e._v("Go to Test Page")]),n("router-view")],1)},l=[],a={name:"app"},u=a,c=(n("034f"),n("2877")),i=Object(c["a"])(u,o,l,!1,null,null,null),s=i.exports,p=n("8c4f"),f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("p",[e._v("This is the main page")])])}],d={name:"HelloWorld",props:{msg:String}},h=d,b=Object(c["a"])(h,f,v,!1,null,null,null),m=b.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"test"},[n("p",[e._v("Second page")])])}],y={},w=Object(c["a"])(y,_,g,!1,null,null,null),O=w.exports;r["a"].config.productionTip=!1,r["a"].use(p["a"]);const j=[{path:"/hello",component:m},{path:"/test",component:O}],x=new p["a"]({routes:j});new r["a"]({render:e=>e(s),router:x}).$mount("#app")},"64a9":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.e232a8a6.js.map
