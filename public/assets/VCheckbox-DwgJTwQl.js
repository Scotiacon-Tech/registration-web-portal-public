import{d as A,V as t}from"./VCheckboxBtn-mbrJJIgs.js";import{m as F,u as I,a as l}from"./VTextField-C7PuZ1NZ.js";import{p as B,aa as U,d as M,u as N,aM as R,c as D,aN as $,f as u,m as r}from"./index-CTXNHH2m.js";import{u as j}from"./VContainer-lpVjqcgm.js";const q=B({...F(),...U(A(),["inline"])},"VCheckbox"),H=M()({name:"VCheckbox",inheritAttrs:!1,props:q(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,d){let{attrs:c,slots:a}=d;const s=N(e,"modelValue"),{isFocused:n,focus:i,blur:m}=I(e),V=R(),p=D(()=>e.id||`checkbox-${V}`);return j(()=>{const[f,b]=$(c),v=l.filterProps(e),k=t.filterProps(e);return u(l,r({class:["v-checkbox",e.class]},f,v,{modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,id:p.value,focused:n.value,style:e.style}),{...a,default:o=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C,isValid:y}=o;return u(t,r(k,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},b,{error:y.value===!1,modelValue:s.value,"onUpdate:modelValue":g=>s.value=g,onFocus:i,onBlur:m}),a)}})}),{}}});export{H as V};
