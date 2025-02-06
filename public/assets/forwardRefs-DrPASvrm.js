import{d as x,bj as p,aq as W,ac as A,p as P,bk as ae,f,c as B,m as J,bl as G,t as ie,ax as oe,s as w,r as le,w as C,a4 as ue,W as ce,b as de,a7 as q,ah as fe,H as ve,K as ge,a8 as me,ar as he,I as ye,J as be}from"./index-Ch9bXf7m.js";import{a as $,b as Se,c as _e,u as j,g as K,i as we,l as X,e as xe,t as Pe,B as Re,h as Be,w as Te,j as ze,I as Ve,v as Ce,O as Ie,d as Oe,z as pe,J as We}from"./VGrid-CYMVmI-n.js";class T{constructor(i){let{x:r,y:t,width:o,height:a}=i;this.x=r,this.y=t,this.width=o,this.height=a}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function qe(e,i){return{x:{before:Math.max(0,i.left-e.left),after:Math.max(0,e.right-i.right)},y:{before:Math.max(0,i.top-e.top),after:Math.max(0,e.bottom-i.bottom)}}}function Ue(e){return Array.isArray(e)?new T({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Je(e){const i=e.getBoundingClientRect(),r=getComputedStyle(e),t=r.transform;if(t){let o,a,n,s,c;if(t.startsWith("matrix3d("))o=t.slice(9,-1).split(/, /),a=+o[0],n=+o[5],s=+o[12],c=+o[13];else if(t.startsWith("matrix("))o=t.slice(7,-1).split(/, /),a=+o[0],n=+o[3],s=+o[4],c=+o[5];else return new T(i);const l=r.transformOrigin,u=i.x-s-(1-a)*parseFloat(l),v=i.y-c-(1-n)*parseFloat(l.slice(l.indexOf(" ")+1)),h=a?i.width/a:e.offsetWidth+1,g=n?i.height/n:e.offsetHeight+1;return new T({x:u,y:v,width:h,height:g})}else return new T(i)}function Ge(e,i,r){if(typeof e.animate>"u")return{finished:Promise.resolve()};let t;try{t=e.animate(i,r)}catch{return{finished:Promise.resolve()}}return typeof t.finished>"u"&&(t.finished=new Promise(o=>{t.onfinish=()=>{o(t)}})),t}const Ke="cubic-bezier(0.4, 0, 0.2, 1)",Xe="cubic-bezier(0.0, 0, 0.2, 1)",Ye="cubic-bezier(0.4, 0, 1, 1)",Ae=P({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function y(e,i,r){return x()({name:e,props:Ae({mode:r,origin:i}),setup(t,o){let{slots:a}=o;const n={onBeforeEnter(s){t.origin&&(s.style.transformOrigin=t.origin)},onLeave(s){if(t.leaveAbsolute){const{offsetTop:c,offsetLeft:l,offsetWidth:u,offsetHeight:v}=s;s._transitionInitialStyles={position:s.style.position,top:s.style.top,left:s.style.left,width:s.style.width,height:s.style.height},s.style.position="absolute",s.style.top=`${c}px`,s.style.left=`${l}px`,s.style.width=`${u}px`,s.style.height=`${v}px`}t.hideOnLeave&&s.style.setProperty("display","none","important")},onAfterLeave(s){if(t.leaveAbsolute&&(s!=null&&s._transitionInitialStyles)){const{position:c,top:l,left:u,width:v,height:h}=s._transitionInitialStyles;delete s._transitionInitialStyles,s.style.position=c||"",s.style.top=l||"",s.style.left=u||"",s.style.width=v||"",s.style.height=h||""}}};return()=>{const s=t.group?p:W;return A(s,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:n},a.default)}}})}function Y(e,i){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return x()({name:e,props:{mode:{type:String,default:r},disabled:Boolean,group:Boolean},setup(t,o){let{slots:a}=o;const n=t.group?p:W;return()=>A(n,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:i},a.default)}})}function Q(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=ae(`offset-${r}`);return{onBeforeEnter(n){n._parent=n.parentNode,n._initialStyle={transition:n.style.transition,overflow:n.style.overflow,[r]:n.style[r]}},onEnter(n){const s=n._initialStyle;n.style.setProperty("transition","none","important"),n.style.overflow="hidden";const c=`${n[t]}px`;n.style[r]="0",n.offsetHeight,n.style.transition=s.transition,e&&n._parent&&n._parent.classList.add(e),requestAnimationFrame(()=>{n.style[r]=c})},onAfterEnter:a,onEnterCancelled:a,onLeave(n){n._initialStyle={transition:"",overflow:n.style.overflow,[r]:n.style[r]},n.style.overflow="hidden",n.style[r]=`${n[t]}px`,n.offsetHeight,requestAnimationFrame(()=>n.style[r]="0")},onAfterLeave:o,onLeaveCancelled:o};function o(n){e&&n._parent&&n._parent.classList.remove(e),a(n)}function a(n){const s=n._initialStyle[r];n.style.overflow=n._initialStyle.overflow,s!=null&&(n.style[r]=s),delete n._initialStyle}}y("fab-transition","center center","out-in");y("dialog-bottom-transition");y("dialog-top-transition");const Qe=y("fade-transition"),Ze=y("scale-transition");y("scroll-x-transition");y("scroll-x-reverse-transition");y("scroll-y-transition");y("scroll-y-reverse-transition");y("slide-x-transition");y("slide-x-reverse-transition");const ke=y("slide-y-transition");y("slide-y-reverse-transition");const et=Y("expand-transition",Q()),tt=Y("expand-x-transition",Q("",!0));function $e(e){return{aspectStyles:B(()=>{const i=Number(e.aspectRatio);return i?{paddingBottom:String(1/i*100)+"%"}:void 0})}}const Z=P({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...$(),...Se()},"VResponsive"),U=x()({name:"VResponsive",props:Z(),setup(e,i){let{slots:r}=i;const{aspectStyles:t}=$e(e),{dimensionStyles:o}=_e(e);return j(()=>{var a;return f("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[o.value,e.style]},[f("div",{class:"v-responsive__sizer",style:t.value},null),(a=r.additional)==null?void 0:a.call(r),r.default&&f("div",{class:["v-responsive__content",e.contentClass]},[r.default()])])}),{}}}),je=P({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),R=(e,i)=>{let{slots:r}=i;const{transition:t,disabled:o,group:a,...n}=e,{component:s=a?p:W,...c}=typeof t=="object"?t:{};return A(s,J(typeof t=="string"?{name:o?"":t}:c,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:o,group:a}).filter(l=>{let[u,v]=l;return v!==void 0})),n),r)};function Ee(e,i){if(!G)return;const r=i.modifiers||{},t=i.value,{handler:o,options:a}=typeof t=="object"?t:{handler:t,options:{}},n=new IntersectionObserver(function(){var v;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;const l=(v=e._observe)==null?void 0:v[i.instance.$.uid];if(!l)return;const u=s.some(h=>h.isIntersecting);o&&(!r.quiet||l.init)&&(!r.once||u||l.init)&&o(u,s,c),u&&r.once?k(e,i):l.init=!0},a);e._observe=Object(e._observe),e._observe[i.instance.$.uid]={init:!1,observer:n},n.observe(e)}function k(e,i){var t;const r=(t=e._observe)==null?void 0:t[i.instance.$.uid];r&&(r.observer.unobserve(e),delete e._observe[i.instance.$.uid])}const Le={mounted:Ee,unmounted:k},De=P({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Z(),...$(),...K(),...je()},"VImg"),Fe=x()({name:"VImg",directives:{intersect:Le},props:De(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,i){let{emit:r,slots:t}=i;const{backgroundColorClasses:o,backgroundColorStyles:a}=we(ie(e,"color")),{roundedClasses:n}=X(e),s=oe("VImg"),c=w(""),l=le(),u=w(e.eager?"loading":"idle"),v=w(),h=w(),g=B(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),S=B(()=>g.value.aspect||v.value/h.value||0);C(()=>e.src,()=>{z(u.value!=="idle")}),C(S,(d,m)=>{!d&&m&&l.value&&_(l.value)}),ue(()=>z());function z(d){if(!(e.eager&&d)&&!(G&&!d&&!e.eager)){if(u.value="loading",g.value.lazySrc){const m=new Image;m.src=g.value.lazySrc,_(m,null)}g.value.src&&ce(()=>{var m;r("loadstart",((m=l.value)==null?void 0:m.currentSrc)||g.value.src),setTimeout(()=>{var b;if(!s.isUnmounted)if((b=l.value)!=null&&b.complete){if(l.value.naturalWidth||L(),u.value==="error")return;S.value||_(l.value,null),u.value==="loading"&&E()}else S.value||_(l.value),D()})})}}function E(){var d;s.isUnmounted||(D(),_(l.value),u.value="loaded",r("load",((d=l.value)==null?void 0:d.currentSrc)||g.value.src))}function L(){var d;s.isUnmounted||(u.value="error",r("error",((d=l.value)==null?void 0:d.currentSrc)||g.value.src))}function D(){const d=l.value;d&&(c.value=d.currentSrc||d.src)}let V=-1;de(()=>{clearTimeout(V)});function _(d){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const b=()=>{if(clearTimeout(V),s.isUnmounted)return;const{naturalHeight:M,naturalWidth:N}=d;M||N?(v.value=N,h.value=M):!d.complete&&u.value==="loading"&&m!=null?V=window.setTimeout(b,m):(d.currentSrc.endsWith(".svg")||d.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,h.value=1)};b()}const F=B(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),ee=()=>{var b;if(!g.value.src||u.value==="idle")return null;const d=f("img",{class:["v-img__img",F.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:g.value.src,srcset:g.value.srcset,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:E,onError:L},null),m=(b=t.sources)==null?void 0:b.call(t);return f(R,{transition:e.transition,appear:!0},{default:()=>[q(m?f("picture",{class:"v-img__picture"},[m,d]):d,[[me,u.value==="loaded"]])]})},te=()=>f(R,{transition:e.transition},{default:()=>[g.value.lazySrc&&u.value!=="loaded"&&f("img",{class:["v-img__img","v-img__img--preload",F.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:g.value.lazySrc,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),ne=()=>t.placeholder?f(R,{transition:e.transition,appear:!0},{default:()=>[(u.value==="loading"||u.value==="error"&&!t.error)&&f("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,se=()=>t.error?f(R,{transition:e.transition,appear:!0},{default:()=>[u.value==="error"&&f("div",{class:"v-img__error"},[t.error()])]}):null,re=()=>e.gradient?f("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,H=w(!1);{const d=C(S,m=>{m&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{H.value=!0})}),d())})}return j(()=>{const d=U.filterProps(e);return q(f(U,J({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!H.value},o.value,n.value,e.class],style:[{width:ge(e.width==="auto"?v.value:e.width)},a.value,e.style]},d,{aspectRatio:S.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>f(ve,null,[f(ee,null,null),f(te,null,null),f(re,null,null),f(ne,null,null),f(se,null,null)]),default:t.default}),[[fe("intersect"),{handler:z,options:e.options},null,{once:!0}]])}),{currentSrc:c,image:l,state:u,naturalWidth:v,naturalHeight:h}}}),He=P({start:Boolean,end:Boolean,icon:he,image:String,text:String,...xe(),...$(),...Pe(),...K(),...Re(),...Be(),...ye(),...Te({variant:"flat"})},"VAvatar"),nt=x()({name:"VAvatar",props:He(),setup(e,i){let{slots:r}=i;const{themeClasses:t}=be(e),{borderClasses:o}=ze(e),{colorClasses:a,colorStyles:n,variantClasses:s}=Ve(e),{densityClasses:c}=Ce(e),{roundedClasses:l}=X(e),{sizeClasses:u,sizeStyles:v}=Ie(e);return j(()=>f(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,o.value,a.value,c.value,l.value,u.value,s.value,e.class],style:[n.value,v.value,e.style]},{default:()=>[r.default?f(pe,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[r.default()]}):e.image?f(Fe,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?f(Oe,{key:"icon",icon:e.icon},null):e.text,We(!1,"v-avatar")]})),{}}}),I=Symbol("Forwarded refs");function O(e,i){let r=e;for(;r;){const t=Reflect.getOwnPropertyDescriptor(r,i);if(t)return t;r=Object.getPrototypeOf(r)}}function st(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),t=1;t<i;t++)r[t-1]=arguments[t];return e[I]=r,new Proxy(e,{get(o,a){if(Reflect.has(o,a))return Reflect.get(o,a);if(!(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))){for(const n of r)if(n.value&&Reflect.has(n.value,a)){const s=Reflect.get(n.value,a);return typeof s=="function"?s.bind(n.value):s}}},has(o,a){if(Reflect.has(o,a))return!0;if(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))return!1;for(const n of r)if(n.value&&Reflect.has(n.value,a))return!0;return!1},set(o,a,n){if(Reflect.has(o,a))return Reflect.set(o,a,n);if(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))return!1;for(const s of r)if(s.value&&Reflect.has(s.value,a))return Reflect.set(s.value,a,n);return!1},getOwnPropertyDescriptor(o,a){var s;const n=Reflect.getOwnPropertyDescriptor(o,a);if(n)return n;if(!(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))){for(const c of r){if(!c.value)continue;const l=O(c.value,a)??("_"in c.value?O((s=c.value._)==null?void 0:s.setupState,a):void 0);if(l)return l}for(const c of r){const l=c.value&&c.value[I];if(!l)continue;const u=l.slice();for(;u.length;){const v=u.shift(),h=O(v.value,a);if(h)return h;const g=v.value&&v.value[I];g&&u.push(...g)}}}}})}export{T as B,Le as I,R as M,Fe as V,nt as a,Ze as b,Ge as c,et as d,Qe as e,st as f,tt as g,ke as h,Xe as i,Ye as j,Ue as k,qe as l,je as m,Je as n,Ke as s};
