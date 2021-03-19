var M=Object.create,g=Object.defineProperty,P=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty,O=Object.getOwnPropertyNames,w=Object.getOwnPropertyDescriptor;var H=t=>g(t,"__esModule",{value:!0});var k=(t,e)=>()=>(e||(e={exports:{}},t(e.exports,e)),e.exports);var C=(t,e,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of O(e))!L.call(t,r)&&r!=="default"&&g(t,r,{get:()=>e[r],enumerable:!(n=w(e,r))||n.enumerable});return t},A=t=>C(H(g(t!=null?M(P(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var T=k((v,x)=>{(function(t,e){typeof v=="object"&&typeof x!="undefined"?e(v):typeof define=="function"&&define.amd?define(["exports"],e):e((t=t||self).queryString={})})(v,function(t){"use strict";function e(i){try{return decodeURIComponent(i.replace(/\+/g," "))}catch(a){return null}}function n(i){try{return encodeURIComponent(i)}catch(a){return null}}function r(i,a){if(!i)return null;for(var o,l=/([^=?&]+)=?([^&]*)/g,s={};o=l.exec(i);){var u=e(o[1]),d=e(o[2]);if(!(u===null||d===null||u in s))if(a||typeof d!="string")s[u]=d;else{var b=Number(d),E=isNaN(b)?d:b;s[u]=d==E.toString()?E:d}}return s}function c(i,a){a===void 0&&(a="");var o,l,s=[];for(l in typeof a!="string"&&(a="?"),i)if(Object.prototype.hasOwnProperty.call(i,l)){if((o=i[l])||o!=null&&!isNaN(o)||(o=""),l=encodeURIComponent(l),o=encodeURIComponent(o),l===null||o===null)continue;s.push(l+"="+o)}return s.length?a+s.join("&"):""}var f={parse:r,stringify:c,decode:e,encode:n};t.decode=e,t.default=f,t.encode=n,t.parse=r,t.stringify=c,Object.defineProperty(t,"__esModule",{value:!0})})});var y=A(T());var _=Object.create,h=Object.defineProperty,I=Object.getPrototypeOf,W=Object.prototype.hasOwnProperty,D=Object.getOwnPropertyNames,F=Object.getOwnPropertyDescriptor,R=t=>h(t,"__esModule",{value:!0}),S=(t,e)=>()=>(e||(e={exports:{}},t(e.exports,e)),e.exports),U=(t,e,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of D(e))!W.call(t,r)&&r!=="default"&&h(t,r,{get:()=>e[r],enumerable:!(n=F(e,r))||n.enumerable});return t},q=t=>t&&t.__esModule?t:U(R(h(t!=null?_(I(t)):{},"default",{value:t,enumerable:!0})),t),Y=S((t,e)=>{(function(n,r){typeof t=="object"&&typeof e!="undefined"?e.exports=r():typeof define=="function"&&define.amd?define(r):(n=n||self).templateFn=r()})(t,function(){"use strict";return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(1<n.length){var c=n[0],f=n.slice(1),i="";return c.forEach(function(a,o){i+=a,f[o]&&(i+=f[o])}),i}return typeof n[0]=="string"?n[0]:n[0]?n[0].join(""):""}})}),X=q(Y()),j={};function z(...t){let e=X.default(...t);if(j[e])return;j[e]=!0;let n=document.createElement("style");n.innerHTML=e,document.head.append(n)}var N=z;var p="navi-page";function B(t,e,n){t.className=p+" navi-move-last",e.className=p+" navi-move-next",n(),setTimeout(()=>{e.className=p},20)}function G(t,e){t.className=p,e.className=p+" navi-move-next",e.addEventListener("transitionend",()=>{e.remove()})}function m(t){let e=document.createElement("div");e.setAttribute("ux-navi-root","1"),e.className="navi-root",e.push=async(c,f,i)=>{let a=t[c];if(!a)return;let o=a();if(o.then){let u=await Promise.resolve(o);if(!u.default)return;o=u.default()}m.isWechat||history.pushState(f,"",f?c+"?"+y.default.stringify(f):c);let l=e.lastElementChild,s=document.createElement("div");s.setAttribute("ux-navi","1"),s.append(o),l?B(l,s,()=>{e.append(s)}):(s.className=p,e.append(s))},e.replace=async(c,f)=>{let i=t[c];if(!i)return;let a=i();if(a.then){let s=await Promise.resolve(a);if(!s.default)return;a=s.default()}m.isWechat||history.replaceState(f,"",f?c+"?"+y.default.stringify(f):c);let o=e.lastElementChild,l=document.createElement("div");l.setAttribute("ux-navi","1"),l.append(a),l.className=p,o.replaceWith(l)},e.pop=async(c=1)=>{e.children.length>1&&(m.isWechat?n():history.back())};let n=()=>{if(!document.contains(e)){window.removeEventListener("popstate",n);return}if(e.children.length<=1)return;let c=e.lastChild,f=e.children.item(e.children.length-2);G(f,c)};window.addEventListener("popstate",n);let r=location.pathname;return e.push("/",void 0,!0),r!=="/"&&e.push(r,void 0,!0),e}N`
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
    transition: 0.35s transform var(--navi-ease);
  }
  .navi-move-last {
    /* transform: translateY(-35%); */
    transform: translateX(-50%);
  }
  .navi-move-next {
    /* transform: translateY(35%); */
    transform: translateX(100%);
  }
`;m.isIos=/(?:iPhone|iPad)/.test(navigator.userAgent);m.isWechat=/MicroMessenger/.test(navigator.userAgent);export{m as Navi};
