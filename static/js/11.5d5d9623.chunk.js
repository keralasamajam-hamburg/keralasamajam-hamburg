(this["webpackJsonpkerala-samajam"]=this["webpackJsonpkerala-samajam"]||[]).push([[11],{269:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=t(283).a({space:"l3rza8k51j1n",accessToken:"Rf2s92FG4B9lzV78jEL-Xzqu58evFVT7o2kIRBeDCto"})},270:function(e,a,t){"use strict";var n;t.d(a,"a",(function(){return n})),function(e){e["ml-IN"]="ml-IN",e["en-US"]="en-US"}(n||(n={}))},274:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(253);t(275),t(276);a.a=function(e){var a,t=e.data;return r.a.createElement("div",{className:"rows"},null===t||void 0===t||null===(a=t.content)||void 0===a?void 0:a.map((function(e,a){var t,c,o,i=e.nodeType,u=null===(t=e.data.target)||void 0===t?void 0:t.fields.file.url,s=null===(c=e.content)||void 0===c?void 0:c.map((function(e){return"text"===e.nodeType?null===e||void 0===e?void 0:e.value:"hyperlink"===e.nodeType?"<a href='".concat(e.data.uri,"' target='_blank'>").concat(e.data.uri,"</a>"):""})).join(""),m=null===(o=e.content)||void 0===o?void 0:o.map((function(e){var a;return null===(a=e.content)||void 0===a?void 0:a[0].content}));if(void 0!==u||void 0!==s)return r.a.createElement(n.Fragment,{key:a},function(){switch(i){case"text":return r.a.createElement("p",null,s);case"heading-1":return r.a.createElement("h1",null,s);case"heading-2":return r.a.createElement("h2",null,s);case"heading-3":return r.a.createElement("h3",null,s);case"heading-4":return r.a.createElement("h4",null,s);case"heading-5":return r.a.createElement("h5",null,s);case"heading-6":return r.a.createElement("h6",null,s);case"paragraph":return r.a.createElement("p",{dangerouslySetInnerHTML:{__html:s}});case"hyperlink":case"entry-hyperlink":case"asset-hyperlink":return r.a.createElement("a",{href:s},s);case"unordered-list":return r.a.createElement("ul",null,m.map((function(e,a){return r.a.createElement("li",{key:a},null===e||void 0===e?void 0:e[0].value)})));case"ordered-list":return r.a.createElement("ol",null,m.map((function(e,a){return r.a.createElement("li",{key:a},null===e||void 0===e?void 0:e[0].value)})));case"list-item":return r.a.createElement("li",null,s);case"blockquote":return r.a.createElement("blockquote",null,s);case"hr":return r.a.createElement(l.a,null);case"embedded-asset-block":return r.a.createElement("img",{className:"lazyload","data-src":u,src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",alt:u});default:return null}}())})))}},275:function(e,a,t){},278:function(e,a,t){"use strict";var n=t(55),r=t(527),l=t(0),c=t.n(l),o=t(274),i=t(109),u=t(254),s=t(270);t(279);a.a=function(e){var a,t=e.layoutStore,l=(e.showLocaleSwitch,Object(u.a)(["locale"])),m=Object(n.a)(l,2),d=m[0].locale;void 0===d&&s.a["en-US"],m[1];return t.loading?c.a.createElement(i.a,null):c.a.createElement("div",{className:"dynamicContent"},c.a.createElement(r.a,{autoplay:!0,dots:!0,lazyLoad:"progressive"},null===(a=t.layout.bannerImages)||void 0===a?void 0:a.map((function(e,a){return c.a.createElement("div",{key:a,style:{display:"flex",position:"relative"}},c.a.createElement("img",{src:e.url,alt:e.description}),c.a.createElement("h5",null,e.description))}))),c.a.createElement(o.a,{data:t.layout.textContent}))}},279:function(e,a,t){},280:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(55),r=t(0),l=t(269),c=t(270),o=t(254),i={HOME:"6DJ4AThsKH0TerlsLhk7W2",ABOUT:"1o1sjisGJhWUPfWHKwMwH9",RENTAL:"qNi4x72BmMZczfEnvHcQ0",RESTAURANT:"1McLfQiBirwkTPl6IyxOe0",NEWS:"5ouDxOJWLK6l1hxnN6TVje",BLOGS:"2OWeRdyly6aNbvbQB3mmSo",RESOURCES:"EKldUZpBzrSviq8Y1TtJp"},u=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(o.a)(["locale"]),u=Object(n.a)(t,1),s=u[0].locale,m=void 0===s?c.a["en-US"]:s;!1===a&&(m=c.a["en-US"]);var d=Object(r.useState)({loading:!0,layout:{}}),f=Object(n.a)(d,2),v=f[0],E=f[1];return Object(r.useEffect)((function(){l.a.getEntry(i[e],{locale:m}).then((function(e){var a;E({loading:!1,layout:{bannerImages:null===(a=e.fields.bannerImages)||void 0===a?void 0:a.map((function(e){return{description:e.fields.description,url:e.fields.file.url}})),textContent:e.fields.textContent}})}))}),[e,m]),v}},281:function(e,a){},294:function(e,a){function t(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=294},371:function(e,a){},373:function(e,a){},374:function(e,a){},375:function(e,a){},376:function(e,a){},396:function(e,a,t){},542:function(e,a,t){"use strict";t.r(a);var n=t(335),r=t(0),l=t.n(r),c=t(278),o=t(280),i=t(253),u=t(75),s=t(55),m=t(251),d=t(538),f=t(549),v=t(367);t(396);v.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(v.pdfjs.version,"/pdf.worker.js");var E=function(e){var a=e.locale,t=Object(r.useState)(null),n=Object(s.a)(t,2),c=n[0],o=n[1];return l.a.createElement("div",{className:"satzung"},l.a.createElement(v.Document,{className:"PDFDocument",file:"/Satzung-".concat(a,".pdf"),options:{workerSrc:"/pdf.worker.js"},onLoadSuccess:function(e){var a=e.numPages;o(a)}},Array.from(new Array(c),(function(e,a){return l.a.createElement(v.Page,{key:"page_".concat(a+1),pageNumber:a+1})}))))},p=function(e){var a=e.locale,t=Object(r.useState)(!1),n=Object(s.a)(t,2),c=n[0],o=n[1],i=function(e){return function(){o(e)}};return l.a.createElement("div",{className:"modal"},l.a.createElement(m.a,{type:"primary",onClick:i(!0),icon:l.a.createElement(f.a,null)},"Satzung (".concat(a,")")),l.a.createElement(d.a,{title:"Satzung",visible:c,footer:null,onCancel:i(!1)},l.a.createElement(E,{locale:a})))};function g(){var e=Object(n.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  & > div {\n    margin-right: 1rem;\n  }\n  padding-bottom: 2rem;\n"]);return g=function(){return e},e}var h=t(397).a.div(g());a.default=function(){var e=Object(o.a)("ABOUT");return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement("title",null,"About - Kerala Samajam Hamburg"),l.a.createElement("meta",{property:"og:title",content:"About - Kerala Samajam Hamburg"}),l.a.createElement("meta",{name:"description",content:"Established in 1993, Kerala Samajam Hamburg e.V. (KSH) is a cultural association of Keralites (or  Malayalis) residing in and around Hamburg region of Germany. Annual events aligned with Vishu, Easter, Onam, Eid and Christmas brings the community together to celebrate the unique cultural heritage and traditions of Kerala"})),l.a.createElement(i.a,null,l.a.createElement("h2",null,"About Us")),l.a.createElement(c.a,{layoutStore:e,showLocaleSwitch:!1}),";",l.a.createElement(h,null,l.a.createElement(p,{locale:"EN"}),l.a.createElement(p,{locale:"DE"})))}}}]);
//# sourceMappingURL=11.5d5d9623.chunk.js.map