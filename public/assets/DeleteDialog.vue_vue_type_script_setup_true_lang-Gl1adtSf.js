import{_ as T}from"./SaveButton.vue_vue_type_script_setup_true_lang-c2VzGttt.js";import{a as k,b as c,c as g,d as D,e as M}from"./VCard-BynEEyOy.js";import{V as m,a as f}from"./VRow-CD5Eu1Hz.js";import{V as _}from"./VTextField-DvEV70aC.js";import{V as w}from"./VBtn-BpS949DL.js";import{V as x}from"./VDialog-CL7WhxWz.js";import{i as B,L as V,M as N,r as A,n as o,q as s,v as t,f as a,x as u,y as p,A as n,G as L}from"./index-_3doXhpQ.js";const E=["innerHTML"],G=B({__name:"DeleteDialog",props:V({confirmationText:{default:""},message:{default:"Are you sure you wish to delete this item?"},subtitle:{default:""},title:{default:"Delete Item"}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:V(["delete"],["update:modelValue"]),setup(C,{emit:v}){const y=v,d=N(C,"modelValue"),i=A(""),b=({callback:e})=>{y("delete",e)};return(e,l)=>(o(),s(x,{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=r=>d.value=r),"max-width":"500px"},{default:t(()=>[a(M,null,{default:t(()=>[e.title?(o(),s(k,{key:0},{default:t(()=>[u(p(e.title),1)]),_:1})):n("",!0),e.subtitle?(o(),s(c,{key:1},{default:t(()=>[u(p(e.subtitle),1)]),_:1})):n("",!0),a(g,null,{default:t(()=>[e.message?(o(),s(m,{key:0},{default:t(()=>[a(f,null,{default:t(()=>[L("div",{innerHTML:e.message},null,8,E)]),_:1})]),_:1})):n("",!0),e.confirmationText?(o(),s(m,{key:1},{default:t(()=>[a(f,null,{default:t(()=>[a(_,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=r=>i.value=r),variant:"outlined",placeholder:"Enter text here",label:"Confirmation"},null,8,["modelValue"])]),_:1})]),_:1})):n("",!0)]),_:1}),a(D,{class:"justify-space-between"},{default:t(()=>[a(w,{color:"primary",onClick:l[1]||(l[1]=r=>d.value=!1)},{default:t(()=>l[3]||(l[3]=[u("Cancel")])),_:1}),a(T,{color:"red-darken-3",label:"Delete",enabled:i.value==e.confirmationText||!e.confirmationText,onClick:b},null,8,["enabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});export{G as _};
