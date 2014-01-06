(function(){var a;a=function(){var a,b,c;return b=[],a=function(b,d){var e;return b?"function"===a.toType(b)?a(document).ready(b):(e=a.getDOMObject(b,d),c(e,b)):c()},c=function(a,d){return a=a||b,a.__proto__=c.prototype,a.selector=d||"",a},a.extend=function(a){return Array.prototype.slice.call(arguments,1).forEach(function(b){var c,d;d=[];for(c in b)d.push(a[c]=b[c]);return d}),a},c.prototype=a.fn={},a}(),window.Quo=a,"$$"in window||(window.$$=a)}).call(this),function(){!function(a){var b,c,d,e,f,g,h,i,j,k,l;return b={TYPE:"GET",MIME:"json"},d={script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},c=0,a.ajaxSettings={type:b.TYPE,async:!0,success:{},error:{},context:null,dataType:b.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:!1,timeout:0},a.ajax=function(c){var d,h,k,m;if(k=a.mix(a.ajaxSettings,c),k.type===b.TYPE?k.url+=a.serializeParameters(k.data,"?"):k.data=a.serializeParameters(k.data),e(k.url))return a.jsonp(k);m=k.xhr(),m.onreadystatechange=function(){return 4===m.readyState?(clearTimeout(d),j(m,k)):void 0},m.open(k.type,k.url,k.async),i(m,k),k.timeout>0&&(d=setTimeout(function(){return l(m,k)},k.timeout));try{m.send(k.data)}catch(n){h=n,m=h,g("Resource not found",m,k)}return k.async?m:f(m,k)},a.jsonp=function(b){var d,e,f,g;return b.async?(e="jsonp"+ ++c,f=document.createElement("script"),g={abort:function(){return a(f).remove(),e in window?window[e]={}:void 0}},d=void 0,window[e]=function(c){return clearTimeout(d),a(f).remove(),delete window[e],k(c,g,b)},f.src=b.url.replace(RegExp("=\\?"),"="+e),a("head").append(f),b.timeout>0&&(d=setTimeout(function(){return l(g,b)},b.timeout)),g):console.error("QuoJS.ajax: Unable to make jsonp synchronous call.")},a.get=function(b,c,d,e){return a.ajax({url:b,data:c,success:d,dataType:e})},a.post=function(a,b,c,d){return h("POST",a,b,c,d)},a.put=function(a,b,c,d){return h("PUT",a,b,c,d)},a["delete"]=function(a,b,c,d){return h("DELETE",a,b,c,d)},a.json=function(c,d,e){return a.ajax({url:c,data:d,success:e,dataType:b.MIME})},a.serializeParameters=function(a,b){var c,d;null==b&&(b=""),d=b;for(c in a)a.hasOwnProperty(c)&&(d!==b&&(d+="&"),d+=""+encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return d===b?"":d},j=function(a,b){a.status>=200&&a.status<300||0===a.status?b.async&&k(f(a,b),a,b):g("QuoJS.ajax: Unsuccesful request",a,b)},k=function(a,b,c){c.success.call(c.context,a,b)},g=function(a,b,c){c.error.call(c.context,a,b,c)},i=function(a,b){var c;b.contentType&&(b.headers["Content-Type"]=b.contentType),b.dataType&&(b.headers.Accept=d[b.dataType]);for(c in b.headers)a.setRequestHeader(c,b.headers[c])},l=function(a,b){a.onreadystatechange={},a.abort(),g("QuoJS.ajax: Timeout exceeded",a,b)},h=function(b,c,d,e,f){return a.ajax({type:b,url:c,data:d,success:e,dataType:f,contentType:"application/x-www-form-urlencoded"})},f=function(a,c){var d,e;if(e=a.responseText)if(c.dataType===b.MIME)try{e=JSON.parse(e)}catch(f){d=f,e=d,g("QuoJS.ajax: Parse Error",a,c)}else"xml"===c.dataType&&(e=a.responseXML);return e},e=function(a){return RegExp("=\\?").test(a)}}(Quo)}.call(this),function(){!function(a){var b,c,d,e,f,g,h,i;return b=[],e=Object.prototype,d=/^\s*<(\w+|!)[^>]*>/,f=document.createElement("table"),g=document.createElement("tr"),c={tr:document.createElement("tbody"),tbody:f,thead:f,tfoot:f,td:g,th:g,"*":document.createElement("div")},a.toType=function(a){return e.toString.call(a).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},a.isOwnProperty=function(a,b){return e.hasOwnProperty.call(a,b)},a.getDOMObject=function(b,c){var e,f,g;return e=null,f=[1,9,11],g=a.toType(b),"array"===g?e=h(b):"string"===g&&d.test(b)?(e=a.fragment(b.trim(),RegExp.$1),b=null):"string"===g?(e=a.query(document,b),c&&(e=1===e.length?a.query(e[0],c):a.map(function(){return a.query(e,c)}))):(f.indexOf(b.nodeType)>=0||b===window)&&(e=[b],b=null),e},a.map=function(b,c){var d,e,f,g;if(g=[],d=void 0,e=void 0,"array"===a.toType(b))for(d=0;d<b.length;)f=c(b[d],d),null!=f&&g.push(f),d++;else for(e in b)f=c(b[e],e),null!=f&&g.push(f);return i(g)},a.each=function(b,c){var d,e;if(d=void 0,e=void 0,"array"===a.toType(b))for(d=0;d<b.length;){if(c.call(b[d],d,b[d])===!1)return b;d++}else for(e in b)if(c.call(b[e],e,b[e])===!1)return b;return b},a.mix=function(){var b,c,d,e,f;for(d={},b=0,e=arguments.length;e>b;){c=arguments[b];for(f in c)a.isOwnProperty(c,f)&&void 0!==c[f]&&(d[f]=c[f]);b++}return d},a.fragment=function(b,d){var e;return null==d&&(d="*"),d in c||(d="*"),e=c[d],e.innerHTML=""+b,a.each(Array.prototype.slice.call(e.childNodes),function(){return e.removeChild(this)})},a.fn.map=function(b){return a.map(this,function(a,c){return b.call(a,c,a)})},a.fn.instance=function(a){return this.map(function(){return this[a]})},a.fn.filter=function(b){return a([].filter.call(this,function(c){return c.parentNode&&a.query(c.parentNode,b).indexOf(c)>=0}))},a.fn.forEach=b.forEach,a.fn.indexOf=b.indexOf,h=function(a){return a.filter(function(a){return void 0!==a&&null!==a})},i=function(a){return a.length>0?[].concat.apply([],a):a}}(Quo)}.call(this),function(){!function(a){return a.fn.attr=function(b,c){return 0===this.length,"string"===a.toType(b)&&void 0===c?this[0].getAttribute(b):this.each(function(){return this.setAttribute(b,c)})},a.fn.removeAttr=function(a){return this.each(function(){return this.removeAttribute(a)})},a.fn.data=function(a,b){return this.attr("data-"+a,b)},a.fn.removeData=function(a){return this.removeAttr("data-"+a)},a.fn.val=function(b){return"string"===a.toType(b)?this.each(function(){return this.value=b}):this.length>0?this[0].value:null},a.fn.show=function(){return this.style("display","block")},a.fn.hide=function(){return this.style("display","none")},a.fn.height=function(){var a;return a=this.offset(),a.height},a.fn.width=function(){var a;return a=this.offset(),a.width},a.fn.offset=function(){var a;return a=this[0].getBoundingClientRect(),{left:a.left+window.pageXOffset,top:a.top+window.pageYOffset,width:a.width,height:a.height}},a.fn.remove=function(){return this.each(function(){return null!=this.parentNode?this.parentNode.removeChild(this):void 0})}}(Quo)}.call(this),function(){!function(a){var b,c,d,e,f,g,h;return d=null,b=/WebKit\/([\d.]+)/,c={Android:/(Android)\s+([\d.]+)/,ipad:/(iPad).*OS\s([\d_]+)/,iphone:/(iPhone\sOS)\s([\d_]+)/,Blackberry:/(BlackBerry|BB10|Playbook).*Version\/([\d.]+)/,FirefoxOS:/(Mozilla).*Mobile[^\/]*\/([\d\.]*)/,webOS:/(webOS|hpwOS)[\s\/]([\d.]+)/},a.isMobile=function(){return d=d||f(),d.isMobile&&"firefoxOS"!==d.os.name},a.environment=function(){return d=d||f()},a.isOnline=function(){return navigator.onLine},f=function(){var a,b;return b=navigator.userAgent,a={},a.browser=e(b),a.os=g(b),a.isMobile=!!a.os,a.screen=h(),a},e=function(a){var c;return c=a.match(b),c?c[0]:a},g=function(a){var b,d,e;b=null;for(d in c)if(e=a.match(c[d])){b={name:"iphone"===d||"ipad"===d?"ios":d,version:e[2].replace("_",".")};break}return b},h=function(){return{width:window.innerWidth,height:window.innerHeight}}}(Quo)}.call(this),function(){!function(a){var b,c,d,e,f,g,h,i,j,k,l,m;return b=1,e={},d={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},c={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",touch:"click",doubletap:"dblclick",orientationchange:"resize"},f=/complete|loaded|interactive/,a.fn.on=function(b,c,d){return"undefined"===c||"function"===a.toType(c)?this.bind(b,c):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return"undefined"===c||"function"===a.toType(c)?this.unbind(b,c):this.undelegate(c,b,d)},a.fn.ready=function(b){return f.test(document.readyState)?b(a):a.fn.addEvent(document,"DOMContentLoaded",function(){return b(a)})},a.Event=function(a,b){var c,d;if(c=document.createEvent("Events"),c.initEvent(a,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null),b)for(d in b)c[d]=b[d];return c},a.fn.bind=function(a,b){return this.each(function(){l(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){m(this,a,b)})},a.fn.delegate=function(b,c,d){return this.each(function(e,f){l(f,c,d,b,function(c){return function(d){var e,h;return h=a(d.target).closest(b,f).get(0),h?(e=a.extend(g(d),{currentTarget:h,liveFired:f}),c.apply(h,[e].concat([].slice.call(arguments,1)))):void 0}})})},a.fn.undelegate=function(a,b,c){return this.each(function(){m(this,b,c,a)})},a.fn.trigger=function(b,c,d){return"string"===a.toType(b)&&(b=a.Event(b,c)),null!=d&&(b.originalEvent=d),this.each(function(){this.dispatchEvent(b)})},a.fn.addEvent=function(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c},a.fn.removeEvent=function(a,b,c){return a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent("on"+b,c):a["on"+b]=null},l=function(b,c,d,f,g){var j,l,m,n;return c=i(c),m=k(b),l=e[m]||(e[m]=[]),j=g&&g(d,c),n={event:c,callback:d,selector:f,proxy:h(j,d,b),delegate:j,index:l.length},l.push(n),a.fn.addEvent(b,n.event,n.proxy)},m=function(b,c,d,f){var g;return c=i(c),g=k(b),j(g,c,d,f).forEach(function(c){return delete e[g][c.index],a.fn.removeEvent(b,c.event,c.proxy)})},k=function(a){return a._id||(a._id=b++)},i=function(b){var d;return d=a.isMobile()?b:c[b],d||b},h=function(a,b,c){var d;return b=a||b,d=function(a){var d;return d=b.apply(c,[a].concat(a.data)),d===!1&&a.preventDefault(),d}},j=function(a,b,c,d){return(e[a]||[]).filter(function(a){return!(!a||b&&a.event!==b||c&&a.callback!==c||d&&a.selector!==d)})},g=function(b){var c;return c=a.extend({originalEvent:b},b),a.each(d,function(a,d){return c[a]=function(){return this[d]=function(){return!0},b[a].apply(b,arguments)},c[d]=function(){return!1}}),c}}(Quo)}.call(this),function(){!function($$){var CURRENT_TOUCH,EVENT,FIRST_TOUCH,GESTURE,GESTURES,HOLD_DELAY,TAPS,TOUCH_TIMEOUT,_angle,_capturePinch,_captureRotation,_cleanGesture,_distance,_fingersPosition,_getTouches,_hold,_isSwipe,_listenTouches,_onTouchEnd,_onTouchMove,_onTouchStart,_parentIfText,_swipeDirection,_trigger;return TAPS=null,EVENT=void 0,GESTURE={},FIRST_TOUCH=[],CURRENT_TOUCH=[],TOUCH_TIMEOUT=void 0,HOLD_DELAY=650,GESTURES=["touch","tap","singleTap","doubleTap","hold","swipe","swiping","swipeLeft","swipeRight","swipeUp","swipeDown","rotate","rotating","rotateLeft","rotateRight","pinch","pinching","pinchIn","pinchOut","drag","dragLeft","dragRight","dragUp","dragDown"],GESTURES.forEach(function(a){return $$.fn[a]=function(b){var c;return c="touch"===a?"touchend":a,$$(document.body).delegate(this.selector,c,b)},this}),$$(document).ready(function(){return _listenTouches()}),_listenTouches=function(){var a;return a=$$(document.body),a.bind("touchstart",_onTouchStart),a.bind("touchmove",_onTouchMove),a.bind("touchend",_onTouchEnd),a.bind("touchcancel",_cleanGesture)},_onTouchStart=function(a){var b,c,d,e;return EVENT=a,d=Date.now(),b=d-(GESTURE.last||d),TOUCH_TIMEOUT&&clearTimeout(TOUCH_TIMEOUT),e=_getTouches(a),c=e.length,FIRST_TOUCH=_fingersPosition(e,c),GESTURE.el=$$(_parentIfText(e[0].target)),GESTURE.fingers=c,GESTURE.last=d,GESTURE.taps||(GESTURE.taps=0),GESTURE.taps++,1===c?(c>=1&&(GESTURE.gap=b>0&&250>=b),setTimeout(_hold,HOLD_DELAY)):2===c?(GESTURE.initial_angle=parseInt(_angle(FIRST_TOUCH),10),GESTURE.initial_distance=parseInt(_distance(FIRST_TOUCH),10),GESTURE.angle_difference=0,GESTURE.distance_difference=0):void 0},_onTouchMove=function(a){var b,c,d;return EVENT=a,GESTURE.el&&(d=_getTouches(a),b=d.length,b===GESTURE.fingers?(CURRENT_TOUCH=_fingersPosition(d,b),c=_isSwipe(a),c&&(GESTURE.prevSwipe=!0),(c||GESTURE.prevSwipe===!0)&&_trigger("swiping"),2===b&&(_captureRotation(),_capturePinch(),a.preventDefault())):_cleanGesture()),!0},_isSwipe=function(){var a,b,c;return a=!1,CURRENT_TOUCH[0]&&(b=Math.abs(FIRST_TOUCH[0].x-CURRENT_TOUCH[0].x)>30,c=Math.abs(FIRST_TOUCH[0].y-CURRENT_TOUCH[0].y)>30,a=GESTURE.el&&(b||c)),a},_onTouchEnd=function(a){var b,c,d,e,f;return EVENT=a,_trigger("touch"),1===GESTURE.fingers?2===GESTURE.taps&&GESTURE.gap?(_trigger("doubleTap"),_cleanGesture()):_isSwipe()||GESTURE.prevSwipe?(_trigger("swipe"),f=_swipeDirection(FIRST_TOUCH[0].x,CURRENT_TOUCH[0].x,FIRST_TOUCH[0].y,CURRENT_TOUCH[0].y),_trigger("swipe"+f),_cleanGesture()):(_trigger("tap"),1===GESTURE.taps&&(TOUCH_TIMEOUT=setTimeout(function(){return _trigger("singleTap"),_cleanGesture()},100))):(b=!1,0!==GESTURE.angle_difference&&(_trigger("rotate",{angle:GESTURE.angle_difference}),e=GESTURE.angle_difference>0?"rotateRight":"rotateLeft",_trigger(e,{angle:GESTURE.angle_difference}),b=!0),0!==GESTURE.distance_difference&&(_trigger("pinch",{angle:GESTURE.distance_difference}),d=GESTURE.distance_difference>0?"pinchOut":"pinchIn",_trigger(d,{distance:GESTURE.distance_difference}),b=!0),!b&&CURRENT_TOUCH[0]&&(Math.abs(FIRST_TOUCH[0].x-CURRENT_TOUCH[0].x)>10||Math.abs(FIRST_TOUCH[0].y-CURRENT_TOUCH[0].y)>10)&&(_trigger("drag"),c=_swipeDirection(FIRST_TOUCH[0].x,CURRENT_TOUCH[0].x,FIRST_TOUCH[0].y,CURRENT_TOUCH[0].y),_trigger("drag"+c)),_cleanGesture()),EVENT=void 0},_fingersPosition=function(a,b){var c,d;for(d=[],c=0,a=a[0].targetTouches?a[0].targetTouches:a;b>c;)d.push({x:a[c].pageX,y:a[c].pageY}),c++;return d},_captureRotation=function(){var angle,diff,i,symbol;if(angle=parseInt(_angle(CURRENT_TOUCH),10),diff=parseInt(GESTURE.initial_angle-angle,10),Math.abs(diff)>20||0!==GESTURE.angle_difference){for(i=0,symbol=GESTURE.angle_difference<0?"-":"+";Math.abs(diff-GESTURE.angle_difference)>90&&i++<10;)eval("diff "+symbol+"= 180;");return GESTURE.angle_difference=parseInt(diff,10),_trigger("rotating",{angle:GESTURE.angle_difference})}},_capturePinch=function(){var a,b;return b=parseInt(_distance(CURRENT_TOUCH),10),a=GESTURE.initial_distance-b,Math.abs(a)>10?(GESTURE.distance_difference=a,_trigger("pinching",{distance:a})):void 0},_trigger=function(a,b){return GESTURE.el?(b=b||{},CURRENT_TOUCH[0]&&(b.iniTouch=GESTURE.fingers>1?FIRST_TOUCH:FIRST_TOUCH[0],b.currentTouch=GESTURE.fingers>1?CURRENT_TOUCH:CURRENT_TOUCH[0]),GESTURE.el.trigger(a,b,EVENT)):void 0},_cleanGesture=function(){return FIRST_TOUCH=[],CURRENT_TOUCH=[],GESTURE={},clearTimeout(TOUCH_TIMEOUT)},_angle=function(a){var b,c,d;return b=a[0],c=a[1],d=Math.atan(-1*(c.y-b.y)/(c.x-b.x))*(180/Math.PI),0>d?d+180:d},_distance=function(a){var b,c;return b=a[0],c=a[1],-1*Math.sqrt((c.x-b.x)*(c.x-b.x)+(c.y-b.y)*(c.y-b.y))},_getTouches=function(a){return $$.isMobile()?a.touches:[a]},_parentIfText=function(a){return"tagName"in a?a:a.parentNode},_swipeDirection=function(a,b,c,d){var e,f;return e=Math.abs(a-b),f=Math.abs(c-d),e>=f?a-b>0?"Left":"Right":c-d>0?"Up":"Down"},_hold=function(){return GESTURE.last&&Date.now()-GESTURE.last>=HOLD_DELAY?(_trigger("hold"),GESTURE.taps=0):void 0}}(Quo)}.call(this),function(){!function(a){return a.fn.text=function(b){return b||"number"===a.toType(b)?this.each(function(){return this.textContent=b}):this[0].textContent},a.fn.html=function(b){var c;return c=a.toType(b),b||"number"===c||"string"===c?this.each(function(){var a,d,e,f;if("string"===c||"number"===c)return this.innerHTML=b;if(this.innerHTML=null,"array"===c){for(f=[],d=0,e=b.length;e>d;d++)a=b[d],f.push(this.appendChild(a));return f}return this.appendChild(b)}):this[0].innerHTML},a.fn.append=function(b){var c;return c=a.toType(b),this.each(function(){var a=this;return"string"===c?this.insertAdjacentHTML("beforeend",b):"array"===c?b.each(function(b,c){return a.appendChild(c)}):this.appendChild(b)})},a.fn.prepend=function(b){var c;return c=a.toType(b),this.each(function(){var a=this;return"string"===c?this.insertAdjacentHTML("afterbegin",b):"array"===c?b.each(function(b,c){return a.insertBefore(c,a.firstChild)}):this.insertBefore(b,this.firstChild)})},a.fn.replaceWith=function(b){var c;return c=a.toType(b),this.each(function(){var a=this;return this.parentNode?"string"===c?this.insertAdjacentHTML("beforeBegin",b):"array"===c?b.each(function(b,c){return a.parentNode.insertBefore(c,a)}):this.parentNode.insertBefore(b,this):void 0}),this.remove()},a.fn.empty=function(){return this.each(function(){return this.innerHTML=null})}}(Quo)}.call(this),function(){!function(a){var b,c,d,e,f,g;return d="parentNode",b=/^\.([\w-]+)$/,c=/^#[\w\d-]+$/,e=/^[\w-]+$/,a.query=function(a,d){var f;return d=d.trim(),b.test(d)?f=a.getElementsByClassName(d.replace(".","")):e.test(d)?f=a.getElementsByTagName(d):c.test(d)&&a===document?(f=a.getElementById(d.replace("#","")),f||(f=[])):f=a.querySelectorAll(d),f.nodeType?[f]:Array.prototype.slice.call(f)},a.fn.find=function(b){var c;return c=1===this.length?Quo.query(this[0],b):this.map(function(){return Quo.query(this,b)}),a(c)},a.fn.parent=function(a){var b;return b=a?g(this):this.instance(d),f(b,a)},a.fn.siblings=function(a){var b;return b=this.map(function(a,b){return Array.prototype.slice.call(b.parentNode.children).filter(function(a){return a!==b})}),f(b,a)},a.fn.children=function(a){var b;return b=this.map(function(){return Array.prototype.slice.call(this.children)}),f(b,a)},a.fn.get=function(a){return void 0===a?this:this[a]},a.fn.first=function(){return a(this[0])},a.fn.last=function(){return a(this[this.length-1])},a.fn.closest=function(b,c){var d,e;for(e=this[0],d=a(b),d.length||(e=null);e&&d.indexOf(e)<0;)e=e!==c&&e!==document&&e.parentNode;return a(e)},a.fn.each=function(a){return this.forEach(function(b,c){return a.call(b,c,b)}),this},g=function(b){var c;for(c=[];b.length>0;)b=a.map(b,function(a){return(a=a.parentNode)&&a!==document&&c.indexOf(a)<0?(c.push(a),a):void 0});return c},f=function(b,c){return void 0===c?a(b):a(b).filter(c)}}(Quo)}.call(this),function(){!function(a){var b,c,d;return b=["-webkit-","-moz-","-ms-","-o-",""],a.fn.addClass=function(a){return this.each(function(){return d(a,this.className)?void 0:(this.className+=" "+a,this.className=this.className.trim())})},a.fn.removeClass=function(a){return this.each(function(){return a?d(a,this.className)?this.className=this.className.replace(a," ").replace(/\s+/g," ").trim():void 0:this.className=""})},a.fn.toggleClass=function(a){return this.each(function(){return d(a,this.className)?this.className=this.className.replace(a," "):(this.className+=" "+a,this.className=this.className.trim())})},a.fn.hasClass=function(a){return d(a,this[0].className)},a.fn.style=function(a,b){return b?this.each(function(){return this.style[a]=b}):this[0].style[a]||c(this[0],a)},a.fn.css=function(a,b){return this.style(a,b)},a.fn.vendor=function(a,c){var d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(this.style(""+d+a,c));return g},d=function(a,b){var c;return c=b.split(/\s+/g),c.indexOf(a)>=0},c=function(a,b){return document.defaultView.getComputedStyle(a,"")[b]}}(Quo)}.call(this);