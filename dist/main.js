!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){var r,o;function n(e){var t=e.target;t.removeAttribute("readonly"),t.style["background-image"]="url(".concat("https://chrishham.github.io/remedy/images/Ninja.jpg",")"),t.style["background-size"]="contain",t.style["background-repeat"]="no-repeat",t.style["background-position-x"]="right",t.style["background-color"]="#dbf1db",t.style["border-radius"]="10px",t.style["padding-top"]="10px"}(o=document.querySelectorAll("[readonly]"))&&(r=!!window.chrome&&!!window.chrome.webstore,console.log("isChrome : "+r),o.forEach(function(e){var t=e.previousElementSibling;if(t&&/(Notes|Summary)/.test(t.innerHTML)){console.log(e);var o=r?"https://chrishham.github.io/remedy/images/key_24x24.png":"https://chrishham.github.io/remedy/images/key.cur";e.addEventListener("click",n),e.style.cursor="url('".concat(o,r?"') 25 15,crosshair":"'),crosshair"),document.getElementById("WIN_3_300000300").addEventListener("click",function(){setTimeout(function(){console.log("i was clicked!"),location.reload()},1e3)})}}))}]);