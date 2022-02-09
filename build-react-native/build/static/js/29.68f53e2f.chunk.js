(this["webpackJsonpmatch-control"]=this["webpackJsonpmatch-control"]||[]).push([[29],{111:function(t,n,e){"use strict";var r,o,i;e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return o})),e.d(n,"c",(function(){return i})),function(t){t[t.DefaultValue=0]="DefaultValue",t[t.CheckValue=1]="CheckValue",t[t.NotCheckValue=2]="NotCheckValue"}(r||(r={})),function(t){t.White="#ffffff",t.Gray="#939598",t.Yellow="#ffcb05",t.Orange="#e07e27",t.Green="#007f3e",t.Blue="#1890ba",t.Purple="#812990",t.Brown="#602d12",t.Black="#000000",t.Red="#b11116"}(o||(o={})),function(t){t.Error="error",t.Warning="warning",t.Success="success",t.Info="info"}(i||(i={}))},116:function(t,n,e){"use strict";var r,o=e(115),i=e(50),c=e(0),u=e(2),a=e(10),l=e(7),s=e(160),f=Object(l.c)(s.a)(r||(r=Object(a.a)(["\n  :hover {\n    && {\n      border-color: rgba(255, 255, 255, 0.8); \n    }\n\n    .MuiButton-label { \n      color: rgba(255, 255, 255, 0.8);\n    }\n  }\n\n  && {\n    border-color: rgba(255, 255, 255, 1);\n  }\n\n  .MuiButton-label { \n    color: rgba(255, 255, 255, 1);\n  }\n"]))),d=e(172),p=e(173),b=e(1);n.a=function(t){var n=t.buttonPath,e=t.buttonMessage,r=t.showButton,a=t.severity,l=t.snackBarOpen,s=t.alertMessage,v=t.UseStateOpenControl,h=Object(c.useState)(l),x=Object(i.a)(h,2),m=x[0],j=x[1];Object(c.useEffect)((function(){l&&O()}),[l]);var y=Object(u.f)(),O=function(){j(!0)},g=function(){j(!1),void 0!==v&&v({open:!1,severity:"",message:""})},w={vertical:"top",horizontal:"right"};function M(t){return Object(b.jsx)(d.a,Object(o.a)({action:r&&Object(b.jsx)(f,{variant:"outlined",color:"primary",onClick:function(){return t=null!==n&&void 0!==n?n:"",void y.push(t);var t},children:null!==e&&void 0!==e?e:"Message not supported"}),elevation:6,variant:"filled"},t))}return Object(b.jsx)(p.a,{anchorOrigin:w,open:m,onClose:g,autoHideDuration:6e3,message:"I love snacks",children:Object(b.jsx)(M,{onClose:g,severity:a,children:s})},w.vertical+w.horizontal)}},119:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(120);function o(t,n){if(t){if("string"===typeof t)return Object(r.a)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(t,n):void 0}}},120:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,"a",(function(){return r}))},131:function(t,n){function e(n){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(t.exports=e=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=e=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),e(n)}t.exports=e,t.exports.default=t.exports,t.exports.__esModule=!0},214:function(t,n,e){"use strict";var r,o,i,c,u,a=e(2),l=e(10),s=e(7),f=e(117),d=e(340),p=s.c.div(r||(r=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  justify-content: center;\n\n  margin-top: 80px;\n  padding: 20px;\n\n  \n\n  @media (max-width: 720px) {\n    flex-direction: column;\n  }\n"]))),b=s.c.div(o||(o=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n\n  align-items: center;\n  justify-content: center;\n  align-items: baseline;\n\n  flex-wrap: wrap;\n\n  width: 100%;\n"]))),v=s.c.div(i||(i=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n\n  align-items: center;\n  justify-content: center;\n  align-items: center;\n\n  width: 40%;\n  height: 60px;\n  margin: 10px;\n  border: 1px solid ",";\n  background-color: ",";\n  cursor: pointer;\n  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);\n\n  :hover {\n    background-color: ",";\n  }\n\n  @media (max-width: 720px) {\n    width: 95%;\n  }\n"])),(function(t){return Object(f.a)(.23,t.theme.colors.primaryYellow)}),(function(t){return t.theme.colors.primaryYellow}),(function(t){return Object(f.b)(.05,t.theme.colors.primaryYellow)})),h=Object(s.c)(d.a)(c||(c=Object(l.a)(["\n  color: ",";\n\n  && {\n    width: 32px;\n    height: 32px;\n    size: 32px;\n  }\n"])),(function(t){return t.theme.colors.primaryDark})),x=s.c.h3(u||(u=Object(l.a)(["\n  color: ",";\n  font-weight: normal;\n\n  margin-left: 5px;\n"])),(function(t){return t.theme.colors.primaryDark})),m=e(1);n.a=function(t){var n=Object(a.f)();return Object(m.jsx)(p,{children:Object(m.jsx)(b,{children:t.values.map((function(t,e){return Object(m.jsxs)(v,{onClick:function(){return n.push(t.path)},children:[Object(m.jsx)(h,{component:t.icon}),Object(m.jsx)(x,{children:t.title})]},e)}))})})}},222:function(t,n,e){"use strict";var r=e(87),o=e(88);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e(0)),c=(0,r(e(89)).default)(i.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"}),"Announcement");n.default=c},223:function(t,n,e){"use strict";var r=e(87),o=e(88);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e(0)),c=(0,r(e(89)).default)(i.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications");n.default=c},292:function(t,n,e){"use strict";var r=e(87),o=e(88);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e(0)),c=(0,r(e(89)).default)(i.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");n.default=c},293:function(t,n,e){"use strict";var r=e(87),o=e(88);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e(0)),c=(0,r(e(89)).default)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"}),"Assessment");n.default=c},294:function(t,n,e){"use strict";var r=e(87),o=e(88);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e(0)),c=(0,r(e(89)).default)(i.createElement("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}),"List");n.default=c},342:function(t,n,e){"use strict";e.r(n);var r=e(292),o=e.n(r),i=e(293),c=e.n(i),u=e(223),a=e.n(u),l=e(222),s=e.n(l),f=e(294),d=e.n(f),p=e(81),b=e(214),v=e(116),h=e(111),x=e(1);n.default=function(){var t={title:"P\xe1gina Inicial",returnActive:!1,path:"",buttons:[{title:"Presen\xe7a",path:"presencegroup",icon:o.a},{title:"Relat\xf3rios",path:"report",icon:c.a},{title:"Not\xedcias",path:"news",icon:s.a},{title:"Notifica\xe7\xf5es",path:"notifications",icon:a.a},{title:"Cadastros",path:"list",icon:d.a}]};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(p.a,{title:t.title,isReturnActive:t.returnActive}),Object(x.jsx)(v.a,{alertMessage:"Voc\xea tem novas mensagens!",showButton:!0,buttonPath:t.buttons[2].path,severity:h.c.Info,buttonMessage:"Visualizar",snackBarOpen:!0}),Object(x.jsx)(b.a,{values:t.buttons})]})}},50:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(119);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,i=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(e.push(c.value),!n||e.length!==n);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return e}}(t,n)||Object(r.a)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},59:function(t,n,e){"use strict";function r(t,n){return function(){return null}}e.d(n,"a",(function(){return r}))},60:function(t,n,e){"use strict";e.r(n),e.d(n,"capitalize",(function(){return r.a})),e.d(n,"createChainedFunction",(function(){return o.a})),e.d(n,"createSvgIcon",(function(){return i.a})),e.d(n,"debounce",(function(){return c.a})),e.d(n,"deprecatedPropType",(function(){return u.a})),e.d(n,"isMuiElement",(function(){return a.a})),e.d(n,"ownerDocument",(function(){return l.a})),e.d(n,"ownerWindow",(function(){return s.a})),e.d(n,"requirePropFactory",(function(){return f})),e.d(n,"setRef",(function(){return d.a})),e.d(n,"unsupportedProp",(function(){return p})),e.d(n,"useControlled",(function(){return b.a})),e.d(n,"useEventCallback",(function(){return v.a})),e.d(n,"useForkRef",(function(){return h.a})),e.d(n,"unstable_useId",(function(){return m})),e.d(n,"useIsFocusVisible",(function(){return j.a}));var r=e(51),o=e(76),i=e(114),c=e(71),u=e(59),a=e(85),l=e(57),s=e(72);function f(t){return function(){return null}}var d=e(92);function p(t,n,e,r,o){return null}var b=e(74),v=e(75),h=e(55),x=e(0);function m(t){var n=x.useState(t),e=n[0],r=n[1],o=t||e;return x.useEffect((function(){null==e&&r("mui-".concat(Math.round(1e5*Math.random())))}),[e]),o}var j=e(126)},71:function(t,n,e){"use strict";function r(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var c=this,u=function(){t.apply(c,o)};clearTimeout(n),n=setTimeout(u,e)}return r.clear=function(){clearTimeout(n)},r}e.d(n,"a",(function(){return r}))},72:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(57);function o(t){return Object(r.a)(t).defaultView||window}},74:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(0);function o(t){var n=t.controlled,e=t.default,o=(t.name,t.state,r.useRef(void 0!==n).current),i=r.useState(e),c=i[0],u=i[1];return[o?n:c,r.useCallback((function(t){o||u(t)}),[])]}},81:function(t,n,e){"use strict";var r,o,i,c,u,a,l=e(10),s=e(7),f=s.c.div(r||(r=Object(l.a)(["\n    display: flex;\n    flex-direction: row; \n\n    align-items: center;\n    justify-content: space-between;\n\n    height: 60px;\n    width: 100%;\n\n    position: fixed;\n    top: 0;\n    left: 0;\n    padding: 10px;\n\n    background-color: ",";\n\n    z-index: 1000;\n\n    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);\n"])),(function(t){return t.theme.colors.primaryDark})),d=s.c.h2(o||(o=Object(l.a)(["\n    color: ",";\n\n    @media (max-width: 720px) {\n        font-size: 16px;\n    }\n"])),(function(t){return t.theme.colors.primaryWhite})),p=s.c.img(i||(i=Object(l.a)(["\n    width: ",";\n"])),(function(t){return t.width})),b=e(2),v=e.p+"static/media/bx-arrow-back.82f1dc9a.svg",h=s.c.div(c||(c=Object(l.a)(["\n    display: flex;\n    flex-direction: column; \n\n    justify-content: center;\n    align-items: center;\n\n    max-width: 64px;\n\n    :hover {\n        cursor: pointer;\n    }\n"]))),x=s.c.img(u||(u=Object(l.a)(["\n    height: 32px;\n"]))),m=s.c.p(a||(a=Object(l.a)([""]))),j=e(1),y=function(t){var n=t.path,e=Object(b.f)();return Object(j.jsxs)(h,{onClick:function(){return e.push(n)},children:[Object(j.jsx)(x,{src:v}),Object(j.jsx)(m,{children:"voltar".toUpperCase()})]})};n.a=function(t){var n=t.title,e=t.isReturnActive,r=t.path;return Object(j.jsxs)(f,{children:[e?Object(j.jsx)(y,{path:r}):Object(j.jsx)(p,{width:"59px"}),Object(j.jsx)(d,{children:n}),Object(j.jsx)(p,{width:"59px"})]})}},85:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(0);function o(t,n){return r.isValidElement(t)&&-1!==n.indexOf(t.type.muiName)}},87:function(t,n){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.default=t.exports,t.exports.__esModule=!0},88:function(t,n,e){var r=e(131).default;function o(t){if("function"!==typeof WeakMap)return null;var n=new WeakMap,e=new WeakMap;return(o=function(t){return t?e:n})(t)}t.exports=function(t,n){if(!n&&t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!==typeof t)return{default:t};var e=o(n);if(e&&e.has(t))return e.get(t);var i={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var a=c?Object.getOwnPropertyDescriptor(t,u):null;a&&(a.get||a.set)?Object.defineProperty(i,u,a):i[u]=t[u]}return i.default=t,e&&e.set(t,i),i},t.exports.default=t.exports,t.exports.__esModule=!0},89:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=e(60)}}]);
//# sourceMappingURL=29.68f53e2f.chunk.js.map