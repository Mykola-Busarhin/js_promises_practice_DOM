parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=new Promise(function(e,t){document.addEventListener("click",function(t){t.preventDefault(),e("First promise was resolved")}),setTimeout(function(){return t(new Error("First promise was rejected"))},3e3)});e.then(o),e.catch(r);var t=new Promise(function(e){document.addEventListener("contextmenu",function(e){e.preventDefault()}),document.addEventListener("mouseup",function(t){t.preventDefault(),0!==t.button&&2!==t.button||e("Second promise was resolved")})});t.then(o);var n=new Promise(function(e){var t=0,n=0;document.addEventListener("contextmenu",function(e){e.preventDefault()}),document.addEventListener("mouseup",function(o){0===o.button&&n++,2===o.button&&t++,1===n&&1===t&&e("Third promise was resolved")})});function o(e){var t=document.createElement("div"),n=document.querySelector("body");t.textContent=e,t.setAttribute("data-qa","notification"),t.className="success",n.append(t)}function r(e){var t=document.createElement("div"),n=document.querySelector("body");t.textContent=e,t.setAttribute("data-qa","notification"),t.className="warning",n.append(t)}n.then(o);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.a1e8cc3e.js.map