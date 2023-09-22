(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([e.id,"body {\n    display: flex;\n    height: 100vh;\n  background-color: grey;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n*{\n    border: 1px black solid;\n}\n\n.left-side{\n    display: grid;\n    height: 66%;\n    width: 40%;\n     flex-direction: column;\n      grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n\n.right-side{\n    display: grid;\n    height: 66%;\n    width: 40%;\n      grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n      \n\n}\n.rows { \n   display: grid;\n    grid-template-columns: repeat(10,1fr);\n}\n.columns {\n   height: 100%;\n    width: 100%;\n\n}\n\n.grid {\n    height: 100%;\nborder: 1px blueviolet solid;\n}\n\n.color {\n    background: red;\n}\n\n.battleship-hover-class{\n    background: red;\n}\n.battleship-placed{\n    background: lightslategray;\n}\n.green {\n    background: green;\n}",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var h=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var f=i(p,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=n(o[a]);t[s].references--}for(var c=r(e,i),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(e){e.forEach((e=>{e.classList.add("battleship-hover-class")}))}function t(e){e.forEach((e=>{e.classList.remove("battleship-hover-class")}))}let r=(e,t)=>({length:e,position:t,hits:0,sunk:!1,hit:function(){return this.hits++,this.hits},isSunk:function(){return this.length===this.count&&(this.sunk=!0),!1}});var i=n(379),o=n.n(i),a=n(795),s=n.n(a),c=n(569),l=n.n(c),d=n(565),u=n.n(d),h=n(216),p=n.n(h),f=n(589),v=n.n(f),m=n(426),g={};function y(e){return!e.classList.contains("battleship-placed")}function b(e,t){let n=Array.from(document.querySelector(".left-side").childNodes);if(void 0!==t.theShip()){let r=n.filter((t=>t.className[1]===e.className[1]));return r.slice(r.indexOf(e),r.indexOf(e)+t.theShip().length)}}function S(e,t){let n=Array.from(document.querySelector(".left-side").childNodes);if(void 0!==t.theShip()){let r=n.filter((t=>t.className[0]===e.className[0]));return r.slice(r.indexOf(e),r.indexOf(e)+t.theShip().length)}}g.styleTagTransform=v(),g.setAttributes=u(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=p(),o()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals,(()=>{let n=(()=>{let e=[r(3,"vertical"),r(2,"vertical"),r(3,"vertical"),r(4,"horizontal"),r(5,"vertical")],t=0;return{ships:e,attack:()=>{},theShip:()=>e[t],updateShip:()=>t++,changePosition:()=>{"horizontal"===e[t].position?e[t].position="vertical":"vertical"===e[t].position&&(e[t].position="horizontal")}}})();!function(){let e=document.querySelector(".left-side"),t=["A","B","C","D","E","F","G","H","I","J"],n=["0","1","2","3","4","5","6","7","8","9"];for(let r=0;r<t.length;r++)for(let i=0;i<n.length;i++){let o=document.createElement("div");o.classList.add(`${t[r]}${n[i]}`),e.appendChild(o)}}(),function(n){Array.from(document.querySelector(".left-side").childNodes).forEach((r=>{r.addEventListener("mouseover",(()=>{void 0!==n.theShip()&&("horizontal"==n.theShip().position?e(S(r,n)):"vertical"==n.theShip().position&&e(b(r,n)))})),r.addEventListener("mouseleave",(()=>{void 0!==n.theShip()&&(t(b(r,n)),t(S(r,n)))}))}))}(n),function(n){Array.from(document.querySelector(".left-side").childNodes).forEach((r=>{r.addEventListener("contextmenu",(i=>{i.preventDefault(),"vertical"==n.theShip().position?(t(b(r,n)),e(S(r,n)),n.changePosition()):"horizontal"==n.theShip().position&&(t(S(r,n)),e(b(r,n)),n.changePosition())}))}))}(n),function(e){Array.from(document.querySelector(".left-side").childNodes).forEach((t=>{t.addEventListener("click",(()=>{"horizontal"==e.theShip().position?S(t,e).every(y)&&e.theShip().length==S(t,e).length&&(S(t,e).forEach((e=>{e.classList.add("battleship-placed")})),e.updateShip()):"vertical"==e.theShip().position&&b(t,e).every(y)&&e.theShip().length==b(t,e).length&&(b(t,e).forEach((e=>{e.classList.add("battleship-placed")})),e.updateShip())}))}))}(n),4===n.theShip.length&&console.log("yep")})()})()})();