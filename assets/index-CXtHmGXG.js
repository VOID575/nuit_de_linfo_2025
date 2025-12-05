function iS(s,e){for(var i=0;i<e.length;i++){const r=e[i];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in s)){const c=Object.getOwnPropertyDescriptor(r,l);c&&Object.defineProperty(s,l,c.get?c:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function aS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ud={exports:{}},jo={};var hg;function rS(){if(hg)return jo;hg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return jo.Fragment=e,jo.jsx=i,jo.jsxs=i,jo}var pg;function sS(){return pg||(pg=1,Ud.exports=rS()),Ud.exports}var V=sS(),Ld={exports:{}},Yo={},Nd={exports:{}},Od={};var mg;function oS(){return mg||(mg=1,(function(s){function e(D,j){var I=D.length;D.push(j);e:for(;0<I;){var ce=I-1>>>1,ve=D[ce];if(0<l(ve,j))D[ce]=j,D[I]=ve,I=ce;else break e}}function i(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var j=D[0],I=D.pop();if(I!==j){D[0]=I;e:for(var ce=0,ve=D.length,z=ve>>>1;ce<z;){var te=2*(ce+1)-1,xe=D[te],Se=te+1,Pe=D[Se];if(0>l(xe,I))Se<ve&&0>l(Pe,xe)?(D[ce]=Pe,D[Se]=I,ce=Se):(D[ce]=xe,D[te]=I,ce=te);else if(Se<ve&&0>l(Pe,I))D[ce]=Pe,D[Se]=I,ce=Se;else break e}}return j}function l(D,j){var I=D.sortIndex-j.sortIndex;return I!==0?I:D.id-j.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,x=null,_=3,S=!1,E=!1,M=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function O(D){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=D)r(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=i(p)}}function F(D){if(M=!1,O(D),!E)if(i(m)!==null)E=!0,N||(N=!0,Y());else{var j=i(p);j!==null&&K(F,j.startTime-D)}}var N=!1,B=-1,W=5,L=-1;function R(){return y?!0:!(s.unstable_now()-L<W)}function H(){if(y=!1,N){var D=s.unstable_now();L=D;var j=!0;try{e:{E=!1,M&&(M=!1,U(B),B=-1),S=!0;var I=_;try{t:{for(O(D),x=i(m);x!==null&&!(x.expirationTime>D&&R());){var ce=x.callback;if(typeof ce=="function"){x.callback=null,_=x.priorityLevel;var ve=ce(x.expirationTime<=D);if(D=s.unstable_now(),typeof ve=="function"){x.callback=ve,O(D),j=!0;break t}x===i(m)&&r(m),O(D)}else r(m);x=i(m)}if(x!==null)j=!0;else{var z=i(p);z!==null&&K(F,z.startTime-D),j=!1}}break e}finally{x=null,_=I,S=!1}j=void 0}}finally{j?Y():N=!1}}}var Y;if(typeof C=="function")Y=function(){C(H)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,de=oe.port2;oe.port1.onmessage=H,Y=function(){de.postMessage(null)}}else Y=function(){v(H,0)};function K(D,j){B=v(function(){D(s.unstable_now())},j)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(D){switch(_){case 1:case 2:case 3:var j=3;break;default:j=_}var I=_;_=j;try{return D()}finally{_=I}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=_;_=D;try{return j()}finally{_=I}},s.unstable_scheduleCallback=function(D,j,I){var ce=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?ce+I:ce):I=ce,D){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=I+ve,D={id:g++,callback:j,priorityLevel:D,startTime:I,expirationTime:ve,sortIndex:-1},I>ce?(D.sortIndex=I,e(p,D),i(m)===null&&D===i(p)&&(M?(U(B),B=-1):M=!0,K(F,I-ce))):(D.sortIndex=ve,e(m,D),E||S||(E=!0,N||(N=!0,Y()))),D},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(D){var j=_;return function(){var I=_;_=j;try{return D.apply(this,arguments)}finally{_=I}}}})(Od)),Od}var xg;function lS(){return xg||(xg=1,Nd.exports=oS()),Nd.exports}var Pd={exports:{}},ct={};var gg;function cS(){if(gg)return ct;gg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function S(z){return z===null||typeof z!="object"?null:(z=_&&z[_]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function v(z,te,xe){this.props=z,this.context=te,this.refs=y,this.updater=xe||E}v.prototype.isReactComponent={},v.prototype.setState=function(z,te){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,te,"setState")},v.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function U(){}U.prototype=v.prototype;function C(z,te,xe){this.props=z,this.context=te,this.refs=y,this.updater=xe||E}var O=C.prototype=new U;O.constructor=C,M(O,v.prototype),O.isPureReactComponent=!0;var F=Array.isArray;function N(){}var B={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function L(z,te,xe){var Se=xe.ref;return{$$typeof:s,type:z,key:te,ref:Se!==void 0?Se:null,props:xe}}function R(z,te){return L(z.type,te,z.props)}function H(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function Y(z){var te={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(xe){return te[xe]})}var oe=/\/+/g;function de(z,te){return typeof z=="object"&&z!==null&&z.key!=null?Y(""+z.key):te.toString(36)}function K(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(N,N):(z.status="pending",z.then(function(te){z.status==="pending"&&(z.status="fulfilled",z.value=te)},function(te){z.status==="pending"&&(z.status="rejected",z.reason=te)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function D(z,te,xe,Se,Pe){var re=typeof z;(re==="undefined"||re==="boolean")&&(z=null);var le=!1;if(z===null)le=!0;else switch(re){case"bigint":case"string":case"number":le=!0;break;case"object":switch(z.$$typeof){case s:case e:le=!0;break;case g:return le=z._init,D(le(z._payload),te,xe,Se,Pe)}}if(le)return Pe=Pe(z),le=Se===""?"."+de(z,0):Se,F(Pe)?(xe="",le!=null&&(xe=le.replace(oe,"$&/")+"/"),D(Pe,te,xe,"",function(Ve){return Ve})):Pe!=null&&(H(Pe)&&(Pe=R(Pe,xe+(Pe.key==null||z&&z.key===Pe.key?"":(""+Pe.key).replace(oe,"$&/")+"/")+le)),te.push(Pe)),1;le=0;var De=Se===""?".":Se+":";if(F(z))for(var Ie=0;Ie<z.length;Ie++)Se=z[Ie],re=De+de(Se,Ie),le+=D(Se,te,xe,re,Pe);else if(Ie=S(z),typeof Ie=="function")for(z=Ie.call(z),Ie=0;!(Se=z.next()).done;)Se=Se.value,re=De+de(Se,Ie++),le+=D(Se,te,xe,re,Pe);else if(re==="object"){if(typeof z.then=="function")return D(K(z),te,xe,Se,Pe);throw te=String(z),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return le}function j(z,te,xe){if(z==null)return z;var Se=[],Pe=0;return D(z,Se,"","",function(re){return te.call(xe,re,Pe++)}),Se}function I(z){if(z._status===-1){var te=z._result;te=te(),te.then(function(xe){(z._status===0||z._status===-1)&&(z._status=1,z._result=xe)},function(xe){(z._status===0||z._status===-1)&&(z._status=2,z._result=xe)}),z._status===-1&&(z._status=0,z._result=te)}if(z._status===1)return z._result.default;throw z._result}var ce=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},ve={map:j,forEach:function(z,te,xe){j(z,function(){te.apply(this,arguments)},xe)},count:function(z){var te=0;return j(z,function(){te++}),te},toArray:function(z){return j(z,function(te){return te})||[]},only:function(z){if(!H(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ct.Activity=x,ct.Children=ve,ct.Component=v,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=C,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ct.__COMPILER_RUNTIME={__proto__:null,c:function(z){return B.H.useMemoCache(z)}},ct.cache=function(z){return function(){return z.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(z,te,xe){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Se=M({},z.props),Pe=z.key;if(te!=null)for(re in te.key!==void 0&&(Pe=""+te.key),te)!W.call(te,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&te.ref===void 0||(Se[re]=te[re]);var re=arguments.length-2;if(re===1)Se.children=xe;else if(1<re){for(var le=Array(re),De=0;De<re;De++)le[De]=arguments[De+2];Se.children=le}return L(z.type,Pe,Se)},ct.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},ct.createElement=function(z,te,xe){var Se,Pe={},re=null;if(te!=null)for(Se in te.key!==void 0&&(re=""+te.key),te)W.call(te,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(Pe[Se]=te[Se]);var le=arguments.length-2;if(le===1)Pe.children=xe;else if(1<le){for(var De=Array(le),Ie=0;Ie<le;Ie++)De[Ie]=arguments[Ie+2];Pe.children=De}if(z&&z.defaultProps)for(Se in le=z.defaultProps,le)Pe[Se]===void 0&&(Pe[Se]=le[Se]);return L(z,re,Pe)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(z){return{$$typeof:h,render:z}},ct.isValidElement=H,ct.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:I}},ct.memo=function(z,te){return{$$typeof:p,type:z,compare:te===void 0?null:te}},ct.startTransition=function(z){var te=B.T,xe={};B.T=xe;try{var Se=z(),Pe=B.S;Pe!==null&&Pe(xe,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(N,ce)}catch(re){ce(re)}finally{te!==null&&xe.types!==null&&(te.types=xe.types),B.T=te}},ct.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ct.use=function(z){return B.H.use(z)},ct.useActionState=function(z,te,xe){return B.H.useActionState(z,te,xe)},ct.useCallback=function(z,te){return B.H.useCallback(z,te)},ct.useContext=function(z){return B.H.useContext(z)},ct.useDebugValue=function(){},ct.useDeferredValue=function(z,te){return B.H.useDeferredValue(z,te)},ct.useEffect=function(z,te){return B.H.useEffect(z,te)},ct.useEffectEvent=function(z){return B.H.useEffectEvent(z)},ct.useId=function(){return B.H.useId()},ct.useImperativeHandle=function(z,te,xe){return B.H.useImperativeHandle(z,te,xe)},ct.useInsertionEffect=function(z,te){return B.H.useInsertionEffect(z,te)},ct.useLayoutEffect=function(z,te){return B.H.useLayoutEffect(z,te)},ct.useMemo=function(z,te){return B.H.useMemo(z,te)},ct.useOptimistic=function(z,te){return B.H.useOptimistic(z,te)},ct.useReducer=function(z,te,xe){return B.H.useReducer(z,te,xe)},ct.useRef=function(z){return B.H.useRef(z)},ct.useState=function(z){return B.H.useState(z)},ct.useSyncExternalStore=function(z,te,xe){return B.H.useSyncExternalStore(z,te,xe)},ct.useTransition=function(){return B.H.useTransition()},ct.version="19.2.1",ct}var vg;function pp(){return vg||(vg=1,Pd.exports=cS()),Pd.exports}var zd={exports:{}},zn={};var _g;function uS(){if(_g)return zn;_g=1;var s=pp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,zn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},zn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},zn.requestFormReset=function(m){r.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},zn.useFormStatus=function(){return f.H.useHostTransitionStatus()},zn.version="19.2.1",zn}var yg;function fS(){if(yg)return zd.exports;yg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),zd.exports=uS(),zd.exports}var bg;function dS(){if(bg)return Yo;bg=1;var s=lS(),e=pp(),i=fS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var b=!1,A=u.child;A;){if(A===a){b=!0,a=u,o=d;break}if(A===o){b=!0,o=u,a=d;break}A=A.sibling}if(!b){for(A=d.child;A;){if(A===a){b=!0,a=d,o=u;break}if(A===o){b=!0,o=d,a=u;break}A=A.sibling}if(!b)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),C=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case N:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case C:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}var K=Array.isArray,D=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},ce=[],ve=-1;function z(t){return{current:t}}function te(t){0>ve||(t.current=ce[ve],ce[ve]=null,ve--)}function xe(t,n){ve++,ce[ve]=t.current,t.current=n}var Se=z(null),Pe=z(null),re=z(null),le=z(null);function De(t,n){switch(xe(re,n),xe(Pe,t),xe(Se,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?zx(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=zx(n),t=Ix(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(Se),xe(Se,t)}function Ie(){te(Se),te(Pe),te(re)}function Ve(t){t.memoizedState!==null&&xe(le,t);var n=Se.current,a=Ix(n,t.type);n!==a&&(xe(Pe,t),xe(Se,a))}function ot(t){Pe.current===t&&(te(Se),te(Pe)),le.current===t&&(te(le),ko._currentValue=I)}var Qt,mt;function Lt(t){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",mt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+t+mt}var k=!1;function xt(t,n){if(!t||k)return"";k=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(he){var se=he}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(he){se=he}t.call(ye.prototype)}}else{try{throw Error()}catch(he){se=he}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(he){if(he&&se&&typeof he.stack=="string")return[he.stack,se.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),b=d[0],A=d[1];if(b&&A){var G=b.split(`
`),ie=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===ie.length)for(o=G.length-1,u=ie.length-1;1<=o&&0<=u&&G[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==ie[u]){var me=`
`+G[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{k=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Lt(a):""}function _t(t,n){switch(t.tag){case 26:case 27:case 5:return Lt(t.type);case 16:return Lt("Lazy");case 13:return t.child!==n&&n!==null?Lt("Suspense Fallback"):Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 15:return xt(t.type,!1);case 11:return xt(t.type.render,!1);case 1:return xt(t.type,!0);case 31:return Lt("Activity");default:return""}}function Ht(t){try{var n="",a=null;do n+=_t(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ke=Object.prototype.hasOwnProperty,Yt=s.unstable_scheduleCallback,Qe=s.unstable_cancelCallback,lt=s.unstable_shouldYield,P=s.unstable_requestPaint,T=s.unstable_now,ne=s.unstable_getCurrentPriorityLevel,_e=s.unstable_ImmediatePriority,Me=s.unstable_UserBlockingPriority,pe=s.unstable_NormalPriority,Ze=s.unstable_LowPriority,Ne=s.unstable_IdlePriority,et=s.log,Ye=s.unstable_setDisableYieldValue,Ee=null,Ae=null;function Ke(t){if(typeof et=="function"&&Ye(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Ee,t)}catch{}}var Xe=Math.clz32?Math.clz32:X,ze=Math.log,rt=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(ze(t)/rt|0)|0}var Ue=256,Ce=262144,we=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function be(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Te(o):(b&=A,b!==0?u=Te(b):a||(a=A&~t,a!==0&&(u=Te(a))))):(A=o&~d,A!==0?u=Te(A):b!==0?u=Te(b):a||(a=o&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Fe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function st(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(){var t=we;return we<<=1,(we&62914560)===0&&(we=4194304),t}function Nt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Pn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Qn(t,n,a,o,u,d){var b=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,G=t.expirationTimes,ie=t.hiddenUpdates;for(a=b&~a;0<a;){var me=31-Xe(a),ye=1<<me;A[me]=0,G[me]=-1;var se=ie[me];if(se!==null)for(ie[me]=null,me=0;me<se.length;me++){var he=se[me];he!==null&&(he.lane&=-536870913)}a&=~ye}o!==0&&vl(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(b&~n))}function vl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Xe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function eo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Xe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function to(t,n){var a=n&-n;return a=(a&42)!==0?1:bi(a),(a&(t.suspendedLanes|n))!==0?0:a}function bi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function dr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function no(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:sg(t.type))}function io(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var Jn=Math.random().toString(36).slice(2),dn="__reactFiber$"+Jn,vn="__reactProps$"+Jn,Wi="__reactContainer$"+Jn,Xr="__reactEvents$"+Jn,Eu="__reactListeners$"+Jn,Tu="__reactHandles$"+Jn,_l="__reactResources$"+Jn,hr="__reactMarker$"+Jn;function ao(t){delete t[dn],delete t[vn],delete t[Xr],delete t[Eu],delete t[Tu]}function wa(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Wi]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Xx(t);t!==null;){if(a=t[dn])return a;t=Xx(t)}return n}t=a,a=t.parentNode}return null}function w(t){if(t=t[dn]||t[Wi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Q(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ue(t){var n=t[_l];return n||(n=t[_l]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ae(t){t[hr]=!0}var $=new Set,Re={};function Le(t,n){Be(t,n),Be(t+"Capture",n)}function Be(t,n){for(Re[t]=n,t=0;t<n.length;t++)$.add(n[t])}var He=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},at={};function Je(t){return ke.call(at,t)?!0:ke.call(nt,t)?!1:He.test(t)?at[t]=!0:(nt[t]=!0,!1)}function dt(t,n,a){if(Je(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Dt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ot(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function At(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ft(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){a=""+b,d.call(this,b)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(b){a=""+b},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Zt(t){if(!t._valueTracker){var n=Ft(t)?"checked":"value";t._valueTracker=tt(t,n,""+t[n])}}function Rt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Ft(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function En(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Da=/[\n"\\]/g;function Jt(t){return t.replace(Da,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function qi(t,n,a,o,u,d,b,A){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),n!=null?b==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+At(n)):t.value!==""+At(n)&&(t.value=""+At(n)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,b,At(n)):a!=null?Tn(t,b,At(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+At(A):t.removeAttribute("name")}function $t(t,n,a,o,u,d,b,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Zt(t);return}a=a!=null?""+At(a):"",n=n!=null?""+At(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),Zt(t)}function Tn(t,n,a){n==="number"&&En(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _n(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+At(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function An(t,n,a){if(n!=null&&(n=""+At(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+At(a):""}function wn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(K(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=At(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Zt(t)}function Oi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var ji=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Np(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||ji.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Op(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Np(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Np(t,d,n[d])}function Au(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ey=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yl(t){return ey.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var Ru=null;function Cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wr=null,qr=null;function Pp(t){var n=w(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;e:switch(t=n.stateNode,n.type){case"input":if(qi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Jt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[vn]||null;if(!u)throw Error(r(90));qi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Rt(o)}break e;case"textarea":An(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&_n(t,!!a.multiple,n,!1)}}}var wu=!1;function zp(t,n,a){if(wu)return t(n,a);wu=!0;try{var o=t(n);return o}finally{if(wu=!1,(Wr!==null||qr!==null)&&(oc(),Wr&&(n=Wr,t=qr,qr=Wr=null,Pp(n),t)))for(n=0;n<t.length;n++)Pp(t[n])}}function ro(t,n){var a=t.stateNode;if(a===null)return null;var o=a[vn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Du=!1;if(Zi)try{var so={};Object.defineProperty(so,"passive",{get:function(){Du=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Du=!1}var Ua=null,Uu=null,bl=null;function Ip(){if(bl)return bl;var t,n=Uu,a=n.length,o,u="value"in Ua?Ua.value:Ua.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var b=a-t;for(o=1;o<=b&&n[a-o]===u[d-o];o++);return bl=u.slice(t,1<o?1-o:void 0)}function Sl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ml(){return!0}function Bp(){return!1}function Vn(t){function n(a,o,u,d,b){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ml:Bp,this.isPropagationStopped=Bp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),n}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=Vn(pr),oo=x({},pr,{view:0,detail:0}),ty=Vn(oo),Lu,Nu,lo,Tl=x({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(Lu=t.screenX-lo.screenX,Nu=t.screenY-lo.screenY):Nu=Lu=0,lo=t),Lu)},movementY:function(t){return"movementY"in t?t.movementY:Nu}}),Fp=Vn(Tl),ny=x({},Tl,{dataTransfer:0}),iy=Vn(ny),ay=x({},oo,{relatedTarget:0}),Ou=Vn(ay),ry=x({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),sy=Vn(ry),oy=x({},pr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ly=Vn(oy),cy=x({},pr,{data:0}),Hp=Vn(cy),uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=dy[t])?!!n[t]:!1}function Pu(){return hy}var py=x({},oo,{key:function(t){if(t.key){var n=uy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),my=Vn(py),xy=x({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=Vn(xy),gy=x({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),vy=Vn(gy),_y=x({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),yy=Vn(_y),by=x({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sy=Vn(by),My=x({},pr,{newState:0,oldState:0}),Ey=Vn(My),Ty=[9,13,27,32],zu=Zi&&"CompositionEvent"in window,co=null;Zi&&"documentMode"in document&&(co=document.documentMode);var Ay=Zi&&"TextEvent"in window&&!co,Vp=Zi&&(!zu||co&&8<co&&11>=co),kp=" ",Xp=!1;function Wp(t,n){switch(t){case"keyup":return Ty.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function Ry(t,n){switch(t){case"compositionend":return qp(n);case"keypress":return n.which!==32?null:(Xp=!0,kp);case"textInput":return t=n.data,t===kp&&Xp?null:t;default:return null}}function Cy(t,n){if(jr)return t==="compositionend"||!zu&&Wp(t,n)?(t=Ip(),bl=Uu=Ua=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Vp&&n.locale!=="ko"?null:n.data;default:return null}}var wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!wy[t.type]:n==="textarea"}function Yp(t,n,a,o){Wr?qr?qr.push(o):qr=[o]:Wr=o,n=pc(n,"onChange"),0<n.length&&(a=new El("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var uo=null,fo=null;function Dy(t){Dx(t,0)}function Al(t){var n=Q(t);if(Rt(n))return t}function Zp(t,n){if(t==="change")return n}var Kp=!1;if(Zi){var Iu;if(Zi){var Bu="oninput"in document;if(!Bu){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),Bu=typeof Qp.oninput=="function"}Iu=Bu}else Iu=!1;Kp=Iu&&(!document.documentMode||9<document.documentMode)}function Jp(){uo&&(uo.detachEvent("onpropertychange",$p),fo=uo=null)}function $p(t){if(t.propertyName==="value"&&Al(fo)){var n=[];Yp(n,fo,t,Cu(t)),zp(Dy,n)}}function Uy(t,n,a){t==="focusin"?(Jp(),uo=n,fo=a,uo.attachEvent("onpropertychange",$p)):t==="focusout"&&Jp()}function Ly(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Al(fo)}function Ny(t,n){if(t==="click")return Al(n)}function Oy(t,n){if(t==="input"||t==="change")return Al(n)}function Py(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:Py;function ho(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ke.call(n,u)||!$n(t[u],n[u]))return!1}return!0}function em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tm(t,n){var a=em(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=em(a)}}function nm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?nm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function im(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=En(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=En(t.document)}return n}function Fu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var zy=Zi&&"documentMode"in document&&11>=document.documentMode,Yr=null,Hu=null,po=null,Gu=!1;function am(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gu||Yr==null||Yr!==En(o)||(o=Yr,"selectionStart"in o&&Fu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),po&&ho(po,o)||(po=o,o=pc(Hu,"onSelect"),0<o.length&&(n=new El("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Yr)))}function mr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Zr={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionrun:mr("Transition","TransitionRun"),transitionstart:mr("Transition","TransitionStart"),transitioncancel:mr("Transition","TransitionCancel"),transitionend:mr("Transition","TransitionEnd")},Vu={},rm={};Zi&&(rm=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function xr(t){if(Vu[t])return Vu[t];if(!Zr[t])return t;var n=Zr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in rm)return Vu[t]=n[a];return t}var sm=xr("animationend"),om=xr("animationiteration"),lm=xr("animationstart"),Iy=xr("transitionrun"),By=xr("transitionstart"),Fy=xr("transitioncancel"),cm=xr("transitionend"),um=new Map,ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ku.push("scrollEnd");function Si(t,n){um.set(t,n),Le(n,[t])}var Rl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ci=[],Kr=0,Xu=0;function Cl(){for(var t=Kr,n=Xu=Kr=0;n<t;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var d=ci[n];if(ci[n++]=null,o!==null&&u!==null){var b=o.pending;b===null?u.next=u:(u.next=b.next,b.next=u),o.pending=u}d!==0&&fm(a,u,d)}}function wl(t,n,a,o){ci[Kr++]=t,ci[Kr++]=n,ci[Kr++]=a,ci[Kr++]=o,Xu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Wu(t,n,a,o){return wl(t,n,a,o),Dl(t)}function gr(t,n){return wl(t,null,null,n),Dl(t)}function fm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Xe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Dl(t){if(50<zo)throw zo=0,td=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Qr={};function Hy(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,n,a,o){return new Hy(t,n,a,o)}function qu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ki(t,n){var a=t.alternate;return a===null?(a=ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function dm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ul(t,n,a,o,u,d){var b=0;if(o=t,typeof t=="function")qu(t)&&(b=1);else if(typeof t=="string")b=Wb(t,a,Se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=ei(31,a,n,u),t.elementType=L,t.lanes=d,t;case M:return vr(a.children,u,d,n);case y:b=8,u|=24;break;case v:return t=ei(12,a,n,u|2),t.elementType=v,t.lanes=d,t;case F:return t=ei(13,a,n,u),t.elementType=F,t.lanes=d,t;case N:return t=ei(19,a,n,u),t.elementType=N,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:b=10;break e;case U:b=9;break e;case O:b=11;break e;case B:b=14;break e;case W:b=16,o=null;break e}b=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ei(b,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function vr(t,n,a,o){return t=ei(7,t,o,n),t.lanes=a,t}function ju(t,n,a){return t=ei(6,t,null,n),t.lanes=a,t}function hm(t){var n=ei(18,null,null,0);return n.stateNode=t,n}function Yu(t,n,a){return n=ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var pm=new WeakMap;function ui(t,n){if(typeof t=="object"&&t!==null){var a=pm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ht(n)},pm.set(t,n),n)}return{value:t,source:n,stack:Ht(n)}}var Jr=[],$r=0,Ll=null,mo=0,fi=[],di=0,La=null,Pi=1,zi="";function Qi(t,n){Jr[$r++]=mo,Jr[$r++]=Ll,Ll=t,mo=n}function mm(t,n,a){fi[di++]=Pi,fi[di++]=zi,fi[di++]=La,La=t;var o=Pi;t=zi;var u=32-Xe(o)-1;o&=~(1<<u),a+=1;var d=32-Xe(n)+u;if(30<d){var b=u-u%5;d=(o&(1<<b)-1).toString(32),o>>=b,u-=b,Pi=1<<32-Xe(n)+u|a<<u|o,zi=d+t}else Pi=1<<d|a<<u|o,zi=t}function Zu(t){t.return!==null&&(Qi(t,1),mm(t,1,0))}function Ku(t){for(;t===Ll;)Ll=Jr[--$r],Jr[$r]=null,mo=Jr[--$r],Jr[$r]=null;for(;t===La;)La=fi[--di],fi[di]=null,zi=fi[--di],fi[di]=null,Pi=fi[--di],fi[di]=null}function xm(t,n){fi[di++]=Pi,fi[di++]=zi,fi[di++]=La,Pi=n.id,zi=n.overflow,La=t}var Dn=null,en=null,Ct=!1,Na=null,hi=!1,Qu=Error(r(519));function Oa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(ui(n,t)),Qu}function gm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[dn]=t,n[vn]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<Bo.length;a++)St(Bo[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),$t(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),wn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ox(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Oa(t,!0)}function vm(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:Dn=Dn.return}}function es(t){if(t!==Dn)return!1;if(!Ct)return vm(t),Ct=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||xd(t.type,t.memoizedProps)),a=!a),a&&en&&Oa(t),vm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));en=kx(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));en=kx(t)}else n===27?(n=en,Ya(t.type)?(t=bd,bd=null,en=t):en=n):en=Dn?mi(t.stateNode.nextSibling):null;return!0}function _r(){en=Dn=null,Ct=!1}function Ju(){var t=Na;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Na=null),t}function xo(t){Na===null?Na=[t]:Na.push(t)}var $u=z(null),yr=null,Ji=null;function Pa(t,n,a){xe($u,n._currentValue),n._currentValue=a}function $i(t){t._currentValue=$u.current,te($u)}function ef(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function tf(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var b=u.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),ef(d.return,a,t),o||(b=null);break e}d=A.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(r(341));b.lanes|=a,d=b.alternate,d!==null&&(d.lanes|=a),ef(b,a,t),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===t){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function ts(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(r(387));if(b=b.memoizedProps,b!==null){var A=u.type;$n(u.pendingProps.value,b.value)||(t!==null?t.push(A):t=[A])}}else if(u===le.current){if(b=u.alternate,b===null)throw Error(r(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ko):t=[ko])}u=u.return}t!==null&&tf(n,t,a,o),n.flags|=262144}function Nl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function br(t){yr=t,Ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Un(t){return _m(yr,t)}function Ol(t,n){return yr===null&&br(t),_m(t,n)}function _m(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(t===null)throw Error(r(308));Ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ji=Ji.next=n;return a}var Gy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Vy=s.unstable_scheduleCallback,ky=s.unstable_NormalPriority,hn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nf(){return{controller:new Gy,data:new Map,refCount:0}}function go(t){t.refCount--,t.refCount===0&&Vy(ky,function(){t.controller.abort()})}var vo=null,af=0,ns=0,is=null;function Xy(t,n){if(vo===null){var a=vo=[];af=0,ns=od(),is={status:"pending",value:void 0,then:function(o){a.push(o)}}}return af++,n.then(ym,ym),n}function ym(){if(--af===0&&vo!==null){is!==null&&(is.status="fulfilled");var t=vo;vo=null,ns=0,is=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Wy(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var bm=D.S;D.S=function(t,n){ax=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Xy(t,n),bm!==null&&bm(t,n)};var Sr=z(null);function rf(){var t=Sr.current;return t!==null?t:Kt.pooledCache}function Pl(t,n){n===null?xe(Sr,Sr.current):xe(Sr,n.pool)}function Sm(){var t=rf();return t===null?null:{parent:hn._currentValue,pool:t}}var as=Error(r(460)),sf=Error(r(474)),zl=Error(r(542)),Il={then:function(){}};function Mm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Em(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Am(t),t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Am(t),t}throw Er=n,as}}function Mr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Er=a,as):a}}var Er=null;function Tm(){if(Er===null)throw Error(r(459));var t=Er;return Er=null,t}function Am(t){if(t===as||t===zl)throw Error(r(483))}var rs=null,_o=0;function Bl(t){var n=_o;return _o+=1,rs===null&&(rs=[]),Em(rs,t,n)}function yo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Fl(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Rm(t){function n(J,q){if(t){var ee=J.deletions;ee===null?(J.deletions=[q],J.flags|=16):ee.push(q)}}function a(J,q){if(!t)return null;for(;q!==null;)n(J,q),q=q.sibling;return null}function o(J){for(var q=new Map;J!==null;)J.key!==null?q.set(J.key,J):q.set(J.index,J),J=J.sibling;return q}function u(J,q){return J=Ki(J,q),J.index=0,J.sibling=null,J}function d(J,q,ee){return J.index=ee,t?(ee=J.alternate,ee!==null?(ee=ee.index,ee<q?(J.flags|=67108866,q):ee):(J.flags|=67108866,q)):(J.flags|=1048576,q)}function b(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function A(J,q,ee,ge){return q===null||q.tag!==6?(q=ju(ee,J.mode,ge),q.return=J,q):(q=u(q,ee),q.return=J,q)}function G(J,q,ee,ge){var $e=ee.type;return $e===M?me(J,q,ee.props.children,ge,ee.key):q!==null&&(q.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===W&&Mr($e)===q.type)?(q=u(q,ee.props),yo(q,ee),q.return=J,q):(q=Ul(ee.type,ee.key,ee.props,null,J.mode,ge),yo(q,ee),q.return=J,q)}function ie(J,q,ee,ge){return q===null||q.tag!==4||q.stateNode.containerInfo!==ee.containerInfo||q.stateNode.implementation!==ee.implementation?(q=Yu(ee,J.mode,ge),q.return=J,q):(q=u(q,ee.children||[]),q.return=J,q)}function me(J,q,ee,ge,$e){return q===null||q.tag!==7?(q=vr(ee,J.mode,ge,$e),q.return=J,q):(q=u(q,ee),q.return=J,q)}function ye(J,q,ee){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=ju(""+q,J.mode,ee),q.return=J,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case S:return ee=Ul(q.type,q.key,q.props,null,J.mode,ee),yo(ee,q),ee.return=J,ee;case E:return q=Yu(q,J.mode,ee),q.return=J,q;case W:return q=Mr(q),ye(J,q,ee)}if(K(q)||Y(q))return q=vr(q,J.mode,ee,null),q.return=J,q;if(typeof q.then=="function")return ye(J,Bl(q),ee);if(q.$$typeof===C)return ye(J,Ol(J,q),ee);Fl(J,q)}return null}function se(J,q,ee,ge){var $e=q!==null?q.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return $e!==null?null:A(J,q,""+ee,ge);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:return ee.key===$e?G(J,q,ee,ge):null;case E:return ee.key===$e?ie(J,q,ee,ge):null;case W:return ee=Mr(ee),se(J,q,ee,ge)}if(K(ee)||Y(ee))return $e!==null?null:me(J,q,ee,ge,null);if(typeof ee.then=="function")return se(J,q,Bl(ee),ge);if(ee.$$typeof===C)return se(J,q,Ol(J,ee),ge);Fl(J,ee)}return null}function he(J,q,ee,ge,$e){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return J=J.get(ee)||null,A(q,J,""+ge,$e);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case S:return J=J.get(ge.key===null?ee:ge.key)||null,G(q,J,ge,$e);case E:return J=J.get(ge.key===null?ee:ge.key)||null,ie(q,J,ge,$e);case W:return ge=Mr(ge),he(J,q,ee,ge,$e)}if(K(ge)||Y(ge))return J=J.get(ee)||null,me(q,J,ge,$e,null);if(typeof ge.then=="function")return he(J,q,ee,Bl(ge),$e);if(ge.$$typeof===C)return he(J,q,ee,Ol(q,ge),$e);Fl(q,ge)}return null}function Ge(J,q,ee,ge){for(var $e=null,Pt=null,je=q,ht=q=0,Et=null;je!==null&&ht<ee.length;ht++){je.index>ht?(Et=je,je=null):Et=je.sibling;var zt=se(J,je,ee[ht],ge);if(zt===null){je===null&&(je=Et);break}t&&je&&zt.alternate===null&&n(J,je),q=d(zt,q,ht),Pt===null?$e=zt:Pt.sibling=zt,Pt=zt,je=Et}if(ht===ee.length)return a(J,je),Ct&&Qi(J,ht),$e;if(je===null){for(;ht<ee.length;ht++)je=ye(J,ee[ht],ge),je!==null&&(q=d(je,q,ht),Pt===null?$e=je:Pt.sibling=je,Pt=je);return Ct&&Qi(J,ht),$e}for(je=o(je);ht<ee.length;ht++)Et=he(je,J,ht,ee[ht],ge),Et!==null&&(t&&Et.alternate!==null&&je.delete(Et.key===null?ht:Et.key),q=d(Et,q,ht),Pt===null?$e=Et:Pt.sibling=Et,Pt=Et);return t&&je.forEach(function($a){return n(J,$a)}),Ct&&Qi(J,ht),$e}function it(J,q,ee,ge){if(ee==null)throw Error(r(151));for(var $e=null,Pt=null,je=q,ht=q=0,Et=null,zt=ee.next();je!==null&&!zt.done;ht++,zt=ee.next()){je.index>ht?(Et=je,je=null):Et=je.sibling;var $a=se(J,je,zt.value,ge);if($a===null){je===null&&(je=Et);break}t&&je&&$a.alternate===null&&n(J,je),q=d($a,q,ht),Pt===null?$e=$a:Pt.sibling=$a,Pt=$a,je=Et}if(zt.done)return a(J,je),Ct&&Qi(J,ht),$e;if(je===null){for(;!zt.done;ht++,zt=ee.next())zt=ye(J,zt.value,ge),zt!==null&&(q=d(zt,q,ht),Pt===null?$e=zt:Pt.sibling=zt,Pt=zt);return Ct&&Qi(J,ht),$e}for(je=o(je);!zt.done;ht++,zt=ee.next())zt=he(je,J,ht,zt.value,ge),zt!==null&&(t&&zt.alternate!==null&&je.delete(zt.key===null?ht:zt.key),q=d(zt,q,ht),Pt===null?$e=zt:Pt.sibling=zt,Pt=zt);return t&&je.forEach(function(nS){return n(J,nS)}),Ct&&Qi(J,ht),$e}function qt(J,q,ee,ge){if(typeof ee=="object"&&ee!==null&&ee.type===M&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:e:{for(var $e=ee.key;q!==null;){if(q.key===$e){if($e=ee.type,$e===M){if(q.tag===7){a(J,q.sibling),ge=u(q,ee.props.children),ge.return=J,J=ge;break e}}else if(q.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===W&&Mr($e)===q.type){a(J,q.sibling),ge=u(q,ee.props),yo(ge,ee),ge.return=J,J=ge;break e}a(J,q);break}else n(J,q);q=q.sibling}ee.type===M?(ge=vr(ee.props.children,J.mode,ge,ee.key),ge.return=J,J=ge):(ge=Ul(ee.type,ee.key,ee.props,null,J.mode,ge),yo(ge,ee),ge.return=J,J=ge)}return b(J);case E:e:{for($e=ee.key;q!==null;){if(q.key===$e)if(q.tag===4&&q.stateNode.containerInfo===ee.containerInfo&&q.stateNode.implementation===ee.implementation){a(J,q.sibling),ge=u(q,ee.children||[]),ge.return=J,J=ge;break e}else{a(J,q);break}else n(J,q);q=q.sibling}ge=Yu(ee,J.mode,ge),ge.return=J,J=ge}return b(J);case W:return ee=Mr(ee),qt(J,q,ee,ge)}if(K(ee))return Ge(J,q,ee,ge);if(Y(ee)){if($e=Y(ee),typeof $e!="function")throw Error(r(150));return ee=$e.call(ee),it(J,q,ee,ge)}if(typeof ee.then=="function")return qt(J,q,Bl(ee),ge);if(ee.$$typeof===C)return qt(J,q,Ol(J,ee),ge);Fl(J,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,q!==null&&q.tag===6?(a(J,q.sibling),ge=u(q,ee),ge.return=J,J=ge):(a(J,q),ge=ju(ee,J.mode,ge),ge.return=J,J=ge),b(J)):a(J,q)}return function(J,q,ee,ge){try{_o=0;var $e=qt(J,q,ee,ge);return rs=null,$e}catch(je){if(je===as||je===zl)throw je;var Pt=ei(29,je,null,J.mode);return Pt.lanes=ge,Pt.return=J,Pt}finally{}}}var Tr=Rm(!0),Cm=Rm(!1),za=!1;function of(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Bt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Dl(t),fm(t,null,a),n}return wl(t,o,n,a),Dl(t)}function bo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,eo(t,a)}}function cf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=b:d=d.next=b,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var uf=!1;function So(){if(uf){var t=is;if(t!==null)throw t}}function Mo(t,n,a,o){uf=!1;var u=t.updateQueue;za=!1;var d=u.firstBaseUpdate,b=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,ie=G.next;G.next=null,b===null?d=ie:b.next=ie,b=G;var me=t.alternate;me!==null&&(me=me.updateQueue,A=me.lastBaseUpdate,A!==b&&(A===null?me.firstBaseUpdate=ie:A.next=ie,me.lastBaseUpdate=G))}if(d!==null){var ye=u.baseState;b=0,me=ie=G=null,A=d;do{var se=A.lane&-536870913,he=se!==A.lane;if(he?(Mt&se)===se:(o&se)===se){se!==0&&se===ns&&(uf=!0),me!==null&&(me=me.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ge=t,it=A;se=n;var qt=a;switch(it.tag){case 1:if(Ge=it.payload,typeof Ge=="function"){ye=Ge.call(qt,ye,se);break e}ye=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=it.payload,se=typeof Ge=="function"?Ge.call(qt,ye,se):Ge,se==null)break e;ye=x({},ye,se);break e;case 2:za=!0}}se=A.callback,se!==null&&(t.flags|=64,he&&(t.flags|=8192),he=u.callbacks,he===null?u.callbacks=[se]:he.push(se))}else he={lane:se,tag:A.tag,payload:A.payload,callback:A.callback,next:null},me===null?(ie=me=he,G=ye):me=me.next=he,b|=se;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;he=A,A=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);me===null&&(G=ye),u.baseState=G,u.firstBaseUpdate=ie,u.lastBaseUpdate=me,d===null&&(u.shared.lanes=0),ka|=b,t.lanes=b,t.memoizedState=ye}}function wm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Dm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)wm(a[t],n)}var ss=z(null),Hl=z(0);function Um(t,n){t=la,xe(Hl,t),xe(ss,n),la=t|n.baseLanes}function ff(){xe(Hl,la),xe(ss,ss.current)}function df(){la=Hl.current,te(ss),te(Hl)}var ti=z(null),pi=null;function Fa(t){var n=t.alternate;xe(cn,cn.current&1),xe(ti,t),pi===null&&(n===null||ss.current!==null||n.memoizedState!==null)&&(pi=t)}function hf(t){xe(cn,cn.current),xe(ti,t),pi===null&&(pi=t)}function Lm(t){t.tag===22?(xe(cn,cn.current),xe(ti,t),pi===null&&(pi=t)):Ha()}function Ha(){xe(cn,cn.current),xe(ti,ti.current)}function ni(t){te(ti),pi===t&&(pi=null),te(cn)}var cn=z(0);function Gl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||_d(a)||yd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,ft=null,Xt=null,pn=null,Vl=!1,os=!1,Ar=!1,kl=0,Eo=0,ls=null,qy=0;function rn(){throw Error(r(321))}function pf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!$n(t[a],n[a]))return!1;return!0}function mf(t,n,a,o,u,d){return ea=d,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=t===null||t.memoizedState===null?m0:Df,Ar=!1,d=a(o,u),Ar=!1,os&&(d=Om(n,a,o,u)),Nm(t),d}function Nm(t){D.H=Ro;var n=Xt!==null&&Xt.next!==null;if(ea=0,pn=Xt=ft=null,Vl=!1,Eo=0,ls=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&Nl(t)&&(mn=!0))}function Om(t,n,a,o){ft=t;var u=0;do{if(os&&(ls=null),Eo=0,os=!1,25<=u)throw Error(r(301));if(u+=1,pn=Xt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}D.H=x0,d=n(a,o)}while(os);return d}function jy(){var t=D.H,n=t.useState()[0];return n=typeof n.then=="function"?To(n):n,t=t.useState()[0],(Xt!==null?Xt.memoizedState:null)!==t&&(ft.flags|=1024),n}function xf(){var t=kl!==0;return kl=0,t}function gf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function vf(t){if(Vl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Vl=!1}ea=0,pn=Xt=ft=null,os=!1,Eo=kl=0,ls=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ft.memoizedState=pn=t:pn=pn.next=t,pn}function un(){if(Xt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var n=pn===null?ft.memoizedState:pn.next;if(n!==null)pn=n,Xt=t;else{if(t===null)throw ft.alternate===null?Error(r(467)):Error(r(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},pn===null?ft.memoizedState=pn=t:pn=pn.next=t}return pn}function Xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(t){var n=Eo;return Eo+=1,ls===null&&(ls=[]),t=Em(ls,t,n),n=ft,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?m0:Df),t}function Wl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return To(t);if(t.$$typeof===C)return Un(t)}throw Error(r(438,String(t)))}function _f(t){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Xl(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=R;return n.index++,a}function ta(t,n){return typeof n=="function"?n(t):n}function ql(t){var n=un();return yf(n,Xt,t)}function yf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var b=u.next;u.next=d.next,d.next=b}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var A=b=null,G=null,ie=n,me=!1;do{var ye=ie.lane&-536870913;if(ye!==ie.lane?(Mt&ye)===ye:(ea&ye)===ye){var se=ie.revertLane;if(se===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),ye===ns&&(me=!0);else if((ea&se)===se){ie=ie.next,se===ns&&(me=!0);continue}else ye={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},G===null?(A=G=ye,b=d):G=G.next=ye,ft.lanes|=se,ka|=se;ye=ie.action,Ar&&a(d,ye),d=ie.hasEagerState?ie.eagerState:a(d,ye)}else se={lane:ye,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},G===null?(A=G=se,b=d):G=G.next=se,ft.lanes|=ye,ka|=ye;ie=ie.next}while(ie!==null&&ie!==n);if(G===null?b=d:G.next=A,!$n(d,t.memoizedState)&&(mn=!0,me&&(a=is,a!==null)))throw a;t.memoizedState=d,t.baseState=b,t.baseQueue=G,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function bf(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do d=t(d,b.action),b=b.next;while(b!==u);$n(d,n.memoizedState)||(mn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Pm(t,n,a){var o=ft,u=un(),d=Ct;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var b=!$n((Xt||u).memoizedState,a);if(b&&(u.memoizedState=a,mn=!0),u=u.queue,Ef(Bm.bind(null,o,u,t),[t]),u.getSnapshot!==n||b||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,cs(9,{destroy:void 0},Im.bind(null,o,u,a,n),null),Kt===null)throw Error(r(349));d||(ea&127)!==0||zm(o,n,a)}return a}function zm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=Xl(),ft.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Im(t,n,a,o){n.value=a,n.getSnapshot=o,Fm(n)&&Hm(t)}function Bm(t,n,a){return a(function(){Fm(n)&&Hm(t)})}function Fm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!$n(t,a)}catch{return!0}}function Hm(t){var n=gr(t,2);n!==null&&jn(n,t,2)}function Sf(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),Ar){Ke(!0);try{a()}finally{Ke(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},n}function Gm(t,n,a,o){return t.baseState=a,yf(t,Xt,typeof o=="function"?o:ta)}function Yy(t,n,a,o,u){if(Zl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};D.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Vm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Vm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=D.T,b={};D.T=b;try{var A=a(u,o),G=D.S;G!==null&&G(b,A),km(t,n,A)}catch(ie){Mf(t,n,ie)}finally{d!==null&&b.types!==null&&(d.types=b.types),D.T=d}}else try{d=a(u,o),km(t,n,d)}catch(ie){Mf(t,n,ie)}}function km(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Xm(t,n,o)},function(o){return Mf(t,n,o)}):Xm(t,n,a)}function Xm(t,n,a){n.status="fulfilled",n.value=a,Wm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Vm(t,a)))}function Mf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Wm(n),n=n.next;while(n!==o)}t.action=null}function Wm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function qm(t,n){return n}function jm(t,n){if(Ct){var a=Kt.formState;if(a!==null){e:{var o=ft;if(Ct){if(en){t:{for(var u=en,d=hi;u.nodeType!==8;){if(!d){u=null;break t}if(u=mi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){en=mi(u.nextSibling),o=u.data==="F!";break e}}Oa(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qm,lastRenderedState:n},a.queue=o,a=d0.bind(null,ft,o),o.dispatch=a,o=Sf(!1),d=wf.bind(null,ft,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Yy.bind(null,ft,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Ym(t){var n=un();return Zm(n,Xt,t)}function Zm(t,n,a){if(n=yf(t,n,qm)[0],t=ql(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=To(n)}catch(b){throw b===as?zl:b}else o=n;n=un();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,cs(9,{destroy:void 0},Zy.bind(null,u,a),null)),[o,d,t]}function Zy(t,n){t.action=n}function Km(t){var n=un(),a=Xt;if(a!==null)return Zm(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function cs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ft.updateQueue,n===null&&(n=Xl(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Qm(){return un().memoizedState}function jl(t,n,a,o){var u=Fn();ft.flags|=t,u.memoizedState=cs(1|n,{destroy:void 0},a,o===void 0?null:o)}function Yl(t,n,a,o){var u=un();o=o===void 0?null:o;var d=u.memoizedState.inst;Xt!==null&&o!==null&&pf(o,Xt.memoizedState.deps)?u.memoizedState=cs(n,d,a,o):(ft.flags|=t,u.memoizedState=cs(1|n,d,a,o))}function Jm(t,n){jl(8390656,8,t,n)}function Ef(t,n){Yl(2048,8,t,n)}function Ky(t){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=Xl(),ft.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function $m(t){var n=un().memoizedState;return Ky({ref:n,nextImpl:t}),function(){if((Bt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function e0(t,n){return Yl(4,2,t,n)}function t0(t,n){return Yl(4,4,t,n)}function n0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function i0(t,n,a){a=a!=null?a.concat([t]):null,Yl(4,4,n0.bind(null,n,t),a)}function Tf(){}function a0(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&pf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function r0(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&pf(n,o[1]))return o[0];if(o=t(),Ar){Ke(!0);try{t()}finally{Ke(!1)}}return a.memoizedState=[o,n],o}function Af(t,n,a){return a===void 0||(ea&1073741824)!==0&&(Mt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=sx(),ft.lanes|=t,ka|=t,a)}function s0(t,n,a,o){return $n(a,n)?a:ss.current!==null?(t=Af(t,a,o),$n(t,n)||(mn=!0),t):(ea&42)===0||(ea&1073741824)!==0&&(Mt&261930)===0?(mn=!0,t.memoizedState=a):(t=sx(),ft.lanes|=t,ka|=t,n)}function o0(t,n,a,o,u){var d=j.p;j.p=d!==0&&8>d?d:8;var b=D.T,A={};D.T=A,wf(t,!1,n,a);try{var G=u(),ie=D.S;if(ie!==null&&ie(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var me=Wy(G,o);Ao(t,n,me,ri(t))}else Ao(t,n,o,ri(t))}catch(ye){Ao(t,n,{then:function(){},status:"rejected",reason:ye},ri())}finally{j.p=d,b!==null&&A.types!==null&&(b.types=A.types),D.T=b}}function Qy(){}function Rf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=l0(t).queue;o0(t,u,n,I,a===null?Qy:function(){return c0(t),a(o)})}function l0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:I},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function c0(t){var n=l0(t);n.next===null&&(n=t.alternate.memoizedState),Ao(t,n.next.queue,{},ri())}function Cf(){return Un(ko)}function u0(){return un().memoizedState}function f0(){return un().memoizedState}function Jy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();t=Ia(a);var o=Ba(n,t,a);o!==null&&(jn(o,n,a),bo(o,n,a)),n={cache:nf()},t.payload=n;return}n=n.return}}function $y(t,n,a){var o=ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Zl(t)?h0(n,a):(a=Wu(t,n,a,o),a!==null&&(jn(a,t,o),p0(a,n,o)))}function d0(t,n,a){var o=ri();Ao(t,n,a,o)}function Ao(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zl(t))h0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var b=n.lastRenderedState,A=d(b,a);if(u.hasEagerState=!0,u.eagerState=A,$n(A,b))return wl(t,n,u,0),Kt===null&&Cl(),!1}catch{}finally{}if(a=Wu(t,n,u,o),a!==null)return jn(a,t,o),p0(a,n,o),!0}return!1}function wf(t,n,a,o){if(o={lane:2,revertLane:od(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Zl(t)){if(n)throw Error(r(479))}else n=Wu(t,a,o,2),n!==null&&jn(n,t,2)}function Zl(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function h0(t,n){os=Vl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function p0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,eo(t,a)}}var Ro={readContext:Un,use:Wl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};Ro.useEffectEvent=rn;var m0={readContext:Un,use:Wl,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:Un,useEffect:Jm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,jl(4194308,4,n0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return jl(4194308,4,t,n)},useInsertionEffect:function(t,n){jl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var o=t();if(Ar){Ke(!0);try{t()}finally{Ke(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Fn();if(a!==void 0){var u=a(n);if(Ar){Ke(!0);try{a(n)}finally{Ke(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=$y.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Sf(t);var n=t.queue,a=d0.bind(null,ft,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Tf,useDeferredValue:function(t,n){var a=Fn();return Af(a,t,n)},useTransition:function(){var t=Sf(!1);return t=o0.bind(null,ft,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ft,u=Fn();if(Ct){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Kt===null)throw Error(r(349));(Mt&127)!==0||zm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Jm(Bm.bind(null,o,d,t),[t]),o.flags|=2048,cs(9,{destroy:void 0},Im.bind(null,o,d,a,n),null),a},useId:function(){var t=Fn(),n=Kt.identifierPrefix;if(Ct){var a=zi,o=Pi;a=(o&~(1<<32-Xe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=kl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=qy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Cf,useFormState:jm,useActionState:jm,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=wf.bind(null,ft,!0,a),a.dispatch=n,[t,n]},useMemoCache:_f,useCacheRefresh:function(){return Fn().memoizedState=Jy.bind(null,ft)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Bt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Df={readContext:Un,use:Wl,useCallback:a0,useContext:Un,useEffect:Ef,useImperativeHandle:i0,useInsertionEffect:e0,useLayoutEffect:t0,useMemo:r0,useReducer:ql,useRef:Qm,useState:function(){return ql(ta)},useDebugValue:Tf,useDeferredValue:function(t,n){var a=un();return s0(a,Xt.memoizedState,t,n)},useTransition:function(){var t=ql(ta)[0],n=un().memoizedState;return[typeof t=="boolean"?t:To(t),n]},useSyncExternalStore:Pm,useId:u0,useHostTransitionStatus:Cf,useFormState:Ym,useActionState:Ym,useOptimistic:function(t,n){var a=un();return Gm(a,Xt,t,n)},useMemoCache:_f,useCacheRefresh:f0};Df.useEffectEvent=$m;var x0={readContext:Un,use:Wl,useCallback:a0,useContext:Un,useEffect:Ef,useImperativeHandle:i0,useInsertionEffect:e0,useLayoutEffect:t0,useMemo:r0,useReducer:bf,useRef:Qm,useState:function(){return bf(ta)},useDebugValue:Tf,useDeferredValue:function(t,n){var a=un();return Xt===null?Af(a,t,n):s0(a,Xt.memoizedState,t,n)},useTransition:function(){var t=bf(ta)[0],n=un().memoizedState;return[typeof t=="boolean"?t:To(t),n]},useSyncExternalStore:Pm,useId:u0,useHostTransitionStatus:Cf,useFormState:Km,useActionState:Km,useOptimistic:function(t,n){var a=un();return Xt!==null?Gm(a,Xt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:_f,useCacheRefresh:f0};x0.useEffectEvent=$m;function Uf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Lf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ri(),u=Ia(o);u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(jn(n,t,o),bo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ri(),u=Ia(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(jn(n,t,o),bo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ri(),o=Ia(a);o.tag=2,n!=null&&(o.callback=n),n=Ba(t,o,a),n!==null&&(jn(n,t,a),bo(n,t,a))}};function g0(t,n,a,o,u,d,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,b):n.prototype&&n.prototype.isPureReactComponent?!ho(a,o)||!ho(u,d):!0}function v0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Lf.enqueueReplaceState(n,n.state,null)}function Rr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function _0(t){Rl(t)}function y0(t){console.error(t)}function b0(t){Rl(t)}function Kl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function S0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Nf(t,n,a){return a=Ia(a),a.tag=3,a.payload={element:null},a.callback=function(){Kl(t,n)},a}function M0(t){return t=Ia(t),t.tag=3,t}function E0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){S0(n,a,o)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){S0(n,a,o),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function eb(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ts(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?lc():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Il?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ad(t,o,u)),!1;case 22:return a.flags|=65536,o===Il?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ad(t,o,u)),!1}throw Error(r(435,a.tag))}return ad(t,o,u),lc(),!1}if(Ct)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Qu&&(t=Error(r(422),{cause:o}),xo(ui(t,a)))):(o!==Qu&&(n=Error(r(423),{cause:o}),xo(ui(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ui(o,a),u=Nf(t.stateNode,o,u),cf(t,u),sn!==4&&(sn=2)),!1;var d=Error(r(520),{cause:o});if(d=ui(d,a),Po===null?Po=[d]:Po.push(d),sn!==4&&(sn=2),n===null)return!0;o=ui(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Nf(a.stateNode,o,t),cf(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Xa===null||!Xa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=M0(u),E0(u,t,a,o),cf(a,u),!1}a=a.return}while(a!==null);return!1}var Of=Error(r(461)),mn=!1;function Ln(t,n,a,o){n.child=t===null?Cm(n,null,a,o):Tr(n,t.child,a,o)}function T0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var b={};for(var A in o)A!=="ref"&&(b[A]=o[A])}else b=o;return br(n),o=mf(t,n,a,b,d,u),A=xf(),t!==null&&!mn?(gf(t,n,u),na(t,n,u)):(Ct&&A&&Zu(n),n.flags|=1,Ln(t,n,o,u),n.child)}function A0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!qu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,R0(t,n,d,o,u)):(t=Ul(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Vf(t,u)){var b=d.memoizedProps;if(a=a.compare,a=a!==null?a:ho,a(b,o)&&t.ref===n.ref)return na(t,n,u)}return n.flags|=1,t=Ki(d,o),t.ref=n.ref,t.return=n,n.child=t}function R0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(ho(d,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=d,Vf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,na(t,n,u)}return Pf(t,n,a,o,u)}function C0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return w0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pl(n,d!==null?d.cachePool:null),d!==null?Um(n,d):ff(),Lm(n);else return o=n.lanes=536870912,w0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Pl(n,d.cachePool),Um(n,d),Ha(),n.memoizedState=null):(t!==null&&Pl(n,null),ff(),Ha());return Ln(t,n,u,a),n.child}function Co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function w0(t,n,a,o,u){var d=rf();return d=d===null?null:{parent:hn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Pl(n,null),ff(),Lm(n),t!==null&&ts(t,n,o,!0),n.childLanes=u,null}function Ql(t,n){return n=$l({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function D0(t,n,a){return Tr(n,t.child,null,a),t=Ql(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function tb(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ct){if(o.mode==="hidden")return t=Ql(n,o),n.lanes=536870912,Co(null,t);if(hf(n),(t=en)?(t=Vx(t,hi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=hm(t),a.return=n,n.child=a,Dn=n,en=null)):t=null,t===null)throw Oa(n);return n.lanes=536870912,null}return Ql(n,o)}var d=t.memoizedState;if(d!==null){var b=d.dehydrated;if(hf(n),u)if(n.flags&256)n.flags&=-257,n=D0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(mn||ts(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(o=Kt,o!==null&&(b=to(o,a),b!==0&&b!==d.retryLane))throw d.retryLane=b,gr(t,b),jn(o,t,b),Of;lc(),n=D0(t,n,a)}else t=d.treeContext,en=mi(b.nextSibling),Dn=n,Ct=!0,Na=null,hi=!1,t!==null&&xm(n,t),n=Ql(n,o),n.flags|=4096;return n}return t=Ki(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Jl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Pf(t,n,a,o,u){return br(n),a=mf(t,n,a,o,void 0,u),o=xf(),t!==null&&!mn?(gf(t,n,u),na(t,n,u)):(Ct&&o&&Zu(n),n.flags|=1,Ln(t,n,a,u),n.child)}function U0(t,n,a,o,u,d){return br(n),n.updateQueue=null,a=Om(n,o,a,u),Nm(t),o=xf(),t!==null&&!mn?(gf(t,n,d),na(t,n,d)):(Ct&&o&&Zu(n),n.flags|=1,Ln(t,n,a,d),n.child)}function L0(t,n,a,o,u){if(br(n),n.stateNode===null){var d=Qr,b=a.contextType;typeof b=="object"&&b!==null&&(d=Un(b)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Lf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},of(n),b=a.contextType,d.context=typeof b=="object"&&b!==null?Un(b):Qr,d.state=n.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(Uf(n,a,b,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&Lf.enqueueReplaceState(d,d.state,null),Mo(n,o,d,u),So(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var A=n.memoizedProps,G=Rr(a,A);d.props=G;var ie=d.context,me=a.contextType;b=Qr,typeof me=="object"&&me!==null&&(b=Un(me));var ye=a.getDerivedStateFromProps;me=typeof ye=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,me||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||ie!==b)&&v0(n,d,o,b),za=!1;var se=n.memoizedState;d.state=se,Mo(n,o,d,u),So(),ie=n.memoizedState,A||se!==ie||za?(typeof ye=="function"&&(Uf(n,a,ye,o),ie=n.memoizedState),(G=za||g0(n,a,G,o,se,ie,b))?(me||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),d.props=o,d.state=ie,d.context=b,o=G):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,lf(t,n),b=n.memoizedProps,me=Rr(a,b),d.props=me,ye=n.pendingProps,se=d.context,ie=a.contextType,G=Qr,typeof ie=="object"&&ie!==null&&(G=Un(ie)),A=a.getDerivedStateFromProps,(ie=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==ye||se!==G)&&v0(n,d,o,G),za=!1,se=n.memoizedState,d.state=se,Mo(n,o,d,u),So();var he=n.memoizedState;b!==ye||se!==he||za||t!==null&&t.dependencies!==null&&Nl(t.dependencies)?(typeof A=="function"&&(Uf(n,a,A,o),he=n.memoizedState),(me=za||g0(n,a,me,o,se,he,G)||t!==null&&t.dependencies!==null&&Nl(t.dependencies))?(ie||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,he,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,he,G)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=he),d.props=o,d.state=he,d.context=G,o=me):(typeof d.componentDidUpdate!="function"||b===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Jl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Tr(n,t.child,null,u),n.child=Tr(n,null,a,u)):Ln(t,n,a,u),n.memoizedState=d.state,t=n.child):t=na(t,n,u),t}function N0(t,n,a,o){return _r(),n.flags|=256,Ln(t,n,a,o),n.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function If(t){return{baseLanes:t,cachePool:Sm()}}function Bf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function O0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,b;if((b=d)||(b=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),b&&(u=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ct){if(u?Fa(n):Ha(),(t=en)?(t=Vx(t,hi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=hm(t),a.return=n,n.child=a,Dn=n,en=null)):t=null,t===null)throw Oa(n);return yd(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ha(),u=n.mode,A=$l({mode:"hidden",children:A},u),o=vr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=If(a),o.childLanes=Bf(t,b,a),n.memoizedState=zf,Co(null,o)):(Fa(n),Ff(n,A))}var G=t.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(d)n.flags&256?(Fa(n),n.flags&=-257,n=Hf(t,n,a)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,n=null):(Ha(),A=o.fallback,u=n.mode,o=$l({mode:"visible",children:o.children},u),A=vr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Tr(n,t.child,null,a),o=n.child,o.memoizedState=If(a),o.childLanes=Bf(t,b,a),n.memoizedState=zf,n=Co(null,o));else if(Fa(n),yd(A)){if(b=A.nextSibling&&A.nextSibling.dataset,b)var ie=b.dgst;b=ie,o=Error(r(419)),o.stack="",o.digest=b,xo({value:o,source:null,stack:null}),n=Hf(t,n,a)}else if(mn||ts(t,n,a,!1),b=(a&t.childLanes)!==0,mn||b){if(b=Kt,b!==null&&(o=to(b,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,gr(t,o),jn(b,t,o),Of;_d(A)||lc(),n=Hf(t,n,a)}else _d(A)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,en=mi(A.nextSibling),Dn=n,Ct=!0,Na=null,hi=!1,t!==null&&xm(n,t),n=Ff(n,o.children),n.flags|=4096);return n}return u?(Ha(),A=o.fallback,u=n.mode,G=t.child,ie=G.sibling,o=Ki(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,ie!==null?A=Ki(ie,A):(A=vr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Co(null,o),o=n.child,A=t.child.memoizedState,A===null?A=If(a):(u=A.cachePool,u!==null?(G=hn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Sm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Bf(t,b,a),n.memoizedState=zf,Co(t.child,o)):(Fa(n),a=t.child,t=a.sibling,a=Ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(b=n.deletions,b===null?(n.deletions=[t],n.flags|=16):b.push(t)),n.child=a,n.memoizedState=null,a)}function Ff(t,n){return n=$l({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function $l(t,n){return t=ei(22,t,null,n),t.lanes=0,t}function Hf(t,n,a){return Tr(n,t.child,null,a),t=Ff(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function P0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ef(t.return,n,a)}function Gf(t,n,a,o,u,d){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(b.isBackwards=n,b.rendering=null,b.renderingStartTime=0,b.last=o,b.tail=a,b.tailMode=u,b.treeForkCount=d)}function z0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var b=cn.current,A=(b&2)!==0;if(A?(b=b&1|2,n.flags|=128):b&=1,xe(cn,b),Ln(t,n,o,a),o=Ct?mo:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&P0(t,a,n);else if(t.tag===19)P0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Gl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Gf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Gl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Gf(n,!0,a,null,d,o);break;case"together":Gf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function na(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ts(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Vf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Nl(t)))}function nb(t,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),Pa(n,hn,t.memoizedState.cache),_r();break;case 27:case 5:Ve(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:Pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,hf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?O0(t,n,a):(Fa(n),t=na(t,n,a),t!==null?t.sibling:null);Fa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ts(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return z0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(cn,cn.current),o)break;return null;case 22:return n.lanes=0,C0(t,n,a,n.pendingProps);case 24:Pa(n,hn,t.memoizedState.cache)}return na(t,n,a)}function I0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!Vf(t,a)&&(n.flags&128)===0)return mn=!1,nb(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Ct&&(n.flags&1048576)!==0&&mm(n,mo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Mr(n.elementType),n.type=t,typeof t=="function")qu(t)?(o=Rr(t,o),n.tag=1,n=L0(null,n,t,o,a)):(n.tag=0,n=Pf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===O){n.tag=11,n=T0(null,n,t,o,a);break e}else if(u===B){n.tag=14,n=A0(null,n,t,o,a);break e}}throw n=de(t)||t,Error(r(306,n,""))}}return n;case 0:return Pf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Rr(o,n.pendingProps),L0(t,n,o,u,a);case 3:e:{if(De(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,lf(t,n),Mo(n,o,null,a);var b=n.memoizedState;if(o=b.cache,Pa(n,hn,o),o!==d.cache&&tf(n,[hn],a,!0),So(),o=b.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=N0(t,n,o,a);break e}else if(o!==u){u=ui(Error(r(424)),n),xo(u),n=N0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=mi(t.firstChild),Dn=n,Ct=!0,Na=null,hi=!0,a=Cm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_r(),o===u){n=na(t,n,a);break e}Ln(t,n,o,a)}n=n.child}return n;case 26:return Jl(t,n),t===null?(a=Yx(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ct||(a=n.type,t=n.pendingProps,o=mc(re.current).createElement(a),o[dn]=n,o[vn]=t,Nn(o,a,t),ae(o),n.stateNode=o):n.memoizedState=Yx(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ve(n),t===null&&Ct&&(o=n.stateNode=Wx(n.type,n.pendingProps,re.current),Dn=n,hi=!0,u=en,Ya(n.type)?(bd=u,en=mi(o.firstChild)):en=u),Ln(t,n,n.pendingProps.children,a),Jl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ct&&((u=o=en)&&(o=Lb(o,n.type,n.pendingProps,hi),o!==null?(n.stateNode=o,Dn=n,en=mi(o.firstChild),hi=!1,u=!0):u=!1),u||Oa(n)),Ve(n),u=n.type,d=n.pendingProps,b=t!==null?t.memoizedProps:null,o=d.children,xd(u,d)?o=null:b!==null&&xd(u,b)&&(n.flags|=32),n.memoizedState!==null&&(u=mf(t,n,jy,null,null,a),ko._currentValue=u),Jl(t,n),Ln(t,n,o,a),n.child;case 6:return t===null&&Ct&&((t=a=en)&&(a=Nb(a,n.pendingProps,hi),a!==null?(n.stateNode=a,Dn=n,en=null,t=!0):t=!1),t||Oa(n)),null;case 13:return O0(t,n,a);case 4:return De(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Tr(n,null,o,a):Ln(t,n,o,a),n.child;case 11:return T0(t,n,n.type,n.pendingProps,a);case 7:return Ln(t,n,n.pendingProps,a),n.child;case 8:return Ln(t,n,n.pendingProps.children,a),n.child;case 12:return Ln(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Pa(n,n.type,o.value),Ln(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,br(n),u=Un(u),o=o(u),n.flags|=1,Ln(t,n,o,a),n.child;case 14:return A0(t,n,n.type,n.pendingProps,a);case 15:return R0(t,n,n.type,n.pendingProps,a);case 19:return z0(t,n,a);case 31:return tb(t,n,a);case 22:return C0(t,n,a,n.pendingProps);case 24:return br(n),o=Un(hn),t===null?(u=rf(),u===null&&(u=Kt,d=nf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},of(n),Pa(n,hn,u)):((t.lanes&a)!==0&&(lf(t,n),Mo(n,null,null,a),So()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Pa(n,hn,o)):(o=d.cache,Pa(n,hn,o),o!==u.cache&&tf(n,[hn],a,!0))),Ln(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ia(t){t.flags|=4}function kf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(ux())t.flags|=8192;else throw Er=Il,sf}else t.flags&=-16777217}function B0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!$x(n))if(ux())t.flags|=8192;else throw Er=Il,sf}function ec(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?kt():536870912,t.lanes|=n,hs|=n)}function wo(t,n){if(!Ct)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function tn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function ib(t,n,a){var o=n.pendingProps;switch(Ku(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),$i(hn),Ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(es(n)?ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ju())),tn(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ia(n),d!==null?(tn(n),B0(n,d)):(tn(n),kf(n,u,null,o,a))):d?d!==t.memoizedState?(ia(n),tn(n),B0(n,d)):(tn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ia(n),tn(n),kf(n,u,t,o,a)),null;case 27:if(ot(n),a=re.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),null}t=Se.current,es(n)?gm(n):(t=Wx(u,o,a),n.stateNode=t,ia(n))}return tn(n),null;case 5:if(ot(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),null}if(d=Se.current,es(n))gm(n);else{var b=mc(re.current);switch(d){case 1:d=b.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=b.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=b.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?b.createElement("select",{is:o.is}):b.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?b.createElement(u,{is:o.is}):b.createElement(u)}}d[dn]=n,d[vn]=o;e:for(b=n.child;b!==null;){if(b.tag===5||b.tag===6)d.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===n)break e;for(;b.sibling===null;){if(b.return===null||b.return===n)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}n.stateNode=d;e:switch(Nn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ia(n)}}return tn(n),kf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ia(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=re.current,es(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[dn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ox(t.nodeValue,a)),t||Oa(n,!0)}else t=mc(t).createTextNode(o),t[dn]=n,n.stateNode=t}return tn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=es(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[dn]=n}else _r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),t=!1}else a=Ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(r(558))}return tn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=es(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[dn]=n}else _r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=Ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),ec(n,n.updateQueue),tn(n),null);case 4:return Ie(),t===null&&fd(n.stateNode.containerInfo),tn(n),null;case 10:return $i(n.type),tn(n),null;case 19:if(te(cn),o=n.memoizedState,o===null)return tn(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)wo(o,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Gl(t),d!==null){for(n.flags|=128,wo(o,!1),t=d.updateQueue,n.updateQueue=t,ec(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)dm(a,t),a=a.sibling;return xe(cn,cn.current&1|2),Ct&&Qi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&T()>rc&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Gl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,ec(n,t),wo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Ct)return tn(n),null}else 2*T()-o.renderingStartTime>rc&&a!==536870912&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=T(),t.sibling=null,a=cn.current,xe(cn,u?a&1|2:a&1),Ct&&Qi(n,o.treeForkCount),t):(tn(n),null);case 22:case 23:return ni(n),df(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&ec(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&te(Sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(hn),tn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ab(t,n){switch(Ku(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return $i(hn),Ie(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ot(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(r(340));_r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));_r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return te(cn),null;case 4:return Ie(),null;case 10:return $i(n.type),null;case 22:case 23:return ni(n),df(),t!==null&&te(Sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return $i(hn),null;case 25:return null;default:return null}}function F0(t,n){switch(Ku(n),n.tag){case 3:$i(hn),Ie();break;case 26:case 27:case 5:ot(n);break;case 4:Ie();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:te(cn);break;case 10:$i(n.type);break;case 22:case 23:ni(n),df(),t!==null&&te(Sr);break;case 24:$i(hn)}}function Do(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,b=a.inst;o=d(),b.destroy=o}a=a.next}while(a!==u)}}catch(A){Vt(n,n.return,A)}}function Ga(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var b=o.inst,A=b.destroy;if(A!==void 0){b.destroy=void 0,u=n;var G=a,ie=A;try{ie()}catch(me){Vt(u,G,me)}}}o=o.next}while(o!==d)}}catch(me){Vt(n,n.return,me)}}function H0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Dm(n,a)}catch(o){Vt(t,t.return,o)}}}function G0(t,n,a){a.props=Rr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Vt(t,n,o)}}function Uo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Vt(t,n,u)}}function Ii(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Vt(t,n,u)}else a.current=null}function V0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Vt(t,t.return,u)}}function Xf(t,n,a){try{var o=t.stateNode;Ab(o,t.type,a,n),o[vn]=n}catch(u){Vt(t,t.return,u)}}function k0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ya(t.type)||t.tag===4}function Wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ya(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(o!==4&&(o===27&&Ya(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(qf(t,n,a),t=t.sibling;t!==null;)qf(t,n,a),t=t.sibling}function tc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ya(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(tc(t,n,a),t=t.sibling;t!==null;)tc(t,n,a),t=t.sibling}function X0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,o,a),n[dn]=t,n[vn]=a}catch(d){Vt(t,t.return,d)}}var aa=!1,xn=!1,jf=!1,W0=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function rb(t,n){if(t=t.containerInfo,pd=Sc,t=im(t),Fu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var b=0,A=-1,G=-1,ie=0,me=0,ye=t,se=null;t:for(;;){for(var he;ye!==a||u!==0&&ye.nodeType!==3||(A=b+u),ye!==d||o!==0&&ye.nodeType!==3||(G=b+o),ye.nodeType===3&&(b+=ye.nodeValue.length),(he=ye.firstChild)!==null;)se=ye,ye=he;for(;;){if(ye===t)break t;if(se===a&&++ie===u&&(A=b),se===d&&++me===o&&(G=b),(he=ye.nextSibling)!==null)break;ye=se,se=ye.parentNode}ye=he}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(md={focusedElem:t,selectionRange:a},Sc=!1,Rn=n;Rn!==null;)if(n=Rn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Rn=t;else for(;Rn!==null;){switch(n=Rn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Ge=Rr(a.type,u);t=o.getSnapshotBeforeUpdate(Ge,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(it){Vt(a,a.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)vd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":vd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Rn=t;break}Rn=n.return}}function q0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:sa(t,a),o&4&&Do(5,a);break;case 1:if(sa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(b){Vt(a,a.return,b)}else{var u=Rr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(b){Vt(a,a.return,b)}}o&64&&H0(a),o&512&&Uo(a,a.return);break;case 3:if(sa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Dm(t,n)}catch(b){Vt(a,a.return,b)}}break;case 27:n===null&&o&4&&X0(a);case 26:case 5:sa(t,a),n===null&&o&4&&V0(a),o&512&&Uo(a,a.return);break;case 12:sa(t,a);break;case 31:sa(t,a),o&4&&Z0(t,a);break;case 13:sa(t,a),o&4&&K0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=pb.bind(null,a),Ob(t,a))));break;case 22:if(o=a.memoizedState!==null||aa,!o){n=n!==null&&n.memoizedState!==null||xn,u=aa;var d=xn;aa=o,(xn=n)&&!d?oa(t,a,(a.subtreeFlags&8772)!==0):sa(t,a),aa=u,xn=d}break;case 30:break;default:sa(t,a)}}function j0(t){var n=t.alternate;n!==null&&(t.alternate=null,j0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ao(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,kn=!1;function ra(t,n,a){for(a=a.child;a!==null;)Y0(t,n,a),a=a.sibling}function Y0(t,n,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:xn||Ii(a,n),ra(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xn||Ii(a,n);var o=nn,u=kn;Ya(a.type)&&(nn=a.stateNode,kn=!1),ra(t,n,a),Ho(a.stateNode),nn=o,kn=u;break;case 5:xn||Ii(a,n);case 6:if(o=nn,u=kn,nn=null,ra(t,n,a),nn=o,kn=u,nn!==null)if(kn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode)}catch(d){Vt(a,n,d)}else try{nn.removeChild(a.stateNode)}catch(d){Vt(a,n,d)}break;case 18:nn!==null&&(kn?(t=nn,Hx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),bs(t)):Hx(nn,a.stateNode));break;case 4:o=nn,u=kn,nn=a.stateNode.containerInfo,kn=!0,ra(t,n,a),nn=o,kn=u;break;case 0:case 11:case 14:case 15:Ga(2,a,n),xn||Ga(4,a,n),ra(t,n,a);break;case 1:xn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&G0(a,n,o)),ra(t,n,a);break;case 21:ra(t,n,a);break;case 22:xn=(o=xn)||a.memoizedState!==null,ra(t,n,a),xn=o;break;default:ra(t,n,a)}}function Z0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{bs(t)}catch(a){Vt(n,n.return,a)}}}function K0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bs(t)}catch(a){Vt(n,n.return,a)}}function sb(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new W0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new W0),n;default:throw Error(r(435,t.tag))}}function nc(t,n){var a=sb(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=mb.bind(null,t,o);o.then(u,u)}})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,b=n,A=b;e:for(;A!==null;){switch(A.tag){case 27:if(Ya(A.type)){nn=A.stateNode,kn=!1;break e}break;case 5:nn=A.stateNode,kn=!1;break e;case 3:case 4:nn=A.stateNode.containerInfo,kn=!0;break e}A=A.return}if(nn===null)throw Error(r(160));Y0(d,b,u),nn=null,kn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Q0(n,t),n=n.sibling}var Mi=null;function Q0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),o&4&&(Ga(3,t,t.return),Do(3,t),Ga(5,t,t.return));break;case 1:Xn(n,t),Wn(t),o&512&&(xn||a===null||Ii(a,a.return)),o&64&&aa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Mi;if(Xn(n,t),Wn(t),o&512&&(xn||a===null||Ii(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[hr]||d[dn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Nn(d,o,a),d[dn]=t,ae(d),o=d;break e;case"link":var b=Qx("link","href",u).get(o+(a.href||""));if(b){for(var A=0;A<b.length;A++)if(d=b[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(A,1);break t}}d=u.createElement(o),Nn(d,o,a),u.head.appendChild(d);break;case"meta":if(b=Qx("meta","content",u).get(o+(a.content||""))){for(A=0;A<b.length;A++)if(d=b[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(A,1);break t}}d=u.createElement(o),Nn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[dn]=t,ae(d),o=d}t.stateNode=o}else Jx(u,t.type,t.stateNode);else t.stateNode=Kx(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Jx(u,t.type,t.stateNode):Kx(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Xf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),o&512&&(xn||a===null||Ii(a,a.return)),a!==null&&o&4&&Xf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),o&512&&(xn||a===null||Ii(a,a.return)),t.flags&32){u=t.stateNode;try{Oi(u,"")}catch(Ge){Vt(t,t.return,Ge)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Xf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(jf=!0);break;case 6:if(Xn(n,t),Wn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ge){Vt(t,t.return,Ge)}}break;case 3:if(vc=null,u=Mi,Mi=xc(n.containerInfo),Xn(n,t),Mi=u,Wn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{bs(n.containerInfo)}catch(Ge){Vt(t,t.return,Ge)}jf&&(jf=!1,J0(t));break;case 4:o=Mi,Mi=xc(t.stateNode.containerInfo),Xn(n,t),Wn(t),Mi=o;break;case 12:Xn(n,t),Wn(t);break;case 31:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,nc(t,o)));break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ac=T()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,nc(t,o)));break;case 22:u=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,ie=aa,me=xn;if(aa=ie||u,xn=me||G,Xn(n,t),xn=me,aa=ie,Wn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||aa||xn||Cr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(d=G.stateNode,u)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{A=G.stateNode;var ye=G.memoizedProps.style,se=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;A.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(Ge){Vt(G,G.return,Ge)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Ge){Vt(G,G.return,Ge)}}}else if(n.tag===18){if(a===null){G=n;try{var he=G.stateNode;u?Gx(he,!0):Gx(G.stateNode,!1)}catch(Ge){Vt(G,G.return,Ge)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,nc(t,a))));break;case 19:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,nc(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(k0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=Wf(t);tc(t,d,u);break;case 5:var b=a.stateNode;a.flags&32&&(Oi(b,""),a.flags&=-33);var A=Wf(t);tc(t,A,b);break;case 3:case 4:var G=a.stateNode.containerInfo,ie=Wf(t);qf(t,ie,G);break;default:throw Error(r(161))}}catch(me){Vt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function J0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;J0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)q0(t,n.alternate,n),n=n.sibling}function Cr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ga(4,n,n.return),Cr(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&G0(n,n.return,a),Cr(n);break;case 27:Ho(n.stateNode);case 26:case 5:Ii(n,n.return),Cr(n);break;case 22:n.memoizedState===null&&Cr(n);break;case 30:Cr(n);break;default:Cr(n)}t=t.sibling}}function oa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,b=d.flags;switch(d.tag){case 0:case 11:case 15:oa(u,d,a),Do(4,d);break;case 1:if(oa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Vt(o,o.return,ie)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)wm(G[u],A)}catch(ie){Vt(o,o.return,ie)}}a&&b&64&&H0(d),Uo(d,d.return);break;case 27:X0(d);case 26:case 5:oa(u,d,a),a&&o===null&&b&4&&V0(d),Uo(d,d.return);break;case 12:oa(u,d,a);break;case 31:oa(u,d,a),a&&b&4&&Z0(u,d);break;case 13:oa(u,d,a),a&&b&4&&K0(u,d);break;case 22:d.memoizedState===null&&oa(u,d,a),Uo(d,d.return);break;case 30:break;default:oa(u,d,a)}n=n.sibling}}function Yf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&go(a))}function Zf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&go(t))}function Ei(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$0(t,n,a,o),n=n.sibling}function $0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,o),u&2048&&Do(9,n);break;case 1:Ei(t,n,a,o);break;case 3:Ei(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&go(t)));break;case 12:if(u&2048){Ei(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,b=d.id,A=d.onPostCommit;typeof A=="function"&&A(b,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Vt(n,n.return,G)}}else Ei(t,n,a,o);break;case 31:Ei(t,n,a,o);break;case 13:Ei(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,b=n.alternate,n.memoizedState!==null?d._visibility&2?Ei(t,n,a,o):Lo(t,n):d._visibility&2?Ei(t,n,a,o):(d._visibility|=2,us(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Yf(b,n);break;case 24:Ei(t,n,a,o),u&2048&&Zf(n.alternate,n);break;default:Ei(t,n,a,o)}}function us(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,b=n,A=a,G=o,ie=b.flags;switch(b.tag){case 0:case 11:case 15:us(d,b,A,G,u),Do(8,b);break;case 23:break;case 22:var me=b.stateNode;b.memoizedState!==null?me._visibility&2?us(d,b,A,G,u):Lo(d,b):(me._visibility|=2,us(d,b,A,G,u)),u&&ie&2048&&Yf(b.alternate,b);break;case 24:us(d,b,A,G,u),u&&ie&2048&&Zf(b.alternate,b);break;default:us(d,b,A,G,u)}n=n.sibling}}function Lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Lo(a,o),u&2048&&Yf(o.alternate,o);break;case 24:Lo(a,o),u&2048&&Zf(o.alternate,o);break;default:Lo(a,o)}n=n.sibling}}var No=8192;function fs(t,n,a){if(t.subtreeFlags&No)for(t=t.child;t!==null;)ex(t,n,a),t=t.sibling}function ex(t,n,a){switch(t.tag){case 26:fs(t,n,a),t.flags&No&&t.memoizedState!==null&&qb(a,Mi,t.memoizedState,t.memoizedProps);break;case 5:fs(t,n,a);break;case 3:case 4:var o=Mi;Mi=xc(t.stateNode.containerInfo),fs(t,n,a),Mi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=No,No=16777216,fs(t,n,a),No=o):fs(t,n,a));break;default:fs(t,n,a)}}function tx(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Oo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Rn=o,ix(o,t)}tx(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nx(t),t=t.sibling}function nx(t){switch(t.tag){case 0:case 11:case 15:Oo(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:Oo(t);break;case 12:Oo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ic(t)):Oo(t);break;default:Oo(t)}}function ic(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Rn=o,ix(o,t)}tx(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),ic(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ic(n));break;default:ic(n)}t=t.sibling}}function ix(t,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:go(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Rn=o;else e:for(a=t;Rn!==null;){o=Rn;var u=o.sibling,d=o.return;if(j0(o),o===a){Rn=null;break e}if(u!==null){u.return=d,Rn=u;break e}Rn=d}}}var ob={getCacheForType:function(t){var n=Un(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Un(hn).controller.signal}},lb=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Kt=null,bt=null,Mt=0,Gt=0,ii=null,Va=!1,ds=!1,Kf=!1,la=0,sn=0,ka=0,wr=0,Qf=0,ai=0,hs=0,Po=null,qn=null,Jf=!1,ac=0,ax=0,rc=1/0,sc=null,Xa=null,yn=0,Wa=null,ps=null,ca=0,$f=0,ed=null,rx=null,zo=0,td=null;function ri(){return(Bt&2)!==0&&Mt!==0?Mt&-Mt:D.T!==null?od():no()}function sx(){if(ai===0)if((Mt&536870912)===0||Ct){var t=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),ai=t}else ai=536870912;return t=ti.current,t!==null&&(t.flags|=32),ai}function jn(t,n,a){(t===Kt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(ms(t,0),qa(t,Mt,ai,!1)),Pn(t,a),((Bt&2)===0||t!==Kt)&&(t===Kt&&((Bt&2)===0&&(wr|=a),sn===4&&qa(t,Mt,ai,!1)),Bi(t))}function ox(t,n,a){if((Bt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fe(t,n),u=o?fb(t,n):id(t,n,!0),d=o;do{if(u===0){ds&&!o&&qa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!cb(a)){u=id(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;e:{var A=t;u=Po;var G=A.current.memoizedState.isDehydrated;if(G&&(ms(A,b).flags|=256),b=id(A,b,!1),b!==2){if(Kf&&!G){A.errorRecoveryDisabledLanes|=d,wr|=d,u=4;break e}d=qn,qn=u,d!==null&&(qn===null?qn=d:qn.push.apply(qn,d))}u=b}if(d=!1,u!==2)continue}}if(u===1){ms(t,0),qa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,ai,!Va);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=ac+300-T(),10<u)){if(qa(o,n,ai,!Va),be(o,0,!0)!==0)break e;ca=n,o.timeoutHandle=Bx(lx.bind(null,o,a,qn,sc,Jf,n,ai,wr,hs,Va,d,"Throttled",-0,0),u);break e}lx(o,a,qn,sc,Jf,n,ai,wr,hs,Va,d,null,-0,0)}}break}while(!0);Bi(t)}function lx(t,n,a,o,u,d,b,A,G,ie,me,ye,se,he){if(t.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},ex(n,d,ye);var Ge=(d&62914560)===d?ac-T():(d&4194048)===d?ax-T():0;if(Ge=jb(ye,Ge),Ge!==null){ca=d,t.cancelPendingCommit=Ge(xx.bind(null,t,n,d,a,o,u,b,A,G,me,ye,null,se,he)),qa(t,d,b,!ie);return}}xx(t,n,d,a,o,u,b,A,G)}function cb(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!$n(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,a,o){n&=~Qf,n&=~wr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Xe(u),b=1<<d;o[d]=-1,u&=~b}a!==0&&vl(t,a,n)}function oc(){return(Bt&6)===0?(Io(0),!1):!0}function nd(){if(bt!==null){if(Gt===0)var t=bt.return;else t=bt,Ji=yr=null,vf(t),rs=null,_o=0,t=bt;for(;t!==null;)F0(t.alternate,t),t=t.return;bt=null}}function ms(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,wb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ca=0,nd(),Kt=t,bt=a=Ki(t.current,null),Mt=n,Gt=0,ii=null,Va=!1,ds=Fe(t,n),Kf=!1,hs=ai=Qf=wr=ka=sn=0,qn=Po=null,Jf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Xe(o),d=1<<u;n|=t[u],o&=~d}return la=n,Cl(),a}function cx(t,n){ft=null,D.H=Ro,n===as||n===zl?(n=Tm(),Gt=3):n===sf?(n=Tm(),Gt=4):Gt=n===Of?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,bt===null&&(sn=1,Kl(t,ui(n,t.current)))}function ux(){var t=ti.current;return t===null?!0:(Mt&4194048)===Mt?pi===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?t===pi:!1}function fx(){var t=D.H;return D.H=Ro,t===null?Ro:t}function dx(){var t=D.A;return D.A=ob,t}function lc(){sn=4,Va||(Mt&4194048)!==Mt&&ti.current!==null||(ds=!0),(ka&134217727)===0&&(wr&134217727)===0||Kt===null||qa(Kt,Mt,ai,!1)}function id(t,n,a){var o=Bt;Bt|=2;var u=fx(),d=dx();(Kt!==t||Mt!==n)&&(sc=null,ms(t,n)),n=!1;var b=sn;e:do try{if(Gt!==0&&bt!==null){var A=bt,G=ii;switch(Gt){case 8:nd(),b=6;break e;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var ie=Gt;if(Gt=0,ii=null,xs(t,A,G,ie),a&&ds){b=0;break e}break;default:ie=Gt,Gt=0,ii=null,xs(t,A,G,ie)}}ub(),b=sn;break}catch(me){cx(t,me)}while(!0);return n&&t.shellSuspendCounter++,Ji=yr=null,Bt=o,D.H=u,D.A=d,bt===null&&(Kt=null,Mt=0,Cl()),b}function ub(){for(;bt!==null;)hx(bt)}function fb(t,n){var a=Bt;Bt|=2;var o=fx(),u=dx();Kt!==t||Mt!==n?(sc=null,rc=T()+500,ms(t,n)):ds=Fe(t,n);e:do try{if(Gt!==0&&bt!==null){n=bt;var d=ii;t:switch(Gt){case 1:Gt=0,ii=null,xs(t,n,d,1);break;case 2:case 9:if(Mm(d)){Gt=0,ii=null,px(n);break}n=function(){Gt!==2&&Gt!==9||Kt!==t||(Gt=7),Bi(t)},d.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:Mm(d)?(Gt=0,ii=null,px(n)):(Gt=0,ii=null,xs(t,n,d,7));break;case 5:var b=null;switch(bt.tag){case 26:b=bt.memoizedState;case 5:case 27:var A=bt;if(b?$x(b):A.stateNode.complete){Gt=0,ii=null;var G=A.sibling;if(G!==null)bt=G;else{var ie=A.return;ie!==null?(bt=ie,cc(ie)):bt=null}break t}}Gt=0,ii=null,xs(t,n,d,5);break;case 6:Gt=0,ii=null,xs(t,n,d,6);break;case 8:nd(),sn=6;break e;default:throw Error(r(462))}}db();break}catch(me){cx(t,me)}while(!0);return Ji=yr=null,D.H=o,D.A=u,Bt=a,bt!==null?0:(Kt=null,Mt=0,Cl(),sn)}function db(){for(;bt!==null&&!lt();)hx(bt)}function hx(t){var n=I0(t.alternate,t,la);t.memoizedProps=t.pendingProps,n===null?cc(t):bt=n}function px(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=U0(a,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=U0(a,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:vf(n);default:F0(a,n),n=bt=dm(n,la),n=I0(a,n,la)}t.memoizedProps=t.pendingProps,n===null?cc(t):bt=n}function xs(t,n,a,o){Ji=yr=null,vf(n),rs=null,_o=0;var u=n.return;try{if(eb(t,u,n,a,Mt)){sn=1,Kl(t,ui(a,t.current)),bt=null;return}}catch(d){if(u!==null)throw bt=u,d;sn=1,Kl(t,ui(a,t.current)),bt=null;return}n.flags&32768?(Ct||o===1?t=!0:ds||(Mt&536870912)!==0?t=!1:(Va=t=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),mx(n,t)):cc(n)}function cc(t){var n=t;do{if((n.flags&32768)!==0){mx(n,Va);return}t=n.return;var a=ib(n.alternate,n,la);if(a!==null){bt=a;return}if(n=n.sibling,n!==null){bt=n;return}bt=n=t}while(n!==null);sn===0&&(sn=5)}function mx(t,n){do{var a=ab(t.alternate,t);if(a!==null){a.flags&=32767,bt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){bt=t;return}bt=t=a}while(t!==null);sn=6,bt=null}function xx(t,n,a,o,u,d,b,A,G){t.cancelPendingCommit=null;do uc();while(yn!==0);if((Bt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Xu,Qn(t,a,d,b,A,G),t===Kt&&(bt=Kt=null,Mt=0),ps=n,Wa=t,ca=a,$f=d,ed=u,rx=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,xb(pe,function(){return bx(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=D.T,D.T=null,u=j.p,j.p=2,b=Bt,Bt|=4;try{rb(t,n,a)}finally{Bt=b,j.p=u,D.T=o}}yn=1,gx(),vx(),_x()}}function gx(){if(yn===1){yn=0;var t=Wa,n=ps,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var o=j.p;j.p=2;var u=Bt;Bt|=4;try{Q0(n,t);var d=md,b=im(t.containerInfo),A=d.focusedElem,G=d.selectionRange;if(b!==A&&A&&A.ownerDocument&&nm(A.ownerDocument.documentElement,A)){if(G!==null&&Fu(A)){var ie=G.start,me=G.end;if(me===void 0&&(me=ie),"selectionStart"in A)A.selectionStart=ie,A.selectionEnd=Math.min(me,A.value.length);else{var ye=A.ownerDocument||document,se=ye&&ye.defaultView||window;if(se.getSelection){var he=se.getSelection(),Ge=A.textContent.length,it=Math.min(G.start,Ge),qt=G.end===void 0?it:Math.min(G.end,Ge);!he.extend&&it>qt&&(b=qt,qt=it,it=b);var J=tm(A,it),q=tm(A,qt);if(J&&q&&(he.rangeCount!==1||he.anchorNode!==J.node||he.anchorOffset!==J.offset||he.focusNode!==q.node||he.focusOffset!==q.offset)){var ee=ye.createRange();ee.setStart(J.node,J.offset),he.removeAllRanges(),it>qt?(he.addRange(ee),he.extend(q.node,q.offset)):(ee.setEnd(q.node,q.offset),he.addRange(ee))}}}}for(ye=[],he=A;he=he.parentNode;)he.nodeType===1&&ye.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ye.length;A++){var ge=ye[A];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}Sc=!!pd,md=pd=null}finally{Bt=u,j.p=o,D.T=a}}t.current=n,yn=2}}function vx(){if(yn===2){yn=0;var t=Wa,n=ps,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var o=j.p;j.p=2;var u=Bt;Bt|=4;try{q0(t,n.alternate,n)}finally{Bt=u,j.p=o,D.T=a}}yn=3}}function _x(){if(yn===4||yn===3){yn=0,P();var t=Wa,n=ps,a=ca,o=rx;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yn=5:(yn=0,ps=Wa=null,yx(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Xa=null),dr(a),n=n.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=D.T,u=j.p,j.p=2,D.T=null;try{for(var d=t.onRecoverableError,b=0;b<o.length;b++){var A=o[b];d(A.value,{componentStack:A.stack})}}finally{D.T=n,j.p=u}}(ca&3)!==0&&uc(),Bi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===td?zo++:(zo=0,td=t):zo=0,Io(0)}}function yx(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,go(n)))}function uc(){return gx(),vx(),_x(),bx()}function bx(){if(yn!==5)return!1;var t=Wa,n=$f;$f=0;var a=dr(ca),o=D.T,u=j.p;try{j.p=32>a?32:a,D.T=null,a=ed,ed=null;var d=Wa,b=ca;if(yn=0,ps=Wa=null,ca=0,(Bt&6)!==0)throw Error(r(331));var A=Bt;if(Bt|=4,nx(d.current),$0(d,d.current,b,a),Bt=A,Io(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Ee,d)}catch{}return!0}finally{j.p=u,D.T=o,yx(t,n)}}function Sx(t,n,a){n=ui(a,n),n=Nf(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(Pn(t,2),Bi(t))}function Vt(t,n,a){if(t.tag===3)Sx(t,t,a);else for(;n!==null;){if(n.tag===3){Sx(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){t=ui(a,t),a=M0(2),o=Ba(n,a,2),o!==null&&(E0(a,o,n,t),Pn(o,2),Bi(o));break}}n=n.return}}function ad(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new lb;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Kf=!0,u.add(a),t=hb.bind(null,t,n,a),n.then(t,t))}function hb(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Kt===t&&(Mt&a)===a&&(sn===4||sn===3&&(Mt&62914560)===Mt&&300>T()-ac?(Bt&2)===0&&ms(t,0):Qf|=a,hs===Mt&&(hs=0)),Bi(t)}function Mx(t,n){n===0&&(n=kt()),t=gr(t,n),t!==null&&(Pn(t,n),Bi(t))}function pb(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Mx(t,a)}function mb(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Mx(t,a)}function xb(t,n){return Yt(t,n)}var fc=null,gs=null,rd=!1,dc=!1,sd=!1,ja=0;function Bi(t){t!==gs&&t.next===null&&(gs===null?fc=gs=t:gs=gs.next=t),dc=!0,rd||(rd=!0,vb())}function Io(t,n){if(!sd&&dc){sd=!0;do for(var a=!1,o=fc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var b=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Xe(42|t)+1)-1,d&=u&~(b&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Rx(o,d))}else d=Mt,d=be(o,o===Kt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Fe(o,d)||(a=!0,Rx(o,d));o=o.next}while(a);sd=!1}}function gb(){Ex()}function Ex(){dc=rd=!1;var t=0;ja!==0&&Cb()&&(t=ja);for(var n=T(),a=null,o=fc;o!==null;){var u=o.next,d=Tx(o,n);d===0?(o.next=null,a===null?fc=u:a.next=u,u===null&&(gs=a)):(a=o,(t!==0||(d&3)!==0)&&(dc=!0)),o=u}yn!==0&&yn!==5||Io(t),ja!==0&&(ja=0)}function Tx(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var b=31-Xe(d),A=1<<b,G=u[b];G===-1?((A&a)===0||(A&o)!==0)&&(u[b]=st(A,n)):G<=n&&(t.expiredLanes|=A),d&=~A}if(n=Kt,a=Mt,a=be(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Qe(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Qe(o),dr(a)){case 2:case 8:a=Me;break;case 32:a=pe;break;case 268435456:a=Ne;break;default:a=pe}return o=Ax.bind(null,t),a=Yt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Qe(o),t.callbackPriority=2,t.callbackNode=null,2}function Ax(t,n){if(yn!==0&&yn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(uc()&&t.callbackNode!==a)return null;var o=Mt;return o=be(t,t===Kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(ox(t,o,n),Tx(t,T()),t.callbackNode!=null&&t.callbackNode===a?Ax.bind(null,t):null)}function Rx(t,n){if(uc())return null;ox(t,n,!0)}function vb(){Db(function(){(Bt&6)!==0?Yt(_e,gb):Ex()})}function od(){if(ja===0){var t=ns;t===0&&(t=Ue,Ue<<=1,(Ue&261888)===0&&(Ue=256)),ja=t}return ja}function Cx(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:yl(""+t)}function wx(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function _b(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Cx((u[vn]||null).action),b=o.submitter;b&&(n=(n=b[vn]||null)?Cx(n.formAction):b.getAttribute("formAction"),n!==null&&(d=n,b=null));var A=new El("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ja!==0){var G=b?wx(u,b):new FormData(u);Rf(a,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(A.preventDefault(),G=b?wx(u,b):new FormData(u),Rf(a,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var ld=0;ld<ku.length;ld++){var cd=ku[ld],yb=cd.toLowerCase(),bb=cd[0].toUpperCase()+cd.slice(1);Si(yb,"on"+bb)}Si(sm,"onAnimationEnd"),Si(om,"onAnimationIteration"),Si(lm,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Iy,"onTransitionRun"),Si(By,"onTransitionStart"),Si(Fy,"onTransitionCancel"),Si(cm,"onTransitionEnd"),Be("onMouseEnter",["mouseout","mouseover"]),Be("onMouseLeave",["mouseout","mouseover"]),Be("onPointerEnter",["pointerout","pointerover"]),Be("onPointerLeave",["pointerout","pointerover"]),Le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Le("onBeforeInput",["compositionend","keypress","textInput","paste"]),Le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bo));function Dx(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var b=o.length-1;0<=b;b--){var A=o[b],G=A.instance,ie=A.currentTarget;if(A=A.listener,G!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=ie;try{d(u)}catch(me){Rl(me)}u.currentTarget=null,d=G}else for(b=0;b<o.length;b++){if(A=o[b],G=A.instance,ie=A.currentTarget,A=A.listener,G!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=ie;try{d(u)}catch(me){Rl(me)}u.currentTarget=null,d=G}}}}function St(t,n){var a=n[Xr];a===void 0&&(a=n[Xr]=new Set);var o=t+"__bubble";a.has(o)||(Ux(n,t,2,!1),a.add(o))}function ud(t,n,a){var o=0;n&&(o|=4),Ux(a,t,o,n)}var hc="_reactListening"+Math.random().toString(36).slice(2);function fd(t){if(!t[hc]){t[hc]=!0,$.forEach(function(a){a!=="selectionchange"&&(Sb.has(a)||ud(a,!1,t),ud(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[hc]||(n[hc]=!0,ud("selectionchange",!1,n))}}function Ux(t,n,a,o){switch(sg(n)){case 2:var u=Kb;break;case 8:u=Qb;break;default:u=Ad}a=u.bind(null,n,a,t),u=void 0,!Du||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function dd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var A=o.stateNode.containerInfo;if(A===u)break;if(b===4)for(b=o.return;b!==null;){var G=b.tag;if((G===3||G===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;A!==null;){if(b=wa(A),b===null)return;if(G=b.tag,G===5||G===6||G===26||G===27){o=d=b;continue e}A=A.parentNode}}o=o.return}zp(function(){var ie=d,me=Cu(a),ye=[];e:{var se=um.get(t);if(se!==void 0){var he=El,Ge=t;switch(t){case"keypress":if(Sl(a)===0)break e;case"keydown":case"keyup":he=my;break;case"focusin":Ge="focus",he=Ou;break;case"focusout":Ge="blur",he=Ou;break;case"beforeblur":case"afterblur":he=Ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=vy;break;case sm:case om:case lm:he=sy;break;case cm:he=yy;break;case"scroll":case"scrollend":he=ty;break;case"wheel":he=Sy;break;case"copy":case"cut":case"paste":he=ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Gp;break;case"toggle":case"beforetoggle":he=Ey}var it=(n&4)!==0,qt=!it&&(t==="scroll"||t==="scrollend"),J=it?se!==null?se+"Capture":null:se;it=[];for(var q=ie,ee;q!==null;){var ge=q;if(ee=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||ee===null||J===null||(ge=ro(q,J),ge!=null&&it.push(Fo(q,ge,ee))),qt)break;q=q.return}0<it.length&&(se=new he(se,Ge,null,a,me),ye.push({event:se,listeners:it}))}}if((n&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",se&&a!==Ru&&(Ge=a.relatedTarget||a.fromElement)&&(wa(Ge)||Ge[Wi]))break e;if((he||se)&&(se=me.window===me?me:(se=me.ownerDocument)?se.defaultView||se.parentWindow:window,he?(Ge=a.relatedTarget||a.toElement,he=ie,Ge=Ge?wa(Ge):null,Ge!==null&&(qt=c(Ge),it=Ge.tag,Ge!==qt||it!==5&&it!==27&&it!==6)&&(Ge=null)):(he=null,Ge=ie),he!==Ge)){if(it=Fp,ge="onMouseLeave",J="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(it=Gp,ge="onPointerLeave",J="onPointerEnter",q="pointer"),qt=he==null?se:Q(he),ee=Ge==null?se:Q(Ge),se=new it(ge,q+"leave",he,a,me),se.target=qt,se.relatedTarget=ee,ge=null,wa(me)===ie&&(it=new it(J,q+"enter",Ge,a,me),it.target=ee,it.relatedTarget=qt,ge=it),qt=ge,he&&Ge)t:{for(it=Mb,J=he,q=Ge,ee=0,ge=J;ge;ge=it(ge))ee++;ge=0;for(var $e=q;$e;$e=it($e))ge++;for(;0<ee-ge;)J=it(J),ee--;for(;0<ge-ee;)q=it(q),ge--;for(;ee--;){if(J===q||q!==null&&J===q.alternate){it=J;break t}J=it(J),q=it(q)}it=null}else it=null;he!==null&&Lx(ye,se,he,it,!1),Ge!==null&&qt!==null&&Lx(ye,qt,Ge,it,!0)}}e:{if(se=ie?Q(ie):window,he=se.nodeName&&se.nodeName.toLowerCase(),he==="select"||he==="input"&&se.type==="file")var Pt=Zp;else if(jp(se))if(Kp)Pt=Oy;else{Pt=Ly;var je=Uy}else he=se.nodeName,!he||he.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ie&&Au(ie.elementType)&&(Pt=Zp):Pt=Ny;if(Pt&&(Pt=Pt(t,ie))){Yp(ye,Pt,a,me);break e}je&&je(t,se,ie),t==="focusout"&&ie&&se.type==="number"&&ie.memoizedProps.value!=null&&Tn(se,"number",se.value)}switch(je=ie?Q(ie):window,t){case"focusin":(jp(je)||je.contentEditable==="true")&&(Yr=je,Hu=ie,po=null);break;case"focusout":po=Hu=Yr=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,am(ye,a,me);break;case"selectionchange":if(zy)break;case"keydown":case"keyup":am(ye,a,me)}var ht;if(zu)e:{switch(t){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else jr?Wp(t,a)&&(Et="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Et="onCompositionStart");Et&&(Vp&&a.locale!=="ko"&&(jr||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&jr&&(ht=Ip()):(Ua=me,Uu="value"in Ua?Ua.value:Ua.textContent,jr=!0)),je=pc(ie,Et),0<je.length&&(Et=new Hp(Et,t,null,a,me),ye.push({event:Et,listeners:je}),ht?Et.data=ht:(ht=qp(a),ht!==null&&(Et.data=ht)))),(ht=Ay?Ry(t,a):Cy(t,a))&&(Et=pc(ie,"onBeforeInput"),0<Et.length&&(je=new Hp("onBeforeInput","beforeinput",null,a,me),ye.push({event:je,listeners:Et}),je.data=ht)),_b(ye,t,ie,a,me)}Dx(ye,n)})}function Fo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function pc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=ro(t,a),u!=null&&o.unshift(Fo(t,u,d)),u=ro(t,n),u!=null&&o.push(Fo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function Mb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Lx(t,n,a,o,u){for(var d=n._reactName,b=[];a!==null&&a!==o;){var A=a,G=A.alternate,ie=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||ie===null||(G=ie,u?(ie=ro(a,d),ie!=null&&b.unshift(Fo(a,ie,G))):u||(ie=ro(a,d),ie!=null&&b.push(Fo(a,ie,G)))),a=a.return}b.length!==0&&t.push({event:n,listeners:b})}var Eb=/\r\n?/g,Tb=/\u0000|\uFFFD/g;function Nx(t){return(typeof t=="string"?t:""+t).replace(Eb,`
`).replace(Tb,"")}function Ox(t,n){return n=Nx(n),Nx(t)===n}function Wt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Oi(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Oi(t,""+o);break;case"className":Dt(t,"class",o);break;case"tabIndex":Dt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Dt(t,a,o);break;case"style":Op(t,o,d);break;case"data":if(n!=="object"){Dt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=yl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Wt(t,n,"name",u.name,u,null),Wt(t,n,"formEncType",u.formEncType,u,null),Wt(t,n,"formMethod",u.formMethod,u,null),Wt(t,n,"formTarget",u.formTarget,u,null)):(Wt(t,n,"encType",u.encType,u,null),Wt(t,n,"method",u.method,u,null),Wt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=yl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Yi);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=yl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),dt(t,"popover",o);break;case"xlinkActuate":Ot(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ot(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ot(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ot(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ot(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ot(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":dt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$_.get(a)||a,dt(t,a,o))}}function hd(t,n,a,o,u,d){switch(a){case"style":Op(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Oi(t,o):(typeof o=="number"||typeof o=="bigint")&&Oi(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Re.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[vn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):dt(t,a,o)}}}function Nn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var b=a[d];if(b!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Wt(t,n,d,b,a,null)}}u&&Wt(t,n,"srcSet",a.srcSet,a,null),o&&Wt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var A=d=b=u=null,G=null,ie=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":b=me;break;case"checked":G=me;break;case"defaultChecked":ie=me;break;case"value":d=me;break;case"defaultValue":A=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:Wt(t,n,o,me,a,null)}}$t(t,d,A,G,ie,b,u,!1);return;case"select":St("invalid",t),o=b=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":b=A;break;case"multiple":o=A;default:Wt(t,n,u,A,a,null)}n=d,a=b,t.multiple=!!o,n!=null?_n(t,!!o,n,!1):a!=null&&_n(t,!!o,a,!0);return;case"textarea":St("invalid",t),d=u=o=null;for(b in a)if(a.hasOwnProperty(b)&&(A=a[b],A!=null))switch(b){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Wt(t,n,b,A,a,null)}wn(t,o,u,d);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Wt(t,n,G,o,a,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<Bo.length;o++)St(Bo[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(o=a[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Wt(t,n,ie,o,a,null)}return;default:if(Au(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&hd(t,n,me,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Wt(t,n,A,o,a,null))}function Ab(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,b=null,A=null,G=null,ie=null,me=null;for(he in a){var ye=a[he];if(a.hasOwnProperty(he)&&ye!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":G=ye;default:o.hasOwnProperty(he)||Wt(t,n,he,null,o,ye)}}for(var se in o){var he=o[se];if(ye=a[se],o.hasOwnProperty(se)&&(he!=null||ye!=null))switch(se){case"type":d=he;break;case"name":u=he;break;case"checked":ie=he;break;case"defaultChecked":me=he;break;case"value":b=he;break;case"defaultValue":A=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:he!==ye&&Wt(t,n,se,he,o,ye)}}qi(t,b,A,G,ie,me,d,u);return;case"select":he=b=A=se=null;for(d in a)if(G=a[d],a.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":he=G;default:o.hasOwnProperty(d)||Wt(t,n,d,null,o,G)}for(u in o)if(d=o[u],G=a[u],o.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":se=d;break;case"defaultValue":A=d;break;case"multiple":b=d;default:d!==G&&Wt(t,n,u,d,o,G)}n=A,a=b,o=he,se!=null?_n(t,!!a,se,!1):!!o!=!!a&&(n!=null?_n(t,!!a,n,!0):_n(t,!!a,a?[]:"",!1));return;case"textarea":he=se=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Wt(t,n,A,null,o,u)}for(b in o)if(u=o[b],d=a[b],o.hasOwnProperty(b)&&(u!=null||d!=null))switch(b){case"value":se=u;break;case"defaultValue":he=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Wt(t,n,b,u,o,d)}An(t,se,he);return;case"option":for(var Ge in a)if(se=a[Ge],a.hasOwnProperty(Ge)&&se!=null&&!o.hasOwnProperty(Ge))switch(Ge){case"selected":t.selected=!1;break;default:Wt(t,n,Ge,null,o,se)}for(G in o)if(se=o[G],he=a[G],o.hasOwnProperty(G)&&se!==he&&(se!=null||he!=null))switch(G){case"selected":t.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:Wt(t,n,G,se,o,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)se=a[it],a.hasOwnProperty(it)&&se!=null&&!o.hasOwnProperty(it)&&Wt(t,n,it,null,o,se);for(ie in o)if(se=o[ie],he=a[ie],o.hasOwnProperty(ie)&&se!==he&&(se!=null||he!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:Wt(t,n,ie,se,o,he)}return;default:if(Au(n)){for(var qt in a)se=a[qt],a.hasOwnProperty(qt)&&se!==void 0&&!o.hasOwnProperty(qt)&&hd(t,n,qt,void 0,o,se);for(me in o)se=o[me],he=a[me],!o.hasOwnProperty(me)||se===he||se===void 0&&he===void 0||hd(t,n,me,se,o,he);return}}for(var J in a)se=a[J],a.hasOwnProperty(J)&&se!=null&&!o.hasOwnProperty(J)&&Wt(t,n,J,null,o,se);for(ye in o)se=o[ye],he=a[ye],!o.hasOwnProperty(ye)||se===he||se==null&&he==null||Wt(t,n,ye,se,o,he)}function Px(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Rb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,b=u.initiatorType,A=u.duration;if(d&&A&&Px(b)){for(b=0,A=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],ie=G.startTime;if(ie>A)break;var me=G.transferSize,ye=G.initiatorType;me&&Px(ye)&&(G=G.responseEnd,b+=me*(G<A?1:(A-ie)/(G-ie)))}if(--o,n+=8*(d+b)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var pd=null,md=null;function mc(t){return t.nodeType===9?t:t.ownerDocument}function zx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ix(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function xd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gd=null;function Cb(){var t=window.event;return t&&t.type==="popstate"?t===gd?!1:(gd=t,!0):(gd=null,!1)}var Bx=typeof setTimeout=="function"?setTimeout:void 0,wb=typeof clearTimeout=="function"?clearTimeout:void 0,Fx=typeof Promise=="function"?Promise:void 0,Db=typeof queueMicrotask=="function"?queueMicrotask:typeof Fx<"u"?function(t){return Fx.resolve(null).then(t).catch(Ub)}:Bx;function Ub(t){setTimeout(function(){throw t})}function Ya(t){return t==="head"}function Hx(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),bs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ho(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ho(a);for(var d=a.firstChild;d;){var b=d.nextSibling,A=d.nodeName;d[hr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=b}}else a==="body"&&Ho(t.ownerDocument.body);a=u}while(a);bs(n)}function Gx(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function vd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":vd(a),ao(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Lb(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[hr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function Nb(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=mi(t.nextSibling),t===null))return null;return t}function Vx(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=mi(t.nextSibling),t===null))return null;return t}function _d(t){return t.data==="$?"||t.data==="$~"}function yd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ob(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var bd=null;function kx(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return mi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Xx(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Wx(t,n,a){switch(n=mc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ho(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ao(t)}var xi=new Map,qx=new Set;function xc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=j.d;j.d={f:Pb,r:zb,D:Ib,C:Bb,L:Fb,m:Hb,X:Vb,S:Gb,M:kb};function Pb(){var t=ua.f(),n=oc();return t||n}function zb(t){var n=w(t);n!==null&&n.tag===5&&n.type==="form"?c0(n):ua.r(t)}var vs=typeof document>"u"?null:document;function jx(t,n,a){var o=vs;if(o&&typeof n=="string"&&n){var u=Jt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),qx.has(u)||(qx.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Nn(n,"link",t),ae(n),o.head.appendChild(n)))}}function Ib(t){ua.D(t),jx("dns-prefetch",t,null)}function Bb(t,n){ua.C(t,n),jx("preconnect",t,n)}function Fb(t,n,a){ua.L(t,n,a);var o=vs;if(o&&t&&n){var u='link[rel="preload"][as="'+Jt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Jt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Jt(a.imageSizes)+'"]')):u+='[href="'+Jt(t)+'"]';var d=u;switch(n){case"style":d=_s(t);break;case"script":d=ys(t)}xi.has(d)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),xi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Go(d))||n==="script"&&o.querySelector(Vo(d))||(n=o.createElement("link"),Nn(n,"link",t),ae(n),o.head.appendChild(n)))}}function Hb(t,n){ua.m(t,n);var a=vs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Jt(o)+'"][href="'+Jt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ys(t)}if(!xi.has(d)&&(t=x({rel:"modulepreload",href:t},n),xi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Vo(d)))return}o=a.createElement("link"),Nn(o,"link",t),ae(o),a.head.appendChild(o)}}}function Gb(t,n,a){ua.S(t,n,a);var o=vs;if(o&&t){var u=ue(o).hoistableStyles,d=_s(t);n=n||"default";var b=u.get(d);if(!b){var A={loading:0,preload:null};if(b=o.querySelector(Go(d)))A.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=xi.get(d))&&Sd(t,a);var G=b=o.createElement("link");ae(G),Nn(G,"link",t),G._p=new Promise(function(ie,me){G.onload=ie,G.onerror=me}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,gc(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:A},u.set(d,b)}}}function Vb(t,n){ua.X(t,n);var a=vs;if(a&&t){var o=ue(a).hoistableScripts,u=ys(t),d=o.get(u);d||(d=a.querySelector(Vo(u)),d||(t=x({src:t,async:!0},n),(n=xi.get(u))&&Md(t,n),d=a.createElement("script"),ae(d),Nn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function kb(t,n){ua.M(t,n);var a=vs;if(a&&t){var o=ue(a).hoistableScripts,u=ys(t),d=o.get(u);d||(d=a.querySelector(Vo(u)),d||(t=x({src:t,async:!0,type:"module"},n),(n=xi.get(u))&&Md(t,n),d=a.createElement("script"),ae(d),Nn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Yx(t,n,a,o){var u=(u=re.current)?xc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_s(a.href),a=ue(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_s(a.href);var d=ue(u).hoistableStyles,b=d.get(t);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,b),(d=u.querySelector(Go(t)))&&!d._p&&(b.instance=d,b.state.loading=5),xi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(t,a),d||Xb(u,t,a,b.state))),n&&o===null)throw Error(r(528,""));return b}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ys(a),a=ue(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function _s(t){return'href="'+Jt(t)+'"'}function Go(t){return'link[rel="stylesheet"]['+t+"]"}function Zx(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Xb(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Nn(n,"link",a),ae(n),t.head.appendChild(n))}function ys(t){return'[src="'+Jt(t)+'"]'}function Vo(t){return"script[async]"+t}function Kx(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Jt(a.href)+'"]');if(o)return n.instance=o,ae(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ae(o),Nn(o,"style",u),gc(o,a.precedence,t),n.instance=o;case"stylesheet":u=_s(a.href);var d=t.querySelector(Go(u));if(d)return n.state.loading|=4,n.instance=d,ae(d),d;o=Zx(a),(u=xi.get(u))&&Sd(o,u),d=(t.ownerDocument||t).createElement("link"),ae(d);var b=d;return b._p=new Promise(function(A,G){b.onload=A,b.onerror=G}),Nn(d,"link",o),n.state.loading|=4,gc(d,a.precedence,t),n.instance=d;case"script":return d=ys(a.src),(u=t.querySelector(Vo(d)))?(n.instance=u,ae(u),u):(o=a,(u=xi.get(d))&&(o=x({},a),Md(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),ae(u),Nn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,gc(o,a.precedence,t));return n.instance}function gc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,b=0;b<o.length;b++){var A=o[b];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Sd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var vc=null;function Qx(t,n,a){if(vc===null){var o=new Map,u=vc=new Map;u.set(a,o)}else u=vc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[hr]||d[dn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(n)||"";b=t+b;var A=o.get(b);A?A.push(d):o.set(b,[d])}}return o}function Jx(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Wb(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $x(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function qb(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_s(o.href),d=n.querySelector(Go(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=_c.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,ae(d);return}d=n.ownerDocument||n,o=Zx(o),(u=xi.get(u))&&Sd(o,u),d=d.createElement("link"),ae(d);var b=d;b._p=new Promise(function(A,G){b.onload=A,b.onerror=G}),Nn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=_c.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ed=0;function jb(t,n){return t.stylesheets&&t.count===0&&bc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&bc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&Ed===0&&(Ed=62500*Rb());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&bc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Ed?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function _c(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var yc=null;function bc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,yc=new Map,n.forEach(Yb,t),yc=null,_c.call(t))}function Yb(t,n){if(!(n.state.loading&4)){var a=yc.get(t);if(a)var o=a.get(null);else{a=new Map,yc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var b=u[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),o=b)}o&&a.set(null,o)}u=n.instance,b=u.getAttribute("data-precedence"),d=a.get(b)||o,d===o&&a.set(null,u),a.set(b,u),this.count++,o=_c.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var ko={$$typeof:C,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Zb(t,n,a,o,u,d,b,A,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nt(0),this.hiddenUpdates=Nt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function eg(t,n,a,o,u,d,b,A,G,ie,me,ye){return t=new Zb(t,n,a,b,G,ie,me,ye,A),n=1,d===!0&&(n|=24),d=ei(3,null,null,n),t.current=d,d.stateNode=t,n=nf(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},of(d),t}function tg(t){return t?(t=Qr,t):Qr}function ng(t,n,a,o,u,d){u=tg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ia(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ba(t,o,n),a!==null&&(jn(a,t,n),bo(a,t,n))}function ig(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Td(t,n){ig(t,n),(t=t.alternate)&&ig(t,n)}function ag(t){if(t.tag===13||t.tag===31){var n=gr(t,67108864);n!==null&&jn(n,t,67108864),Td(t,67108864)}}function rg(t){if(t.tag===13||t.tag===31){var n=ri();n=bi(n);var a=gr(t,n);a!==null&&jn(a,t,n),Td(t,n)}}var Sc=!0;function Kb(t,n,a,o){var u=D.T;D.T=null;var d=j.p;try{j.p=2,Ad(t,n,a,o)}finally{j.p=d,D.T=u}}function Qb(t,n,a,o){var u=D.T;D.T=null;var d=j.p;try{j.p=8,Ad(t,n,a,o)}finally{j.p=d,D.T=u}}function Ad(t,n,a,o){if(Sc){var u=Rd(o);if(u===null)dd(t,n,o,Mc,a),og(t,o);else if($b(u,t,n,a,o))o.stopPropagation();else if(og(t,o),n&4&&-1<Jb.indexOf(t)){for(;u!==null;){var d=w(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=Te(d.pendingLanes);if(b!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;b;){var G=1<<31-Xe(b);A.entanglements[1]|=G,b&=~G}Bi(d),(Bt&6)===0&&(rc=T()+500,Io(0))}}break;case 31:case 13:A=gr(d,2),A!==null&&jn(A,d,2),oc(),Td(d,2)}if(d=Rd(o),d===null&&dd(t,n,o,Mc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else dd(t,n,o,null,a)}}function Rd(t){return t=Cu(t),Cd(t)}var Mc=null;function Cd(t){if(Mc=null,t=wa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Mc=t,null}function sg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case _e:return 2;case Me:return 8;case pe:case Ze:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var wd=!1,Za=null,Ka=null,Qa=null,Xo=new Map,Wo=new Map,Ja=[],Jb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function og(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(n.pointerId)}}function qo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=w(n),n!==null&&ag(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function $b(t,n,a,o,u){switch(n){case"focusin":return Za=qo(Za,t,n,a,o,u),!0;case"dragenter":return Ka=qo(Ka,t,n,a,o,u),!0;case"mouseover":return Qa=qo(Qa,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Xo.set(d,qo(Xo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Wo.set(d,qo(Wo.get(d)||null,t,n,a,o,u)),!0}return!1}function lg(t){var n=wa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,io(t.priority,function(){rg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,io(t.priority,function(){rg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ec(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Rd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Ru=o,a.target.dispatchEvent(o),Ru=null}else return n=w(a),n!==null&&ag(n),t.blockedOn=a,!1;n.shift()}return!0}function cg(t,n,a){Ec(t)&&a.delete(n)}function eS(){wd=!1,Za!==null&&Ec(Za)&&(Za=null),Ka!==null&&Ec(Ka)&&(Ka=null),Qa!==null&&Ec(Qa)&&(Qa=null),Xo.forEach(cg),Wo.forEach(cg)}function Tc(t,n){t.blockedOn===n&&(t.blockedOn=null,wd||(wd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,eS)))}var Ac=null;function ug(t){Ac!==t&&(Ac=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ac===t&&(Ac=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Cd(o||a)===null)continue;break}var d=w(a);d!==null&&(t.splice(n,3),n-=3,Rf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function bs(t){function n(G){return Tc(G,t)}Za!==null&&Tc(Za,t),Ka!==null&&Tc(Ka,t),Qa!==null&&Tc(Qa,t),Xo.forEach(n),Wo.forEach(n);for(var a=0;a<Ja.length;a++){var o=Ja[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)lg(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],b=u[vn]||null;if(typeof d=="function")b||ug(a);else if(b){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,b=d[vn]||null)A=b.formAction;else if(Cd(u)!==null)continue}else A=b.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),ug(a)}}}function fg(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(b){return u=b})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Dd(t){this._internalRoot=t}Rc.prototype.render=Dd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ri();ng(a,o,t,n,null,null)},Rc.prototype.unmount=Dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ng(t.current,2,null,t,null,null),oc(),n[Wi]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var n=no();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&lg(t)}};var dg=e.version;if(dg!=="19.2.1")throw Error(r(527,dg,"19.2.1"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var tS={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{Ee=Cc.inject(tS),Ae=Cc}catch{}}return Yo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=_0,d=y0,b=b0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError)),n=eg(t,1,!1,null,null,a,o,null,u,d,b,fg),t[Wi]=n.current,fd(t),new Dd(n)},Yo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=_0,b=y0,A=b0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=eg(t,1,!0,n,a??null,o,u,G,d,b,A,fg),n.context=tg(null),a=n.current,o=ri(),o=bi(o),u=Ia(o),u.callback=null,Ba(a,u,o),a=o,n.current.lanes=a,Pn(n,a),Bi(n),t[Wi]=n.current,fd(t),new Rc(n)},Yo.version="19.2.1",Yo}var Sg;function hS(){if(Sg)return Ld.exports;Sg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ld.exports=dS(),Ld.exports}var pS=hS(),Z=pp();const mS=aS(Z),xS=iS({__proto__:null,default:mS},[Z]);var Mg="popstate";function gS(s={}){function e(r,l){let{pathname:c,search:f,hash:h}=r.location;return bh("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:rl(l)}return _S(e,i,null,s)}function an(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ui(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vS(){return Math.random().toString(36).substring(2,10)}function Eg(s,e){return{usr:s.state,key:s.key,idx:e}}function bh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Ws(e):e,state:i,key:e&&e.key||r||vS()}}function rl({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ws(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function _S(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function x(){h="POP";let y=g(),v=y==null?null:y-p;p=y,m&&m({action:h,location:M.location,delta:v})}function _(y,v){h="PUSH";let U=bh(M.location,y,v);p=g()+1;let C=Eg(U,p),O=M.createHref(U);try{f.pushState(C,"",O)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(O)}c&&m&&m({action:h,location:M.location,delta:1})}function S(y,v){h="REPLACE";let U=bh(M.location,y,v);p=g();let C=Eg(U,p),O=M.createHref(U);f.replaceState(C,"",O),c&&m&&m({action:h,location:M.location,delta:0})}function E(y){return yS(y)}let M={get action(){return h},get location(){return s(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Mg,x),m=y,()=>{l.removeEventListener(Mg,x),m=null}},createHref(y){return e(l,y)},createURL:E,encodeLocation(y){let v=E(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:_,replace:S,go(y){return f.go(y)}};return M}function yS(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),an(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:rl(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Hv(s,e,i="/"){return bS(s,e,i,!1)}function bS(s,e,i,r){let l=typeof e=="string"?Ws(e):e,c=Aa(l.pathname||"/",i);if(c==null)return null;let f=Gv(s);SS(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=NS(c);h=US(f[m],p,r)}return h}function Gv(s,e=[],i=[],r="",l=!1){let c=(f,h,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;an(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let x=Ma([r,g.relativePath]),_=i.concat(g);f.children&&f.children.length>0&&(an(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Gv(f.children,e,_,x,m)),!(f.path==null&&!f.index)&&e.push({path:x,score:wS(x,f.index),routesMeta:_})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of Vv(f.path))c(f,h,!0,m)}),e}function Vv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=Vv(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function SS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:DS(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var MS=/^:[\w-]+$/,ES=3,TS=2,AS=1,RS=10,CS=-2,Tg=s=>s==="*";function wS(s,e){let i=s.split("/"),r=i.length;return i.some(Tg)&&(r+=CS),e&&(r+=TS),i.filter(l=>!Tg(l)).reduce((l,c)=>l+(MS.test(c)?ES:c===""?AS:RS),r)}function DS(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function US(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,g=c==="/"?e:e.slice(c.length)||"/",x=uu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),_=m.route;if(!x&&p&&i&&!r[r.length-1].route.index&&(x=uu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),f.push({params:l,pathname:Ma([c,x.pathname]),pathnameBase:BS(Ma([c,x.pathnameBase])),route:_}),x.pathnameBase!=="/"&&(c=Ma([c,x.pathnameBase]))}return f}function uu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=LS(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:x},_)=>{if(g==="*"){let E=h[_]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const S=h[_];return x&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function LS(s,e=!1,i=!0){Ui(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function NS(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ui(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Aa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var OS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,PS=s=>OS.test(s);function zS(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ws(s):s,c;if(i)if(PS(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),Ui(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=Ag(i.substring(1),"/"):c=Ag(i,e)}else c=e;return{pathname:c,search:FS(r),hash:HS(l)}}function Ag(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Id(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function IS(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function kv(s){let e=IS(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Xv(s,e,i,r=!1){let l;typeof s=="string"?l=Ws(s):(l={...s},an(!l.pathname||!l.pathname.includes("?"),Id("?","pathname","search",l)),an(!l.pathname||!l.pathname.includes("#"),Id("#","pathname","hash",l)),an(!l.search||!l.search.includes("#"),Id("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let x=e.length-1;if(!r&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),x-=1;l.pathname=_.join("/")}h=x>=0?e[x]:"/"}let m=zS(l,h),p=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var Ma=s=>s.join("/").replace(/\/\/+/g,"/"),BS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),FS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,HS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function GS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function VS(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Wv=["POST","PUT","PATCH","DELETE"];new Set(Wv);var kS=["GET",...Wv];new Set(kS);var qs=Z.createContext(null);qs.displayName="DataRouter";var vu=Z.createContext(null);vu.displayName="DataRouterState";Z.createContext(!1);var qv=Z.createContext({isTransitioning:!1});qv.displayName="ViewTransition";var XS=Z.createContext(new Map);XS.displayName="Fetchers";var WS=Z.createContext(null);WS.displayName="Await";var Li=Z.createContext(null);Li.displayName="Navigation";var fl=Z.createContext(null);fl.displayName="Location";var Ca=Z.createContext({outlet:null,matches:[],isDataRoute:!1});Ca.displayName="Route";var mp=Z.createContext(null);mp.displayName="RouteError";function qS(s,{relative:e}={}){an(dl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=Z.useContext(Li),{hash:l,pathname:c,search:f}=hl(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:Ma([i,c])),r.createHref({pathname:h,search:f,hash:l})}function dl(){return Z.useContext(fl)!=null}function kr(){return an(dl(),"useLocation() may be used only in the context of a <Router> component."),Z.useContext(fl).location}var jv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yv(s){Z.useContext(Li).static||Z.useLayoutEffect(s)}function Zv(){let{isDataRoute:s}=Z.useContext(Ca);return s?rM():jS()}function jS(){an(dl(),"useNavigate() may be used only in the context of a <Router> component.");let s=Z.useContext(qs),{basename:e,navigator:i}=Z.useContext(Li),{matches:r}=Z.useContext(Ca),{pathname:l}=kr(),c=JSON.stringify(kv(r)),f=Z.useRef(!1);return Yv(()=>{f.current=!0}),Z.useCallback((m,p={})=>{if(Ui(f.current,jv),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=Xv(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Ma([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,c,l,s])}Z.createContext(null);function hl(s,{relative:e}={}){let{matches:i}=Z.useContext(Ca),{pathname:r}=kr(),l=JSON.stringify(kv(i));return Z.useMemo(()=>Xv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function YS(s,e){return Kv(s,e)}function Kv(s,e,i,r,l){an(dl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=Z.useContext(Li),{matches:f}=Z.useContext(Ca),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",g=h?h.pathnameBase:"/",x=h&&h.route;{let U=x&&x.path||"";Qv(p,!x||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let _=kr(),S;if(e){let U=typeof e=="string"?Ws(e):e;an(g==="/"||U.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),S=U}else S=_;let E=S.pathname||"/",M=E;if(g!=="/"){let U=g.replace(/^\//,"").split("/");M="/"+E.replace(/^\//,"").split("/").slice(U.length).join("/")}let y=Hv(s,{pathname:M});Ui(x||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Ui(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=$S(y&&y.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:Ma([g,c.encodeLocation?c.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:Ma([g,c.encodeLocation?c.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),f,i,r,l);return e&&v?Z.createElement(fl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},v):v}function ZS(){let s=aM(),e=GS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=Z.createElement(Z.Fragment,null,Z.createElement("p",null,"💿 Hey developer 👋"),Z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Z.createElement("code",{style:c},"ErrorBoundary")," or"," ",Z.createElement("code",{style:c},"errorElement")," prop on your route.")),Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},e),i?Z.createElement("pre",{style:l},i):null,f)}var KS=Z.createElement(ZS,null),QS=class extends Z.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?Z.createElement(Ca.Provider,{value:this.props.routeContext},Z.createElement(mp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function JS({routeContext:s,match:e,children:i}){let r=Z.useContext(qs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),Z.createElement(Ca.Provider,{value:s},i)}function $S(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let g=c.findIndex(x=>x.route.id&&f?.[x.route.id]!==void 0);an(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let h=!1,m=-1;if(i)for(let g=0;g<c.length;g++){let x=c[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=g),x.route.id){let{loaderData:_,errors:S}=i,E=x.route.loader&&!_.hasOwnProperty(x.route.id)&&(!S||S[x.route.id]===void 0);if(x.route.lazy||E){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&r?(g,x)=>{r(g,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:VS(i.matches),errorInfo:x})}:void 0;return c.reduceRight((g,x,_)=>{let S,E=!1,M=null,y=null;i&&(S=f&&x.route.id?f[x.route.id]:void 0,M=x.route.errorElement||KS,h&&(m<0&&_===0?(Qv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):m===_&&(E=!0,y=x.route.hydrateFallbackElement||null)));let v=e.concat(c.slice(0,_+1)),U=()=>{let C;return S?C=M:E?C=y:x.route.Component?C=Z.createElement(x.route.Component,null):x.route.element?C=x.route.element:C=g,Z.createElement(JS,{match:x,routeContext:{outlet:g,matches:v,isDataRoute:i!=null},children:C})};return i&&(x.route.ErrorBoundary||x.route.errorElement||_===0)?Z.createElement(QS,{location:i.location,revalidation:i.revalidation,component:M,error:S,children:U(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:p}):U()},null)}function xp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eM(s){let e=Z.useContext(qs);return an(e,xp(s)),e}function tM(s){let e=Z.useContext(vu);return an(e,xp(s)),e}function nM(s){let e=Z.useContext(Ca);return an(e,xp(s)),e}function gp(s){let e=nM(s),i=e.matches[e.matches.length-1];return an(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function iM(){return gp("useRouteId")}function aM(){let s=Z.useContext(mp),e=tM("useRouteError"),i=gp("useRouteError");return s!==void 0?s:e.errors?.[i]}function rM(){let{router:s}=eM("useNavigate"),e=gp("useNavigate"),i=Z.useRef(!1);return Yv(()=>{i.current=!0}),Z.useCallback(async(l,c={})=>{Ui(i.current,jv),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var Rg={};function Qv(s,e,i){!e&&!Rg[s]&&(Rg[s]=!0,Ui(!1,i))}Z.memo(sM);function sM({routes:s,future:e,state:i,unstable_onError:r}){return Kv(s,void 0,i,r,e)}function Fi(s){an(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function oM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){an(!dl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),m=Z.useMemo(()=>({basename:h,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Ws(i));let{pathname:p="/",search:g="",hash:x="",state:_=null,key:S="default"}=i,E=Z.useMemo(()=>{let M=Aa(p,h);return M==null?null:{location:{pathname:M,search:g,hash:x,state:_,key:S},navigationType:r}},[h,p,g,x,_,S,r]);return Ui(E!=null,`<Router basename="${h}"> is not able to match the URL "${p}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:Z.createElement(Li.Provider,{value:m},Z.createElement(fl.Provider,{children:e,value:E}))}function lM({children:s,location:e}){return YS(Sh(s),e)}function Sh(s,e=[]){let i=[];return Z.Children.forEach(s,(r,l)=>{if(!Z.isValidElement(r))return;let c=[...e,l];if(r.type===Z.Fragment){i.push.apply(i,Sh(r.props.children,c));return}an(r.type===Fi,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),an(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Sh(r.props.children,c)),i.push(f)}),i}var nu="get",iu="application/x-www-form-urlencoded";function _u(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function cM(s){return _u(s)&&s.tagName.toLowerCase()==="button"}function uM(s){return _u(s)&&s.tagName.toLowerCase()==="form"}function fM(s){return _u(s)&&s.tagName.toLowerCase()==="input"}function dM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function hM(s,e){return s.button===0&&(!e||e==="_self")&&!dM(s)}var wc=null;function pM(){if(wc===null)try{new FormData(document.createElement("form"),0),wc=!1}catch{wc=!0}return wc}var mM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Bd(s){return s!=null&&!mM.has(s)?(Ui(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${iu}"`),null):s}function xM(s,e){let i,r,l,c,f;if(uM(s)){let h=s.getAttribute("action");r=h?Aa(h,e):null,i=s.getAttribute("method")||nu,l=Bd(s.getAttribute("enctype"))||iu,c=new FormData(s)}else if(cM(s)||fM(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?Aa(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||nu,l=Bd(s.getAttribute("formenctype"))||Bd(h.getAttribute("enctype"))||iu,c=new FormData(h,s),!pM()){let{name:p,type:g,value:x}=s;if(g==="image"){let _=p?`${p}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else p&&c.append(p,x)}}else{if(_u(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=nu,r=null,l=iu,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function gM(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&Aa(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function vM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _M(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function yM(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await vM(c,i);return f.links?f.links():[]}return[]}));return EM(r.flat(1).filter(_M).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Cg(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function bM(s,e,{includeHydrateFallback:i}={}){return SM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function SM(s){return[...new Set(s)]}function MM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function EM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(MM(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function Jv(){let s=Z.useContext(qs);return vp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function TM(){let s=Z.useContext(vu);return vp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var _p=Z.createContext(void 0);_p.displayName="FrameworkContext";function $v(){let s=Z.useContext(_p);return vp(s,"You must render this element inside a <HydratedRouter> element"),s}function AM(s,e){let i=Z.useContext(_p),[r,l]=Z.useState(!1),[c,f]=Z.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=e,_=Z.useRef(null);Z.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let M=v=>{v.forEach(U=>{f(U.isIntersecting)})},y=new IntersectionObserver(M,{threshold:.5});return _.current&&y.observe(_.current),()=>{y.disconnect()}}},[s]),Z.useEffect(()=>{if(r){let M=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(M)}}},[r]);let S=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,_,{}]:[c,_,{onFocus:Zo(h,S),onBlur:Zo(m,E),onMouseEnter:Zo(p,S),onMouseLeave:Zo(g,E),onTouchStart:Zo(x,S)}]:[!1,_,{}]}function Zo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function RM({page:s,...e}){let{router:i}=Jv(),r=Z.useMemo(()=>Hv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?Z.createElement(wM,{page:s,matches:r,...e}):null}function CM(s){let{manifest:e,routeModules:i}=$v(),[r,l]=Z.useState([]);return Z.useEffect(()=>{let c=!1;return yM(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function wM({page:s,matches:e,...i}){let r=kr(),{manifest:l,routeModules:c}=$v(),{basename:f}=Jv(),{loaderData:h,matches:m}=TM(),p=Z.useMemo(()=>Cg(s,e,m,l,r,"data"),[s,e,m,l,r]),g=Z.useMemo(()=>Cg(s,e,m,l,r,"assets"),[s,e,m,l,r]),x=Z.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,M=!1;if(e.forEach(v=>{let U=l.routes[v.route.id];!U||!U.hasLoader||(!p.some(C=>C.route.id===v.route.id)&&v.route.id in h&&c[v.route.id]?.shouldRevalidate||U.hasClientLoader?M=!0:E.add(v.route.id))}),E.size===0)return[];let y=gM(s,f,"data");return M&&E.size>0&&y.searchParams.set("_routes",e.filter(v=>E.has(v.route.id)).map(v=>v.route.id).join(",")),[y.pathname+y.search]},[f,h,r,l,p,e,s,c]),_=Z.useMemo(()=>bM(g,l),[g,l]),S=CM(g);return Z.createElement(Z.Fragment,null,x.map(E=>Z.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),_.map(E=>Z.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),S.map(({key:E,link:M})=>Z.createElement("link",{key:E,nonce:i.nonce,...M})))}function DM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var e_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{e_&&(window.__reactRouterVersion="7.10.1")}catch{}function UM({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=Z.useRef();l.current==null&&(l.current=gS({window:r,v5Compat:!0}));let c=l.current,[f,h]=Z.useState({action:c.action,location:c.location}),m=Z.useCallback(p=>{i===!1?h(p):Z.startTransition(()=>h(p))},[i]);return Z.useLayoutEffect(()=>c.listen(m),[c,m]),Z.createElement(oM,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i===!0})}var t_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,n_=Z.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:g,viewTransition:x,..._},S){let{basename:E,unstable_useTransitions:M}=Z.useContext(Li),y=typeof p=="string"&&t_.test(p),v,U=!1;if(typeof p=="string"&&y&&(v=p,e_))try{let R=new URL(window.location.href),H=p.startsWith("//")?new URL(R.protocol+p):new URL(p),Y=Aa(H.pathname,E);H.origin===R.origin&&Y!=null?p=Y+H.search+H.hash:U=!0}catch{Ui(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=qS(p,{relative:l}),[O,F,N]=AM(r,_),B=OM(p,{replace:f,state:h,target:m,preventScrollReset:g,relative:l,viewTransition:x,unstable_useTransitions:M});function W(R){e&&e(R),R.defaultPrevented||B(R)}let L=Z.createElement("a",{..._,...N,href:v||C,onClick:U||c?e:W,ref:DM(S,F),target:m,"data-discover":!y&&i==="render"?"true":void 0});return O&&!y?Z.createElement(Z.Fragment,null,L,Z.createElement(RM,{page:C})):L});n_.displayName="Link";var ur=Z.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},g){let x=hl(f,{relative:p.relative}),_=kr(),S=Z.useContext(vu),{navigator:E,basename:M}=Z.useContext(Li),y=S!=null&&FM(x)&&h===!0,v=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,U=_.pathname,C=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(U=U.toLowerCase(),C=C?C.toLowerCase():null,v=v.toLowerCase()),C&&M&&(C=Aa(C,M)||C);const O=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let F=U===v||!l&&U.startsWith(v)&&U.charAt(O)==="/",N=C!=null&&(C===v||!l&&C.startsWith(v)&&C.charAt(v.length)==="/"),B={isActive:F,isPending:N,isTransitioning:y},W=F?e:void 0,L;typeof r=="function"?L=r(B):L=[r,F?"active":null,N?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let R=typeof c=="function"?c(B):c;return Z.createElement(n_,{...p,"aria-current":W,className:L,ref:g,style:R,to:f,viewTransition:h},typeof m=="function"?m(B):m)});ur.displayName="NavLink";var LM=Z.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=nu,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:x,..._},S)=>{let{unstable_useTransitions:E}=Z.useContext(Li),M=IM(),y=BM(h,{relative:p}),v=f.toLowerCase()==="get"?"get":"post",U=typeof h=="string"&&t_.test(h),C=O=>{if(m&&m(O),O.defaultPrevented)return;O.preventDefault();let F=O.nativeEvent.submitter,N=F?.getAttribute("formmethod")||f,B=()=>M(F||O.currentTarget,{fetcherKey:e,method:N,navigate:i,replace:l,state:c,relative:p,preventScrollReset:g,viewTransition:x});E&&i!==!1?Z.startTransition(()=>B()):B()};return Z.createElement("form",{ref:S,method:v,action:y,onSubmit:r?m:C,..._,"data-discover":!U&&s==="render"?"true":void 0})});LM.displayName="Form";function NM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function i_(s){let e=Z.useContext(qs);return an(e,NM(s)),e}function OM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f,unstable_useTransitions:h}={}){let m=Zv(),p=kr(),g=hl(s,{relative:c});return Z.useCallback(x=>{if(hM(x,e)){x.preventDefault();let _=i!==void 0?i:rl(p)===rl(g),S=()=>m(s,{replace:_,state:r,preventScrollReset:l,relative:c,viewTransition:f});h?Z.startTransition(()=>S()):S()}},[p,m,g,i,r,e,s,l,c,f,h])}var PM=0,zM=()=>`__${String(++PM)}__`;function IM(){let{router:s}=i_("useSubmit"),{basename:e}=Z.useContext(Li),i=iM(),r=s.fetch,l=s.navigate;return Z.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:g,body:x}=xM(c,e);if(f.navigate===!1){let _=f.fetcherKey||zM();await r(_,i,f.action||h,{preventScrollReset:f.preventScrollReset,formData:g,body:x,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{preventScrollReset:f.preventScrollReset,formData:g,body:x,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function BM(s,{relative:e}={}){let{basename:i}=Z.useContext(Li),r=Z.useContext(Ca);an(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...hl(s||".",{relative:e})},f=kr();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(x=>x).forEach(x=>h.append("index",x));let g=h.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Ma([i,c.pathname])),rl(c)}function FM(s,{relative:e}={}){let i=Z.useContext(qv);an(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=i_("useViewTransitionState"),l=hl(s,{relative:e});if(!i.isTransitioning)return!1;let c=Aa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Aa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return uu(l.pathname,f)!=null||uu(l.pathname,c)!=null}const HM=()=>V.jsx("nav",{className:"navbar",children:V.jsx("div",{className:"nav-container",children:V.jsxs("ul",{className:"navbar-nav",children:[V.jsx("li",{children:V.jsx(ur,{to:"/",className:"nav-link",children:"Accueil"})}),V.jsx("li",{children:V.jsx("a",{href:"/oldpage/index.html",className:"nav-link",children:"Le NIRD"})}),V.jsx("li",{children:V.jsx(ur,{to:"/level1intro",className:"nav-link",children:"Explorer"})})]})})});function GM(){const[s,e]=Z.useState(0),[i,r]=Z.useState(0),[l,c]=Z.useState(!1),f=Z.useRef(null),h=Z.useRef(null),m=Z.useRef(null),p=Z.useRef(null),g=Z.useRef(null),x=Z.useRef(null),_=Z.useRef(null),S=Z.useRef(null),E=()=>{l||(f.current&&(f.current.style.top="100px"),e(C=>C+8),r(C=>Math.min(C+18,99)),U(),p.current&&(p.current.classList.remove("shaking"),p.current.offsetWidth,p.current.classList.add("shaking"),setTimeout(()=>{!l&&p.current&&p.current.classList.remove("shaking")},150)),s+8>=100&&v())},M=()=>{f.current&&(f.current.style.top="0px")},y=()=>{if(h.current&&(h.current.style.width=Math.min(s,100)+"%"),m.current){const C=i/100,O=189,F=195,N=199,B=255,W=60,L=60,R=Math.floor(O+(B-O)*C),H=Math.floor(F+(W-F)*C),Y=Math.floor(N+(L-N)*C);m.current.style.backgroundColor=`rgb(${R}, ${H}, ${Y})`}if(g.current&&x.current&&(i<30?(g.current.innerText="Allez !",x.current.style.height="5px",x.current.style.borderRadius="2px"):i<70?(g.current.innerText="Plus Vite !",x.current.style.height="20px",x.current.style.borderRadius="50%"):(g.current.innerText="EXPLOSION !!!",g.current.style.transform="scale(1.2)",x.current.style.height="10px",x.current.style.width="60px")),S.current){const C=Math.min(s,90);S.current.style.transform=`translateY(-${C}px)`}},v=()=>{c(!0),g.current&&(g.current.innerText="C'EST PRÊT !",g.current.style.color="#2ecc71",g.current.style.transform="scale(1)"),_.current&&_.current.classList.add("success-state"),p.current&&(p.current.classList.add("success"),p.current.classList.remove("shaking")),x.current&&(x.current.style.height="15px",x.current.style.width="40px",x.current.style.borderRadius="0 0 20px 20px"),m.current&&(m.current.style.backgroundColor="#2ecc71"),f.current&&(f.current.style.cursor="default",f.current.style.backgroundColor="#7f8c8d"),S.current&&(S.current.style.transform="none");for(let C=0;C<15;C++)setTimeout(U,C*50)},U=()=>{if(!p.current)return;const C=document.createElement("div");C.classList.add("smoke"),C.style.left=Math.random()*250+"px",C.style.bottom="180px",p.current.appendChild(C),C.animate([{opacity:.6,transform:"translateY(0) scale(1)"},{opacity:0,transform:`translateY(-${100+Math.random()*100}px) scale(2)`}],{duration:800,easing:"ease-out"}),setTimeout(()=>C.remove(),800)};return Z.useEffect(()=>{y()},[s,i]),Z.useEffect(()=>{const C=setInterval(()=>{l||(r(O=>Math.max(O-1.2,0)),e(O=>Math.max(O-.4,0)))},50);return()=>clearInterval(C)},[l]),Z.useEffect(()=>(document.addEventListener("mouseup",M),document.addEventListener("touchend",M),()=>{document.removeEventListener("mouseup",M),document.removeEventListener("touchend",M)}),[]),V.jsxs("footer",{id:"game-footer",ref:_,onMouseDown:E,onTouchStart:C=>{C.preventDefault(),E()},children:[V.jsxs("div",{className:"ui-layer",id:"ui-layer",children:[V.jsx("div",{className:"status-text",id:"status",ref:g,children:"GO !"}),V.jsx("div",{className:"sub-status",id:"sub-status",children:"Pompez pour chauffer la machine"}),V.jsx("div",{className:"progress-container",children:V.jsx("div",{className:"progress-bar",id:"bar",ref:h})})]}),V.jsxs("div",{className:"toaster-rig",id:"rig",ref:p,children:[V.jsxs("div",{className:"toast-group",id:"toast-group",ref:S,children:[V.jsxs("div",{className:"toast toast-1",children:[V.jsx("span",{children:"✉️"}),V.jsx("a",{href:"mailto:contact@moi.com",children:"jgerbaud@etudiant.univ-lr.fr"})]}),V.jsxs("div",{className:"toast toast-2",children:[V.jsx("span",{children:"📱"}),V.jsx("a",{href:"tel:+336000000",children:"05 49 78 77 69"})]}),V.jsxs("div",{className:"toast toast-3",children:[V.jsx("span",{children:"📍"}),V.jsx("div",{className:"address-text",children:"12 Av. Jacques Bujault, 79000 Niort"})]})]}),V.jsxs("div",{className:"toaster-body",id:"body",ref:m,children:[V.jsxs("div",{className:"face",children:[V.jsx("div",{className:"eye"}),V.jsx("div",{className:"mouth",id:"mouth",ref:x}),V.jsx("div",{className:"eye"})]}),V.jsx("div",{className:"slots"}),V.jsx("div",{className:"foot left"}),V.jsx("div",{className:"foot right"})]}),V.jsxs("div",{className:"pump-system",children:[V.jsx("div",{className:"pump-track"}),V.jsx("div",{className:"pump-handle",id:"handle",ref:f})]})]})]})}const wg=()=>V.jsxs("div",{className:"home-container",children:[V.jsxs("div",{className:"home-content-wrapper",children:[V.jsx("h1",{children:"Accueil"}),V.jsxs("section",{className:"hero",children:[V.jsx("h2",{children:"Ce document est classé top secret."}),V.jsxs("div",{className:"section-NIRD",children:[V.jsx("p",{children:"L’opération NIRD est un processus visant à supprimer toute dépendance. Beaucoup d’entreprises sont impactés économiquement et écologiquement par les changements fait par les entreprises qui monopolise les logiciels informatique. Cliquez sur le bouton, nous ne pouvons pas en dire plus."}),V.jsx("a",{href:"/oldpage/index.html",className:"nav-link-in-page",children:"En savoir plus sur le NIRD"})]})]}),V.jsxs("section",{className:"hero",children:[V.jsx("h2",{children:"Explorer"}),V.jsxs("div",{className:"section-explorer",children:[V.jsx("p",{children:"L’opération NIRD vous a confié une mission : en savoir plus sur les différentes manières de garder un numérique libre, responsable et citoyen à l’intérieur de nos établissements scolaires. Commencez l’exploration dès maintenant. "}),V.jsx(ur,{to:"/Level1Intro",className:"nav-link-in-page",children:"Commencer l'exploration"})]})]})]}),V.jsx(GM,{})]}),VM=()=>V.jsxs("div",{className:"explorer-container",children:[V.jsx("h1",{children:"Explorer"}),V.jsx("p",{className:"explorer-text",children:"Explorez notre contenu et découvrez de nouvelles fonctionnalités."}),V.jsxs("div",{style:{marginTop:"2rem"},children:[V.jsx("h2",{children:"Fonctionnalités disponibles :"}),V.jsxs("ul",{children:[V.jsx("li",{children:"Navigation interactive"}),V.jsx("li",{children:"Contenu dynamique"}),V.jsx("li",{children:"Interface moderne"})]})]})]}),kM=()=>V.jsxs("div",{style:{textAlign:"center",marginTop:"3rem"},children:[V.jsx("h1",{children:"404 - Page non trouvée"}),V.jsx("p",{children:"La page que vous recherchez n'existe pas."}),V.jsx("a",{href:"/",style:{color:"#646cff",textDecoration:"underline"},children:"Retourner à l'accueil"})]});const yp="181",XM=0,Dg=1,WM=2,a_=1,r_=2,_a=3,fr=0,Zn=1,ya=2,Ea=0,Bs=1,Ug=2,Lg=3,Ng=4,qM=5,Br=100,jM=101,YM=102,ZM=103,KM=104,QM=200,JM=201,$M=202,eE=203,Mh=204,Eh=205,tE=206,nE=207,iE=208,aE=209,rE=210,sE=211,oE=212,lE=213,cE=214,Th=0,Ah=1,Rh=2,Hs=3,Ch=4,wh=5,Dh=6,Uh=7,s_=0,uE=1,fE=2,cr=0,dE=1,hE=2,pE=3,mE=4,xE=5,gE=6,vE=7,o_=300,Gs=301,Vs=302,Lh=303,Nh=304,yu=306,Oh=1e3,ba=1001,Ph=1002,li=1003,_E=1004,Dc=1005,yi=1006,Fd=1007,Hr=1008,ki=1009,l_=1010,c_=1011,sl=1012,bp=1013,Gr=1014,Sa=1015,js=1016,Sp=1017,Mp=1018,ol=1020,u_=35902,f_=35899,d_=1021,h_=1022,wi=1023,ll=1026,cl=1027,p_=1028,Ep=1029,Tp=1030,Ap=1031,Rp=1033,au=33776,ru=33777,su=33778,ou=33779,zh=35840,Ih=35841,Bh=35842,Fh=35843,Hh=36196,Gh=37492,Vh=37496,kh=37808,Xh=37809,Wh=37810,qh=37811,jh=37812,Yh=37813,Zh=37814,Kh=37815,Qh=37816,Jh=37817,$h=37818,ep=37819,tp=37820,np=37821,ip=36492,ap=36494,rp=36495,sp=36283,op=36284,lp=36285,cp=36286,yE=3200,bE=3201,m_=0,SE=1,or="",vi="srgb",ks="srgb-linear",fu="linear",jt="srgb",Ss=7680,Og=519,ME=512,EE=513,TE=514,x_=515,AE=516,RE=517,CE=518,wE=519,Pg=35044,zg="300 es",Gi=2e3,du=2001;function g_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function hu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function DE(){const s=hu("canvas");return s.style.display="block",s}const Ig={};function Bg(...s){const e="THREE."+s.shift();console.log(e,...s)}function ut(...s){const e="THREE."+s.shift();console.warn(e,...s)}function fn(...s){const e="THREE."+s.shift();console.error(e,...s)}function ul(...s){const e=s.join(" ");e in Ig||(Ig[e]=!0,ut(...s))}function UE(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Ys{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hd=Math.PI/180,up=180/Math.PI;function pl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]).toLowerCase()}function wt(s,e,i){return Math.max(e,Math.min(i,s))}function LE(s,e){return(s%e+e)%e}function Gd(s,e,i){return(1-i)*s+i*e}function Ko(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(e=0,i=0){Ut.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ml{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3],_=c[f+0],S=c[f+1],E=c[f+2],M=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x;return}if(h>=1){e[i+0]=_,e[i+1]=S,e[i+2]=E,e[i+3]=M;return}if(x!==M||m!==_||p!==S||g!==E){let y=m*_+p*S+g*E+x*M;y<0&&(_=-_,S=-S,E=-E,M=-M,y=-y);let v=1-h;if(y<.9995){const U=Math.acos(y),C=Math.sin(U);v=Math.sin(v*U)/C,h=Math.sin(h*U)/C,m=m*v+_*h,p=p*v+S*h,g=g*v+E*h,x=x*v+M*h}else{m=m*v+_*h,p=p*v+S*h,g=g*v+E*h,x=x*v+M*h;const U=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=U,p*=U,g*=U,x*=U}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=c[f],_=c[f+1],S=c[f+2],E=c[f+3];return e[i]=h*E+g*x+m*S-p*_,e[i+1]=m*E+g*_+p*x-h*S,e[i+2]=p*E+g*S+h*_-m*x,e[i+3]=g*E-h*x-m*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),x=h(c/2),_=m(r/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=_*g*x+p*S*E,this._y=p*S*x-_*g*E,this._z=p*g*E+_*S*x,this._w=p*g*x-_*S*E;break;case"YXZ":this._x=_*g*x+p*S*E,this._y=p*S*x-_*g*E,this._z=p*g*E-_*S*x,this._w=p*g*x+_*S*E;break;case"ZXY":this._x=_*g*x-p*S*E,this._y=p*S*x+_*g*E,this._z=p*g*E+_*S*x,this._w=p*g*x-_*S*E;break;case"ZYX":this._x=_*g*x-p*S*E,this._y=p*S*x+_*g*E,this._z=p*g*E-_*S*x,this._w=p*g*x+_*S*E;break;case"YZX":this._x=_*g*x+p*S*E,this._y=p*S*x+_*g*E,this._z=p*g*E-_*S*x,this._w=p*g*x-_*S*E;break;case"XZY":this._x=_*g*x-p*S*E,this._y=p*S*x-_*g*E,this._z=p*g*E+_*S*x,this._w=p*g*x+_*S*E;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],x=i[10],_=r+h+x;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(r>h&&r>x){const S=2*Math.sqrt(1+r-h-x);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(h>x){const S=2*Math.sqrt(1+h-r-x);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+x-r-h);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-r*p,this._z=c*g+f*p+r*m-l*h,this._w=f*g-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(e=0,i=0,r=0){fe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Fg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Fg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),g=2*(h*i-c*l),x=2*(c*r-f*i);return this.x=i+m*p+f*x-h*g,this.y=r+m*g+h*p-c*x,this.z=l+m*x+c*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this.z=wt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this.z=wt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vd.copy(this).projectOnVector(e),this.sub(Vd)}reflect(e){return this.sub(Vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vd=new fe,Fg=new ml;class pt{constructor(e,i,r,l,c,f,h,m,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],g=r[4],x=r[7],_=r[2],S=r[5],E=r[8],M=l[0],y=l[3],v=l[6],U=l[1],C=l[4],O=l[7],F=l[2],N=l[5],B=l[8];return c[0]=f*M+h*U+m*F,c[3]=f*y+h*C+m*N,c[6]=f*v+h*O+m*B,c[1]=p*M+g*U+x*F,c[4]=p*y+g*C+x*N,c[7]=p*v+g*O+x*B,c[2]=_*M+S*U+E*F,c[5]=_*y+S*C+E*N,c[8]=_*v+S*O+E*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*f*g-i*h*p-r*c*g+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=g*f-h*p,_=h*m-g*c,S=p*c-f*m,E=i*x+r*_+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=x*M,e[1]=(l*p-g*r)*M,e[2]=(h*r-l*f)*M,e[3]=_*M,e[4]=(g*i-l*m)*M,e[5]=(l*c-h*i)*M,e[6]=S*M,e[7]=(r*m-p*i)*M,e[8]=(f*i-r*c)*M,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(kd.makeScale(e,i)),this}rotate(e){return this.premultiply(kd.makeRotation(-e)),this}translate(e,i){return this.premultiply(kd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kd=new pt,Hg=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gg=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NE(){const s={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===jt&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===jt&&(l.r=Fs(l.r),l.g=Fs(l.g),l.b=Fs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===or?fu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ul("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ul("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ks]:{primaries:e,whitePoint:r,transfer:fu,toXYZ:Hg,fromXYZ:Gg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:e,whitePoint:r,transfer:jt,toXYZ:Hg,fromXYZ:Gg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),s}const It=NE();function Ta(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ms;class OE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ms===void 0&&(Ms=hu("canvas")),Ms.width=e.width,Ms.height=e.height;const l=Ms.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ms}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=hu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ta(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ta(i[r]/255)*255):i[r]=Ta(i[r]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PE=0;class Cp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=pl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Xd(l[f].image)):c.push(Xd(l[f]))}else c=Xd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Xd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?OE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let zE=0;const Wd=new fe;class Gn extends Ys{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=ba,l=ba,c=yi,f=Hr,h=wi,m=ki,p=Gn.DEFAULT_ANISOTROPY,g=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=pl(),this.name="",this.source=new Cp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wd).x}get height(){return this.source.getSize(Wd).y}get depth(){return this.source.getSize(Wd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==o_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oh:e.x=e.x-Math.floor(e.x);break;case ba:e.x=e.x<0?0:1;break;case Ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oh:e.y=e.y-Math.floor(e.y);break;case ba:e.y=e.y<0?0:1;break;case Ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=o_;Gn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,i=0,r=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],g=m[4],x=m[8],_=m[1],S=m[5],E=m[9],M=m[2],y=m[6],v=m[10];if(Math.abs(g-_)<.01&&Math.abs(x-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+M)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(p+1)/2,O=(S+1)/2,F=(v+1)/2,N=(g+_)/4,B=(x+M)/4,W=(E+y)/4;return C>O&&C>F?C<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(C),l=N/r,c=B/r):O>F?O<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),r=N/l,c=W/l):F<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),r=B/c,l=W/c),this.set(r,l,c,i),this}let U=Math.sqrt((y-E)*(y-E)+(x-M)*(x-M)+(_-g)*(_-g));return Math.abs(U)<.001&&(U=1),this.x=(y-E)/U,this.y=(x-M)/U,this.z=(_-g)/U,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this.z=wt(this.z,e.z,i.z),this.w=wt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this.z=wt(this.z,e,i),this.w=wt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IE extends Ys{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Gn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:yi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Cp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vr extends IE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class v_ extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=li,this.minFilter=li,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BE extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=li,this.minFilter=li,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xl{constructor(e=new fe(1/0,1/0,1/0),i=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ti):Ti.fromBufferAttribute(c,f),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Uc.copy(r.boundingBox)),Uc.applyMatrix4(e.matrixWorld),this.union(Uc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),Lc.subVectors(this.max,Qo),Es.subVectors(e.a,Qo),Ts.subVectors(e.b,Qo),As.subVectors(e.c,Qo),er.subVectors(Ts,Es),tr.subVectors(As,Ts),Dr.subVectors(Es,As);let i=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Dr.z,Dr.y,er.z,0,-er.x,tr.z,0,-tr.x,Dr.z,0,-Dr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Dr.y,Dr.x,0];return!qd(i,Es,Ts,As,Lc)||(i=[1,0,0,0,1,0,0,0,1],!qd(i,Es,Ts,As,Lc))?!1:(Nc.crossVectors(er,tr),i=[Nc.x,Nc.y,Nc.z],qd(i,Es,Ts,As,Lc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fa=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],Ti=new fe,Uc=new xl,Es=new fe,Ts=new fe,As=new fe,er=new fe,tr=new fe,Dr=new fe,Qo=new fe,Lc=new fe,Nc=new fe,Ur=new fe;function qd(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Ur.fromArray(s,c);const h=l.x*Math.abs(Ur.x)+l.y*Math.abs(Ur.y)+l.z*Math.abs(Ur.z),m=e.dot(Ur),p=i.dot(Ur),g=r.dot(Ur);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const FE=new xl,Jo=new fe,jd=new fe;class bu{constructor(e=new fe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):FE.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const i=Jo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Jo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(jd)),this.expandByPoint(Jo.copy(e.center).sub(jd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const da=new fe,Yd=new fe,Oc=new fe,nr=new fe,Zd=new fe,Pc=new fe,Kd=new fe;class __{constructor(e=new fe,i=new fe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(da.copy(this.origin).addScaledVector(this.direction,i),da.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Yd.copy(e).add(i).multiplyScalar(.5),Oc.copy(i).sub(e).normalize(),nr.copy(this.origin).sub(Yd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Oc),h=nr.dot(this.direction),m=-nr.dot(Oc),p=nr.lengthSq(),g=Math.abs(1-f*f);let x,_,S,E;if(g>0)if(x=f*m-h,_=f*h-m,E=c*g,x>=0)if(_>=-E)if(_<=E){const M=1/g;x*=M,_*=M,S=x*(x+f*_+2*h)+_*(f*x+_+2*m)+p}else _=c,x=Math.max(0,-(f*_+h)),S=-x*x+_*(_+2*m)+p;else _=-c,x=Math.max(0,-(f*_+h)),S=-x*x+_*(_+2*m)+p;else _<=-E?(x=Math.max(0,-(-f*c+h)),_=x>0?-c:Math.min(Math.max(-c,-m),c),S=-x*x+_*(_+2*m)+p):_<=E?(x=0,_=Math.min(Math.max(-c,-m),c),S=_*(_+2*m)+p):(x=Math.max(0,-(f*c+h)),_=x>0?c:Math.min(Math.max(-c,-m),c),S=-x*x+_*(_+2*m)+p);else _=f>0?-c:c,x=Math.max(0,-(f*_+h)),S=-x*x+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Yd).addScaledVector(Oc,_),S}intersectSphere(e,i){da.subVectors(e.center,this.origin);const r=da.dot(this.direction),l=da.dot(da)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,l=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,l=(e.min.x-_.x)*p),g>=0?(c=(e.min.y-_.y)*g,f=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,f=(e.min.y-_.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),x>=0?(h=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(h=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,da)!==null}intersectTriangle(e,i,r,l,c){Zd.subVectors(i,e),Pc.subVectors(r,e),Kd.crossVectors(Zd,Pc);let f=this.direction.dot(Kd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;nr.subVectors(this.origin,e);const m=h*this.direction.dot(Pc.crossVectors(nr,Pc));if(m<0)return null;const p=h*this.direction.dot(Zd.cross(nr));if(p<0||m+p>f)return null;const g=-h*nr.dot(Kd);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,i,r,l,c,f,h,m,p,g,x,_,S,E,M,y){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,g,x,_,S,E,M,y)}set(e,i,r,l,c,f,h,m,p,g,x,_,S,E,M,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=g,v[10]=x,v[14]=_,v[3]=S,v[7]=E,v[11]=M,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Rs.setFromMatrixColumn(e,0).length(),c=1/Rs.setFromMatrixColumn(e,1).length(),f=1/Rs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const _=f*g,S=f*x,E=h*g,M=h*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=S+E*p,i[5]=_-M*p,i[9]=-h*m,i[2]=M-_*p,i[6]=E+S*p,i[10]=f*m}else if(e.order==="YXZ"){const _=m*g,S=m*x,E=p*g,M=p*x;i[0]=_+M*h,i[4]=E*h-S,i[8]=f*p,i[1]=f*x,i[5]=f*g,i[9]=-h,i[2]=S*h-E,i[6]=M+_*h,i[10]=f*m}else if(e.order==="ZXY"){const _=m*g,S=m*x,E=p*g,M=p*x;i[0]=_-M*h,i[4]=-f*x,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*g,i[9]=M-_*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const _=f*g,S=f*x,E=h*g,M=h*x;i[0]=m*g,i[4]=E*p-S,i[8]=_*p+M,i[1]=m*x,i[5]=M*p+_,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const _=f*m,S=f*p,E=h*m,M=h*p;i[0]=m*g,i[4]=M-_*x,i[8]=E*x+S,i[1]=x,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=S*x+E,i[10]=_-M*x}else if(e.order==="XZY"){const _=f*m,S=f*p,E=h*m,M=h*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=_*x+M,i[5]=f*g,i[9]=S*x-E,i[2]=E*x-S,i[6]=h*g,i[10]=M*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HE,e,GE)}lookAt(e,i,r){const l=this.elements;return si.subVectors(e,i),si.lengthSq()===0&&(si.z=1),si.normalize(),ir.crossVectors(r,si),ir.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),ir.crossVectors(r,si)),ir.normalize(),zc.crossVectors(si,ir),l[0]=ir.x,l[4]=zc.x,l[8]=si.x,l[1]=ir.y,l[5]=zc.y,l[9]=si.y,l[2]=ir.z,l[6]=zc.z,l[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],g=r[1],x=r[5],_=r[9],S=r[13],E=r[2],M=r[6],y=r[10],v=r[14],U=r[3],C=r[7],O=r[11],F=r[15],N=l[0],B=l[4],W=l[8],L=l[12],R=l[1],H=l[5],Y=l[9],oe=l[13],de=l[2],K=l[6],D=l[10],j=l[14],I=l[3],ce=l[7],ve=l[11],z=l[15];return c[0]=f*N+h*R+m*de+p*I,c[4]=f*B+h*H+m*K+p*ce,c[8]=f*W+h*Y+m*D+p*ve,c[12]=f*L+h*oe+m*j+p*z,c[1]=g*N+x*R+_*de+S*I,c[5]=g*B+x*H+_*K+S*ce,c[9]=g*W+x*Y+_*D+S*ve,c[13]=g*L+x*oe+_*j+S*z,c[2]=E*N+M*R+y*de+v*I,c[6]=E*B+M*H+y*K+v*ce,c[10]=E*W+M*Y+y*D+v*ve,c[14]=E*L+M*oe+y*j+v*z,c[3]=U*N+C*R+O*de+F*I,c[7]=U*B+C*H+O*K+F*ce,c[11]=U*W+C*Y+O*D+F*ve,c[15]=U*L+C*oe+O*j+F*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],g=e[2],x=e[6],_=e[10],S=e[14],E=e[3],M=e[7],y=e[11],v=e[15];return E*(+c*m*x-l*p*x-c*h*_+r*p*_+l*h*S-r*m*S)+M*(+i*m*S-i*p*_+c*f*_-l*f*S+l*p*g-c*m*g)+y*(+i*p*x-i*h*S-c*f*x+r*f*S+c*h*g-r*p*g)+v*(-l*h*g-i*m*x+i*h*_+l*f*x-r*f*_+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=e[9],_=e[10],S=e[11],E=e[12],M=e[13],y=e[14],v=e[15],U=x*y*p-M*_*p+M*m*S-h*y*S-x*m*v+h*_*v,C=E*_*p-g*y*p-E*m*S+f*y*S+g*m*v-f*_*v,O=g*M*p-E*x*p+E*h*S-f*M*S-g*h*v+f*x*v,F=E*x*m-g*M*m-E*h*_+f*M*_+g*h*y-f*x*y,N=i*U+r*C+l*O+c*F;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return e[0]=U*B,e[1]=(M*_*c-x*y*c-M*l*S+r*y*S+x*l*v-r*_*v)*B,e[2]=(h*y*c-M*m*c+M*l*p-r*y*p-h*l*v+r*m*v)*B,e[3]=(x*m*c-h*_*c-x*l*p+r*_*p+h*l*S-r*m*S)*B,e[4]=C*B,e[5]=(g*y*c-E*_*c+E*l*S-i*y*S-g*l*v+i*_*v)*B,e[6]=(E*m*c-f*y*c-E*l*p+i*y*p+f*l*v-i*m*v)*B,e[7]=(f*_*c-g*m*c+g*l*p-i*_*p-f*l*S+i*m*S)*B,e[8]=O*B,e[9]=(E*x*c-g*M*c-E*r*S+i*M*S+g*r*v-i*x*v)*B,e[10]=(f*M*c-E*h*c+E*r*p-i*M*p-f*r*v+i*h*v)*B,e[11]=(g*h*c-f*x*c-g*r*p+i*x*p+f*r*S-i*h*S)*B,e[12]=F*B,e[13]=(g*M*l-E*x*l+E*r*_-i*M*_-g*r*y+i*x*y)*B,e[14]=(E*h*l-f*M*l-E*r*m+i*M*m+f*r*y-i*h*y)*B,e[15]=(f*x*l-g*h*l+g*r*m-i*x*m-f*r*_+i*h*_)*B,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,g=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,g=f+f,x=h+h,_=c*p,S=c*g,E=c*x,M=f*g,y=f*x,v=h*x,U=m*p,C=m*g,O=m*x,F=r.x,N=r.y,B=r.z;return l[0]=(1-(M+v))*F,l[1]=(S+O)*F,l[2]=(E-C)*F,l[3]=0,l[4]=(S-O)*N,l[5]=(1-(_+v))*N,l[6]=(y+U)*N,l[7]=0,l[8]=(E+C)*B,l[9]=(y-U)*B,l[10]=(1-(_+M))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=Rs.set(l[0],l[1],l[2]).length();const f=Rs.set(l[4],l[5],l[6]).length(),h=Rs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ai.copy(this);const p=1/c,g=1/f,x=1/h;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=g,Ai.elements[5]*=g,Ai.elements[6]*=g,Ai.elements[8]*=x,Ai.elements[9]*=x,Ai.elements[10]*=x,i.setFromRotationMatrix(Ai),r.x=c,r.y=f,r.z=h,this}makePerspective(e,i,r,l,c,f,h=Gi,m=!1){const p=this.elements,g=2*c/(i-e),x=2*c/(r-l),_=(i+e)/(i-e),S=(r+l)/(r-l);let E,M;if(m)E=c/(f-c),M=f*c/(f-c);else if(h===Gi)E=-(f+c)/(f-c),M=-2*f*c/(f-c);else if(h===du)E=-f/(f-c),M=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Gi,m=!1){const p=this.elements,g=2/(i-e),x=2/(r-l),_=-(i+e)/(i-e),S=-(r+l)/(r-l);let E,M;if(m)E=1/(f-c),M=f/(f-c);else if(h===Gi)E=-2/(f-c),M=-(f+c)/(f-c);else if(h===du)E=-1/(f-c),M=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Rs=new fe,Ai=new ln,HE=new fe(0,0,0),GE=new fe(1,1,1),ir=new fe,zc=new fe,si=new fe,Vg=new ln,kg=new ml;class Xi{constructor(e=0,i=0,r=0,l=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],x=l[2],_=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(wt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-wt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(wt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return kg.setFromEuler(this),this.setFromQuaternion(kg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class y_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VE=0;const Xg=new fe,Cs=new ml,ha=new ln,Ic=new fe,$o=new fe,kE=new fe,XE=new ml,Wg=new fe(1,0,0),qg=new fe(0,1,0),jg=new fe(0,0,1),Yg={type:"added"},WE={type:"removed"},ws={type:"childadded",child:null},Qd={type:"childremoved",child:null};class On extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new fe,i=new Xi,r=new ml,l=new fe(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new pt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new y_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Cs.setFromAxisAngle(e,i),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,i){return Cs.setFromAxisAngle(e,i),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Wg,e)}rotateY(e){return this.rotateOnAxis(qg,e)}rotateZ(e){return this.rotateOnAxis(jg,e)}translateOnAxis(e,i){return Xg.copy(e).applyQuaternion(this.quaternion),this.position.add(Xg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Wg,e)}translateY(e){return this.translateOnAxis(qg,e)}translateZ(e){return this.translateOnAxis(jg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ic.copy(e):Ic.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt($o,Ic,this.up):ha.lookAt(Ic,$o,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),Cs.setFromRotationMatrix(ha),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(fn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yg),ws.child=e,this.dispatchEvent(ws),ws.child=null):fn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(WE),Qd.child=e,this.dispatchEvent(Qd),Qd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yg),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,kE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,XE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),x=f(e.shapes),_=f(e.skeletons),S=f(e.animations),E=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}On.DEFAULT_UP=new fe(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new fe,pa=new fe,Jd=new fe,ma=new fe,Ds=new fe,Us=new fe,Zg=new fe,$d=new fe,eh=new fe,th=new fe,nh=new on,ih=new on,ah=new on;class Ci{constructor(e=new fe,i=new fe,r=new fe){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ri.subVectors(l,i),pa.subVectors(r,i),Jd.subVectors(e,i);const f=Ri.dot(Ri),h=Ri.dot(pa),m=Ri.dot(Jd),p=pa.dot(pa),g=pa.dot(Jd),x=f*p-h*h;if(x===0)return c.set(0,0,0),null;const _=1/x,S=(p*m-h*g)*_,E=(f*g-h*m)*_;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(f,ma.y),m.addScaledVector(h,ma.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return nh.setScalar(0),ih.setScalar(0),ah.setScalar(0),nh.fromBufferAttribute(e,i),ih.fromBufferAttribute(e,r),ah.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(nh,c.x),f.addScaledVector(ih,c.y),f.addScaledVector(ah,c.z),f}static isFrontFacing(e,i,r,l){return Ri.subVectors(r,i),pa.subVectors(e,i),Ri.cross(pa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ri.cross(pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ci.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ci.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;Ds.subVectors(l,r),Us.subVectors(c,r),$d.subVectors(e,r);const m=Ds.dot($d),p=Us.dot($d);if(m<=0&&p<=0)return i.copy(r);eh.subVectors(e,l);const g=Ds.dot(eh),x=Us.dot(eh);if(g>=0&&x<=g)return i.copy(l);const _=m*x-g*p;if(_<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(Ds,f);th.subVectors(e,c);const S=Ds.dot(th),E=Us.dot(th);if(E>=0&&S<=E)return i.copy(c);const M=S*p-m*E;if(M<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(Us,h);const y=g*E-S*x;if(y<=0&&x-g>=0&&S-E>=0)return Zg.subVectors(c,l),h=(x-g)/(x-g+(S-E)),i.copy(l).addScaledVector(Zg,h);const v=1/(y+M+_);return f=M*v,h=_*v,i.copy(r).addScaledVector(Ds,f).addScaledVector(Us,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const b_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function rh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Tt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=It.workingColorSpace){return this.r=e,this.g=i,this.b=r,It.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=It.workingColorSpace){if(e=LE(e,1),i=wt(i,0,1),r=wt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=rh(f,c,e+1/3),this.g=rh(f,c,e),this.b=rh(f,c,e-1/3)}return It.colorSpaceToWorking(this,l),this}setStyle(e,i=vi){function r(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=vi){const r=b_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return It.workingToColorSpace(Bn.copy(this),e),Math.round(wt(Bn.r*255,0,255))*65536+Math.round(wt(Bn.g*255,0,255))*256+Math.round(wt(Bn.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=It.workingColorSpace){It.workingToColorSpace(Bn.copy(this),i);const r=Bn.r,l=Bn.g,c=Bn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const x=f-h;switch(p=g<=.5?x/(f+h):x/(2-f-h),f){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=It.workingColorSpace){return It.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=vi){It.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,r=Bn.g,l=Bn.b;return e!==vi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+i,ar.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ar),e.getHSL(Bc);const r=Gd(ar.h,Bc.h,i),l=Gd(ar.s,Bc.s,i),c=Gd(ar.l,Bc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Tt;Tt.NAMES=b_;let qE=0;class Zs extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=pl(),this.name="",this.type="Material",this.blending=Bs,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=Eh,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==fr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Mh&&(r.blendSrc=this.blendSrc),this.blendDst!==Eh&&(r.blendDst=this.blendDst),this.blendEquation!==Br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Og&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class S_ extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=s_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gn=new fe,Fc=new Ut;let jE=0;class Vi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Pg,this.updateRanges=[],this.gpuType=Sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Fc.fromBufferAttribute(this,i),Fc.applyMatrix3(e),this.setXY(i,Fc.x,Fc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ko(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Yn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ko(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ko(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ko(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ko(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array),c=Yn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pg&&(e.usage=this.usage),e}}class M_ extends Vi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class E_ extends Vi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Kn extends Vi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let YE=0;const gi=new ln,sh=new On,Ls=new fe,oi=new xl,el=new xl,Cn=new fe;class Ni extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=pl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g_(e)?E_:M_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,i,r){return gi.makeTranslation(e,i,r),this.applyMatrix4(gi),this}scale(e,i,r){return gi.makeScale(e,i,r),this.applyMatrix4(gi),this}lookAt(e){return sh.lookAt(e),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Kn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){fn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&fn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){fn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const r=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];el.setFromBufferAttribute(h),this.morphTargetsRelative?(Cn.addVectors(oi.min,el.min),oi.expandByPoint(Cn),Cn.addVectors(oi.max,el.max),oi.expandByPoint(Cn)):(oi.expandByPoint(el.min),oi.expandByPoint(el.max))}oi.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)Cn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Cn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Cn.fromBufferAttribute(h,p),m&&(Ls.fromBufferAttribute(e,p),Cn.add(Ls)),l=Math.max(l,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&fn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){fn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let W=0;W<r.count;W++)h[W]=new fe,m[W]=new fe;const p=new fe,g=new fe,x=new fe,_=new Ut,S=new Ut,E=new Ut,M=new fe,y=new fe;function v(W,L,R){p.fromBufferAttribute(r,W),g.fromBufferAttribute(r,L),x.fromBufferAttribute(r,R),_.fromBufferAttribute(c,W),S.fromBufferAttribute(c,L),E.fromBufferAttribute(c,R),g.sub(p),x.sub(p),S.sub(_),E.sub(_);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(M.copy(g).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(H),y.copy(x).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(H),h[W].add(M),h[L].add(M),h[R].add(M),m[W].add(y),m[L].add(y),m[R].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let W=0,L=U.length;W<L;++W){const R=U[W],H=R.start,Y=R.count;for(let oe=H,de=H+Y;oe<de;oe+=3)v(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const C=new fe,O=new fe,F=new fe,N=new fe;function B(W){F.fromBufferAttribute(l,W),N.copy(F);const L=h[W];C.copy(L),C.sub(F.multiplyScalar(F.dot(L))).normalize(),O.crossVectors(N,L);const H=O.dot(m[W])<0?-1:1;f.setXYZW(W,C.x,C.y,C.z,H)}for(let W=0,L=U.length;W<L;++W){const R=U[W],H=R.start,Y=R.count;for(let oe=H,de=H+Y;oe<de;oe+=3)B(e.getX(oe+0)),B(e.getX(oe+1)),B(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const l=new fe,c=new fe,f=new fe,h=new fe,m=new fe,p=new fe,g=new fe,x=new fe;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),M=e.getX(_+1),y=e.getX(_+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,y),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,M),p.fromBufferAttribute(r,y),h.add(g),m.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(M,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,S=i.count;_<S;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Cn.fromBufferAttribute(e,i),Cn.normalize(),e.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,x=h.normalized,_=new p.constructor(m.length*g);let S=0,E=0;for(let M=0,y=m.length;M<y;M++){h.isInterleavedBufferAttribute?S=m[M]*h.data.stride+h.offset:S=m[M]*g;for(let v=0;v<g;v++)_[E++]=p[S++]}return new Vi(_,g,x)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ni,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,x=p.length;g<x;g++){const _=p[g],S=e(_,r);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,_=p.length;x<_;x++){const S=p[x];g.push(S.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],x=c[p];for(let _=0,S=x.length;_<S;_++)g.push(x[_].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const x=f[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kg=new ln,Lr=new __,Hc=new bu,Qg=new fe,Gc=new fe,Vc=new fe,kc=new fe,oh=new fe,Xc=new fe,Jg=new fe,Wc=new fe;class Di extends On{constructor(e=new Ni,i=new S_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Xc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],x=c[m];g!==0&&(oh.fromBufferAttribute(x,e),f?Xc.addScaledVector(oh,g):Xc.addScaledVector(oh.sub(i),g))}i.add(Xc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Hc.copy(r.boundingSphere),Hc.applyMatrix4(c),Lr.copy(e.ray).recast(e.near),!(Hc.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Hc,Qg)===null||Lr.origin.distanceToSquared(Qg)>(e.far-e.near)**2))&&(Kg.copy(c).invert(),Lr.copy(e.ray).applyMatrix4(Kg),!(r.boundingBox!==null&&Lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Lr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,_=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,M=_.length;E<M;E++){const y=_[E],v=f[y.materialIndex],U=Math.max(y.start,S.start),C=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let O=U,F=C;O<F;O+=3){const N=h.getX(O),B=h.getX(O+1),W=h.getX(O+2);l=qc(this,v,e,r,p,g,x,N,B,W),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),M=Math.min(h.count,S.start+S.count);for(let y=E,v=M;y<v;y+=3){const U=h.getX(y),C=h.getX(y+1),O=h.getX(y+2);l=qc(this,f,e,r,p,g,x,U,C,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,M=_.length;E<M;E++){const y=_[E],v=f[y.materialIndex],U=Math.max(y.start,S.start),C=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let O=U,F=C;O<F;O+=3){const N=O,B=O+1,W=O+2;l=qc(this,v,e,r,p,g,x,N,B,W),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),M=Math.min(m.count,S.start+S.count);for(let y=E,v=M;y<v;y+=3){const U=y,C=y+1,O=y+2;l=qc(this,f,e,r,p,g,x,U,C,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ZE(s,e,i,r,l,c,f,h){let m;if(e.side===Zn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===fr,h),m===null)return null;Wc.copy(h),Wc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Wc);return p<i.near||p>i.far?null:{distance:p,point:Wc.clone(),object:s}}function qc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Gc),s.getVertexPosition(m,Vc),s.getVertexPosition(p,kc);const g=ZE(s,e,i,r,Gc,Vc,kc,Jg);if(g){const x=new fe;Ci.getBarycoord(Jg,Gc,Vc,kc,x),l&&(g.uv=Ci.getInterpolatedAttribute(l,h,m,p,x,new Ut)),c&&(g.uv1=Ci.getInterpolatedAttribute(c,h,m,p,x,new Ut)),f&&(g.normal=Ci.getInterpolatedAttribute(f,h,m,p,x,new fe),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new fe,materialIndex:0};Ci.getNormal(Gc,Vc,kc,_.normal),g.face=_,g.barycoord=x}return g}class Ks extends Ni{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],x=[];let _=0,S=0;E("z","y","x",-1,-1,r,i,e,f,c,0),E("z","y","x",1,-1,r,i,-e,f,c,1),E("x","z","y",1,1,e,r,i,l,f,2),E("x","z","y",1,-1,e,r,-i,l,f,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Kn(p,3)),this.setAttribute("normal",new Kn(g,3)),this.setAttribute("uv",new Kn(x,2));function E(M,y,v,U,C,O,F,N,B,W,L){const R=O/B,H=F/W,Y=O/2,oe=F/2,de=N/2,K=B+1,D=W+1;let j=0,I=0;const ce=new fe;for(let ve=0;ve<D;ve++){const z=ve*H-oe;for(let te=0;te<K;te++){const xe=te*R-Y;ce[M]=xe*U,ce[y]=z*C,ce[v]=de,p.push(ce.x,ce.y,ce.z),ce[M]=0,ce[y]=0,ce[v]=N>0?1:-1,g.push(ce.x,ce.y,ce.z),x.push(te/B),x.push(1-ve/W),j+=1}}for(let ve=0;ve<W;ve++)for(let z=0;z<B;z++){const te=_+z+K*ve,xe=_+z+K*(ve+1),Se=_+(z+1)+K*(ve+1),Pe=_+(z+1)+K*ve;m.push(te,xe,Pe),m.push(xe,Se,Pe),I+=6}h.addGroup(S,I,L),S+=I,_+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Hn(s){const e={};for(let i=0;i<s.length;i++){const r=Xs(s[i]);for(const l in r)e[l]=r[l]}return e}function KE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function T_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const QE={clone:Xs,merge:Hn};var JE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ra extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JE,this.fragmentShader=$E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=KE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class A_ extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new fe,$g=new Ut,ev=new Ut;class _i extends A_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=up*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return up*2*Math.atan(Math.tan(Hd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,i){return this.getViewBounds(e,$g,ev),i.subVectors(ev,$g)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Hd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ns=-90,Os=1;class e1 extends On{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new _i(Ns,Os,e,i);l.layers=this.layers,this.add(l);const c=new _i(Ns,Os,e,i);c.layers=this.layers,this.add(c);const f=new _i(Ns,Os,e,i);f.layers=this.layers,this.add(f);const h=new _i(Ns,Os,e,i);h.layers=this.layers,this.add(h);const m=new _i(Ns,Os,e,i);m.layers=this.layers,this.add(m);const p=new _i(Ns,Os,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===du)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=M,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(x,_,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class R_ extends Gn{constructor(e=[],i=Gs,r,l,c,f,h,m,p,g){super(e,i,r,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class t1 extends Vr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new R_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ks(5,5,5),c=new Ra({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:Ea});c.uniforms.tEquirect.value=i;const f=new Di(l,c),h=i.minFilter;return i.minFilter===Hr&&(i.minFilter=yi),new e1(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class jc extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n1={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const M of e.hand.values()){const y=i.getJointPose(M,r),v=this._getHandJoint(p,M);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=g.position.distanceTo(x.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(n1)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new jc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class wp{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Tt(e),this.near=i,this.far=r}clone(){return new wp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class i1 extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class a1 extends Gn{constructor(e=null,i=1,r=1,l,c,f,h,m,p=li,g=li,x,_){super(null,f,h,m,p,g,l,c,x,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ch=new fe,r1=new fe,s1=new pt;class Ir{constructor(e=new fe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=ch.subVectors(r,i).cross(r1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(ch),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||s1.getNormalMatrix(e),l=this.coplanarPoint(ch).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new bu,o1=new Ut(.5,.5),Yc=new fe;class Dp{constructor(e=new Ir,i=new Ir,r=new Ir,l=new Ir,c=new Ir,f=new Ir){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Gi,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],x=c[5],_=c[6],S=c[7],E=c[8],M=c[9],y=c[10],v=c[11],U=c[12],C=c[13],O=c[14],F=c[15];if(l[0].setComponents(p-f,S-g,v-E,F-U).normalize(),l[1].setComponents(p+f,S+g,v+E,F+U).normalize(),l[2].setComponents(p+h,S+x,v+M,F+C).normalize(),l[3].setComponents(p-h,S-x,v-M,F-C).normalize(),r)l[4].setComponents(m,_,y,O).normalize(),l[5].setComponents(p-m,S-_,v-y,F-O).normalize();else if(l[4].setComponents(p-m,S-_,v-y,F-O).normalize(),i===Gi)l[5].setComponents(p+m,S+_,v+y,F+O).normalize();else if(i===du)l[5].setComponents(m,_,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const i=o1.distanceTo(e.center);return Nr.radius=.7071067811865476+i,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Yc.x=l.normal.x>0?e.max.x:e.min.x,Yc.y=l.normal.y>0?e.max.y:e.min.y,Yc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C_ extends Zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pu=new fe,mu=new fe,tv=new ln,tl=new __,Zc=new bu,uh=new fe,nv=new fe;class l1 extends On{constructor(e=new Ni,i=new C_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)pu.fromBufferAttribute(i,l-1),mu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=pu.distanceTo(mu);e.setAttribute("lineDistance",new Kn(r,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Zc.copy(r.boundingSphere),Zc.applyMatrix4(l),Zc.radius+=c,e.ray.intersectsSphere(Zc)===!1)return;tv.copy(l).invert(),tl.copy(e.ray).applyMatrix4(tv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let M=S,y=E-1;M<y;M+=p){const v=g.getX(M),U=g.getX(M+1),C=Kc(this,e,tl,m,v,U,M);C&&i.push(C)}if(this.isLineLoop){const M=g.getX(E-1),y=g.getX(S),v=Kc(this,e,tl,m,M,y,E-1);v&&i.push(v)}}else{const S=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let M=S,y=E-1;M<y;M+=p){const v=Kc(this,e,tl,m,M,M+1,M);v&&i.push(v)}if(this.isLineLoop){const M=Kc(this,e,tl,m,E-1,S,E-1);M&&i.push(M)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Kc(s,e,i,r,l,c,f){const h=s.geometry.attributes.position;if(pu.fromBufferAttribute(h,l),mu.fromBufferAttribute(h,c),i.distanceSqToSegment(pu,mu,uh,nv)>r)return;uh.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(uh);if(!(p<e.near||p>e.far))return{distance:p,point:nv.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const iv=new fe,av=new fe;class c1 extends l1{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)iv.fromBufferAttribute(i,l),av.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+iv.distanceTo(av);e.setAttribute("lineDistance",new Kn(r,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class w_ extends Gn{constructor(e,i,r=Gr,l,c,f,h=li,m=li,p,g=ll,x=1){if(g!==ll&&g!==cl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:x};super(_,l,c,f,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class D_ extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gl extends Ni{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,x=e/h,_=i/m,S=[],E=[],M=[],y=[];for(let v=0;v<g;v++){const U=v*_-f;for(let C=0;C<p;C++){const O=C*x-c;E.push(O,-U,0),M.push(0,0,1),y.push(C/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let U=0;U<h;U++){const C=U+p*v,O=U+p*(v+1),F=U+1+p*(v+1),N=U+1+p*v;S.push(C,O,N),S.push(O,F,N)}this.setIndex(S),this.setAttribute("position",new Kn(E,3)),this.setAttribute("normal",new Kn(M,3)),this.setAttribute("uv",new Kn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Up extends Ni{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+h,Math.PI);let p=0;const g=[],x=new fe,_=new fe,S=[],E=[],M=[],y=[];for(let v=0;v<=r;v++){const U=[],C=v/r;let O=0;v===0&&f===0?O=.5/i:v===r&&m===Math.PI&&(O=-.5/i);for(let F=0;F<=i;F++){const N=F/i;x.x=-e*Math.cos(l+N*c)*Math.sin(f+C*h),x.y=e*Math.cos(f+C*h),x.z=e*Math.sin(l+N*c)*Math.sin(f+C*h),E.push(x.x,x.y,x.z),_.copy(x).normalize(),M.push(_.x,_.y,_.z),y.push(N+O,1-C),U.push(p++)}g.push(U)}for(let v=0;v<r;v++)for(let U=0;U<i;U++){const C=g[v][U+1],O=g[v][U],F=g[v+1][U],N=g[v+1][U+1];(v!==0||f>0)&&S.push(C,O,N),(v!==r-1||m<Math.PI)&&S.push(O,F,N)}this.setIndex(S),this.setAttribute("position",new Kn(E,3)),this.setAttribute("normal",new Kn(M,3)),this.setAttribute("uv",new Kn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Up(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fh extends Zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=m_,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class u1 extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f1 extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class U_ extends On{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const dh=new ln,rv=new fe,sv=new fe;class d1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=ki,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dp,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;rv.setFromMatrixPosition(e.matrixWorld),i.position.copy(rv),sv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(sv),i.updateMatrixWorld(),dh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(dh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class L_ extends A_{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class h1 extends d1{constructor(){super(new L_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p1 extends U_{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new h1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class m1 extends U_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class x1 extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class g1 extends c1{constructor(e=10,i=10,r=4473924,l=8947848){r=new Tt(r),l=new Tt(l);const c=i/2,f=e/i,h=e/2,m=[],p=[];for(let _=0,S=0,E=-h;_<=i;_++,E+=f){m.push(-h,0,E,h,0,E),m.push(E,0,-h,E,0,h);const M=_===c?r:l;M.toArray(p,S),S+=3,M.toArray(p,S),S+=3,M.toArray(p,S),S+=3,M.toArray(p,S),S+=3}const g=new Ni;g.setAttribute("position",new Kn(m,3)),g.setAttribute("color",new Kn(p,3));const x=new C_({vertexColors:!0,toneMapped:!1});super(g,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function ov(s,e,i,r){const l=v1(r);switch(i){case d_:return s*e;case p_:return s*e/l.components*l.byteLength;case Ep:return s*e/l.components*l.byteLength;case Tp:return s*e*2/l.components*l.byteLength;case Ap:return s*e*2/l.components*l.byteLength;case h_:return s*e*3/l.components*l.byteLength;case wi:return s*e*4/l.components*l.byteLength;case Rp:return s*e*4/l.components*l.byteLength;case au:case ru:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case su:case ou:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ih:case Fh:return Math.max(s,16)*Math.max(e,8)/4;case zh:case Bh:return Math.max(s,8)*Math.max(e,8)/2;case Hh:case Gh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case qh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case jh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $h:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ep:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case tp:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case np:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ip:case ap:case rp:return Math.ceil(s/4)*Math.ceil(e/4)*16;case sp:case op:return Math.ceil(s/4)*Math.ceil(e/4)*8;case lp:case cp:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function v1(s){switch(s){case ki:case l_:return{byteLength:1,components:1};case sl:case c_:case js:return{byteLength:2,components:1};case Sp:case Mp:return{byteLength:2,components:4};case Gr:case bp:case Sa:return{byteLength:4,components:1};case u_:case f_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yp}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yp);function N_(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function _1(s){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,x=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,h),x.length===0)s.bufferSubData(p,0,g);else{x.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<x.length;S++){const E=x[_],M=x[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++_,x[_]=M)}x.length=_+1;for(let S=0,E=x.length;S<E;S++){const M=x[S];s.bufferSubData(p,M.start*g.BYTES_PER_ELEMENT,g,M.start,M.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var y1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,S1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,w1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,N1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,O1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,V1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,k1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,X1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,W1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,q1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,e3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,i3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,l3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,d3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,h3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,v3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,y3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,b3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,z3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,k3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ET=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,QT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:y1,alphahash_pars_fragment:b1,alphamap_fragment:S1,alphamap_pars_fragment:M1,alphatest_fragment:E1,alphatest_pars_fragment:T1,aomap_fragment:A1,aomap_pars_fragment:R1,batching_pars_vertex:C1,batching_vertex:w1,begin_vertex:D1,beginnormal_vertex:U1,bsdfs:L1,iridescence_fragment:N1,bumpmap_pars_fragment:O1,clipping_planes_fragment:P1,clipping_planes_pars_fragment:z1,clipping_planes_pars_vertex:I1,clipping_planes_vertex:B1,color_fragment:F1,color_pars_fragment:H1,color_pars_vertex:G1,color_vertex:V1,common:k1,cube_uv_reflection_fragment:X1,defaultnormal_vertex:W1,displacementmap_pars_vertex:q1,displacementmap_vertex:j1,emissivemap_fragment:Y1,emissivemap_pars_fragment:Z1,colorspace_fragment:K1,colorspace_pars_fragment:Q1,envmap_fragment:J1,envmap_common_pars_fragment:$1,envmap_pars_fragment:e3,envmap_pars_vertex:t3,envmap_physical_pars_fragment:d3,envmap_vertex:n3,fog_vertex:i3,fog_pars_vertex:a3,fog_fragment:r3,fog_pars_fragment:s3,gradientmap_pars_fragment:o3,lightmap_pars_fragment:l3,lights_lambert_fragment:c3,lights_lambert_pars_fragment:u3,lights_pars_begin:f3,lights_toon_fragment:h3,lights_toon_pars_fragment:p3,lights_phong_fragment:m3,lights_phong_pars_fragment:x3,lights_physical_fragment:g3,lights_physical_pars_fragment:v3,lights_fragment_begin:_3,lights_fragment_maps:y3,lights_fragment_end:b3,logdepthbuf_fragment:S3,logdepthbuf_pars_fragment:M3,logdepthbuf_pars_vertex:E3,logdepthbuf_vertex:T3,map_fragment:A3,map_pars_fragment:R3,map_particle_fragment:C3,map_particle_pars_fragment:w3,metalnessmap_fragment:D3,metalnessmap_pars_fragment:U3,morphinstance_vertex:L3,morphcolor_vertex:N3,morphnormal_vertex:O3,morphtarget_pars_vertex:P3,morphtarget_vertex:z3,normal_fragment_begin:I3,normal_fragment_maps:B3,normal_pars_fragment:F3,normal_pars_vertex:H3,normal_vertex:G3,normalmap_pars_fragment:V3,clearcoat_normal_fragment_begin:k3,clearcoat_normal_fragment_maps:X3,clearcoat_pars_fragment:W3,iridescence_pars_fragment:q3,opaque_fragment:j3,packing:Y3,premultiplied_alpha_fragment:Z3,project_vertex:K3,dithering_fragment:Q3,dithering_pars_fragment:J3,roughnessmap_fragment:$3,roughnessmap_pars_fragment:eT,shadowmap_pars_fragment:tT,shadowmap_pars_vertex:nT,shadowmap_vertex:iT,shadowmask_pars_fragment:aT,skinbase_vertex:rT,skinning_pars_vertex:sT,skinning_vertex:oT,skinnormal_vertex:lT,specularmap_fragment:cT,specularmap_pars_fragment:uT,tonemapping_fragment:fT,tonemapping_pars_fragment:dT,transmission_fragment:hT,transmission_pars_fragment:pT,uv_pars_fragment:mT,uv_pars_vertex:xT,uv_vertex:gT,worldpos_vertex:vT,background_vert:_T,background_frag:yT,backgroundCube_vert:bT,backgroundCube_frag:ST,cube_vert:MT,cube_frag:ET,depth_vert:TT,depth_frag:AT,distanceRGBA_vert:RT,distanceRGBA_frag:CT,equirect_vert:wT,equirect_frag:DT,linedashed_vert:UT,linedashed_frag:LT,meshbasic_vert:NT,meshbasic_frag:OT,meshlambert_vert:PT,meshlambert_frag:zT,meshmatcap_vert:IT,meshmatcap_frag:BT,meshnormal_vert:FT,meshnormal_frag:HT,meshphong_vert:GT,meshphong_frag:VT,meshphysical_vert:kT,meshphysical_frag:XT,meshtoon_vert:WT,meshtoon_frag:qT,points_vert:jT,points_frag:YT,shadow_vert:ZT,shadow_frag:KT,sprite_vert:QT,sprite_frag:JT},Oe={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Hi={basic:{uniforms:Hn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Hn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Hn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Hn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Hn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Hn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Hn([Oe.points,Oe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Hn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Hn([Oe.common,Oe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Hn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Hn([Oe.sprite,Oe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Hn([Oe.common,Oe.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Hn([Oe.lights,Oe.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Hi.physical={uniforms:Hn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Qc={r:0,b:0,g:0},Or=new Xi,$T=new ln;function eA(s,e,i,r,l,c,f){const h=new Tt(0);let m=c===!0?0:1,p,g,x=null,_=0,S=null;function E(C){let O=C.isScene===!0?C.background:null;return O&&O.isTexture&&(O=(C.backgroundBlurriness>0?i:e).get(O)),O}function M(C){let O=!1;const F=E(C);F===null?v(h,m):F&&F.isColor&&(v(F,1),O=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,f):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(C,O){const F=E(O);F&&(F.isCubeTexture||F.mapping===yu)?(g===void 0&&(g=new Di(new Ks(1,1,1),new Ra({name:"BackgroundCubeMaterial",uniforms:Xs(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(N,B,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Or.copy(O.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4($T.makeRotationFromEuler(Or)),g.material.toneMapped=It.getTransfer(F.colorSpace)!==jt,(x!==F||_!==F.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,x=F,_=F.version,S=s.toneMapping),g.layers.enableAll(),C.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Di(new gl(2,2),new Ra({name:"BackgroundMaterial",uniforms:Xs(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=It.getTransfer(F.colorSpace)!==jt,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(x!==F||_!==F.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,x=F,_=F.version,S=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function v(C,O){C.getRGB(Qc,T_(s)),r.buffers.color.setClear(Qc.r,Qc.g,Qc.b,O,f)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,O=1){h.set(C),m=O,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(C){m=C,v(h,m)},render:M,addToRenderList:y,dispose:U}}function tA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,f=!1;function h(R,H,Y,oe,de){let K=!1;const D=x(oe,Y,H);c!==D&&(c=D,p(c.object)),K=S(R,oe,Y,de),K&&E(R,oe,Y,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(K||f)&&(f=!1,O(R,H,Y,oe),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function x(R,H,Y){const oe=Y.wireframe===!0;let de=r[R.id];de===void 0&&(de={},r[R.id]=de);let K=de[H.id];K===void 0&&(K={},de[H.id]=K);let D=K[oe];return D===void 0&&(D=_(m()),K[oe]=D),D}function _(R){const H=[],Y=[],oe=[];for(let de=0;de<i;de++)H[de]=0,Y[de]=0,oe[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:oe,object:R,attributes:{},index:null}}function S(R,H,Y,oe){const de=c.attributes,K=H.attributes;let D=0;const j=Y.getAttributes();for(const I in j)if(j[I].location>=0){const ve=de[I];let z=K[I];if(z===void 0&&(I==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),I==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),ve===void 0||ve.attribute!==z||z&&ve.data!==z.data)return!0;D++}return c.attributesNum!==D||c.index!==oe}function E(R,H,Y,oe){const de={},K=H.attributes;let D=0;const j=Y.getAttributes();for(const I in j)if(j[I].location>=0){let ve=K[I];ve===void 0&&(I==="instanceMatrix"&&R.instanceMatrix&&(ve=R.instanceMatrix),I==="instanceColor"&&R.instanceColor&&(ve=R.instanceColor));const z={};z.attribute=ve,ve&&ve.data&&(z.data=ve.data),de[I]=z,D++}c.attributes=de,c.attributesNum=D,c.index=oe}function M(){const R=c.newAttributes;for(let H=0,Y=R.length;H<Y;H++)R[H]=0}function y(R){v(R,0)}function v(R,H){const Y=c.newAttributes,oe=c.enabledAttributes,de=c.attributeDivisors;Y[R]=1,oe[R]===0&&(s.enableVertexAttribArray(R),oe[R]=1),de[R]!==H&&(s.vertexAttribDivisor(R,H),de[R]=H)}function U(){const R=c.newAttributes,H=c.enabledAttributes;for(let Y=0,oe=H.length;Y<oe;Y++)H[Y]!==R[Y]&&(s.disableVertexAttribArray(Y),H[Y]=0)}function C(R,H,Y,oe,de,K,D){D===!0?s.vertexAttribIPointer(R,H,Y,de,K):s.vertexAttribPointer(R,H,Y,oe,de,K)}function O(R,H,Y,oe){M();const de=oe.attributes,K=Y.getAttributes(),D=H.defaultAttributeValues;for(const j in K){const I=K[j];if(I.location>=0){let ce=de[j];if(ce===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const ve=ce.normalized,z=ce.itemSize,te=e.get(ce);if(te===void 0)continue;const xe=te.buffer,Se=te.type,Pe=te.bytesPerElement,re=Se===s.INT||Se===s.UNSIGNED_INT||ce.gpuType===bp;if(ce.isInterleavedBufferAttribute){const le=ce.data,De=le.stride,Ie=ce.offset;if(le.isInstancedInterleavedBuffer){for(let Ve=0;Ve<I.locationSize;Ve++)v(I.location+Ve,le.meshPerAttribute);R.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ve=0;Ve<I.locationSize;Ve++)y(I.location+Ve);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let Ve=0;Ve<I.locationSize;Ve++)C(I.location+Ve,z/I.locationSize,Se,ve,De*Pe,(Ie+z/I.locationSize*Ve)*Pe,re)}else{if(ce.isInstancedBufferAttribute){for(let le=0;le<I.locationSize;le++)v(I.location+le,ce.meshPerAttribute);R.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let le=0;le<I.locationSize;le++)y(I.location+le);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let le=0;le<I.locationSize;le++)C(I.location+le,z/I.locationSize,Se,ve,z*Pe,z/I.locationSize*le*Pe,re)}}else if(D!==void 0){const ve=D[j];if(ve!==void 0)switch(ve.length){case 2:s.vertexAttrib2fv(I.location,ve);break;case 3:s.vertexAttrib3fv(I.location,ve);break;case 4:s.vertexAttrib4fv(I.location,ve);break;default:s.vertexAttrib1fv(I.location,ve)}}}}U()}function F(){W();for(const R in r){const H=r[R];for(const Y in H){const oe=H[Y];for(const de in oe)g(oe[de].object),delete oe[de];delete H[Y]}delete r[R]}}function N(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const Y in H){const oe=H[Y];for(const de in oe)g(oe[de].object),delete oe[de];delete H[Y]}delete r[R.id]}function B(R){for(const H in r){const Y=r[H];if(Y[R.id]===void 0)continue;const oe=Y[R.id];for(const de in oe)g(oe[de].object),delete oe[de];delete Y[R.id]}}function W(){L(),f=!0,c!==l&&(c=l,p(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:L,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfProgram:B,initAttributes:M,enableAttribute:y,disableUnusedAttributes:U}}function nA(s,e,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function h(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let S=0;for(let E=0;E<x;E++)S+=g[E];i.update(S,r,1)}function m(p,g,x,_){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],g[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,_,0,x);let E=0;for(let M=0;M<x;M++)E+=g[M]*_[M];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function iA(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==wi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const W=B===js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ki&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Sa&&!W)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ut("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:U,maxVaryings:C,maxFragmentUniforms:O,vertexTextures:F,maxSamples:N}}function aA(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Ir,h=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const S=x.length!==0||_||r!==0||l;return l=_,r=x.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){i=g(x,_,0)},this.setState=function(x,_,S){const E=x.clippingPlanes,M=x.clipIntersection,y=x.clipShadows,v=s.get(x);if(!l||E===null||E.length===0||c&&!y)c?g(null):p();else{const U=c?0:r,C=U*4;let O=v.clippingState||null;m.value=O,O=g(E,_,C,S);for(let F=0;F!==C;++F)O[F]=i[F];v.clippingState=O,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,_,S,E){const M=x!==null?x.length:0;let y=null;if(M!==0){if(y=m.value,E!==!0||y===null){const v=S+M*4,U=_.matrixWorldInverse;h.getNormalMatrix(U),(y===null||y.length<v)&&(y=new Float32Array(v));for(let C=0,O=S;C!==M;++C,O+=4)f.copy(x[C]).applyMatrix4(U,h),f.normal.toArray(y,O),y[O+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function rA(s){let e=new WeakMap;function i(f,h){return h===Lh?f.mapping=Gs:h===Nh&&(f.mapping=Vs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Lh||h===Nh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new t1(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const lr=4,lv=[.125,.215,.35,.446,.526,.582],Fr=20,sA=256,nl=new L_,cv=new Tt;let hh=null,ph=0,mh=0,xh=!1;const oA=new fe;class uv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=oA}=c;hh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hh,ph,mh),this._renderer.xr.enabled=xh,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:js,format:wi,colorSpace:ks,depthBuffer:!1},l=fv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lA(c)),this._blurMaterial=uA(c,e,i),this._ggxMaterial=cA(c,e,i)}return l}_compileMaterial(e){const i=new Di(new Ni,e);this._renderer.compile(i,nl)}_sceneToCubeUV(e,i,r,l,c){const m=new _i(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,S=x.toneMapping;x.getClearColor(cv),x.toneMapping=cr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new Ks,new S_({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,y=M.material;let v=!1;const U=e.background;U?U.isColor&&(y.color.copy(U),e.background=null,v=!0):(y.color.copy(cv),v=!0);for(let C=0;C<6;C++){const O=C%3;O===0?(m.up.set(0,p[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[C],c.y,c.z)):O===1?(m.up.set(0,0,p[C]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[C],c.z)):(m.up.set(0,p[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[C]));const F=this._cubeSize;Ps(l,O*F,C>2?F:0,F,F),x.setRenderTarget(l),v&&x.render(M,m),x.render(e,m)}x.toneMapping=S,x.autoClear=_,e.background=U}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Gs||e.mapping===Vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ps(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,nl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),_=.05+p*.95,S=x*_,{_lodMax:E}=this,M=this._sizeLods[r],y=3*M*(r>E-lr?r-E+lr:0),v=4*(this._cubeSize-M);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,Ps(c,y,v,3*M,2*M),l.setRenderTarget(c),l.render(h,nl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Ps(e,y,v,3*M,2*M),l.setRenderTarget(e),l.render(h,nl)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&fn("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=p;const _=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Fr-1),M=c/E,y=isFinite(c)?1+Math.floor(g*M):Fr;y>Fr&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Fr}`);const v=[];let U=0;for(let B=0;B<Fr;++B){const W=B/M,L=Math.exp(-W*W/2);v.push(L),B===0?U+=L:B<y&&(U+=2*L)}for(let B=0;B<v.length;B++)v[B]=v[B]/U;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:C}=this;_.dTheta.value=E,_.mipInt.value=C-r;const O=this._sizeLods[l],F=3*O*(l>C-lr?l-C+lr:0),N=4*(this._cubeSize-O);Ps(i,F,N,3*O,2*O),m.setRenderTarget(i),m.render(x,nl)}}function lA(s){const e=[],i=[],r=[];let l=s;const c=s-lr+1+lv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-lr?m=lv[f-s+lr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,x=1+p,_=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,E=6,M=3,y=2,v=1,U=new Float32Array(M*E*S),C=new Float32Array(y*E*S),O=new Float32Array(v*E*S);for(let N=0;N<S;N++){const B=N%3*2/3-1,W=N>2?0:-1,L=[B,W,0,B+2/3,W,0,B+2/3,W+1,0,B,W,0,B+2/3,W+1,0,B,W+1,0];U.set(L,M*E*N),C.set(_,y*E*N);const R=[N,N,N,N,N,N];O.set(R,v*E*N)}const F=new Ni;F.setAttribute("position",new Vi(U,M)),F.setAttribute("uv",new Vi(C,y)),F.setAttribute("faceIndex",new Vi(O,v)),r.push(new Di(F,null)),l>lr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function fv(s,e,i){const r=new Vr(s,e,i);return r.texture.mapping=yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ps(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function cA(s,e,i){return new Ra({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function uA(s,e,i){const r=new Float32Array(Fr),l=new fe(0,1,0);return new Ra({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function dv(){return new Ra({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function hv(){return new Ra({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Su(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fA(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Lh||m===Nh,g=m===Gs||m===Vs;if(p||g){let x=e.get(h);const _=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new uv(s)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new uv(s)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function dA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ul("WebGLRenderer: "+r+" extension not supported."),l}}}function hA(s,e,i,r){const l={},c=new WeakMap;function f(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",f),delete l[_.id];const S=c.get(_);S&&(e.remove(S),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(x,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(x){const _=x.attributes;for(const S in _)e.update(_[S],s.ARRAY_BUFFER)}function p(x){const _=[],S=x.index,E=x.attributes.position;let M=0;if(S!==null){const U=S.array;M=S.version;for(let C=0,O=U.length;C<O;C+=3){const F=U[C+0],N=U[C+1],B=U[C+2];_.push(F,N,N,B,B,F)}}else if(E!==void 0){const U=E.array;M=E.version;for(let C=0,O=U.length/3-1;C<O;C+=3){const F=C+0,N=C+1,B=C+2;_.push(F,N,N,B,B,F)}}else return;const y=new(g_(_)?E_:M_)(_,1);y.version=M;const v=c.get(x);v&&e.remove(v),c.set(x,y)}function g(x){const _=c.get(x);if(_){const S=x.index;S!==null&&_.version<S.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:g}}function pA(s,e,i){let r;function l(_){r=_}let c,f;function h(_){c=_.type,f=_.bytesPerElement}function m(_,S){s.drawElements(r,S,c,_*f),i.update(S,r,1)}function p(_,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,_*f,E),i.update(S,r,E))}function g(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,_,0,E);let y=0;for(let v=0;v<E;v++)y+=S[v];i.update(y,r,1)}function x(_,S,E,M){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_.length;v++)p(_[v]/f,S[v],M[v]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,_,0,M,0,E);let v=0;for(let U=0;U<E;U++)v+=S[U]*M[U];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function mA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:fn("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function xA(s,e,i){const r=new WeakMap,l=new on;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==x){let R=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var S=R;_!==void 0&&_.texture.dispose();const E=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let O=0;E===!0&&(O=1),M===!0&&(O=2),y===!0&&(O=3);let F=h.attributes.position.count*O,N=1;F>e.maxTextureSize&&(N=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const B=new Float32Array(F*N*4*x),W=new v_(B,F,N,x);W.type=Sa,W.needsUpdate=!0;const L=O*4;for(let H=0;H<x;H++){const Y=v[H],oe=U[H],de=C[H],K=F*N*4*H;for(let D=0;D<Y.count;D++){const j=D*L;E===!0&&(l.fromBufferAttribute(Y,D),B[K+j+0]=l.x,B[K+j+1]=l.y,B[K+j+2]=l.z,B[K+j+3]=0),M===!0&&(l.fromBufferAttribute(oe,D),B[K+j+4]=l.x,B[K+j+5]=l.y,B[K+j+6]=l.z,B[K+j+7]=0),y===!0&&(l.fromBufferAttribute(de,D),B[K+j+8]=l.x,B[K+j+9]=l.y,B[K+j+10]=l.z,B[K+j+11]=de.itemSize===4?l.w:1)}}_={count:x,texture:W,size:new Ut(F,N)},r.set(h,_),h.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const M=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",M),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function gA(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,x=e.get(m,g);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return x}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const O_=new Gn,pv=new w_(1,1),P_=new v_,z_=new BE,I_=new R_,mv=[],xv=[],gv=new Float32Array(16),vv=new Float32Array(9),_v=new Float32Array(4);function Qs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=mv[l];if(c===void 0&&(c=new Float32Array(l),mv[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function Sn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function Mn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Mu(s,e){let i=xv[e];i===void 0&&(i=new Int32Array(e),xv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function vA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function _A(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2fv(this.addr,e),Mn(i,e)}}function yA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;s.uniform3fv(this.addr,e),Mn(i,e)}}function bA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4fv(this.addr,e),Mn(i,e)}}function SA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;_v.set(r),s.uniformMatrix2fv(this.addr,!1,_v),Mn(i,r)}}function MA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;vv.set(r),s.uniformMatrix3fv(this.addr,!1,vv),Mn(i,r)}}function EA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;gv.set(r),s.uniformMatrix4fv(this.addr,!1,gv),Mn(i,r)}}function TA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function AA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2iv(this.addr,e),Mn(i,e)}}function RA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3iv(this.addr,e),Mn(i,e)}}function CA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4iv(this.addr,e),Mn(i,e)}}function wA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function DA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2uiv(this.addr,e),Mn(i,e)}}function UA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3uiv(this.addr,e),Mn(i,e)}}function LA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4uiv(this.addr,e),Mn(i,e)}}function NA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(pv.compareFunction=x_,c=pv):c=O_,i.setTexture2D(e||c,l)}function OA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||z_,l)}function PA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||I_,l)}function zA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||P_,l)}function IA(s){switch(s){case 5126:return vA;case 35664:return _A;case 35665:return yA;case 35666:return bA;case 35674:return SA;case 35675:return MA;case 35676:return EA;case 5124:case 35670:return TA;case 35667:case 35671:return AA;case 35668:case 35672:return RA;case 35669:case 35673:return CA;case 5125:return wA;case 36294:return DA;case 36295:return UA;case 36296:return LA;case 35678:case 36198:case 36298:case 36306:case 35682:return NA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return PA;case 36289:case 36303:case 36311:case 36292:return zA}}function BA(s,e){s.uniform1fv(this.addr,e)}function FA(s,e){const i=Qs(e,this.size,2);s.uniform2fv(this.addr,i)}function HA(s,e){const i=Qs(e,this.size,3);s.uniform3fv(this.addr,i)}function GA(s,e){const i=Qs(e,this.size,4);s.uniform4fv(this.addr,i)}function VA(s,e){const i=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function kA(s,e){const i=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function XA(s,e){const i=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function WA(s,e){s.uniform1iv(this.addr,e)}function qA(s,e){s.uniform2iv(this.addr,e)}function jA(s,e){s.uniform3iv(this.addr,e)}function YA(s,e){s.uniform4iv(this.addr,e)}function ZA(s,e){s.uniform1uiv(this.addr,e)}function KA(s,e){s.uniform2uiv(this.addr,e)}function QA(s,e){s.uniform3uiv(this.addr,e)}function JA(s,e){s.uniform4uiv(this.addr,e)}function $A(s,e,i){const r=this.cache,l=e.length,c=Mu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||O_,c[f])}function e2(s,e,i){const r=this.cache,l=e.length,c=Mu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||z_,c[f])}function t2(s,e,i){const r=this.cache,l=e.length,c=Mu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||I_,c[f])}function n2(s,e,i){const r=this.cache,l=e.length,c=Mu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||P_,c[f])}function i2(s){switch(s){case 5126:return BA;case 35664:return FA;case 35665:return HA;case 35666:return GA;case 35674:return VA;case 35675:return kA;case 35676:return XA;case 5124:case 35670:return WA;case 35667:case 35671:return qA;case 35668:case 35672:return jA;case 35669:case 35673:return YA;case 5125:return ZA;case 36294:return KA;case 36295:return QA;case 36296:return JA;case 35678:case 36198:case 36298:case 36306:case 35682:return $A;case 35679:case 36299:case 36307:return e2;case 35680:case 36300:case 36308:case 36293:return t2;case 36289:case 36303:case 36311:case 36292:return n2}}class a2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=IA(i.type)}}class r2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=i2(i.type)}}class s2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function yv(s,e){s.seq.push(e),s.map[e.id]=e}function o2(s,e,i){const r=s.name,l=r.length;for(gh.lastIndex=0;;){const c=gh.exec(r),f=gh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){yv(i,p===void 0?new a2(h,s,e):new r2(h,s,e));break}else{let x=i.map[h];x===void 0&&(x=new s2(h),yv(i,x)),i=x}}}class lu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);o2(c,f,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function bv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const l2=37297;let c2=0;function u2(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const Sv=new pt;function f2(s){It._getMatrix(Sv,It.workingColorSpace,s);const e=`mat3( ${Sv.elements.map(i=>i.toFixed(4))} )`;switch(It.getTransfer(s)){case fu:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Mv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+u2(s.getShaderSource(e),h)}else return c}function d2(s,e){const i=f2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function h2(s,e){let i;switch(e){case dE:i="Linear";break;case hE:i="Reinhard";break;case pE:i="Cineon";break;case mE:i="ACESFilmic";break;case gE:i="AgX";break;case vE:i="Neutral";break;case xE:i="Custom";break;default:ut("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Jc=new fe;function p2(){It.getLuminanceCoefficients(Jc);const s=Jc.x.toFixed(4),e=Jc.y.toFixed(4),i=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function x2(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function g2(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function al(s){return s!==""}function Ev(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v2=/^[ \t]*#include +<([\w\d./]+)>/gm;function fp(s){return s.replace(v2,y2)}const _2=new Map;function y2(s,e){let i=gt[e];if(i===void 0){const r=_2.get(e);if(r!==void 0)i=gt[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return fp(i)}const b2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Av(s){return s.replace(b2,S2)}function S2(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Rv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M2(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===a_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===r_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_a&&(e="SHADOWMAP_TYPE_VSM"),e}function E2(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T2(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function A2(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case s_:e="ENVMAP_BLENDING_MULTIPLY";break;case uE:e="ENVMAP_BLENDING_MIX";break;case fE:e="ENVMAP_BLENDING_ADD";break}return e}function R2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function C2(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=M2(i),p=E2(i),g=T2(i),x=A2(i),_=R2(i),S=m2(i),E=x2(c),M=l.createProgram();let y,v,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(al).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(al).join(`
`),v.length>0&&(v+=`
`)):(y=[Rv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),v=[Rv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==cr?"#define TONE_MAPPING":"",i.toneMapping!==cr?gt.tonemapping_pars_fragment:"",i.toneMapping!==cr?h2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,d2("linearToOutputTexel",i.outputColorSpace),p2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(al).join(`
`)),f=fp(f),f=Ev(f,i),f=Tv(f,i),h=fp(h),h=Ev(h,i),h=Tv(h,i),f=Av(f),h=Av(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===zg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===zg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const C=U+y+f,O=U+v+h,F=bv(l,l.VERTEX_SHADER,C),N=bv(l,l.FRAGMENT_SHADER,O);l.attachShader(M,F),l.attachShader(M,N),i.index0AttributeName!==void 0?l.bindAttribLocation(M,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(M,0,"position"),l.linkProgram(M);function B(H){if(s.debug.checkShaderErrors){const Y=l.getProgramInfoLog(M)||"",oe=l.getShaderInfoLog(F)||"",de=l.getShaderInfoLog(N)||"",K=Y.trim(),D=oe.trim(),j=de.trim();let I=!0,ce=!0;if(l.getProgramParameter(M,l.LINK_STATUS)===!1)if(I=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,M,F,N);else{const ve=Mv(l,F,"vertex"),z=Mv(l,N,"fragment");fn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(M,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+K+`
`+ve+`
`+z)}else K!==""?ut("WebGLProgram: Program Info Log:",K):(D===""||j==="")&&(ce=!1);ce&&(H.diagnostics={runnable:I,programLog:K,vertexShader:{log:D,prefix:y},fragmentShader:{log:j,prefix:v}})}l.deleteShader(F),l.deleteShader(N),W=new lu(l,M),L=g2(l,M)}let W;this.getUniforms=function(){return W===void 0&&B(this),W};let L;this.getAttributes=function(){return L===void 0&&B(this),L};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(M,l2)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(M),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=c2++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=F,this.fragmentShader=N,this}let w2=0;class D2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new U2(e),i.set(e,r)),r}}class U2{constructor(e){this.id=w2++,this.code=e,this.usedTimes=0}}function L2(s,e,i,r,l,c,f){const h=new y_,m=new D2,p=new Set,g=[],x=l.logarithmicDepthBuffer,_=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(L){return p.add(L),L===0?"uv":`uv${L}`}function y(L,R,H,Y,oe){const de=Y.fog,K=oe.geometry,D=L.isMeshStandardMaterial?Y.environment:null,j=(L.isMeshStandardMaterial?i:e).get(L.envMap||D),I=j&&j.mapping===yu?j.image.height:null,ce=E[L.type];L.precision!==null&&(S=l.getMaxPrecision(L.precision),S!==L.precision&&ut("WebGLProgram.getParameters:",L.precision,"not supported, using",S,"instead."));const ve=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,z=ve!==void 0?ve.length:0;let te=0;K.morphAttributes.position!==void 0&&(te=1),K.morphAttributes.normal!==void 0&&(te=2),K.morphAttributes.color!==void 0&&(te=3);let xe,Se,Pe,re;if(ce){const Nt=Hi[ce];xe=Nt.vertexShader,Se=Nt.fragmentShader}else xe=L.vertexShader,Se=L.fragmentShader,m.update(L),Pe=m.getVertexShaderID(L),re=m.getFragmentShaderID(L);const le=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),Ie=oe.isInstancedMesh===!0,Ve=oe.isBatchedMesh===!0,ot=!!L.map,Qt=!!L.matcap,mt=!!j,Lt=!!L.aoMap,k=!!L.lightMap,xt=!!L.bumpMap,_t=!!L.normalMap,Ht=!!L.displacementMap,ke=!!L.emissiveMap,Yt=!!L.metalnessMap,Qe=!!L.roughnessMap,lt=L.anisotropy>0,P=L.clearcoat>0,T=L.dispersion>0,ne=L.iridescence>0,_e=L.sheen>0,Me=L.transmission>0,pe=lt&&!!L.anisotropyMap,Ze=P&&!!L.clearcoatMap,Ne=P&&!!L.clearcoatNormalMap,et=P&&!!L.clearcoatRoughnessMap,Ye=ne&&!!L.iridescenceMap,Ee=ne&&!!L.iridescenceThicknessMap,Ae=_e&&!!L.sheenColorMap,Ke=_e&&!!L.sheenRoughnessMap,Xe=!!L.specularMap,ze=!!L.specularColorMap,rt=!!L.specularIntensityMap,X=Me&&!!L.transmissionMap,Ue=Me&&!!L.thicknessMap,Ce=!!L.gradientMap,we=!!L.alphaMap,Te=L.alphaTest>0,be=!!L.alphaHash,Fe=!!L.extensions;let st=cr;L.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(st=s.toneMapping);const kt={shaderID:ce,shaderType:L.type,shaderName:L.name,vertexShader:xe,fragmentShader:Se,defines:L.defines,customVertexShaderID:Pe,customFragmentShaderID:re,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:S,batching:Ve,batchingColor:Ve&&oe._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&oe.instanceColor!==null,instancingMorph:Ie&&oe.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ks,alphaToCoverage:!!L.alphaToCoverage,map:ot,matcap:Qt,envMap:mt,envMapMode:mt&&j.mapping,envMapCubeUVHeight:I,aoMap:Lt,lightMap:k,bumpMap:xt,normalMap:_t,displacementMap:_&&Ht,emissiveMap:ke,normalMapObjectSpace:_t&&L.normalMapType===SE,normalMapTangentSpace:_t&&L.normalMapType===m_,metalnessMap:Yt,roughnessMap:Qe,anisotropy:lt,anisotropyMap:pe,clearcoat:P,clearcoatMap:Ze,clearcoatNormalMap:Ne,clearcoatRoughnessMap:et,dispersion:T,iridescence:ne,iridescenceMap:Ye,iridescenceThicknessMap:Ee,sheen:_e,sheenColorMap:Ae,sheenRoughnessMap:Ke,specularMap:Xe,specularColorMap:ze,specularIntensityMap:rt,transmission:Me,transmissionMap:X,thicknessMap:Ue,gradientMap:Ce,opaque:L.transparent===!1&&L.blending===Bs&&L.alphaToCoverage===!1,alphaMap:we,alphaTest:Te,alphaHash:be,combine:L.combine,mapUv:ot&&M(L.map.channel),aoMapUv:Lt&&M(L.aoMap.channel),lightMapUv:k&&M(L.lightMap.channel),bumpMapUv:xt&&M(L.bumpMap.channel),normalMapUv:_t&&M(L.normalMap.channel),displacementMapUv:Ht&&M(L.displacementMap.channel),emissiveMapUv:ke&&M(L.emissiveMap.channel),metalnessMapUv:Yt&&M(L.metalnessMap.channel),roughnessMapUv:Qe&&M(L.roughnessMap.channel),anisotropyMapUv:pe&&M(L.anisotropyMap.channel),clearcoatMapUv:Ze&&M(L.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&M(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&M(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&M(L.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&M(L.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&M(L.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&M(L.sheenRoughnessMap.channel),specularMapUv:Xe&&M(L.specularMap.channel),specularColorMapUv:ze&&M(L.specularColorMap.channel),specularIntensityMapUv:rt&&M(L.specularIntensityMap.channel),transmissionMapUv:X&&M(L.transmissionMap.channel),thicknessMapUv:Ue&&M(L.thicknessMap.channel),alphaMapUv:we&&M(L.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(_t||lt),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!K.attributes.uv&&(ot||we),fog:!!de,useFog:L.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:L.flatShading===!0&&L.wireframe===!1,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:De,skinning:oe.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:ot&&L.map.isVideoTexture===!0&&It.getTransfer(L.map.colorSpace)===jt,decodeVideoTextureEmissive:ke&&L.emissiveMap.isVideoTexture===!0&&It.getTransfer(L.emissiveMap.colorSpace)===jt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===ya,flipSided:L.side===Zn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Fe&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&L.extensions.multiDraw===!0||Ve)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return kt.vertexUv1s=p.has(1),kt.vertexUv2s=p.has(2),kt.vertexUv3s=p.has(3),p.clear(),kt}function v(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const H in L.defines)R.push(H),R.push(L.defines[H]);return L.isRawShaderMaterial===!1&&(U(R,L),C(R,L),R.push(s.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function U(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function C(L,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),L.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),L.push(h.mask)}function O(L){const R=E[L.type];let H;if(R){const Y=Hi[R];H=QE.clone(Y.uniforms)}else H=L.uniforms;return H}function F(L,R){let H;for(let Y=0,oe=g.length;Y<oe;Y++){const de=g[Y];if(de.cacheKey===R){H=de,++H.usedTimes;break}}return H===void 0&&(H=new C2(s,R,L,c),g.push(H)),H}function N(L){if(--L.usedTimes===0){const R=g.indexOf(L);g[R]=g[g.length-1],g.pop(),L.destroy()}}function B(L){m.remove(L)}function W(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:O,acquireProgram:F,releaseProgram:N,releaseShaderCache:B,programs:g,dispose:W}}function N2(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function O2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Cv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(x,_,S,E,M,y){let v=s[e];return v===void 0?(v={id:x.id,object:x,geometry:_,material:S,groupOrder:E,renderOrder:x.renderOrder,z:M,group:y},s[e]=v):(v.id=x.id,v.object=x,v.geometry=_,v.material=S,v.groupOrder=E,v.renderOrder=x.renderOrder,v.z=M,v.group=y),e++,v}function h(x,_,S,E,M,y){const v=f(x,_,S,E,M,y);S.transmission>0?r.push(v):S.transparent===!0?l.push(v):i.push(v)}function m(x,_,S,E,M,y){const v=f(x,_,S,E,M,y);S.transmission>0?r.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,_){i.length>1&&i.sort(x||O2),r.length>1&&r.sort(_||Cv),l.length>1&&l.sort(_||Cv)}function g(){for(let x=e,_=s.length;x<_;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function P2(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new wv,s.set(r,[f])):l>=c.length?(f=new wv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function z2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new fe,color:new Tt};break;case"SpotLight":i={position:new fe,direction:new fe,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new fe,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new fe,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":i={color:new Tt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return s[e.id]=i,i}}}function I2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let B2=0;function F2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function H2(s){const e=new z2,i=I2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new fe);const l=new fe,c=new ln,f=new ln;function h(p){let g=0,x=0,_=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let S=0,E=0,M=0,y=0,v=0,U=0,C=0,O=0,F=0,N=0,B=0;p.sort(F2);for(let L=0,R=p.length;L<R;L++){const H=p[L],Y=H.color,oe=H.intensity,de=H.distance,K=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=Y.r*oe,x+=Y.g*oe,_+=Y.b*oe;else if(H.isLightProbe){for(let D=0;D<9;D++)r.probe[D].addScaledVector(H.sh.coefficients[D],oe);B++}else if(H.isDirectionalLight){const D=e.get(H);if(D.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const j=H.shadow,I=i.get(H);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,r.directionalShadow[S]=I,r.directionalShadowMap[S]=K,r.directionalShadowMatrix[S]=H.shadow.matrix,U++}r.directional[S]=D,S++}else if(H.isSpotLight){const D=e.get(H);D.position.setFromMatrixPosition(H.matrixWorld),D.color.copy(Y).multiplyScalar(oe),D.distance=de,D.coneCos=Math.cos(H.angle),D.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),D.decay=H.decay,r.spot[M]=D;const j=H.shadow;if(H.map&&(r.spotLightMap[F]=H.map,F++,j.updateMatrices(H),H.castShadow&&N++),r.spotLightMatrix[M]=j.matrix,H.castShadow){const I=i.get(H);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,r.spotShadow[M]=I,r.spotShadowMap[M]=K,O++}M++}else if(H.isRectAreaLight){const D=e.get(H);D.color.copy(Y).multiplyScalar(oe),D.halfWidth.set(H.width*.5,0,0),D.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=D,y++}else if(H.isPointLight){const D=e.get(H);if(D.color.copy(H.color).multiplyScalar(H.intensity),D.distance=H.distance,D.decay=H.decay,H.castShadow){const j=H.shadow,I=i.get(H);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,I.shadowCameraNear=j.camera.near,I.shadowCameraFar=j.camera.far,r.pointShadow[E]=I,r.pointShadowMap[E]=K,r.pointShadowMatrix[E]=H.shadow.matrix,C++}r.point[E]=D,E++}else if(H.isHemisphereLight){const D=e.get(H);D.skyColor.copy(H.color).multiplyScalar(oe),D.groundColor.copy(H.groundColor).multiplyScalar(oe),r.hemi[v]=D,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=_;const W=r.hash;(W.directionalLength!==S||W.pointLength!==E||W.spotLength!==M||W.rectAreaLength!==y||W.hemiLength!==v||W.numDirectionalShadows!==U||W.numPointShadows!==C||W.numSpotShadows!==O||W.numSpotMaps!==F||W.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=M,r.rectArea.length=y,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=O+F-N,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=B,W.directionalLength=S,W.pointLength=E,W.spotLength=M,W.rectAreaLength=y,W.hemiLength=v,W.numDirectionalShadows=U,W.numPointShadows=C,W.numSpotShadows=O,W.numSpotMaps=F,W.numLightProbes=B,r.version=B2++)}function m(p,g){let x=0,_=0,S=0,E=0,M=0;const y=g.matrixWorldInverse;for(let v=0,U=p.length;v<U;v++){const C=p[v];if(C.isDirectionalLight){const O=r.directional[x];O.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),x++}else if(C.isSpotLight){const O=r.spot[S];O.position.setFromMatrixPosition(C.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),S++}else if(C.isRectAreaLight){const O=r.rectArea[E];O.position.setFromMatrixPosition(C.matrixWorld),O.position.applyMatrix4(y),f.identity(),c.copy(C.matrixWorld),c.premultiply(y),f.extractRotation(c),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),O.halfWidth.applyMatrix4(f),O.halfHeight.applyMatrix4(f),E++}else if(C.isPointLight){const O=r.point[_];O.position.setFromMatrixPosition(C.matrixWorld),O.position.applyMatrix4(y),_++}else if(C.isHemisphereLight){const O=r.hemi[M];O.direction.setFromMatrixPosition(C.matrixWorld),O.direction.transformDirection(y),M++}}}return{setup:h,setupView:m,state:r}}function Dv(s){const e=new H2(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function G2(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new Dv(s),e.set(l,[h])):c>=f.length?(h=new Dv(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const V2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function X2(s,e,i){let r=new Dp;const l=new Ut,c=new Ut,f=new on,h=new u1({depthPacking:bE}),m=new f1,p={},g=i.maxTextureSize,x={[fr]:Zn,[Zn]:fr,[ya]:ya},_=new Ra({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:V2,fragmentShader:k2}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new Ni;E.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Di(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a_;let v=this.type;this.render=function(N,B,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const L=s.getRenderTarget(),R=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(Ea),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const oe=v!==_a&&this.type===_a,de=v===_a&&this.type!==_a;for(let K=0,D=N.length;K<D;K++){const j=N[K],I=j.shadow;if(I===void 0){ut("WebGLShadowMap:",j,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const ce=I.getFrameExtents();if(l.multiply(ce),c.copy(I.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ce.x),l.x=c.x*ce.x,I.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ce.y),l.y=c.y*ce.y,I.mapSize.y=c.y)),I.map===null||oe===!0||de===!0){const z=this.type!==_a?{minFilter:li,magFilter:li}:{};I.map!==null&&I.map.dispose(),I.map=new Vr(l.x,l.y,z),I.map.texture.name=j.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const ve=I.getViewportCount();for(let z=0;z<ve;z++){const te=I.getViewport(z);f.set(c.x*te.x,c.y*te.y,c.x*te.z,c.y*te.w),Y.viewport(f),I.updateMatrices(j,z),r=I.getFrustum(),O(B,W,I.camera,j,this.type)}I.isPointLightShadow!==!0&&this.type===_a&&U(I,W),I.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(L,R,H)};function U(N,B){const W=e.update(M);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Vr(l.x,l.y)),_.uniforms.shadow_pass.value=N.map.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(B,null,W,_,M,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(B,null,W,S,M,null)}function C(N,B,W,L){let R=null;const H=W.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)R=H;else if(R=W.isPointLight===!0?m:h,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Y=R.uuid,oe=B.uuid;let de=p[Y];de===void 0&&(de={},p[Y]=de);let K=de[oe];K===void 0&&(K=R.clone(),de[oe]=K,B.addEventListener("dispose",F)),R=K}if(R.visible=B.visible,R.wireframe=B.wireframe,L===_a?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:x[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Y=s.properties.get(R);Y.light=W}return R}function O(N,B,W,L,R){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===_a)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,N.matrixWorld);const oe=e.update(N),de=N.material;if(Array.isArray(de)){const K=oe.groups;for(let D=0,j=K.length;D<j;D++){const I=K[D],ce=de[I.materialIndex];if(ce&&ce.visible){const ve=C(N,ce,L,R);N.onBeforeShadow(s,N,B,W,oe,ve,I),s.renderBufferDirect(W,null,oe,ve,N,I),N.onAfterShadow(s,N,B,W,oe,ve,I)}}}else if(de.visible){const K=C(N,de,L,R);N.onBeforeShadow(s,N,B,W,oe,K,null),s.renderBufferDirect(W,null,oe,K,N,null),N.onAfterShadow(s,N,B,W,oe,K,null)}}const Y=N.children;for(let oe=0,de=Y.length;oe<de;oe++)O(Y[oe],B,W,L,R)}function F(N){N.target.removeEventListener("dispose",F);for(const W in p){const L=p[W],R=N.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}const W2={[Th]:Ah,[Rh]:Dh,[Ch]:Uh,[Hs]:wh,[Ah]:Th,[Dh]:Rh,[Uh]:Ch,[wh]:Hs};function q2(s,e){function i(){let X=!1;const Ue=new on;let Ce=null;const we=new on(0,0,0,0);return{setMask:function(Te){Ce!==Te&&!X&&(s.colorMask(Te,Te,Te,Te),Ce=Te)},setLocked:function(Te){X=Te},setClear:function(Te,be,Fe,st,kt){kt===!0&&(Te*=st,be*=st,Fe*=st),Ue.set(Te,be,Fe,st),we.equals(Ue)===!1&&(s.clearColor(Te,be,Fe,st),we.copy(Ue))},reset:function(){X=!1,Ce=null,we.set(-1,0,0,0)}}}function r(){let X=!1,Ue=!1,Ce=null,we=null,Te=null;return{setReversed:function(be){if(Ue!==be){const Fe=e.get("EXT_clip_control");be?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Ue=be;const st=Te;Te=null,this.setClear(st)}},getReversed:function(){return Ue},setTest:function(be){be?le(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(be){Ce!==be&&!X&&(s.depthMask(be),Ce=be)},setFunc:function(be){if(Ue&&(be=W2[be]),we!==be){switch(be){case Th:s.depthFunc(s.NEVER);break;case Ah:s.depthFunc(s.ALWAYS);break;case Rh:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case Ch:s.depthFunc(s.EQUAL);break;case wh:s.depthFunc(s.GEQUAL);break;case Dh:s.depthFunc(s.GREATER);break;case Uh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=be}},setLocked:function(be){X=be},setClear:function(be){Te!==be&&(Ue&&(be=1-be),s.clearDepth(be),Te=be)},reset:function(){X=!1,Ce=null,we=null,Te=null,Ue=!1}}}function l(){let X=!1,Ue=null,Ce=null,we=null,Te=null,be=null,Fe=null,st=null,kt=null;return{setTest:function(Nt){X||(Nt?le(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(Nt){Ue!==Nt&&!X&&(s.stencilMask(Nt),Ue=Nt)},setFunc:function(Nt,Pn,Qn){(Ce!==Nt||we!==Pn||Te!==Qn)&&(s.stencilFunc(Nt,Pn,Qn),Ce=Nt,we=Pn,Te=Qn)},setOp:function(Nt,Pn,Qn){(be!==Nt||Fe!==Pn||st!==Qn)&&(s.stencilOp(Nt,Pn,Qn),be=Nt,Fe=Pn,st=Qn)},setLocked:function(Nt){X=Nt},setClear:function(Nt){kt!==Nt&&(s.clearStencil(Nt),kt=Nt)},reset:function(){X=!1,Ue=null,Ce=null,we=null,Te=null,be=null,Fe=null,st=null,kt=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},x={},_=new WeakMap,S=[],E=null,M=!1,y=null,v=null,U=null,C=null,O=null,F=null,N=null,B=new Tt(0,0,0),W=0,L=!1,R=null,H=null,Y=null,oe=null,de=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,j=0;const I=s.getParameter(s.VERSION);I.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(I)[1]),D=j>=1):I.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),D=j>=2);let ce=null,ve={};const z=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),xe=new on().fromArray(z),Se=new on().fromArray(te);function Pe(X,Ue,Ce,we){const Te=new Uint8Array(4),be=s.createTexture();s.bindTexture(X,be),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Fe=0;Fe<Ce;Fe++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Ue+Fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return be}const re={};re[s.TEXTURE_2D]=Pe(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=Pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=Pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=Pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),le(s.DEPTH_TEST),f.setFunc(Hs),xt(!1),_t(Dg),le(s.CULL_FACE),Lt(Ea);function le(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function De(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function Ie(X,Ue){return x[X]!==Ue?(s.bindFramebuffer(X,Ue),x[X]=Ue,X===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ue),X===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Ve(X,Ue){let Ce=S,we=!1;if(X){Ce=_.get(Ue),Ce===void 0&&(Ce=[],_.set(Ue,Ce));const Te=X.textures;if(Ce.length!==Te.length||Ce[0]!==s.COLOR_ATTACHMENT0){for(let be=0,Fe=Te.length;be<Fe;be++)Ce[be]=s.COLOR_ATTACHMENT0+be;Ce.length=Te.length,we=!0}}else Ce[0]!==s.BACK&&(Ce[0]=s.BACK,we=!0);we&&s.drawBuffers(Ce)}function ot(X){return E!==X?(s.useProgram(X),E=X,!0):!1}const Qt={[Br]:s.FUNC_ADD,[jM]:s.FUNC_SUBTRACT,[YM]:s.FUNC_REVERSE_SUBTRACT};Qt[ZM]=s.MIN,Qt[KM]=s.MAX;const mt={[QM]:s.ZERO,[JM]:s.ONE,[$M]:s.SRC_COLOR,[Mh]:s.SRC_ALPHA,[rE]:s.SRC_ALPHA_SATURATE,[iE]:s.DST_COLOR,[tE]:s.DST_ALPHA,[eE]:s.ONE_MINUS_SRC_COLOR,[Eh]:s.ONE_MINUS_SRC_ALPHA,[aE]:s.ONE_MINUS_DST_COLOR,[nE]:s.ONE_MINUS_DST_ALPHA,[sE]:s.CONSTANT_COLOR,[oE]:s.ONE_MINUS_CONSTANT_COLOR,[lE]:s.CONSTANT_ALPHA,[cE]:s.ONE_MINUS_CONSTANT_ALPHA};function Lt(X,Ue,Ce,we,Te,be,Fe,st,kt,Nt){if(X===Ea){M===!0&&(De(s.BLEND),M=!1);return}if(M===!1&&(le(s.BLEND),M=!0),X!==qM){if(X!==y||Nt!==L){if((v!==Br||O!==Br)&&(s.blendEquation(s.FUNC_ADD),v=Br,O=Br),Nt)switch(X){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ug:s.blendFunc(s.ONE,s.ONE);break;case Lg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ng:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:fn("WebGLState: Invalid blending: ",X);break}else switch(X){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ug:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Lg:fn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ng:fn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:fn("WebGLState: Invalid blending: ",X);break}U=null,C=null,F=null,N=null,B.set(0,0,0),W=0,y=X,L=Nt}return}Te=Te||Ue,be=be||Ce,Fe=Fe||we,(Ue!==v||Te!==O)&&(s.blendEquationSeparate(Qt[Ue],Qt[Te]),v=Ue,O=Te),(Ce!==U||we!==C||be!==F||Fe!==N)&&(s.blendFuncSeparate(mt[Ce],mt[we],mt[be],mt[Fe]),U=Ce,C=we,F=be,N=Fe),(st.equals(B)===!1||kt!==W)&&(s.blendColor(st.r,st.g,st.b,kt),B.copy(st),W=kt),y=X,L=!1}function k(X,Ue){X.side===ya?De(s.CULL_FACE):le(s.CULL_FACE);let Ce=X.side===Zn;Ue&&(Ce=!Ce),xt(Ce),X.blending===Bs&&X.transparent===!1?Lt(Ea):Lt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const we=X.stencilWrite;h.setTest(we),we&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ke(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function xt(X){R!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),R=X)}function _t(X){X!==XM?(le(s.CULL_FACE),X!==H&&(X===Dg?s.cullFace(s.BACK):X===WM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),H=X}function Ht(X){X!==Y&&(D&&s.lineWidth(X),Y=X)}function ke(X,Ue,Ce){X?(le(s.POLYGON_OFFSET_FILL),(oe!==Ue||de!==Ce)&&(s.polygonOffset(Ue,Ce),oe=Ue,de=Ce)):De(s.POLYGON_OFFSET_FILL)}function Yt(X){X?le(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function Qe(X){X===void 0&&(X=s.TEXTURE0+K-1),ce!==X&&(s.activeTexture(X),ce=X)}function lt(X,Ue,Ce){Ce===void 0&&(ce===null?Ce=s.TEXTURE0+K-1:Ce=ce);let we=ve[Ce];we===void 0&&(we={type:void 0,texture:void 0},ve[Ce]=we),(we.type!==X||we.texture!==Ue)&&(ce!==Ce&&(s.activeTexture(Ce),ce=Ce),s.bindTexture(X,Ue||re[X]),we.type=X,we.texture=Ue)}function P(){const X=ve[ce];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function ne(){try{s.compressedTexImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function _e(){try{s.texSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Me(){try{s.texSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function pe(){try{s.compressedTexSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Ze(){try{s.compressedTexSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Ne(){try{s.texStorage2D(...arguments)}catch(X){X("WebGLState:",X)}}function et(){try{s.texStorage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Ye(){try{s.texImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Ee(){try{s.texImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Ae(X){xe.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),xe.copy(X))}function Ke(X){Se.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Se.copy(X))}function Xe(X,Ue){let Ce=p.get(Ue);Ce===void 0&&(Ce=new WeakMap,p.set(Ue,Ce));let we=Ce.get(X);we===void 0&&(we=s.getUniformBlockIndex(Ue,X.name),Ce.set(X,we))}function ze(X,Ue){const we=p.get(Ue).get(X);m.get(Ue)!==we&&(s.uniformBlockBinding(Ue,we,X.__bindingPointIndex),m.set(Ue,we))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ce=null,ve={},x={},_=new WeakMap,S=[],E=null,M=!1,y=null,v=null,U=null,C=null,O=null,F=null,N=null,B=new Tt(0,0,0),W=0,L=!1,R=null,H=null,Y=null,oe=null,de=null,xe.set(0,0,s.canvas.width,s.canvas.height),Se.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:le,disable:De,bindFramebuffer:Ie,drawBuffers:Ve,useProgram:ot,setBlending:Lt,setMaterial:k,setFlipSided:xt,setCullFace:_t,setLineWidth:Ht,setPolygonOffset:ke,setScissorTest:Yt,activeTexture:Qe,bindTexture:lt,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:ne,texImage2D:Ye,texImage3D:Ee,updateUBOMapping:Xe,uniformBlockBinding:ze,texStorage2D:Ne,texStorage3D:et,texSubImage2D:_e,texSubImage3D:Me,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ze,scissor:Ae,viewport:Ke,reset:rt}}function j2(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ut,g=new WeakMap;let x;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,T){return S?new OffscreenCanvas(P,T):hu("canvas")}function M(P,T,ne){let _e=1;const Me=lt(P);if((Me.width>ne||Me.height>ne)&&(_e=ne/Math.max(Me.width,Me.height)),_e<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const pe=Math.floor(_e*Me.width),Ze=Math.floor(_e*Me.height);x===void 0&&(x=E(pe,Ze));const Ne=T?E(pe,Ze):x;return Ne.width=pe,Ne.height=Ze,Ne.getContext("2d").drawImage(P,0,0,pe,Ze),ut("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+pe+"x"+Ze+")."),Ne}else return"data"in P&&ut("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),P;return P}function y(P){return P.generateMipmaps}function v(P){s.generateMipmap(P)}function U(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(P,T,ne,_e,Me=!1){if(P!==null){if(s[P]!==void 0)return s[P];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe=T;if(T===s.RED&&(ne===s.FLOAT&&(pe=s.R32F),ne===s.HALF_FLOAT&&(pe=s.R16F),ne===s.UNSIGNED_BYTE&&(pe=s.R8)),T===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(pe=s.R8UI),ne===s.UNSIGNED_SHORT&&(pe=s.R16UI),ne===s.UNSIGNED_INT&&(pe=s.R32UI),ne===s.BYTE&&(pe=s.R8I),ne===s.SHORT&&(pe=s.R16I),ne===s.INT&&(pe=s.R32I)),T===s.RG&&(ne===s.FLOAT&&(pe=s.RG32F),ne===s.HALF_FLOAT&&(pe=s.RG16F),ne===s.UNSIGNED_BYTE&&(pe=s.RG8)),T===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(pe=s.RG8UI),ne===s.UNSIGNED_SHORT&&(pe=s.RG16UI),ne===s.UNSIGNED_INT&&(pe=s.RG32UI),ne===s.BYTE&&(pe=s.RG8I),ne===s.SHORT&&(pe=s.RG16I),ne===s.INT&&(pe=s.RG32I)),T===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),ne===s.UNSIGNED_INT&&(pe=s.RGB32UI),ne===s.BYTE&&(pe=s.RGB8I),ne===s.SHORT&&(pe=s.RGB16I),ne===s.INT&&(pe=s.RGB32I)),T===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),ne===s.UNSIGNED_INT&&(pe=s.RGBA32UI),ne===s.BYTE&&(pe=s.RGBA8I),ne===s.SHORT&&(pe=s.RGBA16I),ne===s.INT&&(pe=s.RGBA32I)),T===s.RGB&&(ne===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),T===s.RGBA){const Ze=Me?fu:It.getTransfer(_e);ne===s.FLOAT&&(pe=s.RGBA32F),ne===s.HALF_FLOAT&&(pe=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(pe=Ze===jt?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function O(P,T){let ne;return P?T===null||T===Gr||T===ol?ne=s.DEPTH24_STENCIL8:T===Sa?ne=s.DEPTH32F_STENCIL8:T===sl&&(ne=s.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Gr||T===ol?ne=s.DEPTH_COMPONENT24:T===Sa?ne=s.DEPTH_COMPONENT32F:T===sl&&(ne=s.DEPTH_COMPONENT16),ne}function F(P,T){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==li&&P.minFilter!==yi?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function N(P){const T=P.target;T.removeEventListener("dispose",N),W(T),T.isVideoTexture&&g.delete(T)}function B(P){const T=P.target;T.removeEventListener("dispose",B),R(T)}function W(P){const T=r.get(P);if(T.__webglInit===void 0)return;const ne=P.source,_e=_.get(ne);if(_e){const Me=_e[T.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&L(P),Object.keys(_e).length===0&&_.delete(ne)}r.remove(P)}function L(P){const T=r.get(P);s.deleteTexture(T.__webglTexture);const ne=P.source,_e=_.get(ne);delete _e[T.__cacheKey],f.memory.textures--}function R(P){const T=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(T.__webglFramebuffer[_e]))for(let Me=0;Me<T.__webglFramebuffer[_e].length;Me++)s.deleteFramebuffer(T.__webglFramebuffer[_e][Me]);else s.deleteFramebuffer(T.__webglFramebuffer[_e]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[_e])}else{if(Array.isArray(T.__webglFramebuffer))for(let _e=0;_e<T.__webglFramebuffer.length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[_e]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _e=0;_e<T.__webglColorRenderbuffer.length;_e++)T.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[_e]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ne=P.textures;for(let _e=0,Me=ne.length;_e<Me;_e++){const pe=r.get(ne[_e]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),f.memory.textures--),r.remove(ne[_e])}r.remove(P)}let H=0;function Y(){H=0}function oe(){const P=H;return P>=l.maxTextures&&ut("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),H+=1,P}function de(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function K(P,T){const ne=r.get(P);if(P.isVideoTexture&&Yt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&ne.__version!==P.version){const _e=P.image;if(_e===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{re(ne,P,T);return}}else P.isExternalTexture&&(ne.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+T)}function D(P,T){const ne=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ne.__version!==P.version){re(ne,P,T);return}else P.isExternalTexture&&(ne.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+T)}function j(P,T){const ne=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ne.__version!==P.version){re(ne,P,T);return}i.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+T)}function I(P,T){const ne=r.get(P);if(P.version>0&&ne.__version!==P.version){le(ne,P,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+T)}const ce={[Oh]:s.REPEAT,[ba]:s.CLAMP_TO_EDGE,[Ph]:s.MIRRORED_REPEAT},ve={[li]:s.NEAREST,[_E]:s.NEAREST_MIPMAP_NEAREST,[Dc]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[Fd]:s.LINEAR_MIPMAP_NEAREST,[Hr]:s.LINEAR_MIPMAP_LINEAR},z={[ME]:s.NEVER,[wE]:s.ALWAYS,[EE]:s.LESS,[x_]:s.LEQUAL,[TE]:s.EQUAL,[CE]:s.GEQUAL,[AE]:s.GREATER,[RE]:s.NOTEQUAL};function te(P,T){if(T.type===Sa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===yi||T.magFilter===Fd||T.magFilter===Dc||T.magFilter===Hr||T.minFilter===yi||T.minFilter===Fd||T.minFilter===Dc||T.minFilter===Hr)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ce[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ce[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ce[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ve[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ve[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===li||T.minFilter!==Dc&&T.minFilter!==Hr||T.type===Sa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function xe(P,T){let ne=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",N));const _e=T.source;let Me=_.get(_e);Me===void 0&&(Me={},_.set(_e,Me));const pe=de(T);if(pe!==P.__cacheKey){Me[pe]===void 0&&(Me[pe]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,ne=!0),Me[pe].usedTimes++;const Ze=Me[P.__cacheKey];Ze!==void 0&&(Me[P.__cacheKey].usedTimes--,Ze.usedTimes===0&&L(T)),P.__cacheKey=pe,P.__webglTexture=Me[pe].texture}return ne}function Se(P,T,ne){return Math.floor(Math.floor(P/ne)/T)}function Pe(P,T,ne,_e){const pe=P.updateRanges;if(pe.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,ne,_e,T.data);else{pe.sort((Ee,Ae)=>Ee.start-Ae.start);let Ze=0;for(let Ee=1;Ee<pe.length;Ee++){const Ae=pe[Ze],Ke=pe[Ee],Xe=Ae.start+Ae.count,ze=Se(Ke.start,T.width,4),rt=Se(Ae.start,T.width,4);Ke.start<=Xe+1&&ze===rt&&Se(Ke.start+Ke.count-1,T.width,4)===ze?Ae.count=Math.max(Ae.count,Ke.start+Ke.count-Ae.start):(++Ze,pe[Ze]=Ke)}pe.length=Ze+1;const Ne=s.getParameter(s.UNPACK_ROW_LENGTH),et=s.getParameter(s.UNPACK_SKIP_PIXELS),Ye=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Ee=0,Ae=pe.length;Ee<Ae;Ee++){const Ke=pe[Ee],Xe=Math.floor(Ke.start/4),ze=Math.ceil(Ke.count/4),rt=Xe%T.width,X=Math.floor(Xe/T.width),Ue=ze,Ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,rt,X,Ue,Ce,ne,_e,T.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ne),s.pixelStorei(s.UNPACK_SKIP_PIXELS,et),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ye)}}function re(P,T,ne){let _e=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_e=s.TEXTURE_3D);const Me=xe(P,T),pe=T.source;i.bindTexture(_e,P.__webglTexture,s.TEXTURE0+ne);const Ze=r.get(pe);if(pe.version!==Ze.__version||Me===!0){i.activeTexture(s.TEXTURE0+ne);const Ne=It.getPrimaries(It.workingColorSpace),et=T.colorSpace===or?null:It.getPrimaries(T.colorSpace),Ye=T.colorSpace===or||Ne===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Ee=M(T.image,!1,l.maxTextureSize);Ee=Qe(T,Ee);const Ae=c.convert(T.format,T.colorSpace),Ke=c.convert(T.type);let Xe=C(T.internalFormat,Ae,Ke,T.colorSpace,T.isVideoTexture);te(_e,T);let ze;const rt=T.mipmaps,X=T.isVideoTexture!==!0,Ue=Ze.__version===void 0||Me===!0,Ce=pe.dataReady,we=F(T,Ee);if(T.isDepthTexture)Xe=O(T.format===cl,T.type),Ue&&(X?i.texStorage2D(s.TEXTURE_2D,1,Xe,Ee.width,Ee.height):i.texImage2D(s.TEXTURE_2D,0,Xe,Ee.width,Ee.height,0,Ae,Ke,null));else if(T.isDataTexture)if(rt.length>0){X&&Ue&&i.texStorage2D(s.TEXTURE_2D,we,Xe,rt[0].width,rt[0].height);for(let Te=0,be=rt.length;Te<be;Te++)ze=rt[Te],X?Ce&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,ze.width,ze.height,Ae,Ke,ze.data):i.texImage2D(s.TEXTURE_2D,Te,Xe,ze.width,ze.height,0,Ae,Ke,ze.data);T.generateMipmaps=!1}else X?(Ue&&i.texStorage2D(s.TEXTURE_2D,we,Xe,Ee.width,Ee.height),Ce&&Pe(T,Ee,Ae,Ke)):i.texImage2D(s.TEXTURE_2D,0,Xe,Ee.width,Ee.height,0,Ae,Ke,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Ue&&i.texStorage3D(s.TEXTURE_2D_ARRAY,we,Xe,rt[0].width,rt[0].height,Ee.depth);for(let Te=0,be=rt.length;Te<be;Te++)if(ze=rt[Te],T.format!==wi)if(Ae!==null)if(X){if(Ce)if(T.layerUpdates.size>0){const Fe=ov(ze.width,ze.height,T.format,T.type);for(const st of T.layerUpdates){const kt=ze.data.subarray(st*Fe/ze.data.BYTES_PER_ELEMENT,(st+1)*Fe/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,st,ze.width,ze.height,1,Ae,kt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ze.width,ze.height,Ee.depth,Ae,ze.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,Xe,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ce&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ze.width,ze.height,Ee.depth,Ae,Ke,ze.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Te,Xe,ze.width,ze.height,Ee.depth,0,Ae,Ke,ze.data)}else{X&&Ue&&i.texStorage2D(s.TEXTURE_2D,we,Xe,rt[0].width,rt[0].height);for(let Te=0,be=rt.length;Te<be;Te++)ze=rt[Te],T.format!==wi?Ae!==null?X?Ce&&i.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,ze.width,ze.height,Ae,ze.data):i.compressedTexImage2D(s.TEXTURE_2D,Te,Xe,ze.width,ze.height,0,ze.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ce&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,ze.width,ze.height,Ae,Ke,ze.data):i.texImage2D(s.TEXTURE_2D,Te,Xe,ze.width,ze.height,0,Ae,Ke,ze.data)}else if(T.isDataArrayTexture)if(X){if(Ue&&i.texStorage3D(s.TEXTURE_2D_ARRAY,we,Xe,Ee.width,Ee.height,Ee.depth),Ce)if(T.layerUpdates.size>0){const Te=ov(Ee.width,Ee.height,T.format,T.type);for(const be of T.layerUpdates){const Fe=Ee.data.subarray(be*Te/Ee.data.BYTES_PER_ELEMENT,(be+1)*Te/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,be,Ee.width,Ee.height,1,Ae,Ke,Fe)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Ke,Ee.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Xe,Ee.width,Ee.height,Ee.depth,0,Ae,Ke,Ee.data);else if(T.isData3DTexture)X?(Ue&&i.texStorage3D(s.TEXTURE_3D,we,Xe,Ee.width,Ee.height,Ee.depth),Ce&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Ke,Ee.data)):i.texImage3D(s.TEXTURE_3D,0,Xe,Ee.width,Ee.height,Ee.depth,0,Ae,Ke,Ee.data);else if(T.isFramebufferTexture){if(Ue)if(X)i.texStorage2D(s.TEXTURE_2D,we,Xe,Ee.width,Ee.height);else{let Te=Ee.width,be=Ee.height;for(let Fe=0;Fe<we;Fe++)i.texImage2D(s.TEXTURE_2D,Fe,Xe,Te,be,0,Ae,Ke,null),Te>>=1,be>>=1}}else if(rt.length>0){if(X&&Ue){const Te=lt(rt[0]);i.texStorage2D(s.TEXTURE_2D,we,Xe,Te.width,Te.height)}for(let Te=0,be=rt.length;Te<be;Te++)ze=rt[Te],X?Ce&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ae,Ke,ze):i.texImage2D(s.TEXTURE_2D,Te,Xe,Ae,Ke,ze);T.generateMipmaps=!1}else if(X){if(Ue){const Te=lt(Ee);i.texStorage2D(s.TEXTURE_2D,we,Xe,Te.width,Te.height)}Ce&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Ke,Ee)}else i.texImage2D(s.TEXTURE_2D,0,Xe,Ae,Ke,Ee);y(T)&&v(_e),Ze.__version=pe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function le(P,T,ne){if(T.image.length!==6)return;const _e=xe(P,T),Me=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+ne);const pe=r.get(Me);if(Me.version!==pe.__version||_e===!0){i.activeTexture(s.TEXTURE0+ne);const Ze=It.getPrimaries(It.workingColorSpace),Ne=T.colorSpace===or?null:It.getPrimaries(T.colorSpace),et=T.colorSpace===or||Ze===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let be=0;be<6;be++)!Ye&&!Ee?Ae[be]=M(T.image[be],!0,l.maxCubemapSize):Ae[be]=Ee?T.image[be].image:T.image[be],Ae[be]=Qe(T,Ae[be]);const Ke=Ae[0],Xe=c.convert(T.format,T.colorSpace),ze=c.convert(T.type),rt=C(T.internalFormat,Xe,ze,T.colorSpace),X=T.isVideoTexture!==!0,Ue=pe.__version===void 0||_e===!0,Ce=Me.dataReady;let we=F(T,Ke);te(s.TEXTURE_CUBE_MAP,T);let Te;if(Ye){X&&Ue&&i.texStorage2D(s.TEXTURE_CUBE_MAP,we,rt,Ke.width,Ke.height);for(let be=0;be<6;be++){Te=Ae[be].mipmaps;for(let Fe=0;Fe<Te.length;Fe++){const st=Te[Fe];T.format!==wi?Xe!==null?X?Ce&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe,0,0,st.width,st.height,Xe,st.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe,rt,st.width,st.height,0,st.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe,0,0,st.width,st.height,Xe,ze,st.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe,rt,st.width,st.height,0,Xe,ze,st.data)}}}else{if(Te=T.mipmaps,X&&Ue){Te.length>0&&we++;const be=lt(Ae[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,we,rt,be.width,be.height)}for(let be=0;be<6;be++)if(Ee){X?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ae[be].width,Ae[be].height,Xe,ze,Ae[be].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,rt,Ae[be].width,Ae[be].height,0,Xe,ze,Ae[be].data);for(let Fe=0;Fe<Te.length;Fe++){const kt=Te[Fe].image[be].image;X?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe+1,0,0,kt.width,kt.height,Xe,ze,kt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe+1,rt,kt.width,kt.height,0,Xe,ze,kt.data)}}else{X?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Xe,ze,Ae[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,rt,Xe,ze,Ae[be]);for(let Fe=0;Fe<Te.length;Fe++){const st=Te[Fe];X?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe+1,0,0,Xe,ze,st.image[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe+1,rt,Xe,ze,st.image[be])}}}y(T)&&v(s.TEXTURE_CUBE_MAP),pe.__version=Me.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function De(P,T,ne,_e,Me,pe){const Ze=c.convert(ne.format,ne.colorSpace),Ne=c.convert(ne.type),et=C(ne.internalFormat,Ze,Ne,ne.colorSpace),Ye=r.get(T),Ee=r.get(ne);if(Ee.__renderTarget=T,!Ye.__hasExternalTextures){const Ae=Math.max(1,T.width>>pe),Ke=Math.max(1,T.height>>pe);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?i.texImage3D(Me,pe,et,Ae,Ke,T.depth,0,Ze,Ne,null):i.texImage2D(Me,pe,et,Ae,Ke,0,Ze,Ne,null)}i.bindFramebuffer(s.FRAMEBUFFER,P),ke(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Me,Ee.__webglTexture,0,Ht(T)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,Me,Ee.__webglTexture,pe),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(P,T,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){const _e=T.depthTexture,Me=_e&&_e.isDepthTexture?_e.type:null,pe=O(T.stencilBuffer,Me),Ze=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=Ht(T);ke(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ne,pe,T.width,T.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,pe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,pe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ze,s.RENDERBUFFER,P)}else{const _e=T.textures;for(let Me=0;Me<_e.length;Me++){const pe=_e[Me],Ze=c.convert(pe.format,pe.colorSpace),Ne=c.convert(pe.type),et=C(pe.internalFormat,Ze,Ne,pe.colorSpace),Ye=Ht(T);ne&&ke(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,et,T.width,T.height):ke(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,et,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,et,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ve(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=r.get(T.depthTexture);_e.__renderTarget=T,(!_e.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K(T.depthTexture,0);const Me=_e.__webglTexture,pe=Ht(T);if(T.depthTexture.format===ll)ke(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0);else if(T.depthTexture.format===cl)ke(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function ot(P){const T=r.get(P),ne=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const _e=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_e){const Me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_e.removeEventListener("dispose",Me)};_e.addEventListener("dispose",Me),T.__depthDisposeCallback=Me}T.__boundDepthTexture=_e}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");const _e=P.texture.mipmaps;_e&&_e.length>0?Ve(T.__webglFramebuffer[0],P):Ve(T.__webglFramebuffer,P)}else if(ne){T.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[_e]),T.__webglDepthbuffer[_e]===void 0)T.__webglDepthbuffer[_e]=s.createRenderbuffer(),Ie(T.__webglDepthbuffer[_e],P,!1);else{const Me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,pe)}}else{const _e=P.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Ie(T.__webglDepthbuffer,P,!1);else{const Me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,pe)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Qt(P,T,ne){const _e=r.get(P);T!==void 0&&De(_e.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&ot(P)}function mt(P){const T=P.texture,ne=r.get(P),_e=r.get(T);P.addEventListener("dispose",B);const Me=P.textures,pe=P.isWebGLCubeRenderTarget===!0,Ze=Me.length>1;if(Ze||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=T.version,f.memory.textures++),pe){ne.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer[Ne]=[];for(let et=0;et<T.mipmaps.length;et++)ne.__webglFramebuffer[Ne][et]=s.createFramebuffer()}else ne.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)ne.__webglFramebuffer[Ne]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Ze)for(let Ne=0,et=Me.length;Ne<et;Ne++){const Ye=r.get(Me[Ne]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),f.memory.textures++)}if(P.samples>0&&ke(P)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Me.length;Ne++){const et=Me[Ne];ne.__webglColorRenderbuffer[Ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[Ne]);const Ye=c.convert(et.format,et.colorSpace),Ee=c.convert(et.type),Ae=C(et.internalFormat,Ye,Ee,et.colorSpace,P.isXRRenderTarget===!0),Ke=Ht(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,Ae,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,ne.__webglColorRenderbuffer[Ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(ne.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){i.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),te(s.TEXTURE_CUBE_MAP,T);for(let Ne=0;Ne<6;Ne++)if(T.mipmaps&&T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)De(ne.__webglFramebuffer[Ne][et],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,et);else De(ne.__webglFramebuffer[Ne],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);y(T)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ze){for(let Ne=0,et=Me.length;Ne<et;Ne++){const Ye=Me[Ne],Ee=r.get(Ye);let Ae=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ae,Ee.__webglTexture),te(Ae,Ye),De(ne.__webglFramebuffer,P,Ye,s.COLOR_ATTACHMENT0+Ne,Ae,0),y(Ye)&&v(Ae)}i.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ne=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ne,_e.__webglTexture),te(Ne,T),T.mipmaps&&T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)De(ne.__webglFramebuffer[et],P,T,s.COLOR_ATTACHMENT0,Ne,et);else De(ne.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,Ne,0);y(T)&&v(Ne),i.unbindTexture()}P.depthBuffer&&ot(P)}function Lt(P){const T=P.textures;for(let ne=0,_e=T.length;ne<_e;ne++){const Me=T[ne];if(y(Me)){const pe=U(P),Ze=r.get(Me).__webglTexture;i.bindTexture(pe,Ze),v(pe),i.unbindTexture()}}}const k=[],xt=[];function _t(P){if(P.samples>0){if(ke(P)===!1){const T=P.textures,ne=P.width,_e=P.height;let Me=s.COLOR_BUFFER_BIT;const pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ze=r.get(P),Ne=T.length>1;if(Ne)for(let Ye=0;Ye<T.length;Ye++)i.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const et=P.texture.mipmaps;et&&et.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let Ye=0;Ye<T.length;Ye++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),Ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[Ye]);const Ee=r.get(T[Ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,ne,_e,0,0,ne,_e,Me,s.NEAREST),m===!0&&(k.length=0,xt.length=0,k.push(s.COLOR_ATTACHMENT0+Ye),P.depthBuffer&&P.resolveDepthBuffer===!1&&(k.push(pe),xt.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,k))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ne)for(let Ye=0;Ye<T.length;Ye++){i.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[Ye]);const Ee=r.get(T[Ye]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,Ee,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ht(P){return Math.min(l.maxSamples,P.samples)}function ke(P){const T=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Yt(P){const T=f.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function Qe(P,T){const ne=P.colorSpace,_e=P.format,Me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ne!==ks&&ne!==or&&(It.getTransfer(ne)===jt?(_e!==wi||Me!==ki)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):fn("WebGLTextures: Unsupported texture color space:",ne)),T}function lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=Y,this.setTexture2D=K,this.setTexture2DArray=D,this.setTexture3D=j,this.setTextureCube=I,this.rebindTextures=Qt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=De,this.useMultisampledRTT=ke}function Y2(s,e){function i(r,l=or){let c;const f=It.getTransfer(l);if(r===ki)return s.UNSIGNED_BYTE;if(r===Sp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Mp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===u_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===f_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===l_)return s.BYTE;if(r===c_)return s.SHORT;if(r===sl)return s.UNSIGNED_SHORT;if(r===bp)return s.INT;if(r===Gr)return s.UNSIGNED_INT;if(r===Sa)return s.FLOAT;if(r===js)return s.HALF_FLOAT;if(r===d_)return s.ALPHA;if(r===h_)return s.RGB;if(r===wi)return s.RGBA;if(r===ll)return s.DEPTH_COMPONENT;if(r===cl)return s.DEPTH_STENCIL;if(r===p_)return s.RED;if(r===Ep)return s.RED_INTEGER;if(r===Tp)return s.RG;if(r===Ap)return s.RG_INTEGER;if(r===Rp)return s.RGBA_INTEGER;if(r===au||r===ru||r===su||r===ou)if(f===jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===au)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===au)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ru)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===su)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ou)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zh||r===Ih||r===Bh||r===Fh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ih)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hh||r===Gh||r===Vh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Hh||r===Gh)return f===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Vh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kh||r===Xh||r===Wh||r===qh||r===jh||r===Yh||r===Zh||r===Kh||r===Qh||r===Jh||r===$h||r===ep||r===tp||r===np)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===kh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$h)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ep)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===np)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ip||r===ap||r===rp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===ip)return f===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ap)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sp||r===op||r===lp||r===cp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===sp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===op)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ol?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const Z2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Q2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new D_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ra({vertexShader:Z2,fragmentShader:K2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Di(new gl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J2 extends Ys{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,x=null,_=null,S=null,E=null;const M=typeof XRWebGLBinding<"u",y=new Q2,v={},U=i.getContextAttributes();let C=null,O=null;const F=[],N=[],B=new Ut;let W=null;const L=new _i;L.viewport=new on;const R=new _i;R.viewport=new on;const H=[L,R],Y=new x1;let oe=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let le=F[re];return le===void 0&&(le=new lh,F[re]=le),le.getTargetRaySpace()},this.getControllerGrip=function(re){let le=F[re];return le===void 0&&(le=new lh,F[re]=le),le.getGripSpace()},this.getHand=function(re){let le=F[re];return le===void 0&&(le=new lh,F[re]=le),le.getHandSpace()};function K(re){const le=N.indexOf(re.inputSource);if(le===-1)return;const De=F[le];De!==void 0&&(De.update(re.inputSource,re.frame,p||f),De.dispatchEvent({type:re.type,data:re.inputSource}))}function D(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",D),l.removeEventListener("inputsourceschange",j);for(let re=0;re<F.length;re++){const le=N[re];le!==null&&(N[re]=null,F[re].disconnect(le))}oe=null,de=null,y.reset();for(const re in v)delete v[re];e.setRenderTarget(C),S=null,_=null,x=null,l=null,O=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(W),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){h=re,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return x===null&&M&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(re){if(l=re,l!==null){if(C=e.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",D),l.addEventListener("inputsourceschange",j),U.xrCompatible!==!0&&await i.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(B),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Ie=null,Ve=null;U.depth&&(Ve=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=U.stencil?cl:ll,Ie=U.stencil?ol:Gr);const ot={colorFormat:i.RGBA8,depthFormat:Ve,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(ot),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),O=new Vr(_.textureWidth,_.textureHeight,{format:wi,type:ki,depthTexture:new w_(_.textureWidth,_.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const De={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new Vr(S.framebufferWidth,S.framebufferHeight,{format:wi,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Pe.setContext(l),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(re){for(let le=0;le<re.removed.length;le++){const De=re.removed[le],Ie=N.indexOf(De);Ie>=0&&(N[Ie]=null,F[Ie].disconnect(De))}for(let le=0;le<re.added.length;le++){const De=re.added[le];let Ie=N.indexOf(De);if(Ie===-1){for(let ot=0;ot<F.length;ot++)if(ot>=N.length){N.push(De),Ie=ot;break}else if(N[ot]===null){N[ot]=De,Ie=ot;break}if(Ie===-1)break}const Ve=F[Ie];Ve&&Ve.connect(De)}}const I=new fe,ce=new fe;function ve(re,le,De){I.setFromMatrixPosition(le.matrixWorld),ce.setFromMatrixPosition(De.matrixWorld);const Ie=I.distanceTo(ce),Ve=le.projectionMatrix.elements,ot=De.projectionMatrix.elements,Qt=Ve[14]/(Ve[10]-1),mt=Ve[14]/(Ve[10]+1),Lt=(Ve[9]+1)/Ve[5],k=(Ve[9]-1)/Ve[5],xt=(Ve[8]-1)/Ve[0],_t=(ot[8]+1)/ot[0],Ht=Qt*xt,ke=Qt*_t,Yt=Ie/(-xt+_t),Qe=Yt*-xt;if(le.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Qe),re.translateZ(Yt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ve[10]===-1)re.projectionMatrix.copy(le.projectionMatrix),re.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const lt=Qt+Yt,P=mt+Yt,T=Ht-Qe,ne=ke+(Ie-Qe),_e=Lt*mt/P*lt,Me=k*mt/P*lt;re.projectionMatrix.makePerspective(T,ne,_e,Me,lt,P),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function z(re,le){le===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(le.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(l===null)return;let le=re.near,De=re.far;y.texture!==null&&(y.depthNear>0&&(le=y.depthNear),y.depthFar>0&&(De=y.depthFar)),Y.near=R.near=L.near=le,Y.far=R.far=L.far=De,(oe!==Y.near||de!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),oe=Y.near,de=Y.far),Y.layers.mask=re.layers.mask|6,L.layers.mask=Y.layers.mask&3,R.layers.mask=Y.layers.mask&5;const Ie=re.parent,Ve=Y.cameras;z(Y,Ie);for(let ot=0;ot<Ve.length;ot++)z(Ve[ot],Ie);Ve.length===2?ve(Y,L,R):Y.projectionMatrix.copy(L.projectionMatrix),te(re,Y,Ie)};function te(re,le,De){De===null?re.matrix.copy(le.matrixWorld):(re.matrix.copy(De.matrixWorld),re.matrix.invert(),re.matrix.multiply(le.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(le.projectionMatrix),re.projectionMatrixInverse.copy(le.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=up*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(_===null&&S===null))return m},this.setFoveation=function(re){m=re,_!==null&&(_.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(re){return v[re]};let xe=null;function Se(re,le){if(g=le.getViewerPose(p||f),E=le,g!==null){const De=g.views;S!==null&&(e.setRenderTargetFramebuffer(O,S.framebuffer),e.setRenderTarget(O));let Ie=!1;De.length!==Y.cameras.length&&(Y.cameras.length=0,Ie=!0);for(let mt=0;mt<De.length;mt++){const Lt=De[mt];let k=null;if(S!==null)k=S.getViewport(Lt);else{const _t=x.getViewSubImage(_,Lt);k=_t.viewport,mt===0&&(e.setRenderTargetTextures(O,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(O))}let xt=H[mt];xt===void 0&&(xt=new _i,xt.layers.enable(mt),xt.viewport=new on,H[mt]=xt),xt.matrix.fromArray(Lt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(Lt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(k.x,k.y,k.width,k.height),mt===0&&(Y.matrix.copy(xt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ie===!0&&Y.cameras.push(xt)}const Ve=l.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&M){x=r.getBinding();const mt=x.getDepthInformation(De[0]);mt&&mt.isValid&&mt.texture&&y.init(mt,l.renderState)}if(Ve&&Ve.includes("camera-access")&&M){e.state.unbindTexture(),x=r.getBinding();for(let mt=0;mt<De.length;mt++){const Lt=De[mt].camera;if(Lt){let k=v[Lt];k||(k=new D_,v[Lt]=k);const xt=x.getCameraImage(Lt);k.sourceTexture=xt}}}}for(let De=0;De<F.length;De++){const Ie=N[De],Ve=F[De];Ie!==null&&Ve!==void 0&&Ve.update(Ie,le,p||f)}xe&&xe(re,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),E=null}const Pe=new N_;Pe.setAnimationLoop(Se),this.setAnimationLoop=function(re){xe=re},this.dispose=function(){}}}const Pr=new Xi,$2=new ln;function eR(s,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,T_(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,U,C,O){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),x(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),_(y,v),v.isMeshPhysicalMaterial&&S(y,v,O)):v.isMeshMatcapMaterial?(c(y,v),E(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),M(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,U,C):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Zn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Zn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const U=e.get(v),C=U.envMap,O=U.envMapRotation;C&&(y.envMap.value=C,Pr.copy(O),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),y.envMapRotation.value.setFromMatrix4($2.makeRotationFromEuler(Pr)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,U,C){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*U,y.scale.value=C*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,U){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Zn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function M(y,v){const U=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function tR(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,C){const O=C.program;r.uniformBlockBinding(U,O)}function p(U,C){let O=l[U.id];O===void 0&&(E(U),O=g(U),l[U.id]=O,U.addEventListener("dispose",y));const F=C.program;r.updateUBOMapping(U,F);const N=e.render.frame;c[U.id]!==N&&(_(U),c[U.id]=N)}function g(U){const C=x();U.__bindingPointIndex=C;const O=s.createBuffer(),F=U.__size,N=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,F,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,O),O}function x(){for(let U=0;U<h;U++)if(f.indexOf(U)===-1)return f.push(U),U;return fn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const C=l[U.id],O=U.uniforms,F=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let N=0,B=O.length;N<B;N++){const W=Array.isArray(O[N])?O[N]:[O[N]];for(let L=0,R=W.length;L<R;L++){const H=W[L];if(S(H,N,L,F)===!0){const Y=H.__offset,oe=Array.isArray(H.value)?H.value:[H.value];let de=0;for(let K=0;K<oe.length;K++){const D=oe[K],j=M(D);typeof D=="number"||typeof D=="boolean"?(H.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,Y+de,H.__data)):D.isMatrix3?(H.__data[0]=D.elements[0],H.__data[1]=D.elements[1],H.__data[2]=D.elements[2],H.__data[3]=0,H.__data[4]=D.elements[3],H.__data[5]=D.elements[4],H.__data[6]=D.elements[5],H.__data[7]=0,H.__data[8]=D.elements[6],H.__data[9]=D.elements[7],H.__data[10]=D.elements[8],H.__data[11]=0):(D.toArray(H.__data,de),de+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,C,O,F){const N=U.value,B=C+"_"+O;if(F[B]===void 0)return typeof N=="number"||typeof N=="boolean"?F[B]=N:F[B]=N.clone(),!0;{const W=F[B];if(typeof N=="number"||typeof N=="boolean"){if(W!==N)return F[B]=N,!0}else if(W.equals(N)===!1)return W.copy(N),!0}return!1}function E(U){const C=U.uniforms;let O=0;const F=16;for(let B=0,W=C.length;B<W;B++){const L=Array.isArray(C[B])?C[B]:[C[B]];for(let R=0,H=L.length;R<H;R++){const Y=L[R],oe=Array.isArray(Y.value)?Y.value:[Y.value];for(let de=0,K=oe.length;de<K;de++){const D=oe[de],j=M(D),I=O%F,ce=I%j.boundary,ve=I+ce;O+=ce,ve!==0&&F-ve<j.storage&&(O+=F-ve),Y.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=O,O+=j.storage}}}const N=O%F;return N>0&&(O+=F-N),U.__size=O,U.__cache={},this}function M(U){const C={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(C.boundary=4,C.storage=4):U.isVector2?(C.boundary=8,C.storage=8):U.isVector3||U.isColor?(C.boundary=16,C.storage=12):U.isVector4?(C.boundary=16,C.storage=16):U.isMatrix3?(C.boundary=48,C.storage=48):U.isMatrix4?(C.boundary=64,C.storage=64):U.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",U),C}function y(U){const C=U.target;C.removeEventListener("dispose",y);const O=f.indexOf(C.__bindingPointIndex);f.splice(O,1),s.deleteBuffer(l[C.id]),delete l[C.id],delete c[C.id]}function v(){for(const U in l)s.deleteBuffer(l[U]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const nR=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let xa=null;function iR(){return xa===null&&(xa=new a1(nR,32,32,Tp,js),xa.minFilter=yi,xa.magFilter=yi,xa.wrapS=ba,xa.wrapT=ba,xa.generateMipmaps=!1,xa.needsUpdate=!0),xa}class aR{constructor(e={}){const{canvas:i=DE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Set([Rp,Ap,Ep]),M=new Set([ki,Gr,sl,ol,Sp,Mp]),y=new Uint32Array(4),v=new Int32Array(4);let U=null,C=null;const O=[],F=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let B=!1;this._outputColorSpace=vi;let W=0,L=0,R=null,H=-1,Y=null;const oe=new on,de=new on;let K=null;const D=new Tt(0);let j=0,I=i.width,ce=i.height,ve=1,z=null,te=null;const xe=new on(0,0,I,ce),Se=new on(0,0,I,ce);let Pe=!1;const re=new Dp;let le=!1,De=!1;const Ie=new ln,Ve=new fe,ot=new on,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Lt(){return R===null?ve:1}let k=r;function xt(w,Q){return i.getContext(w,Q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${yp}`),i.addEventListener("webglcontextlost",Te,!1),i.addEventListener("webglcontextrestored",be,!1),i.addEventListener("webglcontextcreationerror",Fe,!1),k===null){const Q="webgl2";if(k=xt(Q,w),k===null)throw xt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let _t,Ht,ke,Yt,Qe,lt,P,T,ne,_e,Me,pe,Ze,Ne,et,Ye,Ee,Ae,Ke,Xe,ze,rt,X,Ue;function Ce(){_t=new dA(k),_t.init(),rt=new Y2(k,_t),Ht=new iA(k,_t,e,rt),ke=new q2(k,_t),Ht.reversedDepthBuffer&&_&&ke.buffers.depth.setReversed(!0),Yt=new mA(k),Qe=new N2,lt=new j2(k,_t,ke,Qe,Ht,rt,Yt),P=new rA(N),T=new fA(N),ne=new _1(k),X=new tA(k,ne),_e=new hA(k,ne,Yt,X),Me=new gA(k,_e,ne,Yt),Ke=new xA(k,Ht,lt),Ye=new aA(Qe),pe=new L2(N,P,T,_t,Ht,X,Ye),Ze=new eR(N,Qe),Ne=new P2,et=new G2(_t),Ae=new eA(N,P,T,ke,Me,S,m),Ee=new X2(N,Me,Ht),Ue=new tR(k,Yt,Ht,ke),Xe=new nA(k,_t,Yt),ze=new pA(k,_t,Yt),Yt.programs=pe.programs,N.capabilities=Ht,N.extensions=_t,N.properties=Qe,N.renderLists=Ne,N.shadowMap=Ee,N.state=ke,N.info=Yt}Ce();const we=new J2(N,k);this.xr=we,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=_t.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=_t.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(w){w!==void 0&&(ve=w,this.setSize(I,ce,!1))},this.getSize=function(w){return w.set(I,ce)},this.setSize=function(w,Q,ue=!0){if(we.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,ce=Q,i.width=Math.floor(w*ve),i.height=Math.floor(Q*ve),ue===!0&&(i.style.width=w+"px",i.style.height=Q+"px"),this.setViewport(0,0,w,Q)},this.getDrawingBufferSize=function(w){return w.set(I*ve,ce*ve).floor()},this.setDrawingBufferSize=function(w,Q,ue){I=w,ce=Q,ve=ue,i.width=Math.floor(w*ue),i.height=Math.floor(Q*ue),this.setViewport(0,0,w,Q)},this.getCurrentViewport=function(w){return w.copy(oe)},this.getViewport=function(w){return w.copy(xe)},this.setViewport=function(w,Q,ue,ae){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,Q,ue,ae),ke.viewport(oe.copy(xe).multiplyScalar(ve).round())},this.getScissor=function(w){return w.copy(Se)},this.setScissor=function(w,Q,ue,ae){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,Q,ue,ae),ke.scissor(de.copy(Se).multiplyScalar(ve).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(w){ke.setScissorTest(Pe=w)},this.setOpaqueSort=function(w){z=w},this.setTransparentSort=function(w){te=w},this.getClearColor=function(w){return w.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(w=!0,Q=!0,ue=!0){let ae=0;if(w){let $=!1;if(R!==null){const Re=R.texture.format;$=E.has(Re)}if($){const Re=R.texture.type,Le=M.has(Re),Be=Ae.getClearColor(),He=Ae.getClearAlpha(),nt=Be.r,at=Be.g,Je=Be.b;Le?(y[0]=nt,y[1]=at,y[2]=Je,y[3]=He,k.clearBufferuiv(k.COLOR,0,y)):(v[0]=nt,v[1]=at,v[2]=Je,v[3]=He,k.clearBufferiv(k.COLOR,0,v))}else ae|=k.COLOR_BUFFER_BIT}Q&&(ae|=k.DEPTH_BUFFER_BIT),ue&&(ae|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Te,!1),i.removeEventListener("webglcontextrestored",be,!1),i.removeEventListener("webglcontextcreationerror",Fe,!1),Ae.dispose(),Ne.dispose(),et.dispose(),Qe.dispose(),P.dispose(),T.dispose(),Me.dispose(),X.dispose(),Ue.dispose(),pe.dispose(),we.dispose(),we.removeEventListener("sessionstart",eo),we.removeEventListener("sessionend",to),bi.stop()};function Te(w){w.preventDefault(),Bg("WebGLRenderer: Context Lost."),B=!0}function be(){Bg("WebGLRenderer: Context Restored."),B=!1;const w=Yt.autoReset,Q=Ee.enabled,ue=Ee.autoUpdate,ae=Ee.needsUpdate,$=Ee.type;Ce(),Yt.autoReset=w,Ee.enabled=Q,Ee.autoUpdate=ue,Ee.needsUpdate=ae,Ee.type=$}function Fe(w){fn("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function st(w){const Q=w.target;Q.removeEventListener("dispose",st),kt(Q)}function kt(w){Nt(w),Qe.remove(w)}function Nt(w){const Q=Qe.get(w).programs;Q!==void 0&&(Q.forEach(function(ue){pe.releaseProgram(ue)}),w.isShaderMaterial&&pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,Q,ue,ae,$,Re){Q===null&&(Q=Qt);const Le=$.isMesh&&$.matrixWorld.determinant()<0,Be=Eu(w,Q,ue,ae,$);ke.setMaterial(ae,Le);let He=ue.index,nt=1;if(ae.wireframe===!0){if(He=_e.getWireframeAttribute(ue),He===void 0)return;nt=2}const at=ue.drawRange,Je=ue.attributes.position;let dt=at.start*nt,Dt=(at.start+at.count)*nt;Re!==null&&(dt=Math.max(dt,Re.start*nt),Dt=Math.min(Dt,(Re.start+Re.count)*nt)),He!==null?(dt=Math.max(dt,0),Dt=Math.min(Dt,He.count)):Je!=null&&(dt=Math.max(dt,0),Dt=Math.min(Dt,Je.count));const Ot=Dt-dt;if(Ot<0||Ot===1/0)return;X.setup($,ae,Be,ue,He);let At,Ft=Xe;if(He!==null&&(At=ne.get(He),Ft=ze,Ft.setIndex(At)),$.isMesh)ae.wireframe===!0?(ke.setLineWidth(ae.wireframeLinewidth*Lt()),Ft.setMode(k.LINES)):Ft.setMode(k.TRIANGLES);else if($.isLine){let tt=ae.linewidth;tt===void 0&&(tt=1),ke.setLineWidth(tt*Lt()),$.isLineSegments?Ft.setMode(k.LINES):$.isLineLoop?Ft.setMode(k.LINE_LOOP):Ft.setMode(k.LINE_STRIP)}else $.isPoints?Ft.setMode(k.POINTS):$.isSprite&&Ft.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ul("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Ft.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const tt=$._multiDrawStarts,Zt=$._multiDrawCounts,Rt=$._multiDrawCount,En=He?ne.get(He).bytesPerElement:1,Da=Qe.get(ae).currentProgram.getUniforms();for(let Jt=0;Jt<Rt;Jt++)Da.setValue(k,"_gl_DrawID",Jt),Ft.render(tt[Jt]/En,Zt[Jt])}else if($.isInstancedMesh)Ft.renderInstances(dt,Ot,$.count);else if(ue.isInstancedBufferGeometry){const tt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Zt=Math.min(ue.instanceCount,tt);Ft.renderInstances(dt,Ot,Zt)}else Ft.render(dt,Ot)};function Pn(w,Q,ue){w.transparent===!0&&w.side===ya&&w.forceSinglePass===!1?(w.side=Zn,w.needsUpdate=!0,vn(w,Q,ue),w.side=fr,w.needsUpdate=!0,vn(w,Q,ue),w.side=ya):vn(w,Q,ue)}this.compile=function(w,Q,ue=null){ue===null&&(ue=w),C=et.get(ue),C.init(Q),F.push(C),ue.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(C.pushLight($),$.castShadow&&C.pushShadow($))}),w!==ue&&w.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(C.pushLight($),$.castShadow&&C.pushShadow($))}),C.setupLights();const ae=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Re=$.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){const Be=Re[Le];Pn(Be,ue,$),ae.add(Be)}else Pn(Re,ue,$),ae.add(Re)}),C=F.pop(),ae},this.compileAsync=function(w,Q,ue=null){const ae=this.compile(w,Q,ue);return new Promise($=>{function Re(){if(ae.forEach(function(Le){Qe.get(Le).currentProgram.isReady()&&ae.delete(Le)}),ae.size===0){$(w);return}setTimeout(Re,10)}_t.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Qn=null;function vl(w){Qn&&Qn(w)}function eo(){bi.stop()}function to(){bi.start()}const bi=new N_;bi.setAnimationLoop(vl),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(w){Qn=w,we.setAnimationLoop(w),w===null?bi.stop():bi.start()},we.addEventListener("sessionstart",eo),we.addEventListener("sessionend",to),this.render=function(w,Q){if(Q!==void 0&&Q.isCamera!==!0){fn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(Q),Q=we.getCamera()),w.isScene===!0&&w.onBeforeRender(N,w,Q,R),C=et.get(w,F.length),C.init(Q),F.push(C),Ie.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),re.setFromProjectionMatrix(Ie,Gi,Q.reversedDepth),De=this.localClippingEnabled,le=Ye.init(this.clippingPlanes,De),U=Ne.get(w,O.length),U.init(),O.push(U),we.enabled===!0&&we.isPresenting===!0){const Re=N.xr.getDepthSensingMesh();Re!==null&&dr(Re,Q,-1/0,N.sortObjects)}dr(w,Q,0,N.sortObjects),U.finish(),N.sortObjects===!0&&U.sort(z,te),mt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,mt&&Ae.addToRenderList(U,w),this.info.render.frame++,le===!0&&Ye.beginShadows();const ue=C.state.shadowsArray;Ee.render(ue,w,Q),le===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=U.opaque,$=U.transmissive;if(C.setupLights(),Q.isArrayCamera){const Re=Q.cameras;if($.length>0)for(let Le=0,Be=Re.length;Le<Be;Le++){const He=Re[Le];io(ae,$,w,He)}mt&&Ae.render(w);for(let Le=0,Be=Re.length;Le<Be;Le++){const He=Re[Le];no(U,w,He,He.viewport)}}else $.length>0&&io(ae,$,w,Q),mt&&Ae.render(w),no(U,w,Q);R!==null&&L===0&&(lt.updateMultisampleRenderTarget(R),lt.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(N,w,Q),X.resetDefaultState(),H=-1,Y=null,F.pop(),F.length>0?(C=F[F.length-1],le===!0&&Ye.setGlobalState(N.clippingPlanes,C.state.camera)):C=null,O.pop(),O.length>0?U=O[O.length-1]:U=null};function dr(w,Q,ue,ae){if(w.visible===!1)return;if(w.layers.test(Q.layers)){if(w.isGroup)ue=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Q);else if(w.isLight)C.pushLight(w),w.castShadow&&C.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||re.intersectsSprite(w)){ae&&ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ie);const Le=Me.update(w),Be=w.material;Be.visible&&U.push(w,Le,Be,ue,ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||re.intersectsObject(w))){const Le=Me.update(w),Be=w.material;if(ae&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ot.copy(w.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ot.copy(Le.boundingSphere.center)),ot.applyMatrix4(w.matrixWorld).applyMatrix4(Ie)),Array.isArray(Be)){const He=Le.groups;for(let nt=0,at=He.length;nt<at;nt++){const Je=He[nt],dt=Be[Je.materialIndex];dt&&dt.visible&&U.push(w,Le,dt,ue,ot.z,Je)}}else Be.visible&&U.push(w,Le,Be,ue,ot.z,null)}}const Re=w.children;for(let Le=0,Be=Re.length;Le<Be;Le++)dr(Re[Le],Q,ue,ae)}function no(w,Q,ue,ae){const{opaque:$,transmissive:Re,transparent:Le}=w;C.setupLightsView(ue),le===!0&&Ye.setGlobalState(N.clippingPlanes,ue),ae&&ke.viewport(oe.copy(ae)),$.length>0&&Jn($,Q,ue),Re.length>0&&Jn(Re,Q,ue),Le.length>0&&Jn(Le,Q,ue),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function io(w,Q,ue,ae){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;C.state.transmissionRenderTarget[ae.id]===void 0&&(C.state.transmissionRenderTarget[ae.id]=new Vr(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?js:ki,minFilter:Hr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));const Re=C.state.transmissionRenderTarget[ae.id],Le=ae.viewport||oe;Re.setSize(Le.z*N.transmissionResolutionScale,Le.w*N.transmissionResolutionScale);const Be=N.getRenderTarget(),He=N.getActiveCubeFace(),nt=N.getActiveMipmapLevel();N.setRenderTarget(Re),N.getClearColor(D),j=N.getClearAlpha(),j<1&&N.setClearColor(16777215,.5),N.clear(),mt&&Ae.render(ue);const at=N.toneMapping;N.toneMapping=cr;const Je=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),C.setupLightsView(ae),le===!0&&Ye.setGlobalState(N.clippingPlanes,ae),Jn(w,ue,ae),lt.updateMultisampleRenderTarget(Re),lt.updateRenderTargetMipmap(Re),_t.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Dt=0,Ot=Q.length;Dt<Ot;Dt++){const At=Q[Dt],{object:Ft,geometry:tt,material:Zt,group:Rt}=At;if(Zt.side===ya&&Ft.layers.test(ae.layers)){const En=Zt.side;Zt.side=Zn,Zt.needsUpdate=!0,dn(Ft,ue,ae,tt,Zt,Rt),Zt.side=En,Zt.needsUpdate=!0,dt=!0}}dt===!0&&(lt.updateMultisampleRenderTarget(Re),lt.updateRenderTargetMipmap(Re))}N.setRenderTarget(Be,He,nt),N.setClearColor(D,j),Je!==void 0&&(ae.viewport=Je),N.toneMapping=at}function Jn(w,Q,ue){const ae=Q.isScene===!0?Q.overrideMaterial:null;for(let $=0,Re=w.length;$<Re;$++){const Le=w[$],{object:Be,geometry:He,group:nt}=Le;let at=Le.material;at.allowOverride===!0&&ae!==null&&(at=ae),Be.layers.test(ue.layers)&&dn(Be,Q,ue,He,at,nt)}}function dn(w,Q,ue,ae,$,Re){w.onBeforeRender(N,Q,ue,ae,$,Re),w.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(N,Q,ue,ae,w,Re),$.transparent===!0&&$.side===ya&&$.forceSinglePass===!1?($.side=Zn,$.needsUpdate=!0,N.renderBufferDirect(ue,Q,ae,$,w,Re),$.side=fr,$.needsUpdate=!0,N.renderBufferDirect(ue,Q,ae,$,w,Re),$.side=ya):N.renderBufferDirect(ue,Q,ae,$,w,Re),w.onAfterRender(N,Q,ue,ae,$,Re)}function vn(w,Q,ue){Q.isScene!==!0&&(Q=Qt);const ae=Qe.get(w),$=C.state.lights,Re=C.state.shadowsArray,Le=$.state.version,Be=pe.getParameters(w,$.state,Re,Q,ue),He=pe.getProgramCacheKey(Be);let nt=ae.programs;ae.environment=w.isMeshStandardMaterial?Q.environment:null,ae.fog=Q.fog,ae.envMap=(w.isMeshStandardMaterial?T:P).get(w.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&w.envMap===null?Q.environmentRotation:w.envMapRotation,nt===void 0&&(w.addEventListener("dispose",st),nt=new Map,ae.programs=nt);let at=nt.get(He);if(at!==void 0){if(ae.currentProgram===at&&ae.lightsStateVersion===Le)return Xr(w,Be),at}else Be.uniforms=pe.getUniforms(w),w.onBeforeCompile(Be,N),at=pe.acquireProgram(Be,He),nt.set(He,at),ae.uniforms=Be.uniforms;const Je=ae.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Je.clippingPlanes=Ye.uniform),Xr(w,Be),ae.needsLights=_l(w),ae.lightsStateVersion=Le,ae.needsLights&&(Je.ambientLightColor.value=$.state.ambient,Je.lightProbe.value=$.state.probe,Je.directionalLights.value=$.state.directional,Je.directionalLightShadows.value=$.state.directionalShadow,Je.spotLights.value=$.state.spot,Je.spotLightShadows.value=$.state.spotShadow,Je.rectAreaLights.value=$.state.rectArea,Je.ltc_1.value=$.state.rectAreaLTC1,Je.ltc_2.value=$.state.rectAreaLTC2,Je.pointLights.value=$.state.point,Je.pointLightShadows.value=$.state.pointShadow,Je.hemisphereLights.value=$.state.hemi,Je.directionalShadowMap.value=$.state.directionalShadowMap,Je.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Je.spotShadowMap.value=$.state.spotShadowMap,Je.spotLightMatrix.value=$.state.spotLightMatrix,Je.spotLightMap.value=$.state.spotLightMap,Je.pointShadowMap.value=$.state.pointShadowMap,Je.pointShadowMatrix.value=$.state.pointShadowMatrix),ae.currentProgram=at,ae.uniformsList=null,at}function Wi(w){if(w.uniformsList===null){const Q=w.currentProgram.getUniforms();w.uniformsList=lu.seqWithValue(Q.seq,w.uniforms)}return w.uniformsList}function Xr(w,Q){const ue=Qe.get(w);ue.outputColorSpace=Q.outputColorSpace,ue.batching=Q.batching,ue.batchingColor=Q.batchingColor,ue.instancing=Q.instancing,ue.instancingColor=Q.instancingColor,ue.instancingMorph=Q.instancingMorph,ue.skinning=Q.skinning,ue.morphTargets=Q.morphTargets,ue.morphNormals=Q.morphNormals,ue.morphColors=Q.morphColors,ue.morphTargetsCount=Q.morphTargetsCount,ue.numClippingPlanes=Q.numClippingPlanes,ue.numIntersection=Q.numClipIntersection,ue.vertexAlphas=Q.vertexAlphas,ue.vertexTangents=Q.vertexTangents,ue.toneMapping=Q.toneMapping}function Eu(w,Q,ue,ae,$){Q.isScene!==!0&&(Q=Qt),lt.resetTextureUnits();const Re=Q.fog,Le=ae.isMeshStandardMaterial?Q.environment:null,Be=R===null?N.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ks,He=(ae.isMeshStandardMaterial?T:P).get(ae.envMap||Le),nt=ae.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,at=!!ue.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Je=!!ue.morphAttributes.position,dt=!!ue.morphAttributes.normal,Dt=!!ue.morphAttributes.color;let Ot=cr;ae.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ot=N.toneMapping);const At=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ft=At!==void 0?At.length:0,tt=Qe.get(ae),Zt=C.state.lights;if(le===!0&&(De===!0||w!==Y)){const An=w===Y&&ae.id===H;Ye.setState(ae,w,An)}let Rt=!1;ae.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Zt.state.version||tt.outputColorSpace!==Be||$.isBatchedMesh&&tt.batching===!1||!$.isBatchedMesh&&tt.batching===!0||$.isBatchedMesh&&tt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&tt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&tt.instancing===!1||!$.isInstancedMesh&&tt.instancing===!0||$.isSkinnedMesh&&tt.skinning===!1||!$.isSkinnedMesh&&tt.skinning===!0||$.isInstancedMesh&&tt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&tt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&tt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&tt.instancingMorph===!1&&$.morphTexture!==null||tt.envMap!==He||ae.fog===!0&&tt.fog!==Re||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ye.numPlanes||tt.numIntersection!==Ye.numIntersection)||tt.vertexAlphas!==nt||tt.vertexTangents!==at||tt.morphTargets!==Je||tt.morphNormals!==dt||tt.morphColors!==Dt||tt.toneMapping!==Ot||tt.morphTargetsCount!==Ft)&&(Rt=!0):(Rt=!0,tt.__version=ae.version);let En=tt.currentProgram;Rt===!0&&(En=vn(ae,Q,$));let Da=!1,Jt=!1,qi=!1;const $t=En.getUniforms(),Tn=tt.uniforms;if(ke.useProgram(En.program)&&(Da=!0,Jt=!0,qi=!0),ae.id!==H&&(H=ae.id,Jt=!0),Da||Y!==w){ke.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),$t.setValue(k,"projectionMatrix",w.projectionMatrix),$t.setValue(k,"viewMatrix",w.matrixWorldInverse);const wn=$t.map.cameraPosition;wn!==void 0&&wn.setValue(k,Ve.setFromMatrixPosition(w.matrixWorld)),Ht.logarithmicDepthBuffer&&$t.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&$t.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,Jt=!0,qi=!0)}if($.isSkinnedMesh){$t.setOptional(k,$,"bindMatrix"),$t.setOptional(k,$,"bindMatrixInverse");const An=$.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),$t.setValue(k,"boneTexture",An.boneTexture,lt))}$.isBatchedMesh&&($t.setOptional(k,$,"batchingTexture"),$t.setValue(k,"batchingTexture",$._matricesTexture,lt),$t.setOptional(k,$,"batchingIdTexture"),$t.setValue(k,"batchingIdTexture",$._indirectTexture,lt),$t.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&$t.setValue(k,"batchingColorTexture",$._colorsTexture,lt));const _n=ue.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&Ke.update($,ue,En),(Jt||tt.receiveShadow!==$.receiveShadow)&&(tt.receiveShadow=$.receiveShadow,$t.setValue(k,"receiveShadow",$.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Tn.envMap.value=He,Tn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Q.environment!==null&&(Tn.envMapIntensity.value=Q.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=iR()),Jt&&($t.setValue(k,"toneMappingExposure",N.toneMappingExposure),tt.needsLights&&Tu(Tn,qi),Re&&ae.fog===!0&&Ze.refreshFogUniforms(Tn,Re),Ze.refreshMaterialUniforms(Tn,ae,ve,ce,C.state.transmissionRenderTarget[w.id]),lu.upload(k,Wi(tt),Tn,lt)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(lu.upload(k,Wi(tt),Tn,lt),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&$t.setValue(k,"center",$.center),$t.setValue(k,"modelViewMatrix",$.modelViewMatrix),$t.setValue(k,"normalMatrix",$.normalMatrix),$t.setValue(k,"modelMatrix",$.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const An=ae.uniformsGroups;for(let wn=0,Oi=An.length;wn<Oi;wn++){const ji=An[wn];Ue.update(ji,En),Ue.bind(ji,En)}}return En}function Tu(w,Q){w.ambientLightColor.needsUpdate=Q,w.lightProbe.needsUpdate=Q,w.directionalLights.needsUpdate=Q,w.directionalLightShadows.needsUpdate=Q,w.pointLights.needsUpdate=Q,w.pointLightShadows.needsUpdate=Q,w.spotLights.needsUpdate=Q,w.spotLightShadows.needsUpdate=Q,w.rectAreaLights.needsUpdate=Q,w.hemisphereLights.needsUpdate=Q}function _l(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,Q,ue){const ae=Qe.get(w);ae.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Qe.get(w.texture).__webglTexture=Q,Qe.get(w.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ue,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Q){const ue=Qe.get(w);ue.__webglFramebuffer=Q,ue.__useDefaultFramebuffer=Q===void 0};const hr=k.createFramebuffer();this.setRenderTarget=function(w,Q=0,ue=0){R=w,W=Q,L=ue;let ae=!0,$=null,Re=!1,Le=!1;if(w){const He=Qe.get(w);if(He.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(k.FRAMEBUFFER,null),ae=!1;else if(He.__webglFramebuffer===void 0)lt.setupRenderTarget(w);else if(He.__hasExternalTextures)lt.rebindTextures(w,Qe.get(w.texture).__webglTexture,Qe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Je=w.depthTexture;if(He.__boundDepthTexture!==Je){if(Je!==null&&Qe.has(Je)&&(w.width!==Je.image.width||w.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(w)}}const nt=w.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Le=!0);const at=Qe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(at[Q])?$=at[Q][ue]:$=at[Q],Re=!0):w.samples>0&&lt.useMultisampledRTT(w)===!1?$=Qe.get(w).__webglMultisampledFramebuffer:Array.isArray(at)?$=at[ue]:$=at,oe.copy(w.viewport),de.copy(w.scissor),K=w.scissorTest}else oe.copy(xe).multiplyScalar(ve).floor(),de.copy(Se).multiplyScalar(ve).floor(),K=Pe;if(ue!==0&&($=hr),ke.bindFramebuffer(k.FRAMEBUFFER,$)&&ae&&ke.drawBuffers(w,$),ke.viewport(oe),ke.scissor(de),ke.setScissorTest(K),Re){const He=Qe.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Q,He.__webglTexture,ue)}else if(Le){const He=Q;for(let nt=0;nt<w.textures.length;nt++){const at=Qe.get(w.textures[nt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+nt,at.__webglTexture,ue,He)}}else if(w!==null&&ue!==0){const He=Qe.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,He.__webglTexture,ue)}H=-1},this.readRenderTargetPixels=function(w,Q,ue,ae,$,Re,Le,Be=0){if(!(w&&w.isWebGLRenderTarget)){fn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Qe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(He=He[Le]),He){ke.bindFramebuffer(k.FRAMEBUFFER,He);try{const nt=w.textures[Be],at=nt.format,Je=nt.type;if(!Ht.textureFormatReadable(at)){fn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Je)){fn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=w.width-ae&&ue>=0&&ue<=w.height-$&&(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Be),k.readPixels(Q,ue,ae,$,rt.convert(at),rt.convert(Je),Re))}finally{const nt=R!==null?Qe.get(R).__webglFramebuffer:null;ke.bindFramebuffer(k.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(w,Q,ue,ae,$,Re,Le,Be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Qe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(He=He[Le]),He)if(Q>=0&&Q<=w.width-ae&&ue>=0&&ue<=w.height-$){ke.bindFramebuffer(k.FRAMEBUFFER,He);const nt=w.textures[Be],at=nt.format,Je=nt.type;if(!Ht.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,dt),k.bufferData(k.PIXEL_PACK_BUFFER,Re.byteLength,k.STREAM_READ),w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Be),k.readPixels(Q,ue,ae,$,rt.convert(at),rt.convert(Je),0);const Dt=R!==null?Qe.get(R).__webglFramebuffer:null;ke.bindFramebuffer(k.FRAMEBUFFER,Dt);const Ot=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await UE(k,Ot,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,dt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Re),k.deleteBuffer(dt),k.deleteSync(Ot),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Q=null,ue=0){const ae=Math.pow(2,-ue),$=Math.floor(w.image.width*ae),Re=Math.floor(w.image.height*ae),Le=Q!==null?Q.x:0,Be=Q!==null?Q.y:0;lt.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,ue,0,0,Le,Be,$,Re),ke.unbindTexture()};const ao=k.createFramebuffer(),wa=k.createFramebuffer();this.copyTextureToTexture=function(w,Q,ue=null,ae=null,$=0,Re=null){Re===null&&($!==0?(ul("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=$,$=0):Re=0);let Le,Be,He,nt,at,Je,dt,Dt,Ot;const At=w.isCompressedTexture?w.mipmaps[Re]:w.image;if(ue!==null)Le=ue.max.x-ue.min.x,Be=ue.max.y-ue.min.y,He=ue.isBox3?ue.max.z-ue.min.z:1,nt=ue.min.x,at=ue.min.y,Je=ue.isBox3?ue.min.z:0;else{const _n=Math.pow(2,-$);Le=Math.floor(At.width*_n),Be=Math.floor(At.height*_n),w.isDataArrayTexture?He=At.depth:w.isData3DTexture?He=Math.floor(At.depth*_n):He=1,nt=0,at=0,Je=0}ae!==null?(dt=ae.x,Dt=ae.y,Ot=ae.z):(dt=0,Dt=0,Ot=0);const Ft=rt.convert(Q.format),tt=rt.convert(Q.type);let Zt;Q.isData3DTexture?(lt.setTexture3D(Q,0),Zt=k.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(lt.setTexture2DArray(Q,0),Zt=k.TEXTURE_2D_ARRAY):(lt.setTexture2D(Q,0),Zt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment);const Rt=k.getParameter(k.UNPACK_ROW_LENGTH),En=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Da=k.getParameter(k.UNPACK_SKIP_PIXELS),Jt=k.getParameter(k.UNPACK_SKIP_ROWS),qi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,At.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,At.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,nt),k.pixelStorei(k.UNPACK_SKIP_ROWS,at),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Je);const $t=w.isDataArrayTexture||w.isData3DTexture,Tn=Q.isDataArrayTexture||Q.isData3DTexture;if(w.isDepthTexture){const _n=Qe.get(w),An=Qe.get(Q),wn=Qe.get(_n.__renderTarget),Oi=Qe.get(An.__renderTarget);ke.bindFramebuffer(k.READ_FRAMEBUFFER,wn.__webglFramebuffer),ke.bindFramebuffer(k.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let ji=0;ji<He;ji++)$t&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qe.get(w).__webglTexture,$,Je+ji),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qe.get(Q).__webglTexture,Re,Ot+ji)),k.blitFramebuffer(nt,at,Le,Be,dt,Dt,Le,Be,k.DEPTH_BUFFER_BIT,k.NEAREST);ke.bindFramebuffer(k.READ_FRAMEBUFFER,null),ke.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||Qe.has(w)){const _n=Qe.get(w),An=Qe.get(Q);ke.bindFramebuffer(k.READ_FRAMEBUFFER,ao),ke.bindFramebuffer(k.DRAW_FRAMEBUFFER,wa);for(let wn=0;wn<He;wn++)$t?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,_n.__webglTexture,$,Je+wn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,_n.__webglTexture,$),Tn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,An.__webglTexture,Re,Ot+wn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,An.__webglTexture,Re),$!==0?k.blitFramebuffer(nt,at,Le,Be,dt,Dt,Le,Be,k.COLOR_BUFFER_BIT,k.NEAREST):Tn?k.copyTexSubImage3D(Zt,Re,dt,Dt,Ot+wn,nt,at,Le,Be):k.copyTexSubImage2D(Zt,Re,dt,Dt,nt,at,Le,Be);ke.bindFramebuffer(k.READ_FRAMEBUFFER,null),ke.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Tn?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Zt,Re,dt,Dt,Ot,Le,Be,He,Ft,tt,At.data):Q.isCompressedArrayTexture?k.compressedTexSubImage3D(Zt,Re,dt,Dt,Ot,Le,Be,He,Ft,At.data):k.texSubImage3D(Zt,Re,dt,Dt,Ot,Le,Be,He,Ft,tt,At):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Re,dt,Dt,Le,Be,Ft,tt,At.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Re,dt,Dt,At.width,At.height,Ft,At.data):k.texSubImage2D(k.TEXTURE_2D,Re,dt,Dt,Le,Be,Ft,tt,At);k.pixelStorei(k.UNPACK_ROW_LENGTH,Rt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,En),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Da),k.pixelStorei(k.UNPACK_SKIP_ROWS,Jt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,qi),Re===0&&Q.generateMipmaps&&k.generateMipmap(Zt),ke.unbindTexture()},this.initRenderTarget=function(w){Qe.get(w).__webglFramebuffer===void 0&&lt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?lt.setTextureCube(w,0):w.isData3DTexture?lt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?lt.setTexture2DArray(w,0):lt.setTexture2D(w,0),ke.unbindTexture()},this.resetState=function(){W=0,L=0,R=null,ke.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),i.unpackColorSpace=It._getUnpackColorSpace()}}function Uv(s,e){if(typeof s=="function")return s(e);s!=null&&(s.current=e)}function rR(...s){return e=>{let i=!1;const r=s.map(l=>{const c=Uv(l,e);return!i&&typeof c=="function"&&(i=!0),c});if(i)return()=>{for(let l=0;l<r.length;l++){const c=r[l];typeof c=="function"?c():Uv(s[l],null)}}}}var sR=Symbol.for("react.lazy"),xu=xS[" use ".trim().toString()];function oR(s){return typeof s=="object"&&s!==null&&"then"in s}function B_(s){return s!=null&&typeof s=="object"&&"$$typeof"in s&&s.$$typeof===sR&&"_payload"in s&&oR(s._payload)}function lR(s){const e=uR(s),i=Z.forwardRef((r,l)=>{let{children:c,...f}=r;B_(c)&&typeof xu=="function"&&(c=xu(c._payload));const h=Z.Children.toArray(c),m=h.find(dR);if(m){const p=m.props.children,g=h.map(x=>x===m?Z.Children.count(p)>1?Z.Children.only(null):Z.isValidElement(p)?p.props.children:null:x);return V.jsx(e,{...f,ref:l,children:Z.isValidElement(p)?Z.cloneElement(p,void 0,g):null})}return V.jsx(e,{...f,ref:l,children:c})});return i.displayName=`${s}.Slot`,i}var cR=lR("Slot");function uR(s){const e=Z.forwardRef((i,r)=>{let{children:l,...c}=i;if(B_(l)&&typeof xu=="function"&&(l=xu(l._payload)),Z.isValidElement(l)){const f=pR(l),h=hR(c,l.props);return l.type!==Z.Fragment&&(h.ref=r?rR(r,f):f),Z.cloneElement(l,h)}return Z.Children.count(l)>1?Z.Children.only(null):null});return e.displayName=`${s}.SlotClone`,e}var fR=Symbol("radix.slottable");function dR(s){return Z.isValidElement(s)&&typeof s.type=="function"&&"__radixId"in s.type&&s.type.__radixId===fR}function hR(s,e){const i={...e};for(const r in e){const l=s[r],c=e[r];/^on[A-Z]/.test(r)?l&&c?i[r]=(...h)=>{const m=c(...h);return l(...h),m}:l&&(i[r]=l):r==="style"?i[r]={...l,...c}:r==="className"&&(i[r]=[l,c].filter(Boolean).join(" "))}return{...s,...i}}function pR(s){let e=Object.getOwnPropertyDescriptor(s.props,"ref")?.get,i=e&&"isReactWarning"in e&&e.isReactWarning;return i?s.ref:(e=Object.getOwnPropertyDescriptor(s,"ref")?.get,i=e&&"isReactWarning"in e&&e.isReactWarning,i?s.props.ref:s.props.ref||s.ref)}function F_(s){var e,i,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(e=0;e<l;e++)s[e]&&(i=F_(s[e]))&&(r&&(r+=" "),r+=i)}else for(i in s)s[i]&&(r&&(r+=" "),r+=i);return r}function H_(){for(var s,e,i=0,r="",l=arguments.length;i<l;i++)(s=arguments[i])&&(e=F_(s))&&(r&&(r+=" "),r+=e);return r}const Lv=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,Nv=H_,mR=(s,e)=>i=>{var r;if(e?.variants==null)return Nv(s,i?.class,i?.className);const{variants:l,defaultVariants:c}=e,f=Object.keys(l).map(p=>{const g=i?.[p],x=c?.[p];if(g===null)return null;const _=Lv(g)||Lv(x);return l[p][_]}),h=i&&Object.entries(i).reduce((p,g)=>{let[x,_]=g;return _===void 0||(p[x]=_),p},{}),m=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((p,g)=>{let{class:x,className:_,...S}=g;return Object.entries(S).every(E=>{let[M,y]=E;return Array.isArray(y)?y.includes({...c,...h}[M]):{...c,...h}[M]===y})?[...p,x,_]:p},[]);return Nv(s,f,m,i?.class,i?.className)},xR=(s,e)=>{const i=new Array(s.length+e.length);for(let r=0;r<s.length;r++)i[r]=s[r];for(let r=0;r<e.length;r++)i[s.length+r]=e[r];return i},gR=(s,e)=>({classGroupId:s,validator:e}),G_=(s=new Map,e=null,i)=>({nextPart:s,validators:e,classGroupId:i}),gu="-",Ov=[],vR="arbitrary..",_R=s=>{const e=bR(s),{conflictingClassGroups:i,conflictingClassGroupModifiers:r}=s;return{getClassGroupId:f=>{if(f.startsWith("[")&&f.endsWith("]"))return yR(f);const h=f.split(gu),m=h[0]===""&&h.length>1?1:0;return V_(h,m,e)},getConflictingClassGroupIds:(f,h)=>{if(h){const m=r[f],p=i[f];return m?p?xR(p,m):m:p||Ov}return i[f]||Ov}}},V_=(s,e,i)=>{if(s.length-e===0)return i.classGroupId;const l=s[e],c=i.nextPart.get(l);if(c){const p=V_(s,e+1,c);if(p)return p}const f=i.validators;if(f===null)return;const h=e===0?s.join(gu):s.slice(e).join(gu),m=f.length;for(let p=0;p<m;p++){const g=f[p];if(g.validator(h))return g.classGroupId}},yR=s=>s.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=s.slice(1,-1),i=e.indexOf(":"),r=e.slice(0,i);return r?vR+r:void 0})(),bR=s=>{const{theme:e,classGroups:i}=s;return SR(i,e)},SR=(s,e)=>{const i=G_();for(const r in s){const l=s[r];Lp(l,i,r,e)}return i},Lp=(s,e,i,r)=>{const l=s.length;for(let c=0;c<l;c++){const f=s[c];MR(f,e,i,r)}},MR=(s,e,i,r)=>{if(typeof s=="string"){ER(s,e,i);return}if(typeof s=="function"){TR(s,e,i,r);return}AR(s,e,i,r)},ER=(s,e,i)=>{const r=s===""?e:k_(e,s);r.classGroupId=i},TR=(s,e,i,r)=>{if(RR(s)){Lp(s(r),e,i,r);return}e.validators===null&&(e.validators=[]),e.validators.push(gR(i,s))},AR=(s,e,i,r)=>{const l=Object.entries(s),c=l.length;for(let f=0;f<c;f++){const[h,m]=l[f];Lp(m,k_(e,h),i,r)}},k_=(s,e)=>{let i=s;const r=e.split(gu),l=r.length;for(let c=0;c<l;c++){const f=r[c];let h=i.nextPart.get(f);h||(h=G_(),i.nextPart.set(f,h)),i=h}return i},RR=s=>"isThemeGetter"in s&&s.isThemeGetter===!0,CR=s=>{if(s<1)return{get:()=>{},set:()=>{}};let e=0,i=Object.create(null),r=Object.create(null);const l=(c,f)=>{i[c]=f,e++,e>s&&(e=0,r=i,i=Object.create(null))};return{get(c){let f=i[c];if(f!==void 0)return f;if((f=r[c])!==void 0)return l(c,f),f},set(c,f){c in i?i[c]=f:l(c,f)}}},dp="!",Pv=":",wR=[],zv=(s,e,i,r,l)=>({modifiers:s,hasImportantModifier:e,baseClassName:i,maybePostfixModifierPosition:r,isExternal:l}),DR=s=>{const{prefix:e,experimentalParseClassName:i}=s;let r=l=>{const c=[];let f=0,h=0,m=0,p;const g=l.length;for(let M=0;M<g;M++){const y=l[M];if(f===0&&h===0){if(y===Pv){c.push(l.slice(m,M)),m=M+1;continue}if(y==="/"){p=M;continue}}y==="["?f++:y==="]"?f--:y==="("?h++:y===")"&&h--}const x=c.length===0?l:l.slice(m);let _=x,S=!1;x.endsWith(dp)?(_=x.slice(0,-1),S=!0):x.startsWith(dp)&&(_=x.slice(1),S=!0);const E=p&&p>m?p-m:void 0;return zv(c,S,_,E)};if(e){const l=e+Pv,c=r;r=f=>f.startsWith(l)?c(f.slice(l.length)):zv(wR,!1,f,void 0,!0)}if(i){const l=r;r=c=>i({className:c,parseClassName:l})}return r},UR=s=>{const e=new Map;return s.orderSensitiveModifiers.forEach((i,r)=>{e.set(i,1e6+r)}),i=>{const r=[];let l=[];for(let c=0;c<i.length;c++){const f=i[c],h=f[0]==="[",m=e.has(f);h||m?(l.length>0&&(l.sort(),r.push(...l),l=[]),r.push(f)):l.push(f)}return l.length>0&&(l.sort(),r.push(...l)),r}},LR=s=>({cache:CR(s.cacheSize),parseClassName:DR(s),sortModifiers:UR(s),..._R(s)}),NR=/\s+/,OR=(s,e)=>{const{parseClassName:i,getClassGroupId:r,getConflictingClassGroupIds:l,sortModifiers:c}=e,f=[],h=s.trim().split(NR);let m="";for(let p=h.length-1;p>=0;p-=1){const g=h[p],{isExternal:x,modifiers:_,hasImportantModifier:S,baseClassName:E,maybePostfixModifierPosition:M}=i(g);if(x){m=g+(m.length>0?" "+m:m);continue}let y=!!M,v=r(y?E.substring(0,M):E);if(!v){if(!y){m=g+(m.length>0?" "+m:m);continue}if(v=r(E),!v){m=g+(m.length>0?" "+m:m);continue}y=!1}const U=_.length===0?"":_.length===1?_[0]:c(_).join(":"),C=S?U+dp:U,O=C+v;if(f.indexOf(O)>-1)continue;f.push(O);const F=l(v,y);for(let N=0;N<F.length;++N){const B=F[N];f.push(C+B)}m=g+(m.length>0?" "+m:m)}return m},PR=(...s)=>{let e=0,i,r,l="";for(;e<s.length;)(i=s[e++])&&(r=X_(i))&&(l&&(l+=" "),l+=r);return l},X_=s=>{if(typeof s=="string")return s;let e,i="";for(let r=0;r<s.length;r++)s[r]&&(e=X_(s[r]))&&(i&&(i+=" "),i+=e);return i},zR=(s,...e)=>{let i,r,l,c;const f=m=>{const p=e.reduce((g,x)=>x(g),s());return i=LR(p),r=i.cache.get,l=i.cache.set,c=h,h(m)},h=m=>{const p=r(m);if(p)return p;const g=OR(m,i);return l(m,g),g};return c=f,(...m)=>c(PR(...m))},IR=[],bn=s=>{const e=i=>i[s]||IR;return e.isThemeGetter=!0,e},W_=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,q_=/^\((?:(\w[\w-]*):)?(.+)\)$/i,BR=/^\d+\/\d+$/,FR=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,HR=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,GR=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,VR=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,kR=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,zs=s=>BR.test(s),vt=s=>!!s&&!Number.isNaN(Number(s)),sr=s=>!!s&&Number.isInteger(Number(s)),vh=s=>s.endsWith("%")&&vt(s.slice(0,-1)),ga=s=>FR.test(s),XR=()=>!0,WR=s=>HR.test(s)&&!GR.test(s),j_=()=>!1,qR=s=>VR.test(s),jR=s=>kR.test(s),YR=s=>!We(s)&&!qe(s),ZR=s=>Js(s,K_,j_),We=s=>W_.test(s),zr=s=>Js(s,Q_,WR),_h=s=>Js(s,eC,vt),Iv=s=>Js(s,Y_,j_),KR=s=>Js(s,Z_,jR),$c=s=>Js(s,J_,qR),qe=s=>q_.test(s),il=s=>$s(s,Q_),QR=s=>$s(s,tC),Bv=s=>$s(s,Y_),JR=s=>$s(s,K_),$R=s=>$s(s,Z_),eu=s=>$s(s,J_,!0),Js=(s,e,i)=>{const r=W_.exec(s);return r?r[1]?e(r[1]):i(r[2]):!1},$s=(s,e,i=!1)=>{const r=q_.exec(s);return r?r[1]?e(r[1]):i:!1},Y_=s=>s==="position"||s==="percentage",Z_=s=>s==="image"||s==="url",K_=s=>s==="length"||s==="size"||s==="bg-size",Q_=s=>s==="length",eC=s=>s==="number",tC=s=>s==="family-name",J_=s=>s==="shadow",nC=()=>{const s=bn("color"),e=bn("font"),i=bn("text"),r=bn("font-weight"),l=bn("tracking"),c=bn("leading"),f=bn("breakpoint"),h=bn("container"),m=bn("spacing"),p=bn("radius"),g=bn("shadow"),x=bn("inset-shadow"),_=bn("text-shadow"),S=bn("drop-shadow"),E=bn("blur"),M=bn("perspective"),y=bn("aspect"),v=bn("ease"),U=bn("animate"),C=()=>["auto","avoid","all","avoid-page","page","left","right","column"],O=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],F=()=>[...O(),qe,We],N=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto","contain","none"],W=()=>[qe,We,m],L=()=>[zs,"full","auto",...W()],R=()=>[sr,"none","subgrid",qe,We],H=()=>["auto",{span:["full",sr,qe,We]},sr,qe,We],Y=()=>[sr,"auto",qe,We],oe=()=>["auto","min","max","fr",qe,We],de=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],K=()=>["start","end","center","stretch","center-safe","end-safe"],D=()=>["auto",...W()],j=()=>[zs,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...W()],I=()=>[s,qe,We],ce=()=>[...O(),Bv,Iv,{position:[qe,We]}],ve=()=>["no-repeat",{repeat:["","x","y","space","round"]}],z=()=>["auto","cover","contain",JR,ZR,{size:[qe,We]}],te=()=>[vh,il,zr],xe=()=>["","none","full",p,qe,We],Se=()=>["",vt,il,zr],Pe=()=>["solid","dashed","dotted","double"],re=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],le=()=>[vt,vh,Bv,Iv],De=()=>["","none",E,qe,We],Ie=()=>["none",vt,qe,We],Ve=()=>["none",vt,qe,We],ot=()=>[vt,qe,We],Qt=()=>[zs,"full",...W()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ga],breakpoint:[ga],color:[XR],container:[ga],"drop-shadow":[ga],ease:["in","out","in-out"],font:[YR],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ga],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ga],shadow:[ga],spacing:["px",vt],text:[ga],"text-shadow":[ga],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",zs,We,qe,y]}],container:["container"],columns:[{columns:[vt,We,qe,h]}],"break-after":[{"break-after":C()}],"break-before":[{"break-before":C()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:F()}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:B()}],"overscroll-x":[{"overscroll-x":B()}],"overscroll-y":[{"overscroll-y":B()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:L()}],"inset-x":[{"inset-x":L()}],"inset-y":[{"inset-y":L()}],start:[{start:L()}],end:[{end:L()}],top:[{top:L()}],right:[{right:L()}],bottom:[{bottom:L()}],left:[{left:L()}],visibility:["visible","invisible","collapse"],z:[{z:[sr,"auto",qe,We]}],basis:[{basis:[zs,"full","auto",h,...W()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[vt,zs,"auto","initial","none",We]}],grow:[{grow:["",vt,qe,We]}],shrink:[{shrink:["",vt,qe,We]}],order:[{order:[sr,"first","last","none",qe,We]}],"grid-cols":[{"grid-cols":R()}],"col-start-end":[{col:H()}],"col-start":[{"col-start":Y()}],"col-end":[{"col-end":Y()}],"grid-rows":[{"grid-rows":R()}],"row-start-end":[{row:H()}],"row-start":[{"row-start":Y()}],"row-end":[{"row-end":Y()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":oe()}],"auto-rows":[{"auto-rows":oe()}],gap:[{gap:W()}],"gap-x":[{"gap-x":W()}],"gap-y":[{"gap-y":W()}],"justify-content":[{justify:[...de(),"normal"]}],"justify-items":[{"justify-items":[...K(),"normal"]}],"justify-self":[{"justify-self":["auto",...K()]}],"align-content":[{content:["normal",...de()]}],"align-items":[{items:[...K(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...K(),{baseline:["","last"]}]}],"place-content":[{"place-content":de()}],"place-items":[{"place-items":[...K(),"baseline"]}],"place-self":[{"place-self":["auto",...K()]}],p:[{p:W()}],px:[{px:W()}],py:[{py:W()}],ps:[{ps:W()}],pe:[{pe:W()}],pt:[{pt:W()}],pr:[{pr:W()}],pb:[{pb:W()}],pl:[{pl:W()}],m:[{m:D()}],mx:[{mx:D()}],my:[{my:D()}],ms:[{ms:D()}],me:[{me:D()}],mt:[{mt:D()}],mr:[{mr:D()}],mb:[{mb:D()}],ml:[{ml:D()}],"space-x":[{"space-x":W()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":W()}],"space-y-reverse":["space-y-reverse"],size:[{size:j()}],w:[{w:[h,"screen",...j()]}],"min-w":[{"min-w":[h,"screen","none",...j()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[f]},...j()]}],h:[{h:["screen","lh",...j()]}],"min-h":[{"min-h":["screen","lh","none",...j()]}],"max-h":[{"max-h":["screen","lh",...j()]}],"font-size":[{text:["base",i,il,zr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,qe,_h]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",vh,We]}],"font-family":[{font:[QR,We,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,qe,We]}],"line-clamp":[{"line-clamp":[vt,"none",qe,_h]}],leading:[{leading:[c,...W()]}],"list-image":[{"list-image":["none",qe,We]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",qe,We]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Pe(),"wavy"]}],"text-decoration-thickness":[{decoration:[vt,"from-font","auto",qe,zr]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[vt,"auto",qe,We]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:W()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",qe,We]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",qe,We]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ce()}],"bg-repeat":[{bg:ve()}],"bg-size":[{bg:z()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},sr,qe,We],radial:["",qe,We],conic:[sr,qe,We]},$R,KR]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:te()}],"gradient-via-pos":[{via:te()}],"gradient-to-pos":[{to:te()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:xe()}],"rounded-s":[{"rounded-s":xe()}],"rounded-e":[{"rounded-e":xe()}],"rounded-t":[{"rounded-t":xe()}],"rounded-r":[{"rounded-r":xe()}],"rounded-b":[{"rounded-b":xe()}],"rounded-l":[{"rounded-l":xe()}],"rounded-ss":[{"rounded-ss":xe()}],"rounded-se":[{"rounded-se":xe()}],"rounded-ee":[{"rounded-ee":xe()}],"rounded-es":[{"rounded-es":xe()}],"rounded-tl":[{"rounded-tl":xe()}],"rounded-tr":[{"rounded-tr":xe()}],"rounded-br":[{"rounded-br":xe()}],"rounded-bl":[{"rounded-bl":xe()}],"border-w":[{border:Se()}],"border-w-x":[{"border-x":Se()}],"border-w-y":[{"border-y":Se()}],"border-w-s":[{"border-s":Se()}],"border-w-e":[{"border-e":Se()}],"border-w-t":[{"border-t":Se()}],"border-w-r":[{"border-r":Se()}],"border-w-b":[{"border-b":Se()}],"border-w-l":[{"border-l":Se()}],"divide-x":[{"divide-x":Se()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Se()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Pe(),"hidden","none"]}],"divide-style":[{divide:[...Pe(),"hidden","none"]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...Pe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[vt,qe,We]}],"outline-w":[{outline:["",vt,il,zr]}],"outline-color":[{outline:I()}],shadow:[{shadow:["","none",g,eu,$c]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":["none",x,eu,$c]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:Se()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[vt,zr]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":Se()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":["none",_,eu,$c]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[vt,qe,We]}],"mix-blend":[{"mix-blend":[...re(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":re()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[vt]}],"mask-image-linear-from-pos":[{"mask-linear-from":le()}],"mask-image-linear-to-pos":[{"mask-linear-to":le()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":le()}],"mask-image-t-to-pos":[{"mask-t-to":le()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":le()}],"mask-image-r-to-pos":[{"mask-r-to":le()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":le()}],"mask-image-b-to-pos":[{"mask-b-to":le()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":le()}],"mask-image-l-to-pos":[{"mask-l-to":le()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":le()}],"mask-image-x-to-pos":[{"mask-x-to":le()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":le()}],"mask-image-y-to-pos":[{"mask-y-to":le()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[qe,We]}],"mask-image-radial-from-pos":[{"mask-radial-from":le()}],"mask-image-radial-to-pos":[{"mask-radial-to":le()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":O()}],"mask-image-conic-pos":[{"mask-conic":[vt]}],"mask-image-conic-from-pos":[{"mask-conic-from":le()}],"mask-image-conic-to-pos":[{"mask-conic-to":le()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ce()}],"mask-repeat":[{mask:ve()}],"mask-size":[{mask:z()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",qe,We]}],filter:[{filter:["","none",qe,We]}],blur:[{blur:De()}],brightness:[{brightness:[vt,qe,We]}],contrast:[{contrast:[vt,qe,We]}],"drop-shadow":[{"drop-shadow":["","none",S,eu,$c]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:["",vt,qe,We]}],"hue-rotate":[{"hue-rotate":[vt,qe,We]}],invert:[{invert:["",vt,qe,We]}],saturate:[{saturate:[vt,qe,We]}],sepia:[{sepia:["",vt,qe,We]}],"backdrop-filter":[{"backdrop-filter":["","none",qe,We]}],"backdrop-blur":[{"backdrop-blur":De()}],"backdrop-brightness":[{"backdrop-brightness":[vt,qe,We]}],"backdrop-contrast":[{"backdrop-contrast":[vt,qe,We]}],"backdrop-grayscale":[{"backdrop-grayscale":["",vt,qe,We]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[vt,qe,We]}],"backdrop-invert":[{"backdrop-invert":["",vt,qe,We]}],"backdrop-opacity":[{"backdrop-opacity":[vt,qe,We]}],"backdrop-saturate":[{"backdrop-saturate":[vt,qe,We]}],"backdrop-sepia":[{"backdrop-sepia":["",vt,qe,We]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":W()}],"border-spacing-x":[{"border-spacing-x":W()}],"border-spacing-y":[{"border-spacing-y":W()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",qe,We]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[vt,"initial",qe,We]}],ease:[{ease:["linear","initial",v,qe,We]}],delay:[{delay:[vt,qe,We]}],animate:[{animate:["none",U,qe,We]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[M,qe,We]}],"perspective-origin":[{"perspective-origin":F()}],rotate:[{rotate:Ie()}],"rotate-x":[{"rotate-x":Ie()}],"rotate-y":[{"rotate-y":Ie()}],"rotate-z":[{"rotate-z":Ie()}],scale:[{scale:Ve()}],"scale-x":[{"scale-x":Ve()}],"scale-y":[{"scale-y":Ve()}],"scale-z":[{"scale-z":Ve()}],"scale-3d":["scale-3d"],skew:[{skew:ot()}],"skew-x":[{"skew-x":ot()}],"skew-y":[{"skew-y":ot()}],transform:[{transform:[qe,We,"","none","gpu","cpu"]}],"transform-origin":[{origin:F()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Qt()}],"translate-x":[{"translate-x":Qt()}],"translate-y":[{"translate-y":Qt()}],"translate-z":[{"translate-z":Qt()}],"translate-none":["translate-none"],accent:[{accent:I()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",qe,We]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":W()}],"scroll-mx":[{"scroll-mx":W()}],"scroll-my":[{"scroll-my":W()}],"scroll-ms":[{"scroll-ms":W()}],"scroll-me":[{"scroll-me":W()}],"scroll-mt":[{"scroll-mt":W()}],"scroll-mr":[{"scroll-mr":W()}],"scroll-mb":[{"scroll-mb":W()}],"scroll-ml":[{"scroll-ml":W()}],"scroll-p":[{"scroll-p":W()}],"scroll-px":[{"scroll-px":W()}],"scroll-py":[{"scroll-py":W()}],"scroll-ps":[{"scroll-ps":W()}],"scroll-pe":[{"scroll-pe":W()}],"scroll-pt":[{"scroll-pt":W()}],"scroll-pr":[{"scroll-pr":W()}],"scroll-pb":[{"scroll-pb":W()}],"scroll-pl":[{"scroll-pl":W()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",qe,We]}],fill:[{fill:["none",...I()]}],"stroke-w":[{stroke:[vt,il,zr,_h]}],stroke:[{stroke:["none",...I()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},iC=zR(nC);function aC(...s){return iC(H_(s))}const rC=mR("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function hp({className:s,variant:e,size:i,asChild:r=!1,...l}){const c=r?cR:"button";return V.jsx(c,{"data-slot":"button",className:aC(rC({variant:e,size:i,className:s})),...l})}const yt=20,Is=1,Fv=[{x:10,y:10}],tu={x:1,y:0},sC=150;function oC(){const s=Z.useRef(null),e=Z.useRef(null),i=Z.useRef(null),r=Z.useRef(null),l=Z.useRef([]),c=Z.useRef(null),f=Z.useRef(null),h=Z.useRef(null),m=Z.useRef(null),[p,g]=Z.useState(Fv),[x,_]=Z.useState({x:15,y:15}),[S,E]=Z.useState(tu),[M,y]=Z.useState(tu),[v,U]=Z.useState(!1),[C,O]=Z.useState(0),[F,N]=Z.useState(!1),B=Z.useCallback(R=>{let H;do H={x:Math.floor(Math.random()*yt),y:Math.floor(Math.random()*yt)};while(R.some(Y=>Y.x===H.x&&Y.y===H.y));return H},[]),W=()=>{g(Fv),E(tu),y(tu),_({x:15,y:15}),O(0),U(!1),N(!0)},L=(R,H)=>R.x<0||R.x>=yt||R.y<0||R.y>=yt?!0:H.some(Y=>Y.x===R.x&&Y.y===R.y);return Z.useEffect(()=>{if(!s.current)return;const R=new i1;R.background=new Tt(675132),R.fog=new wp(675132,20,50),e.current=R;const H=new _i(60,s.current.clientWidth/s.current.clientHeight,.1,1e3);H.position.set(yt*.8,yt*1.2,yt*.8),H.lookAt(yt/2,0,yt/2),r.current=H;const Y=new aR({antialias:!0});Y.setSize(s.current.clientWidth,s.current.clientHeight),Y.shadowMap.enabled=!0,Y.shadowMap.type=r_,s.current.appendChild(Y.domElement),i.current=Y;const oe=new m1(16777215,.5);R.add(oe);const de=new p1(16777215,.8);de.position.set(10,20,10),de.castShadow=!0,de.shadow.camera.left=-yt,de.shadow.camera.right=yt,de.shadow.camera.top=yt,de.shadow.camera.bottom=-yt,de.shadow.mapSize.width=2048,de.shadow.mapSize.height=2048,R.add(de);const K=new g1(yt,yt,2278750,1467700);K.position.set(yt/2-.5,-.01,yt/2-.5),R.add(K),f.current=K;const D=new gl(yt,yt),j=new fh({color:1010509,roughness:.8,metalness:.2}),I=new Di(D,j);I.rotation.x=-Math.PI/2,I.position.set(yt/2-.5,-.02,yt/2-.5),I.receiveShadow=!0,R.add(I);const ce=()=>{requestAnimationFrame(ce),h.current&&m.current&&r.current&&(m.current.lerp(h.current,.05),r.current.position.copy(m.current),r.current.lookAt(yt/2,0,yt/2)),Y.render(R,H)};ce();const ve=()=>{if(!s.current)return;const z=s.current.clientWidth,te=s.current.clientHeight;H.aspect=z/te,H.updateProjectionMatrix(),Y.setSize(z,te)};return window.addEventListener("resize",ve),()=>{window.removeEventListener("resize",ve),s.current?.removeChild(Y.domElement),Y.dispose()}},[]),Z.useEffect(()=>{if(!r.current)return;const R=yt*.8,H=yt*1.2;let Y;S.x===1&&S.y===0?Y=new fe(yt/2-R,H,yt/2):S.x===-1&&S.y===0?Y=new fe(yt/2+R,H,yt/2):S.x===0&&S.y===1?Y=new fe(yt/2,H,yt/2-R):S.x===0&&S.y===-1?Y=new fe(yt/2,H,yt/2+R):Y=new fe(yt*.8,yt*1.2,yt*.8),h.current?h.current.copy(Y):h.current=Y.clone(),m.current||(m.current=r.current.position.clone())},[S]),Z.useEffect(()=>{if(!e.current)return;const R=e.current;l.current.forEach(de=>{R.remove(de),de.geometry.dispose(),de.material.dispose()}),l.current=[],p.forEach((de,K)=>{const D=new Ks(Is*.9,Is*.9,Is*.9),j=new fh({color:K===0?4906624:2278750,roughness:.5,metalness:.3}),I=new Di(D,j);I.position.set(de.x,Is/2,de.y),I.castShadow=!0,I.receiveShadow=!0,R.add(I),l.current.push(I)}),c.current&&(R.remove(c.current),c.current.geometry.dispose(),c.current.material.dispose());const H=new Up(Is*.4,16,16),Y=new fh({color:15680580,emissive:15680580,emissiveIntensity:.3,roughness:.3,metalness:.5}),oe=new Di(H,Y);oe.position.set(x.x,Is/2,x.y),oe.castShadow=!0,R.add(oe),c.current=oe},[p,x]),Z.useEffect(()=>{const R=H=>{if(!F||v||!r.current)return;const Y=r.current.position.x,oe=r.current.position.z,de=yt/2,K=yt/2,D=new Ut(de-Y,K-oe).normalize();Math.abs(D.x)>Math.abs(D.y)?(D.x=Math.sign(D.x),D.y=0):(D.x=0,D.y=Math.sign(D.y));const j=new Ut(-D.y,D.x);let I={x:0,y:0};switch(H.key){case"ArrowUp":I={x:D.x,y:D.y};break;case"ArrowDown":I={x:-D.x,y:-D.y};break;case"ArrowLeft":I={x:-j.x,y:-j.y};break;case"ArrowRight":I={x:j.x,y:j.y};break;default:return}(I.x!==-S.x||I.y!==-S.y)&&y(I)};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[S,F,v]),Z.useEffect(()=>{if(!F||v)return;const R=setInterval(()=>{E(M),g(H=>{const Y=H[0],oe={x:Y.x+M.x,y:Y.y+M.y};if(L(oe,H))return U(!0),N(!1),H;const de=[oe,...H];return oe.x===x.x&&oe.y===x.y?(O(K=>K+10),_(B(de))):de.pop(),de})},sC);return()=>clearInterval(R)},[F,v,M,x,B]),V.jsx("div",{className:"min-h-screen min-w-screen bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 flex items-center justify-center p-8",children:V.jsxs("div",{className:"flex flex-col lg:flex-row gap-8 items-center",children:[V.jsx("div",{ref:s,className:"rounded-xl overflow-hidden shadow-2xl border-4 border-green-500/30",style:{width:"1000px",height:"1000px"}}),V.jsxs("div",{className:"flex flex-col gap-6 items-center",children:[V.jsxs("div",{className:"text-center bg-black/30 p-6 rounded-xl backdrop-blur-sm border border-green-500/30",children:[V.jsx("h1",{className:"text-white mb-4",children:"Snake 3D"}),V.jsxs("div",{className:"text-white/90 text-2xl",children:["Score: ",V.jsx("span",{className:"font-mono text-green-400",children:C})]})]}),V.jsxs("div",{className:"flex flex-col items-center gap-4",children:[!F&&!v&&V.jsx(hp,{onClick:W,size:"lg",className:"bg-green-600 hover:bg-green-700 text-lg px-8",children:"Commencer"}),v&&V.jsxs("div",{className:"text-center bg-black/30 p-6 rounded-xl backdrop-blur-sm border border-red-500/30",children:[V.jsx("div",{className:"text-red-400 text-xl mb-4",children:"Game Over!"}),V.jsx(hp,{onClick:W,size:"lg",className:"bg-green-600 hover:bg-green-700 text-lg px-8",children:"Rejouer"})]}),V.jsxs("div",{className:"text-white/90 text-center bg-black/30 p-4 rounded-xl backdrop-blur-sm border border-green-500/20",children:[F&&V.jsxs(V.Fragment,{children:[V.jsx("div",{className:"mb-2",children:"Contrôles relatifs caméra"}),V.jsxs("div",{className:"flex flex-col gap-1 text-sm",children:[V.jsx("div",{children:"↑ : Aller vers le haut de l'écran"}),V.jsx("div",{children:"↓ : Aller vers le bas de l'écran"}),V.jsx("div",{children:"← : Aller à gauche de l'écran"}),V.jsx("div",{children:"→ : Aller à droite de l'écran"})]})]}),!F&&!v&&V.jsx("div",{children:'Cliquez sur "Commencer" pour jouer'})]})]})]})]})})}const cu=[{id:"w1",text:"appareils"},{id:"w2",text:"standard"},{id:"w3",text:"USB-C"},{id:"w4",text:"cable"},{id:"w5",text:"incompatible"},{id:"w6",text:"transporter"},{id:"w7",text:"norme"},{id:"w8",text:"formats"},{id:"w9",text:"choix"}],yh=[{id:1,expected:"standard"},{id:2,expected:"USB-C"},{id:3,expected:"cable"},{id:4,expected:"incompatible"},{id:5,expected:"transporter"},{id:6,expected:"formats"},{id:7,expected:"appareils"},{id:8,expected:"choix"},{id:9,expected:"norme"}],lC=()=>{const s=Zv(),[e,i]=Z.useState({}),[r,l]=Z.useState(!1),c=(M,y)=>{M.dataTransfer.setData("text/plain",y)},f=M=>{M.preventDefault()},h=(M,y)=>{M.preventDefault();const v=M.dataTransfer.getData("text/plain"),U={...e};Object.keys(U).forEach(C=>{U[parseInt(C)]===v&&delete U[parseInt(C)]}),U[y]=v,i(U),l(!1)},m=M=>{M.preventDefault();const y=M.dataTransfer.getData("text/plain"),v={...e};Object.keys(v).forEach(U=>{v[parseInt(U)]===y&&delete v[parseInt(U)]}),i(v),l(!1)},p=()=>{l(!0)},g=()=>{const M={};yh.forEach(y=>{const v=cu.find(U=>U.text===y.expected);v&&(M[y.id]=v.id)}),i(M),l(!0)},x=()=>{i({}),l(!1)},_=M=>cu.find(y=>y.id===M),S=M=>{const y=e[M];if(!y)return!1;const v=_(y),U=yh.find(C=>C.id===M);return M===6||M===7?v?.text==="formats"||v?.text==="appareils":v?.text===U?.expected},E=yh.every(M=>S(M.id));return V.jsxs("div",{className:"fill-game-container",children:[V.jsx("div",{className:"game-description",children:"Une entreprise ayant le monopole dans le monde de la technologie tente de détruire des documents afin de garder le contrôle, reconstituer le document initial."}),V.jsx("div",{className:"word-bank",onDragOver:f,onDrop:m,children:cu.map(M=>Object.values(e).includes(M.id)?null:V.jsx("div",{className:"draggable-word",draggable:!0,onDragStart:v=>c(v,M.id),children:M.text},M.id))}),V.jsxs("div",{className:"text-board",children:["Pendant longtemps, certains appareils utilisaient encore des chargeurs différents du",V.jsx(va,{id:1,placements:e,onDrop:h,onDragStart:c,isChecked:r,isCorrect:S(1)}),V.jsx(va,{id:2,placements:e,onDrop:h,onDragStart:c,isChecked:r,isCorrect:S(2)}),", ce qui compliquait la vie de beaucoup d’utilisateurs. Au lieu de pouvoir utiliser un seul",V.jsx(va,{id:3,placements:e,onDrop:h,onDragStart:c,isChecked:r,isCorrect:S(3)}),"pour plusieurs appareils, il fallait garder un chargeur spécifique, souvent",V.jsx(va,{id:4,placements:e,onDrop:h,onDragStart:c,isChecked:r,isCorrect:S(4)}),"avec le reste du matériel du quotidien. Cela obligeait à",V.jsx(va,{id:5,placements:e,onDrop:h,onDragStart:c,isChecked:r,isCorrect:S(5)}),"plus d’accessoires, à racheter des",V.jsx(va,{id:6,placements:e,onDrop:h,onDragStart:c,isChecked:r,isCorrect:S(6)}),"en cas de perte et à gérer des",V.jsx(va,{id:7,placements:e,onDrop:h,onDragStart:c,isChecked:r,isCorrect:S(7)}),"différents selon les appareils. Alors que l’USB-C devenait la",V.jsx(va,{id:9,placements:e,onDrop:h,onDragStart:c,isChecked:r,isCorrect:S(9)}),"presque partout, ce",V.jsx(va,{id:8,placements:e,onDrop:h,onDragStart:c,isChecked:r,isCorrect:S(8)}),"créa de plus en plus de conflit économique et écologique ."]}),V.jsx("button",{className:"verify-button",onClick:p,children:"Vérifier"}),V.jsxs("div",{className:"correction-container",children:[V.jsx("button",{className:"reset-button",onClick:x,children:"Réinitialiser"}),V.jsx("button",{className:"correction-button",onClick:g,children:"Correction"})]}),r&&E&&V.jsxs("div",{className:"success-message",children:["Bravo ! Document reconstitué.",V.jsx("button",{className:"next-level-button",onClick:()=>s("/explorer"),children:"Niveau Suivant"})]})]})},va=({id:s,placements:e,onDrop:i,onDragStart:r,isChecked:l,isCorrect:c})=>{const f=e[s],h=cu.find(p=>p.id===f);let m="droppable-slot";return h&&(m+=" filled"),l&&(m+=c?" correct":" incorrect"),V.jsx("span",{className:m,onDragOver:p=>p.preventDefault(),onDrop:p=>i(p,s),children:h?V.jsx("div",{className:"draggable-word placed",draggable:!0,onDragStart:p=>r(p,h.id),children:h.text}):null})},cC=()=>V.jsx("div",{className:"level3-page",style:{minHeight:"100vh",backgroundColor:"#f0f0f0",padding:"20px"},children:V.jsx("div",{style:{marginTop:"80px",display:"flex",justifyContent:"center"},children:V.jsx(lC,{})})});function uC(){const[s,e]=Z.useState(!1),[i,r]=Z.useState(0),[l,c]=Z.useState(0),[f,h]=Z.useState(""),[m,p]=Z.useState(""),[g,x]=Z.useState(""),[_,S]=Z.useState(!1),E=["opensource","développeur","logiciel","sécurité","code","transparence","collaboration","communauté","innovation","partage","contribution","liberté","éthique","audit","licence","modularité","interopérabilité","accessibilité","soutenabilité","évolution","documentation","testabilité","maintenabilité","adaptabilité","performance","scalabilité","fiabilité","flexibilité","extensibilité","intégration","automatisation","déploiement"];Z.useEffect(()=>{s&&!_&&M()},[s,_]),Z.useEffect(()=>{if(l>0&&!_){const C=setInterval(()=>{r(O=>{const F=Math.min(O+l*1,100);return F>=100&&S(!0),F})},1e3);return()=>clearInterval(C)}},[l,_]);const M=()=>{if(!E||E.length===0)return h("");const C=E[Math.floor(Math.random()*E.length)];h(C)},y=()=>{i>=10+5*l&&(r(C=>Math.max(C-(10+5*l),0)),c(C=>C+1))},v=()=>1,U=()=>{if(!(!f||_)){if(m.trim().toLowerCase()===f.toLowerCase()){const C=v();r(O=>{const F=Math.min(O+C,100);return F>=100&&S(!0),F}),x("✓ Correct!"),p(""),M()}else x("✗ Incorrect, réessayez!");setTimeout(()=>x(""),2e3)}};return s?_?V.jsx("div",{className:"level2-container",children:V.jsxs("div",{className:"level2-content",children:[V.jsx("h1",{className:"level2-title",children:"Bravo, vous avez fini le développement de votre logiciel !"}),V.jsx("p",{className:"level2-text",children:"Grâce à l’aide communautaire que les utilisateurs vous ont apportés, des milliers d’entreprises auront accès à des logiciels open-sources."}),V.jsx("p",{className:"level2-text",children:"Cela leur permettra de rester indépendant technologiquement."}),V.jsx("p",{className:"level2-text",children:"Par conséquent, ces entreprises n’auront pas à changer de logiciel ce qui n’occasionnera pas des coûts économique et écologique."}),V.jsx(ur,{to:"/level3intro",className:"level2-button",style:{display:"inline-block",marginTop:"1rem",textDecoration:"none"},children:"Niveau Suivant"})]})}):V.jsx("div",{className:"level2-container",children:V.jsxs("div",{className:"level2-game-container",children:[V.jsx("h1",{className:"level2-title",children:"Niveau 2: Open Source"}),V.jsxs("div",{className:"progress-bar-container",children:[V.jsxs("p",{className:"level2-text",style:{marginBottom:"0.5rem"},children:["Engagez un développeur pour ",10+5*l,"%."]}),V.jsx("div",{className:"progress-bar-bg",children:V.jsxs("div",{className:"progress-bar-fill",style:{width:`${Math.min(i,100)}%`},children:[Math.floor(i),"%"]})})]}),V.jsxs("div",{className:"developer-controls",children:[V.jsxs("button",{onClick:y,disabled:i<1,className:"dev-button",children:["Développeurs: ",l]}),V.jsx("button",{onClick:y,disabled:i<1,className:"dev-button",children:"+"})]}),V.jsxs("div",{className:"word-game-area",children:[V.jsx("p",{className:"level2-text",style:{marginBottom:"1rem"},children:"Écrivez le mot ci-dessous pour gagner 1%"}),V.jsx("p",{className:"target-word",children:f}),V.jsxs("div",{className:"word-input-group",children:[V.jsx("input",{type:"text",value:m,onChange:C=>p(C.target.value),onKeyPress:C=>C.key==="Enter"&&U(),placeholder:"Votre réponse",className:"word-input"}),V.jsx("button",{onClick:U,className:"validate-button",children:"Valider"})]}),g&&V.jsx("p",{className:"feedback-message",children:g})]})]})}):V.jsx("div",{className:"level2-container",children:V.jsxs("div",{className:"level2-content",children:[V.jsx("h1",{className:"level2-title",children:"Niveau 2: Open Source"}),V.jsx("div",{className:"level2-text-box",children:V.jsxs("p",{className:"level2-text",children:["Vous êtes un developpeur qui a pour but de développer en open source. ",V.jsx("br",{}),"De cette façon si un problème se trouve sur votre logiciel, le problème sera facilement repérable à partir du code et le soucis ne sera pas dépend d’une petite équipe dans une entreprise.",V.jsx("br",{}),V.jsx("br",{}),"De cette manière, les utilisateurs sauront qu’aucun spyware se trouve sur votre logiciel."]})}),V.jsx("button",{onClick:()=>e(!0),className:"level2-button",children:"Commencer le jeu"})]})})}const fC=()=>V.jsx("div",{className:"level1-intro",children:V.jsxs("div",{className:"li-main",children:[V.jsxs("aside",{className:"li-left",children:[V.jsx("div",{className:"li-oval",children:"niv 1"}),V.jsxs("div",{className:"li-box",children:[V.jsx("h4",{children:"Vos fichiers seront perdus le"}),V.jsx("p",{className:"li-date",children:"19/05/2017 16:50:06"}),V.jsx("p",{className:"li-small",children:"Temps restant"}),V.jsx("p",{className:"li-timer",children:"05:23:34:22"})]}),V.jsxs("div",{className:"li-box",children:[V.jsx("h4",{children:"Vos fichiers seront perdus le"}),V.jsx("p",{className:"li-date",children:"19/05/2017 16:50:06"}),V.jsx("p",{className:"li-small",children:"Temps restant"}),V.jsx("p",{className:"li-timer",children:"05:23:34:22"})]})]}),V.jsxs("section",{className:"li-center",children:[V.jsx("h1",{className:"li-title",children:"Oups, vos fichiers ont été chiffrés !"}),V.jsxs("div",{className:"li-panel",children:[V.jsx("p",{className:"lead",children:"Bien sûr. Nous garantissons que vous pouvez récupérer tous vos fichiers en toute sécurité et facilement. Mais vous n'avez pas beaucoup de temps."}),V.jsx("p",{children:"Mais si vous voulez déchiffrer tous vos fichiers, vous devez payer. Vous n’avez que 3 jours pour effectuer le paiement. Après cela, le prix sera doublé. De plus, si vous ne payez pas dans les 7 jours, vous ne pourrez plus jamais récupérer vos fichiers. Nous organiserons des événements gratuits pour les utilisateurs qui sont si pauvres qu’ils n’ont pas pu payer en 6 mois."}),V.jsx("p",{children:"Bien sûr. Nous garantissons que vous pouvez récupérer tous vos fichiers en toute sécurité et facilement. Mais vous n’avez pas beaucoup de temps."}),V.jsx("p",{children:"Mais si vous voulez déchiffrer tous vos fichiers, vous devez payer. Vous n’avez que 3 jours pour effectuer le paiement. Après cela, le prix sera doublé. De plus, si vous ne payez pas dans les 7 jours, vous ne pourrez plus jamais récupérer vos fichiers. Nous organiserons des événements gratuits pour les utilisateurs qui sont si pauvres qu’ils n’ont pas pu payer en 6 mois."}),V.jsxs("p",{children:["Le paiement est accepté uniquement en Bitcoin. Pour plus d’informations, cliquez sur ",V.jsx("b",{children:"About bitcoin"}),"."]}),V.jsxs("p",{children:["Veuillez vérifier le prix actuel du Bitcoin et en acheter. Pour plus d’informations, cliquez sur ",V.jsx("b",{children:"How to buy bitcoins"}),". Envoyez ensuite le montant correct à l’adresse indiquée dans cette fenêtre. Après votre paiement, cliquez sur. Meilleur moment pour vérifier : de 9 h à 11 h GMT, du lundi au vendredi."]}),V.jsxs("div",{className:"li-payment",children:[V.jsxs("div",{className:"li-payment-left",children:[V.jsx("p",{className:"small-muted",children:"Envoyez l'équivalent de 300 $ en bitcoin à cette adresse :"}),V.jsx("p",{className:"btc-address",children:"Palais de l'Élysée 55 rue du Faubourg-Saint-Honoré"})]}),V.jsx("div",{className:"li-payment-right",children:V.jsx(ur,{to:"/Level1Game",className:"nav-link",children:"Payer"})})]})]})]})]})}),dC=({x:s,y:e,w:i,h:r})=>{const l=i*2,c=r*2,f=(l-i)/2,h=(c-r)/2,m={position:"absolute",left:s-f,top:e-h,width:l,height:c,display:"block",pointerEvents:"none"};return V.jsxs("div",{className:"enemy",style:m,children:[V.jsx("div",{className:"enemy-eye left"}),V.jsx("div",{className:"enemy-eye right"})]})},hC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAVCAYAAACg/AXsAAAA/klEQVR4AbSQyxHCMAxEJYpLjtAQF2iIa9Kc2bUlkTiOzTBDRoo+Kz9/LtL/EmR3pG0bQSQlMtqLvTuE+GAv9iD1Eeo6uD1IXGV0pS4kthokf4Hw3u6t/V1jDP1wkjRNIbaSlk4Iqe6xrn7Musagr0mEyI6+LHJ9UMcYbZ75z5770HOBn6/LENRht6fI626lAyyyT93UCAVidB6Zg6EyMY0pnTrnmItpBYJOCMjDbMiHo49kOx8Q9H+2c4i9Q5DrOgSRNuRswUn/AFHVzR7HVPWo7yCqeUB1XSV7qUVVS40+sIoP4WMBMUFNYqRbmQNrOguMeyrlTdCh0PRvtDcAAAD//wXUVd8AAAAGSURBVAMAt6RQIodt9EEAAAAASUVORK5CYIIA",pC=()=>{const s=Z.useRef(null),e=Z.useRef(null),i=Z.useRef({}),[r,l]=Z.useState(0),[c,f]=Z.useState(!0),[h,m]=Z.useState(!1),[p,g]=Z.useState(!1),[x,_]=Z.useState([]),S=Z.useRef(r),E=Z.useRef(c),M=Z.useRef(h);return Z.useEffect(()=>{S.current=r},[r]),Z.useEffect(()=>{E.current=c},[c]),Z.useEffect(()=>{M.current=h},[h]),Z.useEffect(()=>{const y=s.current,v=y.getContext("2d"),U=800,C=600;y.width=U,y.height=C;const O=new Image;O.src=hC;const F={player:{x:U/2-20,y:C-60,w:40,h:16,speed:300},keys:{},bullets:[],enemies:[],enemyDir:1,enemySpeed:100,lastShot:0,lastTime:performance.now(),lastSync:performance.now(),spawnMargin:150,rows:4,cols:6},N=()=>{const K=[],D=F.cols,j=F.rows,I=20,ce=32,ve=20,z=D*(ce+I)-I,te=(U-z)/2;for(let xe=0;xe<j;xe++)for(let Se=0;Se<D;Se++)K.push({x:te+Se*(ce+I),y:60+xe*(ve+18),w:ce,h:ve,alive:!0,row:xe,col:Se});return K};F.enemies=N(),_(F.enemies.map(K=>({...K}))),i.current=F;const B=K=>{i.current.keys[K.code]=!0,["ArrowLeft","ArrowRight","Space","ArrowUp","ArrowDown"].includes(K.code)&&K.preventDefault()},W=K=>{i.current.keys[K.code]=!1};window.addEventListener("keydown",B),window.addEventListener("keyup",W);const L=(K,D)=>K.x<D.x+D.w&&K.x+K.w>D.x&&K.y<D.y+D.h&&K.y+K.h>D.y,R=K=>{const D=i.current;K-D.lastShot<300||(D.lastShot=K,D.bullets.push({x:D.player.x+D.player.w/2-3,y:D.player.y-8,w:6,h:10,speed:500}))},H=K=>{const D=i.current;(D.keys.ArrowLeft||D.keys.KeyA)&&(D.player.x-=D.player.speed*K),(D.keys.ArrowRight||D.keys.KeyD)&&(D.player.x+=D.player.speed*K),D.keys.Space&&R(performance.now()),D.player.x<0&&(D.player.x=0),D.player.x+D.player.w>U&&(D.player.x=U-D.player.w),D.bullets.forEach(ce=>ce.y-=ce.speed*K),D.bullets=D.bullets.filter(ce=>ce.y+ce.h>0);let j=!1;const I=D.enemies.filter(ce=>ce.alive);I.forEach(ce=>{ce.x+=D.enemyDir*D.enemySpeed*K,(ce.x<8||ce.x+ce.w>U-8)&&(j=!0)}),j&&(D.enemyDir*=-1,I.forEach(ce=>ce.y+=72)),D.bullets.forEach(ce=>{I.forEach(ve=>{ve.alive&&L(ce,ve)&&(ve.alive=!1,ce.y=-1e3,l(z=>{const te=z+10;return S.current=te,te}))})});for(let ce of D.enemies)ce.alive&&(ce.y+ce.h>=D.player.y||L(ce,D.player))&&(m(!0),M.current=!0,f(!1),E.current=!1,ce.alive=!1);D.enemies.every(ce=>!ce.alive)&&(f(!1),E.current=!1,m(!0),M.current=!0,g(!0))},Y=()=>{const K=i.current;if(v.fillStyle="#001f2f",v.fillRect(0,0,U,C),O&&O.complete){const D=Math.max(K.player.w,48),j=Math.max(K.player.h+12,32),I=K.player.x+(K.player.w-D)/2,ce=K.player.y-(j-K.player.h);v.drawImage(O,I,ce,D,j)}else v.fillStyle="#ffd166",v.fillRect(K.player.x,K.player.y,K.player.w,K.player.h),v.fillStyle="#ff8fab",v.fillRect(K.player.x+K.player.w/2-6,K.player.y-6,12,6);v.fillStyle="#ffffff",K.bullets.forEach(D=>v.fillRect(D.x,D.y,D.w,D.h)),v.fillStyle="#ffffff",v.font="16px monospace",v.fillText(`Score: ${S.current}`,12,20),M.current&&(v.fillStyle="rgba(0,0,0,0.4)",v.fillRect(0,0,U,C))},oe=K=>{const D=i.current;D.lastTime||(D.lastTime=K);const j=Math.min(.05,(K-D.lastTime)/1e3);D.lastTime=K,!M.current&&E.current&&H(j),K-D.lastSync>60&&(D.lastSync=K,_(D.enemies.map(I=>({...I})))),Y(),e.current=requestAnimationFrame(oe)};e.current=requestAnimationFrame(oe);const de=K=>{K.code==="KeyR"&&(F.enemies=N(),F.bullets=[],F.player.x=U/2-20,F.lastShot=0,i.current=F,l(0),S.current=0,m(!1),M.current=!1,g(!1),f(!0),E.current=!0,_(F.enemies.map(D=>({...D}))))};return window.addEventListener("keydown",de),()=>{cancelAnimationFrame(e.current),window.removeEventListener("keydown",B),window.removeEventListener("keyup",W),window.removeEventListener("keydown",de)}},[]),V.jsx("div",{className:"level1game-container",children:V.jsxs("div",{className:"level1game-canvas-wrapper",style:{width:800,height:600,position:"relative"},children:[V.jsx("canvas",{ref:s,className:"level1game-canvas"}),V.jsx("div",{className:"enemies-layer",style:{position:"absolute",inset:0,pointerEvents:"none"},children:x.filter(y=>y.alive).map(y=>V.jsx(dC,{x:y.x,y:y.y,w:y.w,h:y.h},`${y.row}-${y.col}`))}),h&&V.jsx("div",{className:"level1game-endOverlay",style:{position:"absolute",inset:0},children:p?V.jsx(ur,{to:"/level1End",className:"level1game-button",children:"Continuer"}):V.jsxs("div",{className:"level1game-gameover",children:[V.jsx("div",{className:"level1game-gameover-title",children:"GAME OVER"}),V.jsx("div",{className:"level1game-restart",children:"Press R to restart"})]})})]})})},mC=()=>V.jsxs("div",{className:"level1end-container",children:[V.jsx("h1",{children:"Félicitation, vous vous êtes fait arnaqué"}),V.jsxs("p",{children:["Aïe Aïe, vous vous êtes faits avoir par un logiciel espion qui a supprimé vos données.",V.jsx("br",{}),"Vous avez fait 2 énormes erreurs. Premièrement, vous avez téléchargé un logiciel qui n’était pas open-source.",V.jsx("br",{}),"Par conséquent, le logiciel avait un comportement imprévisible et pouvait contenir des spywares. Deuxièmement, vous n’avez pas gardés vos données sensibles sur d’autres plateformes tels qu’un cloud, une clé usb ou un disque dur externe.",V.jsx("br",{}),"MAINTENANT, IL EST L’HEURE DE LA REVANCHE."]}),V.jsx(ur,{to:"/level2",className:"level1end-button",children:"Niveau 2"})]});function xC(){const[s,e]=Z.useState(!1);return Z.useEffect(()=>{const i=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","a","b"],r=[],l=c=>{const f=c.key.length===1?c.key.toLowerCase():c.key;r.push(f),r.length>i.length&&r.shift(),r.length===i.length&&r.every((h,m)=>h===i[m])&&e(!0),c.key==="Escape"&&e(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[]),V.jsx(UM,{children:s?V.jsx("div",{className:"flex flex-row justify-center top-16 right-8 z-50 pointer-events-none",children:V.jsxs("div",{children:[V.jsx(hp,{onClick:()=>e(!1),size:"lg",className:"bg-green-600 hover:bg-green-700 text-lg px-8",children:"Menu Principal"}),V.jsx(oC,{modal:!0})]})}):V.jsxs("div",{className:"app",children:[V.jsx(HM,{}),V.jsx("main",{className:"main-content",children:V.jsxs(lM,{children:[V.jsx(Fi,{path:"/",element:V.jsx(wg,{})}),V.jsx(Fi,{path:"/explorer",element:V.jsx(VM,{})}),V.jsx(Fi,{path:"/level3",element:V.jsx(cC,{})}),V.jsx(Fi,{path:"/level2",element:V.jsx(uC,{})}),V.jsx(Fi,{path:"/index.html",element:V.jsx(wg,{})}),V.jsx(Fi,{path:"/level1intro",element:V.jsx(fC,{})}),V.jsx(Fi,{path:"/level1game",element:V.jsx(pC,{})}),V.jsx(Fi,{path:"/level1end",element:V.jsx(mC,{})}),V.jsx(Fi,{path:"*",element:V.jsx(kM,{})})]})})]})})}pS.createRoot(document.getElementById("root")).render(V.jsx(xC,{}));
