import{u as re}from"./useTitleSetter-P326Xunc.js";import{P as de}from"./permission-Ba-8wP-4.js";import{T as n,a as ve}from"./targetType-BYfQr9gB.js";import{C as pe,G as Te}from"./canDo-Bko7qdXU.js";import{i as ae,M as fe,$ as ie,n as f,q as R,F as d,C as Ee,r as p,w as h,D as H,f as l,v as a,A as b,k as X,H as Z,x as U,y as _,m as ee,G as T,O as ce,U as Ie}from"./index-Ch9bXf7m.js";import{G as Ne}from"./userData-BlqUZFuB.js";import{_ as Ve}from"./ModelDialog.vue_vue_type_script_setup_true_lang-D2Ot4vYp.js";import{E as Ue}from"./Editor-lvjiv5E2.js";import{b as _e}from"./sorted-PYsDa1V2.js";import{u as Oe}from"./useConventionForms-DG59gqvd.js";import{u as Ae}from"./useEmailTemplates-DavTKHGm.js";import{V as Se}from"./VSheet-Bws4GkTG.js";import{V as j}from"./VContainer-CgEK3zub.js";import{V as O,a as u}from"./VRow-CRSYLKzY.js";import{V as y}from"./VSelect-CZlwYIny.js";import{V as ge,a as te}from"./VList-h7IH1Hh_.js";import{V as F,d as le}from"./VGrid-CYMVmI-n.js";import{V as M}from"./VTextField-C887nH29.js";import{v as be}from"./v4-CtRu48qb.js";import"./SaveButton.vue_vue_type_script_setup_true_lang-BH61iVMZ.js";import"./VOverlay-OdMvjfu9.js";import"./forwardRefs-DrPASvrm.js";import"./scopeId-1QXxm33H.js";import"./VCard-BYerusFH.js";import"./createSimpleFunctional-sOEokX1n.js";import"./VToolbar-kW5B0QgT.js";import"./VSpacer-Dp9G2Bn3.js";import"./VDialog-_GCb3z8Y.js";import"./form-DCjwM1fo.js";import"./VChip-mRw662qY.js";import"./VDivider-KqJAZaBO.js";const ye=A=>A===void 0?!1:pe(A,Te.GROUP_TYPE_SYSTEM).EditOrganisation,Re=ae({__name:"HTMLEditor",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(A,{expose:I}){const C={license_key:"gpl",content_style:"body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }"},S=fe(A,"modelValue"),D=ie("editBox");return I({insertText:N=>{D.value&&D.value.getEditor().execCommand("mceInsertContent",!1,N)}}),(N,E)=>(f(),R(d(Ue),{modelValue:S.value,"onUpdate:modelValue":E[0]||(E[0]=i=>S.value=i),"license-key":"gpl",plugins:"advlist code emoticons link lists table",init:C,ref:"editBox"},null,8,["modelValue"]))}}),ut=ae({__name:"TemplatesView",props:{loggedIn:{type:Boolean}},async setup(A){let I,C;re("Email Templates");const S=ce(),D=Ne(),{getEmailTemplateList:q}=Ae(),{Conventions:N,Organisations:E}=([I,C]=Ee(()=>S.getPermissionAccessList(de.PERMISSION_TYPE_EDIT_CONVENTION)),I=await I,C(),I),i=p(),m=p(),x=p(!1),v=p(),r=p(n.TARGET_TYPE_SYSTEM),Y=p([]),G=p(),c=p([]),oe=p([{title:"Account Display Name",subtitle:"The users current profile name",value:"ACCOUNT_DISPLAY_NAME"},{title:"Email Login Recovery URL",subtitle:"One use URL for a user to access their account.",value:"ACCOUNT_RECOVERY_URL"},{title:"Convention Name",subtitle:"The convention's name",value:"CONVENTION_NAME"},{title:"Email Verification URL",subtitle:"URL used to confirm a users email address",value:"EMAIL_VERIFICATION_URL"},{title:"Organisation Name",subtitle:"The organisation's name",value:"ORGANISATION_NAME"},{title:"Payment Details",subtitle:"A list of the items being charged for and the total",value:"PAYMENT_DETAILS"},{title:"Form Name",subtitle:"Name of the form that triggered this email",value:"SUBMISSION_FORM_NAME"},{title:"Registration Reference",subtitle:"Unique reference for this registration. E.g. Badge number",value:"REGISTRATION_REFERENCE"},{title:"Submission Details",subtitle:"Auto-generated details of ticket, accommodation, cost etc.",value:"SUBMISSION_DETAILS"}]),L=p(),w=[],k=ie("editor");ye(D)&&w.push({title:"System",value:n.TARGET_TYPE_SYSTEM}),E.length>0&&w.push({title:"Organisational",value:n.TARGET_TYPE_ORGANISATION}),N.length>0&&w.push({title:"Convention",value:n.TARGET_TYPE_CONVENTION}),h(r,()=>{r.value==n.TARGET_TYPE_SYSTEM?(m.value=void 0,v.value=void 0):r.value==n.TARGET_TYPE_ORGANISATION&&(m.value=void 0),P()}),h(v,()=>{v.value&&m.value&&v.value.OrganisationUUID!==m.value.OrganisationUUID&&(m.value=void 0),P()}),h(m,()=>{Q(),P()});const P=()=>{var o,t;return q(r.value,((o=v.value)==null?void 0:o.OrganisationUUID)||null,((t=m.value)==null?void 0:t.ConventionUUID)||null).then(e=>{c.value=e})};P();const z=()=>{var o;return{ID:0,EmailTemplateUUID:be(),Name:"",Title:"",OwnerUUID:r.value===n.TARGET_TYPE_SYSTEM?Ie:r.value===n.TARGET_TYPE_ORGANISATION?v.value.OrganisationUUID:m.value.ConventionUUID,OwnerType:((o=ve.find(t=>t.value===r.value))==null?void 0:o.value)||n.TARGET_TYPE_SYSTEM,From:"",FromName:"",Subject:"",HTML:"",AutoText:!0,Text:"",IsDefault:!1}},se=()=>{const o=c.value.findIndex(t=>i.value&&t.EmailTemplateUUID===i.value.EmailTemplateUUID);o===-1?i.value=z():i.value=X(c.value[o])},J=(o=void 0)=>{o===void 0?i.value=z():i.value=X(o),Q().then(()=>{x.value=!0})},ne=async o=>{if(i.value)try{const t=await S.saveEmailTemplate(i.value);if(t){const e=c.value.findIndex(s=>s.EmailTemplateUUID===t.EmailTemplateUUID);e===-1?c.value.push(t):c.value.splice(e,1,t),await o("Template Saved"),setTimeout(()=>{i.value=void 0,x.value=!1},500)}else await o("Failed to Save")}catch{await o("Failed to Save")}},K=o=>{k.value&&k.value.insertText(o)},Q=async()=>{var e,s,g;if(!m.value&&((e=i.value)==null?void 0:e.OwnerType)!==n.TARGET_TYPE_CONVENTION)return;let o=((s=m.value)==null?void 0:s.ConventionUUID)||((g=i.value)==null?void 0:g.OwnerUUID);if(!o)return;const t=await Oe(o);t&&(t.forEach(V=>V.Sections.forEach(B=>B.Fields&&Y.value.push(...B.Fields.map($=>{var W;return{subtitle:`${V.Name} - ${B.Name}`,title:`${(W=$.Field)==null?void 0:W.Name}`,value:$.SectionFieldUUID,object:$}})))),Y.value.sort(_e("title")))},ue=()=>{K(`[%FORM_${G.value.title}_${G.value.value}%]`)},me=()=>{K(`[%${L.value.value}%]`)};return(o,t)=>(f(),H("div",null,[l(Se,null,{default:a(()=>[l(j,{class:"bg-secondary",fluid:""},{default:a(()=>[l(O,null,{default:a(()=>[l(u,{cols:"12",sm:"5",md:"3",xl:"2",class:"pa-0"},{default:a(()=>[l(y,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),label:"Level",items:w,"hide-details":""},null,8,["modelValue"])]),_:1}),r.value===d(n).TARGET_TYPE_ORGANISATION||r.value===d(n).TARGET_TYPE_CONVENTION?(f(),R(u,{key:0,cols:"12",sm:"7",md:"4",lg:"3",xl:"2",class:"pa-0"},{default:a(()=>[l(y,{modelValue:v.value,"onUpdate:modelValue":t[1]||(t[1]=e=>v.value=e),label:"Organisation",items:d(E).sort((e,s)=>e.Name.localeCompare(s.Name)),"item-title":"Name","item-value":e=>e,clearable:"","hide-details":""},null,8,["modelValue","items","item-value"])]),_:1})):b("",!0),r.value===d(n).TARGET_TYPE_CONVENTION?(f(),R(u,{key:1,cols:"12",md:"5",lg:"6",xl:"4",class:"pa-0"},{default:a(()=>[l(y,{modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=e=>m.value=e),label:"Convention",items:d(N).filter(e=>!v.value||e.OrganisationUUID===v.value.OrganisationUUID).sort((e,s)=>e.Name.localeCompare(s.Name)),"item-title":"Name","item-value":e=>e,clearable:"","hide-details":""},null,8,["modelValue","items","item-value"])]),_:1})):b("",!0)]),_:1})]),_:1}),l(j,{fluid:""},{default:a(()=>[l(ge,{items:c.value,"item-value":e=>e,"item-title":"Title"},{subtitle:a(({item:e})=>{var s,g;return[e.OwnerType==d(n).TARGET_TYPE_ORGANISATION?(f(),H(Z,{key:0},[U(_((s=d(E).find(V=>V.OrganisationUUID===e.OwnerUUID))==null?void 0:s.Name),1)],64)):e.OwnerType==d(n).TARGET_TYPE_CONVENTION?(f(),H(Z,{key:1},[U(_((g=d(N).find(V=>V.ConventionUUID===e.OwnerUUID))==null?void 0:g.Name),1)],64)):b("",!0)]}),append:a(({item:e})=>[l(F,{color:"primary","prepend-icon":"mdi:mdi-pencil",onClick:s=>J(e)},{default:a(()=>t[12]||(t[12]=[U(" Edit ")])),_:2},1032,["onClick"])]),_:1},8,["items","item-value"]),l(O,{class:"pr-4"},{default:a(()=>[l(u,{class:"text-right"},{default:a(()=>[l(F,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:t[3]||(t[3]=e=>J())},{default:a(()=>t[13]||(t[13]=[U(" Add New Template ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i.value?(f(),R(Ve,{key:0,modelValue:x.value,"onUpdate:modelValue":t[11]||(t[11]=e=>x.value=e),title:`Edit Template${i.value.Title?` - ${i.value.Title}`:""}`,onSave:ne,onReset:se,fullscreen:!0,scrollable:!0,"card-class":"pa-0 pa-sm-6","retain-focus":!1},{default:a(()=>[l(j,{fluid:""},{default:a(()=>[l(O,null,{default:a(()=>[l(u,{cols:"12"},{default:a(()=>[l(M,{label:"Template Title",variant:"outlined",modelValue:i.value.Title,"onUpdate:modelValue":t[4]||(t[4]=e=>i.value.Title=e),"hide-details":""},null,8,["modelValue"])]),_:1}),l(u,{cols:"12"},{default:a(()=>[l(M,{label:"Default Sender Email Address",variant:"outlined",modelValue:i.value.From,"onUpdate:modelValue":t[5]||(t[5]=e=>i.value.From=e),"hide-details":""},null,8,["modelValue"])]),_:1}),l(u,{cols:"12"},{default:a(()=>[l(M,{label:"Default Sender Name",variant:"outlined",modelValue:i.value.FromName,"onUpdate:modelValue":t[6]||(t[6]=e=>i.value.FromName=e),"hide-details":""},null,8,["modelValue"])]),_:1}),l(u,{cols:"12"},{default:a(()=>[l(M,{label:"Default Email Subject",variant:"outlined",modelValue:i.value.Subject,"onUpdate:modelValue":t[7]||(t[7]=e=>i.value.Subject=e),"hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),l(O,null,{default:a(()=>[l(u,{cols:"12"},{default:a(()=>[l(Re,{modelValue:i.value.HTML,"onUpdate:modelValue":t[8]||(t[8]=e=>i.value.HTML=e),ref_key:"editor",ref:k},null,8,["modelValue"])]),_:1})]),_:1}),l(O,null,{default:a(()=>[l(u,{cols:"9",sm:"9"},{default:a(()=>[l(y,{modelValue:L.value,"onUpdate:modelValue":t[9]||(t[9]=e=>L.value=e),label:"Other Data",items:oe.value,"item-title":"title","item-value":e=>e,variant:"outlined","hide-details":"",density:"compact",clearable:""},{item:a(({props:e,item:s})=>[l(te,ee(e,{subtitle:s.raw.subtitle}),null,16,["subtitle"])]),selection:a(({item:e,index:s})=>[T("div",null,[U(_(e.title)+" ",1),t[14]||(t[14]=T("br",null,null,-1)),T("small",null,_(e.raw.subtitle),1)])]),_:1},8,["modelValue","items","item-value"])]),_:1}),l(u,{cols:"3",sm:"3",class:"text-right"},{default:a(()=>[l(F,{color:"primary",style:{"min-width":"40px"},onClick:me},{default:a(()=>[l(le,{icon:"mdi:mdi-plus",class:"d-sm-none"}),t[15]||(t[15]=T("span",{class:"d-none d-sm-inline"},"Add Item",-1))]),_:1})]),_:1})]),_:1}),i.value.OwnerType===d(n).TARGET_TYPE_CONVENTION?(f(),R(O,{key:0},{default:a(()=>[l(u,{cols:"9",sm:"9"},{default:a(()=>[l(y,{modelValue:G.value,"onUpdate:modelValue":t[10]||(t[10]=e=>G.value=e),label:"Form Data",items:Y.value,"item-title":"title","item-value":e=>e,variant:"outlined","hide-details":"",density:"compact",clearable:""},{item:a(({props:e,item:s})=>[l(te,ee(e,{subtitle:s.raw.subtitle}),null,16,["subtitle"])]),selection:a(({item:e,index:s})=>[T("div",null,[U(_(e.title)+" ",1),t[16]||(t[16]=T("br",null,null,-1)),T("small",null,_(e.raw.subtitle),1)])]),_:1},8,["modelValue","items","item-value"])]),_:1}),l(u,{cols:"3",sm:"3",class:"text-right"},{default:a(()=>[l(F,{color:"primary",style:{"min-width":"40px"},onClick:ue},{default:a(()=>[l(le,{icon:"mdi:mdi-plus",class:"d-sm-none"}),t[17]||(t[17]=T("span",{class:"d-none d-sm-inline"},"Add Field",-1))]),_:1})]),_:1})]),_:1})):b("",!0)]),_:1})]),_:1},8,["modelValue","title"])):b("",!0)]))}});export{ut as default};
