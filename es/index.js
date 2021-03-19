var N=Object.create,g=Object.defineProperty,M=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty,O=Object.getOwnPropertyNames,C=Object.getOwnPropertyDescriptor;var L=t=>g(t,"__esModule",{value:!0});var w=(t,e)=>()=>(e||(e={exports:{}},t(e.exports,e)),e.exports);var H=(t,e,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of O(e))!P.call(t,a)&&a!=="default"&&g(t,a,{get:()=>e[a],enumerable:!(n=C(e,a))||n.enumerable});return t},k=t=>H(L(g(t!=null?N(M(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var _=w((v,E)=>{(function(t,e){typeof v=="object"&&typeof E!="undefined"?e(v):typeof define=="function"&&define.amd?define(["exports"],e):e((t=t||self).queryString={})})(v,function(t){"use strict";function e(r){try{return decodeURIComponent(r.replace(/\+/g," "))}catch(s){return null}}function n(r){try{return encodeURIComponent(r)}catch(s){return null}}function a(r,s){if(!r)return null;for(var o,c=/([^=?&]+)=?([^&]*)/g,u={};o=c.exec(r);){var p=e(o[1]),f=e(o[2]);if(!(p===null||f===null||p in u))if(s||typeof f!="string")u[p]=f;else{var m=Number(f),x=isNaN(m)?f:m;u[p]=f==x.toString()?x:f}}return u}function i(r,s){s===void 0&&(s="");var o,c,u=[];for(c in typeof s!="string"&&(s="?"),r)if(Object.prototype.hasOwnProperty.call(r,c)){if((o=r[c])||o!=null&&!isNaN(o)||(o=""),c=encodeURIComponent(c),o=encodeURIComponent(o),c===null||o===null)continue;u.push(c+"="+o)}return u.length?s+u.join("&"):""}var l={parse:a,stringify:i,decode:e,encode:n};t.decode=e,t.default=l,t.encode=n,t.parse=a,t.stringify=i,Object.defineProperty(t,"__esModule",{value:!0})})});var b=k(_());var A=Object.create,y=Object.defineProperty,S=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty,D=Object.getOwnPropertyNames,F=Object.getOwnPropertyDescriptor,R=t=>y(t,"__esModule",{value:!0}),U=(t,e)=>()=>(e||(e={exports:{}},t(e.exports,e)),e.exports),q=(t,e,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of D(e))!I.call(t,a)&&a!=="default"&&y(t,a,{get:()=>e[a],enumerable:!(n=F(e,a))||n.enumerable});return t},W=t=>t&&t.__esModule?t:q(R(y(t!=null?A(S(t)):{},"default",{value:t,enumerable:!0})),t),Y=U((t,e)=>{(function(n,a){typeof t=="object"&&typeof e!="undefined"?e.exports=a():typeof define=="function"&&define.amd?define(a):(n=n||self).templateFn=a()})(t,function(){"use strict";return function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(1<n.length){var i=n[0],l=n.slice(1),r="";return i.forEach(function(s,o){r+=s,l[o]&&(r+=l[o])}),r}return typeof n[0]=="string"?n[0]:n[0]?n[0].join(""):""}})}),z=W(Y()),T={};function B(...t){let e=z.default(...t);if(T[e])return;T[e]=!0;let n=document.createElement("style");n.innerHTML=e,document.head.append(n)}var j=B;var d="navi-page";function G(t,e,n){t.className=d+" navi-move-last",e.className=d+" navi-move-next",n(),setTimeout(()=>{e.className=d},20)}function J(t,e){t.className=d,e.className=d+" navi-move-next",e.remove()}function h(t){let e=document.createElement("div");e.setAttribute("ux-navi-root","1"),e.className="navi-root",e.push=async(i,l,r)=>{let s=t[i];if(!s)return;let o=s();if(o.then){let m=await Promise.resolve(o);if(!m.default)return;o=m.default()}let c=h.isWechat?"replaceState":"pushState",u=l?i+"?"+b.default.stringify(l):i;history[c](l,"",u);let p=e.lastElementChild,f=document.createElement("div");f.setAttribute("ux-navi","1"),f.__navi_pathname=u,f.__navi_state=l,f.append(o),p?G(p,f,()=>{e.append(f)}):(f.className=d,e.append(f))},e.replace=async(i,l)=>{let r=t[i];if(!r)return;let s=r();if(s.then){let u=await Promise.resolve(s);if(!u.default)return;s=u.default()}history.replaceState(l,"",l?i+"?"+b.default.stringify(l):i);let o=e.lastElementChild,c=document.createElement("div");c.setAttribute("ux-navi","1"),c.append(s),c.className=d,o.replaceWith(c)},e.pop=async(i=1)=>{if(i>1){for(let l=0;l<i-1;l++)if(e.children.length-1>1){let r=e.children.item(e.children.length-1);r&&r.remove()}}e.children.length>1&&n()},e.go=async(i=0)=>{e.pop(e.children.length-1-i)};let n=()=>{if(!document.contains(e)){window.removeEventListener("popstate",n);return}if(e.children.length<=1)return;let i=e.lastChild,l=e.children.item(e.children.length-2);J(l,i),e.lastChild.__navi_pathname&&history.replaceState(e.lastChild.__navi_state,"",e.lastChild.__navi_pathname)},a=location.pathname;return e.push("/",void 0,!0),a!=="/"&&e.push(a,void 0,!0),e}j`
  :root {
    --navi-ease: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .navi-root {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    position: relative;
    overflow: hidden;
    background: var(--bg, #fff);
  }
  .navi-page {
    display: block;
    position: absolute;
    background: var(--bg, #fff);
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    overflow: auto;
    top: 0px;
    left: 0px;
    transform: translateY(0%);
    transition: 0.42s transform var(--navi-ease);
  }
  .navi-move-last {
    transform: translateY(-20%);
  }
  .navi-move-next {
    transform: translateY(40%);
  }
`;h.isIos=/(?:iPhone|iPad)/.test(navigator.userAgent);h.isWechat=/MicroMessenger/.test(navigator.userAgent);export{h as Navi};
