(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{22:function(e,n,t){e.exports=t(35)},35:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(14),c=t.n(o),i=t(15),u=t(2),l=t(1);function f(){var e=Object(u.a)(["\n\nbody {\n  height: 100vh;\n  display: grid;\n}\n#root {\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n"]);return f=function(){return e},e}var s=Object(l.createGlobalStyle)(f()),d=t(7),p=t(18),h=t(4),m=t(3),b=t(5),g=t.n(b),v=Object(m.d)({handler:function(e){var n,t;return g.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n="https://api.openweathermap.org/data/2.5/weather?APPID=a82f5bd7cf235d2d97cf411fd97a845d&units=metric&lang=ru&q=".concat(e),r.next=3,g.a.awrap(fetch(n));case 3:return t=r.sent,r.abrupt("return",t.json());case 5:case"end":return r.stop()}}))}}),x=Object(m.e)("trigger sample"),w=function(e){e.preventDefault(),x()},O=Object(m.d)({handler:function(e,n){var t,r,a,o,c,i;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:t=!0,r=!1,a=void 0,n.prev=3,o=e[Symbol.iterator]();case 5:if(t=(c=o.next()).done){n.next=12;break}return i=c.value,n.next=9,g.a.awrap(v(i));case 9:t=!0,n.next=5;break;case 12:n.next=18;break;case 14:n.prev=14,n.t0=n.catch(3),r=!0,a=n.t0;case 18:n.prev=18,n.prev=19,t||null==o.return||o.return();case 21:if(n.prev=21,!r){n.next=24;break}throw a;case 24:return n.finish(21);case 25:return n.finish(18);case 26:case"end":return n.stop()}}),null,null,[[3,14,18,26],[19,,21,25]])}}),j=(Object(m.e)("add city"),Object(m.e)("add input value")),y=Object(m.e)("delete item"),E=Object(m.f)(JSON.parse(localStorage.getItem("cityNames"))||[],{name:"cityNames"}).on(v.done,(function(e,n){var t=n.result,r=n.params;if(200===t.cod){if((e=Object(h.a)(e)).find((function(e){return e.toLowerCase()===r.toLowerCase()})))return;return e.push(r),e}})).on(y,(function(e,n){return e.filter((function(e,t){return t!==n}))})),k=Object(m.f)(JSON.parse(localStorage.getItem("cityList"))||[],{name:"cityList"}).on(y,(function(e,n){return e.filter((function(e,t){return t!==n}))})).on(v.done,(function(e,n){var t=n.result,r=n.params,a=(e=Object(h.a)(e)).find((function(e){return e.name.toLowerCase()===r.toLowerCase()}));return a?e[e.indexOf(a)]=Object(p.a)({},a,{temperature:t.main.temp,feels:t.main.feels_like,weather:t.weather}):e.push({name:r.toUpperCase(),weather:t.weather,temperature:t.main.temp,cod:t.cod,id:t.id,feels:t.main.feels_like}),e})),S=Object(m.f)("").on(j,(function(e,n){return n.currentTarget.value})).reset(v);function I(){var e=Object(u.a)(["\n  width: 18rem;\n  height: 2rem;\n  background-color: lightgray;\n  border-radius: 3px;\n  border: none;\n  color: black;\n  margin-left: 10px;\n  padding-left: 18px;\n  ::placeholder {\n    font-size: 17px;\n    width: 100%;\n    color: black;\n  }\n"]);return I=function(){return e},e}E.updates.watch((function(e){return localStorage.setItem(E.shortName,JSON.stringify(e))})),k.updates.watch((function(e){return localStorage.setItem(k.shortName,JSON.stringify(e))})),k.getState().length<1&&v("\u041c\u041e\u0421\u041a\u0412\u0410"),E.getState().length>0&&O(E.getState()),Object(m.i)({source:S,clock:x,target:v});var N=l.default.input(I());function z(){var e=Object(u.a)(["\n  margin: 0;\n  width: 100%;\n  height: 30%;\n  color: white;\n  font-size: 4rem;\n  text-align: center;\n  @media (max-width: 768px) {\n    width: 80%;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 2rem;\n  }\n"]);return z=function(){return e},e}var C=l.default.h1(z());function J(){var e=Object(u.a)(["\n  display: grid;\n  margin-left: -15px;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 20px 120px;\n  color: #fff;\n  font-size: 17px;\n  width: 98%;\n"]);return J=function(){return e},e}var L=l.default.li(J());function A(){var e=Object(u.a)(["\n  height: 100%;\n  list-style: none;\n  margin-bottom: 0;\n"]);return A=function(){return e},e}var D=l.default.ul(A());function F(){var e=Object(u.a)(["\n  padding-left: 20px;\n  font-size: 25px;\n  color: #fff;\n"]);return F=function(){return e},e}var P=l.default.label(F());function _(){var e=Object(u.a)([""]);return _=function(){return e},e}var q=l.default.form(_());function B(){var e=Object(u.a)(["\n  position: relative;\n  height: 150px;\n  background: linear-gradient(to right, #2c3e50, #3498db);\n  @media (max-width: 768px) {\n    position: relative;\n    height: 250px;\n  }\n"]);return B=function(){return e},e}var G=l.default.header(B());function T(){var e=Object(u.a)(["\n  text-align: center;\n  color: #fff;\n  font-size: 36px;\n"]);return T=function(){return e},e}var U=l.default.div(T());function H(){var e=Object(u.a)(["\n  border-style: none;\n  outline: none;\n  width: 120px;\n  height: 30px;\n  border-radius: 10px;\n  background-color: green;\n  color: #fff;\n  :hover {\n    opacity: 0.9;\n  }\n  :active {\n    background-color: red;\n  }\n"]);return H=function(){return e},e}var K=l.default.button(H());function M(){var e=Object(u.a)(['\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 0%;\n  background-color: green;\n  color: #fff;\n  font-size: 16px;\n  width: 280px;\n  height: 20px;\n  text-align: center;\n  border-radius: 5px;\n  ::after {\n    content: " ";\n    display: block;\n    position: absolute;\n    left: 75%;\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    border: 6px solid #fff;\n    border-color: yellow transparent yellow transparent;\n    animation: 1.2s '," linear infinite;\n  }\n  @media (max-width: 768px) {\n    top: 10%;\n    left: 0;\n    width: 100%;\n    background-color: none;\n  }\n"]);return M=function(){return e},e}function Q(){var e=Object(u.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }  \n"]);return Q=function(){return e},e}var R=Object(l.keyframes)(Q()),V=l.default.div(M(),R);function W(){var e=Object(u.a)(["\n  min-height: 740px;\n  background: linear-gradient(to right, #2c3e50, #4ca1af);\n"]);return W=function(){return e},e}var X=l.default.section(W());function Y(){var e=Object(u.a)(["\n  width: 30px;\n  height: 30px;\n"]);return Y=function(){return e},e}var Z=l.default.img(Y()),$=function(e){var n=e.submiter,t=e.value,r=e.placeholder,o=e.type,c=e.changer,i=e.label;return a.a.createElement(q,{onSubmit:n},a.a.createElement(P,null,i),a.a.createElement(N,{type:o,value:t,placeholder:r,onChange:c}))},ee=function(){var e=Object(d.c)(E);return a.a.useEffect((function(){var n=setInterval((function(){O(e)}),6e4);return function(){return clearInterval(n)}}),[e]),a.a.createElement(a.a.Fragment,null,a.a.createElement(G,{className:"App-header"},a.a.createElement(C,null,"\u041a\u043b\u0430\u0441\u0441\u043d\u043e\u0435 \u043f\u043e\u0433\u043e\u0434\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),a.a.createElement(te,{spinner:V})),a.a.createElement(X,null,a.a.createElement($,{value:Object(d.c)(S),changer:j,type:"text",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434",submiter:w,label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"}),Object(d.c)(k).length>0?a.a.createElement(ne,null):a.a.createElement(U,null,"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0433\u043e\u0440\u043e\u0434")))},ne=function(){return Object(d.b)(k,(function(e,n){var t=e.name,r=e.weather,o=e.temperature,c=e.cod,i=e.feels,u=200===c?a.a.createElement(L,null,"\u0412 \u0433\u043e\u0440\u043e\u0434\u0435 ",t," \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 ",r[0].description,", \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432\u043e\u0437\u0434\u0443\u0445\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 ",parseInt(o)," \xb0 \u043f\u043e \u0446\u0435\u043b\u044c\u0441\u0438\u044e, \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",parseInt(i),"\xb0 \u043f\u043e \u0446\u0435\u043b\u044c\u0441\u0438\u044e"," ",a.a.createElement(Z,{alt:"\u043f\u043e\u0433\u043e\u0434\u043d\u043e\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435",src:"http://openweathermap.org/img/w/".concat(r[0].icon,".png")}),a.a.createElement(K,{type:"button",onClick:function(){y(n)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")):null;return a.a.createElement(D,null,u)}))},te=Object(d.a)(v.pending,(function(e,n){return n?a.a.createElement(V,null,"\u0418\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435"):null}));var re=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.Normalize,null),a.a.createElement(s,null),a.a.createElement(ee,null))};c.a.render(a.a.createElement(re,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.9f505dfe.chunk.js.map