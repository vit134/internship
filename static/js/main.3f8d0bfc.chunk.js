(this.webpackJsonpintership=this.webpackJsonpintership||[]).push([[0],{19:function(e,t,c){},21:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(0),s=c.n(r),n=c(10),o=c.n(n),j=(c(19),c(13)),i=c(12),l=c(29),d=c(27),x=c(28),b=c(11),h=(c(20),c(21),[{type:"checkbox",text:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e npm i && npm start ",id:"app_start",value:.1},{type:"checkbox",text:"\u0415\u0441\u0442\u044c README \u0438\u043b\u0438 \u043b\u044e\u0431\u0430\u044f \u0434\u0440\u0443\u0433\u0430\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",id:"readme",value:.1},{type:"checkbox_group",text:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u0435\u0442:",content:[{type:"checkbox",text:"\u0444\u043e\u0440\u043c\u0443 \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430 \u0438 \u043f\u0440\u0435\u0432\u044c\u044e \u0431\u0430\u043d\u043d\u0435\u0440\u0430",id:"app_has_form",value:.2},{type:"checkbox",text:"\u043a\u043d\u043e\u043f\u043a\u0443 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u043e\u0439",id:"app_has_png-button",value:.1},{type:"checkbox",text:"\u043a\u043d\u043e\u043f\u043a\u0443 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430 \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u043e\u0439",id:"app_has_json-button",value:.1}]},{type:"checkbox_group",text:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434:",content:[{type:"checkbox",text:"\u0415\u0441\u0442\u044c \u0434\u0438\u0437\u0430\u0439\u043d",id:"app_has_design",value:.05},{type:"checkbox",text:"\u0423\u0434\u043e\u0431\u043d\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f",id:"app_comfortable",value:.05}]},{type:"radio_group",text:"\u0422\u0435\u0441\u0442\u044b:",name:"code-coverage",content:[{type:"radio",text:"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0438\u043b\u0438 \u043d\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f",id:"test_apcent",value:0},{type:"radio",text:"Test-coverage < 50%",id:"test_less_50",value:.1},{type:"radio",text:"Test-coverage > 50%",id:"test_more_50",value:.2}]},{type:"checkbox",text:"\u0412\u044b\u0445\u043e\u0434\u0438\u0442 \u0437\u0430 \u0440\u0430\u043c\u043a\u0438 \u0422\u0417 (\u0432 \u0445\u043e\u0440\u043e\u0448\u0435\u043c \u0441\u043c\u044b\u0441\u043b\u0435)",id:"out_of_tt",value:.1}]),u=function(e){var t=e.id,c=e.text,r=e.value;return Object(a.jsx)(l.a.Check,{className:"checkbox",type:"checkbox",id:t,name:t,value:r,label:"".concat(c," (").concat(r,")")})},O=function(e){var t=e.text,c=e.data;return Object(a.jsxs)("div",{className:"group",children:[Object(a.jsx)("div",{children:t}),Object(a.jsx)("div",{className:"group_data",children:c.map((function(e){return Object(a.jsx)(u,{id:e.id,text:e.text,value:e.value},e.id)}))})]})},p=function(e){var t=e.text,c=e.name,r=e.data;return Object(a.jsxs)("div",{className:"group",children:[Object(a.jsx)("div",{children:t}),Object(a.jsx)("div",{className:"group_data",children:r.map((function(e){return Object(a.jsx)(l.a.Check,{type:"radio",label:"".concat(e.text," (").concat(e.value,")"),name:c,value:e.value,id:e.id})}))})]})},g=function(){var e=Object(r.useState)({}),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(a.jsxs)(d.a,{fluid:!0,children:[Object(a.jsx)(x.a,{children:Object(a.jsx)(b.a,{lg:!0,children:Object(a.jsx)("header",{className:"header",children:"\u0410\u043d\u043a\u0435\u0442\u0430 \u0441\u0442\u0430\u0436\u0435\u0440\u043e\u0432"})})}),Object(a.jsx)(x.a,{children:Object(a.jsx)(b.a,{lg:{span:8,offset:2},children:Object(a.jsx)("section",{className:"content",children:Object(a.jsxs)(l.a,{onChange:function(e){var t=Object(j.a)({},c);"radio"===e.target.type?t[e.target.name]=e.target.value:t[e.target.name]=e.target.checked?e.target.value:0,s(t)},children:[Object(a.jsxs)(l.a.Group,{controlId:"formBasicPassword",as:x.a,children:[Object(a.jsx)(l.a.Label,{column:!0,lg:3,children:"\u041a\u0430\u043d\u0434\u0438\u0434\u0430\u0442"}),Object(a.jsx)(b.a,{lg:9,children:Object(a.jsx)(l.a.Control,{type:"text"})})]}),Object(a.jsxs)(l.a.Group,{controlId:"formBasicPassword",as:x.a,children:[Object(a.jsx)(l.a.Label,{column:!0,lg:3,children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 github"}),Object(a.jsx)(b.a,{lg:9,children:Object(a.jsx)(l.a.Control,{type:"link"})})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)(l.a.Group,{controlId:"formBasicPassword",as:x.a,children:[Object(a.jsx)(b.a,{lg:3,children:Object(a.jsxs)("h6",{children:["\u0427\u0435\u043a\u043b\u0438\u0441\u0442"," ","(",Object.values(c).reduce((function(e,t){return e+Number(t)}),0).toFixed(1),")"]})}),Object(a.jsx)(b.a,{lg:9,children:h.map((function(e){return"checkbox"===e.type?Object(a.jsx)(u,{id:e.id,text:e.text,value:e.value}):"checkbox_group"===e.type?Object(a.jsx)(O,{text:e.text,data:e.content}):Object(a.jsx)(p,{text:e.text,name:e.name,data:e.content})}))})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)(l.a.Group,{controlId:"formBasicPassword",as:x.a,children:[Object(a.jsx)(b.a,{lg:3,children:Object(a.jsx)("h6",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f \u043f\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e"})}),Object(a.jsx)(b.a,{lg:9,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h6",{children:"\u041f\u043b\u044e\u0441\u044b"}),Object(a.jsx)(l.a.Control,{as:"textarea",rows:3}),Object(a.jsx)("h6",{children:"\u041c\u0438\u043d\u0443\u0441\u044b"}),Object(a.jsx)(l.a.Control,{as:"textarea",rows:3})]})})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)(l.a.Group,{controlId:"formBasicPassword",as:x.a,children:[Object(a.jsx)(b.a,{lg:3,children:Object(a.jsx)("h6",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f \u043f\u043e \u043a\u043e\u0434\u0443"})}),Object(a.jsx)(b.a,{lg:9,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h6",{children:"\u041f\u043b\u044e\u0441\u044b"}),Object(a.jsx)(l.a.Control,{as:"textarea",rows:3}),Object(a.jsx)("h6",{children:"\u041c\u0438\u043d\u0443\u0441\u044b"}),Object(a.jsx)(l.a.Control,{as:"textarea",rows:3})]})})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)(l.a.Group,{controlId:"formBasicPassword",as:x.a,children:[Object(a.jsx)(b.a,{lg:3,children:Object(a.jsx)("h6",{children:"\u0418\u0442\u043e\u0433\u043e"})}),Object(a.jsx)(b.a,{lg:9,children:Object(a.jsx)(l.a.Control,{as:"textarea",rows:3})})]})]})})})})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),a(e),r(e),s(e),n(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),v()}},[[25,1,2]]]);
//# sourceMappingURL=main.3f8d0bfc.chunk.js.map