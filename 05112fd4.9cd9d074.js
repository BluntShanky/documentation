(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{205:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(p,".").concat(d)]||s[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var l=2;l<a;l++)p[l]=n[l];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(205)),p={title:"app.BOT_ENV",sidebar_label:"app.BOT_ENV"},c={unversionedId:"developer/app/components/bot-env",id:"developer/app/components/bot-env",isDocsHomePage:!1,title:"app.BOT_ENV",description:"app.BOT_ENV returns the bot environment i.e. sanbox, staging, production",source:"@site/docs/developer/app/components/bot-env.md",slug:"/developer/app/components/bot-env",permalink:"/docs/developer/app/components/bot-env",version:"current",sidebar_label:"app.BOT_ENV",sidebar:"developer",previous:{title:"app.ask",permalink:"/docs/developer/app/components/ask"},next:{title:"app.contextEndTime",permalink:"/docs/developer/app/components/context-end-time"}},i=[{value:"Examples",id:"examples",children:[]}],l={toc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"app.BOT_ENV returns the bot environment i.e. sanbox, staging, production"),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("p",null,"\u200b"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"let currentENV = app.BOT_ENV\n")),Object(a.b)("p",null,"\u200b"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"It is usually used to diffrentiate between enviornments so to dynamically change values like API keys, header etc.")))}u.isMDXComponent=!0}}]);