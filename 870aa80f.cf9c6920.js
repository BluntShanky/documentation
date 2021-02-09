(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(205)),c={title:"app.htmlTicketChatTranscript",sidebar_label:"app.htmlTicketChatTranscript"},p={unversionedId:"developer/app/components/html-ticket-chat-transcript",id:"developer/app/components/html-ticket-chat-transcript",isDocsHomePage:!1,title:"app.htmlTicketChatTranscript",description:"This function returns the chat transcript in HTML form for use by the bot.",source:"@site/docs/developer/app/components/html-ticket-chat-transcript.md",slug:"/developer/app/components/html-ticket-chat-transcript",permalink:"/docs/developer/app/components/html-ticket-chat-transcript",version:"current",sidebar_label:"app.htmlTicketChatTranscript",sidebar:"developer",previous:{title:"app.getVariable",permalink:"/docs/developer/app/components/get-variable"},next:{title:"app.invokeJourney",permalink:"/docs/developer/app/components/invoke-journey"}},i=[{value:"Input",id:"input",children:[]},{value:"Output",id:"output",children:[{value:"Example",id:"example",children:[]}]}],l={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function returns the chat transcript in HTML form for use by the bot."),Object(o.b)("h2",{id:"input"},"Input"),Object(o.b)("p",null,"Ticket ID and the timezone."),Object(o.b)("h2",{id:"output"},"Output"),Object(o.b)("p",null,"The HTML data for chat transcript."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"app.htmlTicketChatTranscript({ ticketId: '100025', timezone: 'UTC'}).then((res) => {\n    app.log(res, 'html data');\n})\n")))}u.isMDXComponent=!0},205:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,b=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return r?a.a.createElement(b,p(p({ref:t},l),{},{components:r})):a.a.createElement(b,p({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);