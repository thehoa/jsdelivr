/*! formstone v0.7.9 [navigation.js] 2015-07-24 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){w=a("html, body")}function d(b){b.handleGuid=u.handle+b.guid,b.isToggle="toggle"===b.type,b.open=!1,b.isToggle&&(b.gravity="");var c=u.base,d=[c,b.type].join("-"),e=b.gravity?[d,b.gravity].join("-"):"",f=[b.rawGuid,b.customClass].join(" ");b.handle=this.data(s+"-handle"),b.content=this.data(s+"-content"),b.handleClasses=[u.handle,u.handle.replace(c,d),e?u.handle.replace(c,e):"",b.handleGuid,f].join(" "),b.navClasses=[u.nav.replace(c,d),e?u.nav.replace(c,e):"",f].join(" "),b.contentClasses=[u.content.replace(c,d),e?u.content.replace(c,e):"",f].join(" "),b.$nav=this.addClass(b.navClasses),b.$handle=a(b.handle).addClass(b.handleClasses),b.$content=a(b.content).addClass(b.contentClasses),b.$animate=a().add(b.$nav).add(b.$content),p(b),b.$handle.attr("data-swap-target",b.dotGuid).attr("data-swap-linked","."+b.handleGuid).attr("data-swap-group",u.base).on("activate.swap"+b.dotGuid,b,j).on("deactivate.swap"+b.dotGuid,b,k).on("enable.swap"+b.dotGuid,b,l).on("disable.swap"+b.dotGuid,b,m).fsSwap({maxWidth:b.maxWidth,classes:{target:b.dotGuid,enabled:t.enabled,active:t.open,raw:{target:b.rawGuid,enabled:u.enabled,active:u.open}}})}function e(a){a.$content.removeClass(a.contentClasses).off(v.namespace),a.$handle.removeAttr("data-swap-target").removeData("swap-target").removeAttr("data-swap-linked").removeData("swap-linked").removeClass(a.handleClasses).off(a.dotGuid).text(a.originalLabel).fsSwap("destroy"),q(a),o(a),this.removeClass(a.navClasses).off(v.namespace)}function f(a){a.$handle.fsSwap("activate")}function g(a){a.$handle.fsSwap("deactivate")}function h(a){a.$handle.fsSwap("enable")}function i(a){a.$handle.fsSwap("disable")}function j(a){if(!a.originalEvent){var b=a.data;b.open||(b.$el.trigger(v.open),b.$content.addClass(u.open).one(v.clickTouchStart,function(){g(b)}),b.label&&b.$handle.text(b.labels.open),n(b),b.open=!0)}}function k(a){if(!a.originalEvent){var b=a.data;b.open&&(b.$el.trigger(v.close),b.$content.removeClass(u.open).off(v.namespace),b.label&&b.$handle.text(b.labels.closed),o(b),b.open=!1)}}function l(a){var b=a.data;b.$content.addClass(u.enabled),setTimeout(function(){b.$animate.addClass(u.animated)},0),b.label&&b.$handle.text(b.labels.closed)}function m(a){var b=a.data;b.$content.removeClass(u.enabled,u.animated),b.$animate.removeClass(u.animated),q(b),o(b)}function n(a){a.isToggle||w.addClass(u.lock)}function o(a){a.isToggle||w.removeClass(u.lock)}function p(a){if(a.label)if(a.$handle.length>1){a.originalLabel=[];for(var b=0,c=a.$handle.length;c>b;b++)a.originalLabel[b]=a.$handle.eq(b).text()}else a.originalLabel=a.$handle.text()}function q(a){if(a.label)if(a.$handle.length>1)for(var b=0,c=a.$handle.length;c>b;b++)a.$handle.eq(b).text(a.originalLabel[b]);else a.$handle.text(a.originalLabel)}var r=b.Plugin("navigation",{widget:!0,defaults:{customClass:"",gravity:"left",label:!0,labels:{closed:"Menu",open:"Close"},maxWidth:"980px",type:"toggle"},classes:["handle","nav","content","animated","enabled","open","toggle","push","reveal","overlay","left","right","lock"],events:{tap:"tap",open:"open",close:"close"},methods:{_setup:c,_construct:d,_destruct:e,open:f,close:g,enable:h,disable:i}}),s=r.namespace,t=r.classes,u=t.raw,v=r.events,w=(r.functions,null)}(jQuery,Formstone);