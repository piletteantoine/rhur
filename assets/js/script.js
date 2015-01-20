// ------------------------------------------------------------
// PLUGINS
// ------------------------------------------------------------

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010 (0.5 kb minified)
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);


/*
 * Fancy Select (3.5 kb minified)
 * http://code.octopuscreative.com/fancyselect/
 */
(function(){var a;a=window.jQuery||window.Zepto||window.$;a.fn.fancySelect=function(d){var c,b;if(d==null){d={}}b=a.extend({forceiOS:false,includeBlank:false,optionTemplate:function(e){return e.text()},triggerTemplate:function(e){return e.text()}},d);c=!!navigator.userAgent.match(/iP(hone|od|ad)/i);return this.each(function(){var e,i,g,j,f,h,k;j=a(this);if(j.hasClass("fancified")||j[0].tagName!=="SELECT"){return}j.addClass("fancified");j.css({width:1,height:1,display:"block",position:"absolute",top:0,left:0,opacity:0});j.wrap('<div class="fancy-select">');k=j.parent();if(j.data("class")){k.addClass(j.data("class"))}k.append('<div class="trigger">');if(!(c&&!b.forceiOS)){k.append('<ul class="options">')}f=k.find(".trigger");g=k.find(".options");i=j.prop("disabled");if(i){k.addClass("disabled")}h=function(){var l;l=b.triggerTemplate(j.find(":selected"));return f.html(l)};j.on("blur.fs",function(){if(f.hasClass("open")){return setTimeout(function(){return f.trigger("close.fs")},120)}});f.on("close.fs",function(){f.removeClass("open");return g.removeClass("open")});f.on("click.fs",function(){var l,m;if(!i){f.toggleClass("open");if(c&&!b.forceiOS){if(f.hasClass("open")){return j.focus()}}else{if(f.hasClass("open")){m=f.parent();l=m.offsetParent();if((m.offset().top+m.outerHeight()+g.outerHeight()+20)>a(window).height()+a(window).scrollTop()){g.addClass("overflowing")}else{g.removeClass("overflowing")}}g.toggleClass("open");if(!c){return j.focus()}}}});j.on("enable",function(){j.prop("disabled",false);k.removeClass("disabled");i=false;return e()});j.on("disable",function(){j.prop("disabled",true);k.addClass("disabled");return i=true});j.on("change.fs",function(l){if(l.originalEvent&&l.originalEvent.isTrusted){return l.stopPropagation()}else{return h()}});j.on("keydown",function(n){var m,o,l;l=n.which;m=g.find(".hover");m.removeClass("hover");if(!g.hasClass("open")){if(l===13||l===32||l===38||l===40){n.preventDefault();return f.trigger("click.fs")}}else{if(l===38){n.preventDefault();if(m.length&&m.index()>0){m.prev().addClass("hover")}else{g.find("li:last-child").addClass("hover")}}else{if(l===40){n.preventDefault();if(m.length&&m.index()<g.find("li").length-1){m.next().addClass("hover")}else{g.find("li:first-child").addClass("hover")}}else{if(l===27){n.preventDefault();f.trigger("click.fs")}else{if(l===13||l===32){n.preventDefault();m.trigger("click.fs")}else{if(l===9){if(f.hasClass("open")){f.trigger("close.fs")}}}}}}o=g.find(".hover");if(o.length){g.scrollTop(0);return g.scrollTop(o.position().top-12)}}});g.on("click.fs","li",function(m){var l;l=a(this);j.val(l.data("raw-value"));if(!c){j.trigger("blur.fs").trigger("focus.fs")}g.find(".selected").removeClass("selected");l.addClass("selected");f.addClass("selected");return j.val(l.data("raw-value")).trigger("change.fs").trigger("blur.fs").trigger("focus.fs")});g.on("mouseenter.fs","li",function(){var m,l;l=a(this);m=g.find(".hover");m.removeClass("hover");return l.addClass("hover")});g.on("mouseleave.fs","li",function(){return g.find(".hover").removeClass("hover")});e=function(){var l;h();if(c&&!b.forceiOS){return}l=j.find("option");return j.find("option").each(function(n,m){var o;m=a(m);if(!m.prop("disabled")&&(m.val()||b.includeBlank)){o=b.optionTemplate(m);if(m.prop("selected")){return g.append('<li data-raw-value="'+(m.val())+'" class="selected">'+o+"</li>")}else{return g.append('<li data-raw-value="'+(m.val())+'">'+o+"</li>")}}})};j.on("update.fs",function(){k.find(".options").empty();return e()});return e()})}}).call(this);


/*
 * Dragdealer.js 0.9.7 (12 kb minified)
 * http://github.com/skidding/dragdealer
 *
 * (c) 2010+ Ovidiu Cherecheș
 * http://skidding.mit-license.org
 */
 (function(a,b){if(typeof define==="function"&&define.amd){define(b)}else{a.Dragdealer=b()}}(this,function(){var j=function(q,p){this.options=this.applyDefaults(p||{});this.bindMethods();this.wrapper=this.getWrapperElement(q);if(!this.wrapper){return}this.handle=this.getHandleElement(this.wrapper,this.options.handleClass);if(!this.handle){return}this.init();this.bindEventListeners()};j.prototype={defaults:{disabled:false,horizontal:true,vertical:false,slide:true,steps:0,snap:false,loose:false,speed:0.1,xPrecision:0,yPrecision:0,handleClass:"handle",css3:true,activeClass:"active",tapping:true},init:function(){if(this.options.css3){o(this.handle)}this.value={prev:[-1,-1],current:[this.options.x||0,this.options.y||0],target:[this.options.x||0,this.options.y||0]};this.offset={wrapper:[0,0],mouse:[0,0],prev:[-999999,-999999],current:[0,0],target:[0,0]};this.change=[0,0];this.stepRatios=this.calculateStepRatios();this.activity=false;this.dragging=false;this.tapping=false;this.reflow();if(this.options.disabled){this.disable()}},applyDefaults:function(q){for(var p in this.defaults){if(!q.hasOwnProperty(p)){q[p]=this.defaults[p]}}return q},getWrapperElement:function(p){if(typeof(p)=="string"){return document.getElementById(p)}else{return p}},getHandleElement:function(t,p){var r,s,q;if(t.getElementsByClassName){r=t.getElementsByClassName(p);if(r.length>0){return r[0]}}else{s=new RegExp("(^|\\s)"+p+"(\\s|$)");r=t.getElementsByTagName("*");for(q=0;q<r.length;q++){if(s.test(r[q].className)){return r[q]}}}},calculateStepRatios:function(){var p=[];if(this.options.steps>1){for(var q=0;q<=this.options.steps-1;q++){p[q]=q/(this.options.steps-1)}}return p},setWrapperOffset:function(){this.offset.wrapper=c.get(this.wrapper)},calculateBounds:function(){var p={top:this.options.top||0,bottom:-(this.options.bottom||0)+this.wrapper.offsetHeight,left:this.options.left||0,right:-(this.options.right||0)+this.wrapper.offsetWidth};p.availWidth=(p.right-p.left)-this.handle.offsetWidth;p.availHeight=(p.bottom-p.top)-this.handle.offsetHeight;return p},calculateValuePrecision:function(){var p=this.options.xPrecision||Math.abs(this.bounds.availWidth),q=this.options.yPrecision||Math.abs(this.bounds.availHeight);return[p?1/p:0,q?1/q:0]},bindMethods:function(){if(typeof(this.options.customRequestAnimationFrame)==="function"){this.requestAnimationFrame=i(this.options.customRequestAnimationFrame,window)}else{this.requestAnimationFrame=i(h,window)}if(typeof(this.options.customCancelAnimationFrame)==="function"){this.cancelAnimationFrame=i(this.options.customCancelAnimationFrame,window)}else{this.cancelAnimationFrame=i(g,window)}this.animateWithRequestAnimationFrame=i(this.animateWithRequestAnimationFrame,this);this.animate=i(this.animate,this);this.onHandleMouseDown=i(this.onHandleMouseDown,this);this.onHandleTouchStart=i(this.onHandleTouchStart,this);this.onDocumentMouseMove=i(this.onDocumentMouseMove,this);this.onWrapperTouchMove=i(this.onWrapperTouchMove,this);this.onWrapperMouseDown=i(this.onWrapperMouseDown,this);this.onWrapperTouchStart=i(this.onWrapperTouchStart,this);this.onDocumentMouseUp=i(this.onDocumentMouseUp,this);this.onDocumentTouchEnd=i(this.onDocumentTouchEnd,this);this.onHandleClick=i(this.onHandleClick,this);this.onWindowResize=i(this.onWindowResize,this)},bindEventListeners:function(){e(this.handle,"mousedown",this.onHandleMouseDown);e(this.handle,"touchstart",this.onHandleTouchStart);e(document,"mousemove",this.onDocumentMouseMove);e(this.wrapper,"touchmove",this.onWrapperTouchMove);e(this.wrapper,"mousedown",this.onWrapperMouseDown);e(this.wrapper,"touchstart",this.onWrapperTouchStart);e(document,"mouseup",this.onDocumentMouseUp);e(document,"touchend",this.onDocumentTouchEnd);e(this.handle,"click",this.onHandleClick);e(window,"resize",this.onWindowResize);this.animate(false,true);this.interval=this.requestAnimationFrame(this.animateWithRequestAnimationFrame)},unbindEventListeners:function(){b(this.handle,"mousedown",this.onHandleMouseDown);b(this.handle,"touchstart",this.onHandleTouchStart);b(document,"mousemove",this.onDocumentMouseMove);b(this.wrapper,"touchmove",this.onWrapperTouchMove);b(this.wrapper,"mousedown",this.onWrapperMouseDown);b(this.wrapper,"touchstart",this.onWrapperTouchStart);b(document,"mouseup",this.onDocumentMouseUp);b(document,"touchend",this.onDocumentTouchEnd);b(this.handle,"click",this.onHandleClick);b(window,"resize",this.onWindowResize);this.cancelAnimationFrame(this.interval)},onHandleMouseDown:function(p){n.refresh(p);f(p);a(p);this.activity=false;this.startDrag()},onHandleTouchStart:function(p){n.refresh(p);a(p);this.activity=false;this.startDrag()},onDocumentMouseMove:function(p){n.refresh(p);if(this.dragging){this.activity=true}},onWrapperTouchMove:function(p){n.refresh(p);if(!this.activity&&this.draggingOnDisabledAxis()){if(this.dragging){this.stopDrag()}return}f(p);this.activity=true},onWrapperMouseDown:function(p){n.refresh(p);f(p);this.startTap()},onWrapperTouchStart:function(p){n.refresh(p);f(p);this.startTap()},onDocumentMouseUp:function(p){this.stopDrag();this.stopTap()},onDocumentTouchEnd:function(p){this.stopDrag();this.stopTap()},onHandleClick:function(p){if(this.activity){f(p);a(p)}},onWindowResize:function(p){this.reflow()},enable:function(){this.disabled=false;this.handle.className=this.handle.className.replace(/\s?disabled/g,"")},disable:function(){this.disabled=true;this.handle.className+=" disabled"},reflow:function(){this.setWrapperOffset();this.bounds=this.calculateBounds();this.valuePrecision=this.calculateValuePrecision();this.updateOffsetFromValue()},getStep:function(){return[this.getStepNumber(this.value.target[0]),this.getStepNumber(this.value.target[1])]},getValue:function(){return this.value.target},setStep:function(q,r,p){this.setValue(this.options.steps&&q>1?(q-1)/(this.options.steps-1):0,this.options.steps&&r>1?(r-1)/(this.options.steps-1):0,p)},setValue:function(q,r,p){this.setTargetValue([q,r||0]);if(p){this.groupCopy(this.value.current,this.value.target);this.updateOffsetFromValue();this.callAnimationCallback()}},startTap:function(){if(this.disabled||!this.options.tapping){return}this.tapping=true;this.setWrapperOffset();this.setTargetValueByOffset([n.x-this.offset.wrapper[0]-(this.handle.offsetWidth/2),n.y-this.offset.wrapper[1]-(this.handle.offsetHeight/2)])},stopTap:function(){if(this.disabled||!this.tapping){return}this.tapping=false;this.setTargetValue(this.value.current)},startDrag:function(){if(this.disabled){return}this.dragging=true;this.setWrapperOffset();this.offset.mouse=[n.x-c.get(this.handle)[0],n.y-c.get(this.handle)[1]];if(!this.wrapper.className.match(this.options.activeClass)){this.wrapper.className+=" "+this.options.activeClass}},stopDrag:function(){if(this.disabled||!this.dragging){return}this.dragging=false;var q=this.groupClone(this.value.current);if(this.options.slide){var p=this.change;q[0]+=p[0]*4;q[1]+=p[1]*4}this.setTargetValue(q);this.wrapper.className=this.wrapper.className.replace(" "+this.options.activeClass,"")},callAnimationCallback:function(){var p=this.value.current;if(this.options.snap&&this.options.steps>1){p=this.getClosestSteps(p)}if(!this.groupCompare(p,this.value.prev)){if(typeof(this.options.animationCallback)=="function"){this.options.animationCallback.call(this,p[0],p[1])}this.groupCopy(this.value.prev,p)}},callTargetCallback:function(){if(typeof(this.options.callback)=="function"){this.options.callback.call(this,this.value.target[0],this.value.target[1])}},animateWithRequestAnimationFrame:function(p){if(p){this.timeOffset=this.timeStamp?p-this.timeStamp:0;this.timeStamp=p}else{this.timeOffset=25}this.animate();this.interval=this.requestAnimationFrame(this.animateWithRequestAnimationFrame)},animate:function(s,r){if(s&&!this.dragging){return}if(this.dragging){var p=this.groupClone(this.value.target);var q=[n.x-this.offset.wrapper[0]-this.offset.mouse[0],n.y-this.offset.wrapper[1]-this.offset.mouse[1]];this.setTargetValueByOffset(q,this.options.loose);this.change=[this.value.target[0]-p[0],this.value.target[1]-p[1]]}if(this.dragging||r){this.groupCopy(this.value.current,this.value.target)}if(this.dragging||this.glide()||r){this.updateOffsetFromValue();this.callAnimationCallback()}},glide:function(){var p=[this.value.target[0]-this.value.current[0],this.value.target[1]-this.value.current[1]];if(!p[0]&&!p[1]){return false}if(Math.abs(p[0])>this.valuePrecision[0]||Math.abs(p[1])>this.valuePrecision[1]){this.value.current[0]+=p[0]*this.options.speed*this.timeOffset/25;this.value.current[1]+=p[1]*this.options.speed*this.timeOffset/25}else{this.groupCopy(this.value.current,this.value.target)}return true},updateOffsetFromValue:function(){if(!this.options.snap){this.offset.current=this.getOffsetsByRatios(this.value.current)}else{this.offset.current=this.getOffsetsByRatios(this.getClosestSteps(this.value.current))}if(!this.groupCompare(this.offset.current,this.offset.prev)){this.renderHandlePosition();this.groupCopy(this.offset.prev,this.offset.current)}},renderHandlePosition:function(){var p="";if(this.options.css3&&d.transform){if(this.options.horizontal){p+="translateX("+this.offset.current[0]+"px)"}if(this.options.vertical){p+=" translateY("+this.offset.current[1]+"px)"}this.handle.style[d.transform]=p;return}if(this.options.horizontal){this.handle.style.left=this.offset.current[0]+"px"}if(this.options.vertical){this.handle.style.top=this.offset.current[1]+"px"}},setTargetValue:function(p,r){var q=r?this.getLooseValue(p):this.getProperValue(p);this.groupCopy(this.value.target,q);this.offset.target=this.getOffsetsByRatios(q);this.callTargetCallback()},setTargetValueByOffset:function(r,s){var p=this.getRatiosByOffsets(r);var q=s?this.getLooseValue(p):this.getProperValue(p);this.groupCopy(this.value.target,q);this.offset.target=this.getOffsetsByRatios(q)},getLooseValue:function(q){var p=this.getProperValue(q);return[p[0]+((q[0]-p[0])/4),p[1]+((q[1]-p[1])/4)]},getProperValue:function(q){var p=this.groupClone(q);p[0]=Math.max(p[0],0);p[1]=Math.max(p[1],0);p[0]=Math.min(p[0],1);p[1]=Math.min(p[1],1);if((!this.dragging&&!this.tapping)||this.options.snap){if(this.options.steps>1){p=this.getClosestSteps(p)}}return p},getRatiosByOffsets:function(p){return[this.getRatioByOffset(p[0],this.bounds.availWidth,this.bounds.left),this.getRatioByOffset(p[1],this.bounds.availHeight,this.bounds.top)]},getRatioByOffset:function(r,p,q){return p?(r-q)/p:0},getOffsetsByRatios:function(p){return[this.getOffsetByRatio(p[0],this.bounds.availWidth,this.bounds.left),this.getOffsetByRatio(p[1],this.bounds.availHeight,this.bounds.top)]},getOffsetByRatio:function(q,p,r){return Math.round(q*p)+r},getStepNumber:function(p){return this.getClosestStep(p)*(this.options.steps-1)+1},getClosestSteps:function(p){return[this.getClosestStep(p[0]),this.getClosestStep(p[1])]},getClosestStep:function(s){var p=0;var r=1;for(var q=0;q<=this.options.steps-1;q++){if(Math.abs(this.stepRatios[q]-s)<r){r=Math.abs(this.stepRatios[q]-s);p=q}}return this.stepRatios[p]},groupCompare:function(q,p){return q[0]==p[0]&&q[1]==p[1]},groupCopy:function(q,p){q[0]=p[0];q[1]=p[1]},groupClone:function(p){return[p[0],p[1]]},draggingOnDisabledAxis:function(){return(!this.options.horizontal&&n.xDiff>n.yDiff)||(!this.options.vertical&&n.yDiff>n.xDiff)}};var i=function(q,p){return function(){return q.apply(p,arguments)}};var e=function(p,q,r){if(p.addEventListener){p.addEventListener(q,r,false)}else{if(p.attachEvent){p.attachEvent("on"+q,r)}}};var b=function(p,q,r){if(p.removeEventListener){p.removeEventListener(q,r,false)}else{if(p.detachEvent){p.detachEvent("on"+q,r)}}};var f=function(p){if(!p){p=window.event}if(p.preventDefault){p.preventDefault()}p.returnValue=false};var a=function(p){if(!p){p=window.event}if(p.stopPropagation){p.stopPropagation()}p.cancelBubble=true};var n={x:0,y:0,xDiff:0,yDiff:0,refresh:function(p){if(!p){p=window.event}if(p.type=="mousemove"){this.set(p)}else{if(p.touches){this.set(p.touches[0])}}},set:function(r){var q=this.x,p=this.y;if(r.clientX||r.clientY){this.x=r.clientX;this.y=r.clientY}else{if(r.pageX||r.pageY){this.x=r.pageX-document.body.scrollLeft-document.documentElement.scrollLeft;this.y=r.pageY-document.body.scrollTop-document.documentElement.scrollTop}}this.xDiff=Math.abs(this.x-q);this.yDiff=Math.abs(this.y-p)}};var c={get:function(q){var p={left:0,top:0};if(q.getBoundingClientRect!==undefined){p=q.getBoundingClientRect()}return[p.left,p.top]}};var d={transform:l("transform"),perspective:l("perspective"),backfaceVisibility:l("backfaceVisibility")};function l(s){var r="Webkit Moz ms O".split(" "),q=document.documentElement.style;if(q[s]!==undefined){return s}s=s.charAt(0).toUpperCase()+s.substr(1);for(var p=0;p<r.length;p++){if(q[r[p]+s]!==undefined){return r[p]+s}}}function o(p){if(d.backfaceVisibility&&d.perspective){p.style[d.perspective]="1000px";p.style[d.backfaceVisibility]="hidden"}}var m=["webkit","moz"];var h=window.requestAnimationFrame;var g=window.cancelAnimationFrame;for(var k=0;k<m.length&&!h;++k){h=window[m[k]+"RequestAnimationFrame"];g=window[m[k]+"CancelAnimationFrame"]||window[m[k]+"CancelRequestAnimationFrame"]}if(!h){h=function(p){return setTimeout(p,25)};g=clearTimeout}return j}));


/*
 * Unslider by @idiot (2.6 kb minified)
 */
(function(e,t){if(!e)return t;var n=function(){this.el=t;this.items=t;this.sizes=[];this.max=[0,0];this.current=0;this.interval=t;this.opts={speed:500,delay:3e3,complete:t,keys:!t,dots:t,fluid:t};var n=this;this.init=function(t,n){this.el=t;this.ul=t.children("ul");this.max=[t.outerWidth(),t.outerHeight()];this.items=this.ul.children("li").each(this.calculate);this.opts=e.extend(this.opts,n);this.setup();return this};this.calculate=function(t){var r=e(this),i=r.outerWidth(),s=r.outerHeight();n.sizes[t]=[i,s];if(i>n.max[0])n.max[0]=i;if(s>n.max[1])n.max[1]=s};this.setup=function(){this.el.css({overflow:"hidden",width:n.max[0],height:this.items.first().outerHeight()});this.ul.css({width:this.items.length*100+"%",position:"relative"});this.items.css("width",100/this.items.length+"%");if(this.opts.delay!==t){this.start();this.el.hover(this.stop,this.start)}this.opts.keys&&e(document).keydown(this.keys);this.opts.dots&&this.dots();if(this.opts.fluid){var r=function(){n.el.css("width",Math.min(Math.round(n.el.outerWidth()/n.el.parent().outerWidth()*100),100)+"%")};r();e(window).resize(r)}if(this.opts.arrows){this.el.parent().append('<p class="arrows"><span class="prev">â†</span><span class="next">â†’</span></p>').find(".arrows span").click(function(){e.isFunction(n[this.className])&&n[this.className]()})}if(e.event.swipe){this.el.on("swipeleft",n.prev).on("swiperight",n.next)}};this.move=function(t,r){if(!this.items.eq(t).length)t=0;if(t<0)t=this.items.length-1;var i=this.items.eq(t);var s={height:i.outerHeight()};var o=r?5:this.opts.speed;if(!this.ul.is(":animated")){n.el.find(".dot:eq("+t+")").addClass("active").siblings().removeClass("active");this.el.animate(s,o)&&this.ul.animate(e.extend({left:"-"+t+"00%"},s),o,function(i){n.current=t;e.isFunction(n.opts.complete)&&!r&&n.opts.complete(n.el)})}};this.start=function(){n.interval=setInterval(function(){n.move(n.current+1)},n.opts.delay)};this.stop=function(){n.interval=clearInterval(n.interval);return n};this.keys=function(t){var r=t.which;var i={37:n.prev,39:n.next,27:n.stop};if(e.isFunction(i[r])){i[r]()}};this.next=function(){return n.stop().move(n.current+1)};this.prev=function(){return n.stop().move(n.current-1)};this.dots=function(){var t='<ol class="dots">';e.each(this.items,function(e){t+='<li class="dot'+(e<1?" active":"")+'">'+(e+1)+"</li>"});t+="</ol>";this.el.addClass("has-dots").append(t).find(".dot").click(function(){n.move(e(this).index())})}};e.fn.unslider=function(t){var r=this.length;return this.each(function(i){var s=e(this);var u=(new n).init(s,t);s.data("unslider"+(r>1?"-"+(i+1):""),u)})}})(window.jQuery,false)


/*
 * FitText.js 1.2 (0.5 kb minified)
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Thu May 05 14:23:00 2011 -0600
 */
;(function(a){a.fn.fitText=function(d,b){var e=d||1,c=a.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},b);return this.each(function(){var f=a(this);var g=function(){f.css("font-size",Math.max(Math.min(f.width()/(e*10),parseFloat(c.maxFontSize)),parseFloat(c.minFontSize)))};g();a(window).on("resize.fittext orientationchange.fittext",g)})}})(jQuery);


// ------------------------------------------------------------
// DOCUMENT READY
// ------------------------------------------------------------

// This ready handler passes the jQuery alias in to avoid conflict with other libraries.

jQuery(document).ready(function($) {

console.log('========================');
console.log('Document ready');


// ------------------------------------------------------------
// GLOBAL VARIABLES
// ------------------------------------------------------------

var _window = $(window),
	$scroll_position_onload = $(document).scrollTop(),
	$body = $('body');


// ------------------------------------------------------------
// FancySelect
// ------------------------------------------------------------

$('.custom-select').fancySelect();


// ------------------------------------------------------------
// Menu - Toggle
// ------------------------------------------------------------

(function()
{

	console.log('====================');
	console.log('Enter mobile nav function');

	var nav_trigger 	= $('#nav-trigger'),
		nav_list 		= $('#primary-nav-list'),
		$mainNavOpenCN 	= 'open';

	nav_trigger.on('click', function(e){

		console.log('Nav trigger clicked');

		e.preventDefault();

		// if( e.target !== this ) { alert('Condition bizarre 1'); return; }
		if(_window.width() > 1100) { return; }
		
		nav_list
			.stop()
			.slideToggle(300,function(){
				if(nav_list.is(':visible')) { nav_trigger.addClass($mainNavOpenCN); }
				else { nav_trigger.removeClass($mainNavOpenCN); }
			});		
	});

	_window.resize(function(){
		if(_window.width() <= 1100)
		{
			if(nav_list.is(':visible'))
			{
				nav_list.hide();
				nav_trigger.removeClass($mainNavOpenCN);
			}
			return;
		}
		if(!nav_trigger.hasClass($mainNavOpenCN)) { nav_list.css('display', ''); } 
	});

})();


// ------------------------------------------------------------
// Ticket block
// ------------------------------------------------------------

// Launched only on medium screens
if($('.tickets')[0]) {
	if (_window.width() > 480) {
		fixDivOnLoad(_window.width()); 
		_window.scroll(function() {
			fixDivOnScroll(_window.width());
		});
		_window.resize(function() {
			fixDivOnResize(_window.width(), true);
		});
	}
}

function fixDivOnLoad(window_width_param)
{
	// By default, position is absolute.
	// Position is set to fixed through JS.

	console.log('====================');
	console.log('fixDiv() got called on load');

	var $ticket 					= $('.tickets'),
		$header_height 				= $('.overview-introduction').outerHeight(),
		$content_height 			= $('.overview-article').outerHeight(),

		$ticket_offset_top 			= $ticket.offset().top,
		$ticket_offset_right 		= (_window.width() - ($ticket.offset().left + $ticket.outerWidth())),
		$ticket_height 				= $ticket.outerHeight(),

		$initial_width,
		$percentage_width,

		$on_scroll_modifiers = [
			'js--scrolled-past-content',
			'js--viewing-content',
			'js--stick-at-the-end',
			'js--original-state'
		],
		$on_scroll_modifiers_string = $on_scroll_modifiers.join(' ');

	/*
	 * When the function gets called, define the width */

	if(window_width_param > 1333)
	{ // (1)	
		$initial_width = 30.6667;
		$percentage_width = ($initial_width / 100) * 1200 + 'px'; // (1)
		
		// (1) Because the wrapper has a max-width of 1200px
		// and a width of 90%
		// To know at which size the wrapper gets stuck to
		// 1200px :
		// 1200 = 90/100 * x so x = 1200*100/90 = 1333

		/*
		 * Get the right offset as percentage */

		$ticket_offset_right = ($ticket_offset_right / window_width_param) * 100 + '%';

	}


	/*
	 * Set position on load */
	
	if($scroll_position_onload > (($header_height + $content_height) - $ticket_height))
	{ // Case: browser or user has scrolled past the end of the content
		$ticket
			.removeClass($on_scroll_modifiers_string)
			.addClass('js--stick-at-the-end')
			.removeClass('ficksed');
	}
	else if($scroll_position_onload > ($ticket_offset_top - 100))
	{ // Case: browser or user is viewing the content, block must be fixed
		$ticket
			.removeClass($on_scroll_modifiers_string)
			.addClass('js--viewing-content')
			.addClass('ficksed');
		if(window_width_param > 1333)
		{
			$ticket.css({
				'right': $ticket_offset_right,
				'width': $percentage_width
			});
		}
	}
}

function fixDivOnScroll(window_width_param)
{
	console.log('====================');
	console.log('fixDiv() got called on scroll');

	var $ticket 					= $('.tickets'),
		$header_height 				= $('.overview-introduction').outerHeight(),
		$content_height 			= $('.overview-article').outerHeight(),

		$ticket_offset_top 			= $ticket.offset().top,
		$ticket_offset_right 		= (_window.width() - ($ticket.offset().left + $ticket.outerWidth())),
		$ticket_width 				= $ticket.outerWidth(),
		$ticket_height 				= $ticket.outerHeight(),

		$initial_width,
		$percentage_width,

		$parameters_obj				= {
			window_width: window_width_param
		}

		$now_fixed					= false,

		$wrapper_width				= 90 / 100,
		$previous_scroll_position	= 0,

		$scroll_position 			= $(this).scrollTop(),
		$on_scroll_modifiers 		=
		[
			'js--scrolled-past-content',
			'js--viewing-content',
			'js--stick-at-the-end',
			'js--original-state'
		],
		$on_scroll_modifiers_string = $on_scroll_modifiers.join(' ');

	/*
	 * Set the block to stick at the end of the content
	 * when scrolling past the article height */

	if($scroll_position > (($header_height + $content_height) - $ticket_height + 43))
	{ // 43 because margin-top: -43px; as default CSS
		console.log('Block must stick at the end');
		$ticket
			.removeClass($on_scroll_modifiers_string)
			.addClass('js--stick-at-the-end')
			.removeClass('ficksed');
		if($parameters_obj.window_width > 1333)
		{
			$ticket.css({
				'right': '',
				'width': ''
			});
		}
	}
	
	/*
	 * Fix the block while scrolling within the article */

	else if ($scroll_position > $header_height - 90)
	{
		console.log('Currently viewing, block must be fixed');
		$ticket
			.removeClass($on_scroll_modifiers_string)
			.addClass('js--viewing-content')
			.addClass('ficksed');
		if($parameters_obj.window_width > 1333)
		{
			console.log('...and width is 1333+');
			$ticket.css({
				'right': $ticket_offset_right,
				'right': ((($parameters_obj.window_width - 1200) / 2) / $parameters_obj.window_width) * 100 + '%',
				'width': (30.667 / 100) * 1200 + 'px'
			});
		}
	}
	
	/* 
	 * Back to default position when scrolling
	 * above the article height */

	else if (($scroll_position) < $header_height - 90)
	{
		console.log('Should bring the block back to its original position');
		$ticket
			.removeClass($on_scroll_modifiers_string)
			.addClass('js--original-state')
			.removeClass('ficksed');
		if($parameters_obj.window_width > 1333)
		{
			console.log('Window is 1333+');
			$ticket.css({
				'right': '',
				'width': ''
			});
		}
		else {
			console.log('Window is less than 1333');
		}
	}

	/*
	 * The following is not used anymore */

	if($scroll_position > $previous_scroll_position) {
		// Scrolling down
		// $now_absolute = false;
	} else {
		// Scrolling up
		// console.log('Scrolling up');
	}

	/*
	 * Update the last scroll position */

	$previous_scroll_position = $scroll_position;
}

function fixDivOnResize(window_width_param)
{
	console.log('====================');
	console.log('fixDiv() got called on resize');

	var $ticket 					= $('.tickets'),
		$now_fixed					= false,
		$wrapper_width				= 90 / 100;

	if($ticket.hasClass('js--viewing-content') && window_width_param > 1333)
	{ // Case: browser or user is viewing the content, block must be fixed
		console.log('fixDiv got called on resize, while viewing the content and the result width is >1333');
		$ticket.css({
			// 'right': ((window_width_param - 1200) / 2) + 'px', // in pixels
			'right': (((window_width_param - 1200) / 2) / window_width_param) * 100 + '%', // in percentage
			'width': (30.6667 / 100) * 1200 + 'px'
		});
	}
	else if($ticket.hasClass('js--viewing-content'))
	{
		$ticket.css({
			'right': '',
			'width': ''
		});
	}
}


// ------------------------------------------------------------
// Video autoplay when in viewport
// ------------------------------------------------------------

(function() {

	$.fn.isOnScreen = function() {

		var win = _window;

		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};
		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();

		var bounds = this.offset();
		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();

		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	};

	var videos = $('video');

	_window.scroll(function() {

		videos.each(function(i, elem) {
			if($(elem).isOnScreen() == true) {
				$(elem).get(0).play(); // See why: https://stackoverflow.com/a/4647069
			} else {
				$(elem).get(0).pause();
			}
		});
	});

})();


// ------------------------------------------------------------
// Dismiss anything
// ------------------------------------------------------------

$('.dismiss').click(function(e) {

	e.preventDefault();
	
	var $this 			= $(this),
		$target 		= $this.data('target'),
		$action_class 	= $this.data('action-class');

	console.log('===============================');
	console.log('Dismiss button clicked. Target:', $target, '— Action class:', $action_class);

	if($('.'+$target).hasClass('wide-open')) {
		$('.'+$target).removeClass('wide-open');
	}
	else {
		$('.'+$target).addClass($action_class);
	}

});


// ------------------------------------------------------------
// Position the map slider control
// ------------------------------------------------------------

// (function() {

// 	if(_window.width() > 1333) {
		
// 	}

// 	$('#demo-simple-slider').css({
// 		'left': 5 / (_window.width() - 1200) * 100 + '%'
// 	})

// })();

// ------------------------------------------------------------
// Map sidebar: view more pictures
// ------------------------------------------------------------

(function() {

	var $view_pictures	= $('#view-event-pictures'),
		$map_sidebar	= $('#map-sidebar');

	$view_pictures.click(function(e)
	{
		e.preventDefault();
		$map_sidebar.toggleClass('wide-open');
	});

})();


// ------------------------------------------------------------
// Google map
// ------------------------------------------------------------

(function() {
	if($('#map_canvas')[0]) {
	  var style = [
		{
			"featureType": "landscape.natural",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 100
				}
			]
		},
		{
			"featureType": "transit.station",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#ffc35e"
				}
			]
		},
		{
			"featureType": "water",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 100
				}
			]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 100
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": -75
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 97
				}
			]
		},
		{
			"featureType": "poi.park",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": -100
				}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 100
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "landscape.man_made",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 100
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 100
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": -100
				}
			]
		},
		{
			"featureType": "poi",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 100
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": -100
				}
			]
		},
		{
			"featureType": "transit.station",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": -22
				}
			]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"saturation": 1
				},
				{
					"lightness": -100
				}
			]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 100
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#e30513"
				},
				{
					"lightness": 14
				},
				{
					"weight": 1.4
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				  "color": "#e30513"
			  },
			  {
				  "lightness": 14
			  },
			  {
				  "weight": 1.4
			  }
			]
		},
		{
			"featureType": "administrative.locality",
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "administrative.locality",
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "on"
				}
			]
		}
	];

	// Init the Map 
	var map = new google.maps.Map(document.getElementById('map_canvas'), {
	  zoom: 12,
	  // center: new google.maps.LatLng(10, 10),
	  center:  new google.maps.LatLng(51.48184, 7.21624),
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  styles: style
	});

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', 'ruhr.svg', false);
	xmlhttp.send();


	var overlay = new SvgOverlay({
	  content: xmlhttp.responseText,
	  map: map
	});

	var svg = overlay.getSvg();

	svg.setAttribute('opacity', 1);
	var bounds = new google.maps.LatLngBounds();


	var markers = [
		  ['Castelluci - Bochum', 51.48184,7.21624],
		  ['Barney - Essen', 51.455643,7.011555],
		  ['Feldman - Dortmund', 51.51359,7.46530]
	 ];

	// Create our info window content   
	  var infoWindowContent = [
		['<div class="info_content">' +
		'<h3>Castelluci - Bochum</h3>' + 
		'</div>'],
		['<div class="info_content">' +
		'<h3>Barney - Essen</h3>' + 
		'</div>'],
		['<div class="info_content">' +
		'<h3>Feldman - Dortmund</h3>' 
		+ '</div>']
	];


   // InfoWindow Styling Here 
	   var infoWindow = new google.maps.InfoWindow(), marker, i;

		google.maps.event.addListener(infoWindow, 'domready', function() {
			 var l = $('#info_content').parent().parent().parent().parent();
			 for (var i = 0; i < l.length; i++) {
				 if($(l[i]).css('z-index') == 'auto') {
					 $(l[i]).css('text-align', 'center');
					 $(l[i]).css('font-size', '17px');
					 $(l[i]).css('cursor', 'pointer');
				 }
			 }
		 });

	// var infoWindow = new google.maps.InfoWindow(), marker, i;

	//
	// Add the markers and infowindows to the map
	// Source: http://stackoverflow.com/questions/21514388/google-maps-api-open-multiple-info-windows-by-default
	// ------------------------------------------

	for (var i = 0; i < markers.length; i++) {
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(markers[i][1], markers[i][2]), // Lat - Lon
			map: map
		});

		var icon = 'M1.7317647058823529';

		marker.setIcon({
		  anchor: new google.maps.Point(0.85, 0.85),
		  path: icon
		});

		var infowindow = new google.maps.InfoWindow({
		  content: markers[i][0], // Name
		  maxWidth: 160
		});
		infowindow.open(map, marker);
	}


	//
	// Click on info window
	// --------------------

	var info_window_target = $('#info_content');

	$(document).on('click', info_window_target, function()
	{
		$('#map-sidebar').toggleClass('off-canvas');
	});

	google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
	  infoWindow.open(map, marker);
	});
	infoWindow.open(map,marker);

	var img = document.getElementById('canvas');

	function drawing_map(){

	  var center = new google.maps.LatLng(0,0),
		// compute map offset
		projection = overlay.getProjection(),
		divPixel = projection.fromLatLngToDivPixel(center),
		containerPixel = projection.fromLatLngToContainerPixel(center),


		x = divPixel.x - containerPixel.x - left,
		y = divPixel.y - containerPixel.y - top,

		// create new svg container
		svg = overlay.getSvg().cloneNode(true),
		xml = document.implementation.createDocument(),
		div = document.createElement('div'),
		wrapper = xml.createElement('svg'),

		// get map dimension
		mapDiv = map.getDiv(),
		width = mapDiv.clientWidth,
		height = mapDiv.clientHeight,

		// set svg clipping
		viewBox = [x, y, width, height].join(' '),

		DOMURL = self.URL || self.webkitURL || self,
		blob, url;


	  wrapper.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	  wrapper.setAttribute('width', width);
	  wrapper.setAttribute('height', height);
	  wrapper.setAttribute('viewBox', viewBox);

	  wrapper.appendChild(svg);
	  div.appendChild(wrapper);

	  var icon = marker.getIcon(),
		path = xml.createElement('path'),
		point = projection.fromLatLngToDivPixel(marker.getPosition());

	  point.x -= icon.scale * icon.anchor.x + left;
	  point.y -= icon.scale * icon.anchor.y + top;

	  path.setAttribute('d', icon.path);
	  path.setAttribute('transform', 'translate(' + point.x + ',' + point.y + ') scale(' + icon.scale + ')');
	  path.setAttribute('fill', icon.fillColor);
	  path.setAttribute('stroke', icon.strokeColor);
	  path.setAttribute('fill-opacity', icon.fillOpacity);
	  path.setAttribute('stroke-opacity', icon.strokeOpacity);
	  path.setAttribute('stroke-width', icon.strokeWeight);
	  path.setAttribute('vector-effect', 'non-scaling-stroke');

	  wrapper.appendChild(path);


	  blob = new Blob([div.innerHTML], {
		type: 'image/svg+xml;charset=utf-8'
	  });

	  url = DOMURL.createObjectURL(blob);
	  console.log(url);

	  img.src = url;
	}
}
})();


// ------------------------------------------------------------
// Map: draggable slider
// ------------------------------------------------------------

// var dragger = new Dragdealer('demo-simple-slider', {
// 	right: 35,
// 	left: -5,
// 	callback: function(x, y) {
// 		console.log(x);
// 	}
// });


// ------------------------------------------------------------
// Map: Image slider
// ------------------------------------------------------------

var $map_sidebar_slider = $('#map-sidebar-slider');

$map_sidebar_slider.unslider(
{
	speed		: 500,
	delay		: 4000,
	keys		: true,
	dots 		: true,

});


// ------------------------------------------------------------
// Main navigation: search bar
// ------------------------------------------------------------

(function() {

	var $search_trigger = $('#search-trigger'),
		$search_bar		= $('#search-bar'),
		$main_nav		= $('#navigation'),
		$content 		= $('#content'),
		$search_field	= $('#search-field');

	$search_trigger.click(function()
	{
		console.log('========================');
		console.log('Search trigger clicked');
		$search_trigger.toggleClass('triggered');
		$main_nav.add($content).toggleClass('make-room');
		$search_bar.toggleClass('visible');
		($search_bar.hasClass('visible')) ? $search_field.focus() : $search_field.blur();
	});

})();


// ------------------------------------------------------------
// Responsive slider
// ------------------------------------------------------------

// Gets total amount of slides
var count 				= $(".overview__slide").length,
	$slides_container 	= $(".overview__slide-container"),
	$slides 			= $(".overview__slide"),
	n_interval_id,
	$slide_index		= 0;

console.log(count, 'slides');

//
// When clicking the NEXT button
// -----------------------------

$('.overview__controls .next').click(function(e)
{
	e.preventDefault();

	var $slide_width,
		$show,
		$target_slide_index = $slide_index +1,
		$target_slide = $slide_index +2;

	// 1 slide at once
	if (_window.width() < 480) {
		$slide_width = 100;
		$show = 'one';
	}
	// 2 slide at once
	else if (_window.width() <= 1024) {
		$slide_width = 50;
		$show = 'two';
	}
	// 3 slides at once
	else {
		$slide_width = 33.33;
		$show = 'three';
	}

	switch($show) {
		case ('one'):
			if($target_slide_index == count) // The last slide is visible
			{
				$slide_index = 0;
			}
			else {
				$slide_index++;
			}
			break;
		case ('two'):
			if($target_slide_index == count -1) // The last slide is visible
			{
				$slide_index = 0;
			}
			else {
				$slide_index++;
			}
			break;
		case ('three'): 
			if($target_slide_index == count -2) // The last slide is visible
			{
				$slide_index = 0;
			}
			else {
				$slide_index++;
			}
			break;
	}

	console.log('$target_slide_index is', $target_slide_index);

	$slides_container.css({
		marginLeft: $slide_index * -($slide_width) + '%'
	});
});

//
// When clicking the PREV button
// -----------------------------

$('.overview__controls .prev').click(function(e)
{
	e.preventDefault();

	var $slide_width,
		$show,
		$target_slide_index = $slide_index -1,
		$target_slide = $slide_index -2;
	
	// 1 slide at once
	if (_window.width() < 480) {
		$slide_width = 100;
		$show = 'one';
	}
	// 2 slide at once
	else if (_window.width() <= 1024) {
		$slide_width = 50;
		$show = 'two';
	}
	// 3 slides at once
	else {
		$slide_width = 33.33;
		$show = 'three';
	}

	switch($show) {
		case ('one'):
			if($target_slide_index < 0) // The first slide is visible
			{
				$slide_index = count -1;
				$target_slide_index = count -1;
			}
			else {
				$slide_index--;
			}
			break;
		case ('two'):
			if($target_slide_index < 0) // The first slide is visible
			{
				$slide_index = count -2;
				$target_slide_index = count -2;
			}
			else {
				$slide_index--;
			}
			break;
		case ('three'):
			if($target_slide_index < 0) // The first slide is visible
			{
				$slide_index = count -3;
				$target_slide_index = count -3;
			}
			else {
				$slide_index--;
			}
			break;
	}

	$slides_container.css({
		marginLeft: $target_slide_index * -($slide_width) + '%'
	});
});

//
// This function works for an automatic slide
// ------------------------------------------

function slideNext(current_slide, count_of_slides, container, width, slides_at_once) {

	// Declare a new variable to keep track of the index
	var current_slide_within_loop = current_slide; 

	// ...and pass it to setInterval() — see the end of setInterval()
	n_interval_id = setInterval(function() {

		// console.log('Within the loop, index is', current_slide_within_loop);
		// console.log('But outside the loop, index is', current_slide);
		
		container.css({
			marginLeft: current_slide_within_loop * -(width) + '%'
		});

		switch(slides_at_once) {
			case ('one'):
				if(current_slide_within_loop == count_of_slides -1) { // If the last slide is visible
					current_slide_within_loop = 0; // Reset the index;
				}
				else {
					(current_slide < count_of_slides -1) ? current_slide_within_loop++ : current_slide = 0;
				}
				break;
			case ('two'):
				if(current_slide_within_loop == count_of_slides -2) { // If the last slide is visible
					current_slide_within_loop = 0; // Reset the index;
				}
				else {
					(current_slide < count_of_slides -2) ? current_slide_within_loop++ : current_slide = 0;
				}
				break;
			case ('three'):
				if(current_slide_within_loop == count_of_slides -3) { // If the last slide is visible
					current_slide_within_loop = 0; // Reset the index;
				}
				else {
					(current_slide_within_loop < count_of_slides -3) ? current_slide_within_loop++ : current_slide = 0;
				}
		}
	}, 1000, current_slide_within_loop);
}


function responsiveSlides() {

	var current = 0,
		$slide_width,
		$show;

	$slide_index = 0; // Always reset this on resize

	// console.log('=================');
	// console.log('Enter responsiveSlides');

	/*
	 * Reset the slider to zero */

	$slides_container.css('marginLeft', 0);

	/*
	 * Decide how many slides to show at once */

	// 1 slide at once
	if (_window.width() < 480) {
		$slide_width = 100;
		$show = 'one';
	}
	// 2 slide at once
	else if (_window.width() <= 1024) {
		$slide_width = 50;
		$show = 'two';
	}
	// 3 slides at once
	else {
		$slide_width = 33.33;
		$show = 'three';
	}

	// console.log('Must show', $show, 'slides at once');
	// console.log('Slides are', $slide_width, '% wide');

	/*
	 * Set the width of the container */

	$slides_container.css("width", (count * $slide_width) + '%');

	/*
	 * Set the width of the slides */

	$slides.css({
		'width': 100/count + '%'
	});

	/*
	 * Slide! */

	// slideNext(current, count, $slides_container, $slide_width, $show);

}

responsiveSlides();

_window.resize($.debounce(300, function() {
	// console.log('Resize detected');
	// console.log('Before clear', n_interval_id);
	clearInterval(n_interval_id);
	// console.log('After clear', n_interval_id);
	responsiveSlides();
}));


// ------------------------------------------------------------
// Buy tickets
// ------------------------------------------------------------


(function() {

	var body_hidden = $('body'),
		container = $('#st-container'),
		trigger = $('#toggle-tickets'),
		sidebar = $('#st-tickets'),
		index = 0,
		messg = [
			"close", 
			"buy tickets",
			"close"
		];

	trigger.click(function(e)
	{
		console.log('Trigger clicked');
		e.preventDefault();
		container.toggleClass('st-tickets-open');
		body_hidden.toggleClass('hidden');
		$(this).toggleClass('on');
	});

	trigger.on("click", function() {
		$(this).text(function(index, text){
			index = $.inArray(text, messg);
			return messg[++index % messg.length];
		});
	});



})();

var  scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop(),
	 $header_height	 = $('.overview-introduction').outerHeight(),
	 $content_height = $('.overview-article') + $('.overview-introduction').outerHeight();
	 console.log($content_height);

$(window).scroll(function () { 
  if ($(window).scrollTop() > $header_height) {
	$('.sidebar-reveal').css({'display' : 'block'});
	}
   else if ($(window).scrollTop() < $header_height) {
	$('.sidebar-reveal').css({'display' : 'none'});
   }
   else if ($(window).scrollTop() < $content_height) {
	$('.sidebar-reveal').css({'display' : 'none'});
   }
	//$(window).unbind('scroll');
});




// ------------------------------------------------------------
// SVG Animation
// ------------------------------------------------------------

if(document.getElementById("switch-to-map")) {

	var arrow = document.getElementById("switch-to-map"),
		animationStart = document.getElementById("animation-start"),
		animationReturn = document.getElementById("animation-return");

	// Animation Start on Mouseover 
	arrow.addEventListener('mouseover', function() {
		arrow.classList.add("expend");
		animationStart.beginElement();
	}, false);

	// Animation Return to basic State on Mouseout
	arrow.addEventListener('mouseout', function() {
		arrow.classList.remove("expend");
		animationReturn.beginElement();
		console.log(animationReturn);
	}, false);

}


// ------------------------------------------------------------
// Home page: random top and bottom margin on blocks
// ------------------------------------------------------------

(function() {

	//
	// Definitions
	// -----------

	var $blocks 				= $('.home-news__block:not(.home-news__block--featured)'),
		hasBeenDoneForDesktop	= false;

	function noMargin()
	{
		$blocks.css(
		{
			marginTop: '',
			marginBottom: ''
		});
		hasBeenDoneForDesktop = false;
	}

	function randomMargin()
	{
		$blocks.each(function(i, elem)
		{
			$(elem).css(
			{
				marginTop: Math.floor(Math.random() * 150) + 20, // [50-200]
				marginBottom: Math.floor(Math.random() * 80) + 30 // [50-80]
			});
		});
		hasBeenDoneForDesktop = true;
	}

	//
	// Executions
	// ----------

	if(_window.width() > 780)
	{
		randomMargin();
	}
	else
	{
		noMargin();
	}

	// On resize
	_window.resize(function()
	{
		if(_window.width() < 780)
		{
			noMargin();
		}
		else if (hasBeenDoneForDesktop == false) // This flag helps to trigger the function only once
		{
			randomMargin();
		}
	});

})();


// ------------------------------------------------------------
// Home page: Masonry
// ------------------------------------------------------------

(function()
{
	//
	// Definitions
	// -----------

	var $container 	= $('.home-news');

	$container.each(function(i, elem)
	{
		new Masonry(elem,
				{
					// Options
					itemSelector: '.home-news__block',
					columnWidth: '.home-news__block--poster',
					transitionDuration: 0
				});
	});
})();


// ------------------------------------------------------------
// Flip card
// ------------------------------------------------------------

// (function() {

// 	var $flip_card_parent = $('.home-news__block--flip'),
// 		$fill_card_parent = $('.home-news__block--fill');

// 	$flip_card_parent.click(function(e)
// 	{
// 		e.stopPropagation();
// 		$flip_card_parent.children('.flip-card')
// 			.stop()
// 			.toggleClass('flip-card--visible');
// 	});

// 	$fill_card_parent.click(function(e)
// 	{
// 		$fill_card_parent.children('.fill-card.home-news__back')
// 			.stop()
// 			.toggleClass('fill-card--filled');
// 	});

// })();


// ------------------------------------------------------------
// End jQuery
// ------------------------------------------------------------

});