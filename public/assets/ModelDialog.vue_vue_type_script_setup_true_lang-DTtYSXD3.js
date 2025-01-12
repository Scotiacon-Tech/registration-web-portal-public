import{_ as S}from"./SaveButton.vue_vue_type_script_setup_true_lang-DtOCMXnq.js";import{b as r}from"./forwardRefs-C3va6BVS.js";import{e as C,V as k}from"./VContainer-EOJ7yJE4.js";import{V as R,a as g}from"./VToolbar-PGQlKJFw.js";import{c as L,d as T,e as F}from"./VCard-DFrxrgeK.js";import{i as q,M as V,N as $,q as i,v as l,n as s,f as o,O as A,X as n,x as f,y as h,D as M,A as u,G as E,a0 as N,al as z}from"./index-DyuTd17Q.js";import{V as U}from"./scopeId-c_87M7ul.js";import{V as G}from"./VDialog-DGvbdvI_.js";const O={key:0,style:{"font-size":"0.8rem","line-height":"1rem",opacity:"0.8"}},D=q({__name:"EmbedModelDialog",props:V({color:{default:"primary"},emitDeleteEvent:{type:Boolean,default:!1},emitResetEvent:{type:Boolean,default:!1},emitSaveEvent:{type:Boolean,default:!1},title:{default:""},subTitle:{default:""},cardClass:{default:""},cardStyle:{default:""},showCloseAction:{type:Boolean,default:!1},showResetAction:{type:Boolean,default:!1},showDeleteAction:{type:Boolean,default:!1},showSaveAction:{type:Boolean,default:!1},saveButtonLabel:{default:"Save"},closeActionLabel:{default:"Close"},embed:{type:Boolean,default:!1}},{modelValue:{type:Boolean,required:!1},modelModifiers:{}}),emits:V(["close","delete","reset","save"],["update:modelValue"]),setup(t,{emit:B}){const d=B,c=$(t,"modelValue"),m=()=>{d("close"),t.embed||(c.value=!1)},v=({callback:e})=>{d("delete",e)},b=()=>{d("reset")},y=({callback:e})=>{d("save",e)};return(e,a)=>(s(),i(C,{fluid:""},{default:l(()=>[o(F,null,{default:l(()=>[o(R,{color:e.color},A({default:l(()=>[o(g,null,{default:l(()=>[f(h(e.title)+" ",1),e.subTitle?(s(),M("p",O,h(e.subTitle),1)):u("",!0)]),_:1}),n(e.$slots,"toolbarButtons"),e.emitResetEvent?(s(),i(r,{key:0},{default:l(()=>[o(k,{"prepend-icon":"mdi:mdi-restore",onClick:b},{default:l(()=>a[0]||(a[0]=[E("template",{class:"d-none d-sm-inline"},[f("Reset")],-1)])),_:1})]),_:1})):u("",!0),e.emitDeleteEvent?(s(),i(r,{key:1},{default:l(()=>[o(S,{"prepend-icon":"mdi:mdi-delete",color:"white",onClick:v},{default:l(()=>a[1]||(a[1]=[E("template",{class:"d-none d-sm-inline"},[f("Delete")],-1)])),_:1})]),_:1})):u("",!0),e.emitSaveEvent?(s(),i(r,{key:2},{default:l(()=>[o(S,{"prepend-icon":"mdi:mdi-content-save-outline",color:"white",onClick:y},{default:l(()=>[f(h(e.saveButtonLabel),1)]),_:1})]),_:1})):u("",!0),e.embed?u("",!0):(s(),i(r,{key:3},{default:l(()=>[o(k,{icon:"mdi:mdi-window-close",onClick:m})]),_:1}))]),_:2},[e.$slots.extension?{name:"extension",fn:l(()=>[o(C,{fluid:!0},{default:l(()=>[n(e.$slots,"extension")]),_:3})]),key:"0"}:void 0]),1032,["color"]),n(e.$slots,"tabs"),o(L,{class:N(e.cardClass),style:z(e.cardStyle)},{default:l(()=>[n(e.$slots,"default")]),_:3},8,["class","style"]),o(T,null,{default:l(()=>[e.showCloseAction&&!e.embed?(s(),i(r,{key:0},{default:l(()=>[o(k,{color:"blue-darken-1",variant:"text",onClick:m},{default:l(()=>[f(h(e.closeActionLabel),1)]),_:1})]),_:1})):u("",!0),e.showResetAction?(s(),i(r,{key:1},{default:l(()=>[o(k,{color:"blue-darken-1",variant:"text",onClick:b},{default:l(()=>a[2]||(a[2]=[f(" Reset ")])),_:1})]),_:1})):u("",!0),e.showDeleteAction?(s(),i(r,{key:2},{default:l(()=>[o(S,{color:"red-darken-1",variant:"text",onClick:v},{default:l(()=>a[3]||(a[3]=[f(" Delete ")])),_:1})]),_:1})):u("",!0),e.showCloseAction||e.showDeleteAction||e.showResetAction?(s(),i(U,{key:3})):u("",!0),n(e.$slots,"actions"),e.showSaveAction?(s(),i(r,{key:4},{default:l(()=>[o(S,{color:"green-darken-1",variant:"text",onClick:y},{default:l(()=>[f(h(e.saveButtonLabel),1)]),_:1})]),_:1})):u("",!0)]),_:3})]),_:3})]),_:3}))}}),W=q({__name:"ModelDialog",props:V({color:{type:String,required:!1,default:"primary"},fullscreen:{type:Boolean,required:!1,default:!1},hideExtension:{type:Boolean,required:!1,default:!1},onDelete:{type:Function,required:!1,default:void 0},onReset:{type:Function,required:!1,default:void 0},onSave:{type:Function,required:!1,default:void 0},title:{type:String,required:!1,default:""},subtitle:{type:String,required:!1,default:""},cardClass:{type:String,required:!1,default:""},cardStyle:{type:String,required:!1,default:""},showCloseAction:{type:Boolean,required:!1,default:!1},showDeleteAction:{type:Boolean,required:!1,default:!1},showResetAction:{type:Boolean,required:!1,default:!1},showSaveAction:{type:Boolean,required:!1,default:!1},saveButtonLabel:{type:String,required:!1,default:"Save"},closeActionLabel:{type:String,required:!1,default:"Cancel"},persistent:{type:Boolean,required:!1,default:!1},retainFocus:{type:Boolean,required:!1,default:!0},scrollable:{type:Boolean,required:!1,default:!1},embed:{type:Boolean,required:!1,default:!1}},{modelValue:{type:Boolean,required:!1},modelModifiers:{}}),emits:V(["close","delete","reset","save"],["update:modelValue"]),setup(t,{emit:B}){const d=$(t,"modelValue"),c=B,m=()=>{c("close")},v=e=>{c("delete",e)},b=()=>{c("reset")},y=e=>{c("save",e)};return(e,a)=>t.embed?(s(),i(D,{key:0,modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=w=>d.value=w),color:t.color,fullscreen:t.fullscreen,"hide-extension":t.hideExtension,emitDeleteEvent:!!t.onDelete,emitResetEvent:!!t.onReset,emitSaveEvent:!!t.onSave,onClose:m,onDelete:v,onReset:b,onSave:y,title:t.title,subtitle:t.subtitle,"card-class":t.cardClass,"card-style":t.cardStyle,"show-close-action":t.showCloseAction,"show-delete-action":t.showDeleteAction,"show-save-action":t.showSaveAction,"show-reset-action":t.showResetAction,"save-button-label":t.saveButtonLabel,"close-action-label":t.closeActionLabel,persistent:t.persistent,"retain-focus":t.retainFocus,scrollable:t.scrollable,embed:t.embed},A({default:l(()=>[n(e.$slots,"default")]),_:2},[e.$slots.actions?{name:"actions",fn:l(()=>[n(e.$slots,"actions")]),key:"0"}:void 0,e.$slots.extension?{name:"extension",fn:l(()=>[n(e.$slots,"extension")]),key:"1"}:void 0,e.$slots.tabs?{name:"tabs",fn:l(()=>[n(e.$slots,"tabs")]),key:"2"}:void 0]),1032,["modelValue","color","fullscreen","hide-extension","emitDeleteEvent","emitResetEvent","emitSaveEvent","title","subtitle","card-class","card-style","show-close-action","show-delete-action","show-save-action","show-reset-action","save-button-label","close-action-label","persistent","retain-focus","scrollable","embed"])):(s(),i(G,{key:1,modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=w=>d.value=w),scrollable:t.scrollable,"retain-focus":t.retainFocus,persistent:t.persistent,fullscreen:t.fullscreen},{default:l(()=>[o(D,{modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=w=>d.value=w),color:t.color,fullscreen:t.fullscreen,"hide-extension":t.hideExtension,emitDeleteEvent:!!t.onDelete,emitResetEvent:!!t.onReset,emitSaveEvent:!!t.onSave,onClose:m,onDelete:v,onReset:b,onSave:y,title:t.title,subtitle:t.subtitle,"card-class":t.cardClass,"card-style":t.cardStyle,"show-close-action":t.showCloseAction,"show-delete-action":t.showDeleteAction,"show-save-action":t.showSaveAction,"show-reset-action":t.showResetAction,"save-button-label":t.saveButtonLabel,"close-action-label":t.closeActionLabel,persistent:t.persistent,"retain-focus":t.retainFocus,scrollable:t.scrollable,embed:t.embed},A({default:l(()=>[n(e.$slots,"default")]),_:2},[e.$slots.actions?{name:"actions",fn:l(()=>[n(e.$slots,"actions")]),key:"0"}:void 0,e.$slots.extension?{name:"extension",fn:l(()=>[n(e.$slots,"extension")]),key:"1"}:void 0,e.$slots.tabs?{name:"tabs",fn:l(()=>[n(e.$slots,"tabs")]),key:"2"}:void 0]),1032,["modelValue","color","fullscreen","hide-extension","emitDeleteEvent","emitResetEvent","emitSaveEvent","title","subtitle","card-class","card-style","show-close-action","show-delete-action","show-save-action","show-reset-action","save-button-label","close-action-label","persistent","retain-focus","scrollable","embed"])]),_:3},8,["modelValue","scrollable","retain-focus","persistent","fullscreen"]))}});export{W as _};
