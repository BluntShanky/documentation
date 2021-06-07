(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),c=(n(0),n(260)),o={title:"Response types - Action, Logic",sidebar_label:"Response types - Cards"},s={unversionedId:"platform_concepts/studio/response-types-cards",id:"platform_concepts/studio/response-types-cards",isDocsHomePage:!1,title:"Response types - Action, Logic",description:"Cards",source:"@site/docs/platform_concepts/studio/response-types-cards.md",slug:"/platform_concepts/studio/response-types-cards",permalink:"/docs/platform_concepts/studio/response-types-cards",version:"current",sidebar_label:"Response types - Cards"},p=[],l={toc:p};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"cards"},"Cards"),Object(c.b)("p",null,"Type of cards"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Generic Card"),Object(c.b)("li",{parentName:"ol"},"Status Card"),Object(c.b)("li",{parentName:"ol"},"Tracker Card"),Object(c.b)("li",{parentName:"ol"},"Contact Card"),Object(c.b)("li",{parentName:"ol"},"Receipt")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Status Card")),Object(c.b)("p",null,"Can be used to inform the user about transaction result. It can be a payment, ticket creation or an agent assignment, etc"),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/62BE32FE-61BD-4D36-8606-8130D052F8FE_2/Screenshot%202021-05-11%20at%201.37.39%20PM.png",alt:"Screenshot 2021-05-11 at 1.37.39 PM.png"}))),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/53285048-1B65-44A6-B509-D7CF11AAC169_2/Screenshot%202021-05-11%20at%201.37.46%20PM.png",alt:"Screenshot 2021-05-11 at 1.37.46 PM.png"}))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-other"}),'{ grid: true, display: "transactionStatus" }\n\n{\n    "title": "Payment success",\n    "success": true,\n    "text": "Your payment was successfull & your order has been placed.",\n    "value": 1500\n}\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Tracker Card")),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/4A5575EF-7274-47CA-8C01-DFA097740CC5_2/Screenshot%202021-05-11%20at%202.23.53%20PM.png",alt:"Screenshot 2021-05-11 at 2.23.53 PM.png"}))),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/29F7E1F8-4E48-4B7D-8362-8511E7E7DCA6_2/Screenshot%202021-05-11%20at%202.31.55%20PM.png",alt:"Screenshot 2021-05-11 at 2.31.55 PM.png"}))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-other"}),'{ grid: true, display: "trackerDetailed" }\n        \n{\n    "title": "Track Order",\n    "statuses": ["Ordered, "Ready", "Shipped", "In City", "Arrived"]\n    "currentStatus": "Shipped",\n    "from": { "Title": "Mumbai", "Description": "12/12/2021" },\n    "to": { "Title": "Bengaluru", "Description": "14/12/2021" },\n    "details": \n        {\n            "Order ID": "#444-2445-2442-222",\n            "Delivey": "14/12/2021",\n            "Total": "\u20b9 1500",\n        }\n    "assigneeDetails":\n        {\n            "Name": "Mahesh Kumar",\n            "Image": url,\n        }\n    "actions":\n    [\n        {\n            title: \n            text:\n            value:\n        }\n    ]\n}\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Contact Card:")),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/933F5EE2-210A-4A41-83D7-93CE6AE63BFA/B6057518-54FE-4D81-B583-91613F3AAE6E_2/Screenshot%202021-05-11%20at%202.44.55%20PM.png",alt:"Screenshot 2021-05-11 at 2.44.55 PM.png"}))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-other"}),'{ grid: true, display: "contact" }\n\n{\n    "title": "Conatct Info",\n    "download": true, //to be downloaded as .vcf\n    "options": {\n        "image": "https://cdn.yellowmessenger.com/q9f6PUO48xbV1617021384235.jpeg",\n        "name": "Shweta Kumari",\n        "email": "shw@gmail.com"\n        "whatsapp: "8122302392"\n        "phone": "8122302392"\n    }\n}\n')))}i.isMDXComponent=!0},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),i=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);