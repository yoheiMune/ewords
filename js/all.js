/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});

/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }

        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));
/**
 * @fileOverview
 * Copyright (c) 2013 Aaron Gloege
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * jQuery Tap Plugin
 * Using the tap event, this plugin will properly simulate a click event
 * in touch browsers using touch events, and on non-touch browsers,
 * click will automatically be used instead.
 *
 * @author Aaron Gloege
 * @version 1.1.0
 */
(function(document, $) {
    'use strict';

    /**
     * Event namespace
     *
     * @type String
     * @final
     */
    var HELPER_NAMESPACE = '._tap';

    /**
     * Event namespace
     *
     * @type String
     * @final
     */
    var HELPER_ACTIVE_NAMESPACE = '._tapActive';

    /**
     * Event name
     *
     * @type String
     * @final
     */
    var EVENT_NAME = 'tap';

    /**
     * Max distance between touchstart and touchend to be considered a tap
     *
     * @type Number
     * @final
     */
    var MAX_TAP_DELTA = 40;

    /**
     * Max duration between touchstart and touchend to be considered a tap
     *
     * @type Number
     * @final
     */
    var MAX_TAP_TIME = 400;

    /**
     * Event variables to copy to touches
     *
     * @type String[]
     * @final
     */
    var EVENT_VARIABLES = 'clientX clientY screenX screenY pageX pageY'.split(' ');

    /**
     * jQuery body object
     *
     * @type jQuery
     */
    var $BODY;

    /**
     * Last canceled tap event
     *
     * @type jQuery.Event
     * @private
     */
    var _lastTap;

    /**
     * Object for tracking current touch
     *
     * @type Object
     * @static
     */
    var TOUCH_VALUES = {

        /**
         * Number of touches currently active on touchstart
         *
         * @property count
         * @type Number
         */
        count: 0,

        /**
         * touchstart/mousedown jQuery.Event object
         *
         * @property event
         * @type jQuery.Event
         */
        event: 0

    };

    /**
     * Create a new event from the original event
     * Copy over EVENT_VARIABLES from the original jQuery.Event
     *
     * @param {String} type
     * @param {jQuery.Event} e
     * @return {jQuery.Event}
     * @private
     */
    var _createEvent = function(type, e) {
        var originalEvent = e.originalEvent;
        var event = $.Event(originalEvent);

        event.type = type;

        var i = 0;
        var length = EVENT_VARIABLES.length;

        for (; i < length; i++) {
            event[EVENT_VARIABLES[i]] = e[EVENT_VARIABLES[i]];
        }

        return event;
    };

    /**
     * Determine if a valid tap event
     *
     * @param {jQuery.Event} e
     * @return {Boolean}
     * @private
     */
    var _isTap = function(e) {
        if (e.isTrigger) {
            return false;
        }

        var startEvent = TOUCH_VALUES.event;
        var xDelta = Math.abs(e.pageX - startEvent.pageX);
        var yDelta = Math.abs(e.pageY - startEvent.pageY);
        var delta = Math.max(xDelta, yDelta);

        return (
            e.timeStamp - startEvent.timeStamp < MAX_TAP_TIME &&
            delta < MAX_TAP_DELTA &&
            (!startEvent.touches || TOUCH_VALUES.count === 1) &&
            Tap.isTracking
        );
    };

    /**
     * Normalize touch events with data from first touch in the jQuery.Event
     *
     * This could be done using the `jQuery.fixHook` api, but to avoid conflicts
     * with other libraries that might already have applied a fix hook, this
     * approach is used instead.
     *
     * @param {jQuery.Event} event
     * @private
     */
    var _normalizeEvent = function(event) {
        if (event.type.indexOf('touch') === 0) {
            event.touches = event.originalEvent.changedTouches;
            var touch = event.touches[0];

            var i = 0;
            var length = EVENT_VARIABLES.length;

            for (; i < length; i++) {
                event[EVENT_VARIABLES[i]] = touch[EVENT_VARIABLES[i]];
            }
        }
    };

    /**
     * Tap object that will track touch events and
     * trigger the tap event when necessary
     *
     * @class Tap
     * @static
     */
    var Tap = {

        /**
         * Flag to determine if touch events are currently enabled
         *
         * @property isEnabled
         * @type Boolean
         */
        isEnabled: false,

        /**
         * Are we currently tracking a tap event?
         *
         * @property isTracking
         * @type Boolean
         */
        isTracking: false,

        /**
         * Enable touch event listeners
         *
         * @method enable
         */
        enable: function() {
            if (Tap.isEnabled) {
                return;
            }

            Tap.isEnabled = true;

            // Set body element
            $BODY = $(document.body)
                .on('touchstart' + HELPER_NAMESPACE, Tap.onStart)
                .on('mousedown' + HELPER_NAMESPACE, Tap.onStart)
                .on('click' + HELPER_NAMESPACE, Tap.onClick);
        },

        /**
         * Disable touch event listeners
         *
         * @method disable
         */
        disable: function() {
            if (!Tap.isEnabled) {
                return;
            }

            Tap.isEnabled = false;

            // unbind all events with namespace
            $BODY.off(HELPER_NAMESPACE);
        },

        /**
         * Store touch start values and target
         *
         * @method onTouchStart
         * @param {jQuery.Event} e
         */
        onStart: function(e) {
            if (e.isTrigger) {
                return;
            }

            _normalizeEvent(e);

            if (e.touches) {
                TOUCH_VALUES.count = e.touches.length;
            }

            if (Tap.isTracking) {
                return;
            }

            Tap.isTracking = true;

            TOUCH_VALUES.event = e;

            if (e.touches) {
                $BODY
                    .on('touchend' + HELPER_NAMESPACE + HELPER_ACTIVE_NAMESPACE, Tap.onEnd)
                    .on('touchcancel' + HELPER_NAMESPACE + HELPER_ACTIVE_NAMESPACE, Tap.onCancel);
            } else {
                $BODY.on('mouseup' + HELPER_NAMESPACE + HELPER_ACTIVE_NAMESPACE, Tap.onEnd);
            }

            // expand.
            $(e.target).addClass('on');
        },

        /**
         * If touch has not been canceled, create a
         * tap event and trigger it on the target element
         *
         * @method onTouchEnd
         * @param {jQuery.Event} e
         */
        onEnd: function(e) {
            var event;

            if (e.isTrigger) {
                return;
            }

            _normalizeEvent(e);

            if (_isTap(e)) {
                event = _createEvent(EVENT_NAME, e);
                _lastTap = event;
                $(TOUCH_VALUES.event.target).trigger(event);
                e.preventDefault();
            }

            // Cancel active tap tracking
            Tap.onCancel(e);

            // Manually trigger a click for touch events since `e.preventDefault()` cancels the default click event.
            // And since we have the power - don't trigger click if tap had `preventDefault` called
            if (event && !event.isDefaultPrevented() && e.touches) {
                TOUCH_VALUES.event.target.click();
            }

            // expand.
            $(e.target).removeClass('on');
        },

        /**
         * Cancel tap and remove event listeners for active tap tracking
         *
         * @method onTouchCancel
         * @param {jQuery.Event} e
         */
        onCancel: function(e) {
            if (e && e.type === 'touchcancel') {
                e.preventDefault();
            }

            Tap.isTracking = false;

            $BODY.off(HELPER_ACTIVE_NAMESPACE);
        },

        /**
         * If tap was canceled, cancel click event
         *
         * @method onClick
         * @param {jQuery.Event} e
         * @return {void|Boolean}
         */
        onClick: function(e) {
            if (
                !e.isTrigger &&
                _lastTap &&
                _lastTap.isDefaultPrevented() &&
                _lastTap.target === e.target &&
                _lastTap.pageX === e.pageX &&
                _lastTap.pageY === e.pageY &&
                e.timeStamp - _lastTap.timeStamp < MAX_TAP_TIME
            ) {
                _lastTap = null;
                return false;
            }
        }

    };

    // Enable tab when document is ready
    $(document).ready(Tap.enable);

}(document, jQuery));
/*! JsRender v1.0.0-beta: http://github.com/BorisMoore/jsrender and http://jsviews.com/jsviews
informal pre V1.0 commit counter: 51 */
(function(n,t,i){"use strict";function pt(n){return n}function pi(n){return n}function wt(n){e._dbgMode=n;lt=n?"Error: #index in nested view: use #getIndex()":"";nt("dbg",ui.dbg=ht.dbg=n?pi:pt)}function bt(n){return{getTgt:n,map:function(t){var i=this,r;i.src!==t&&(i.src&&i.unmap(),typeof t=="object"&&(r=n.apply(i,arguments),i.src=t,i.tgt=r))}}}function ut(n,t){t&&t.onError&&t.onError(n)===!1||(this.name="JsRender Error",this.message=n||"JsRender error")}function u(n,t){var i;n=n||{};for(i in t)n[i]=t[i];return n}function kt(n,t,i){return(!v.rTag||n)&&(p=n?n.charAt(0):p,w=n?n.charAt(1):w,o=t?t.charAt(0):o,l=t?t.charAt(1):l,k=i||k,n="\\"+p+"(\\"+k+")?\\"+w,t="\\"+o+"\\"+l,y="(?:(?:(\\w+(?=[\\/\\s\\"+o+"]))|(?:(\\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\\*)))\\s*((?:[^\\"+o+"]|\\"+o+"(?!\\"+l+"))*?)",v.rTag=y+")",y=new RegExp(n+y+"(\\/)?|(?:\\/(\\w+)))"+t,"g"),ct=new RegExp("<.*>|([^\\\\]|^)[{}]|"+n+".*"+t)),[p,w,o,l,k]}function wi(n,t){t||(t=n,n=i);var e,f,o,u,r=this,s=!t||t==="root";if(n){if(u=r.type===t?r:i,!u)if(e=r.views,r._.useKey){for(f in e)if(u=e[f].get(n,t))break}else for(f=0,o=e.length;!u&&f<o;f++)u=e[f].get(n,t)}else if(s)while(r.parent.parent)u=r=r.parent;else while(r&&!u)u=r.type===t?r:i,r=r.parent;return u}function dt(){var n=this.get("item");return n?n.index:i}function gt(){return this.index}function bi(t){var f,e=this,o=e.linkCtx,r=(e.ctx||{})[t];return r===i&&o&&o.ctx&&(r=o.ctx[t]),r===i&&(r=ui[t]),r&&(typeof r!="function"||r._wrp||(f=function(){return r.apply(!this||this===n?e:this,arguments)},f._wrp=1,u(f,r))),f||r}function ki(n,t,u){var h,f,e,o=+u===u&&u,s=t.linkCtx;return o&&(u=(o=t.tmpl.bnds[o-1])(t.data,t,r)),e=u.args[0],(n||o)&&(f=s&&s.tag||{_:{inline:!s,bnd:o},tagName:n+":",flow:!0,_is:"tag"},s&&(s.tag=f,f.linkCtx=f.linkCtx||s,u.ctx=c(u.ctx,s.view.ctx)),f.tagCtx=u,u.view=t,f.ctx=u.ctx||{},delete u.ctx,t._.tag=f,n=n!=="true"&&n,n&&((h=t.getRsc("converters",n))||a("Unknown converter: {{"+n+":"))&&(f.depends=h.depends,e=h.apply(f,u.args)),e=e!=i?e:"",e=o&&t._.onRender?t._.onRender(e,t,o):e,t._.tag=i),e}function di(n,t){for(var f,e,u=this;f===i&&u;)e=u.tmpl[n],f=e&&e[t],u=u.parent;return f||r[n][t]}function gi(n,t,f,e,o){var et,h,at,ot,it,v,st,w,l,rt,nt,vt,b,ct,lt,g,y,k="",ut=+e===e&&e,p=t.linkCtx||0,tt=t.ctx,yt=f||t.tmpl,pt=t._;for(n._is==="tag"&&(h=n,n=h.tagName),ut&&(e=(vt=yt.bnds[ut-1])(t.data,t,r)),st=e.length,h=h||p.tag,v=0;v<st;v++)l=e[v],nt=l.tmpl,nt=l.content=nt&&yt.tmpls[nt-1],f=l.props.tmpl,v||f&&h||(b=t.getRsc("tags",n)||a("Unknown tag: {{"+n+"}}")),f=f||(h?h:b).template||nt,f=""+f===f?t.getRsc("templates",f)||s(f):f,u(l,{tmpl:f,render:ft,index:v,view:t,ctx:c(l.ctx,tt)}),h||(b._ctr?(h=new b._ctr,ct=!!h.init,h.attr=h.attr||b.attr||i):h={render:b.render},h._={inline:!p},p&&(p.attr=h.attr=p.attr||h.attr,p.tag=h,h.linkCtx=p),(h._.bnd=vt||p.fn)?h._.arrVws={}:h.dataBoundOnly&&a("{^{"+n+"}} tag must be data-bound"),h.tagName=n,h.parent=it=tt&&tt.tag,h._is="tag",h._def=b),l.tag=h,h.map&&h.tagCtxs&&(l.map=h.tagCtxs[v].map),h.flow||(rt=l.ctx=l.ctx||{},at=h.parents=rt.parentTags=tt&&c(rt.parentTags,tt.parentTags)||{},it&&(at[it.tagName]=it),rt.tag=h);for(h.tagCtxs=e,pt.tag=h,h.rendering={},v=0;v<st;v++)l=h.tagCtx=e[v],y=l.args,(lt=l.props.map||h).map&&(y.length||!v||l.props.map)&&(y.length||(y=[t.data]),g=l.map=u(l.map||{unmap:lt.unmap},l.props),g.src!==y[0]&&(g.src&&g.unmap(),lt.map.apply(g,y)),y=[g.tgt]),h.ctx=l.ctx,!v&&ct&&(h.init(l,p,h.ctx),l=h.tagCtx,ct=i),w=i,et=h.render,(et=h.render)&&(w=et.apply(h,y)),w=w!==i?w:l.tmpl&&l.render(y[0],i,!0)||(o?i:""),k=k?k+(w||""):w;return delete h.rendering,h.tagCtx=h.tagCtxs[0],h.ctx=h.tagCtx.ctx,h._.inline&&(ot=h.attr)&&ot!==d&&(k=ot==="text"?ht.html(k):""),ut&&t._.onRender?t._.onRender(k,t,ut):k}function g(n,t,i,r,u,f,e,o){var a,h,c,v=t==="array",l={key:0,useKey:v?0:1,id:""+yi++,onRender:o,bnds:{}},s={data:r,tmpl:u,content:e,views:v?[]:{},parent:i,type:t,get:wi,getIndex:gt,getRsc:di,hlp:bi,_:l,_is:"view"};return i?(a=i.views,h=i._,h.useKey?(a[l.key="_"+h.useKey++]=s,s.index=lt,s.getIndex=dt,c=h.tag,l.bnd=v&&(!c||!!c._.bnd&&c)):a.splice(l.key=s.index=f,0,s),s.ctx=n||i.ctx):s.ctx=n,s}function nr(n){var t,i,r,u,f;for(t in b)if(u=b[t],(f=u.compile)&&(i=n[t+"s"]))for(r in i)i[r]=f(r,i[r],n,t,u)}function tr(n,t,i){var u,r;return typeof t=="function"?t={depends:t.depends,render:t}:((r=t.template)&&(t.template=""+r===r?s[r]||s(r):r),t.init!==!1&&(u=t._ctr=function(){},(u.prototype=t).constructor=u)),i&&(t._parentTmpl=i),t}function ni(r,u,f,e,o,h){function v(i){if(""+i===i||i.nodeType>0){try{a=i.nodeType>0?i:!ct.test(i)&&t&&t(n.document).find(i)[0]}catch(u){}return a&&(i=a.getAttribute(yt),r=r||i,i=s[i],i||(r=r||"_"+vi++,a.setAttribute(yt,r),i=s[r]=ni(r,a.innerHTML,f,e,o,h))),i}}var l,a;return u=u||"",l=v(u),h=h||(u.markup?u:{}),h.tmplName=r,f&&(h._parentTmpl=f),!l&&u.markup&&(l=v(u.markup))&&l.fn&&(l.debug!==u.debug||l.allowCode!==u.allowCode)&&(l=l.markup),l!==i?(r&&!f&&(rt[r]=function(){return u.render.apply(u,arguments)}),l.fn||u.fn?l.fn&&(u=r&&r!==l.tmplName?c(h,l):l):(u=ti(l,h),et(l.replace(si,"\\$&"),u)),nr(h),u):void 0}function ti(n,t){var i,o=e.wrapMap||{},r=u({markup:n,tmpls:[],links:{},tags:{},bnds:[],_is:"template",render:ft},t);return t.htmlTag||(i=li.exec(n),r.htmlTag=i?i[1].toLowerCase():""),i=o[r.htmlTag],i&&i!==o.div&&(r.markup=f.trim(r.markup)),r}function ir(n,t){function u(e,o,s){var l,h,a,c;if(e&&""+e!==e&&!e.nodeType&&!e.markup){for(a in e)u(a,e[a],o);return r}return o===i&&(o=e,e=i),e&&""+e!==e&&(s=o,o=e,e=i),c=s?s[f]=s[f]||{}:u,h=t.compile,(l=v.onBeforeStoreItem)&&(h=l(c,e,o,h)||h),e?o===null?delete c[e]:c[e]=h?o=h(e,o,s,n,t):o:o=h(i,o),h&&o&&(o._is=n),(l=v.onStoreItem)&&l(c,e,o,h),o}var f=n+"s";r[f]=u;b[n]=t}function ft(n,t,u,e,o,h){var w,ft,tt,y,it,rt,ut,b,p,et,k,ot,l,v=this,st=!v.attr||v.attr===d,nt="";if(o===!0&&(ut=!0,o=0),v.tag?(b=v,v=v.tag,et=v._,ot=v.tagName,l=b.tmpl,t=c(t,v.ctx),p=b.content,b.props.link===!1&&(t=t||{},t.link=!1),e=e||b.view,n=n===i?e:n):l=v.jquery&&(v[0]||a('Unknown template: "'+v.selector+'"'))||v,l&&(!e&&n&&n._is==="view"&&(e=n),e&&(p=p||e.content,h=h||e._.onRender,n===e&&(n=e.data,u=!0),t=c(t,e.ctx)),e&&e.data!==i||((t=t||{}).root=n),l.fn||(l=s[l]||s(l)),l)){if(h=(t&&t.link)!==!1&&st&&h,k=h,h===!0&&(k=i,h=e._.onRender),t=l.helpers?c(l.helpers,t):t,f.isArray(n)&&!u)for(y=ut?e:o!==i&&e||g(t,"array",e,n,l,o,p,h),w=0,ft=n.length;w<ft;w++)tt=n[w],it=g(t,"item",y,tt,l,(o||0)+w,p,h),rt=l.fn(tt,it,r),nt+=y._.onRender?y._.onRender(rt,it):rt;else y=ut?e:g(t,ot||"data",e,n,l,o,p,h),et&&!v.flow&&(y.tag=v),nt+=l.fn(n,y,r);return k?k(nt,y):nt}return""}function a(n){throw new v.Error(n);}function h(n){a("Syntax error\n"+n)}function et(n,t,i,r){function a(t){t-=f;t&&s.push(n.substr(f,t).replace(it,"\\n"))}function c(t){t&&h('Unmatched or missing tag: "{{/'+t+'}}" in template:\n'+n)}function v(e,v,y,w,b,k,g,nt,tt,rt,ut,ft){k&&(b=":",w=d);rt=rt||i;var vt,ht,ct=v&&[],st="",et="",lt="",at=!rt&&!b&&!g;y=y||b;a(ft);f=ft+e.length;nt?p&&s.push(["*","\n"+tt.replace(oi,"$1")+"\n"]):y?(y==="else"&&(ci.test(tt)&&h('for "{{else if expr}}" use "{{else expr}}"'),ct=u[6],u[7]=n.substring(u[7],ft),u=o.pop(),s=u[3],at=!0),tt&&(tt=tt.replace(it," "),st=ot(tt,ct,t).replace(hi,function(n,t,i){return t?lt+=i+",":et+=i+",",""})),et=et.slice(0,-1),st=st.slice(0,-1),vt=et&&et.indexOf("noerror:true")+1&&et||"",l=[y,w||!!r||"",st,at&&[],'params:"'+tt+'",props:{'+et+"}"+(lt?",ctx:{"+lt.slice(0,-1)+"}":""),vt,ct||0],s.push(l),at&&(o.push(u),u=l,u[7]=f)):ut&&(ht=u[0],c(ut!==ht&&ht!=="else"&&ut),u[7]=n.substring(u[7],ft),u=o.pop());c(!u&&ut);s=u[3]}var l,p=t&&t.allowCode,e=[],f=0,o=[],s=e,u=[,,,e];return c(o[0]&&o[0][3].pop()[0]),n.replace(y,v),a(n.length),(f=e[e.length-1])&&c(""+f!==f&&+f[7]===f[7]&&f[0]),ii(e,i?n:t,i)}function ii(n,i,r){var l,f,o,a,v,p,ht,ct,lt,at,et,w,s,ot,y,tt,b,rt,vt,k,yt,pt,st,ut,g,c=0,u="",nt="",ft={},wt=n.length;for(""+i===i?(y=r?'data-link="'+i.replace(it," ").slice(1,-1)+'"':i,i=0):(y=i.tmplName||"unnamed",i.allowCode&&(ft.allowCode=!0),i.debug&&(ft.debug=!0),w=i.bnds,ot=i.tmpls),l=0;l<wt;l++)if(f=n[l],""+f===f)u+='\nret+="'+f+'";';else if(o=f[0],o==="*")u+=""+f[1];else{if(a=f[1],v=f[2],rt=f[3],p=f[4],nt=f[5],vt=f[7],(pt=o==="else")||(c=0,w&&(s=f[6])&&(c=w.push(s))),(st=o===":")?(a&&(o=a===d?">":a+o),nt&&(ut="prm"+l,nt="try{var "+ut+"=["+v+"][0];}catch(e){"+ut+'="";}\n',v=ut)):(rt&&(tt=ti(vt,ft),tt.tmplName=y+"/"+o,ii(rt,tt),ot.push(tt)),pt||(b=o,yt=u,u=""),k=n[l+1],k=k&&k[0]==="else"),p+=",args:["+v+"]}",st&&s||a&&o!==">"){if(g=new Function("data,view,j,u"," // "+y+" "+c+" "+o+"\n"+nt+"return {"+p+";"),g.paths=s,g._ctxs=o,r)return g;et=1}if(u+=st?"\n"+(s?"":nt)+(r?"return ":"ret+=")+(et?(et=0,at=!0,'c("'+a+'",view,'+(s?(w[c-1]=g,c):"{"+p)+");"):o===">"?(ct=!0,"h("+v+");"):(lt=!0,"(v="+v+")!="+(r?"=":"")+'u?v:"";')):(ht=!0,"{view:view,tmpl:"+(rt?ot.length:"0")+","+p+","),b&&!k){if(u="["+u.slice(0,-1)+"]",(r||s)&&(u=new Function("data,view,j,u"," // "+y+" "+c+" "+b+"\nreturn "+u+";"),s&&((w[c-1]=u).paths=s),u._ctxs=o,r))return u;u=yt+'\nret+=t("'+b+'",view,this,'+(c||u)+");";s=0;b=0}}u="// "+y+"\nvar j=j||"+(t?"jQuery.":"js")+"views"+(lt?",v":"")+(ht?",t=j._tag":"")+(at?",c=j._cnvt":"")+(ct?",h=j.converters.html":"")+(r?";\n":',ret="";\n')+(e.tryCatch?"try{\n":"")+(ft.debug?"debugger;":"")+u+(r?"\n":"\nreturn ret;\n")+(e.tryCatch?"\n}catch(e){return j._err(e);}":"");try{u=new Function("data,view,j,u",u)}catch(bt){h("Compiled template code:\n\n"+u,bt)}return i&&(i.fn=u),u}function ot(n,t,i){function b(b,k,d,g,nt,tt,it,rt,ut,ft,st,ht,ct,lt,at,vt,yt,pt,wt,bt){function dt(n,i,r,f,e,o,h,l){if(r&&(t&&(u==="linkTo"&&(s=t._jsvto=t._jsvto||[],s.push(nt)),(!u||c)&&t.push(nt.slice(i.length))),r!==".")){var a=(f?'view.hlp("'+f+'")':e?"view":"data")+(l?(o?"."+o:f?"":e?"":"."+r)+(h||""):(l=f?"":e?o||"":r,""));return a=a+(l?"."+l:""),i+(a.slice(0,9)==="view.data"?a.slice(5):a)}return n}var kt;if(tt=tt||"",d=d||k||ht,nt=nt||ut,ft=ft||yt||"",!it||e||f)return t&&vt&&!e&&!f&&(!u||c||s)&&(kt=v[r],bt.length-1>wt-kt&&(kt=bt.slice(kt,wt+1),vt=w+":"+kt+o,vt=y[vt]=y[vt]||et(p+vt+l,i,!0),vt.paths||ot(kt,vt.paths=[],i),(s||t).push({_jsvOb:vt}))),e?(e=!ct,e?b:'"'):f?(f=!lt,f?b:'"'):(d?(r++,v[r]=wt++,d):"")+(pt?r?"":u?(u=c=s=!1,"\b"):",":rt?(r&&h(n),u=nt,c=g,"\b"+nt+":"):nt?nt.split("^").join(".").replace(fi,dt)+(ft?(a[++r]=!0,nt.charAt(0)!=="."&&(v[r]=wt),ft):tt):tt?tt:at?(a[r--]=!1,at)+(ft?(a[++r]=!0,ft):""):st?(a[r]||h(n),","):k?"":(e=ct,f=lt,'"'));h(n)}var u,s,c,y=i.links,a={},v={0:-1},r=0,f=!1,e=!1;return(n+" ").replace(/\)\^/g,").").replace(ei,b)}function c(n,t){return n&&n!==t?t?u(u({},t),n):n:t&&u({},t)}function ri(n){return vt[n]||(vt[n]="&#"+n.charCodeAt(0)+";")}function rr(n){var i,t,r=[];if(typeof n=="object")for(i in n)t=n[i],t&&t.toJSON&&!t.toJSON()||typeof t!="function"&&r.push({key:i,prop:n[i]});return r}if((!t||!t.views)&&!n.jsviews){var f,tt,y,ct,lt,p="{",w="{",o="}",l="}",k="^",fi=/^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,ei=/(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*\.|\s*\^|\s*$)|[)\]])([([]?))|(\s+)/g,it=/[ \t]*(\r\n|\n|\r)/g,oi=/\\(['"])/g,si=/['"\\]/g,hi=/\x08(~)?([^\x08]+)\x08/g,ci=/^if\s/,li=/<(\w+)[>\s]/,at=/[\x00`><"'&]/g,ai=at,vi=0,yi=0,vt={"&":"&amp;","<":"&lt;",">":"&gt;","\x00":"&#0;","'":"&#39;",'"':"&#34;","`":"&#96;"},d="html",yt="data-jsv-tmpl",rt={},b={template:{compile:ni},tag:{compile:tr},helper:{},converter:{}},r={jsviews:"v1.0.0-beta",render:rt,settings:function(n){u(e,n);wt(e._dbgMode);e.jsv&&e.jsv()},sub:{View:g,Error:ut,tmplFn:et,parse:ot,extend:u,error:a,syntaxError:h,DataMap:bt},_cnvt:ki,_tag:gi,_err:function(n){return e._dbgMode?"Error: "+(n.message||n)+". ":""}};(ut.prototype=new Error).constructor=ut;dt.depends=function(){return[this.get("item"),"index"]};gt.depends=function(){return["index"]};for(tt in b)ir(tt,b[tt]);var st,s=r.templates,ht=r.converters,ui=r.helpers,nt=r.tags,v=r.sub,e=r.settings;t?(f=t,f.fn.render=ft,(st=f.observable)&&(u(v,st.sub),delete st.sub)):(f=n.jsviews={},f.isArray=Array&&Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"});f.render=rt;f.views=r;f.templates=s=r.templates;e({debugMode:wt,delimiters:kt,_dbgMode:!0,tryCatch:!0});nt({"else":function(){},"if":{render:function(n){var t=this;return t.rendering.done||!n&&(arguments.length||!t.tagCtx.index)?"":(t.rendering.done=!0,t.selected=t.tagCtx.index,t.tagCtx.render())},onUpdate:function(n,t,i){for(var r,f,u=0;(r=this.tagCtxs[u])&&r.args.length;u++)if(r=r.args[0],f=!r!=!i[u].args[0],!!r||f)return f;return!1},flow:!0},"for":{render:function(n){var t=this,r=t.tagCtx,u="",e=0;return arguments.length||(n=r.view.data),t.rendering.done||(n!==i&&(u+=r.render(n),e+=f.isArray(n)?n.length:1),(t.rendering.done=e)&&(t.selected=r.index)),u},flow:!0},include:{flow:!0},"*":{render:pt,flow:!0}});nt({props:u(u({},nt["for"]),bt(rr))});ht({html:function(n){return n!=i?String(n).replace(ai,ri):""},attr:function(n){return n!=i?String(n).replace(at,ri):n===null?n:""},url:function(n){return n!=i?encodeURI(String(n)):n===null?n:""}});kt()}})(this,this.jQuery);

//
// グローバル変数
//
var
	ew = window.ew = window.ew || {},
	min = Math.min,
	max = Math.max;

// 基本機能
(function () {

	// namespace.
	window.ew = window.ew || {};


	// short name.
	var
		emptyFuncion = function () {};


	window.ew = {

		// 定数
		ITEM_STATUS: {
			NONE: 0,
			ENGLISH_DONE: 1,
			JAPANESE_DONE: 2,
			BOTH_DONE: 3
		},


		// 表示リスト
		list: [],

		// タップ判定
		hasTapEvent: ('ontouchstart' in window),
		EVENT: {
			TOUCH_START: (ew.hasTapEvent ? 'touchstart' : 'mousedown'),
			TOUCH_MOVE: (ew.hasTapEvent ? 'touchmove' : 'mousemove'),
			TOUCH_END: (ew.hasTapEvent ? 'touchend' : 'mouseup'),
		},

		// 保存機能
		save: function (data, callback) {

			ew.syncManager.addTask({
				type: 'itemAdd',
				url: './api/item/add.php',
				method: 'post',
				data: data
			});
			callback && callback();

		},

		// 日々の状況を最新化する
		refreshDailyActivity: function () {
			$.ajax({
				url: './api/user_daily_action/list.php',
				dataType: 'json',
				success: function (activities) {
					var $list = $('<div/>');
					activities.forEach(function (activity) {
						var yyyymmdd = activity.yyyymmdd;
						var json = JSON.parse(activity.json);
						var $div = $('<div/>');
						$div.append('<span>' + yyyymmdd + '</span>');
						$div.append('<span class="pl20">登録:</span>' + (json.insCount || 0) + '<span>回</span>');
						$div.append('<span class="pl20">英語OK:</span>' + (json.enDoneCount || 0) + '<span>回</span>');
						$div.append('<span class="pl20">日本語OK:</span>' + (json.jpDoneCount || 0) + '<span>回</span>');
						$list.append($div);
					});
					$('#dailyActionList').html($list);
				}
			});
		},


		// ダイアログを開く
		showDialog: function (data) {
			$('#blackout').removeClass('hidden').css('height', $(document).height() + 'px');
			$('#confirmDialog').removeClass('hidden type1 type2 type3').addClass('type' + data.type);
			$('#confirmDialog [data-type="english"]').html(data.english);
			$('#confirmDialog [data-type="japanese"]').html(data.japanese);
		},

		// ダイアログを閉じる
		closeDialog: function () {
			$('#blackout').addClass('hidden');
			$('#confirmDialog').addClass('hidden');
		},


		// テキストから不要な情報を取り除く。
		trimInput: function (text, options) {
			var options = options || {};
			var text = text
						.replace(/<.*?>/g, '')
						.replace(/\r\n|\n\r|\n|\r/g, '')
						.replace(/&amp;/g, '&');

			if (options.dontWhiteSpace !== true) {
				text = text.replace(/&nbsp;/g, ' ');
			}
			return text;
		},


		// 入力テキストに、選択範囲に応じた色をつける。
		higlightInput: function (target) {
			// console.debug('higlightInput1');
			if (!target) {
				return;
			}
			// console.debug('higlightInput2');

			var $input  = (target === 'en' ? $('#inputEnglish') : $('#inputJapanese'));
			var $output = (target === 'en' ? $('#inputEnglish2') : $('#inputJapanese2'));
			var ranges = (target === 'en' ? ew.registBean.rangesEN : ew.registBean.rangesJP);
			var text = this.trimInput($input.html());
			// console.debug('higlightInput3', text, $input, $input.html());

			// 小さい順に並び替え
			// ranges = ranges.sort(function (o1, o2) {return o1[0] <= o2[0];});

			// テキスト構築
			// console.debug('highlight: ', text, ranges);
			var newText = this.createHighlightText(text, ranges);
			$output.html(newText);
		},


		// ハイライトテキストを作成する
		createHighlightText: function (text, ranges) {

			if (!text || !ranges || ranges.length === 0) {
				return text;
			}

			var newText = [];
			var pos = 0;
			for (var i = 0; i < ranges.length; i++) {
				var aRange = ranges[i];
				aRange = [parseInt(aRange[0]), parseInt(aRange[1])];
				// console.debug('i,range,pos', i, aRange, pos);

				if (pos < aRange[0]) {
					// console.debug('aaa');
					newText.push(text.substring(0, aRange[0] - pos));
					// console.debug('aaanewT:', newText);
					text = text.substring(aRange[0] - pos, text.length);
					// console.debug('aaaText: ', text);
					pos = aRange[0];
					// console.debug('aaaPos: ', pos);
				}

				var len = aRange[1] - aRange[0];

				newText.push('<span class="bgYellow jsHiBalloon" data-start-pos="'+aRange[0]+'" data-end-pos="'+aRange[1]+'">');
				newText.push(text.substring(0, len));
				newText.push('</span>');
				// console.debug('bbbNewText: ', newText);

				text = text.substring(len, text.length);
				// console.debug('bbbText: ', text);
				pos = aRange[1];
				// console.debug('bbbPos: ', pos);
			}
			newText.push(text);

			// console.debug('newText:', newText);
			return newText.join('');
		},


		// 日付表示1
		convertDispTime1: function (timestamp) {
			return timestamp;

			// var now = Math.floor(new Date().getTime() / 1000);
			// // var diff = Math.max((now - timestamp), 0);
			// var diff = Math.abs(timestamp);
			// console.debug('convertDispTime1', diff, now, timestamp);


			// // diff = Math.floor(diff / 1000);
			// if (diff < 60) {
			// 	return diff + '秒前';
			// }
			// diff = Math.floor(diff / 60);
			// if (diff < 60) {
			// 	return diff + '分前';
			// }
			// diff = Math.floor(diff / 60);
			// if (diff < 60) {
			// 	return diff + '時間前';
			// }
			// diff = Math.floor(diff / 24);
			// if (diff < 30) {
			// 	return diff + '日前';
			// }
			// diff = Math.floor(diff / 30);
			// return diff + 'ヶ月前';


		},

	};



	/**
	*	ユーティリティ
	*/
	var isIphone  = navigator.userAgent.toLowerCase().indexOf('iphone') !== -1;
	var isIpad    = navigator.userAgent.toLowerCase().indexOf('ipad') !== -1;
	var isAndroid = navigator.userAgent.toLowerCase().indexOf('android') !== -1;
	var storageKeyPrefix = 'ewords_';
	ew.util = {

		isIphone: function () {
			return isIphone;
		},
		isIpad: function () {
			return isIpad;
		},
		isAndroid: function () {
			return isAndroid;
		},
		isSmartPhone: function () {
			return isIphone || isIpad || isAndroid;
		},
		isEmpty: function (val) {
			return val === null || val === undefined || val.length === 0;
		},
		isNotEmpty: function (val) {
			return !this.isEmpty(val);
		},
		isOnLine: function () {
			return window.navigator.onLine;
		},
		isOffLine: function () {
			return !window.navigator.onLine;
		},

		isLogedIn: function () {
			return this.isNotEmpty($.cookie('ewords_as_id'));
		},

		getStorage: function () {
			return window.localStorage;
		},
		parseJsonString: function (jsonString) {
			try {
				return JSON.parse(jsonString);
			} catch (e) {
				console.error('json parse error: ', e, jsonString);
				return null;
			}
		},
		getUser: function () {
			var jsonString = this.getStorage().getItem(storageKeyPrefix + 'user');
			return this.isNotEmpty(jsonString) ? JSON.parse(jsonString) : null;
		},

		setUser: function (json) {
			var jsonString = this.getStorage().setItem(storageKeyPrefix + 'user', JSON.stringify(json));
		},

		loadUser: function (callback) {
			var self = this;
			if (this.isLogedIn()) {
				$.ajax({
					url: './api/user/user.php',
					dataType: 'json',
					success: function (userJson) {
						self.setUser(userJson);
						callback && callback(userJson);
					}
				});
			}
		},

		refreshLoginUserName: function (options) {
			var options = options || {};

			if (options.type === 'logout') {
				$('#loginUserInfo').addClass('hidden');
				$('#loginLink').removeClass('hidden');
				return;
			}

			this.loadUser(function (user) {
				$('#loginUserName').text(user.disp_name);
				$('#loginLink').addClass('hidden');
				$('#loginUserInfo').removeClass('hidden');
			});
		},

		// confirm to user.
		// @return 0:No, 1:Yes
		confirmDialog: function (message, callback) {
			// TODO あとでデザインカスタマイズを入れる。
			var result = window.confirm(message);
			var result = (result ? 1 : 0);
			callback && callback(result);
		},


		showNotification: function (message, options) {
			console.debug('showNotification fire.', message, options);
			options = options || {};
			// var $notification = $('#notificationTemplate').clone();
			var $notification = $('<div class="notification"/>');
			$notification.html(message);
			$('#notificationArea').append($notification);
			$notification.addClass('show');

			$notification.on('click', function () {
				$(this).remove();
			});

			var duration = (options.duration || 3000) + 400; // duration + show animation time.
			setTimeout(function () {
				$notification.removeClass('show');
				options.callback && options.callback();
				setTimeout(function () {
					$notification.remove();
				}, 1500);
			}, duration);
		},
		createHTML: function (templateId, data) {

			var templateString = $('#' + templateId).html();

			this.each(data, function (value, key) {
				var repKey = '{{' + key + '}}';
				templateString = templateString.replace(new RegExp(repKey, 'g'), value);
			});

			return templateString;
		},
		isArray: function (obj) {
			return Object.prototype.toString.call(obj) == '[object Array]';
		},
		each: function (obj, iterator, context) {
			if (this.isArray(obj)) {
				obj.forEach(function (value, index) {
					iterator.call(context, value, index, obj);
				});
			} else {
				Object.keys(obj || {}).forEach(function (prop) {
					iterator.call(context, obj[prop], prop);
				});
			}
		},
		arrayCopy: function (array) {
			var array2 = [];
			array.forEach(function (item) {
				array2.push(item);
			});
			return array2;
		}
	};



	/**
	 * Ajax
	 */
	 ew.ajax = function (jQueryAjaxOption) {

	 	var orgnErrorFunc = jQueryAjaxOption.error;

	 	// switch error handler.
	 	jQueryAjaxOption.error = function (jqXHR, textStatus, errorThrown) {
	 		console.debug('[ajaxerror]', jqXHR, textStatus, errorThrown);

	 		// Not Authorized
	 		if (jqXHR.status === 403) {
	 			alert('認証されていません、ログインしてください.');
	 			ew.showLoginDialog();
	 		}

	 		// Other.
	 		var errorMessage = (jqXHR.responseJSON ? jqXHR.responseJSON.error : '');
	 		if (errorMessage) {
	 			alert(errorMessage);
	 		} else {
	 			alert('エラーが発生しました.\n時間をおいてから再度お試しください.');
	 		}

	 		// invoke Original Error Handler.
	 		if (orgnErrorFunc) {
	 			return orgnErrorFunc(jqXHR, textStatus, errorThrown);
	 		}
	 	};

	 	// dataType.
	 	jQueryAjaxOption.dataType = jQueryAjaxOption.dataType || 'json';


	 	// execute.
	 	$.ajax(jQueryAjaxOption);

	 };


	// ScrollToTopボタンの動き
	//==============================================================================
	var $scrollUpBtn = $('#scrollTopBtn');
	$scrollUpBtn.on('click', function () {
		$("html, body").animate({scrollTop: 0}, 800, "swing");
	});
	window.addEventListener('scroll', function () {
		var deltaY = $(window).scrollTop();
		if (deltaY > 200 && $scrollUpBtn.hasClass('show') === false) {
			$scrollUpBtn.addClass('show');
		} else if (deltaY < 200 && $scrollUpBtn.hasClass('show')) {
			$scrollUpBtn.removeClass('show');
		}
	}, false);









	// ページロード時の処理
	//==============================================================================
	var util = ew.util;

	// ユーザーデータ取得。取得後に、表示きりかえるかも。
	util.refreshLoginUserName();


	window.addEventListener('online', function () {
		ew.util.showNotification('オンラインになりました');
	});

	window.addEventListener('offline', function () {
		ew.util.showNotification('オフラインになりました');
	});































})();


// メニュー機能
(function () {
	var
		$menuBtn = $('#menu'),
		$menuArea = $('#menuArea'),
		$contentArea = $('#content'),
		$whiteOut = $('#menuWhiteout');

		ew.currentPageType = 'home';

	var tapEnable = false;
	$menuBtn.on(ew.EVENT.TOUCH_START, function () {
		tapEnable = true;
		$menuBtn.addClass('on');
	}).on(ew.EVENT.TOUCH_MOVE, function () {
		tapEnable = false;
		$menuBtn.removeClass('on');
	}).on(ew.EVENT.TOUCH_END, function () {
		if (tapEnable) {
			tapEnable = false;
			$menuBtn.removeClass('on');

			$menuArea.addClass('show');
			$contentArea.addClass('menuShow');
			$whiteOut.removeClass('hidden');
		}
	});

	$whiteOut.on('click', function () {
		$menuArea.removeClass('show');
		$contentArea.removeClass('menuShow');
		$whiteOut.addClass('hidden');
	});

	// メニュー押した時の挙動
	$('[data-menu]').on('click', function (e) {
		var type = $(this).data('menu');
		console.debug('type=', type);
		$menuArea.removeClass('show');
		$contentArea.removeClass('menuShow');
		$whiteOut.addClass('hidden');

		if (type === ew.currentPageType)
			return;

		// 現在値の変更
		ew.currentPageType = type;

		// 表示きりかえ
		$('[data-content]').addClass('hidden');
		$('[data-content="'+type+'"]').removeClass('hidden');

		// 表示
		if (type === 'top') {
			ew.showTopPage();
		} else if (type === 'home') {

			// ログインしていなければ、ログインを出す。
			if (!$.cookie('ewords_as_id')) {
				ew.showLoginDialog();
			} else {
				ew.showItemList();
			}

		}

	});


	// メニューを開く
	ew.openMenu = function () {
		$menuArea.addClass('show');
		$contentArea.addClass('menuShow');
		$whiteOut.removeClass('hidden');
	};
	// メニューを閉じる
	ew.closeMenu = function () {
		$menuArea.removeClass('show');
		$contentArea.removeClass('menuShow');
		$whiteOut.addClass('hidden');
	}


})();

// ログイン系
;(function () {

	var util = ew.util;

	var $loginDialog = $('#loginDialog');


	// Public
	//======================================================

	// ログインダイアログを開く
	ew.showLoginDialog = function (targetView) {

		// 表示項目を初期化する
		$('.dialog input[type="text"], .dialog input[type="password"]').val('');

		// 表示Viewを制御
		if (!targetView || targetView === 'login') {
			$loginDialog.removeClass('typeSignIn');
		} else {
			$loginDialog.addClass('typeSignIn');
		}

		$('#loginDialogBg').css('height', $(document).height() + 'px');
		$('#loginDialogBg').removeClass('hidden');
		$('#loginDialog').removeClass('hidden');
	};

	// ログインダイアログを閉じる
	ew.closeLoginDialog = function () {
		$('#loginDialogBg').addClass('hidden');
		$('#loginDialog').addClass('hidden');
	};


	// アカウント作成・ログインリンクを踏んだらダイアログを表示
	$('#loginLink').on('click', ew.showLoginDialog);





	// ログイン、サインインの切替
	$('#loginDialog').on('click', '.jsSwitch', function () {
		$('#loginDialog').toggleClass('typeSignIn');
	});

	// 背景をクリックで閉じる
	$('#loginDialogBg').on('click', ew.closeLoginDialog);


	ew.sendAjax = function (options) {
		$.ajax({
			url: options.url,
			method: 'post',
			data: options.data,
			dataType: 'json',
			success: function (result) {
				options.success && options.success(result);
			},
			error: function (xhr, textStatus, err) {
				console.debug('error.', xhr, textStatus, err);
				alert(xhr.responseJSON.error);
			}
		});
	};


	// ログインする
	$('[data-area="login"]').on('click', 'input[type="button"]', function () {
		var userId = $('[data-area="login"] [name="userId"]').val();
		var password = $('[data-area="login"] [name="password"]').val();



		ew.ajax({
			url: './api/user/login.php',
			data: {
				user_id: userId,
				password: password
			},
			method: 'post',
			success: function (result) {

				ew.util.refreshLoginUserName();

				alert(result.message);
				ew.closeLoginDialog();

				// 同期処理を開始する.
				ew.syncManager.startTask();
			}
		});
	});



	// サインインする
	var $sUserInput = $('[data-area="signin"] [name="userId"]');
	var $sPasswordInput = $('[data-area="signin"] [name="password"]');
	var $sDispNameInput = $('[data-area="signin"] [name="dispName"]');
	$('#signinBtn').on('click', function () {

		// 値を取得
		var userId = $sUserInput.val();
		var password = $sPasswordInput.val();
		var dispName = $sDispNameInput.val();

		// check.
		var errors = [];
		util.isEmpty(userId) && errors.push('ユーザーIDを入力してください。');
		util.isEmpty(password) && errors.push('パスワードを入力してください。');
		util.isEmpty(dispName) && errors.push('表示名を入力してください。');
		if (errors.length !== 0) {
			alert(errors.join('\n'));
			return;
		}

		// API実行
		ew.sendAjax({
			url: './api/user/signin.php',
			data: {
				user_id: userId,
				password: password,
				dispName: dispName
			},
			success: function (result) {
				// ログインユーザー名の表示を切り替える.
				ew.util.refreshLoginUserName();

				alert(result.message || result.error);
				ew.closeLoginDialog();

				// 同期処理を開始する.
				ew.syncManager.startTask();
			}
		});
	});





	// イベント登録
	//======================================================
	$('body').on('click', '[data-action="showCreateAccountDialog"]', function () {
		console.debug('showCreateAccountDialog is called.');
		ew.showLoginDialog('signin');
	});
	$('body').on('click', '[data-action="showLoginDialog"]', function () {
		console.debug('showLoginDialog is called.');
		ew.showLoginDialog();
	});






















})();


/**
	ローカル環境のデータ管理を行う機能。
*/
;(function () {

	// NameSpace.
	//=====================================================================
	window.ew = window.ew || {};
	var db = window.ew.db = {};




	// Private Functions.
	//=====================================================================

	// Const, defines.
	var KEY_PREFIX = 'ewords_';
	var KEY_TASK_QUEUE = KEY_PREFIX + 'task_queue';
	var KEY_TOP_LIST = KEY_PREFIX + 'top_list';
	var KEY_MYPAGE_LIST = KEY_PREFIX + 'mypage_list';
	var KEY_DAILY_LIST =  KEY_PREFIX + 'daily_list';


	// variables.
	var storage = window.localStorage;

	// save.
	var _saveToStorage = function (key, obj) {
		var json = JSON.stringify(obj);
		storage.setItem(key, json);
	}
	// get.
	var _getFromStorage = function (key) {
		var jsonString = storage.getItem(key);
		return jsonString ? JSON.parse(jsonString) : null;		
	}




	// Public.
	//=====================================================================
	db.KEY = {
		TASK_QUEUE: KEY_PREFIX + 'task_queue',
		TOP_LIST: KEY_PREFIX + 'top_list',
		MYPAGE_LIST: KEY_PREFIX + 'mypage_list',
		DAILY_LIST: KEY_PREFIX + 'daily_list',
	};

	db.save = function (key, value) {
		_saveToStorage(key, value);
	}

	db.select = function (key) {
		return _getFromStorage(key);
	}


// リファクタリング中.


	// タスクキュー
	db.saveTaskQueue = function (array) {
		_saveToStorage(KEY_TASK_QUEUE, array);
	}
	db.getTaskQueue = function () {
		return _getFromStorage(KEY_TASK_QUEUE);
	}


	// TOPページ用リスト
	db.saveTopPageList = function (array) {
		_saveToStorage(KEY_TOP_LIST, array);
	};
	db.getTopPageList = function () {
		return _getFromStorage(KEY_TOP_LIST);
	}

	// マイページ用リスト
	db.saveMyPageList = function (array) {
		_saveToStorage(KEY_MYPAGE_LIST, array);
	};
	db.getMyPageList = function () {
		return _getFromStorage(KEY_MYPAGE_LIST);
	}







































})();
/**
	サーバーとローカルの同期を行う.
*/
;(function () {

	// NameSpace.
	//=====================================================================
	window.ew = window.ew || {};
	var syncManager = window.ew.syncManager = {};


	// Private Functions.
	//=====================================================================
	var util = ew.util;
	var db = ew.db;

	// 全件取得する
	var _getAllTasks = function () {
		return db.getTaskQueue() || [];
	}
	// 1件取得して、DBから削除
	var _popTask = function () {
		var tasks = _getAllTasks();
		if (tasks.length > 0) {
			var task = tasks.shift();
			db.saveTaskQueue(tasks);
			return task;

		} else {
			return null;
		}

	}

	// 処理名を取得する
	var _getTaskName = function (type) {
		switch (type) {
			case 'itemUpdate': return 'アイテムの状態変更';
			case 'itemAdd': return 'アイテムの登録';
			default: return 'この処理';
		}
	}

	// タスクキューの最初に追加する
	var _addTaskToTop = function (task) {
		var tasks = _getAllTasks();
		tasks = [task].concat(tasks);
		db.saveTaskQueue(tasks);
	}


	// タスクを実行する
	var _executeTask = function () {
		console.log('_executeTask is called.');

		// offlineならやらない
		if (util.isOffLine()) {
			_hideDisplay();
			console.debug('_executeTask stop. reason=offline.');
			return;
		}

		// Taskがなければやらない
		var aTask = _popTask();
		if (!aTask) {
			_hideDisplay();
			console.debug('_executeTask stop. reason=noTask.');
			return;
		}

		// 処理開始
		_showDisplay();

		$.ajax({
			url: aTask.url,
			method: aTask.method || 'get',
			data: aTask.data || {},
			dataType: 'json',
			success: function (json) {
				console.debug('tasks done. url=', aTask.url, 'result=', json);

				// 通知.
				var message = _getTaskName(aTask.type) + 'が完了しました';
				util.showNotification(message);

				// 何らかの後処理が必要な場合には、それをする.
				_treatAfterExecute(aTask, json);

				// 次のタスクへ
				_executeTask();
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.debug('tasks error.', jqXHR, textStatus, errorThrown);

				// treat 403.
				if (jqXHR.status === 403) {
					var message = _getTaskName(aTask.type) + 'には認証が必要です。ログインしますか？';
					util.confirmDialog(message, function (result) {
						if (result) {
							_addTaskToTop(aTask);
							ew.showLoginDialog();
							return; // stop task queue.

						} else {
							// TODO どうしようか。このままだとタスクが消えてしまうけど.

						}
					});

					_hideDisplay();
					return;
				}



				// 次のタスクへ
				_executeTask();

				// TODO 400, 404, 500の場合の対応どうしようか。。
				// Timeoutということもあるらしい。
				alert('エラーが発生しました。後でリトライします。code=' + jqXHR.status);
				syncManager.addTask(aTask);
			}
		});
	};


	// サーバーとの同期完了後の、後処理
	var _treatAfterExecute = function (aTask, json) {

		// アイテム新規登録時
		if (aTask.type === 'itemAdd') {

			// DBへ保存.
			var item = {
				id: json.id,
				json: JSON.stringify(aTask.data)
			};
			var itemList = db.getMyPageList() || [];
			itemList.push(item);
			db.saveMyPageList(itemList);

			// リストの最新化
			ew.showItemList(null, {useCache: true});

			return;
		}

		// アイテム更新
		if (aTask.type === 'itemUpdate') {
			// update daily activity.
			ew.refreshDailyActivity();
		}


	};









	// 同期中の表示・非表示
	var _showDisplay = function () {
		$('#syncBar').addClass('show');
	}
	var _hideDisplay = function () {
		// 時間をおかないと短すぎる場合があるため。
		setTimeout(function () {
			$('#syncBar').removeClass('show');
		}, 1200);
	}


	// Public Functions.
	//=====================================================================

	// add task.
	// @param options.url, options.data, options.method
	syncManager.addTask = function (options) {
		var tasks = _getAllTasks();
		tasks.push(options);
		db.saveTaskQueue(tasks);

		// タスク開始
		_executeTask();
	};

	// start task.
	syncManager.startTask = function () {
		_executeTask();
	}






	// Add Fook.
	//=====================================================================
	window.addEventListener('load', function () {
		console.debug('onload: start execute tasks.');
		_executeTask();
	});
	window.addEventListener('online', function () {
		console.debug('become online: start execute tasks.');
		_executeTask();
	});





})();

// 登録画面のUI
;(function () {

	// Alias
	var
		util = ew.util,
		$inputEnglish = $('#inputEnglish'),
		$inputJapanese = $('#inputJapanese');



	// 登録情報
	ew.registBean = {};


	// 登録情報を保持するBeanを初期化する
	var initializeRegistBean = function () {
		ew.registBean = {
			english: '',
			japanese: '',
			rangesEN: [],
			rangesJP: [],
			rating: 0
		};
	}
	initializeRegistBean();

	// placeholderを設定する
	$('[data-placeholder]').each(function () {
		var $this = $(this);
		if ($this.html().length === 0) {
			$this.html($(this).data('placeholder'));
			$this.addClass('fcLightGray');
		}
	});

	// 入力の制御
	$('#inputEnglish, #inputJapanese').focus(function () {
		var $this = $(this);
		if ($this.html() === $this.data('placeholder')) {
			$this.html('');
		}
		$this.removeClass('fcLightGray');

	}).focusout(function () {
		var $this = $(this);
		if ($this.html().length === 0) {
			$this.html($(this).data('placeholder'));
			$this.addClass('fcLightGray');
		}
	});

	// ハイライトを解除する
	$('#cancelHighlightEnglish').on('tap', function (e) {
		console.debug('cancelHighlightEnglish');
		ew.registBean.rangesEN = [];
		ew.higlightInput('en');
		e.preventDefault();
		return false;
	});
	$('#cancelHighlightJapanese').on('tap', function (e) {
		console.debug('cancelHighlightJapanese');
		ew.registBean.rangesJP = [];
		ew.higlightInput('jp');
		e.preventDefault();
		return false;
	});


	// 登録ボタン
	$('#registBtn').on('tap', function () {

		var
			$inputEnglish = $('#inputEnglish'),
			$inputJapanese = $('#inputJapanese'),
			$ratingList = $('#inputRating span.on');

		// TODO 空白をトリムしてから、必須チェックを行う。

		// check input
		if ($inputEnglish.html() === $inputEnglish.data('placeholder')) {
			alert('英文章を入力してください');
			return false;
		}
		if ($inputJapanese.html() === $inputJapanese.data('placeholder')) {
			alert('日本語訳を入力してください');
			return false;
		}

		// save.
		var english = $inputEnglish.html();
		english = ew.trimInput(english);
		var japanese = $inputJapanese.html();
		japanese = ew.trimInput(japanese);
		var rating = $ratingList.length;
		console.debug(english, japanese, rating);

		ew.registBean.japanese = japanese;
		ew.registBean.english = english;
		ew.registBean.rating = rating;


		// 編集の場合には、前のものを削除する
		if (ew.editType === 'edit') {
			$.ajax({
				url: './api/item/delete.php',
				method: 'post',
				data: {id: ew.editTargetId}
			});
		}


		ew.save(ew.registBean, function () {
			// rendering.
			ew.closeDialog();

			// 見た目の初期化
			$('#cancelBtn').click();
			$inputEnglish.html($inputEnglish.data('placeholder')).addClass('fcLightGray');
			$inputJapanese.html($inputJapanese.data('placeholder')).addClass('fcLightGray');
			$('#inputEnglish2').html('');
			$('#inputJapanese2').html('');
			$('#inputRating span').removeClass('on').html('☆');

			// refresh.
			initializeRegistBean();

			// アクティビティ数の更新
			ew.refreshDailyActivity();

			if (util.isOffLine()) {
				alert('オフラインのため、一時的にローカルへデータを保存しました。オンラインになり次第、サーバーへ同期されます。');
			}
		});


	});


	// キャンセルボタン
	$('#cancelBtn').click(function () {
		$inputEnglish = $('#inputEnglish');
		$inputJapanese = $('#inputJapanese');
		$('#inputEnglish').html($inputEnglish.data('placeholder')).addClass('fcLightGray');
		$('#inputJapanese').html($inputJapanese.data('placeholder')).addClass('fcLightGray');
		$('#inputEnglish2').html('');
		$('#inputJapanese2').html('');
		$('#inputRating span').removeClass('on').html('☆');
		$('#registBtn').val('登録する');
		$('#cancelBtn').addClass('hidden');

		ew.editType = null;
		ew.editTargetId = null;
	});


	// 入力の値が変わったら、タグとか改行はトリムする。
	var trimOnChange = function () {
		// console.debug('trimOnChange');
		var $this = $(this);
		var trimedInput = ew.trimInput($this.html(), {dontWhiteSpace:true});
		$this.html(trimedInput);
	};
	$inputEnglish.on('keyup', trimOnChange);
	$inputJapanese.on('keyup', trimOnChange);


	// 選択範囲のチェック
	$(document).on('mouseup', function () {
		checkSelection();
		ew.higlightInput('en');
		ew.higlightInput('jp');
	});
	// iPhone,iPadの場合には、mouseupとかが反応しないので、定期的にチェック
	if (util.isIphone() || util.isIpad()) {
		console.debug('iphone!! check selection per 500ms.')
		setInterval(function () {
			checkSelection(function () {
				ew.higlightInput('en');
				ew.higlightInput('jp');
			});
		}, 1000);
	}
	var checkSelection = function (callbackWhenSelectionChanged) {
		// console.debug('checkSelection');

		var
			selection = window.getSelection(),
			bean = ew.registBean;


		// check selection exists.
		if (!selection || !selection.extentNode) {
			// console.debug('aaa');
			return;
		}

		// check target node.
		var targetType;
		var extentNode = selection.extentNode;
		if (extentNode.parentNode.id === 'inputEnglish') {
			targetType = 'en';
		} else if (extentNode.parentNode.id === 'inputJapanese') {
			targetType = 'jp';
		} else {
			// console.debug('bbb', extentNode.id, extentNode);
			return;
		}

		// get range.
		var range = [
				min(selection.anchorOffset, selection.focusOffset),
				max(selection.anchorOffset, selection.focusOffset),
			];
		if (range[0] === range[1]) {
			// console.debug('ccc', range);
			return;  // no selection.
		}
		console.debug('range: ', range);


		// 既に同じ選択範囲を持っていたら、何もしない。
		var ranges = (targetType === 'en' ? bean.rangesEN : bean.rangesJP);
		for (var i = 0; i < ranges.length; i++) {
			var aRange = ranges[i];
			aRange = [parseInt(aRange[0]), parseInt(aRange[1])];
			if (aRange[0] === range[0] && aRange[1] === range[1]) {
				console.debug('already same range exists.', range, ranges);
				return;
			}
		}

		// 重複する範囲があれば、削除する。
		var newRanges = [];
		for (var i = 0; i < ranges.length; i++) {
			var aRange = ranges[i];
			if (range[0] <= aRange[1] && range[1] >= aRange[0]) {
				// dupulicate.
			} else {
				newRanges.push(aRange);
			}
		}

		// 新しい範囲も追加する。
		newRanges.push(range);

		// 若い順にソート
		newRanges.sort(function (o1, o2) {return (o1[0] - o2[0]);});

		// set.
		if (targetType === 'en') {
			bean.rangesEN = newRanges;
		} else {
			bean.rangesJP = newRanges;
		}

		// debug.
		console.debug('range=', range, ', ranges=', newRanges);

		// callback.
		callbackWhenSelectionChanged && callbackWhenSelectionChanged();
	};



	// テキスト変更の処理
	var changeTextEvent = function (e) {
		var $this = $(this);
		var text = ew.trimInput($this.html());
		var textSize = text.length;
		console.debug('changeTextEvent: ', text, this.id, textSize, e);

		// レンジから外れたらそのレンジを削除する
		var ranges = (this.id === 'inputEnglish' ? ew.registBean.rangesEN : ew.registBean.rangesJP);
		var newRanges = [];
		for (var i = 0; i < ranges.length; i++) {
			var aRange = ranges[i];
			if (aRange[0] < textSize) {
				newRanges.push(aRange);
			}
		}

		var type;
		if (this.id === 'inputEnglish') {
			ew.registBean.rangesEN = newRanges;
			type = 'en';
		} else {
			ew.registBean.rangesJP = newRanges;
			type = 'jp';
		}

		// シフトキーだった場合には、選択範囲を最新にする
		// checkSelection
		var SHIFT_KEY_CODE = 16;
		if (e.which === SHIFT_KEY_CODE) {
			checkSelection();
		}


		// 登録されたレンジよりも前で、文字の削除/挿入がされた場合に、レンジがずれないように調整する.
		var selection = window.getSelection();
		if (selection.anchorOffset, selection.focusOffset) { // that is "Caret"
			var pos = selection.anchorOffset;
			var oldTextSize = (this.id === 'inputEnglish' ? ew.registBean.english : ew.registBean.japanese).length;
			if (oldTextSize < textSize) { // increment
				newRanges.forEach(function (range) {
					if (pos < range[0]) {
						range[0]++;
						range[1]++;
					} else if (range[0] <= pos && pos <= range[1]) {
						range[1]++;
					}
				});
			} else if (textSize < oldTextSize) { // decrement
				newRanges.forEach(function (range) {
					if (pos < range[0]) {
						range[0]--;
						range[1]--;
					} else if (range[0] <= pos && pos <= range[1]) {
						range[1]--;
					}
				});
			}
		}

		// 登録しておく
		if (this.id === 'inputEnglish') {
			ew.registBean.english = text;
		} else {
			ew.registBean.japanese = text;
		}

		// 表示を最新化
		ew.higlightInput(type);

	};
	$('#inputEnglish, #inputJapanese').on('keyup', changeTextEvent);
	$('#inputEnglish, #inputJapanese').dblclick(function () {
		console.debug('dbclick to input area.');

		setTimeout(function () {
			checkSelection();
			var type;
			if (this.id === 'inputEnglish') {
				type = 'en';
			} else {
				type = 'jp';
			}
			ew.higlightInput(type);
		}, 100);
	});



	// 機能しなさそうなので、いったんコメントアウト.
	// ハイライト要素をマウスオーバーすると、削除バルーンを表示する.
	// $('.registArea').on('mouseover', '.jsHiBalloon', function () {
	// 	console.debug('.jsHiBalloon mouseover');
	// });


























})();










// アクティビティUI
(function () {
	// 日々の行動を取得
	ew.refreshDailyActivity();
	// 切替処理
	$('#switchDailyAction').on('click', function () {
		$(this).toggleClass('on');
		$('#dailyActionList').toggleClass('hidden');
	});
})();





// List UI
(function () {

    // Alias.
    var 
        ITEM_STATUS_NONE = ew.ITEM_STATUS.NONE,
        ITEM_STATUS_ENGLISH_DONE = ew.ITEM_STATUS.ENGLISH_DONE,
        ITEM_STATUS_BOTH_DONE = ew.ITEM_STATUS.BOTH_DONE,
        util = ew.util,
        db = ew.db;


    // Variables.
    var
        map = {},
        limit  = 20,
        currentDisplayStatus = ITEM_STATUS_NONE;



    // Public.
    //=====================================================
    ew.showItemList = function (parent, options) {

        _getAll(function (itemList) {

            map[ITEM_STATUS_NONE]         = {snipet: [], target: parent || $('#listArea'), offset: 0, sort: 'asc'};
            map[ITEM_STATUS_ENGLISH_DONE] = {snipet: [], target: $('#listDoneEnArea'),     offset: 0, sort: 'asc'};
            map[ITEM_STATUS_BOTH_DONE]    = {snipet: [], target: $('#listDoneBothArea'),   offset: 0, sort: 'asc'};

            util.each(itemList, function (item) {
                var data = _createItem(item);
                if (!data) {
                    return;
                }
                var snipet = map[data.status].snipet;
                snipet.push(data.html);
            });

            showItemList();

        }, options);
    };


    // 表示する
    function showItemList (options) {
        options = options || {};

        var data = map[currentDisplayStatus];
        var offset = data.offset;
        var snipets = util.arrayCopy(data.snipet);
        var $parent = data.target;

        console.debug('offset:', offset);
        console.debug('limit:', limit);
        console.debug('snipet.length:', snipets.length);

        // リセットオプション
        if (options.reset) {
            $parent.empty();
            offset = data.offset = 0;
        }

        // ソート
        if (data.sort === 'desc') {
            snipets.reverse();
        }

        var showDatas = snipets.slice(offset, offset + limit);


        // 表示
        if (offset === 0 && showDatas.length === 0) {
            $parent.html('表示できる情報はありません');
        } else {
            $parent.append(showDatas.join(''));
        }

        // もっと見るボタン
        $parent.find('.jsMoreBtn').remove();
        if (snipets[offset + limit]) {
            var moreBtn = ew.util.createHTML('tmpl_more_btn');
            $parent.append(moreBtn);
        }

        // 件数をインクリメント
        data.offset += limit;

        // ソートモジュールを追加
        var sortModuleIdent = 'js-sortModule';
        var $sortModule =$parent.find('.' + sortModuleIdent);
        if ($sortModule.length === 0) {
            $sortModule = $('<div class="' + sortModuleIdent + ' pt16 pb16 ta-c"/>');
            $parent.prepend($sortModule);
            var $select = $('<select class="w-80p"/>');
            $select.append('<option value="asc">古い順</option>');
            if (data.sort === 'desc') {
                $select.append('<option value="desc" selected="selected">新しい順</option>');                
            } else {
                $select.append('<option value="desc">新しい順</option>');                
            }
            $sortModule.append($select);
            $sortModule.on('change', function () {
                data.sort = $sortModule.find('option:selected').attr('value');
                showItemList({reset: true});
            });
        }
     };


    // もっとみるボタン
    $('.listArea').on('tap', '.jsMoreBtn', function () {
        showItemList();
    });


    // タブの挙動
    //==============================================================================
    $('[data-tab-target]').on('click', function (e) {

        // 自分と親
        var $this = $(e.currentTarget);
        var $parent = $this.parent();

        // 自分も含めたタブ全体を取得する
        var $tabs = $parent.find('[data-tab-target]');

        // タブ、コンテンツを全て非活性とする
        $tabs.each(function () {
            var $this = $(this);
            $this.removeClass('selected');
            var targetName = $this.data('tab-target');
            $('[data-tab-dest="'+targetName+'"]').addClass('hidden');
        });

        // 自分のタブとコンテンツを表示する
        $this.addClass('selected');
        var targetName = $this.data('tab-target');
        $('[data-tab-dest="'+targetName+'"]').removeClass('hidden');

        // 現在の状態を指定する
        switch ($this.data('tab-target')) {
            case 'e2j': 
                currentDisplayStatus = ITEM_STATUS_NONE;
                break;
            case 'j2e':
                currentDisplayStatus = ITEM_STATUS_ENGLISH_DONE;
                break;
            case 'done':
                currentDisplayStatus = ITEM_STATUS_BOTH_DONE;
                break;
        }

        // offsetのリセット
        util.each(map, function (data) {
            data.offset = 0;
        });        

        showItemList({reset: true});
    });



    // Private.
    //=====================================================
    /**
     * get all items.
     */
    var _getAll = function (callback, options) {

        callback = callback || function () {};
        options = options || {};

        if (util.isOffLine() || options.useCache) {
            var array = db.getMyPageList() || [];
            callback(array);

        } else { // online.
            $.ajax({
                url: './api/item/list.php',
                dataType: 'json',
                success: function (json) {
                    db.saveMyPageList(json);
                    ew.list = json; // TODO refactoring. not use ew.list.
                    callback(json);
                },
                error: function () {
                    // TODO implement. maybe use common error handling or ajax method.
                }
            });
        }
    };
    /**
     * create Hightlight Text Line.
     */
    var _createItem = function (item) {

        var json = util.parseJsonString(item.json);
        if (!json) {
            return;
        }

        var html = util.createHTML('tmpl_list_item', {
            id: item.id,
            en: ew.createHighlightText(unescape(json.english), json.rangesEN),
            jp: ew.createHighlightText(unescape(json.japanese), json.rangesJP)
        });

        return {
            status: parseInt(json.done || ITEM_STATUS_NONE),
            html: html
        };
    };






    // 解答の表示きりかえ
    $('.listArea').on('tap', '.item', function (e) {
        $(this).toggleClass('visibleOn');
        return false;
    });

    // 削除ボタン
    $('#deleteBtn').on('tap', function () {

        if (!window.confirm('削除しますか？')) {
            return false;
        }

        var id = ew.currentTargetId;
        console.debug('delete: ', id);
        $.ajax({
            url: './api/item/delete.php',
            method: 'post',
            data: {id: id},
            dataType: 'json',
            success: function (json) {
                console.debug('deleted', json);
                ew.closeDialog();
                $('#listArea').find('[data-index="'+id+'"]').remove();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status === 403) {
                    alert('認証されていません。');
                    ew.closeDialog();
                    ew.showLoginDialog();
                    return;
                }
            },
        });
    });


    // 対象のアイテムを取得する
    var _getItem = function (id) {
        var itemList = db.getMyPageList();
        for (var i = 0; i < itemList.length; i++) {
            var item = itemList[i];
            if (id === parseInt(item.id)) {
                return item;
            }
        }
        return null;
    }


    // アイテムの状態を変更する
    var _updateStatus = function (id, toStatus) {

        // ダイアログを閉じる.
        ew.closeDialog();

        // 以降の処理が少し重たいため、非同期に処理する.
        // TODO 処理を軽くしたい.
        setTimeout(function () {

            // 対象データを見つける
            var item = _getItem(id);
            if (!item) {
                alert('該当データはありません。 id=', id);
                return;
            }

            // 表示情報を取得する
            var bean = JSON.parse(item.json);

            // ステータ変更＆スチェック
            var currentStatus = bean.done ? parseInt(bean.done) : ew.ITEM_STATUS.NONE;
            var status;
            if (currentStatus === ew.ITEM_STATUS.NONE) {
                status = toStatus;
            } else if (currentStatus === ew.ITEM_STATUS.BOTH_DONE || currentStatus === toStatus) {
                status = currentStatus;
            } else {
                status = ew.ITEM_STATUS.BOTH_DONE;
            }
            if (status === currentStatus) {
                return ew.util.showNotification('更新する必要はありません.');
            } else {
                bean.done = status;
            }

            // API処理
            ew.syncManager.addTask({
                type: 'itemUpdate',
                url: './api/item/update.php',
                method: 'post',
                data: {
                    id: id,
                    done: status
                }
            });

            // DBへ保存.
            var itemList = db.getMyPageList();
            for (var i = 0; i < itemList.length; i++) {
                var item = itemList[i];
                if (id === parseInt(item.id)) {
                    var json = JSON.parse(item.json);
                    json.done = status;
                    item.json = JSON.stringify(json);
                    break;
                }
            }        
            db.saveMyPageList(itemList);

            // リストの最新化
            // ew.showItemList(null, {useCache: true});
            $('[data-index="' + id + '"]').remove();

            // オフラインの場合には、Noti.
            if (util.isOffLine()) {
                util.showNotification('オフラインのため、処理を保存しました.');
            }
        }, 1);
    };




    // 完了ボタン（English）
    $('#doneENBtn').on('tap', function () {
        var id = ew.currentTargetId;
        _updateStatus(id, ew.ITEM_STATUS.ENGLISH_DONE);
    });


    // 完了ボタン（Japanese）
    $('#doneJPBtn').on('tap', function () {
        var id = ew.currentTargetId;
        _updateStatus(id, ew.ITEM_STATUS.JAPANESE_DONE);
    });



    // 復活ボタン
    $('#liveBtn').on('tap', function () {
        var id = ew.currentTargetId;


        $.ajax({
            url: './api/item/update.php',
            method: 'post',
            data: {
                id: id,
                done: ew.ITEM_STATUS.NONE
            },
            dataType: 'json',
            success: function (json) {
                console.debug('live: ', json);
                ew.closeDialog();
                ew.showItemList();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status === 403) {
                    alert('認証されていません。');
                    ew.closeDialog();
                    ew.showLoginDialog();
                    return;
                }
            },

        });
    });


    // 編集ボタン
    $('#editBtn').on('tap', function () {
        ew.editTargetId = ew.currentTargetId;
        ew.editType = 'edit';

        // 対象データを見つける
        var item;
        var itemList = db.getMyPageList();
        for (var i = 0; i < itemList.length; i++) {
            var anItem = itemList[i];
            if (ew.editTargetId === parseInt(anItem.id)) {
                item = anItem;
                break;
            }
        }
        if (!item) {
            alert('該当データはありません。 id=', ew.editTargetId);
            return;
        }

        // 整形する
        var bean = JSON.parse(item.json);
        bean.english = ew.trimInput(bean.english);
        bean.japanese = ew.trimInput(bean.japanese);
        bean.rangesEN = bean.rangesEN || [];
        bean.rangesJP = bean.rangesJP || [];
        ew.registBean = bean;

        // 表示する
        $('#inputEnglish').html(bean.english).removeClass('fcLightGray');
        $('#inputJapanese').html(bean.japanese).removeClass('fcLightGray');
        ew.higlightInput('en');
        ew.higlightInput('jp');
        // TODO レーティングも。
        $('#registBtn').val('編集完了する');
        $('#cancelBtn').removeClass('hidden');

        // ダイアログを閉じる。
        ew.closeDialog();


        // 編集エリアに移動する
        $('html,body').animate({ scrollTop: 0 }, 'fast');
    });


    // アクションボタン
    $('.listArea').on('tap', '.jsActionBtn', function () {

        // identify id.
        var $this = $(this);
        var $parent = $this.parents('.item');
        ew.currentTargetId = $parent.data('index');

        // identify type.
        var type = 3;
        if ($this.parents('#listArea').length !== 0) {
            type = 1;
        } else if ($this.parents('#listDoneEnArea').length !== 0) {
            type = 2;
        }

        // show dialog.
        ew.showDialog({
            type: type,
            english: $parent.find('.en').html(),
            japanese: $parent.find('.jp').html()
        });

        return false;
    });


    // 黒背景を押されたら閉じる
    $('#blackout, #closeDialogBtn').on('tap', function () {
        $('#blackout').addClass('hidden');
        $('#confirmDialog').addClass('hidden');
    });


    /**
     * Highlight Item.
     */
     // $('.listArea').on('click', '.item', function () {

     //    var $this = $(this);

     //    if ($this.hasClass('selected')) {
     //        $this.removeClass('selected');
     //        return false;
     //    }

     //    $('.listArea .item').removeClass('selected');
     //    $this.addClass('selected');
     //    return false;
     // });




    // OnLoad.
    //=====================================================
    $(function () {
        ew.showItemList();        
    });


})();


































// TopページのUI
(function () {

	// Alias.
	var util = ew.util,
		db = ew.db;




	var topList = [];


	// topページを表示する
	ew.showTopPage = function () {

		$('[data-content]').addClass('hidden');
		$('[data-content="top"]').removeClass('hidden');

		// rendering function.
		var renderTopList = function (itemList) {
			var $template = $.templates('#topListTemplate');
			var $parent = $('#topList').empty();
			for (var i = 0; i < itemList.length; i++) {
				var item = itemList[i];
				try {
					var json = JSON.parse(item.json);
					$parent.append($template.render({
						id: item.id,
						time: ew.convertDispTime1(item.insTime),
						userId: item.user_id,
						japanese: json.japanese,
						japanese_deco: ew.createHighlightText(json.japanese, json.rangesJP),
						english: json.english,
						english_deco: ew.createHighlightText(json.english, json.rangesEN),
					}));
				} catch (e) {
					continue;
				}
			}
		};


		// loading data.
		if (util.isOnLine()) {
			$.ajax({
				url: './api/item/list.php',
				data: {type: 'recent'},
				dataType: 'json',
				success: function (itemList) {
					topList = itemList;

					// 今後のオフライン賞に、DBへも保存する。
					db.saveTopPageList(itemList);

					// rendering.
					renderTopList(itemList);
				}
			});			
		
		} else {
			var itemList = db.getTopPageList();
			if (itemList) {
				renderTopList(itemList);
			}
		}





		// Forkボタン
		$('#topList').off('click', '.jsFork').on('click', '.jsFork', function (e) {
			var id = $(this).parents('[data-id]').data('id');
			id = parseInt(id);
			console.debug('fork: ', id);

			// 該当を探す
			var item;
			for (var i = 0; i < topList.length; i++) {
				var anItem = topList[i];
				if (parseInt(anItem.id) === id) {
					item = anItem;
					break;
				}
			}
			if (!item) {
				alert('Fork対象が見つかりません');
				return;
			}

			// 既に保有チェック
			var list = ew.list;
			for (var i = 0; i < list.length; i++) {
				if (list[i].id == item.id) {
					alert('既に保有しています');
					return;
				}
			}

			ew.save(JSON.parse(item.json), function () {
				alert('Fork成功しました');
			});

		});
	};

})();






// 設定等いろいろ
(function () {

	// ログアウト
	$('#logout').on('click', function (e) {

		$.removeCookie('ewords_as_id', { path: '/' });
		ew.list = [];

		alert('ログアウトしました');

		// ログインユーザー名の表示を切り替える.
		ew.util.refreshLoginUserName({type:'logout'});

		e.preventDefault();
		return false;
	});
})();































































