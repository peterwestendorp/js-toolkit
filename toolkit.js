// JSLint options:
/*jslint browser: true,
eqeqeq: true,
immed: false,
newcap: true,
nomen: false,
onevar: true,
plusplus: false,
undef: true,
white: false,
strict: false*/
/*global window, alert, dojo, components, define, console */

var pw = (function(){
  var pubSubTopics = {},
      handleId = 1,
      liveEvents = [],
      bindEvent,
      unbindEvent;

  bindEvent = function(elm, evt, fn){
    // normal browsers
    if(elm.addEventListener){
      elm.addEventListener(evt, fn);
    }
    // internet explorer
    else if(elm.attachEvent){
      elm.attachEvent(evt, fn);
    }
  };

  unbindEvent = function(elm, evt, fn){
    // normal browsers
    if(elm.removeEventListener){
      elm.removeEventListener(evt, fn);
    }
    // internet explorer
    else if(elm.detachEvent){
      elm.detachEvent(evt, fn);
    }
  };

  return {
    // query(str); uses Sizzle selector egine
    // Sizzle v1.9.4-pre | (c) 2013 jQuery Foundation, Inc. | jquery.org/license
    query: (function(e,t){function n(e){return Nt.test(e+"")}function r(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>A.cacheLength&&delete e[t.shift()],e[n]=r}}function o(e){return e[F]=!0,e}function i(e){var t=P.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function u(e,t,n,r){var o,i,u,l,a,c,f,s,d,g;if((t?t.ownerDocument||t:z)!==P&&R(t),t=t||P,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(q&&!r){if(o=xt.exec(e))if(u=o[1]){if(9===l){if(i=t.getElementById(u),!i||!i.parentNode)return n;if(i.id===u)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(u))&&k(t,i)&&i.id===u)return n.push(i),n}else{if(o[2])return nt.apply(n,t.getElementsByTagName(e)),n;if((u=o[3])&&j.getElementsByClassName&&t.getElementsByClassName)return nt.apply(n,t.getElementsByClassName(u)),n}if(j.qsa&&(!H||!H.test(e))){if(s=f=F,d=t,g=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){for(c=p(e),(f=t.getAttribute("id"))?s=f.replace(Et,"\\$&"):t.setAttribute("id",s),s="[id='"+s+"'] ",a=c.length;a--;)c[a]=s+h(c[a]);d=ht.test(e)&&t.parentNode||t,g=c.join(",")}if(g)try{return nt.apply(n,d.querySelectorAll(g)),n}catch(m){}finally{f||t.removeAttribute("id")}}}return C(e.replace(st,"$1"),t,n,r)}function l(e,t){var n=t&&e,r=n&&(~t.sourceIndex||Y)-(~e.sourceIndex||Y);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e,n,r){var o;return r?t:(o=e.getAttributeNode(n))&&o.specified?o.value:e[n]===!0?n.toLowerCase():null}function c(e,n,r){var o;return r?t:o=e.getAttribute(n,"type"===n.toLowerCase()?1:2)}function f(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function s(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function d(e){return o(function(t){return t=+t,o(function(n,r){for(var o,i=e([],n.length,t),u=i.length;u--;)n[o=i[u]]&&(n[o]=!(r[o]=n[o]))})})}function p(e,t){var n,r,o,i,l,a,c,f=X[e+" "];if(f)return t?0:f.slice(0);for(l=e,a=[],c=A.preFilter;l;){(!n||(r=dt.exec(l)))&&(r&&(l=l.slice(r[0].length)||l),a.push(o=[])),n=!1,(r=pt.exec(l))&&(n=r.shift(),o.push({value:n,type:r[0].replace(st," ")}),l=l.slice(n.length));for(i in A.filter)!(r=vt[i].exec(l))||c[i]&&!(r=c[i](r))||(n=r.shift(),o.push({value:n,type:i,matches:r}),l=l.slice(n.length));if(!n)break}return t?l.length:l?u.error(e):X(e,a).slice(0)}function h(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function g(e,t,n){var r=t.dir,o=n&&"parentNode"===r,i=U++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,u){var l,a,c,f=G+" "+i;if(u){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||o)if(c=t[F]||(t[F]={}),(a=c[r])&&a[0]===f){if((l=a[1])===!0||l===T)return l===!0}else if(a=c[r]=[f],a[1]=e(t,n,u)||T,a[1]===!0)return!0}}function m(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1;return!0}:e[0]}function y(e,t,n,r,o){for(var i,u=[],l=0,a=e.length,c=null!=t;a>l;l++)(i=e[l])&&(!n||n(i,r,o))&&(u.push(i),c&&t.push(l));return u}function v(e,t,n,r,i,u){return r&&!r[F]&&(r=v(r)),i&&!i[F]&&(i=v(i,u)),o(function(o,u,l,a){var c,f,s,d=[],p=[],h=u.length,g=o||b(t||"*",l.nodeType?[l]:l,[]),m=!e||!o&&t?g:y(g,d,e,l,a),v=n?i||(o?e:h||r)?[]:u:m;if(n&&n(m,v,l,a),r)for(c=y(v,p),r(c,[],l,a),f=c.length;f--;)(s=c[f])&&(v[p[f]]=!(m[p[f]]=s));if(o){if(i||e){if(i){for(c=[],f=v.length;f--;)(s=v[f])&&c.push(m[f]=s);i(null,v=[],c,a)}for(f=v.length;f--;)(s=v[f])&&(c=i?ot.call(o,s):d[f])>-1&&(o[c]=!(u[c]=s))}}else v=y(v===u?v.splice(h,v.length):v),i?i(null,u,v,a):nt.apply(u,v)})}function N(e){for(var t,n,r,o=e.length,i=A.relative[e[0].type],u=i||A.relative[" "],l=i?1:0,a=g(function(e){return e===t},u,!0),c=g(function(e){return ot.call(t,e)>-1},u,!0),f=[function(e,n,r){return!i&&(r||n!==B)||((t=n).nodeType?a(e,n,r):c(e,n,r))}];o>l;l++)if(n=A.relative[e[l].type])f=[g(m(f),n)];else{if(n=A.filter[e[l].type].apply(null,e[l].matches),n[F]){for(r=++l;o>r&&!A.relative[e[r].type];r++);return v(l>1&&m(f),l>1&&h(e.slice(0,l-1)).replace(st,"$1"),n,r>l&&N(e.slice(l,r)),o>r&&N(e=e.slice(r)),o>r&&h(e))}f.push(n)}return m(f)}function x(e,t){var n=0,r=t.length>0,i=e.length>0,l=function(o,l,a,c,f){var s,d,p,h=[],g=0,m="0",v=o&&[],N=null!=f,x=B,b=o||i&&A.find.TAG("*",f&&l.parentNode||l),C=G+=null==x?1:Math.random()||.1;for(N&&(B=l!==P&&l,T=n);null!=(s=b[m]);m++){if(i&&s){for(d=0;p=e[d++];)if(p(s,l,a)){c.push(s);break}N&&(G=C,T=++n)}r&&((s=!p&&s)&&g--,o&&v.push(s))}if(g+=m,r&&m!==g){for(d=0;p=t[d++];)p(v,h,l,a);if(o){if(g>0)for(;m--;)v[m]||h[m]||(h[m]=et.call(c));h=y(h)}nt.apply(c,h),N&&!o&&h.length>0&&g+t.length>1&&u.uniqueSort(c)}return N&&(G=C,B=x),v};return r?o(l):l}function b(e,t,n){for(var r=0,o=t.length;o>r;r++)u(e,t[r],n);return n}function C(e,t,n,r){var o,i,u,l,a,c=p(e);if(!r&&1===c.length){if(i=c[0]=c[0].slice(0),i.length>2&&"ID"===(u=i[0]).type&&9===t.nodeType&&q&&A.relative[i[1].type]){if(t=(A.find.ID(u.matches[0].replace(wt,Tt),t)||[])[0],!t)return n;e=e.slice(i.shift().value.length)}for(o=vt.needsContext.test(e)?0:i.length;o--&&(u=i[o],!A.relative[l=u.type]);)if((a=A.find[l])&&(r=a(u.matches[0].replace(wt,Tt),ht.test(i[0].type)&&t.parentNode||t))){if(i.splice(o,1),e=r.length&&h(i),!e)return nt.apply(n,r),n;break}}return L(e,c)(r,t,!q,n,ht.test(e)),n}function E(){}var w,T,A,S,D,L,B,I,R,P,$,q,H,M,O,k,F="sizzle"+-new Date,z=e.document,j={},G=0,U=0,V=r(),X=r(),J=r(),K=!1,Q=function(){return 0},W=typeof t,Y=1<<31,Z=j.hasOwnProperty,_=[],et=_.pop,tt=_.push,nt=_.push,rt=_.slice,ot=_.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},it="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ut="[\\x20\\t\\r\\n\\f]",lt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",at=lt.replace("w","w#"),ct="\\["+ut+"*("+lt+")"+ut+"*(?:([*^$|!~]?=)"+ut+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+at+")|)|)"+ut+"*\\]",ft=":("+lt+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ct.replace(3,8)+")*)|.*)\\)|)",st=RegExp("^"+ut+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ut+"+$","g"),dt=RegExp("^"+ut+"*,"+ut+"*"),pt=RegExp("^"+ut+"*([>+~]|"+ut+")"+ut+"*"),ht=RegExp(ut+"*[+~]"),gt=RegExp("="+ut+"*([^\\]'\"]*)"+ut+"*\\]","g"),mt=RegExp(ft),yt=RegExp("^"+at+"$"),vt={ID:RegExp("^#("+lt+")"),CLASS:RegExp("^\\.("+lt+")"),TAG:RegExp("^("+lt.replace("w","w*")+")"),ATTR:RegExp("^"+ct),PSEUDO:RegExp("^"+ft),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ut+"*(even|odd|(([+-]|)(\\d*)n|)"+ut+"*(?:([+-]|)"+ut+"*(\\d+)|))"+ut+"*\\)|)","i"),bool:RegExp("^(?:"+it+")$","i"),needsContext:RegExp("^"+ut+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ut+"*((?:-\\d)?\\d*)"+ut+"*\\)|)(?=[^-]|$)","i")},Nt=/^[^{]+\{\s*\[native \w/,xt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,bt=/^(?:input|select|textarea|button)$/i,Ct=/^h\d$/i,Et=/'|\\/g,wt=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,Tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{nt.apply(_=rt.call(z.childNodes),z.childNodes),_[z.childNodes.length].nodeType}catch(At){nt={apply:_.length?function(e,t){tt.apply(e,rt.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}D=u.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},R=u.setDocument=function(e){var r=e?e.ownerDocument||e:z;return r!==P&&9===r.nodeType&&r.documentElement?(P=r,$=r.documentElement,q=!D(r),j.getElementsByTagName=i(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),j.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),j.getElementsByClassName=i(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),j.sortDetached=i(function(e){return 1&e.compareDocumentPosition(P.createElement("div"))}),j.getById=i(function(e){return $.appendChild(e).id=F,!r.getElementsByName||!r.getElementsByName(F).length}),j.getById?(A.find.ID=function(e,t){if(typeof t.getElementById!==W&&q){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},A.filter.ID=function(e){var t=e.replace(wt,Tt);return function(e){return e.getAttribute("id")===t}}):(A.find.ID=function(e,n){if(typeof n.getElementById!==W&&q){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==W&&r.getAttributeNode("id").value===e?[r]:t:[]}},A.filter.ID=function(e){var t=e.replace(wt,Tt);return function(e){var n=typeof e.getAttributeNode!==W&&e.getAttributeNode("id");return n&&n.value===t}}),A.find.TAG=j.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==W?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e);if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n);return r}return i},A.find.CLASS=j.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==W&&q?n.getElementsByClassName(e):t},M=[],H=[],(j.qsa=n(r.querySelectorAll))&&(i(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||H.push("\\["+ut+"*(?:value|"+it+")"),e.querySelectorAll(":checked").length||H.push(":checked")}),i(function(e){var t=P.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&H.push("[*^$]="+ut+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),H.push(",.*:")})),(j.matchesSelector=n(O=$.webkitMatchesSelector||$.mozMatchesSelector||$.oMatchesSelector||$.msMatchesSelector))&&i(function(e){j.disconnectedMatch=O.call(e,"div"),O.call(e,"[s!='']:x"),M.push("!=",ft)}),H=H.length&&RegExp(H.join("|")),M=M.length&&RegExp(M.join("|")),k=n($.contains)||$.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},Q=$.compareDocumentPosition?function(e,t){if(e===t)return K=!0,0;var n=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return n?1&n||!j.sortDetached&&t.compareDocumentPosition(e)===n?e===r||k(z,e)?-1:t===r||k(z,t)?1:I?ot.call(I,e)-ot.call(I,t):0:4&n?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var n,o=0,i=e.parentNode,u=t.parentNode,a=[e],c=[t];if(e===t)return K=!0,0;if(!i||!u)return e===r?-1:t===r?1:i?-1:u?1:I?ot.call(I,e)-ot.call(I,t):0;if(i===u)return l(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)c.unshift(n);for(;a[o]===c[o];)o++;return o?l(a[o],c[o]):a[o]===z?-1:c[o]===z?1:0},P):P},u.matches=function(e,t){return u(e,null,null,t)},u.matchesSelector=function(e,t){if((e.ownerDocument||e)!==P&&R(e),t=t.replace(gt,"='$1']"),!(!j.matchesSelector||!q||M&&M.test(t)||H&&H.test(t)))try{var n=O.call(e,t);if(n||j.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return u(t,P,null,[e]).length>0},u.contains=function(e,t){return(e.ownerDocument||e)!==P&&R(e),k(e,t)},u.attr=function(e,n){(e.ownerDocument||e)!==P&&R(e);var r=A.attrHandle[n.toLowerCase()],o=r&&(Z.call(A.attrHandle,n.toLowerCase())?r(e,n,!q):t);return o===t?j.attributes||!q?e.getAttribute(n):(o=e.getAttributeNode(n))&&o.specified?o.value:null:o},u.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},u.uniqueSort=function(e){var t,n=[],r=0,o=0;if(K=!j.detectDuplicates,I=!j.sortStable&&e.slice(0),e.sort(Q),K){for(;t=e[o++];)t===e[o]&&(r=n.push(o));for(;r--;)e.splice(n[r],1)}return e},S=u.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=S(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r];r++)n+=S(t);return n},A=u.selectors={cacheLength:50,createPseudo:o,match:vt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(wt,Tt),e[3]=(e[4]||e[5]||"").replace(wt,Tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||u.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&u.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return vt.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&mt.test(n)&&(t=p(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(wt,Tt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=V[e+" "];return t||(t=RegExp("(^|"+ut+")"+e+"("+ut+"|$)"))&&V(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==W&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var o=u.attr(r,e);return null==o?"!="===t:t?(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&o.indexOf(n)>-1:"$="===t?n&&o.slice(-n.length)===n:"~="===t?(" "+o+" ").indexOf(n)>-1:"|="===t?o===n||o.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),u="last"!==e.slice(-4),l="of-type"===t;return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,a){var c,f,s,d,p,h,g=i!==u?"nextSibling":"previousSibling",m=t.parentNode,y=l&&t.nodeName.toLowerCase(),v=!a&&!l;if(m){if(i){for(;g;){for(s=t;s=s[g];)if(l?s.nodeName.toLowerCase()===y:1===s.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[u?m.firstChild:m.lastChild],u&&v){for(f=m[F]||(m[F]={}),c=f[e]||[],p=c[0]===G&&c[1],d=c[0]===G&&c[2],s=p&&m.childNodes[p];s=++p&&s&&s[g]||(d=p=0)||h.pop();)if(1===s.nodeType&&++d&&s===t){f[e]=[G,p,d];break}}else if(v&&(c=(t[F]||(t[F]={}))[e])&&c[0]===G)d=c[1];else for(;(s=++p&&s&&s[g]||(d=p=0)||h.pop())&&((l?s.nodeName.toLowerCase()!==y:1!==s.nodeType)||!++d||(v&&((s[F]||(s[F]={}))[e]=[G,d]),s!==t)););return d-=o,d===r||0===d%r&&d/r>=0}}},PSEUDO:function(e,t){var n,r=A.pseudos[e]||A.setFilters[e.toLowerCase()]||u.error("unsupported pseudo: "+e);return r[F]?r(t):r.length>1?(n=[e,e,"",t],A.setFilters.hasOwnProperty(e.toLowerCase())?o(function(e,n){for(var o,i=r(e,t),u=i.length;u--;)o=ot.call(e,i[u]),e[o]=!(n[o]=i[u])}):function(e){return r(e,0,n)}):r}},pseudos:{not:o(function(e){var t=[],n=[],r=L(e.replace(st,"$1"));return r[F]?o(function(e,t,n,o){for(var i,u=r(e,null,o,[]),l=e.length;l--;)(i=u[l])&&(e[l]=!(t[l]=i))}):function(e,o,i){return t[0]=e,r(t,null,i,n),!n.pop()}}),has:o(function(e){return function(t){return u(e,t).length>0}}),contains:o(function(e){return function(t){return(t.textContent||t.innerText||S(t)).indexOf(e)>-1}}),lang:o(function(e){return yt.test(e||"")||u.error("unsupported lang: "+e),e=e.replace(wt,Tt).toLowerCase(),function(t){var n;do if(n=q?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===$},focus:function(e){return e===P.activeElement&&(!P.hasFocus||P.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!A.pseudos.empty(e)},header:function(e){return Ct.test(e.nodeName)},input:function(e){return bt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:d(function(){return[0]}),last:d(function(e,t){return[t-1]}),eq:d(function(e,t,n){return[0>n?n+t:n]}),even:d(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:d(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:d(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:d(function(e,t,n){for(var r=0>n?n+t:n;t>++r;)e.push(r);return e})}};for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})A.pseudos[w]=f(w);for(w in{submit:!0,reset:!0})A.pseudos[w]=s(w);L=u.compile=function(e,t){var n,r=[],o=[],i=J[e+" "];if(!i){for(t||(t=p(e)),n=t.length;n--;)i=N(t[n]),i[F]?r.push(i):o.push(i);i=J(e,x(o,r))}return i},A.pseudos.nth=A.pseudos.eq,E.prototype=A.filters=A.pseudos,A.setFilters=new E,j.sortStable=F.split("").sort(Q).join("")===F,R(),[0,0].sort(Q),j.detectDuplicates=K,i(function(e){if(e.innerHTML="<a href='#'></a>","#"!==e.firstChild.getAttribute("href"))for(var t="type|href|height|width".split("|"),n=t.length;n--;)A.attrHandle[t[n]]=c}),i(function(e){if(null!=e.getAttribute("disabled"))for(var t=it.split("|"),n=t.length;n--;)A.attrHandle[t[n]]=a}),"function"==typeof define&&define.amd?define(function(){return u}):e.Sizzle=u; return Sizzle;})(window),

    // based on: https://github.com/addyosmani/jquery.parts/blob/master/jquery.documentReady.js
    DOMReady: function(fn){
      var toplevel,
          isReady = false,
          document = window.document,
          readyBound = false;

      function doScrollCheck(){
        if(isReady){
          return;
        }
        try{
          document.documentElement.doScroll("left");
        } catch(error){
          setTimeout(doScrollCheck, 1);
          return;
        }
        ready();
      }

      function ready(){
        if(!isReady){
          if (!document.body){
            return setTimeout(ready, 1);
          }
          isReady = true;

          // call the function that the user wanted to call on DOM load
          fn();
        }
      }

      function unbindEvents(){
        if(document.addEventListener){
          document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
        }
        else {
            document.detachEvent( "onreadystatechange", DOMContentLoaded );
        }
        ready();
      }

      function bindEvents(){
        if(readyBound){
          return;
        }
        readyBound = true;

        if(document.readyState === "complete"){
          ready();
        }

        if(document.addEventListener){
          document.addEventListener("DOMContentLoaded", unbindEvents, false);
          window.addEventListener("load", unbindEvents, false);
        }
        else if(document.attachEvent){
          document.attachEvent("onreadystatechange", unbindEvents);
          window.attachEvent("onload", unbindEvents);
          try {
            toplevel = window.frameElement == null;
          } catch(e){}
          if(document.documentElement.doScroll && toplevel){
            doScrollCheck();
          }
        }
      }

      bindEvents();
    },

    // byId(str) returns node
    byId: function(id){
      return document.getElementById(id);
    },
    // proxy(obj, fn)
    proxy: function(scope, fn){
      return function(){
        fn.apply(scope, arguments || []);
      };
    },
    // forEach(arr, fn, obj)
    forEach: function(arr, fn, thisObj) {
      var i = 0, l = arr && arr.length || 0;
      if(thisObj){
        for(; i < l; ++i){
          fn.call(thisObj, arr[i], i, arr);
        }
      }else{
        for(; i < l; ++i){
          fn(arr[i], i, arr);
        }
      }
    },
    // addClass(obj || str, str) returns node
    addClass: function(elm, cName){
      if(typeof elm === "string"){
        elm = this.byId(elm);
      }

      var curClasses = elm.className.split(" "),
      duplicate = false,
      i;

      this.forEach(curClasses, function(classStr){
        // if class is already there, return
        if(classStr === cName){
          duplicate = true;
        }
      });

      if(!duplicate){
        elm.className += (" "+cName);
      }

      return elm;
    },
    // removeClass(obj || str, str) returns node
    removeClass: function(elm, cName){
      if(typeof n === "string"){
        elm = this.byId(elm);
      }

      var curClasses = elm.className.split(" "),
      i, prefix;

      this.forEach(curClasses, function(classStr, i){
        prefix = " ";

        // remove all classes, and don't add space prefix to first class
        if(i === 0){
          elm.className = "";
          prefix = "";
        }

        // add the classes again, except the one we want to remove
        if(classStr !== cName){
          elm.className += prefix+classStr;
        }
      });

      return elm;
    },
    // hasClass(obj || str, str) returns boolean
    hasClass: function(elm, cName){
      if(typeof elm === "string"){
        elm = this.byId(elm);
      }

      var curClasses = elm.className.split(" "),
          returnValue = false,
          i;

      this.forEach(curClasses, function(classStr, i){
        if(classStr === cName){
          returnValue = true;
        }
      });

      return returnValue;
    },
    attr: function(elm, attr, val){
      if(typeof elm === "string"){
        elm = this.byId(elm);
      }

      if(arguments.length === 2){
        return elm.getAttribute(attr);
      }
      if(arguments.length === 3) {
        elm.setAttribute(attr, val);
      }
    },
    // style(obj || str, str, str)
    // 2 args is getter, 3 args is setter
    style: function(elm, property, val){
      if(typeof elm === "string"){
        elm = this.byId(elm);
      }

      if(arguments.length === 2){
        // normal browsers
        if(window.getComputedStyle){
          return window.getComputedStyle(elm).getPropertyValue(property);
        }
        // internet explorer
        else if(elm.currentStyle) {
          return elm.currentStyle.getPropertyValue(property);
        }

      }
      if(arguments.length === 3){
        elm.style[property] = val;
      }
    },
    // subscribe(str, fn) returns handle
    subscribe: function(topic, fn){
      var i = 0,
          returnValue = handleId;
      // if the topic is already registered
      if(!pubSubTopics[topic]){
        pubSubTopics[topic] = [];
      }

      // add item to topic array, item includes unique handle and an action
      pubSubTopics[topic].push({handle: handleId, callback:fn});
      handleId++;

      return returnValue;
    },
    // unsubscribe(handle)
    unsubscribe: function(handle){
      var clearSubscr,
          item;

      clearSubscr = this.proxy(this, function(item){
        this.forEach(pubSubTopics[item], function(subscr, i){
          if(subscr.handle === handle){
            pubSubTopics[item] = pubSubTopics[item].slice(0,i).concat(pubSubTopics[item].slice(i+1, pubSubTopics[item].length));
          }
        });
      });
      for(item in pubSubTopics){
        clearSubscr(item);
      }
    },
    // publish(str, any)
    publish: function(topic, eventData){
      this.forEach(pubSubTopics[topic], function(item){
        item.callback(eventData);
      });
    },
    // on(obj || str, str, fn)
    // if 1st arg == string, than it's live
    on: function(elm, evt, fn){
      // 'live' event listener
      if(typeof elm === "string"){
        var selector = elm,
            elements = this.query(selector);

        if(!elements.length){
          throw new Error('no matching elements found for "'+selector+'"');
        }

        bindEvent(document, evt, this.proxy(this, function(e){
          var evtTarget = e.target;

          this.forEach(elements, this.proxy(this, function(item){
            if(evtTarget === item){
              fn.call(this);
            }
          }));
        }));
      }
      // regular event listener
      else {
        bindEvent(elm, evt, fn);
      }
    },
    // off(obj, str, fn)
    // PLEASE NOTE: you can't unbind live events at the moment
    off: function(elm, evt, fn){
      unbindEvent(elm, evt, fn);
    },
    // stopEvent(obj)
    stopEvent: function(evt){
      // normal browsers
      if(evt.stopPropagation && evt.preventDefault){
        evt.stopPropagation();
        evt.preventDefault();
      }
      // internet explorer
      else if(evt.cancelBubble && evt.returnValue) {
        evt.cancelBubble = true;
        evt.returnValue = false;
      }
    },
    // createClass()
    createClass: function(){
      // TODO
    },
    // animate(obj, obj, fn)
    animate: function(elm, props, fn){
      // TODO: init CSS animation
    },
    // callUrl()
    callUrl: function(){
      // TODO, don't forget promises
      // ajax / jsonp / iframe
    }
  };
})();
