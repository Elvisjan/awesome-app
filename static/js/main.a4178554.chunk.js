(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{22:function(e,n,t){e.exports=t(35)},35:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(14),c=t.n(o),u=t(15),i=t(5),l=t(18),f=t(4),d=t(8),s=t.n(d),p=t(3),m=Object(p.c)("root");m.onCreateStore((function(e){var n=localStorage.getItem(e.shortName);null!==n&&e.setState(JSON.parse(n));var t=!1;return e.watch((function(n){t&&localStorage.setItem(e.shortName,JSON.stringify(n)),t=!0})),e}));var h=m.event,b=m.effect,v=m.store,g=(h("add city"),h("delete city")),x=b({handler:function(e){var n,t;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n="https://api.openweathermap.org/data/2.5/weather?APPID=a82f5bd7cf235d2d97cf411fd97a845d&units=metric&lang=ru&q=".concat(e),r.next=3,s.a.awrap(fetch(n));case 3:return t=r.sent,r.abrupt("return",t.json());case 5:case"end":return r.stop()}}))}}),w=b({handler:function(e){var n,t,r,a,o,c;return s.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:n=!0,t=!1,r=void 0,u.prev=3,a=e[Symbol.iterator]();case 5:if(n=(o=a.next()).done){u.next=12;break}return c=o.value,u.next=9,s.a.awrap(x(c));case 9:n=!0,u.next=5;break;case 12:u.next=18;break;case 14:u.prev=14,u.t0=u.catch(3),t=!0,r=u.t0;case 18:u.prev=18,u.prev=19,n||null==a.return||a.return();case 21:if(u.prev=21,!t){u.next=24;break}throw r;case 24:return u.finish(21);case 25:return u.finish(18);case 26:case"end":return u.stop()}}),null,null,[[3,14,18,26],[19,,21,25]])}}),O=v(["\u041c\u043e\u0441\u043a\u0432\u0430"],{name:"cityNames"}).on(x.done,(function(e,n){var t=n.result,r=n.params;if(200===t.cod){if((e=Object(f.a)(e)).find((function(e){return e.toLowerCase()===r.toLowerCase()})))return;return e.push(r),e}})).on(g,(function(e,n){return e.filter((function(e,t){return t!==n}))})),j=v([],{name:"cityList"}).on(g,(function(e,n){return e.filter((function(e,t){return t!==n}))})).on(x.done,(function(e,n){var t=n.result,r=n.params,a=(e=Object(f.a)(e)).find((function(e){return e.name.toLowerCase()===r.toLowerCase()}));return a?e[e.indexOf(a)]=Object(l.a)({},a,{temperature:t.main.temp.toFixed(),feels:t.main.feels_like.toFixed(),weather:t.weather}):e.push({name:r.toUpperCase(),weather:t.weather,temperature:t.main.temp.toFixed(),cod:t.cod,id:t.id,feels:t.main.feels_like.toFixed()}),e}));j.getState().length<1&&x("\u041c\u041e\u0421\u041a\u0412\u0410");var y=h("add input value"),E=v("").on(y,(function(e,n){return n.currentTarget.value})).reset(x),k=t(2),S=t(1);function z(){var e=Object(k.a)(["\n  width: 20rem;\n  height: 2rem;\n  background-color: lightgray;\n  border-radius: 3px;\n  border: none;\n  color: black;\n  margin-left: 10px;\n  padding-left:18px;\n  ::placeholder {    \n    font-size: 17px;\n    width: 100%;\n    color: black;  \n  }\n"]);return z=function(){return e},e}var C=S.default.input(z());function N(){var e=Object(k.a)(["\n  width: 100%;\n  height: 30%;\n  color: white;\n  font-size: 4rem;\n  text-align: center;\n  @media (max-width: 768px) {\n    position: relative;\n    left: 5%;\n    top:50%;      \n    font-size: 2rem;\n  }\n"]);return N=function(){return e},e}var F=S.default.h1(N());function I(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-columns: 1fr 120px;\n  color: #fff;\n  font-size: 17px;\n  width: 98%;\n"]);return I=function(){return e},e}var L=S.default.li(I());function J(){var e=Object(k.a)(["\n  height: 100%;\n  list-style: none;  \n"]);return J=function(){return e},e}var A=S.default.ul(J());function D(){var e=Object(k.a)(["\n  padding-left: 20px;\n  font-size: 25px;\n  color: #fff;\n"]);return D=function(){return e},e}var P=S.default.label(D());function T(){var e=Object(k.a)(["\n  \n"]);return T=function(){return e},e}var _=S.default.form(T());function q(){var e=Object(k.a)(["\n  height: 150px;\n  margin-top: -43px;\n  background: linear-gradient(to right, #2c3e50, #3498db);\n  @media (max-width: 768px) {\n    position: relative;\n    height: 250px;\n  }\n"]);return q=function(){return e},e}var B=S.default.header(q());function U(){var e=Object(k.a)(["\n  text-align:center;\n  color: #fff;\n  font-size: 36px;\n"]);return U=function(){return e},e}var G=S.default.div(U());function H(){var e=Object(k.a)(["\n  border-style: none;\n  outline: none;\n  width: 120px;\n  height: 30px;\n  border-radius: 10px;\n  background-color: green;\n  color: #fff;\n  :hover {\n    opacity: 0.9;\n  }\n  :active {\n    background-color: red;\n  }\n"]);return H=function(){return e},e}var K=S.default.button(H());function M(){var e=Object(k.a)(['  \n  display: block;\n  background-color: green;\n  color: #fff;\n  margin-left: 355px;\n  font-size: 16px;\n  width: 280px;\n  height: 20px;\n  text-align: center;\n  border-radius: 5px;\n\n    ::after {\n      content: " ";\n      display: block;\n      width: 64px;\n      height: 64px;\n      margin: 8px;\n      margin-top: -30px;\n      margin-left: 300px;\n      border-radius: 50%;\n      border: 6px solid #fff;\n      border-color: yellow transparent yellow transparent;\n      animation: 1.2s '," linear infinite;\n}\n"]);return M=function(){return e},e}function Q(){var e=Object(k.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }  \n"]);return Q=function(){return e},e}var R=Object(S.keyframes)(Q()),V=S.default.div(M(),R);function W(){var e=Object(k.a)(["\n"]);return W=function(){return e},e}S.default.body(W());function X(){var e=Object(k.a)(["\n  min-height: 740px;\n  background: linear-gradient(to right, #2c3e50, #4ca1af);\n"]);return X=function(){return e},e}var Y=S.default.section(X()),Z=function(e){var n=e.submiter,t=e.value,r=e.placeholder,o=e.type,c=e.changer,u=e.label;return a.a.createElement(_,{onSubmit:n},a.a.createElement(P,null,u),a.a.createElement(C,{type:o,value:t,placeholder:r,onChange:c}))},$=function(){var e=Object(i.c)(E),n=Object(i.c)(O);a.a.useEffect((function(){var e=setInterval((function(){console.log("This will run after 1 minute!"),w(n)}),6e4);return function(){return clearInterval(e)}}),[n]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(B,{className:"App-header"},a.a.createElement(F,null,"\u041a\u043b\u0430\u0441\u0441\u043d\u043e\u0435 \u043f\u043e\u0433\u043e\u0434\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),a.a.createElement(ne,{spinner:V})),a.a.createElement(Y,null,a.a.createElement(Z,{value:Object(i.c)(E),changer:y,type:"text",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434",submiter:function(n){n.preventDefault(),x(e)},label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"}),Object(i.c)(j).length>0?a.a.createElement(ee,null):a.a.createElement(G,null,"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0433\u043e\u0440\u043e\u0434")))},ee=function(){return Object(i.b)(j,(function(e,n){var t=e.name,r=e.weather,o=e.temperature,c=e.cod,u=e.feels,i=200===c?a.a.createElement(L,null,"\u0412 \u0433\u043e\u0440\u043e\u0434\u0435 ",t," \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 ",r[0].description,", \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432\u043e\u0437\u0434\u0443\u0445\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 ",o," \xb0 \u043f\u043e \u0446\u0435\u043b\u044c\u0441\u0438\u044e, \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",u,"\xb0 \u043f\u043e \u0446\u0435\u043b\u044c\u0441\u0438\u044e",a.a.createElement(K,{type:"button",onClick:function(){g(n)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")):null;return a.a.createElement(A,null,i)}))},ne=Object(i.a)(x.pending,(function(e,n){return n?a.a.createElement(V,null,"\u0418\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435"):null}));var te=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.Normalize,null),a.a.createElement($,null))};c.a.render(a.a.createElement((function(){return a.a.createElement(te,null)}),null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a4178554.chunk.js.map