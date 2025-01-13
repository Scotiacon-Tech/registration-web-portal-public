import{i as O,r as d,q as w,v as a,z as H,D as R,y,F as r,x as u,H as G,G as v,f as l,A as g,R as S,P as J,l as K,n as o}from"./index-CKB4TnKb.js";import{s as N}from"./index-fwfMqYug.js";import{S as U}from"./setupLogin-nmzc0o97.js";import{E as i}from"./emailFormVariant-DbFKH7n9.js";import{V as Q}from"./VForm-Df8efMuM.js";import{a as k,V as C}from"./VRow-B_xC0EDX.js";import{V as x}from"./VTextField-D0HqGk-L.js";import{V as E,e as h}from"./VContainer-DO5312cJ.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{G as Y}from"./userData-C9aLtvAh.js";import{V as ee,a as ae,c as te,e as le}from"./VCard-CH352nYW.js";import"./form-5uxQzLj5.js";import"./forwardRefs-K-nQ9nT4.js";import"./createSimpleFunctional-Bbwnoz7X.js";const re={key:1,class:"ma-auto text-left"},oe={key:2,class:"ma-auto text-left"},se={key:3,class:"ma-auto text-left"},ne={class:"text-red-darken-1 font-weight-bold"},ue={class:"text-center mt-4"},ie=O({__name:"EmailLoginForm",props:{variant:{default:()=>i.COMBINED}},setup(M){const b=S(),A=J(),V=d(!0),L=d(!1),T=d(!1),I=d(!1),s=d(""),n=d(""),_=d(!1),p=d({required:t=>!!t||"Required.",min:t=>t.length>=8||"Min 8 characters",email:t=>!!t.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||"Valid email address required"}),m=d(""),f=d(!1),q=new URL(location.href).searchParams.get("token")||"";q!==""&&(V.value=!1,I.value=!0,A.validateAccount(q,M.variant).then(({created:t,tokens:e,user:D})=>{try{U(e,D,b,t)}catch(c){console.error(c)}}).catch(t=>{console.error(t),m.value=t.ErrorMessage}));const F=()=>(m.value="",!(p.value.required(s.value)!==!0||p.value.email(s.value)!==!0||p.value.required(n.value)!==!0||p.value.min(n.value)!==!0)),z=t=>{if(t.preventDefault(),!F())return;const D=new URL(location.href).searchParams.get("state");f.value=!0,A.oAuthLogin("internal",s.value,n.value,D||"").then(({created:c,tokens:Z,user:j})=>{U(Z,j,b,c)}).catch(()=>{m.value="Login failed, check credentials, try another login method or create account",f.value=!1})},B=t=>{t.preventDefault(),F()&&(f.value=!0,A.registerAccount(s.value,n.value).then(e=>{V.value=!1,e&&(T.value=!0)}).catch(()=>{m.value="Unable to register, address may be in use",f.value=!1}))},W=()=>{A.requestLoginLink(s.value).then(t=>{V.value=!1,t&&(L.value=!0)}).catch(()=>{m.value="A problem was encountered, please try again",f.value=!1})},$=()=>{b.back()};return(t,e)=>{const D=K("router-link");return V.value?(o(),w(Q,{key:0,onSubmit:e[3]||(e[3]=H(()=>{},["stop"])),class:"ma-auto vForm",disabled:f.value},{default:a(()=>[l(C,null,{default:a(()=>[l(k,null,{default:a(()=>[l(x,{margin:"normal",required:"",id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:"",variant:"outlined",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=c=>s.value=c),rules:[p.value.required,p.value.email],clearable:!0},null,8,["modelValue","rules"])]),_:1})]),_:1}),l(C,null,{default:a(()=>[l(k,null,{default:a(()=>[l(x,{margin:"normal",required:"",name:"password",label:"Password",type:_.value?"text":"password",id:"password",autoComplete:"current-password",variant:"outlined",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=c=>n.value=c),"append-icon":_.value?"mdi:mdi-eye-off":"mdi:mdi-eye","onClick:append":e[2]||(e[2]=c=>_.value=!_.value),counter:"",hint:"At least 8 characters",rules:[p.value.required,p.value.min],clearable:!0},null,8,["type","modelValue","append-icon","rules"])]),_:1})]),_:1}),m.value?(o(),w(C,{key:0},{default:a(()=>[l(k,{class:"text-red-darken-1 font-weight-bold"},{default:a(()=>[u(y(m.value),1)]),_:1})]),_:1})):g("",!0),l(C,{justify:"space-between"},{default:a(()=>[t.variant===r(i).COMBINED||t.variant===r(i).REGISTER?(o(),w(k,{key:0,cols:"12",sm:"7",order:"2","order-sm":"1"},{default:a(()=>[l(E,{onClick:B,color:"orange-darken-2",disabled:f.value},{default:a(()=>e[4]||(e[4]=[u(" Create Account ")])),_:1},8,["disabled"])]),_:1})):g("",!0),t.variant===r(i).COMBINED||t.variant===r(i).LOGIN?(o(),w(k,{key:1,cols:"12",sm:"5",order:"1","order-sm":"2"},{default:a(()=>[l(E,{onClick:z,color:"success",disabled:f.value,type:"submit"},{default:a(()=>e[5]||(e[5]=[u(" Sign In ")])),_:1},8,["disabled"])]),_:1})):g("",!0),t.variant===r(i).ADD_CREDENTIAL?(o(),w(k,{key:2,cols:"12",sm:"6",class:"flex-grow-0"},{default:a(()=>[l(E,{onClick:B,color:"orange-darken-2",disabled:f.value},{default:a(()=>e[6]||(e[6]=[u(" Add Email ")])),_:1},8,["disabled"])]),_:1})):g("",!0)]),_:1}),t.variant===r(i).COMBINED||t.variant===r(i).LOGIN?(o(),w(h,{key:1},{default:a(()=>[l(C,null,{default:a(()=>[l(k,null,{default:a(()=>[l(E,{variant:"text",onClick:W},{default:a(()=>[u(y(r(N).buttonForgottenPassword),1)]),_:1})]),_:1})]),_:1})]),_:1})):g("",!0),t.variant===r(i).COMBINED||t.variant===r(i).LOGIN?(o(),w(h,{key:2},{default:a(()=>[l(C,null,{default:a(()=>[l(k,null,{default:a(()=>[l(E,{variant:"flat",color:"primary",onClick:$},{default:a(()=>[u(y(r(N).buttonReturnToLogin),1)]),_:1})]),_:1})]),_:1})]),_:1})):g("",!0)]),_:1},8,["disabled"])):L.value?(o(),R("p",re,y(r(N).messageResetEmail),1)):T.value?(o(),R("p",oe,y(r(N).messageVerifyNewAccountEmail),1)):I.value?(o(),R("p",se,[u(y(r(N).messageVerifiedNewAccountMessage)+" ",1),m.value?(o(),R(G,{key:0},[e[10]||(e[10]=v("br",null,null,-1)),e[11]||(e[11]=v("br",null,null,-1)),v("span",ne,[e[7]||(e[7]=u(" An error occurred creating or recovering account:")),e[8]||(e[8]=v("br",null,null,-1)),u(" "+y(m.value),1)]),e[12]||(e[12]=v("br",null,null,-1)),e[13]||(e[13]=v("br",null,null,-1)),e[14]||(e[14]=v("span",{class:"text-red-darken-4"}," Please contact registration if you require further assistance. ",-1)),v("div",ue,[l(D,{to:"/"},{default:a(()=>[l(E,{color:"red"},{default:a(()=>e[9]||(e[9]=[u("Close")])),_:1})]),_:1})])],64)):g("",!0)])):g("",!0)}}}),P=X(ie,[["__scopeId","data-v-c747a4ff"]]),Le=O({__name:"LoginWithEmailView",props:{variant:{default:()=>i.COMBINED}},emits:["pageTitle"],setup(M,{emit:b}){b("pageTitle","Email Login");const V=S(),L=Y(),I=new URL(location.href).searchParams.get("token")||"";return L&&M.variant!=="ADD_CREDENTIAL"&&!I&&(Date.now()-new Date(L.CreatedAt||"").getTime()>2e4?V.push("/"):V.push("/profile")),(s,n)=>s.variant=="ADD_CREDENTIAL"?(o(),w(h,{key:0,style:{"max-width":"550px"}},{default:a(()=>[l(le,null,{default:a(()=>[l(ee,{class:"text-center"},{default:a(()=>[l(ae,null,{default:a(()=>n[0]||(n[0]=[u("Add an E-Mail Address")])),_:1})]),_:1}),l(te,null,{default:a(()=>[l(P,{variant:s.variant},null,8,["variant"])]),_:1})]),_:1})]),_:1})):(o(),R(G,{key:1},[n[1]||(n[1]=v("h2",null,"Email",-1)),l(P,{variant:s.variant},null,8,["variant"])],64))}});export{Le as default};
