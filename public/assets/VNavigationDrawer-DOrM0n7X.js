import{a as Z,b as ie,i as j,c as ue,u as G,f as se,g as re,h as ce,k as ve,j as $,l as de,n as me,y as fe,z as he,A as ge}from"./VContainer-CksERWUh.js";import{b as ye,m as we,u as be}from"./layout-Df_fcjdl.js";import{u as J}from"./VList-D4E1xP3C.js";import{p as K,d as Q,f as T,s as B,c as w,J as Se,o as ee,w as R,b as te,al as ke,e as L,h as Ee,am as Me,an as Te,G as pe,I as Pe,H as Ve,t as A,ai as xe,u as Be,r as Ce,a7 as De,m as F,ao as He,F as Re,U as Ie}from"./index-CtJiBEcj.js";import{m as Ye,u as Le,a as Ne}from"./scopeId-MRHufIiF.js";import{V as _e}from"./forwardRefs-BVcY16Oj.js";const We=K({scrollable:Boolean,...Z(),...ie(),...j({tag:"main"})},"VMain"),et=Q()({name:"VMain",props:We(),setup(e,r){let{slots:n}=r;const{dimensionStyles:E}=ue(e),{mainStyles:t}=ye(),{ssrBootStyles:u}=J();return G(()=>T(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[t.value,u.value,E.value,e.style]},{default:()=>{var a,c;return[e.scrollable?T("div",{class:"v-main__scroller"},[(a=n.default)==null?void 0:a.call(n)]):(c=n.default)==null?void 0:c.call(n)]}})),{}}});function Oe(e){let{rootEl:r,isSticky:n,layoutItemStyles:E}=e;const t=B(!1),u=B(0),a=w(()=>{const b=typeof t.value=="boolean"?"top":t.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[b]:Se(u.value)}:{top:E.value.top}]});ee(()=>{R(n,b=>{b?window.addEventListener("scroll",M,{passive:!0}):window.removeEventListener("scroll",M)},{immediate:!0})}),te(()=>{window.removeEventListener("scroll",M)});let c=0;function M(){const b=c>window.scrollY?"up":"down",d=r.value.getBoundingClientRect(),m=parseFloat(E.value.top??0),v=window.scrollY-Math.max(0,u.value-m),h=d.height+Math.max(u.value,m)-window.scrollY-window.innerHeight,y=parseFloat(getComputedStyle(r.value).getPropertyValue("--v-body-scroll-y"))||0;d.height<window.innerHeight-m?(t.value="top",u.value=m):b==="up"&&t.value==="bottom"||b==="down"&&t.value==="top"?(u.value=window.scrollY+d.top-y,t.value=!0):b==="down"&&h<=0?(u.value=0,t.value="bottom"):b==="up"&&v<=0&&(y?t.value!=="top"&&(u.value=-v+y+m,t.value="top"):(u.value=d.top+v,t.value="top")),c=window.scrollY}return{isStuck:t,stickyStyles:a}}const Xe=100,ze=20;function q(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function U(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let r=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const E=q(r),t=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);r+=(t-E)*Math.abs(t),n===e.length-1&&(r*=.5)}return q(r)*1e3}function $e(){const e={};function r(t){Array.from(t.changedTouches).forEach(u=>{(e[u.identifier]??(e[u.identifier]=new ke(ze))).push([t.timeStamp,u])})}function n(t){Array.from(t.changedTouches).forEach(u=>{delete e[u.identifier]})}function E(t){var b;const u=(b=e[t])==null?void 0:b.values().reverse();if(!u)throw new Error(`No samples for touch id ${t}`);const a=u[0],c=[],M=[];for(const d of u){if(a[0]-d[0]>Xe)break;c.push({t:d[0],d:d[1].clientX}),M.push({t:d[0],d:d[1].clientY})}return{x:U(c),y:U(M),get direction(){const{x:d,y:m}=this,[v,h]=[Math.abs(d),Math.abs(m)];return v>h&&d>=0?"right":v>h&&d<=0?"left":h>v&&m>=0?"down":h>v&&m<=0?"up":Ae()}}}return{addMovement:r,endTouch:n,getVelocity:E}}function Ae(){throw new Error}function Fe(e){let{el:r,isActive:n,isTemporary:E,width:t,touchless:u,position:a}=e;ee(()=>{window.addEventListener("touchstart",P,{passive:!0}),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",I,{passive:!0})}),te(()=>{window.removeEventListener("touchstart",P),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",I)});const c=w(()=>["left","right"].includes(a.value)),{addMovement:M,endTouch:b,getVelocity:d}=$e();let m=!1;const v=B(!1),h=B(0),y=B(0);let k;function C(o,l){return(a.value==="left"?o:a.value==="right"?document.documentElement.clientWidth-o:a.value==="top"?o:a.value==="bottom"?document.documentElement.clientHeight-o:x())-(l?t.value:0)}function D(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const i=a.value==="left"?(o-y.value)/t.value:a.value==="right"?(document.documentElement.clientWidth-o-y.value)/t.value:a.value==="top"?(o-y.value)/t.value:a.value==="bottom"?(document.documentElement.clientHeight-o-y.value)/t.value:x();return l?Math.max(0,Math.min(1,i)):i}function P(o){if(u.value)return;const l=o.changedTouches[0].clientX,i=o.changedTouches[0].clientY,s=25,g=a.value==="left"?l<s:a.value==="right"?l>document.documentElement.clientWidth-s:a.value==="top"?i<s:a.value==="bottom"?i>document.documentElement.clientHeight-s:x(),f=n.value&&(a.value==="left"?l<t.value:a.value==="right"?l>document.documentElement.clientWidth-t.value:a.value==="top"?i<t.value:a.value==="bottom"?i>document.documentElement.clientHeight-t.value:x());(g||f||n.value&&E.value)&&(k=[l,i],y.value=C(c.value?l:i,n.value),h.value=D(c.value?l:i),m=y.value>-20&&y.value<80,b(o),M(o))}function p(o){const l=o.changedTouches[0].clientX,i=o.changedTouches[0].clientY;if(m){if(!o.cancelable){m=!1;return}const g=Math.abs(l-k[0]),f=Math.abs(i-k[1]);(c.value?g>f&&g>3:f>g&&f>3)?(v.value=!0,m=!1):(c.value?f:g)>3&&(m=!1)}if(!v.value)return;o.preventDefault(),M(o);const s=D(c.value?l:i,!1);h.value=Math.max(0,Math.min(1,s)),s>1?y.value=C(c.value?l:i,!0):s<0&&(y.value=C(c.value?l:i,!1))}function I(o){if(m=!1,!v.value)return;M(o),v.value=!1;const l=d(o.changedTouches[0].identifier),i=Math.abs(l.x),s=Math.abs(l.y);(c.value?i>s&&i>400:s>i&&s>3)?n.value=l.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||x()):n.value=h.value>.5}const H=w(()=>v.value?{transform:a.value==="left"?`translateX(calc(-100% + ${h.value*t.value}px))`:a.value==="right"?`translateX(calc(100% - ${h.value*t.value}px))`:a.value==="top"?`translateY(calc(-100% + ${h.value*t.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${h.value*t.value}px))`:x(),transition:"none"}:void 0);return L(v,()=>{var i,s;const o=((i=r.value)==null?void 0:i.style.transform)??null,l=((s=r.value)==null?void 0:s.style.transition)??null;Ee(()=>{var g,f,V,Y;(f=r.value)==null||f.style.setProperty("transform",((g=H.value)==null?void 0:g.transform)||"none"),(Y=r.value)==null||Y.style.setProperty("transition",((V=H.value)==null?void 0:V.transition)||null)}),Me(()=>{var g,f;(g=r.value)==null||g.style.setProperty("transform",o),(f=r.value)==null||f.style.setProperty("transition",l)})}),{isDragging:v,dragProgress:h,dragStyles:H}}function x(){throw new Error}const qe=["start","end","left","right","top","bottom"],Ue=K({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>qe.includes(e)},sticky:Boolean,...se(),...Z(),...Ye(),...Te({mobile:null}),...re(),...we(),...ce(),...j({tag:"nav"}),...pe()},"VNavigationDrawer"),tt=Q()({name:"VNavigationDrawer",props:Ue(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,r){let{attrs:n,emit:E,slots:t}=r;const{isRtl:u}=Pe(),{themeClasses:a}=Ve(e),{borderClasses:c}=ve(e),{backgroundColorClasses:M,backgroundColorStyles:b}=$(A(e,"color")),{elevationClasses:d}=de(e),{displayClasses:m,mobile:v}=xe(e),{roundedClasses:h}=me(e),y=fe(),k=Be(e,"modelValue",null,S=>!!S),{ssrBootStyles:C}=J(),{scopeId:D}=Le(),P=Ce(),p=B(!1),{runOpenDelay:I,runCloseDelay:H}=Ne(e,S=>{p.value=S}),o=w(()=>e.rail&&e.expandOnHover&&p.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),l=w(()=>he(e.location,u.value)),i=w(()=>e.persistent),s=w(()=>!e.permanent&&(v.value||e.temporary)),g=w(()=>e.sticky&&!s.value&&l.value!=="bottom");L(()=>e.expandOnHover&&e.rail!=null,()=>{R(p,S=>E("update:rail",!S))}),L(()=>!e.disableResizeWatcher,()=>{R(s,S=>!e.permanent&&Ie(()=>k.value=!S))}),L(()=>!e.disableRouteWatcher&&!!y,()=>{R(y.currentRoute,()=>s.value&&(k.value=!1))}),R(()=>e.permanent,S=>{S&&(k.value=!0)}),e.modelValue==null&&!s.value&&(k.value=e.permanent||!v.value);const{isDragging:f,dragProgress:V}=Fe({el:P,isActive:k,isTemporary:s,width:o,touchless:A(e,"touchless"),position:l}),Y=w(()=>{const S=s.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):o.value;return f.value?S*V.value:S}),ae=w(()=>["top","bottom"].includes(e.location)?0:o.value),{layoutItemStyles:N,layoutItemScrimStyles:ne}=be({id:e.name,order:w(()=>parseInt(e.order,10)),position:l,layoutSize:Y,elementSize:ae,active:w(()=>k.value||f.value),disableTransitions:w(()=>f.value),absolute:w(()=>e.absolute||g.value&&typeof _.value!="string")}),{isStuck:_,stickyStyles:oe}=Oe({rootEl:P,isSticky:g,layoutItemStyles:N}),W=$(w(()=>typeof e.scrim=="string"?e.scrim:null)),le=w(()=>({...f.value?{opacity:V.value*.2,transition:"none"}:void 0,...ne.value}));return De({VList:{bgColor:"transparent"}}),G(()=>{const S=t.image||e.image;return T(Re,null,[T(e.tag,F({ref:P,onMouseenter:I,onMouseleave:H,class:["v-navigation-drawer",`v-navigation-drawer--${l.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":p.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":s.value,"v-navigation-drawer--persistent":i.value,"v-navigation-drawer--active":k.value,"v-navigation-drawer--sticky":g.value},a.value,M.value,c.value,m.value,d.value,h.value,e.class],style:[b.value,N.value,C.value,oe.value,e.style,["top","bottom"].includes(l.value)?{height:"auto"}:{}]},D,n),{default:()=>{var O,X,z;return[S&&T("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?T(ge,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},t.image):T(_e,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),t.prepend&&T("div",{class:"v-navigation-drawer__prepend"},[(O=t.prepend)==null?void 0:O.call(t)]),T("div",{class:"v-navigation-drawer__content"},[(X=t.default)==null?void 0:X.call(t)]),t.append&&T("div",{class:"v-navigation-drawer__append"},[(z=t.append)==null?void 0:z.call(t)])]}}),T(He,{name:"fade-transition"},{default:()=>[s.value&&(f.value||k.value)&&!!e.scrim&&T("div",F({class:["v-navigation-drawer__scrim",W.backgroundColorClasses.value],style:[le.value,W.backgroundColorStyles.value],onClick:()=>{i.value||(k.value=!1)}},D),null)]})])}),{isStuck:_}}});export{tt as V,et as a};
