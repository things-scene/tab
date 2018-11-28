!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t){e.exports=scene},function(e,t,i){e.exports=i(2)},function(e,t,i){"use strict";i.r(t);var r=i(0);r.Component.register("tab-button",class extends(Object(r.RectPath)(r.Component)){get index(){return this.model.index}get activated(){return this.parent.activeIndex===this.index}removed(e){this.dispose()}prerender(e){super.prerender(e);let{fillStyle:t,activeFillStyle:i,activeLineColor:r,activeLineWidth:n,fontColor:o,activeFontColor:l}=this.model;this.hasOwnProperty("_fillStyle")||(this._fillStyle=t),this.hasOwnProperty("_fontColor")||(this._fontColor=o),this.activated?(this.model.fillStyle=i,this.model.fontColor=l,this.model.strokeStyle=r,this.model.lineWidth=n):(this.model.fillStyle=this._fillStyle,this.model.fontColor=this._fontColor,this.model.strokeStyle=this._strokeStyle,this.model.lineWidth=this._lineWidth)}render(e){var{left:t=0,top:i=0,width:r,height:n}=this.bounds;e.beginPath(),e.rect(t,i,r,n),this.drawFill(e),this.drawStroke(e)}postrender(e){super.postrender(e),this.model.fillStyle=this._fillStyle,this.model.fontColor=this._fontColor,this.model.strokeStyle=this._strokeStyle,this.model.lineWidth=this._lineWidth,delete this._fillStyle,delete this._fontColor,delete this._strokeStyle,delete this._lineWidth}onclick(e){this.parent.activeIndex=this.index,this.parent.invalidate()}onchange(e){e.hasOwnProperty("fillStyle")&&(this._fillStyle=e.fillStyle),e.hasOwnProperty("fontColor")&&(this._fontColor=e.fontColor),e.hasOwnProperty("strokeStyle")&&(this._fontColor=e.fontColor),e.hasOwnProperty("lineWidth")&&(this._fontColor=e.fontColor),e.hasOwnProperty("text")&&this.parent.reference.getAt(this.index).set("text",e.text),this.invalidate()}});const n=25,o=25;const l={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"string",label:"tab-reference",name:"reference",property:"reference"},{type:"number",label:"tab-active-index",name:"activeIndex",property:{min:0,step:1}},{type:"color",label:"active-fill-style",name:"activeFillStyle",property:"activeFillStyle"},{type:"color",label:"active-font-color",name:"activeFontColor",property:"activeFontColor"},{type:"color",label:"active-line-color",name:"activeLineColor",property:"activeLineColor"},{type:"number",label:"active-line-width",name:"activeLineWidth",property:"activeLineWidth"}]};class s extends r.Container{get layout(){let{width:e,height:t}=this.model;return e>=t?r.LinearHorizontalLayout:r.LinearVerticalLayout}get nature(){return l}get focusible(){return!1}get reference(){var{reference:e}=this.model;return e?(this._reference||(this._reference=this.root.findById(e),this._reference&&this._reference.on("change",this.onRefChanged,this)),this._reference):null}get labelHeight(){var e=this.reference.components.length,t=this.model.height;return e>0&&t/e||t}get activeIndex(){return this.get("activeIndex")}set reference(e){this.reference&&this.reference.off("change",this.onRefChanged,this),this._reference=null,this.model.reference=e}set activeIndex(e){this.set("activeIndex",e),this.reference&&(this.reference.activeIndex=e)}render(e){if(super.render(e),this.reference)this.size()!==this.reference.size()&&this.rebuildTabButtons(e);else for(var t=this.components.length-1;t>=0;t--){var i=this.components[t];this.removeComponent(i)}}postrender(e){if(super.postrender(e),!this.app.isEditMode)return;var{left:t,top:i,width:r,fillStyle:l}=this.model;e.beginPath(),e.rect(t+r,i,n,o);e.fillStyle=`rgba(${235}, ${235}, ${235}, ${1})`,e.fill(),e.closePath()}contains(e,t){if(!this.app.isEditMode)return super.contains(e,t);if(super.contains(e,t))return!0;var{left:i,top:r,width:l}=this.bounds,s=i+l,h=o;return e<Math.max(s+n,s)&&e>Math.min(s+n,s)&&t<Math.max(r+h,r)&&t>Math.min(r+h,r)}dispose(){this.reference&&this.reference.off("change",this.onRefChanged,this),super.dispose()}rebuildTabButtons(){var{tabIndex:e=0,left:t,top:i,width:n,height:o,fillStyle:l,activeFillStyle:s,activeLineColor:h,activeLineWidth:a,strokeStyle:c,fontColor:d,activeFontColor:f,fontFamily:p,fontSize:u,lineHeight:y,italic:v,bold:m,lineWidth:b=0}=this.model;let g=[],S=this.reference.components;this.labelHeight;for(var C=this.components.length-1;C>=0;C--)this.removeComponent(this.components[C]);for(let e=0;e<S.length;e++){if("floor"!=S[e].model.type)continue;let t=S[e].text||"";g.push(r.Model.compile({type:"tab-button",index:e,text:t||String(e+1),fillStyle:l||"transparent",activeFillStyle:s,activeLineColor:h,activeLineWidth:a,fontColor:d,activeFontColor:f||d,fontFamily:p,fontSize:u,lineHeight:y,italic:v,bold:m,strokeStyle:c,lineWidth:b,left:0,top:0,width:n,height:o}))}this.add(g),this.reflow(),this.activeIndex=this.model.activeIndex||0}setTabButtonsStyle(e){var t=this.components;for(var i in t){t[i].set(e)}}onRefChanged(e,t,i){}onchange(e,t){e.hasOwnProperty("reference")&&(this.reference=e.reference,this.invalidate()),this.setTabButtonsStyle(e)}}r.Component.register("tab",s),i.d(t,"Tab",function(){return s})}]);
//# sourceMappingURL=things-scene-tab.js.map