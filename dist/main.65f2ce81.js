parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TnWt":[function(require,module,exports) {

},{}],"US5u":[function(require,module,exports) {
"use strict";require("./style1.css");var n=parseFloat(num.innerText);console.log(n),add.onclick=function(){num.innerText=++n},sub.onclick=function(){num.innerText=--n},mul.onclick=function(){num.innerText=n*=2},div.onclick=function(){num.innerText=n/=2};
},{"./style1.css":"TnWt"}],"vZ5o":[function(require,module,exports) {
"use strict";require("./style2.css");var e=$(".tab"),s=$(".content"),l=0;e.on("click",function(t){console.log(t),l=parseInt(t.target.innerText)-1,console.log(l),s.eq(l).addClass("selected").siblings().removeClass("selected"),e.children().eq(l).addClass("active").siblings().removeClass("active")});
},{"./style2.css":"TnWt"}],"y8lT":[function(require,module,exports) {
"use strict";require("./style3.css");var c=$("#app3content");c.on("click",function(){c.toggleClass("clicked")});
},{"./style3.css":"TnWt"}],"eWpN":[function(require,module,exports) {
"use strict";require("./style4.css");
},{"./style4.css":"TnWt"}],"epB2":[function(require,module,exports) {
"use strict";require("./app1"),require("./app2"),require("./app3"),require("./app4");
},{"./app1":"US5u","./app2":"vZ5o","./app3":"y8lT","./app4":"eWpN"}]},{},["epB2"], null)
//# sourceMappingURL=main.65f2ce81.js.map