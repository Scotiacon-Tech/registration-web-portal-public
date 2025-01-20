import{i as N,M as E,N as P,r as v,k as J,$ as T,n as C,q as w,v as a,f as e,x as V,y as R,B as p,A as L,P as X,R as ee,l as ae,W as te,F as M,Q as le,H as F}from"./index-Dz-KKuQk.js";import{s as b}from"./index-fwfMqYug.js";import{u as A}from"./useStoreAPI-RpUUBX3g.js";import{_ as oe}from"./DeleteDialog.vue_vue_type_script_setup_true_lang-Wl0SIaC5.js";import{e as h,c as ne,V as ie,a as se,b as re,d as ue}from"./VCard-CKyVBRSl.js";import{V as me,a as de}from"./VToolbar-XOdzjqCn.js";import{V as fe}from"./scopeId-u7C7Bp9Y.js";import{V as ge}from"./VToolbarItems-TDodTNrt.js";import{V as x,d as pe,e as B}from"./VContainer-BB-0N338.js";import{V as g,a as f}from"./VRow-DGWxrdlo.js";import{V as q}from"./forwardRefs-CRsfwDW6.js";import{V as S}from"./VTextField-DE157IIp.js";import{V as G}from"./VForm-CFDEPARL.js";import{V as ve}from"./VFileInput-D7Tcc4-z.js";import{V as $}from"./VTextarea--0v27tDo.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{G as z}from"./userData-3wLL-Kql.js";import{V as Ve}from"./VDialog-CEC9GBIC.js";import{C as ce}from"./canEditOrganisation-Lf4EyPP8.js";import{G as _e}from"./group-Dg_peWef.js";import{C as Ce}from"./canDo-DmjiwSfW.js";import{u as Ie}from"./useTitleSetter-BolkDrrI.js";import{v as Oe}from"./v4-CtRu48qb.js";import"./SaveButton.vue_vue_type_script_setup_true_lang-B0Z8sE7n.js";import"./VOverlay-y6013gX9.js";import"./layout-C7ZoiN8H.js";import"./createSimpleFunctional-BDDu5rC0.js";import"./form-DAjrK8OW.js";import"./VChip-BVwUWGS9.js";const De=(I,c)=>{if(I===void 0)return!1;const l=Ce(I,_e.GROUP_TYPE_ORGANISATION,c.OrganisationUUID);return l.EditOrganisation||l.EditConvention||l.ManageViews||l.ViewRegistration||l.EditRegistration||l.ManageUsers},Ue=N({__name:"EditOrganisation",props:{modelValue:{required:!0},modelModifiers:{}},emits:E(["change","close","delete"],["update:modelValue"]),setup(I,{emit:c}){const l=c,u=X(),O=A(),D=P(I,"modelValue"),n=v(J(D.value)),d=v(`${O.GetOrganisationLogoURL(n.value.OrganisationUUID)}?${new Date().getTime()}`),m=T("imageFileInput"),s=T("organisationImageForm"),o=v(!1),U=v(""),_=T("form"),Y=async()=>{var t;const i=new FormData((t=s.value)==null?void 0:t.$el);if(i.get("Image")&&i.get("Image").size>0)return i.set("OrganisationUUID",n.value.OrganisationUUID),await O.SaveOrganisationLogo(i)},j=()=>{var i;Y(),(i=_.value)==null||i.validate().then(t=>{t&&u.saveOrganisation(n.value).then(r=>{r&&(D.value=r,l("change"),l("close"))})})},y=v({available:i=>!0,min:i=>i.length>=4||"Minimum 4 characters",required:i=>!!i||"Required.",valid:i=>!/[^0-9a-z_-]/.test(i)||"Only lower-case letters, numbers, hyphens and underscores permitted"}),k=()=>{o.value=!1},K=()=>{o.value=!0},W=v(`
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
`),Q=i=>{U.value="",u.deleteOrganisation(n.value.OrganisationUUID).then(t=>{t?i&&i("Organisation Deleted"):i&&i("Failed to Delete Organisation"),setTimeout(()=>{k(),l("delete")},2e3)}).catch(()=>{i&&(i("Failed to Delete Organisation"),setTimeout(k,2e3))})},Z=()=>{try{m.value&&m.value.files&&m.value.files[0]&&(d.value=URL.createObjectURL(m.value.files[0]))}catch{}};return(i,t)=>(C(),w(G,{"fast-fail":"",ref:"form"},{default:a(()=>[e(h,null,{default:a(()=>[e(me,{dark:"",color:"primary"},{default:a(()=>[e(de,null,{default:a(()=>[V(R(n.value.Name),1)]),_:1}),e(fe),e(ge,null,{default:a(()=>[e(x,{variant:"text",onClick:K},{default:a(()=>t[7]||(t[7]=[V(" Delete ")])),_:1}),e(x,{variant:"text",onClick:j},{default:a(()=>t[8]||(t[8]=[V(" Save ")])),_:1}),e(x,{icon:"",dark:"",onClick:t[0]||(t[0]=r=>l("close"))},{default:a(()=>[e(pe,null,{default:a(()=>t[9]||(t[9]=[V("mdi:mdi-close")])),_:1})]),_:1})]),_:1})]),_:1}),e(ne,null,{default:a(()=>[e(B,{fluid:!0},{default:a(()=>[e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(q,{class:"imgLogo mx-auto",src:d.value||""},null,8,["src"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(S,{label:p(b).formLabelName,type:"text",variant:"outlined",modelValue:n.value.Name,"onUpdate:modelValue":t[1]||(t[1]=r=>n.value.Name=r)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(S,{label:p(b).formLabelSlug,pattern:"[a-zA-Z0-9_\\-]{6,25}",rules:[y.value.available,y.value.min,y.value.required,y.value.valid],type:"text",variant:"outlined",modelValue:n.value.Slug,"onUpdate:modelValue":t[2]||(t[2]=r=>n.value.Slug=r)},null,8,["label","rules","modelValue"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e(S,{label:p(b).formLabelDomain,type:"text",variant:"outlined",modelValue:n.value.Domain,"onUpdate:modelValue":t[3]||(t[3]=r=>n.value.Domain=r)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,null,{default:a(()=>[e(G,{ref:"organisationImageForm",enctype:"multipart/form-data"},{default:a(()=>[e(ve,{label:p(b).formLabelLogo,name:"Image",variant:"outlined",ref:"imageFileInput",accept:"image/avif, image/bmp, image/gif, image/jpeg, image/png, image/webp","hide-details":"",onChange:Z},null,8,["label"])]),_:1})]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e($,{label:p(b).formLabelCSS,type:"text",variant:"outlined",modelValue:n.value.CSS,"onUpdate:modelValue":t[4]||(t[4]=r=>n.value.CSS=r)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(f,{cols:"12"},{default:a(()=>[e($,{label:p(b).formLabelHTML,type:"text",variant:"outlined",modelValue:n.value.HTML,"onUpdate:modelValue":t[5]||(t[5]=r=>n.value.HTML=r)},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o.value?(C(),w(oe,{key:0,modelValue:o.value,"onUpdate:modelValue":t[6]||(t[6]=r=>o.value=r),title:`Delete ${n.value.Name}`,subtitle:"Your will be done",message:W.value,"confirmation-text":"I CLICK MY FINGERS",onDelete:Q},null,8,["modelValue","title","message"])):L("",!0)]),_:1}))}}),be=H(Ue,[["__scopeId","data-v-30fb6098"]]),we=N({__name:"OrganisationCard",props:{modelValue:{required:!0},modelModifiers:{}},emits:E(["delete"],["update:modelValue"]),setup(I,{emit:c}){const l=z();(!l||!l.Groups.find(s=>s.Permission.EditConvention)&&!l.Groups.find(s=>s.Permission.EditOrganisation)&&!l.Groups.find(s=>s.Permission.EditRegistration)&&!l.Groups.find(s=>s.Permission.ManageViews)&&!l.Groups.find(s=>s.Permission.ViewRegistration))&&ee().push("/");const u=P(I,"modelValue"),O=c,D=A(),n=v(!1),d=v(""),m=()=>{d.value=`${D.GetOrganisationLogoURL(u.value.OrganisationUUID)}?${new Date().getTime()}`};return m(),(s,o)=>{const U=ae("RouterLink");return C(),w(h,null,{default:a(()=>[e(ie,{class:"flex-1-1 align-content-start"},{default:a(()=>[e(q,{class:"imgLogo mx-auto",src:d.value||""},null,8,["src"]),e(se,null,{default:a(()=>[V(R(u.value.Name),1)]),_:1}),e(re,null,{default:a(()=>[V(R(u.value.Slug),1)]),_:1})]),_:1}),e(ue,null,{default:a(()=>[e(g,{"no-gutters":""},{default:a(()=>[e(f,{class:"ma-1"},{default:a(()=>[e(x,{variant:"tonal",color:"primary",onClick:o[0]||(o[0]=_=>n.value=!0),width:"100%"},{default:a(()=>o[5]||(o[5]=[V("Edit")])),_:1})]),_:1}),L("",!0),e(f,{class:"ma-1"},{default:a(()=>[e(U,{to:`/admin/organisations/${u.value.Slug?u.value.Slug:u.value.OrganisationUUID}`},{default:a(()=>[e(x,{variant:"tonal",color:"green",width:"100%"},{default:a(()=>o[7]||(o[7]=[V("Convention Manager")])),_:1})]),_:1},8,["to"])]),_:1})]),_:1})]),_:1}),e(Ve,{modelValue:n.value,"onUpdate:modelValue":o[4]||(o[4]=_=>n.value=_),scrollable:!0,fullscreen:!0,persistent:!0},{default:a(()=>[e(be,{onClose:o[1]||(o[1]=_=>n.value=!1),modelValue:u.value,"onUpdate:modelValue":o[2]||(o[2]=_=>u.value=_),onDelete:o[3]||(o[3]=_=>{n.value=!1,O("delete")}),onChange:m},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})}}}),xe=H(we,[["__scopeId","data-v-13dc9387"]]),ta=N({__name:"OrganisationsView",setup(I){const c=te.getInstance(),l=v([]);Ie("Organisations");const u=z(),O=()=>{const d={ID:0,OrganisationUUID:Oe(),Name:"New Organisation",Slug:"",Logo:"",Domain:"",CSS:"",HTML:""};c.saveOrganisation(d).then(m=>{m&&l.value.push(m)})},D=d=>{l.value.splice(d,1)};return(()=>{c.getOrganisations().then(d=>{l.value=d})})(),(d,m)=>(C(),w(B,null,{default:a(()=>[e(g,null,{default:a(()=>[(C(!0),M(F,null,le(l.value,(s,o)=>(C(),M(F,{key:s.ID},[p(De)(p(u),s)?(C(),w(f,{key:0,cols:"12",sm:"6",md:"4",lg:"3",class:"d-flex flex-column"},{default:a(()=>[e(xe,{modelValue:l.value[o],"onUpdate:modelValue":U=>l.value[o]=U,class:"elevation-5 flex-1-0 d-flex flex-column",onDelete:U=>D(o)},null,8,["modelValue","onUpdate:modelValue","onDelete"])]),_:2},1024)):L("",!0)],64))),128))]),_:1}),e(g,null,{default:a(()=>[p(ce)(p(u))?(C(),w(f,{key:0,class:"text-right"},{default:a(()=>[e(x,{color:"primary",onClick:O},{default:a(()=>m[0]||(m[0]=[V("New")])),_:1})]),_:1})):L("",!0)]),_:1})]),_:1}))}});export{ta as default};
