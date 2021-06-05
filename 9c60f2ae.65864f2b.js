(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),c=(n(0),n(260)),a={title:"Cloud Function",sidebar_label:"Functions"},i={unversionedId:"platform_concepts/studio/cloud-function",id:"platform_concepts/studio/cloud-function",isDocsHomePage:!1,title:"Cloud Function",description:"How to create a new function?",source:"@site/docs/platform_concepts/studio/cloud-function.md",slug:"/platform_concepts/studio/cloud-function",permalink:"/docs/platform_concepts/studio/cloud-function",version:"current",sidebar_label:"Functions",sidebar:"platform_concepts",previous:{title:"Create and access bot variables in UI",permalink:"/docs/platform_concepts/studio/bot-variables"},next:{title:"Creating Tables and Inserting Data",permalink:"/docs/platform_concepts/data/create-tables"}},u=[{value:"How to create a new function?",id:"how-to-create-a-new-function",children:[]}],l={toc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"how-to-create-a-new-function"},"How to create a new function?"),Object(c.b)("p",null,"Cloud Functions compose of all the user defined functions that defines and controls the flow of the bot. The whole structure of writing the code is modularised. Main is the default function which is executed for every message. In the builder section, we can link the cloud functions directly in validators or steps or init functions by selecting the corresponding cloud function created in Developer section."),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/GqzX0iZ60ZCO1615523745204.png",alt:"how to add a new function"}))))}s.isMDXComponent=!0},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||c;return n?o.a.createElement(b,i(i({ref:t},l),{},{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);