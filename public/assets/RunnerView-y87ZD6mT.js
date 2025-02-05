import{m as $,u as F,A as J,_ as G}from"./runner-Dtgf2TAz.js";import{i as N,r as n,T as q,b as z,D as x,q as _,A as D,v as o,H as j,O as H,E as K,R as Q,Q as Y,n as f,f as a,x as m,y as W,F as X}from"./index-_3doXhpQ.js";import{a as Z}from"./SaveButton.vue_vue_type_script_setup_true_lang-c2VzGttt.js";import{V as A}from"./VContainer-DNZ1Tjea.js";import{V as E,a as w,b as L,c as O,d as h,e as M}from"./VCard-BynEEyOy.js";import{V as I,o as ee}from"./VBtn-BpS949DL.js";import{a as te,V as oe}from"./VRow-CD5Eu1Hz.js";import{V as ae}from"./VSheet--2ByF3ju.js";import"./useModel-DTs0rleL.js";import"./ModelDialog.vue_vue_type_script_setup_true_lang-CBb-gyT6.js";import"./forwardRefs-C5Rpdz9U.js";import"./VToolbar-eclfyMs8.js";import"./scopeId-WML-naVY.js";import"./createSimpleFunctional-DE7nZCO9.js";import"./VDialog-CL7WhxWz.js";import"./date-DgbCHIwC.js";import"./VList-C8zjtjLh.js";import"./VDivider-j7pEaUVb.js";import"./VSelect-BZw7MWV9.js";import"./VTextField-DvEV70aC.js";import"./form-DOKm0nu_.js";import"./VChip-3isOasPv.js";import"./userData-C0P92nnn.js";import"./canEditRegistrations-B-4ahVG7.js";import"./canDo-DkeZlUvj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ticket-DqurB3v3.js";import"./useStoreAPI-CpDdaC3f.js";import"./form-Cqw16b_M.js";import"./submission-DAi9v6uc.js";import"./v4-CtRu48qb.js";import"./targetType-BYfQr9gB.js";import"./Editor-CqZV54ZM.js";import"./VAutocomplete-C5Dti90b.js";import"./filter-B-gXix7X.js";import"./VExpansionPanels-BzjSgKjj.js";import"./VDataTable-DKNe66S5.js";import"./VTable-CwDlnvMb.js";import"./DeleteDialog.vue_vue_type_script_setup_true_lang-Gl1adtSf.js";import"./SelectGroups.vue_vue_type_script_setup_true_lang-Cr0KLnSz.js";import"./VTextarea-BbHc_TnC.js";import"./useDisplayTransactions-BD9b9ZB_.js";import"./VForm-CcNPrL-t.js";import"./VNavigationDrawer-lcXzkJXQ.js";import"./layout-DburaH06.js";const ne=N({__name:"RunnerSocket",emits:["data","ready","updating","updated"],setup(P,{emit:T}){const S=H(),R=K.getInstance(),y=Q(),g=Y(),u=T,C=n(),d=n(),p=n(),v=n(!1),V=n(!1),l=n(""),U=n(!1),s=$({mode:"host",wsUri:S.getRunnerSocketURL()}),i=q.getInstance();R.on("badge_serial_update",t=>{const e={Command:"BADGE_SERIAL_UPDATE",Params:new Map,Data:JSON.stringify(t)};s.JSON(e)}),s.on("authenticated",()=>{r()}),s.on("auth_failed",()=>{v.value=!1}),s.on("convention_data",t=>{if(!t)return;const e=t;C.value=e.Convention,u("updated",e),u("ready")}),s.on("error",t=>{const e=t;l.value=`Error: ${F(e.Message)}`,U.value=!0,v.value||(V.value=!0)}),s.on("joined",()=>{v.value=!0;const t={Command:"GET_CURRENT_REGISTRATION",Params:new Map,Data:""};s.JSON(t),u("ready")}),s.on("kicked",()=>{g.push("/")}),s.on("open",()=>{const t=i.getTokenByService("GrazeAPI");s.send(`AUTH ${t==null?void 0:t.AccessToken}`)}),s.on("runner_data",t=>{if(!t)return;const e=t;if(!(!e.RunnerLayout||!e.Registration)){if(u("data",e),d.value=e.RunnerLayout,p.value=e.Registration,!C.value||e.RunnerLayout.ConventionUUID!==C.value.ConventionUUID){u("updating"),c(e.RunnerLayout.ConventionUUID);return}u("ready")}});const r=()=>{const t={Key:y.params.session||"",Mode:"runner",UserUUID:y.params.user||""},e={Command:"SET_MODE",Params:new Map,Data:JSON.stringify(t)};s.JSON(e)},c=t=>{const k={Command:"GET_CONVENTION_DATA",Params:new Map,Data:JSON.stringify({ConventionUUID:t})};s.JSON(k)};z(()=>{s.destroy()});const b=()=>{g.push("/")},B=()=>{location.reload()};return(t,e)=>(f(),x(j,null,[U.value?(f(),_(Z,{key:0,modelValue:U.value,"onUpdate:modelValue":e[0]||(e[0]=k=>U.value=k),message:l.value,timeout:1e4},null,8,["modelValue","message"])):D("",!0),V.value?(f(),_(A,{key:1},{default:o(()=>[a(M,{"max-width":"620",class:"mx-auto",elevation:"10"},{default:o(()=>[a(E,{class:"bg-red-darken-4"},{default:o(()=>[a(w,null,{default:o(()=>e[2]||(e[2]=[m(" Connection Failure ")])),_:1}),a(L,{style:{opacity:"0.8"}},{default:o(()=>e[3]||(e[3]=[m(" Failed to establish connection to host ")])),_:1})]),_:1}),a(O,{class:"mt-4"},{default:o(()=>[m(W(l.value),1)]),_:1}),a(h,{class:"justify-space-between"},{default:o(()=>[a(I,{"prepend-icon":"mdi:mdi-home",variant:"flat",color:"primary",onClick:e[1]||(e[1]=k=>X(g).push("/"))},{default:o(()=>e[4]||(e[4]=[m(" Dashboard ")])),_:1}),a(I,{"prepend-icon":"mdi:mdi-reload",variant:"flat",color:"success",onClick:B},{default:o(()=>e[5]||(e[5]=[m(" Retry ")])),_:1})]),_:1})]),_:1})]),_:1})):D("",!0),v.value?(f(),_(A,{key:2,fluid:!0},{default:o(()=>[a(oe,null,{default:o(()=>[a(te,{class:"text-center"},{default:o(()=>[a(I,{"prepend-icon":"mdi:mdi-link-variant-remove",variant:"flat",color:"error",onClick:b,elevation:"10"},{default:o(()=>e[6]||(e[6]=[m(" Disconnect ")])),_:1})]),_:1})]),_:1})]),_:1})):D("",!0)],64))}}),We=N({__name:"RunnerView",emits:["pageTitle"],setup(P,{emit:T}){T("pageTitle","Registration Runner");const R=n([]),y=n(),g=n([]),u=n([]),C=n([]),d=n({ID:0,AdminLayoutUUID:"",ConventionID:0,ConventionUUID:"",Name:"",RunnerLayoutUUID:"",Type:J.ADMIN_LAYOUT_PANELS,Panels:[]}),p=n(),v=n([]),V=n([]),l=n(!1),U=i=>{p.value=void 0,setTimeout(()=>{d.value=i.RunnerLayout,p.value=i.Registration},200)},s=i=>{R.value=i.Accommodations,y.value=i.Convention,g.value=i.Extras,u.value=i.Forms,C.value=i.Interests,v.value=i.Tickets,V.value=i.Venues,d.value&&(l.value=!0)};return(i,r)=>(f(),x("div",null,[l.value&&d.value&&y.value&&p.value?(f(),_(ae,{key:0},{default:o(()=>[a(G,{convention:y.value,tickets:v.value,accommodations:R.value,extras:g.value,venues:V.value,interests:C.value,forms:u.value,layout:d.value,"onUpdate:layout":r[0]||(r[0]=c=>d.value=c),modelValue:p.value,"onUpdate:modelValue":r[1]||(r[1]=c=>p.value=c)},null,8,["convention","tickets","accommodations","extras","venues","interests","forms","layout","modelValue"])]),_:1})):l.value?(f(),_(A,{key:1},{default:o(()=>[a(M,{"max-width":"620",class:"mx-auto",elevation:"10"},{default:o(()=>[a(E,{class:"bg-orange-darken-3"},{default:o(()=>[a(w,null,{default:o(()=>r[4]||(r[4]=[m(" Awaiting Data ")])),_:1}),a(L,{style:{opacity:"0.9"}},{default:o(()=>r[5]||(r[5]=[m(" Display will update as soon as host provides registration details ")])),_:1})]),_:1}),a(O,{class:"mt-4 text-center"},{default:o(()=>[a(ee,{indeterminate:!0,size:60,width:"8",color:"orange"})]),_:1})]),_:1})]),_:1})):D("",!0),a(ne,{onData:U,onReady:r[2]||(r[2]=c=>l.value=!0),onUpdating:r[3]||(r[3]=c=>l.value=!1),onUpdated:s})]))}});export{We as default};
