import{p as Se,d as Ae,ab as He,t as N,c as S,s as re,ad as Le,f as t,L as Y,m as K,i as M,R as X,r as V,C as Be,a0 as Fe,n as h,D as q,v as o,x,q as H,G as E,y as J,A as $,H as Z,P as ee,N as W,M as Ge,w as Me,V as We,Q as $e}from"./index-IGHK8Qq6.js";import{u as te}from"./useConventionSlug-D2aMVGI6.js";import{V as O,a as _}from"./VRow-DKLm3-CI.js";import{m as Oe,u as qe,a as Qe,V as pe}from"./VSelect-DldCXGiZ.js";import{V as fe}from"./scopeId-SfFrtoCY.js";import{u as ze,V as P,e as ie,p as ge}from"./VContainer-DVyMZYok.js";import{b as je,s as Ye,d as Ke,e as Je,g as Xe,u as Ze,p as et,h as tt,t as at,j as lt,k as ot,l as st,n as nt,q as ue,r as me,v as rt,V as it}from"./VDataTable-B9l4cNlf.js";import{m as ut,u as mt}from"./filter-BCebrfcB.js";import{V as de}from"./VTable-QIuEyEQp.js";import{e as ae,V as dt,a as ct,c as vt}from"./VCard-DysSp6rR.js";import{T as pt}from"./targetType-BYfQr9gB.js";import{u as ft}from"./useEmailTemplates-B6DqkQNN.js";import{_ as gt}from"./ModelDialog.vue_vue_type_script_setup_true_lang-PbbOcdo8.js";import{_ as Vt}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as ce,V as yt}from"./forwardRefs-UD7MkBSD.js";import{b as Tt}from"./SaveButton.vue_vue_type_script_setup_true_lang-o_da8H1G.js";import{V as bt}from"./VList-BWTocK-a.js";import{V as xt}from"./VSheet-BBey2emD.js";import{a as kt,b as ve,c as wt,V as ht}from"./VTabs-DFWpad6C.js";import{V as Ut}from"./VToolbar-jW1ePQJ_.js";import"./VTextField--8gTq0jP.js";import"./form-B9-UAC5v.js";import"./VChip-Dsp3EZed.js";import"./createSimpleFunctional-U7UJ07yh.js";import"./VDivider-iB9h9uO_.js";import"./permission-Ba-8wP-4.js";import"./VDialog-DHWHT_bI.js";const Dt=Se({...je(),...Ye(),...Oe(),...ut()},"VDataTableVirtual"),Rt=Ae()({name:"VDataTableVirtual",props:Dt(),emits:{"update:modelValue":l=>!0,"update:sortBy":l=>!0,"update:options":l=>!0,"update:groupBy":l=>!0,"update:expanded":l=>!0},setup(l,T){let{attrs:k,slots:s}=T;const{groupBy:m}=Ke(l),{sortBy:d,multiSort:v,mustSort:i}=Je(l),{disableSort:g}=He(l),{columns:p,headers:U,filterFunctions:y,sortFunctions:c,sortRawFunctions:r}=Xe(l,{groupBy:m,showSelect:N(l,"showSelect"),showExpand:N(l,"showExpand")}),{items:u}=Ze(l,p),D=N(l,"search"),{filteredItems:L}=mt(l,u,D,{transform:w=>w.columns,customKeyFilter:y}),{toggleSort:B}=et({sortBy:d,multiSort:v,mustSort:i}),{sortByWithGroups:f,opened:a,extractRows:e,isGroupOpen:n,toggleGroup:b}=tt({groupBy:m,sortBy:d,disableSort:g}),{sortedItems:Q}=at(l,L,f,{transform:w=>({...w.raw,...w.columns}),sortFunctions:c,sortRawFunctions:r}),{flatItems:C}=lt(Q,m,a),R=S(()=>e(C.value)),{isSelected:F,select:z,selectAll:Ve,toggleSelect:ye,someSelected:Te,allSelected:be}=ot(l,{allItems:R,currentPage:R}),{isExpanded:xe,toggleExpand:ke}=st(l),{containerRef:we,markerRef:he,paddingTop:Ue,paddingBottom:De,computedItems:Re,handleItemResize:Ie,handleScroll:Ee,handleScrollend:Ce}=qe(l,C),Ne=S(()=>Re.value.map(w=>w.raw));nt({sortBy:d,page:re(1),itemsPerPage:re(-1),groupBy:m,search:D}),Le({VDataTableRows:{hideNoData:N(l,"hideNoData"),noDataText:N(l,"noDataText"),loading:N(l,"loading"),loadingText:N(l,"loadingText")}});const G=S(()=>({sortBy:d.value,toggleSort:B,someSelected:Te.value,allSelected:be.value,isSelected:F,select:z,selectAll:Ve,toggleSelect:ye,isExpanded:xe,toggleExpand:ke,isGroupOpen:n,toggleGroup:b,items:R.value.map(w=>w.raw),internalItems:R.value,groupedItems:C.value,columns:p.value,headers:U.value}));ze(()=>{const w=ue.filterProps(l),_e=me.filterProps(l),Pe=de.filterProps(l);return t(de,K({class:["v-data-table",{"v-data-table--loading":l.loading},l.class],style:l.style},Pe,{fixedHeader:l.fixedHeader||l.sticky}),{top:()=>{var I;return(I=s.top)==null?void 0:I.call(s,G.value)},wrapper:()=>{var I,le,oe;return t("div",{ref:we,onScrollPassive:Ee,onScrollend:Ce,class:"v-table__wrapper",style:{height:Y(l.height)}},[t("table",null,[(I=s.colgroup)==null?void 0:I.call(s,G.value),!l.hideDefaultHeader&&t("thead",{key:"thead"},[t(ue,w,s)]),!l.hideDefaultBody&&t("tbody",null,[t("tr",{ref:he,style:{height:Y(Ue.value),border:0}},[t("td",{colspan:p.value.length,style:{height:0,border:0}},null)]),(le=s["body.prepend"])==null?void 0:le.call(s,G.value),t(me,K(k,_e,{items:Ne.value}),{...s,item:A=>t(Qe,{key:A.internalItem.index,renderless:!0,"onUpdate:height":j=>Ie(A.internalItem.index,j)},{default:j=>{var ne;let{itemRef:se}=j;return((ne=s.item)==null?void 0:ne.call(s,{...A,itemRef:se}))??t(rt,K(A.props,{ref:se,key:A.internalItem.index,index:A.internalItem.index}),s)}})}),(oe=s["body.append"])==null?void 0:oe.call(s,G.value),t("tr",{style:{height:Y(De.value),border:0}},[t("td",{colspan:p.value.length,style:{height:0,border:0}},null)])])])])},bottom:()=>{var I;return(I=s.bottom)==null?void 0:I.call(s,G.value)}})})}}),It=M({__name:"HotelReport",emits:["pageTitle"],async setup(l,{emit:T}){let k,s;T("pageTitle","Reports");const d=ee(),v=X(),i=V([]),g=V(),p=V([]);try{const f=([k,s]=Be(()=>te()),k=await k,s(),k);f&&(d.getHotelReport(f.ConventionUUID).then(a=>{i.value=a}),d.getConventionVenues(f.ConventionUUID).then(a=>{p.value=a}))}catch{v.push("/")}const U=S(()=>[{title:"First Name",align:"start",key:"FirstName"},{title:"Last Name",align:"start",key:"LastName"},{title:"Address",align:"start",key:"Address"},{title:"Room Partners",align:"start",key:"Guests"},{title:"Venue",align:"start",key:"Venue"},{title:"Room Type",align:"start",key:"RoomType"},{title:"Arrival",align:"start",key:"ArrivalDay"},{title:"Departure",align:"start",key:"DepartureDay"}]),y=S(()=>{const f=[];return i.value.forEach(a=>{g.value&&a.Venue!=g.value||a.Guests.forEach((e,n)=>{const b={FirstName:"",LastName:"",Guests:"",Address:"",Venue:"",Accommodation:"",RoomType:"",ArrivalDay:"",DepartureDay:""};b.FirstName=e.FirstName,b.LastName=e.LastName,b.Address=e.Address;const Q=a.Guests.filter((F,z)=>z!==n);let C="";Q.forEach(F=>{C+=F.FirstName+" "+F.LastName+","}),b.Guests=C.substring(0,C.length-1),b.Venue=a.Venue;const R=a.Accommodation.match(/\((.*?)\)/);R&&R.length>=1&&(b.Accommodation=R[1]),b.RoomType=a.RoomType,b.ArrivalDay=a.Days[0],b.DepartureDay=a.Days[a.Days.length-1],f.push(b)})}),f}),c=Fe("reportTable"),r="data:application/vnd.ms-excel;base64,",u='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><?xml version="1.0" encoding="UTF-8" standalone="yes"?><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',D=function(f){return btoa(unescape(encodeURIComponent(f)))},L=function(f,a){return f.replace(/{(\w+)}/g,function(e,n){return a[n]})},B=f=>{var e;const a=(e=c.value)==null?void 0:e.getElementsByTagName("table")[0];if(a){const n={worksheet:f,table:a.innerHTML};window.location.href=r+D(L(u,n))}};return(f,a)=>i.value.length>0&&p.value.length>0?(h(),q(Z,{key:0},[t(ie,{fluid:""},{default:o(()=>[t(O,null,{default:o(()=>[t(_,{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"},{default:o(()=>[t(pe,{modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value=e),label:"Venue",items:p.value,"item-value":"Name","item-title":"Name",clearable:"",variant:"outlined","hide-details":""},null,8,["modelValue","items"])]),_:1}),t(fe),t(_,{cols:"12",sm:"5",md:"3",lg:"2",xl:"2",class:"text-right"},{default:o(()=>[t(P,{onClick:a[1]||(a[1]=e=>B("Hotel Report")),color:"primary","prepend-icon":"mdi:mdi-table",class:"w-100 w-sm-auto"},{default:o(()=>a[2]||(a[2]=[x(" Download Excel ")])),_:1})]),_:1})]),_:1})]),_:1}),y.value?(h(),H(ae,{key:0,class:"pa-2"},{default:o(()=>[E("div",{ref_key:"reportTable",ref:c},[t(Rt,{headers:U.value,items:y.value,"items-length":y.value.length},{"item.RoomType":o(({item:e})=>[x(J(e.RoomType)+" ",1),a[3]||(a[3]=E("br",null,null,-1)),x(" ("+J(e.Accommodation)+") ",1)]),_:2},1032,["headers","items","items-length"])],512)]),_:1})):$("",!0)],64)):(h(),H(ie,{key:1},{default:o(()=>[t(O,null,{default:o(()=>[t(_,{class:"text-center"},{default:o(()=>[t(ge,{indeterminate:"",color:"primary",size:"100",width:"10"},{default:o(()=>a[4]||(a[4]=[x(" Loading ")])),_:1})]),_:1})]),_:1})]),_:1}))}}),Et=["innerHTML"],Ct=M({__name:"EmailPreviewWindow",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(l){const T=W(l,"modelValue");return(k,s)=>(h(),q("div",{innerHTML:T.value,class:"reset-styles"},null,8,Et))}}),Nt=Vt(Ct,[["__scopeId","data-v-662b87a6"]]),_t={class:"d-flex align-center justify-center",style:{width:"calc(100vw - 25px)",height:"100vh"}},Pt=M({__name:"EmailControl",props:Ge({modelType:{default:"user"}},{modelValue:{default:[]},modelModifiers:{},convention:{required:!1,default:async()=>await te()},conventionModifiers:{},organisation:{required:!1,default:void 0},organisationModifiers:{}}),emits:["update:modelValue","update:convention","update:organisation"],setup(l){const T=ee(),{getEmailTemplateList:k}=ft(),s=V([]),m=V(),d=W(l,"modelValue"),v=W(l,"convention"),i=W(l,"organisation"),g=V(0),p=V([]),U=V(!1),y=V(!1),c=V(0),r=V(0),u=()=>{var a,e;k(pt.TARGET_TYPE_CONVENTION,((a=i.value)==null?void 0:a.OrganisationUUID)||null,((e=v.value)==null?void 0:e.ConventionUUID)||null).then(n=>{s.value=n})};Me(v,()=>{u()}),u();const D=a=>{var n;const e={};return l.modelType=="registration"?e.RegistrationUUID=a:l.modelType=="submission"?e.SubmissionUUID=a:e.UserUUID=a,v.value&&(e.ConventionUUID=v.value.ConventionUUID),i.value&&(e.OrganisationUUID=i.value.OrganisationUUID),m.value&&(m.value.IsDefault?e.TemplateName=m.value.Name:((n=m.value)==null?void 0:n.EmailTemplateUUID)!==We?e.TemplateUUID=m.value.EmailTemplateUUID:e.Template=m.value),e},L=()=>{p.value=[],d.value.forEach(a=>{const e=D(a);T.previewEmailTemplate(e).then(n=>{p.value.push(n)})}),U.value=!0};function B(a){return new Promise(e=>setTimeout(e,a))}const f=async()=>{y.value=!0,c.value=0,r.value=0;for(const a of d.value){const e=D(a);await T.sendEmailTemplate(e),await B(50),c.value+=1,r.value=c.value/d.value.length*100}y.value=!1};return(a,e)=>d.value.length>0?(h(),q(Z,{key:0},[t(O,null,{default:o(()=>[t(_,null,{default:o(()=>e[7]||(e[7]=[E("h2",null,"E-Mail",-1),E("p",null," Select an e-mail template to send bulk e-mails to selected registrations. You may preview what is sent before queuing it. ",-1)])),_:1})]),_:1}),t(O,null,{default:o(()=>[t(_,{cols:"12",sm:"7"},{default:o(()=>[t(pe,{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=n=>m.value=n),items:s.value,"item-value":n=>n,"item-title":"Title","hide-details":"",clearable:""},null,8,["modelValue","items","item-value"])]),_:1}),t(_,{cols:"6",sm:"3"},{default:o(()=>[t(P,{color:"primary",disabled:!m.value,onClick:L,class:"w-100"},{default:o(()=>e[8]||(e[8]=[x(" Preview ")])),_:1},8,["disabled"])]),_:1}),t(_,{cols:"6",sm:"2",class:"text-right text-sm-left"},{default:o(()=>[t(P,{color:"success",disabled:!m.value,onClick:f,class:"w-100"},{default:o(()=>e[9]||(e[9]=[x(" Send ")])),_:1},8,["disabled"])]),_:1})]),_:1}),t(Tt,{modelValue:y.value,"onUpdate:modelValue":e[2]||(e[2]=n=>y.value=n),"scroll-strategy":"block","location-strategy":"static","close-on-content-click":!1},{default:o(()=>[E("div",_t,[e[12]||(e[12]=x(" > ")),t(ae,{class:"ma-0",bordered:""},{default:o(()=>[t(dt,null,{default:o(()=>[t(ct,{class:"text-center"},{default:o(()=>e[10]||(e[10]=[E("small",null,"Sending Emails",-1)])),_:1})]),_:1}),t(vt,{class:"text-center"},{default:o(()=>[t(ge,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=n=>r.value=n),color:"error",size:"60",width:"8"},null,8,["modelValue"]),e[11]||(e[11]=E("p",{class:"my-4"}," Navigating away will prevent emails from sending. ",-1))]),_:1})]),_:1})])]),_:1},8,["modelValue"]),t(gt,{modelValue:U.value,"onUpdate:modelValue":e[6]||(e[6]=n=>U.value=n),fullscreen:!1,"hide-details":!0,title:"Email Preview",scrollable:!0},{actions:o(()=>[t(ce,null,{default:o(()=>[t(P,{color:"primary",disabled:g.value==0,onClick:e[3]||(e[3]=n=>g.value-=1)},{default:o(()=>e[13]||(e[13]=[x(" Previous ")])),_:1},8,["disabled"])]),_:1}),t(fe),t(ce,null,{default:o(()=>[t(P,{color:"primary",disabled:g.value==p.value.length-1,onClick:e[4]||(e[4]=n=>g.value+=1)},{default:o(()=>e[14]||(e[14]=[x(" Next ")])),_:1},8,["disabled"])]),_:1})]),default:o(()=>[p.value.length>0&&p.value[g.value]?(h(),H(Nt,{key:0,modelValue:p.value[g.value].HTML,"onUpdate:modelValue":e[5]||(e[5]=n=>p.value[g.value].HTML=n)},null,8,["modelValue"])):$("",!0)]),_:1},8,["modelValue"])],64)):$("",!0)}}),St={class:"flex-grow-1"},At=M({__name:"TicketReport",emits:["pageTitle"],setup(l,{emit:T}){T("pageTitle","Reports");const s=ee(),m=X(),d=V(),v=V([]),i=V([]),g=V(!0),p=()=>{try{te().then(c=>{c&&(d.value=c,s.getTicketReport(d.value.ConventionUUID).then(r=>{v.value=r,g.value=!1}))})}catch{m.push("/")}},U=S(()=>[{title:"",align:"start",key:"checkbox"},{title:"Reference",align:"start",key:"Reference"},{title:"Name",align:"start",key:"Name"},{title:"Ticket",align:"start",key:"Ticket"},{title:"QR Code",align:"start",key:"QRCode"}]),y=S(()=>v.value?v.value.map(c=>({RegistrationUUID:c.RegistrationUUID,Reference:c.Reference,Name:c.Name,Ticket:c.Ticket.map(u=>u.Name),QRCode:c.QRCode})):[]);return p(),(c,r)=>d.value&&v.value?(h(),H(ae,{key:0,class:"pa-2"},{default:o(()=>[t(it,{modelValue:i.value,"onUpdate:modelValue":r[2]||(r[2]=u=>i.value=u),headers:U.value,items:y.value,"item-value":"RegistrationUUID","show-select":"",loading:g.value},{"item.Ticket":o(({item:u})=>[t(bt,{items:u.Ticket},null,8,["items"])]),"item.QRCode":o(({item:u})=>[t(yt,{src:u.QRCode,alt:u.Reference},null,8,["src","alt"])]),"footer.prepend":o(()=>[E("div",St,[t(P,{variant:"text",color:"primary",onClick:r[0]||(r[0]=u=>i.value=y.value.map(D=>D.RegistrationUUID))},{default:o(()=>r[5]||(r[5]=[x(" (Select all on every page) ")])),_:1}),t(P,{variant:"text",color:"primary",onClick:r[1]||(r[1]=u=>i.value=[])},{default:o(()=>r[6]||(r[6]=[x(" (Unselect all on every page) ")])),_:1})])]),_:2},1032,["modelValue","headers","items","loading"]),t(Pt,{modelValue:i.value,"onUpdate:modelValue":r[3]||(r[3]=u=>i.value=u),"model-type":"registration",convention:d.value,"onUpdate:convention":r[4]||(r[4]=u=>d.value=u)},null,8,["modelValue","convention"])]),_:1})):$("",!0)}}),ua=M({__name:"Reports",emits:["pageTitle"],setup(l,{emit:T}){T("pageTitle","Reports"),X();const s=V("Hotel"),m=V(["Hotel","Tickets"]);return(d,v)=>(h(),H(xt,null,{default:o(()=>[t(Ut,{color:"blue-darken-4"},{default:o(()=>[t(kt,{modelValue:s.value,"onUpdate:modelValue":v[0]||(v[0]=i=>s.value=i),"show-arrows":""},{default:o(()=>[(h(!0),q(Z,null,$e(m.value,i=>(h(),H(ht,null,{default:o(()=>[x(J(i),1)]),_:2},1024))),256))]),_:1},8,["modelValue"])]),_:1}),t(wt,{modelValue:s.value,"onUpdate:modelValue":v[1]||(v[1]=i=>s.value=i)},{default:o(()=>[t(ve,{value:"Hotel"},{default:o(()=>[t(It)]),_:1}),t(ve,{value:"Tickets"},{default:o(()=>[t(At)]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{ua as default};
