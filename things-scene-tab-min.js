!function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!u&&l)return l(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("./tab");Object.defineProperty(n,"Tab",{enumerable:!0,get:function(){return r(o)["default"]}})},{"./tab":3}],2:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function p(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:p(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0===i?void 0:i.call(n)},l=scene,c=l.Component,f=(l.Container,l.Rect),s=(l.LinearHorizontalLayout,l.LinearVerticalLayout,function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"_pre_draw",value:function(){var e=this.model,t=e.fillStyle,n=e.activeFillStyle;this._fillStyle||(this._fillStyle=t),this.model.fillStyle=this.activated?n:this._fillStyle}},{key:"_post_draw",value:function(e){u(Object.getPrototypeOf(t.prototype),"_post_draw",this).call(this,e)}},{key:"onclick",value:function(){this.parent.activeIndex=this.index,this.parent.invalidate()}},{key:"index",get:function(){return this.model.index}},{key:"activated",get:function(){return this.parent.activeIndex===this.index}}]),t}(f));n["default"]=s,c.register("tab-button",s)},{}],3:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function b(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:b(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0===i?void 0:i.call(n)},c=e("./tab-button"),f=r(c),s=scene,p=s.Component,h=s.Container,y=(s.Rect,s.LinearHorizontalLayout),d=s.LinearVerticalLayout,v=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),u(t,[{key:"_post_draw",value:function(e){l(Object.getPrototypeOf(t.prototype),"_post_draw",this).call(this,e);var n=this.model,r=(n.tabIndex,n.left,n.top,n.width),o=n.height,i=n.fillStyle,a=n.activeFillStyle,u=n.strokeStyle,c=n.fontColor,s=(n.lineWidth,[]),p=this.reference;if(p&&p.components.length!==this.components.length){this.activeIndex||(this.activeIndex=0);for(var h=p.components,y=(this.labelHeight,this.components.length),d=y-1;d>=0;d--)this.removeComponent(this.components[d]);for(var v=0;v<h.length;v++)"floor"==h[v].model.type&&s.push({index:v,text:h[v].model.text||String(v+1),fillStyle:i,activeFillStyle:a,fontColor:c,strokeStyle:u,margin:{top:5,left:5,right:5,bottom:5},left:0,top:0,width:r,height:o});for(var b in s)this.add(new f["default"](s[b],this.app))}}},{key:"onchange",value:function(e){e.hasOwnProperty("reference")&&(this.reference=e.reference),this.invalidate()}},{key:"layout",get:function(){var e=this.model,t=e.width,n=e.height;return t>=n?y:d}},{key:"reference",get:function(){var e=this.model.reference;return e?this.root.findById(e):null},set:function(e){this.model.reference=e}},{key:"labelHeight",get:function(){var e=this.reference.components.length,t=this.model.height;return e>0&&t/e||t}},{key:"activeIndex",get:function(){return this.get("activeIndex")},set:function(e){this.set("activeIndex",e),this.reference&&(this.reference.activeIndex=e)}}]),t}(h);n["default"]=v,p.register("tab",v)},{"./tab-button":2}]},{},[1]);