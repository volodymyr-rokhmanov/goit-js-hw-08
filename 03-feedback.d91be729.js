!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,a,i,f,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=a;return r=a=void 0,c=t,f=e.apply(o,n)}function O(e){return c=e,u=setTimeout(j,t),s?b(e):f}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function j(){var e=p();if(h(e))return k(e);u=setTimeout(j,function(e){var n=t-(e-l);return d?g(n,i-(e-c)):n}(e))}function k(e){return u=void 0,m&&r?b(e):(r=a=void 0,f)}function w(){var e=p(),n=h(e);if(r=arguments,a=this,l=e,n){if(void 0===u)return O(l);if(d)return u=setTimeout(j,t),b(l)}return void 0===u&&(u=setTimeout(j,t)),f}return t=S(t)||0,y(n)&&(s=!!n.leading,i=(d="maxWait"in n)?v(S(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=a=u=void 0},w.flush=function(){return void 0===u?f:k(p())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):i.test(t)?NaN:+t}t=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),b(e,t,{leading:r,maxWait:t,trailing:a})};var O=document.querySelector(".feedback-form input"),h=document.querySelector(".feedback-form textarea"),j=document.querySelector(".feedback-form"),k={email:"",message:""};localStorage.getItem("feedback-form-state")&&(O.value=JSON.parse(localStorage.getItem("feedback-form-state")).email),localStorage.getItem("feedback-form-state")&&(h.value=JSON.parse(localStorage.getItem("feedback-form-state")).message);j.addEventListener("input",e(t)((function(e){var t,n;e.preventDefault(),"email"===e.path[0].type&&(t=e.target.value,k.email=t,k.message=h.value),"textarea"===e.path[0].type&&(n=e.target.value,k.message=n,k.email=O.value),localStorage.setItem("feedback-form-state",JSON.stringify(k))}),500));j.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.d91be729.js.map
