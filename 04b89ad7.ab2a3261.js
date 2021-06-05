(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{260:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=o,f=p["".concat(a,".").concat(m)]||p[m]||u[m]||r;return n?i.a.createElement(f,s(s({ref:t},l),{},{components:n})):i.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(3),i=n(7),r=(n(0),n(260)),a={title:"How to mask sensitive information in your bot?",sidebar_label:"Mask Sensitive Infomation"},s={unversionedId:"howtos/basics/sensitive-info",id:"howtos/basics/sensitive-info",isDocsHomePage:!1,title:"How to mask sensitive information in your bot?",description:"In any chatbot, you can scroll up to see previous chat, but what if you chat contains sensitive information like your credit card number which you've used earlier to order something? In that case, it's good to mask sensitive information in your bot so no one can see that information.",source:"@site/docs/howtos/basics/sensitive-info.md",slug:"/howtos/basics/sensitive-info",permalink:"/docs/howtos/basics/sensitive-info",version:"current",sidebar_label:"Mask Sensitive Infomation",sidebar:"howtos",previous:{title:"Validate user input",permalink:"/docs/howtos/basics/validate-input"},next:{title:"Localisation",permalink:"/docs/howtos/create/localisation"}},c=[],l={toc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In any chatbot, you can scroll up to see previous chat, but what if you chat contains sensitive information like your credit card number which you've used earlier to order something? In that case, it's good to mask sensitive information in your bot so no one can see that information."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open ",Object(r.b)("inlineCode",{parentName:"li"},"Studio")," and nevigate to a journey where you're dealing with sensitive information. Open a step in which you're asking for that sensitive information. For example, in the ",Object(r.b)("inlineCode",{parentName:"li"},"Verify OTP")," step we're asking for an OTP. In that step, open ",Object(r.b)("inlineCode",{parentName:"li"},"Step Setting"),".")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"http://cdn.yellowmessenger.com/AUNmCa96ct001618467107378.png",alt:null}))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"In the ",Object(r.b)("inlineCode",{parentName:"li"},"Step Setting"),", under mask sensitive info click to enable it for User Message. You can also enable it for Bot Message in case your bot is prividing any sensitive information.")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"http://cdn.yellowmessenger.com/mkzXh5nuSDHL1618467122770.png",alt:null}))),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"In the same step, open ",Object(r.b)("inlineCode",{parentName:"li"},"Channel options"),". Under ",Object(r.b)("inlineCode",{parentName:"li"},"Website")," tab, click on the button below sensitive information to enable it. Don't forget to click on ",Object(r.b)("inlineCode",{parentName:"li"},"Save button"),". Here we're setting it up for Website channle only but You can do the same for other channels also.")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"http://cdn.yellowmessenger.com/F5GpPBfxIdTr1618467132878.png",alt:null}))),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"http://cdn.yellowmessenger.com/RZ1XjacLNjsF1618467147659.png",alt:null}))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Now open your bot, and try using that journey where you're dealing with sensitive information. When you're typing it, it'll be shown as dotes only. Once the message it sent, it'll be shown as ",Object(r.b)("inlineCode",{parentName:"li"},"Sensitive information"),".")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"http://cdn.yellowmessenger.com/3IaQrLIYZiMg1618467155005.png",alt:null}))),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"http://cdn.yellowmessenger.com/b3yatBgvE42i1618467169143.png",alt:null}))))}b.isMDXComponent=!0}}]);