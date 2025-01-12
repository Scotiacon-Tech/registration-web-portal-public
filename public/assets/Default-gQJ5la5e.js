import{p as R,r as p,s as w,c as y,a as de,w as E,o as me,b as ge,d as B,u as fe,e as X,t as A,f as l,m as F,h as Z,i as Y,j as pe,k as q,l as z,n as V,q as k,v as i,x as ee,y as M,z as he,A as L,E as ae,_ as te,B as ye,C as Ve,D as _e,F as x,G as J,H as ke,I as le,J as oe,K as Se,L as Ce,T as be,S as Te}from"./index-CF2Ju-6D.js";import{G as Ie,R as H,a as Pe}from"./userData-HI42VA0A.js";import{u as we}from"./useAvatar-BP2C91CB.js";import{C as Re}from"./canEditOrganisation-DTNF0Mnx.js";import{G as D}from"./group-Dg_peWef.js";import{C as O}from"./canDo-Cxaqdlnl.js";import{C as Le}from"./canViewOperations-SddbbDvK.js";import{m as Be,V as K,a as Ue}from"./VToolbar-BJEjakSt.js";import{V as Ee}from"./scopeId-CxfQJphE.js";import{V as Ne}from"./VTextField-D9o11hxl.js";import{u as U,m as Ae,V as se,a as $,b as xe,c as De,d as Oe,e as W,f as He,g as ze,h as Me,i as Ge,j as Fe,k as Ye,l as $e,n as je,o as qe}from"./VContainer-CjDB9S8X.js";import{m as ne,u as re,a as ue,c as ie}from"./layout-B8rUYppX.js";import{u as Je,V as Q,a as T,b as Ke}from"./VList-BIEAt7DD.js";import{V as G,a as We}from"./forwardRefs-BF1WPbb4.js";import{V as Qe}from"./VDivider-gCxEzyof.js";import{V as Xe,a as ce}from"./VNavigationDrawer-T7dXTawO.js";import{s as Ze}from"./index-BYlZ_NAX.js";import"./useStoreAPI-DnH8aeQa.js";import"./createSimpleFunctional-wOulTUCq.js";import"./form-Gw24qjZT.js";const ea=(e,s=void 0)=>e===void 0?!1:s===void 0?O(e,D.GROUP_TYPE_CONVENTION).ManageUsers:O(e,D.GROUP_TYPE_CONVENTION,s.ConventionUUID,s).ManageUsers,aa=(e,s=void 0)=>{let t;return e===void 0?!1:(s===void 0?t=O(e,D.GROUP_TYPE_CONVENTION):t=O(e,D.GROUP_TYPE_CONVENTION,s.ConventionUUID,s),t.EditConvention||t.ManageViews||t.ViewRegistration||t.EditRegistration)},ta=R({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function la(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=s;let n=0,u=0;const a=p(null),c=w(0),o=w(0),m=w(0),v=w(!1),g=w(!1),_=y(()=>Number(e.scrollThreshold)),f=y(()=>de((_.value-c.value)/_.value||0)),d=()=>{const h=a.value;if(!h||t&&!t.value)return;n=c.value,c.value="window"in h?h.pageYOffset:h.scrollTop;const S=h instanceof Window?document.documentElement.scrollHeight:h.scrollHeight;if(u!==S){u=S;return}g.value=c.value<n,m.value=Math.abs(c.value-_.value)};return E(g,()=>{o.value=o.value||c.value}),E(v,()=>{o.value=0}),me(()=>{E(()=>e.scrollTarget,h=>{var C;const S=h?document.querySelector(h):window;S&&S!==a.value&&((C=a.value)==null||C.removeEventListener("scroll",d),a.value=S,a.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),ge(()=>{var h;(h=a.value)==null||h.removeEventListener("scroll",d)}),t&&E(t,d,{immediate:!0}),{scrollThreshold:_,currentScroll:c,currentThreshold:m,isScrollActive:v,scrollRatio:f,isScrollingUp:g,savedScroll:o}}const oa=R({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Be(),...ne(),...ta(),height:{type:[Number,String],default:64}},"VAppBar"),sa=B()({name:"VAppBar",props:oa(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const n=p(),u=fe(e,"modelValue"),a=y(()=>{var P;const r=new Set(((P=e.scrollBehavior)==null?void 0:P.split(" "))??[]);return{hide:r.has("hide"),fullyHide:r.has("fully-hide"),inverted:r.has("inverted"),collapse:r.has("collapse"),elevate:r.has("elevate"),fadeImage:r.has("fade-image")}}),c=y(()=>{const r=a.value;return r.hide||r.fullyHide||r.inverted||r.collapse||r.elevate||r.fadeImage||!u.value}),{currentScroll:o,scrollThreshold:m,isScrollingUp:v,scrollRatio:g}=la(e,{canScroll:c}),_=y(()=>a.value.hide||a.value.fullyHide),f=y(()=>e.collapse||a.value.collapse&&(a.value.inverted?g.value>0:g.value===0)),d=y(()=>e.flat||a.value.fullyHide&&!u.value||a.value.elevate&&(a.value.inverted?o.value>0:o.value===0)),h=y(()=>a.value.fadeImage?a.value.inverted?1-g.value:g.value:void 0),S=y(()=>{var b,j;if(a.value.hide&&a.value.inverted)return 0;const r=((b=n.value)==null?void 0:b.contentHeight)??0,P=((j=n.value)==null?void 0:j.extensionHeight)??0;return _.value?o.value<m.value||a.value.fullyHide?r+P:r:r+P});X(y(()=>!!e.scrollBehavior),()=>{Z(()=>{_.value?a.value.inverted?u.value=o.value>m.value:u.value=v.value||o.value<m.value:u.value=!0})});const{ssrBootStyles:C}=Je(),{layoutItemStyles:I}=re({id:e.name,order:y(()=>parseInt(e.order,10)),position:A(e,"location"),layoutSize:S,elementSize:w(void 0),active:u,absolute:A(e,"absolute")});return U(()=>{const r=K.filterProps(e);return l(K,F({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...I.value,"--v-toolbar-image-opacity":h.value,height:void 0,...C.value},e.style]},r,{collapse:f.value,flat:d.value}),t)}),{}}}),na=R({...Ae({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),ra=B()({name:"VAppBarNavIcon",props:na(),setup(e,s){let{slots:t}=s;return U(()=>l(se,F(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),ua=R({...$(),...xe(),...ue()},"VLayout"),ia=B()({name:"VLayout",props:ua(),setup(e,s){let{slots:t}=s;const{layoutClasses:n,layoutStyles:u,getLayoutItem:a,items:c,layoutRef:o}=ie(e),{dimensionStyles:m}=De(e);return U(()=>{var v;return l("div",{ref:o,class:[n.value,e.class],style:[m.value,u.value,e.style]},[(v=t.default)==null?void 0:v.call(t)])}),{getLayoutItem:a,items:c}}}),ca=Y({__name:"DashboardLayout",props:{user:{}},setup(e){const s=we(),t=pe(),n=p(!1),u=p("Default Title"),a=p(""),c=p(q(e.user)),o=p(s(c.value.UserUUID));ae.getInstance().on("user.profile.saved",C=>{c.value=q(C)});const v=p(localStorage.getItem("theme")||"light");t.global.name.value=v.value;const g=()=>{v.value=="light"?v.value="dark":v.value="light",t.global.name.value=v.value,localStorage.setItem("theme",v.value)},_=C=>{u.value=C},f=p(aa(e.user)),d=p(Le(e.user)),h=p(Re(e.user)),S=p(ea(e.user));return(C,I)=>{const r=z("RouterLink"),P=z("RouterView");return V(),k(ia,{class:"h-100"},{default:i(()=>[l(sa,{color:"blue-darken-3"},{default:i(()=>[l(Ue,null,{default:i(()=>[ee(M(u.value),1)]),_:1}),l(Ee),l(Ne,{modelValue:a.value,"onUpdate:modelValue":I[0]||(I[0]=b=>a.value=b),"prepend-inner-icon":"mdi:mdi-magnify",label:"Search",variant:"underlined","hide-details":"",clearable:!0,class:"d-none"},null,8,["modelValue"]),l(ra,{variant:"text",onClick:I[1]||(I[1]=he(b=>n.value=!n.value,["stop"]))})]),_:1}),l(Xe,{modelValue:n.value,"onUpdate:modelValue":I[2]||(I[2]=b=>n.value=b),location:"right",temporary:!0},{default:i(()=>[l(Q,null,{default:i(()=>[l(r,{to:{name:"Profile"}},{default:i(()=>[l(T,{title:c.value.DisplayName},{prepend:i(()=>[o.value?(V(),k(G,{key:0,src:o.value,class:"rounded-circle mr-2",height:"32",width:"32"},null,8,["src"])):(V(),k(Oe,{key:1,icon:"mdi:mdi-account-circle",size:"x-large"}))]),_:1},8,["title"])]),_:1})]),_:1}),l(Qe),l(P,{name:"navigation"},{default:i(()=>[l(Q,null,{default:i(()=>[l(r,{to:"/"},{default:i(()=>[l(T,{"prepend-icon":"mdi:mdi-view-dashboard-outline",title:"Home",value:"home"})]),_:1}),f.value||h.value||S.value?(V(),k(Ke,{key:0,value:"Admin"},{activator:i(({props:b})=>[l(T,F(b,{"prepend-icon":"mdi:mdi-security",title:"Admin"}),null,16)]),default:i(()=>[f.value||d.value?(V(),k(r,{key:0,to:"/admin/conventions"},{default:i(()=>[l(T,{"prepend-icon":"mdi:mdi-domain",title:"Conventions",value:"Conventions"})]),_:1})):L("",!0),h.value?(V(),k(r,{key:1,to:"/admin/organisations"},{default:i(()=>[l(T,{"prepend-icon":"mdi:mdi-store",title:"Organisations",value:"Organisations"})]),_:1})):L("",!0),S.value?(V(),k(r,{key:2,to:"/admin/groups"},{default:i(()=>[l(T,{"prepend-icon":"mdi:mdi-key-chain-variant",title:"Permissions",value:"Permissions"})]),_:1})):L("",!0)]),_:1})):L("",!0),l(r,{to:{name:"Profile"}},{default:i(()=>[l(T,{"prepend-icon":"mdi:mdi-account-circle",title:"Manage Account"})]),_:1}),l(T,{"prepend-icon":"mdi:mdi-theme-light-dark",onClick:g,title:`${v.value=="light"?"Dark":"Light"} Mode`},null,8,["title"]),l(r,{to:"/logout"},{default:i(()=>[l(T,{"prepend-icon":"mdi:mdi-logout",title:"Logout",value:"Logout"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(ce,null,{default:i(()=>[l(P,{onPageTitle:_,"logged-in":!0})]),_:1})]),_:1})}}}),va=te(ca,[["__scopeId","data-v-3dd3a779"]]),da="/assets/graze-logo-R84bxePu.svg";let N;async function ve(){const e=ye(),s=new URL(window.location.href);if(N)return N;try{return N=await e.getOrganisation(s.host),N}catch{return}}const ma=Y({__name:"LoginLayout",async setup(e){let s,t;const n=p();return n.value=([s,t]=Ve(()=>ve()),s=await s,t(),s),(u,a)=>{const c=z("RouterView");return V(),_e(ke,null,[l(W,{class:"logo-container text-center"},{default:i(()=>{var o;return[n.value&&n.value.Logo?(V(),k(G,{key:0,src:n.value.Logo,class:"graze-logo ma-auto"},null,8,["src"])):(V(),k(G,{key:1,src:x(da),class:"graze-logo ma-auto"},null,8,["src"])),J("h1",null,M(((o=n.value)==null?void 0:o.Name)||"Graze")+" Registration System",1)]}),_:1}),l(W,{class:"login-container text-center mb-0 rounded rounded-lg mb-md-10"},{default:i(()=>[l(We,null,{default:i(()=>[l(se,{class:"ma-2",color:"indigo",icon:"mdi:mdi-lock-outline"})]),_:1}),J("h2",null,M(x(Ze).headingSignIn),1),l(c,{"logged-in":!1})]),_:1})],64)}}}),ga=te(ma,[["__scopeId","data-v-a2e80a73"]]),fa=R({...$(),...ue({fullHeight:!0}),...le()},"VApp"),pa=B()({name:"VApp",props:fa(),setup(e,s){let{slots:t}=s;const n=oe(e),{layoutClasses:u,getLayoutItem:a,items:c,layoutRef:o}=ie(e),{rtlClasses:m}=Se();return U(()=>{var v;return l("div",{ref:o,class:["v-application",n.themeClasses.value,u.value,m.value,e.class],style:[e.style]},[l("div",{class:"v-application__wrap"},[(v=t.default)==null?void 0:v.call(t)])])}),{getLayoutItem:a,items:c,theme:n}}}),ha=R({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...He(),...$(),...ze(),...ne(),...Me(),...Ge({tag:"footer"}),...le()},"VFooter"),ya=B()({name:"VFooter",props:ha(),setup(e,s){let{slots:t}=s;const n=p(),{themeClasses:u}=oe(e),{backgroundColorClasses:a,backgroundColorStyles:c}=Fe(A(e,"color")),{borderClasses:o}=Ye(e),{elevationClasses:m}=$e(e),{roundedClasses:v}=je(e),g=w(32),{resizeRef:_}=qe(d=>{d.length&&(g.value=d[0].target.clientHeight)}),f=y(()=>e.height==="auto"?g.value:parseInt(e.height,10));return X(()=>e.app,()=>{const d=re({id:e.name,order:y(()=>parseInt(e.order,10)),position:y(()=>"bottom"),layoutSize:f,elementSize:y(()=>e.height==="auto"?void 0:f.value),active:y(()=>e.app),absolute:A(e,"absolute")});Z(()=>{n.value=d.layoutItemStyles.value})}),U(()=>l(e.tag,{ref:_,class:["v-footer",u.value,a.value,o.value,m.value,v.value,e.class],style:[c.value,e.app?n.value:{height:Ce(e.height)},e.style]},t)),{}}}),Ha=Y({__name:"Default",emits:["pageTitle"],setup(e,{emit:s}){let t=Ie();const n=be.getInstance(),u=n.getTokenByService("GrazeAPI"),a=p(!1),c=p(!1),o=p(!1),m=p();ve().then(f=>{if(m.value=f,m.value&&m.value.CSS){const d=document.createElement("style");d.textContent=m.value.CSS,document.head.appendChild(d)}c.value=!0});const v=s,g=ae.getInstance();g.on("login",f=>{t=f,a.value=!0}),g.on("logout",()=>{t=void 0,a.value=!1}),g.on("tokenManager.tokenUpdated",()=>{a.value=!0,o.value=!0}),g.on("tokenManager.sessionExpired",()=>{a.value=!1,o.value=!1,H(),location.reload()}),u?t?u.AccessExpires<=Date.now()&&u.RefreshExpires>Date.now()?n.refreshToken(u):u.AccessExpires>Date.now()?(H(),a.value=!1,o.value=!0):(a.value=!0,o.value=!0):Pe().then(f=>{t=f,a.value=!0,o.value=!0}).catch(()=>{a.value=!1,o.value=!0}):(H(),a.value=!1,o.value=!0);const _=f=>{v("pageTitle",f)};return(f,d)=>(V(),k(Te,null,{default:i(()=>[l(pa,{class:"bg-image"},{default:i(()=>[c.value&&o.value?(V(),k(ce,{key:0},{default:i(()=>[a.value&&x(t)?(V(),k(va,{key:0,user:x(t),onPageTitle:_},null,8,["user"])):(V(),k(ga,{key:1}))]),_:1})):L("",!0),l(ya,null,{default:i(()=>d[0]||(d[0]=[ee(" Powered by Graze ")])),_:1})]),_:1})]),_:1}))}});export{Ha as default};
