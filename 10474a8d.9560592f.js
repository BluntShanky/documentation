(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{205:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,g=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(g,s(s({ref:t},p),{},{components:n})):r.a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(205)),o={title:"app.raiseTicket",sidebar_label:"app.raiseTicket"},s={unversionedId:"developer/app/components/raise-ticket",id:"developer/app/components/raise-ticket",isDocsHomePage:!1,title:"app.raiseTicket",description:"app.raiseTicket() is used to raise a ticket and assign it to an agent.",source:"@site/docs/developer/app/components/raise-ticket.md",slug:"/developer/app/components/raise-ticket",permalink:"/docs/developer/app/components/raise-ticket",version:"current",sidebar_label:"app.raiseTicket",sidebar:"developer",previous:{title:"app.profile",permalink:"/docs/developer/app/components/profile"},next:{title:"app.regexValidator",permalink:"/docs/developer/app/components/regex-validator"}},c=[{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example Usage",id:"example-usage",children:[{value:"Online ticket generation",id:"online-ticket-generation",children:[]},{value:"Offline ticket generation",id:"offline-ticket-generation",children:[]}]},{value:"Note",id:"note",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"app.raiseTicket() is used to raise a ticket and assign it to an agent."),Object(i.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(i.b)("p",null,"Ticket Data, with the details of the ticket and agent it is assigned to."),Object(i.b)("h2",{id:"example-usage"},"Example Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"app.raiseTicket({\n            // issue is what you want to go in the ticket description\n            issue: 'Test ticket creation',\n            //If you add these detais here, they will show up in the right sidebbar of agent window\n            contact: {\n                email: 'mattew@org.com',\n                phone: '9876543211',\n                name: 'Matthew',\n            },// Please do not add any other properties to the this contact object. You can use custom fields if you'd like to show any other details.\n            priority: 'MEDIUM',\n            category: category //this decides the agent group\n        }).then(async (ticketData) => {\n            if (ticketData && ticketData.assignedTo) {\n                let email = 'mattew@org.com'\n                let phone = '9876543211'\n                let name = 'Matthew'\n                app.pauseBot();\n                return app.sendTextMessage(`Thank You for your patience. You are now connected to our OSE.`).then(() => {\n                    return resolve();\n                });\n            }\n            else {\n                return resolve();\n            }\n        }, (error) => {\n            return app.sendTextMessage(\"Oops! It seems that all our agents are busy. Sending an email instead.\").then(() => {\n                const sender = 'noreply@yellowmessenger.com';\n                let body = `Hi, --- This is the inform you that your customer ${app.context.steps.name} ${app.context.steps.email_address} has raised a ticket regarding issue in processing the transactions. \\n Kindly connect to him within the next 5 minutes.`\n                const subject = 'Customer Query';\n                const to = 'shubhi@yellowmessenger.com';\n                app.sendEmail(to, subject, body, \"\", sender).then(() => {\n                    app.triggerIntent('default', {});\n                return resolve();\n             });\n            });\n        });\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IssueString"),": Issue string helps the agent to get an idea regarding the context or issue faced by the user"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Contact"),": This is an object of user details collected from the user and passed for the agents reference. The object can contain name, email, phone number and so on."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"ticketData"),": Once the ticket is generated, the ticketData will contain data regarding the ticket generated. It can be the name of the agent to whom the ticket is assigned to, the ticket number and so on. "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"If the ticket is not created, the error message is sent in the ticketData.\n")),Object(i.b)("p",null,"There are 2 types of ticket creation:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Online ticket generation")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Offline ticket generation"))),Object(i.b)("h3",{id:"online-ticket-generation"},"Online ticket generation"),Object(i.b)("p",null,"Online tickets are generated when the customer service agents are online. When the online ticket is generated, the bot will be paused using the command app.pauseBot() to allow the user to converse with the agent.\nCode for online ticket generation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'app.sendTextMessage(app.renderMessage(\'pleaseWait\', {}, "Please wait while I contact my support center...")).then(() => {\n   let issueString = "User Query"\n   app.raiseTicket({\n       issue: issueString,\n       contact: {\n           name: app.context.steps.name || "SAMPLE NAME"\n       },\n       priority: \'MEDIUM\',\n       manualAssignment: false,\n   }).then(function (ticketData) {\n       app.log(ticketData, "TICKET DATA")\n       if (ticketData && ticketData.assignedTo) {\n           app.pauseBot();\n           app.sendTextMessage(app.renderMessage(\'patience\', {}, "Thank you for your patience, you are now connected with our agent.")).then(() => {\n            return resolve();\n           });\n       } else {\n           app.sendTextMessage(app.renderMessage(\'unavailable\', {}, "Our agents are currently unavailable. We will get back to you as soon as possible."))\n           return resolve()\n       }\n   })\n})\n')),Object(i.b)("h3",{id:"offline-ticket-generation"},"Offline ticket generation"),Object(i.b)("p",null,"Offline tickets are generated when the customer service agents are either busy with serving other users or offline when taking a break after answering the queries of other users."),Object(i.b)("p",null,"While generating an offline ticket, 2 main parameters needs to be sent to the app.raiseTicket() method. Offline tickets can be generated if the online tickets are not generated."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"  manualAssignment: true,\n  assignedTo: 'emailId'\n")),Object(i.b)("p",null,"manualAssignment: This flag should be set to true\nassignedTo: The email id of the agent to whom the tickets has to be assigned."),Object(i.b)("p",null,"Code for offline ticket generation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"app.raiseTicket({\n  issue: 'Customer Query',\n  contact: {\n    name: profileName,\n    phone: profileName,\n    email: \"\",\n  },\n  priority: 'MEDIUM',\n  manualAssignment: true,\n  assignedTo: 'emailId of agent'\n}).then((ticketData) => {\n  if (ticketData && ticketData.assignedTo) {\n    app.pauseBot();\n    app.sendTextMessage(app.renderMessage('patience', {}, \"Thank you for your patience, you are now connected with our agent.\")).then(() => {\n      return resolve();\n    });\n  } else {\n    app.sendTextMessage(app.renderMessage('unavailable', {}, \"Our agents are currently unavailable. We will get back to you as soon as possible.\"))\n    return resolve()\n  }\n})\n\n \n\nTicket closing event:\nAfter the agent closes the ticket, the bot receives an event with the code ticket-closed, which has to be handled in main().\nif (app.data && app.data.event && app.data.event.code === 'ticket-closed') {\n// the bot can be unpaused using app.unPauseBot()\n}\n")),Object(i.b)("h2",{id:"note"},"Note"),Object(i.b)("p",null,"Please make sure to test your bot by logging in as an agent and seeing if your ticket is being transferred as shown in the demo."))}l.isMDXComponent=!0}}]);