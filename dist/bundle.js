(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"body {\n    display: flex;\n    height: 100vh;\n  background-color: grey;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n*{\n    border: 1px black solid;\n}\n\n.left-side{\n    display: grid;\n    height: 66%;\n    width: 40%;\n     flex-direction: column;\n      grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n\n.right-side{\n    display: grid;\n    height: 66%;\n    width: 40%;\n      grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n      \n\n}\n.rows { \n   display: grid;\n    grid-template-columns: repeat(10,1fr);\n}\n.columns {\n   height: 100%;\n    width: 100%;\n\n}\n\n.grid {\n    height: 100%;\nborder: 1px blueviolet solid;\n}\n.test:hover{\n    background: rebeccapurple;\n}\n.color {\n    background: red;\n}",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),s=n(565),c=n.n(s),l=n(216),u=n.n(l),d=n(589),p=n.n(d),f=n(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;let v=(e,t)=>({length:e,position:t,hits:0,sunk:!1,hit:function(){return this.hits++,this.hits},isSunk:function(){return this.length===this.count&&(this.sunk=!0),!1}});(()=>{!function(){let e=document.querySelector(".left-side"),t=["A","B","C","D","E","F","G","H","I","J"],n=["1","2","3","4","5","6","7","8","9","10"];for(let r=0;r<t.length;r++)for(let o=0;o<n.length;o++){let i=document.createElement("div");i.classList.add(`${t[r]}${n[o]}`),e.appendChild(i)}}();let e={missed:0,placeShip:e=>{},receiveAttack:()=>{},initualizeBoard:e=>{Array.from(document.querySelector(".left-side").childNodes).forEach((t=>{t.addEventListener("mouseover",(n=>{let r=e.theShip(),o=function(e,t){let n=Array.from(document.querySelector(".left-side").childNodes),r=n.filter((t=>t.className.slice(1)===e.className.slice(1))),o=n.filter((t=>t.className[0]===e.className[0]));return"vertical"===t.position?r.slice(r.indexOf(e),t.length+r.indexOf(e)):"horizontal"===t.position?o.slice(o.indexOf(e),t.length+o.indexOf(e)):void 0}(t,r);console.log(o)}))}))}},t=(()=>{let e=[v(3,"horizontal"),v(2,"vertical"),v(3,"vertical"),v(4,"vertical"),v(5,"vertical")];return{ships:e,attack:()=>{},theShip:()=>e[0]}})();e.initualizeBoard(t)})()})()})();