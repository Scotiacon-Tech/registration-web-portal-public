import{i as S,r as v,j as Q,F as y,q as V,v as a,z as X,a1 as U,B as r,y as C,x as o,H as $,G as f,f as l,A as k,R as z,P as Y,l as ee,n as s}from"./index-CFtvHSTm.js";import{s as I}from"./index-fwfMqYug.js";import{S as P}from"./setupLogin-BqXuPjtD.js";import{E as i}from"./emailFormVariant-DbFKH7n9.js";import{V as ae}from"./VForm-DnafOqDq.js";import{V as E,e as M}from"./VContainer-DVuJuxYL.js";import{a as w,V as A}from"./VRow-B5XYH6t3.js";import{V as G}from"./VTextField-C8wqxUU0.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{G as te}from"./userData-nHAF7FK7.js";import{V as le,a as re,c as se,e as oe}from"./VCard-C6Kp5wh0.js";import"./form-BjYlemnI.js";import"./forwardRefs-CXA_Io71.js";import"./createSimpleFunctional-Qmnwq4y5.js";const ne={key:0,class:"ma-auto text-left"},ue={key:1,class:"ma-auto text-left"},ie={key:2,class:"ma-auto text-left"},de={class:"text-red-darken-1 font-weight-bold"},me={class:"text-center mt-4"},ve={class:"pt-4 text-center"},fe=S({__name:"EmailLoginForm",props:{variant:{default:()=>i.COMBINED}},setup(T){const L=z(),D=Y(),c=v(!0),b=v(!1),_=v(!1),N=v(!1),n=v(""),u=v(""),h=v(!1),g=v({required:t=>!!t||"Required.",min:t=>t.length>=8||"Min 8 characters",email:t=>!!t.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||"Valid email address required"}),d=v(""),m=v(!1),B=new URL(location.href).searchParams.get("token")||"";B!==""&&(c.value=!1,N.value=!0,D.validateAccount(B,T.variant).then(({created:t,tokens:e,user:R})=>{try{P(e,R,L,t)}catch(p){console.error(p)}}).catch(t=>{console.error(t),d.value=t.ErrorMessage}));const F=Q(),q=()=>(d.value="",!(g.value.required(n.value)!==!0||g.value.email(n.value)!==!0||g.value.required(u.value)!==!0||g.value.min(u.value)!==!0)),j=t=>{if(t.preventDefault(),!q())return;const R=new URL(location.href).searchParams.get("state");m.value=!0,D.oAuthLogin("internal",n.value,u.value,R||"").then(({created:p,tokens:J,user:K})=>{P(J,K,L,p)}).catch(()=>{d.value="Login failed, check credentials, try another login method or create account",m.value=!1})},x=t=>{t.preventDefault(),q()&&(m.value=!0,D.registerAccount(n.value,u.value).then(e=>{c.value=!1,e&&(_.value=!0)}).catch(()=>{d.value="Unable to register, address may be in use",m.value=!1}))},Z=()=>{D.requestLoginLink(n.value).then(t=>{c.value=!1,t&&(b.value=!0)}).catch(()=>{d.value="A problem was encountered, please try again",m.value=!1})},H=()=>{L.back()};return(t,e)=>{const R=ee("router-link");return s(),y("div",null,[c.value?(s(),V(ae,{key:0,onSubmit:e[3]||(e[3]=X(()=>{},["stop"])),class:U(`ma-auto vForm pa-3 rounded-lg theme-${r(F).global.name.value}`),disabled:m.value},{default:a(()=>[l(A,null,{default:a(()=>[l(w,null,{default:a(()=>[l(G,{margin:"normal",required:"",id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:"",variant:"outlined",modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=p=>n.value=p),rules:[g.value.required,g.value.email],clearable:!0},null,8,["modelValue","rules"])]),_:1})]),_:1}),l(A,null,{default:a(()=>[l(w,null,{default:a(()=>[l(G,{margin:"normal",required:"",name:"password",label:"Password",type:h.value?"text":"password",id:"password",autoComplete:"current-password",variant:"outlined",modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=p=>u.value=p),"append-icon":h.value?"mdi:mdi-eye-off":"mdi:mdi-eye","onClick:append":e[2]||(e[2]=p=>h.value=!h.value),counter:"",hint:"At least 8 characters",rules:[g.value.required,g.value.min],clearable:!0},null,8,["type","modelValue","append-icon","rules"])]),_:1})]),_:1}),d.value?(s(),V(A,{key:0},{default:a(()=>[l(w,{class:"text-red-darken-1 font-weight-bold"},{default:a(()=>[o(C(d.value),1)]),_:1})]),_:1})):k("",!0),l(A,{justify:"space-between"},{default:a(()=>[t.variant===r(i).COMBINED||t.variant===r(i).REGISTER?(s(),V(w,{key:0,cols:"12",sm:"7",order:"2","order-sm":"1"},{default:a(()=>[l(E,{onClick:x,color:"orange-darken-2",disabled:m.value},{default:a(()=>e[5]||(e[5]=[o(" Create Account ")])),_:1},8,["disabled"])]),_:1})):k("",!0),t.variant===r(i).COMBINED||t.variant===r(i).LOGIN?(s(),V(w,{key:1,cols:"12",sm:"5",order:"1","order-sm":"2"},{default:a(()=>[l(E,{onClick:j,color:"success",disabled:m.value,type:"submit"},{default:a(()=>e[6]||(e[6]=[o(" Sign In ")])),_:1},8,["disabled"])]),_:1})):k("",!0),t.variant===r(i).ADD_CREDENTIAL?(s(),V(w,{key:2,cols:"12",sm:"6",class:"flex-grow-0"},{default:a(()=>[l(E,{onClick:x,color:"orange-darken-2",disabled:m.value},{default:a(()=>e[7]||(e[7]=[o(" Add Email ")])),_:1},8,["disabled"])]),_:1})):k("",!0)]),_:1}),t.variant===r(i).COMBINED||t.variant===r(i).LOGIN?(s(),V(M,{key:1},{default:a(()=>[l(A,null,{default:a(()=>[l(w,null,{default:a(()=>[l(E,{variant:"text",onClick:Z},{default:a(()=>[o(C(r(I).buttonForgottenPassword),1)]),_:1})]),_:1})]),_:1})]),_:1})):k("",!0),t.variant===r(i).COMBINED||t.variant===r(i).LOGIN?(s(),V(M,{key:2},{default:a(()=>[l(A,null,{default:a(()=>[l(w,null,{default:a(()=>[l(E,{variant:"flat",color:"primary",onClick:H},{default:a(()=>[o(C(r(I).buttonReturnToLogin),1)]),_:1})]),_:1})]),_:1})]),_:1})):k("",!0)]),_:1},8,["class","disabled"])):(s(),y("div",{key:1,class:U(`ma-auto vForm pa-3 rounded-lg theme-${r(F).global.name.value}`)},[b.value?(s(),y("p",ne,C(r(I).messageResetEmail),1)):_.value?(s(),y("p",ue,C(r(I).messageVerifyNewAccountEmail),1)):N.value?(s(),y("p",ie,[o(C(r(I).messageVerifiedNewAccountMessage)+" ",1),d.value?(s(),y($,{key:0},[e[11]||(e[11]=f("br",null,null,-1)),e[12]||(e[12]=f("br",null,null,-1)),f("span",de,[e[8]||(e[8]=o(" An error occurred creating or recovering account:")),e[9]||(e[9]=f("br",null,null,-1)),o(" "+C(d.value),1)]),e[13]||(e[13]=f("br",null,null,-1)),e[14]||(e[14]=f("br",null,null,-1)),e[15]||(e[15]=f("span",{class:"text-red-darken-4"}," Please contact registration if you require further assistance. ",-1)),f("div",me,[l(R,{to:"/"},{default:a(()=>[l(E,{color:"red"},{default:a(()=>e[10]||(e[10]=[o("Close")])),_:1})]),_:1})])],64)):k("",!0)])):k("",!0),f("p",ve,[l(E,{color:"primary",onClick:e[4]||(e[4]=p=>{c.value=!0,m.value=!1,b.value=!1,_.value=!1,N.value=!1,d.value=""})},{default:a(()=>e[16]||(e[16]=[o(" Go Back ")])),_:1})])],2))])}}}),O=W(fe,[["__scopeId","data-v-c82a18ee"]]),pe=S({__name:"LoginWithEmailView",props:{variant:{default:()=>i.COMBINED}},emits:["pageTitle"],setup(T,{emit:L}){L("pageTitle","Email Login");const c=z(),b=te(),N=new URL(location.href).searchParams.get("token")||"";return b&&T.variant!=="ADD_CREDENTIAL"&&!N&&(Date.now()-new Date(b.CreatedAt||"").getTime()>2e4?c.push("/"):c.push("/profile")),(n,u)=>(s(),y("div",null,[n.variant=="ADD_CREDENTIAL"?(s(),V(M,{key:0,style:{"max-width":"550px"}},{default:a(()=>[l(oe,null,{default:a(()=>[l(le,{class:"text-center"},{default:a(()=>[l(re,null,{default:a(()=>u[0]||(u[0]=[o("Add an E-Mail Address")])),_:1})]),_:1}),l(se,null,{default:a(()=>[l(O,{variant:n.variant},null,8,["variant"])]),_:1})]),_:1})]),_:1})):(s(),y($,{key:1},[u[1]||(u[1]=f("h2",null,"Email",-1)),l(O,{variant:n.variant},null,8,["variant"])],64))]))}}),_e=W(pe,[["__scopeId","data-v-c311e024"]]);export{_e as default};
