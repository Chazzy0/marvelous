(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function Ee(e,t){return function(){return e.apply(t,arguments)}}const{toString:we}=Object.prototype,{getPrototypeOf:ee}=Object,te=(e=>t=>{const n=we.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>te(t)===e),M=e=>t=>typeof t===e,{isArray:L}=Array,B=M("undefined");function je(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const be=N("ArrayBuffer");function Ie(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&be(e.buffer),t}const He=M("string"),x=M("function"),Se=M("number"),ne=e=>e!==null&&typeof e=="object",qe=e=>e===!0||e===!1,k=e=>{if(te(e)!=="object")return!1;const t=ee(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Me=N("Date"),ve=N("File"),ze=N("Blob"),Je=N("FileList"),Ve=e=>ne(e)&&x(e.pipe),$e=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||we.call(e)===t||x(e.toString)&&e.toString()===t)},We=N("URLSearchParams"),Ke=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(r=0;r<i;r++)u=o[r],t.call(null,e[u],u,e)}}function Oe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Re=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ae=e=>!B(e)&&e!==Re;function X(){const{caseless:e}=Ae(this)&&this||{},t={},n=(r,s)=>{const o=e&&Oe(t,s)||s;k(t[o])&&k(r)?t[o]=X(t[o],r):k(r)?t[o]=X({},r):L(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&D(arguments[r],n);return t}const Ge=(e,t,n,{allOwnKeys:r}={})=>(D(t,(s,o)=>{n&&x(s)?e[o]=Ee(s,n):e[o]=s},{allOwnKeys:r}),e),Xe=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Qe=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ye=(e,t,n,r)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&ee(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ze=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},et=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Se(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},tt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ee(Uint8Array)),nt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},rt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},st=N("HTMLFormElement"),ot=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ae=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),it=N("RegExp"),Te=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},at=e=>{Te(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ct=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return L(e)?r(e):r(String(e).split(t)),n},ut=()=>{},lt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),$="abcdefghijklmnopqrstuvwxyz",ce="0123456789",ge={DIGIT:ce,ALPHA:$,ALPHA_DIGIT:$+$.toUpperCase()+ce},ft=(e=16,t=ge.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function dt(e){return!!(e&&x(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const pt=e=>{const t=new Array(10),n=(r,s)=>{if(ne(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=L(r)?[]:{};return D(r,(i,u)=>{const p=n(i,s+1);!B(p)&&(o[u]=p)}),t[s]=void 0,o}}return r};return n(e,0)},a={isArray:L,isArrayBuffer:be,isBuffer:je,isFormData:$e,isArrayBufferView:Ie,isString:He,isNumber:Se,isBoolean:qe,isObject:ne,isPlainObject:k,isUndefined:B,isDate:Me,isFile:ve,isBlob:ze,isRegExp:it,isFunction:x,isStream:Ve,isURLSearchParams:We,isTypedArray:tt,isFileList:Je,forEach:D,merge:X,extend:Ge,trim:Ke,stripBOM:Xe,inherits:Qe,toFlatObject:Ye,kindOf:te,kindOfTest:N,endsWith:Ze,toArray:et,forEachEntry:nt,matchAll:rt,isHTMLForm:st,hasOwnProperty:ae,hasOwnProp:ae,reduceDescriptors:Te,freezeMethods:at,toObjectSet:ct,toCamelCase:ot,noop:ut,toFiniteNumber:lt,findKey:Oe,global:Re,isContextDefined:Ae,ALPHABET:ge,generateString:ft,isSpecCompliantForm:dt,toJSONObject:pt};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ne=y.prototype,Pe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Pe[e]={value:e}});Object.defineProperties(y,Pe);Object.defineProperty(Ne,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(Ne);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},u=>u!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const ht=null;function Q(e){return a.isPlainObject(e)||a.isArray(e)}function xe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ue(e,t,n){return e?e.concat(t).map(function(s,o){return s=xe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function mt(e){return a.isArray(e)&&!e.some(Q)}const yt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function v(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,A){return!a.isUndefined(A[m])});const r=n.metaTokens,s=n.visitor||f,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!p&&a.isBlob(d))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?p&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function f(d,m,A){let l=d;if(d&&!A&&typeof d=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&mt(d)||(a.isFileList(d)||a.endsWith(m,"[]"))&&(l=a.toArray(d)))return m=xe(m),l.forEach(function(O,R){!(a.isUndefined(O)||O===null)&&t.append(i===!0?ue([m],R,o):i===null?m:m+"[]",c(O))}),!1}return Q(d)?!0:(t.append(ue(A,m,o),c(d)),!1)}const h=[],b=Object.assign(yt,{defaultVisitor:f,convertValue:c,isVisitable:Q});function w(d,m){if(!a.isUndefined(d)){if(h.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(d),a.forEach(d,function(l,E){(!(a.isUndefined(l)||l===null)&&s.call(t,l,a.isString(E)?E.trim():E,m,b))===!0&&w(l,m?m.concat(E):[E])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function le(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function re(e,t){this._pairs=[],e&&v(e,this,t)}const Ce=re.prototype;Ce.append=function(t,n){this._pairs.push([t,n])};Ce.toString=function(t){const n=t?function(r){return t.call(this,r,le)}:le;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Et(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fe(e,t,n){if(!t)return e;const r=n&&n.encode||Et,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new re(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class wt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const fe=wt,Le={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},bt=typeof URLSearchParams<"u"?URLSearchParams:re,St=typeof FormData<"u"?FormData:null,Ot=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Rt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),T={isBrowser:!0,classes:{URLSearchParams:bt,FormData:St,Blob},isStandardBrowserEnv:Ot,isStandardBrowserWebWorkerEnv:Rt,protocols:["http","https","file","blob","url","data"]};function At(e,t){return v(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Tt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function gt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function _e(e){function t(n,r,s,o){let i=n[o++];const u=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=gt(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Tt(r),s,n,0)}),n}return null}const Nt={"Content-Type":void 0};function Pt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const z={transitional:Le,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(_e(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return At(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return v(u?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Pt(t)):t}],transformResponse:[function(t){const n=this.transitional||z.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?y.from(u,y.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){z.headers[t]={}});a.forEach(["post","put","patch"],function(t){z.headers[t]=a.merge(Nt)});const se=z,xt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ct=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&xt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},de=Symbol("internals");function _(e){return e&&String(e).trim().toLowerCase()}function j(e){return e===!1||e==null?e:a.isArray(e)?e.map(j):String(e)}function Ft(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Lt(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function W(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function _t(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Bt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class J{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(u,p,c){const f=_(p);if(!f)throw new Error("header name must be a non-empty string");const h=a.findKey(s,f);(!h||s[h]===void 0||c===!0||c===void 0&&s[h]!==!1)&&(s[h||p]=j(u))}const i=(u,p)=>a.forEach(u,(c,f)=>o(c,f,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Lt(t)?i(Ct(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=_(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Ft(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=_(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||W(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=_(i),i){const u=a.findKey(r,i);u&&(!n||W(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||W(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=j(s),delete n[o];return}const u=t?_t(o):String(o).trim();u!==o&&delete n[o],n[u]=j(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[de]=this[de]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=_(i);r[u]||(Bt(s,i),r[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}J.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(J.prototype);a.freezeMethods(J);const g=J;function K(e,t){const n=this||se,r=t||n,s=g.from(r.headers);let o=r.data;return a.forEach(e,function(u){o=u.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Be(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,y,{__CANCEL__:!0});function Dt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ut=T.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,u){const p=[];p.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&p.push("expires="+new Date(s).toGMTString()),a.isString(o)&&p.push("path="+o),a.isString(i)&&p.push("domain="+i),u===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function kt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function jt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function De(e,t){return e&&!kt(t)?jt(e,t):t}const It=T.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function Ht(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function qt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const c=Date.now(),f=r[o];i||(i=c),n[s]=p,r[s]=c;let h=o,b=0;for(;h!==s;)b+=n[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const w=f&&c-f;return w?Math.round(b*1e3/w):void 0}}function pe(e,t){let n=0;const r=qt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-n,p=r(u),c=o<=i;n=o;const f={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:p||void 0,estimated:p&&i&&c?(i-o)/p:void 0,event:s};f[t?"download":"upload"]=!0,e(f)}}const Mt=typeof XMLHttpRequest<"u",vt=Mt&&function(e){return new Promise(function(n,r){let s=e.data;const o=g.from(e.headers).normalize(),i=e.responseType;let u;function p(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(s)&&(T.isStandardBrowserEnv||T.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(w+":"+d))}const f=De(e.baseURL,e.url);c.open(e.method.toUpperCase(),Fe(f,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function h(){if(!c)return;const w=g.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),m={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:w,config:e,request:c};Dt(function(l){n(l),p()},function(l){r(l),p()},m),c=null}if("onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(r(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const m=e.transitional||Le;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new y(d,m.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},T.isStandardBrowserEnv){const w=(e.withCredentials||It(f))&&e.xsrfCookieName&&Ut.read(e.xsrfCookieName);w&&o.set(e.xsrfHeaderName,w)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(d,m){c.setRequestHeader(m,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",pe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",pe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=w=>{c&&(r(!w||w.type?new U(null,e,c):w),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const b=Ht(f);if(b&&T.protocols.indexOf(b)===-1){r(new y("Unsupported protocol "+b+":",y.ERR_BAD_REQUEST,e));return}c.send(s||null)})},I={http:ht,xhr:vt};a.forEach(I,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const zt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?I[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new y(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(I,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:I};function G(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function he(e){return G(e),e.headers=g.from(e.headers),e.data=K.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),zt.getAdapter(e.adapter||se.adapter)(e).then(function(r){return G(e),r.data=K.call(e,e.transformResponse,r),r.headers=g.from(r.headers),r},function(r){return Be(r)||(G(e),r&&r.response&&(r.response.data=K.call(e,e.transformResponse,r.response),r.response.headers=g.from(r.response.headers))),Promise.reject(r)})}const me=e=>e instanceof g?e.toJSON():e;function F(e,t){t=t||{};const n={};function r(c,f,h){return a.isPlainObject(c)&&a.isPlainObject(f)?a.merge.call({caseless:h},c,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function s(c,f,h){if(a.isUndefined(f)){if(!a.isUndefined(c))return r(void 0,c,h)}else return r(c,f,h)}function o(c,f){if(!a.isUndefined(f))return r(void 0,f)}function i(c,f){if(a.isUndefined(f)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function u(c,f,h){if(h in t)return r(c,f);if(h in e)return r(void 0,c)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(c,f)=>s(me(c),me(f),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(f){const h=p[f]||s,b=h(e[f],t[f],f);a.isUndefined(b)&&h!==u||(n[f]=b)}),n}const Ue="1.3.3",oe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{oe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ye={};oe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ue+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,u)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!ye[i]&&(ye[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,u):!0}};function Jt(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const u=e[o],p=u===void 0||i(u,o,e);if(p!==!0)throw new y("option "+o+" must be "+p,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const Y={assertOptions:Jt,validators:oe},P=Y.validators;class q{constructor(t){this.defaults=t,this.interceptors={request:new fe,response:new fe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Y.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!==void 0&&Y.assertOptions(s,{encode:P.function,serialize:P.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=g.concat(i,o);const u=[];let p=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(p=p&&m.synchronous,u.unshift(m.fulfilled,m.rejected))});const c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});let f,h=0,b;if(!p){const d=[he.bind(this),void 0];for(d.unshift.apply(d,u),d.push.apply(d,c),b=d.length,f=Promise.resolve(n);h<b;)f=f.then(d[h++],d[h++]);return f}b=u.length;let w=n;for(h=0;h<b;){const d=u[h++],m=u[h++];try{w=d(w)}catch(A){m.call(this,A);break}}try{f=he.call(this,w)}catch(d){return Promise.reject(d)}for(h=0,b=c.length;h<b;)f=f.then(c[h++],c[h++]);return f}getUri(t){t=F(this.defaults,t);const n=De(t.baseURL,t.url);return Fe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){q.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,u){return this.request(F(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}q.prototype[t]=n(),q.prototype[t+"Form"]=n(!0)});const H=q;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{r.subscribe(u),o=u}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,u){r.reason||(r.reason=new U(o,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(s){t=s}),cancel:t}}}const Vt=ie;function $t(e){return function(n){return e.apply(null,n)}}function Wt(e){return a.isObject(e)&&e.isAxiosError===!0}const Z={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Z).forEach(([e,t])=>{Z[t]=e});const Kt=Z;function ke(e){const t=new H(e),n=Ee(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ke(F(e,s))},n}const S=ke(se);S.Axios=H;S.CanceledError=U;S.CancelToken=Vt;S.isCancel=Be;S.VERSION=Ue;S.toFormData=v;S.AxiosError=y;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=$t;S.isAxiosError=Wt;S.mergeConfig=F;S.AxiosHeaders=g;S.formToJSON=e=>_e(a.isHTMLForm(e)?new FormData(e):e);S.HttpStatusCode=Kt;S.default=S;const Gt=S;(()=>{const e={currencyFrom:"",currencyTo:"",priceFrom:null,priceTo:null,isLoading:!1};console.log("Env",{BASE_URL:"/marvelous/",MODE:"production",DEV:!1,PROD:!0});const t={get(){return Reflect.get(...arguments)}},n=new Proxy(e,t);let r=[];document.querySelectorAll(".dropdown[data-role=select]").forEach(l=>{r.push(l)});const s=(l,E)=>{const O=l.querySelectorAll(".dropdown-item");for(let R of O)R.classList.remove("active-option");return O[E-1]?(O[E-1].classList.add("active-option"),!0):!1},o=(l,E,O)=>{const R=l.querySelector(".dropdown-toggle");l.dataset.value=E,R.innerHTML=O.innerHTML,n[l.id]=E},i=l=>{const E=l.querySelector(".dropdown-item");E?(s(l,1),o(l,E.dataset.value,E)):btn.innerHTML="Dropdown"},u=function(l,E){const O=l.querySelectorAll(".dropdown-item");for(let R=0;R<O.length;R++)E(O[R],R);return!0},p=l=>{const E=(O,R,C)=>{let V=C.dataset.value;o(l,V,C),s(l,R+1)};l.addEventListener("show.bs.dropdown",O=>{u(l,(R,C)=>{R.addEventListener("click",V=>E(V,C,R))})}),l.addEventListener("hide.bs.dropdown",()=>{u(l,(O,R)=>{O.removeEventListener("click",C=>E(C,R,O))})})};r.forEach(l=>{i(l),p(l)}),document.getElementById("priceFrom_number").addEventListener("input",l=>{n.priceFrom=l.target.value});const c=()=>Gt.get(`https://min-api.cryptocompare.com/data/price?fsym=${n.currencyFrom}&tsyms=NGN,USDT,BTC,ETH`,{headers:{Authorization:"Apikey"+{}.VITE_API_KEY}}).then(l=>l.data).catch(l=>{throw l}),f=l=>{n.priceTo=l[n.currencyTo]*n.priceFrom,document.getElementById("priceTo_number").value=n.priceTo,m(),console.log(n)},h=l=>!Number.isNaN(Number(l)),b=l=>{let E=document.getElementById("priceFrom_validate");E.textContent=l,E.style.visibility="visible",E.style.opacity="1"},w=()=>{let l=document.getElementById("priceFrom_validate");l.textContent="",l.style.visibility="hidden",l.style.opacity="0"},d=l=>{let E=document.getElementById("priceTo_validate");E.textContent=l,E.style.visibility="visible",E.style.opacity="1"},m=()=>{let l=document.getElementById("priceTo_validate");l.textContent="",l.style.visibility="hidden",l.style.opacity="0"};document.querySelector("#convert-prices").addEventListener("click",l=>{n.priceFrom&&h(n.priceFrom)?c().then(E=>f(E)).catch(E=>{d("Could not fetch prices"),setTimeout(()=>m(),3e3)}):(b("Please input a valid price"),setTimeout(()=>w(),5e3))})})();