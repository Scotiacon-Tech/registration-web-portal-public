import{m as se,q as le,u as P,V as _,a as j,i as z,r as ie,s as ue,t as ce,v as re,w as de,j as ve}from"./VContainer-hCEkdY5X.js";import{f as fe,c as me,s as he,M as ge}from"./forwardRefs-BAZRpoJM.js";import{p as W,ae as O,d as $,r as X,c as g,f,H as D,m as I,af as F,I as be,J as ye,K as we,ag as xe,s as Y,w as Ve,ac as Te,a8 as U,ah as Se,ai as q,u as J,a9 as Ce,L as H,X as ke,t as C,ad as Be,aj as Ie}from"./index-Dj2RVz4S.js";import{m as Pe,u as We}from"./SaveButton.vue_vue_type_script_setup_true_lang-CkqdamWB.js";import{u as $e}from"./VList-YwdlYVPo.js";import{m as Ee,b as L}from"./VChip-DhmtDhNV.js";import{b as _e}from"./scopeId-DAGDNOpf.js";const R=Symbol.for("vuetify:v-tabs"),Xe=W({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...O(se({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Ye=$()({name:"VTab",props:Xe(),setup(e,o){let{slots:n,attrs:t}=o;const{textColorClasses:s,textColorStyles:l}=le(e,"sliderColor"),a=X(),v=X(),c=g(()=>e.direction==="horizontal"),h=g(()=>{var b,i;return((i=(b=a.value)==null?void 0:b.group)==null?void 0:i.isSelected.value)??!1});function V(b){var r,u;let{value:i}=b;if(i){const y=(u=(r=a.value)==null?void 0:r.$el.parentElement)==null?void 0:u.querySelector(".v-tab--selected .v-tab__slider"),k=v.value;if(!y||!k)return;const E=getComputedStyle(y).color,T=y.getBoundingClientRect(),S=k.getBoundingClientRect(),d=c.value?"x":"y",m=c.value?"X":"Y",w=c.value?"right":"bottom",x=c.value?"width":"height",ee=T[d],te=S[d],B=ee>te?T[w]-S[w]:T[d]-S[d],ne=Math.sign(B)>0?c.value?"right":"bottom":Math.sign(B)<0?c.value?"left":"top":"center",oe=(Math.abs(B)+(Math.sign(B)<0?T[x]:S[x]))/Math.max(T[x],S[x])||0,ae=T[x]/S[x]||0,M=1.5;me(k,{backgroundColor:[E,"currentcolor"],transform:[`translate${m}(${B}px) scale${m}(${ae})`,`translate${m}(${B/M}px) scale${m}(${(oe-1)/M+1})`,"none"],transformOrigin:Array(3).fill(ne)},{duration:225,easing:he})}}return P(()=>{const b=_.filterProps(e);return f(_,I({symbol:R,ref:a,class:["v-tab",e.class],style:e.style,tabindex:h.value?0:-1,role:"tab","aria-selected":String(h.value),active:!1},b,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":V}),{...n,default:()=>{var i;return f(D,null,[((i=n.default)==null?void 0:i.call(n))??e.text,!e.hideSlider&&f("div",{ref:v,class:["v-tab__slider",s.value],style:l.value},null)])}})}),fe({},a)}}),He=e=>{const{touchstartX:o,touchendX:n,touchstartY:t,touchendY:s}=e,l=.5,a=16;e.offsetX=n-o,e.offsetY=s-t,Math.abs(e.offsetY)<l*Math.abs(e.offsetX)&&(e.left&&n<o-a&&e.left(e),e.right&&n>o+a&&e.right(e)),Math.abs(e.offsetX)<l*Math.abs(e.offsetY)&&(e.up&&s<t-a&&e.up(e),e.down&&s>t+a&&e.down(e))};function Re(e,o){var t;const n=e.changedTouches[0];o.touchstartX=n.clientX,o.touchstartY=n.clientY,(t=o.start)==null||t.call(o,{originalEvent:e,...o})}function Me(e,o){var t;const n=e.changedTouches[0];o.touchendX=n.clientX,o.touchendY=n.clientY,(t=o.end)==null||t.call(o,{originalEvent:e,...o}),He(o)}function Le(e,o){var t;const n=e.changedTouches[0];o.touchmoveX=n.clientX,o.touchmoveY=n.clientY,(t=o.move)==null||t.call(o,{originalEvent:e,...o})}function Ae(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:n=>Re(n,o),touchend:n=>Me(n,o),touchmove:n=>Le(n,o)}}function Ge(e,o){var v;const n=o.value,t=n!=null&&n.parent?e.parentElement:e,s=(n==null?void 0:n.options)??{passive:!0},l=(v=o.instance)==null?void 0:v.$.uid;if(!t||!l)return;const a=Ae(o.value);t._touchHandlers=t._touchHandlers??Object.create(null),t._touchHandlers[l]=a,F(a).forEach(c=>{t.addEventListener(c,a[c],s)})}function je(e,o){var l,a;const n=(l=o.value)!=null&&l.parent?e.parentElement:e,t=(a=o.instance)==null?void 0:a.$.uid;if(!(n!=null&&n._touchHandlers)||!t)return;const s=n._touchHandlers[t];F(s).forEach(v=>{n.removeEventListener(v,s[v])}),delete n._touchHandlers[t]}const K={mounted:Ge,unmounted:je},N=Symbol.for("vuetify:v-window"),Q=Symbol.for("vuetify:v-window-group"),Z=W({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...j(),...z(),...be()},"VWindow"),A=$()({name:"VWindow",directives:{Touch:K},props:Z(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const{themeClasses:t}=ye(e),{isRtl:s}=we(),{t:l}=xe(),a=ie(e,Q),v=X(),c=g(()=>s.value?!e.reverse:e.reverse),h=Y(!1),V=g(()=>{const d=e.direction==="vertical"?"y":"x",w=(c.value?!h.value:h.value)?"-reverse":"";return`v-window-${d}${w}-transition`}),b=Y(0),i=X(void 0),r=g(()=>a.items.value.findIndex(d=>a.selected.value.includes(d.id)));Ve(r,(d,m)=>{const w=a.items.value.length,x=w-1;w<=2?h.value=d<m:d===x&&m===0?h.value=!0:d===0&&m===x?h.value=!1:h.value=d<m}),Te(N,{transition:V,isReversed:h,transitionCount:b,transitionHeight:i,rootRef:v});const u=g(()=>e.continuous||r.value!==0),y=g(()=>e.continuous||r.value!==a.items.value.length-1);function k(){u.value&&a.prev()}function E(){y.value&&a.next()}const T=g(()=>{const d=[],m={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${c.value?"right":"left"}`,onClick:a.prev,"aria-label":l("$vuetify.carousel.prev")};d.push(u.value?n.prev?n.prev({props:m}):f(_,m,null):f("div",null,null));const w={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${c.value?"left":"right"}`,onClick:a.next,"aria-label":l("$vuetify.carousel.next")};return d.push(y.value?n.next?n.next({props:w}):f(_,w,null):f("div",null,null)),d}),S=g(()=>e.touch===!1?e.touch:{...{left:()=>{c.value?k():E()},right:()=>{c.value?E():k()},start:m=>{let{originalEvent:w}=m;w.stopPropagation()}},...e.touch===!0?{}:e.touch});return P(()=>U(f(e.tag,{ref:v,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value,e.class],style:e.style},{default:()=>{var d,m;return[f("div",{class:"v-window__container",style:{height:i.value}},[(d=n.default)==null?void 0:d.call(n,{group:a}),e.showArrows!==!1&&f("div",{class:"v-window__controls"},[T.value])]),(m=n.additional)==null?void 0:m.call(n,{group:a})]}}),[[Se("touch"),S.value]])),{group:a}}}),ze=W({...O(Z(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Oe=$()({name:"VTabsWindow",props:ze(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const t=q(R,null),s=J(e,"modelValue"),l=g({get(){var a;return s.value!=null||!t?s.value:(a=t.items.value.find(v=>t.selected.value.includes(v.id)))==null?void 0:a.value},set(a){s.value=a}});return P(()=>{const a=A.filterProps(e);return f(A,I({_as:"VTabsWindow"},a,{modelValue:l.value,"onUpdate:modelValue":v=>l.value=v,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),n)}),{}}}),p=W({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...j(),...ue(),...Pe()},"VWindowItem"),G=$()({name:"VWindowItem",directives:{Touch:K},props:p(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const t=q(N),s=ce(e,Q),{isBooted:l}=$e();if(!t||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=Y(!1),v=g(()=>l.value&&(t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function c(){!a.value||!t||(a.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function h(){var u;a.value||!t||(a.value=!0,t.transitionCount.value===0&&(t.transitionHeight.value=H((u=t.rootRef.value)==null?void 0:u.clientHeight)),t.transitionCount.value+=1)}function V(){c()}function b(u){a.value&&ke(()=>{!v.value||!a.value||!t||(t.transitionHeight.value=H(u.clientHeight))})}const i=g(()=>{const u=t.isReversed.value?e.reverseTransition:e.transition;return v.value?{name:typeof u!="string"?t.transition.value:u,onBeforeEnter:h,onAfterEnter:c,onEnterCancelled:V,onBeforeLeave:h,onAfterLeave:c,onLeaveCancelled:V,onEnter:b}:!1}),{hasContent:r}=We(e,s.isSelected);return P(()=>f(ge,{transition:i.value,disabled:!l.value},{default:()=>{var u;return[U(f("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[r.value&&((u=n.default)==null?void 0:u.call(n))]),[[Ce,s.isSelected.value]])]}})),{groupItem:s}}}),De=W({...p()},"VTabsWindowItem"),Fe=$()({name:"VTabsWindowItem",props:De(),setup(e,o){let{slots:n}=o;return P(()=>{const t=G.filterProps(e);return f(G,I({_as:"VTabsWindowItem"},t,{class:["v-tabs-window-item",e.class],style:e.style}),n)}),{}}});function Ue(e){return e?e.map(o=>Ie(o)?o:{text:o,value:o}):[]}const qe=W({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ee({mandatory:"force",selectedClass:"v-tab-item--selected"}),...re(),...z()},"VTabs"),nt=$()({name:"VTabs",props:qe(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:n,slots:t}=o;const s=J(e,"modelValue"),l=g(()=>Ue(e.items)),{densityClasses:a}=de(e),{backgroundColorClasses:v,backgroundColorStyles:c}=ve(C(e,"bgColor")),{scopeId:h}=_e();return Be({VTab:{color:C(e,"color"),direction:C(e,"direction"),stacked:C(e,"stacked"),fixed:C(e,"fixedTabs"),sliderColor:C(e,"sliderColor"),hideSlider:C(e,"hideSlider")}}),P(()=>{const V=L.filterProps(e),b=!!(t.window||e.items.length>0);return f(D,null,[f(L,I(V,{modelValue:s.value,"onUpdate:modelValue":i=>s.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},a.value,v.value,e.class],style:[{"--v-tabs-height":H(e.height)},c.value,e.style],role:"tablist",symbol:R},h,n),{default:()=>{var i;return[((i=t.default)==null?void 0:i.call(t))??l.value.map(r=>{var u;return((u=t.tab)==null?void 0:u.call(t,{item:r}))??f(Ye,I(r,{key:r.text,value:r.value}),{default:t[`tab.${r.value}`]?()=>{var y;return(y=t[`tab.${r.value}`])==null?void 0:y.call(t,{item:r})}:void 0})})]}}),b&&f(Oe,I({modelValue:s.value,"onUpdate:modelValue":i=>s.value=i,key:"tabs-window"},h),{default:()=>{var i;return[l.value.map(r=>{var u;return((u=t.item)==null?void 0:u.call(t,{item:r}))??f(Fe,{value:r.value},{default:()=>{var y;return(y=t[`item.${r.value}`])==null?void 0:y.call(t,{item:r})}})}),(i=t.window)==null?void 0:i.call(t)]}})])}),{}}});export{Ye as V,nt as a,Fe as b,Oe as c,G as d,A as e};
