import{c as y,d as w,b as v}from"./SaveButton.vue_vue_type_script_setup_true_lang-CkqdamWB.js";import{f as A}from"./forwardRefs-BAZRpoJM.js";import{p as D,d as L,u as B,r as S,b as p,aM as F,w as g,aN as I,X as R,m as d,f as E}from"./index-Dj2RVz4S.js";import{b as T}from"./scopeId-DAGDNOpf.js";import{u as N,A as O}from"./VContainer-hCEkdY5X.js";const W=D({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...y({origin:"center center",scrollStrategy:"block",transition:{component:w},zIndex:2400})},"VDialog"),z=L()({name:"VDialog",props:W(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,h){let{emit:m,slots:s}=h;const u=B(e,"modelValue"),{scopeId:V}=T(),t=S();function f(a){var r,c;const o=a.relatedTarget,l=a.target;if(o!==l&&((r=t.value)!=null&&r.contentEl)&&((c=t.value)!=null&&c.globalTop)&&![document,t.value.contentEl].includes(l)&&!t.value.contentEl.contains(l)){const n=I(t.value.contentEl);if(!n.length)return;const i=n[0],x=n[n.length-1];o===i?x.focus():i.focus()}}p(()=>{document.removeEventListener("focusin",f)}),F&&g(()=>u.value&&e.retainFocus,a=>{a?document.addEventListener("focusin",f):document.removeEventListener("focusin",f)},{immediate:!0});function P(){var a;m("afterEnter"),(a=t.value)!=null&&a.contentEl&&!t.value.contentEl.contains(document.activeElement)&&t.value.contentEl.focus({preventScroll:!0})}function b(){m("afterLeave")}return g(u,async a=>{var o;a||(await R(),(o=t.value.activatorEl)==null||o.focus({preventScroll:!0}))}),N(()=>{const a=v.filterProps(e),o=d({"aria-haspopup":"dialog"},e.activatorProps),l=d({tabindex:-1},e.contentProps);return E(v,d({ref:t,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},a,{modelValue:u.value,"onUpdate:modelValue":r=>u.value=r,"aria-modal":"true",activatorProps:o,contentProps:l,height:e.fullscreen?void 0:e.height,width:e.fullscreen?void 0:e.width,maxHeight:e.fullscreen?void 0:e.maxHeight,maxWidth:e.fullscreen?void 0:e.maxWidth,role:"dialog",onAfterEnter:P,onAfterLeave:b},V),{activator:s.activator,default:function(){for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return E(O,{root:"VDialog"},{default:()=>{var i;return[(i=s.default)==null?void 0:i.call(s,...c)]}})}})}),A({},t)}});export{z as V};
