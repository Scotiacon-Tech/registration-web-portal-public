import{i as T,K as F,L as P,r as m,k as H,n as g,q as w,v as a,f as e,x as f,y as R,C as I,A as L,N as J,_ as $,P as Q,l as X,S as ee,B as h,O as ae,F as G}from"./index-Bl6vN6z6.js";import{s as k}from"./index-DFZh32pl.js";import{u as A}from"./useStoreAPI-D4zVnZS8.js";import{_ as te}from"./DeleteDialog.vue_vue_type_script_setup_true_lang-C_61NpvY.js";import{e as M,c as oe,V as le,a as ne,b as ie,d as se}from"./VCard-wpi2T3Ja.js";import{V as re,a as ue}from"./VToolbar-B14pgjrJ.js";import{V as me}from"./scopeId-BiuWR_m1.js";import{V as de}from"./VToolbarItems-BwE71pe5.js";import{V as U,d as fe,e as B}from"./VContainer-B_erhKyg.js";import{V as O,a as p}from"./VRow-DHTh0_wo.js";import{V as q}from"./forwardRefs-DqZZjb2J.js";import{V as S}from"./VTextField-O6UbgWjU.js";import{V as E}from"./VForm-CoYBBEc8.js";import{V as ge}from"./VFileInput-C2xaoMZV.js";import{G as z}from"./userData-BraDd-V7.js";import{V as pe}from"./VDialog-ldWwgpmq.js";import{C as ve}from"./canEditOrganisation-BeDPczqW.js";import{G as ce}from"./group-Dg_peWef.js";import{C as Ve}from"./canDo-EM20Kv95.js";import{v as _e}from"./v4-CQkTLCs1.js";import"./SaveButton.vue_vue_type_script_setup_true_lang-DbWXHPil.js";import"./createSimpleFunctional-lMN-3CyO.js";import"./form-Ciuie580.js";import"./VChip-BMOW25TY.js";const Ie=(v,c)=>{if(v===void 0)return!1;const l=Ve(v,ce.GROUP_TYPE_ORGANISATION,c.OrganisationUUID);return l.EditOrganisation||l.EditConvention||l.ManageViews||l.ViewRegistration||l.EditRegistration||l.ManageUsers},Oe=T({__name:"EditOrganisation",props:{modelValue:{required:!0},modelModifiers:{}},emits:F(["change","close","delete"],["update:modelValue"]),setup(v,{emit:c}){const l=c,s=J(),y=A(),V=P(v,"modelValue"),r=m(H(V.value)),_=m(`${y.GetOrganisationLogoURL(r.value.OrganisationUUID)}?${new Date().getTime()}`),C=m(),i=m(),t=m(!1),D=m(""),u=m(),x=async()=>{var n;const o=new FormData((n=i.value)==null?void 0:n.$el);if(o.get("Image")&&o.get("Image").size>0)return o.set("OrganisationUUID",r.value.OrganisationUUID),await y.SaveOrganisationLogo(o)},Y=()=>{var o;x(),(o=u.value)==null||o.validate().then(n=>{n&&s.saveOrganisation(r.value).then(d=>{d&&(V.value=d,l("change"),l("close"))})})},b=m({available:o=>!0,min:o=>o.length>=4||"Minimum 4 characters",required:o=>!!o||"Required.",valid:o=>!/[^0-9a-z_-]/.test(o)||"Only lower-case letters, numbers, hyphens and underscores permitted"}),N=()=>{t.value=!1},K=()=>{t.value=!0},j=m(`
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
`),W=o=>{D.value="",s.deleteOrganisation(r.value.OrganisationUUID).then(n=>{n?o&&o("Organisation Deleted"):o&&o("Failed to Delete Organisation"),setTimeout(()=>{N(),l("delete")},2e3)}).catch(()=>{o&&(o("Failed to Delete Organisation"),setTimeout(N,2e3))})},Z=()=>{_.value=URL.createObjectURL(C.value.files[0])};return(o,n)=>(g(),w(E,{"fast-fail":"",ref_key:"form",ref:u},{default:a(()=>[e(M,null,{default:a(()=>[e(re,{dark:"",color:"primary"},{default:a(()=>[e(ue,null,{default:a(()=>[f(R(r.value.Name),1)]),_:1}),e(me),e(de,null,{default:a(()=>[e(U,{variant:"text",onClick:K},{default:a(()=>n[4]||(n[4]=[f(" Delete ")])),_:1}),e(U,{variant:"text",onClick:Y},{default:a(()=>n[5]||(n[5]=[f(" Save ")])),_:1}),e(U,{icon:"",dark:"",onClick:n[0]||(n[0]=d=>l("close"))},{default:a(()=>[e(fe,null,{default:a(()=>n[6]||(n[6]=[f("mdi:mdi-close")])),_:1})]),_:1})]),_:1})]),_:1}),e(oe,null,{default:a(()=>[e(B,{fluid:!0},{default:a(()=>[e(O,null,{default:a(()=>[e(p,{cols:"12"},{default:a(()=>[e(q,{class:"imgLogo mx-auto",src:_.value||""},null,8,["src"])]),_:1})]),_:1}),e(O,null,{default:a(()=>[e(p,{cols:"12"},{default:a(()=>[e(S,{label:I(k).formLabelName,type:"text",variant:"outlined",modelValue:r.value.Name,"onUpdate:modelValue":n[1]||(n[1]=d=>r.value.Name=d)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(O,null,{default:a(()=>[e(p,{cols:"12"},{default:a(()=>[e(S,{label:I(k).formLabelSlug,pattern:"[a-zA-Z0-9_\\-]{6,25}",rules:[b.value.available,b.value.min,b.value.required,b.value.valid],type:"text",variant:"outlined",modelValue:r.value.Slug,"onUpdate:modelValue":n[2]||(n[2]=d=>r.value.Slug=d)},null,8,["label","rules","modelValue"])]),_:1})]),_:1}),e(O,null,{default:a(()=>[e(p,null,{default:a(()=>[e(E,{ref_key:"organisationImageForm",ref:i,enctype:"multipart/form-data"},{default:a(()=>[e(ge,{label:I(k).formLabelLogo,name:"Image",variant:"outlined",ref_key:"imageFileInput",ref:C,accept:"image/avif, image/bmp, image/gif, image/jpeg, image/png, image/webp","hide-details":"",onChange:Z},null,8,["label"])]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t.value?(g(),w(te,{key:0,modelValue:t.value,"onUpdate:modelValue":n[3]||(n[3]=d=>t.value=d),title:`Delete ${r.value.Name}`,subtitle:"Your will be done",message:j.value,"confirmation-text":"I CLICK MY FINGERS",onDelete:W},null,8,["modelValue","title","message"])):L("",!0)]),_:1},512))}}),Ce=$(Oe,[["__scopeId","data-v-534e16fc"]]),De=T({__name:"OrganisationCard",props:{modelValue:{required:!0},modelModifiers:{}},emits:F(["delete"],["update:modelValue"]),setup(v,{emit:c}){const l=z();(!l||!l.Groups.find(i=>i.Permission.EditConvention)&&!l.Groups.find(i=>i.Permission.EditOrganisation)&&!l.Groups.find(i=>i.Permission.EditRegistration)&&!l.Groups.find(i=>i.Permission.ManageViews)&&!l.Groups.find(i=>i.Permission.ViewRegistration))&&Q().push("/");const s=P(v,"modelValue"),y=c,V=A(),r=m(!1),_=m(""),C=()=>{_.value=`${V.GetOrganisationLogoURL(s.value.OrganisationUUID)}?${new Date().getTime()}`};return C(),(i,t)=>{const D=X("RouterLink");return g(),w(M,null,{default:a(()=>[e(le,{class:"flex-1-1 align-content-start"},{default:a(()=>[e(q,{class:"imgLogo mx-auto",src:_.value||""},null,8,["src"]),e(ne,null,{default:a(()=>[f(R(s.value.Name),1)]),_:1}),e(ie,null,{default:a(()=>[f(R(s.value.Slug),1)]),_:1})]),_:1}),e(se,null,{default:a(()=>[e(O,{"no-gutters":""},{default:a(()=>[e(p,{class:"ma-1"},{default:a(()=>[e(U,{variant:"tonal",color:"primary",onClick:t[0]||(t[0]=u=>r.value=!0),width:"100%"},{default:a(()=>t[5]||(t[5]=[f("Edit")])),_:1})]),_:1}),L("",!0),e(p,{class:"ma-1"},{default:a(()=>[e(D,{to:`/admin/organisations/${s.value.Slug?s.value.Slug:s.value.OrganisationUUID}`},{default:a(()=>[e(U,{variant:"tonal",color:"green",width:"100%"},{default:a(()=>t[7]||(t[7]=[f("Convention Manager")])),_:1})]),_:1},8,["to"])]),_:1})]),_:1})]),_:1}),e(pe,{modelValue:r.value,"onUpdate:modelValue":t[4]||(t[4]=u=>r.value=u),scrollable:!0,fullscreen:!0,persistent:!0},{default:a(()=>[e(Ce,{onClose:t[1]||(t[1]=u=>r.value=!1),modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=u=>s.value=u),onDelete:t[3]||(t[3]=u=>{r.value=!1,y("delete")}),onChange:C},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})}}}),we=$(De,[["__scopeId","data-v-13dc9387"]]),We=T({__name:"OrganisationsView",emits:["pageTitle"],setup(v,{emit:c}){const l=ee.getInstance(),s=m([]);c("pageTitle","Organisations");const V=z(),r=()=>{const i={ID:0,OrganisationUUID:_e(),Name:"New Organisation",Slug:"",Logo:""};l.saveOrganisation(i).then(t=>{t&&s.value.push(t)})},_=i=>{s.value.splice(i,1)};return(()=>{l.getOrganisations().then(i=>{s.value=i})})(),(i,t)=>(g(),w(B,null,{default:a(()=>[e(O,null,{default:a(()=>[(g(!0),h(G,null,ae(s.value,(D,u)=>(g(),h(G,{key:D.ID},[I(Ie)(I(V),D)?(g(),w(p,{key:0,cols:"12",sm:"6",md:"4",lg:"3",class:"d-flex flex-column"},{default:a(()=>[e(we,{modelValue:s.value[u],"onUpdate:modelValue":x=>s.value[u]=x,class:"elevation-5 flex-1-0 d-flex flex-column",onDelete:x=>_(u)},null,8,["modelValue","onUpdate:modelValue","onDelete"])]),_:2},1024)):L("",!0)],64))),128))]),_:1}),e(O,null,{default:a(()=>[I(ve)(I(V))?(g(),w(p,{key:0,class:"text-right"},{default:a(()=>[e(U,{color:"primary",onClick:r},{default:a(()=>t[0]||(t[0]=[f("New")])),_:1})]),_:1})):L("",!0)]),_:1})]),_:1}))}});export{We as default};
