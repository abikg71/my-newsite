!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);t(1);alert("Hello I Created new dev-app folder")},function(n,e,t){var o=t(2),i=t(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1},a=(o(i,r),i.locals?i.locals:{});n.exports=a},function(n,e,t){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},o=[],i=0;i<n.length;i++){var r=n[i],l=e.base?r[0]+e.base:r[0],d=t[l]||0,s="".concat(l," ").concat(d);t[l]=d+1;var p=c(s),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(a[p].references++,a[p].updater(f)):a.push({identifier:s,updater:x(f,e),references:1}),o.push(s)}return o}function d(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,p=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function f(n,e,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=p(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function u(n,e,t){var o=t.css,i=t.media,r=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var g=null,m=0;function x(n,e){var t,o,i;if(e.singleton){var r=m++;t=g||(g=d(e)),o=f.bind(null,t,r,!1),i=f.bind(null,t,r,!0)}else t=d(e),o=u.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var i=c(t[o]);a[i].references--}for(var r=l(n,e),d=0;d<t.length;d++){var s=c(t[d]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=r}}}},function(n,e,t){(e=t(4)(!1)).push([n.i,"* {\n  box-sizing: border-box;\n}\n\nbody{\n  font-family: 'Open Sans', sans-serif;\n  background-color:#FFEACA;\n  padding: 0px;\n  margin: 0px;\n}\n\nnav ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #848B79\t;\n}\n\nnav li {\n  float:right;\n}\n\nnav li a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\na {\n  color: #6ab47b;\n}\n\n/* nav link */\n\nnav a, nav a:visited {\n  color: #fff;\n}\n\n/* selected nav link\nchanges the color of the Anchor lists*/\n\nnav a.selected, nav a:hover {\n  color: red;\n}\n\nimg {\n  max-width: 100%;\n  margin-bottom: 20px;\n  border-radius: 10px;\n}\n\n/**********************************\nRSVP\n***************************************/\n\n.wrapper{\n  margin-left: 20px;\n  padding-left: 10px;\n}\n\n/****************\nTrsideying side by\n****************/\n\n.card {\n  margin: 30px;\n  padding: 20px 40px 40px;\n  max-width: 500px;\n  text-align: left;\n  background: #fff;\n  border-bottom: 4px solid #ccc;\n  border-radius: 6px;\n}\n\n.card:hover {\n  border-color: #ff99ff;\n}\n\nul.skills {\n  padding: 0;\n  text-align: center;\n}\n\n.skills li {\n  border-radius: 6px;\n  display: inline-block;\n  background: #ff9904;\n  color: white;\n  padding: 5px 10px;\n  margin: 2px;\n}\n\n.skills li:nth-child(1) {\n  background: #0399ff;\n}\n\n.skills li:nth-child(2) {\n  background: #9ff;\n}\n\n.skills li:nth-child(3) {\n  background: gray;\n}\n\n.skills li:nth-child(5) {\n  background: greenyellow;\n}\n\n.skills li:nth-child(6) {\n  background: red;\n}\n\n/*Background and Goal css rule */\n\nh3 {\n  /*color: maroon;/*blue*/\n  letter-spacing: 1.2px;\n  font-size: 42px;\n  color: #465058;\n  margin-left:200px;\n\n  /*The spaces bn letters*/\n  font-style: italic;\n}\n\nh4 {\n  font-weight: 200px;\n  font-size: 24px;\n  margin: 10px 0 0;\n}\n\nh5 {\n  color: #282828;\n  font-weight: 120px;\n  font-size: 16px;\n  margin: 10px 0 0;\n  margin-left: 15px;\n}\n\nh6 {\n  color:#388E8E;\n  font-weight: 300px;\n  font-size: 14.4px;\n  margin: 3.2px 0 0;\n  margin-left: 25px;\n}\n\n.card-title {\n  text-align: center;\n  border: solid gray 3px;\n  border-radius: 12px;/* Curving the border*/\n  padding: 0.175px;\n  margin-top: .175px;\n\n}\n\n/***********************\nABOUT\n***********************/\n\n.wrapper{\n  margin-left: 20px;\n  padding-left: 20px;\n}\n\n.about-page, .about{\n  padding-left: 20px;\n  margin: inherit;\n}\n\n/***********************\n  CONTACT-main\n***********************/\n\n.contact{\n  padding-left: 50%x;\n  margin: inherit;\n  text-align:justify;\n\n}\n\n/***********************\nRSV\n***********************/\n\nform {\n  width: 60%;\n  background: white;\n  display: inline-block;\n  overflow: hidden;\n  display: flex;\n  border-radius: .2em;\n  border: solid 4px white;\n  box-shadow: 0 1px 14px rgba(0,0,0, .12);\n}\n\nform button {\n  padding: 0 1em;\n  font-size: 1em;\n  background: #7bcbc4;\n  border-radius: .2em;\n}\n\n.secondary-content {\n\tpadding-top: 80px;\n\tpadding-bottom: 70px;\n  border-bottom: 2px solid #dfe2e6;\n}\n\n.t-border {\n  border-top: 2px solid #dfe2e6;\n}\n\n.secondary-content {\n  width: 75%;\n  padding-left: 50px;\n  padding-right: 50px;\n  margin: auto;\n  max-width: 960px;\n}\n\n/* Floated Columns ------------------ */\n\n.resorts,\n.tips {\n  width: 46.5%;\n}\n\n.tips {\n  float: left;\n}\n\n.resorts {\n  float: right;\n}\n\n/**********************************\nPAGE: ABOUT\n***********************************/\n\n.profile-photo {\n  clear: both;\n  display: block;\n  max-width: 150px;\n  margin: 0 auto 30px;\n  border-radius: 100%;\n}\n\n/**********************************\nPAGE: CONTACT\n***********************************/\n\n.contact-info {\n  list-style: none;\n  padding: 0;\n  margin-left: 20px;\n  font-size: 0.9em;\n}\n\n/*moves Icons left of the things they refer to */\n\n.contact-info a {\n  display: block;\n  min-height: 20px;\n  background-repeat:no-repeat;\n  background-size: 20px 20px;\n  padding: 0 0 0 0 30px;\n  margin: 0 0 10px;\n}\n\n.contact-info li.phone a {\n  background-image: url('../images/phone.png');\n}\n\n.contact-info li.mail a {\n  background-image: url('../images/mail.png');\n}\n\n.contact-info li.twitter a {\n  background-image: url('../images/twitter.png');\n}\n\n/**********************************\nFOOTER\n***********************************/\n\nfooter {\n  font-size: 0.75em;\n  text-align: center;\n  clear: both;\n  /* separates the footer from the picture*/\n  padding-top: 50px;\n  color: #cac;\n}\n\n.social-icon {\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n}\n\n/****************\nslideshow\n\n*****************/\n\n.mySlides {display: none;}\n\nimg {vertical-align: middle;}\n\n/* Slideshow container */\n\n.slideshow-container {\n  max-width: 1000px;\n  position: relative;\n  margin: auto;\n}\n\n/* Caption text */\n\n.text {\n  color: red;\n  font-size: 15px;\n  padding: 0px 12px;\n  position:inherit;\n  bottom: 8px;\n  width: 100%;\n  text-align: absolute;\n}\n\n/* Number text (1/3 etc) */\n\n.numbertext {\n  color: #f2f2f2;\n  font-size: 12px;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n/* The dots/bullets/indicators */\n\n.dot {\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active {\n  background-color: #717171;\n}\n\n/* Fading animation */\n\n.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.75s;\n  animation-name: fade;\n  animation-duration: 1.75s;\n}\n\n@-webkit-keyframes fade {\n  from {opacity: .4}\n  to {opacity: 1}\n}\n\n@keyframes fade {\n  from {opacity: .4}\n  to {opacity: 1}\n}\n\n/* On smaller screens, decrease text size */\n\n@media only screen and (max-width: 300px) {\n  .text {font-size: 11px}\n}\n",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),r=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(r).concat([i]).join("\n")}var a,c,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}}]);