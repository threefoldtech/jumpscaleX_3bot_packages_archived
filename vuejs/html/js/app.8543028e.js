(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],p=0,f=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(f.length)f.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(l.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},l=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vuejs/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=s;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._v("\n  Hello to App\n  "),n("br"),n("router-link",{attrs:{to:"/hello"}},[e._v("Go to Hello world")]),n("br"),n("router-link",{attrs:{to:"/test"}},[e._v("Go to Test Page")]),n("router-view"),n("br")],1)},l=[],a={name:"app"},i=a,s=(n("034f"),n("2877")),u=Object(s["a"])(i,o,l,!1,null,null,null),c=u.exports,p=n("8c4f"),f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("p",[e._v("This is the main page")])])}],d={name:"HelloWorld",props:{msg:String}},g=d,v=Object(s["a"])(g,f,h,!1,null,null,null),_=v.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Test getting some data from actor")])},m=[],y=n("bc3a"),O=n.n(y);Object({NODE_ENV:"production",BASE_URL:"/vuejs/"}).NODE_TLS_REJECT_UNAUTHORIZED="0",O.a.defaults.headers.post["Content-Type"]="application/json";const j="https://172.17.0.2/web/gedis/http/vuejs";var w={data(){var e={};return console.log("heeeeeere",e),{people_info:e}},methods:{async callActorWithArgs(e,t){let n=()=>O.a.post(`${j}/${e}`,{args:t}),r=await n();return r.data},ping(){console.log("PING: ",this.callActorWithArgs("ping",{}))},get_people(){let e=this.callActorWithArgs("get_info",{});this.people_info=e,console.log(`>> ${e}`)}},mounted(){this.get_people(),this.ping()}},E=w,x=Object(s["a"])(E,b,m,!1,null,null,null),T=x.exports;r["a"].config.productionTip=!1,r["a"].use(p["a"]);const A=[{path:"/hello",component:_},{path:"/test",component:T}],P=new p["a"]({routes:A});new r["a"]({render:e=>e(c),router:P}).$mount("#app")},"64a9":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.8543028e.js.map
