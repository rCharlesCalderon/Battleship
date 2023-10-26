(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),c=n.n(i)()(o());c.push([e.id,"body {\n    display: flex;\n    height: 100vh;\n  background-color: grey;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n*{\n    border: 1px black solid;\n}\n\n.left-side{\n    display: grid;\n    height: 66%;\n    width: 40%;\n     flex-direction: column;\n      grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n\n.right-side{\n    display: grid;\n    height: 66%;\n    width: 40%;\n      grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n      \n\n}\n.rows { \n   display: grid;\n    grid-template-columns: repeat(10,1fr);\n}\n.columns {\n   height: 100%;\n    width: 100%;\n\n}\n\n.grid {\n    height: 100%;\nborder: 1px blueviolet solid;\n}\n\n.color {\n    background: red;\n}\n\n.battleship-hover-class{\n    background: red;\n}\n.battleship-placed{\n    background: lightslategray;\n}\n.green {\n    background: green;\n}",""]);const a=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},c=[],a=0;a<e.length;a++){var s=e[a],l=r.base?s[0]+r.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=n(i[c]);t[a].references--}for(var s=r(e,o),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{let e=(e,t)=>({length:e,position:t,hits:0,sunk:!1,hit:function(){return this.hits++,this.hits},isSunk:function(){return this.length===this.hits&&(this.sunk=!0,!0)}}),t=()=>{let t=[e(3,"horizontal"),e(2,"vertical"),e(3,"vertical"),e(4,"horizontal"),e(5,"vertical")],n=0;return{ships:t,attack:()=>{},theShip:()=>t[n++],changePosition:()=>{"vertical"===t[n].position?t[n].position="horizontal":"horizontal"===t[n].position&&(t[n].position="vertical")},checkShip:()=>t[n],counter:n}},r=()=>{let e=[];for(let t=0;t<10;t++){e[t]=[];for(let n=0;n<10;n++)e[t].push("")}return{missed:0,placeShip:(t,n,r)=>{if("horizontal"==r.position)for(let o=n;o<n+r.length;o++)e[t][o]=r;else if("vertical"==r.position)for(let o=t;o<t+r.length;o++)e[o][n]=r},receiveAttack:(t,n)=>{e[t][n].hit()},coordinates:e}},o={playerPiece:t(),playerBoard:r(),computerPiece:t(),computerBoard:r()};function i(){let e=document.querySelector(".right-side").childNodes,t=e[Math.floor(Math.random()*e.length)],n=o.computerPiece,r=o.computerBoard,a=parseInt(t.getAttribute("coordinate")[0]),s=parseInt(t.getAttribute("coordinate")[1]);5!=n.counter&&(c(t,n,r)&&(r.placeShip(a,s,n.theShip()),n.counter++),i())}function c(e,t,n){let r=parseInt(e.getAttribute("coordinate")[0]),o=parseInt(e.getAttribute("coordinate")[1]);if("horizontal"==t.checkShip().position)for(let e=o;e<o+t.checkShip().length;e++)if(""!==n.coordinates[r][e])return!1;if("vertical"==t.checkShip().position)for(let e=r;e<r+t.checkShip().length;e++)if(null==n.coordinates[e]||""!==n.coordinates[e][o])return!1;return!0}function a(e,t,n){!0===e.coordinates[t][n].isSunk()&&console.log(e.coordinates[t][n],"is sunk"),console.log(e.coordinates[t][n])}var s=n(379),l=n.n(s),d=n(795),u=n.n(d),p=n(569),h=n.n(p),f=n(565),v=n.n(f),m=n(216),g=n.n(m),y=n(589),b=n.n(y),k=n(426),S={};S.styleTagTransform=b(),S.setAttributes=v(),S.insert=h().bind(null,"head"),S.domAPI=u(),S.insertStyleElement=g(),l()(k.Z,S),k.Z&&k.Z.locals&&k.Z.locals,function(){let e=document.querySelector(".left-side"),t=document.querySelector(".right-side"),n=["A","B","C","D","E","F","G","H","I","J"],r=["0","1","2","3","4","5","6","7","8","9"];for(let t=0;t<n.length;t++)for(let o=0;o<r.length;o++){let i=document.createElement("div");i.classList.add(`${n[t]}${r[o]}`),i.setAttribute("coordinate",`${r[t]}${r[o]}`),e.appendChild(i)}for(let e=0;e<n.length;e++)for(let o=0;o<r.length;o++){let i=document.createElement("div");i.classList.add(`${n[e]}${r[o]}`),i.setAttribute("coordinate",`${r[e]}${r[o]}`),t.appendChild(i)}}(),function(){let e=document.querySelector(".left-side"),t=o.playerPiece,n=o.playerBoard;e.childNodes.forEach((e=>{e.addEventListener("click",(()=>{5!==t.counter&&c(e,t,n)&&(function(e){let t=parseInt(e.getAttribute("coordinate")[0]),n=parseInt(e.getAttribute("coordinate")[1]);o.playerBoard.placeShip(t,n,o.playerPiece.theShip()),console.log(o.playerBoard.coordinates)}(e),o.playerPiece.counter++)}))}))}(),document.querySelector(".left-side").addEventListener("contextmenu",(e=>{e.preventDefault(),console.log(o.playerPiece),void 0!==o.playerPiece.checkShip()&&o.playerPiece.changePosition()})),window.addEventListener("click",(function e(){5==o.playerPiece.counter&&(i(),window.removeEventListener("click",e))})),window.addEventListener("click",(function e(){o.playerPiece.counter&&5==o.computerPiece.counter&&(document.querySelector(".right-side").childNodes.forEach((e=>{e.addEventListener("click",(()=>{let t=e.getAttribute("coordinate")[0],n=e.getAttribute("coordinate")[1];""===o.computerBoard.coordinates[t][n]||o.computerBoard.coordinates[t][n].isSunk()?o.computerBoard.missed++:(o.computerBoard.receiveAttack(t,n),a(o.computerBoard,t,n))}))})),window.removeEventListener("click",e))})),window.addEventListener("click",(function(){5===o.playerPiece.counter&&5===o.computerPiece.counter&&function(){let e=document.querySelector(".left-side").childNodes,t=e[Math.floor(Math.random()*e.length)],n=t.getAttribute("coordinate")[0],r=t.getAttribute("coordinate")[1];""===o.playerBoard.coordinates[n][r]||o.playerBoard.coordinates[n][r].isSunk()?o.playerBoard.missed++:(o.playerBoard.receiveAttack(n,r),a(o.playerBoard,n,r))}()})),window.addEventListener("click",(function(){5===o.playerPiece.counter&&5===o.computerPiece.counter&&(o.computerPiece.ships.every((e=>!0===e.isSunk()))||o.playerPiece.ships.every((e=>!0===e.isSunk())))}))})()})();