!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire4c75;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire4c75=i),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u.default(e,t,n[t])}))}return e};var a,u=(a=i("hKHmD"))&&a.__esModule?a:{default:a};var l,f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var c="Expected a function",s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,m=/^0o[0-7]+$/i,p=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,y=g||b||Function("return this")(),O=Object.prototype.toString,j=Math.max,w=Math.min,h=function(){return y.Date.now()};function x(e,t,n){var r,i,o,a,u,l,f=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(c);function m(t){var n=r,o=i;return r=i=void 0,f=t,a=e.apply(o,n)}function p(e){return f=e,u=setTimeout(b,t),s?m(e):a}function g(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-f>=o}function b(){var e=h();if(g(e))return y(e);u=setTimeout(b,function(e){var n=t-(e-l);return d?w(n,o-(e-f)):n}(e))}function y(e){return u=void 0,v&&r?m(e):(r=i=void 0,a)}function O(){var e=h(),n=g(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return p(l);if(d)return u=setTimeout(b,t),m(l)}return void 0===u&&(u=setTimeout(b,t)),a}return t=S(t)||0,_(n)&&(s=!!n.leading,o=(d="maxWait"in n)?j(S(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),f=0,r=l=i=u=void 0},O.flush=function(){return void 0===u?a:y(h())},O}function _(t){var n=void 0===t?"undefined":e(f)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(f)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==O.call(t)}(t))return NaN;if(_(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=_(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var r=v.test(t);return r||m.test(t)?p(t.slice(2),r?2:8):d.test(t)?NaN:+t}l=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(c);return _(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),x(e,t,{leading:r,maxWait:t,trailing:i})};var T="feedback-form-state",E=document.querySelector(".feedback-form");E.addEventListener("input",e(l)((function(t){var n=t.target.name,r=t.target.value;"email"===n?M.email=r:"message"===n&&(M.message=r);var i=e(o)({},M);localStorage.setItem(T,JSON.stringify(i))}),500)),E.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements;if(!t.email.value||!t.message.value)return alert("Заповни всі поля форми перш ніж надсилати! Негайно!");console.log({emali:t.email.value,message:t.message.value}),e.target.reset(),localStorage.clear(T)}));var M={email:"",message:""},N=localStorage.getItem(T);N&&(M=JSON.parse(N),E.elements.email.value=M.email,E.elements.message.value=M.message)}();
//# sourceMappingURL=03-feedback.65db4b55.js.map
