function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function p(e,t,n){var r,a,o,i,f,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=a;return r=a=void 0,l=t,i=e.apply(o,n)}function S(e){return l=e,f=setTimeout(O,t),c?y(e):i}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function O(){var e=g();if(h(e))return j(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,o-(e-l)):n}(e))}function j(e){return f=void 0,p&&r?y(e):(r=a=void 0,i)}function k(){var e=g(),n=h(e);if(r=arguments,a=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),i}return t=b(t)||0,v(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),k.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=a=f=void 0},k.flush=function(){return void 0===f?i:j(g())},k}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):a.test(e)?NaN:+e}t=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),p(e,t,{leading:r,maxWait:t,trailing:a})};const y=document.querySelector(".feedback-form input"),S=document.querySelector(".feedback-form textarea"),h=document.querySelector(".feedback-form");let O={email:"",message:""};localStorage.getItem("feedback-form-state")&&(y.value=JSON.parse(localStorage.getItem("feedback-form-state")).email),localStorage.getItem("feedback-form-state")&&(S.value=JSON.parse(localStorage.getItem("feedback-form-state")).message);h.addEventListener("input",e(t)((e=>{let t,n;e.preventDefault(),"email"===e.path[0].type&&(t=e.target.value,O.email=t,O.message=S.value),"textarea"===e.path[0].type&&(n=e.target.value,O.message=n,O.email=y.value),localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500));h.addEventListener("submit",(e=>{e.preventDefault(),e.target.reset(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.e5a99768.js.map