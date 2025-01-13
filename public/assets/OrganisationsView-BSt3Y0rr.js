import{i as N,M as P,N as $,r as d,k as Z,n as V,q as U,v as a,f as e,x as v,y as R,F as p,A as T,P as J,R as X,l as ee,W as ae,D as M,Q as te,H as G}from"./index-Od9OxrV2.js";import{s as O}from"./index-fwfMqYug.js";import{u as A}from"./useStoreAPI-DPq9PLpq.js";import{_ as le}from"./DeleteDialog.vue_vue_type_script_setup_true_lang-CapBCO5M.js";import{e as h,c as oe,V as ne,a as ie,b as se,d as re}from"./VCard-XZ1cak2v.js";import{V as ue,a as me}from"./VToolbar-DYiGF6B9.js";import{V as de}from"./scopeId-D6-MP4Tm.js";import{V as fe}from"./VToolbarItems-Cf3mPMPP.js";import{V as b,d as ge,e as B}from"./VContainer-C1uLz2Ca.js";import{V as g,a as f}from"./VRow-BK1WVxmI.js";import{V as q}from"./forwardRefs-Cpa8O7lN.js";import{V as S}from"./VTextField-CURQ2Aml.js";import{V as E}from"./VForm-DirsCOCR.js";import{V as pe}from"./VFileInput-dvTYU6oq.js";import{V as F}from"./VTextarea-ygK1oN4s.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{G as z}from"./userData-D4nsvgJy.js";import{V as ve}from"./VDialog-gfHRrTVk.js";import{C as Ve}from"./canEditOrganisation-BsUB5a8T.js";import{G as ce}from"./group-Dg_peWef.js";import{C as _e}from"./canDo-De0vTDt9.js";import{v as Ce}from"./v4-CtRu48qb.js";import"./SaveButton.vue_vue_type_script_setup_true_lang-4dy-ZnCk.js";import"./VOverlay-DRP3ww5H.js";import"./layout-Y5c4-I6L.js";import"./createSimpleFunctional-BJz_B7ad.js";import"./form-DUQLQX-r.js";import"./VChip-DhfHndic.js";const Ie=(c,_)=>{if(c===void 0)return!1;const i=_e(c,ce.GROUP_TYPE_ORGANISATION,_.OrganisationUUID);return i.EditOrganisation||i.EditConvention||i.ManageViews||i.ViewRegistration||i.EditRegistration||i.ManageUsers},De=N({__name:"EditOrganisation",props:{modelValue:{required:!0},modelModifiers:{}},emits:P(["change","close","delete"],["update:modelValue"]),setup(c,{emit:_}){const i=_,r=J(),w=A(),C=$(c,"modelValue"),o=d(Z(C.value)),I=d(`${w.GetOrganisationLogoURL(o.value.OrganisationUUID)}?${new Date().getTime()}`),x=d(),s=d(),l=d(!1),D=d(""),m=d(),y=async()=>{var t;const n=new FormData((t=s.value)==null?void 0:t.$el);if(n.get("Image")&&n.get("Image").size>0)return n.set("OrganisationUUID",o.value.OrganisationUUID),await w.SaveOrganisationLogo(n)},Y=()=>{var n;y(),(n=m.value)==null||n.validate().then(t=>{t&&r.saveOrganisation(o.value).then(u=>{u&&(C.value=u,i("change"),i("close"))})})},L=d({available:n=>!0,min:n=>n.length>=4||"Minimum 4 characters",required:n=>!!n||"Required.",valid:n=>!/[^0-9a-z_-]/.test(n)||"Only lower-case letters, numbers, hyphens and underscores permitted"}),k=()=>{l.value=!1},j=()=>{l.value=!0},K=d(`
<p class="mb-2">
  Are you sure you wish to delete this organisation? All data relating to it will be
  removed including all conventions their respective registrations and payment information.
  This action can not be undone.
</p>
<p class="mb-2">
  We are talking some Thanos level shit right here, if you proceed a team of super-powered
  beings with Daddy issues will hunt you down through time, space and a social media
  platform formerly known as twitter.
</p>
<p>
  To confirm type "I CLICK MY FINGERS" in the box below.
</p>
`),W=n=>{D.value="",r.deleteOrganisation(o.value.OrganisationUUID).then(t=>{t?n&&n("Organisation Deleted"):n&&n("Failed to Delete Organisation"),setTimeout(()=>{k(),i("delete")},2e3)}).catch(()=>{n&&(n("Failed to Delete Organisation"),setTimeout(k,2e3))})},Q=()=>{I.value=URL.createObjectURL(x.value.files[0])};return(n,t)=>(V(),U(E,{"fast-fail":"",ref:"form"},{default:a(()=>[e(h,null,{default:a(()=>[e(ue,{dark:"",color:"primary"},{default:a(()=>[e(me,null,{default:a(()=>[v(R(o.value.Name),1)]),_:1}),e(de),e(fe,null,{default:a(()=>[e(b,{variant:"text",onClick:j},{default:a(()=>t[7]||(t[7]=[v(" Delete ")])),_:1}),e(b,{variant:"text",onClick:Y},{default:a(()=>t[8]||(t[8]=[v(" Save ")])),_:1}),e(b,{icon:"",dark:"",onClick:t[0]||(t[0]=u=>i("close"))},{default:a(()=>[e(ge,null,{default:a(()=>t[9]||(t[9]=[v("mdi:mdi-close")])),_:1})]),_:1})]),_:1})]),_:1}),e(oe,null,{default:a(()=>[e(B,{fluid:!0},{default:a(()=>[e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(q,{class:"imgLogo mx-auto",src:I.value||""},null,8,["src"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(S,{label:p(O).formLabelName,type:"text",variant:"outlined",modelValue:o.value.Name,"onUpdate:modelValue":t[1]||(t[1]=u=>o.value.Name=u)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(S,{label:p(O).formLabelSlug,pattern:"[a-zA-Z0-9_\\-]{6,25}",rules:[L.value.available,L.value.min,L.value.required,L.value.valid],type:"text",variant:"outlined",modelValue:o.value.Slug,"onUpdate:modelValue":t[2]||(t[2]=u=>o.value.Slug=u)},null,8,["label","rules","modelValue"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(S,{label:p(O).formLabelDomain,type:"text",variant:"outlined",modelValue:o.value.Domain,"onUpdate:modelValue":t[3]||(t[3]=u=>o.value.Domain=u)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,null,{default:a(()=>[e(E,{ref:"organisationImageForm",enctype:"multipart/form-data"},{default:a(()=>[e(pe,{label:p(O).formLabelLogo,name:"Image",variant:"outlined",ref:"imageFileInput",accept:"image/avif, image/bmp, image/gif, image/jpeg, image/png, image/webp","hide-details":"",onChange:Q},null,8,["label"])]),_:1})]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(F,{label:p(O).formLabelCSS,type:"text",variant:"outlined",modelValue:o.value.CSS,"onUpdate:modelValue":t[4]||(t[4]=u=>o.value.CSS=u)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(F,{label:p(O).formLabelHTML,type:"text",variant:"outlined",modelValue:o.value.HTML,"onUpdate:modelValue":t[5]||(t[5]=u=>o.value.HTML=u)},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l.value?(V(),U(le,{key:0,modelValue:l.value,"onUpdate:modelValue":t[6]||(t[6]=u=>l.value=u),title:`Delete ${o.value.Name}`,subtitle:"Your will be done",message:K.value,"confirmation-text":"I CLICK MY FINGERS",onDelete:W},null,8,["modelValue","title","message"])):T("",!0)]),_:1}))}}),Oe=H(De,[["__scopeId","data-v-a8f6b08d"]]),Ue=N({__name:"OrganisationCard",props:{modelValue:{required:!0},modelModifiers:{}},emits:P(["delete"],["update:modelValue"]),setup(c,{emit:_}){const i=z();(!i||!i.Groups.find(s=>s.Permission.EditConvention)&&!i.Groups.find(s=>s.Permission.EditOrganisation)&&!i.Groups.find(s=>s.Permission.EditRegistration)&&!i.Groups.find(s=>s.Permission.ManageViews)&&!i.Groups.find(s=>s.Permission.ViewRegistration))&&X().push("/");const r=$(c,"modelValue"),w=_,C=A(),o=d(!1),I=d(""),x=()=>{I.value=`${C.GetOrganisationLogoURL(r.value.OrganisationUUID)}?${new Date().getTime()}`};return x(),(s,l)=>{const D=ee("RouterLink");return V(),U(h,null,{default:a(()=>[e(ne,{class:"flex-1-1 align-content-start"},{default:a(()=>[e(q,{class:"imgLogo mx-auto",src:I.value||""},null,8,["src"]),e(ie,null,{default:a(()=>[v(R(r.value.Name),1)]),_:1}),e(se,null,{default:a(()=>[v(R(r.value.Slug),1)]),_:1})]),_:1}),e(re,null,{default:a(()=>[e(g,{"no-gutters":""},{default:a(()=>[e(f,{class:"ma-1"},{default:a(()=>[e(b,{variant:"tonal",color:"primary",onClick:l[0]||(l[0]=m=>o.value=!0),width:"100%"},{default:a(()=>l[5]||(l[5]=[v("Edit")])),_:1})]),_:1}),T("",!0),e(f,{class:"ma-1"},{default:a(()=>[e(D,{to:`/admin/organisations/${r.value.Slug?r.value.Slug:r.value.OrganisationUUID}`},{default:a(()=>[e(b,{variant:"tonal",color:"green",width:"100%"},{default:a(()=>l[7]||(l[7]=[v("Convention Manager")])),_:1})]),_:1},8,["to"])]),_:1})]),_:1})]),_:1}),e(ve,{modelValue:o.value,"onUpdate:modelValue":l[4]||(l[4]=m=>o.value=m),scrollable:!0,fullscreen:!0,persistent:!0},{default:a(()=>[e(Oe,{onClose:l[1]||(l[1]=m=>o.value=!1),modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=m=>r.value=m),onDelete:l[3]||(l[3]=m=>{o.value=!1,w("delete")}),onChange:x},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})}}}),be=H(Ue,[["__scopeId","data-v-13dc9387"]]),Xe=N({__name:"OrganisationsView",emits:["pageTitle"],setup(c,{emit:_}){const i=ae.getInstance(),r=d([]);_("pageTitle","Organisations");const C=z(),o=()=>{const s={ID:0,OrganisationUUID:Ce(),Name:"New Organisation",Slug:"",Logo:"",Domain:"",CSS:"",HTML:""};i.saveOrganisation(s).then(l=>{l&&r.value.push(l)})},I=s=>{r.value.splice(s,1)};return(()=>{i.getOrganisations().then(s=>{r.value=s})})(),(s,l)=>(V(),U(B,null,{default:a(()=>[e(g,null,{default:a(()=>[(V(!0),M(G,null,te(r.value,(D,m)=>(V(),M(G,{key:D.ID},[p(Ie)(p(C),D)?(V(),U(f,{key:0,cols:"12",sm:"6",md:"4",lg:"3",class:"d-flex flex-column"},{default:a(()=>[e(be,{modelValue:r.value[m],"onUpdate:modelValue":y=>r.value[m]=y,class:"elevation-5 flex-1-0 d-flex flex-column",onDelete:y=>I(m)},null,8,["modelValue","onUpdate:modelValue","onDelete"])]),_:2},1024)):T("",!0)],64))),128))]),_:1}),e(g,null,{default:a(()=>[p(Ve)(p(C))?(V(),U(f,{key:0,class:"text-right"},{default:a(()=>[e(b,{color:"primary",onClick:o},{default:a(()=>l[0]||(l[0]=[v("New")])),_:1})]),_:1})):T("",!0)]),_:1})]),_:1}))}});export{Xe as default};
