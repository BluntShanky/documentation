(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{186:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(205)),p={title:"app.triggerIntent",sidebar_label:"app.triggerIntent"},c={unversionedId:"developer/app/components/trigger-journey",id:"developer/app/components/trigger-journey",isDocsHomePage:!1,title:"app.triggerIntent",description:"Input Parameters",source:"@site/docs/developer/app/components/trigger-journey.md",slug:"/developer/app/components/trigger-journey",permalink:"/docs/developer/app/components/trigger-journey",version:"current",sidebar_label:"app.triggerIntent",sidebar:"developer",previous:{title:"app.translate",permalink:"/docs/developer/app/components/translate"},next:{title:"app.updateCollaborators",permalink:"/docs/developer/app/components/update-collaborators"}},i=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(o.b)("p",null," ",Object(o.b)("strong",{parentName:"p"},"journey-slug :")," ",Object(o.b)("em",{parentName:"p"},'the slug name of the journey i.e. Journey name converted to kabab case.(Delete memory becomes delete-memory) (Mandatory),  "String type"')),Object(o.b)("p",null," ",Object(o.b)("strong",{parentName:"p"},"entities :")," ",Object(o.b)("em",{parentName:"p"},'any entites that are required by the journey (Optional) , "JSON object"')),Object(o.b)("p",null," ",Object(o.b)("strong",{parentName:"p"},"step :")," ",Object(o.b)("em",{parentName:"p"},'set of steps along with there values(optional), "JSON object"')),Object(o.b)("p",null,"\u200b"),Object(o.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(o.b)("p",null,"returns null. Trigger the mentioned journey if exist.\n\u200b"),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"\u200b"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"return app.triggerIntent(delete-memory, {}, {...data.steps});\n\n")),Object(o.b)("p",null,"\u200b"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"It usually is a good practice to return the above statement hence skipping any code below it."),"\n",Object(o.b)("em",{parentName:"p"},"When doing a trigger Intent, all the context to that Intent( context.intent information) is reset to null values."))))}u.isMDXComponent=!0},205:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,d=s["".concat(p,".").concat(m)]||s[m]||b[m]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var l=2;l<o;l++)p[l]=r[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);