import{m as X,c as Y,u as Z,a as B,f as ee,d as le,e as te}from"./VTextField-O6UbgWjU.js";import{f as ne}from"./forwardRefs-DqZZjb2J.js";import{p as ae,aA as $,d as ue,a9 as ie,u as oe,c as s,a$ as N,r as h,w as se,aK as re,f as u,m as C,F as g,U as ce,aN as de}from"./index-Bl6vN6z6.js";import{a as fe}from"./VChip-BMOW25TY.js";import{u as ve}from"./VContainer-B_erhKyg.js";const me=ae({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},...X({prependIcon:"$file"}),modelValue:{type:[Array,Object],default:e=>e.multiple?[]:null,validator:e=>$(e).every(f=>f!=null&&typeof f=="object")},...Y({clearable:!0})},"VFileInput"),Ie=ue()({name:"VFileInput",inheritAttrs:!1,props:me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:M,emit:k,slots:n}=f;const{t:I}=ie(),a=oe(e,"modelValue",e.modelValue,l=>$(l),l=>!e.multiple&&Array.isArray(l)?l[0]:l),{isFocused:v,focus:x,blur:D}=Z(e),V=s(()=>typeof e.showSize!="boolean"?e.showSize:void 0),b=s(()=>(a.value??[]).reduce((l,t)=>{let{size:r=0}=t;return l+r},0)),F=s(()=>N(b.value,V.value)),p=s(()=>(a.value??[]).map(l=>{const{name:t="",size:r=0}=l;return e.showSize?`${t} (${N(r,V.value)})`:t})),j=s(()=>{var t;const l=((t=a.value)==null?void 0:t.length)??0;return e.showSize?I(e.counterSizeString,l,F.value):I(e.counterString,l)}),S=h(),P=h(),i=h(),U=s(()=>v.value||e.active),A=s(()=>["plain","underlined"].includes(e.variant));function y(){var l;i.value!==document.activeElement&&((l=i.value)==null||l.focus()),v.value||x()}function E(l){var t;(t=i.value)==null||t.click()}function O(l){k("mousedown:control",l)}function K(l){var t;(t=i.value)==null||t.click(),k("click:control",l)}function L(l){l.stopPropagation(),y(),ce(()=>{a.value=[],de(e["onClick:clear"],l)})}return se(a,l=>{(!Array.isArray(l)||!l.length)&&i.value&&(i.value.value="")}),ve(()=>{const l=!!(n.counter||e.counter),t=!!(l||n.details),[r,T]=re(M),{modelValue:pe,..._}=B.filterProps(e),q=ee(e);return u(B,C({ref:S,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-file-input--hide":e.hideInput,"v-input--plain-underlined":A.value},e.class],style:e.style,"onClick:prepend":E},r,_,{centerAffix:!A.value,focused:v.value}),{...n,default:c=>{let{id:m,isDisabled:d,isDirty:w,isReadonly:z,isValid:G}=c;return u(le,C({ref:P,"prepend-icon":e.prependIcon,onMousedown:O,onClick:K,"onClick:clear":L,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},q,{id:m.value,active:U.value||w.value,dirty:w.value||e.dirty,disabled:d.value,focused:v.value,error:G.value===!1}),{...n,default:H=>{var R;let{props:{class:J,...Q}}=H;return u(g,null,[u("input",C({ref:i,type:"file",readonly:z.value,disabled:d.value,multiple:e.multiple,name:e.name,onClick:o=>{o.stopPropagation(),z.value&&o.preventDefault(),y()},onChange:o=>{if(!o.target)return;const W=o.target;a.value=[...W.files??[]]},onFocus:y,onBlur:D},Q,T),null),u("div",{class:J},[!!((R=a.value)!=null&&R.length)&&!e.hideInput&&(n.selection?n.selection({fileNames:p.value,totalBytes:b.value,totalBytesReadable:F.value}):e.chips?p.value.map(o=>u(fe,{key:o,size:"small",text:o},null)):p.value.join(", "))])])}})},details:t?c=>{var m,d;return u(g,null,[(m=n.details)==null?void 0:m.call(n,c),l&&u(g,null,[u("span",null,null),u(te,{active:!!((d=a.value)!=null&&d.length),value:j.value,disabled:e.disabled},n.counter)])])}:void 0})}),ne({},S,P,i)}});export{Ie as V};
