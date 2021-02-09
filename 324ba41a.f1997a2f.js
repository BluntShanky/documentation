(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{205:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),s=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||p;return t?a.a.createElement(g,c(c({ref:n},i),{},{components:t})):a.a.createElement(g,c({ref:n},i))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<p;i++)o[i]=t[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),p=(t(0),t(205)),o={title:"app.getAgents",sidebar_label:"app.getAgents"},c={unversionedId:"developer/app/components/get-agents",id:"developer/app/components/get-agents",isDocsHomePage:!1,title:"app.getAgents",description:"app.getAgents() is used to a list of agents that have signed up in the 'Support' portal.",source:"@site/docs/developer/app/components/get-agents.md",slug:"/developer/app/components/get-agents",permalink:"/docs/developer/app/components/get-agents",version:"current",sidebar_label:"app.getAgents",sidebar:"developer",previous:{title:"app.feedbackEvent",permalink:"/docs/developer/app/components/feedback-provided"},next:{title:"app.getCurrentActiveTicket",permalink:"/docs/developer/app/components/get-current-active-ticket"}},l=[{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example Usage",id:"example-usage",children:[]},{value:"Example Output:",id:"example-output",children:[]}],i={toc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,"app.getAgents() is used to a list of agents that have signed up in the 'Support' portal."),Object(p.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(p.b)("p",null,"Array of objects, with all the details of all the signed up agents."),Object(p.b)("h2",{id:"example-usage"},"Example Usage"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'app.getAgents().then((agents) => {\n    app.log(agents, "allAgentsData")\n});\n')),Object(p.b)("h2",{id:"example-output"},"Example Output:"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'agents {\n             "success": true,\n             "message": "",\n             "data": [\n                 {\n                     "email": "abcd@gmail.com",\n                     "id": 12345,\n                     "owner": "x1***********7",\n                     "username": "abcd",\n                     "user_id": 7890,\n                     "name": "abcd xyz",\n                     "profile_picture": "https://cdn.yellowmessenger.com/pic1.png",\n                     "description": "xyz",\n                     "max_conn_tickets": 50,\n                     "call_enabled": 0,\n                     "voip_call_enabled": 0,\n                     "voip_password": null,\n                     "webrtc_username": null,\n                     "xmpp_username": "xyz",\n                     "avalability": {\n                         "currentHandlingTicketsCount": 0,\n                         "status": "offline"\n                     }\n                 },\n                 {\n                     "email": "xyz@ym.com",\n                     "id": 7890,\n                     "owner": "x1**********7",\n                     "username": "xyz",\n                     "user_id": 1234,\n                     "name": "xyz",\n                     "profile_picture": "https://cdn.yellowmessenger.com/pic2.png",\n                     "description": "abc",\n                     "max_conn_tickets": 50,\n                     "call_enabled": 0,\n                     "voip_call_enabled": 0,\n                     "voip_password": null,\n                     "webrtc_username": null,\n                     "xmpp_username": "abc",\n                     "avalability": {\n                         "currentHandlingTicketsCount": 5,\n                         "status": "offline"\n                     }\n                 },\n             ]\n         }\n')))}s.isMDXComponent=!0}}]);