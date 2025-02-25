import{p as Be,d as Ae,a9 as Fe,t as _,c as D,s as ie,ab as Pe,f as e,K,m as j,i as $,Q,r as g,C as Ge,$ as He,n as I,D as Y,v as a,x as T,q as B,G as L,y as W,A as Z,H as ee,O as te,F as ue,P as Le}from"./index-DENv-6ek.js";import{u as ae,_ as pe,C as We,a as $e}from"./EmailControl.vue_vue_type_script_setup_true_lang-BTLATH9A.js";import{V as J,a as H}from"./VRow-CgC15cy2.js";import{m as Qe,u as Oe,a as qe,V as ve}from"./VSelect-CIxsqdRm.js";import{V as ze}from"./VSpacer-DSZh9W7-.js";import{u as Ke,V as G,o as je}from"./VGrid-CsooJMTR.js";import{V as X}from"./VContainer-DezIske0.js";import{b as Me,s as Je,d as Xe,e as Ye,g as Ze,u as et,p as tt,h as at,t as lt,j as ot,k as nt,l as st,n as rt,q as me,r as de,v as it,V as fe}from"./VDataTable-vc-wQ39f.js";import{m as ut,u as mt}from"./filter-Cn_goM81.js";import{V as ce}from"./VTable-EmYaaGHA.js";import{e as le}from"./VCard-04V4fyMm.js";import{V as ge}from"./VList-CVZnOlNF.js";import{V as dt}from"./forwardRefs-C4lcbeSM.js";import{V as ct}from"./VSheet-ChBUElla.js";import{a as pt,b as M,c as vt,V as ft}from"./VTabs-0qfNOj5z.js";import{V as gt}from"./VToolbar-xQiqrbiH.js";import"./useEmailTemplates-DYhRpGpy.js";import"./permission-Ba-8wP-4.js";import"./ModelDialog.vue_vue_type_script_setup_true_lang-Brlaa_Cb.js";import"./SaveButton.vue_vue_type_script_setup_true_lang-DhtyVEQs.js";import"./VOverlay-B92LzKyd.js";import"./scopeId-D85Kk5D2.js";import"./VDialog-xOwSGzEP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VAlert-CUBtmXGx.js";import"./createSimpleFunctional-l-ioYdIC.js";import"./VTextField-Bj0dmDps.js";import"./form-Di5S9nTK.js";import"./VChip-Cv-bSrD6.js";import"./VDivider-BTnXzT4M.js";const yt=Be({...Me(),...Je(),...Qe(),...ut()},"VDataTableVirtual"),kt=Ae()({name:"VDataTableVirtual",props:yt(),emits:{"update:modelValue":t=>!0,"update:sortBy":t=>!0,"update:options":t=>!0,"update:groupBy":t=>!0,"update:expanded":t=>!0},setup(t,b){let{attrs:R,slots:l}=b;const{groupBy:h}=Xe(t),{sortBy:m,multiSort:d,mustSort:i}=Ye(t),{disableSort:y}=Fe(t),{columns:v,headers:U,filterFunctions:k,sortFunctions:c,sortRawFunctions:r}=Ze(t,{groupBy:h,showSelect:_(t,"showSelect"),showExpand:_(t,"showExpand")}),{items:o}=et(t,v),n=_(t,"search"),{filteredItems:u}=mt(t,o,n,{transform:x=>x.columns,customKeyFilter:k}),{toggleSort:A}=tt({sortBy:m,multiSort:d,mustSort:i}),{sortByWithGroups:p,opened:s,extractRows:f,isGroupOpen:N,toggleGroup:V}=at({groupBy:h,sortBy:m,disableSort:y}),{sortedItems:O}=lt(t,u,p,{transform:x=>({...x.raw,...x.columns}),sortFunctions:c,sortRawFunctions:r}),{flatItems:S}=ot(O,h,s),C=D(()=>f(S.value)),{isSelected:F,select:q,selectAll:ye,toggleSelect:ke,someSelected:Ve,allSelected:he}=nt(t,{allItems:C,currentPage:C}),{isExpanded:xe,toggleExpand:Te}=st(t),{containerRef:be,markerRef:Re,paddingTop:De,paddingBottom:Ie,computedItems:Ue,handleItemResize:Ce,handleScroll:we,handleScrollend:Ne}=Oe(t,S),Se=D(()=>Ue.value.map(x=>x.raw));rt({sortBy:m,page:ie(1),itemsPerPage:ie(-1),groupBy:h,search:n}),Pe({VDataTableRows:{hideNoData:_(t,"hideNoData"),noDataText:_(t,"noDataText"),loading:_(t,"loading"),loadingText:_(t,"loadingText")}});const P=D(()=>({sortBy:m.value,toggleSort:A,someSelected:Ve.value,allSelected:he.value,isSelected:F,select:q,selectAll:ye,toggleSelect:ke,isExpanded:xe,toggleExpand:Te,isGroupOpen:N,toggleGroup:V,items:C.value.map(x=>x.raw),internalItems:C.value,groupedItems:S.value,columns:v.value,headers:U.value}));Ke(()=>{const x=me.filterProps(t),_e=de.filterProps(t),Ee=ce.filterProps(t);return e(ce,j({class:["v-data-table",{"v-data-table--loading":t.loading},t.class],style:t.style},Ee,{fixedHeader:t.fixedHeader||t.sticky}),{top:()=>{var w;return(w=l.top)==null?void 0:w.call(l,P.value)},wrapper:()=>{var w,oe,ne;return e("div",{ref:be,onScrollPassive:we,onScrollend:Ne,class:"v-table__wrapper",style:{height:K(t.height)}},[e("table",null,[(w=l.colgroup)==null?void 0:w.call(l,P.value),!t.hideDefaultHeader&&e("thead",{key:"thead"},[e(me,x,l)]),!t.hideDefaultBody&&e("tbody",null,[e("tr",{ref:Re,style:{height:K(De.value),border:0}},[e("td",{colspan:v.value.length,style:{height:0,border:0}},null)]),(oe=l["body.prepend"])==null?void 0:oe.call(l,P.value),e(de,j(R,_e,{items:Se.value}),{...l,item:E=>e(qe,{key:E.internalItem.index,renderless:!0,"onUpdate:height":z=>Ce(E.internalItem.index,z)},{default:z=>{var re;let{itemRef:se}=z;return((re=l.item)==null?void 0:re.call(l,{...E,itemRef:se}))??e(it,j(E.props,{ref:se,key:E.internalItem.index,index:E.internalItem.index}),l)}})}),(ne=l["body.append"])==null?void 0:ne.call(l,P.value),e("tr",{style:{height:K(Ie.value),border:0}},[e("td",{colspan:v.value.length,style:{height:0,border:0}},null)])])])])},bottom:()=>{var w;return(w=l.bottom)==null?void 0:w.call(l,P.value)}})})}}),Vt=$({__name:"HotelReport",emits:["pageTitle"],async setup(t,{emit:b}){let R,l;b("pageTitle","Reports");const m=te(),d=Q(),i=g([]),y=g(),v=g([]);try{const p=([R,l]=Ge(()=>ae()),R=await R,l(),R);p&&(m.getHotelReport(p.ConventionUUID).then(s=>{i.value=s}),m.getConventionVenues(p.ConventionUUID).then(s=>{v.value=s}))}catch{d.push("/")}const U=D(()=>[{title:"First Name",align:"start",key:"FirstName"},{title:"Last Name",align:"start",key:"LastName"},{title:"Address",align:"start",key:"Address"},{title:"Room Partners",align:"start",key:"Guests"},{title:"Venue",align:"start",key:"Venue"},{title:"Room Type",align:"start",key:"RoomType"},{title:"Arrival",align:"start",key:"ArrivalDay"},{title:"Departure",align:"start",key:"DepartureDay"}]),k=D(()=>{const p=[];return i.value.forEach(s=>{y.value&&s.Venue!=y.value||s.Guests.forEach((f,N)=>{const V={FirstName:"",LastName:"",Guests:"",Address:"",Venue:"",Accommodation:"",RoomType:"",ArrivalDay:"",DepartureDay:""};V.FirstName=f.FirstName,V.LastName=f.LastName,V.Address=f.Address;const O=s.Guests.filter((F,q)=>q!==N);let S="";O.forEach(F=>{S+=F.FirstName+" "+F.LastName+","}),V.Guests=S.substring(0,S.length-1),V.Venue=s.Venue;const C=s.Accommodation.match(/\((.*?)\)/);C&&C.length>=1&&(V.Accommodation=C[1]),V.RoomType=s.RoomType,V.ArrivalDay=s.Days[0],V.DepartureDay=s.Days[s.Days.length-1],p.push(V)})}),p}),c=He("reportTable"),r="data:application/vnd.ms-excel;base64,",o='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><?xml version="1.0" encoding="UTF-8" standalone="yes"?><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',n=function(p){return btoa(unescape(encodeURIComponent(p)))},u=function(p,s){return p.replace(/{(\w+)}/g,function(f,N){return s[N]})},A=p=>{var f;const s=(f=c.value)==null?void 0:f.getElementsByTagName("table")[0];if(s){const N={worksheet:p,table:s.innerHTML};window.location.href=r+n(u(o,N))}};return(p,s)=>i.value.length>0&&v.value.length>0?(I(),Y(ee,{key:0},[e(X,{fluid:""},{default:a(()=>[e(J,null,{default:a(()=>[e(H,{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"},{default:a(()=>[e(ve,{modelValue:y.value,"onUpdate:modelValue":s[0]||(s[0]=f=>y.value=f),label:"Venue",items:v.value,"item-value":"Name","item-title":"Name",clearable:"",variant:"outlined","hide-details":""},null,8,["modelValue","items"])]),_:1}),e(ze),e(H,{cols:"12",sm:"5",md:"3",lg:"2",xl:"2",class:"text-right"},{default:a(()=>[e(G,{onClick:s[1]||(s[1]=f=>A("Hotel Report")),color:"primary","prepend-icon":"mdi:mdi-table",class:"w-100 w-sm-auto"},{default:a(()=>s[2]||(s[2]=[T(" Download Excel ")])),_:1})]),_:1})]),_:1})]),_:1}),k.value?(I(),B(le,{key:0,class:"pa-2"},{default:a(()=>[L("div",{ref_key:"reportTable",ref:c},[e(kt,{headers:U.value,items:k.value,"items-length":k.value.length},{"item.RoomType":a(({item:f})=>[T(W(f.RoomType)+" ",1),s[3]||(s[3]=L("br",null,null,-1)),T(" ("+W(f.Accommodation)+") ",1)]),_:2},1032,["headers","items","items-length"])],512)]),_:1})):Z("",!0)],64)):(I(),B(X,{key:1},{default:a(()=>[e(J,null,{default:a(()=>[e(H,{class:"text-center"},{default:a(()=>[e(je,{indeterminate:"",color:"primary",size:"100",width:"10"},{default:a(()=>s[4]||(s[4]=[T(" Loading ")])),_:1})]),_:1})]),_:1})]),_:1}))}}),ht={class:"flex-grow-1"},xt=$({__name:"TicketReport",emits:["pageTitle"],setup(t,{emit:b}){b("pageTitle","Reports");const l=te(),h=Q(),m=g(),d=g([]),i=g([]),y=g(!0),v=()=>{try{ae().then(c=>{c&&(m.value=c,l.getTicketReport(m.value.ConventionUUID).then(r=>{d.value=r,y.value=!1}))})}catch{h.push("/")}},U=D(()=>[{title:"",align:"start",key:"checkbox"},{title:"Reference",align:"start",key:"Reference"},{title:"Name",align:"start",key:"Name"},{title:"Ticket",align:"start",key:"Ticket"},{title:"QR Code",align:"start",key:"QRCode"}]),k=D(()=>d.value?d.value.map(c=>({RegistrationUUID:c.RegistrationUUID,Reference:c.Reference,Name:c.Name,Ticket:c.Ticket.map(o=>o.Name),QRCode:c.QRCode})):[]);return v(),(c,r)=>m.value&&d.value?(I(),B(le,{key:0,class:"pa-2"},{default:a(()=>[e(fe,{modelValue:i.value,"onUpdate:modelValue":r[2]||(r[2]=o=>i.value=o),headers:U.value,items:k.value,"item-value":"RegistrationUUID","show-select":"",loading:y.value},{"item.Ticket":a(({item:o})=>[e(ge,{items:o.Ticket},null,8,["items"])]),"item.QRCode":a(({item:o})=>[e(dt,{src:o.QRCode,alt:o.Reference},null,8,["src","alt"])]),"footer.prepend":a(()=>[L("div",ht,[e(G,{variant:"text",color:"primary",onClick:r[0]||(r[0]=o=>i.value=k.value.map(n=>n.RegistrationUUID))},{default:a(()=>r[6]||(r[6]=[T(" (Select all on every page) ")])),_:1}),e(G,{variant:"text",color:"primary",onClick:r[1]||(r[1]=o=>i.value=[])},{default:a(()=>r[7]||(r[7]=[T(" (Unselect all on every page) ")])),_:1})])]),_:2},1032,["modelValue","headers","items","loading"]),e(pe,{modelValue:i.value,"onUpdate:modelValue":r[3]||(r[3]=o=>i.value=o),details:k.value,"onUpdate:details":r[4]||(r[4]=o=>k.value=o),"model-type":"registration",convention:m.value,"onUpdate:convention":r[5]||(r[5]=o=>m.value=o)},null,8,["modelValue","details","convention"])]),_:1})):Z("",!0)}}),Tt={class:"flex-grow-1"},bt=$({__name:"CheckInReport",emits:["pageTitle"],setup(t,{emit:b}){b("pageTitle","Reports");const l=te(),h=Q(),m=g(),d=g([]),i=g([]),y=g(!0),v=g(),U=g([{key:"Reference",order:"asc"}]),k=()=>{try{ae().then(o=>{var n;o&&(m.value=o,l.getCheckInReport((n=m.value)==null?void 0:n.ConventionUUID).then(u=>{d.value=u,y.value=!1}))})}catch{h.push("/")}},c=D(()=>[{title:"",align:"start",key:"checkbox"},{title:"Reference",align:"start",key:"Reference"},{title:"Name",align:"start",key:"Name"},{title:"Ticket",align:"start",key:"Ticket"},{title:"Checked In",align:"start",key:"CheckedIn"}]),r=D(()=>d.value?d.value.filter(o=>v.value?o.CheckedIn===v.value:!0).map(o=>({RegistrationUUID:o.RegistrationUUID,Reference:o.Reference,Name:o.Name,Ticket:o.Ticket.map(u=>u.Name),CheckedIn:o.CheckedIn})):[]);return k(),(o,n)=>(I(),Y(ee,null,[e(X,{fluid:""},{default:a(()=>[e(J,null,{default:a(()=>[e(H,{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"},{default:a(()=>[e(ve,{modelValue:v.value,"onUpdate:modelValue":n[0]||(n[0]=u=>v.value=u),label:"Status",items:ue(We),"item-value":"value","item-title":"title",clearable:"",variant:"outlined","hide-details":""},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),m.value&&d.value?(I(),B(le,{key:0,class:"pa-2"},{default:a(()=>[e(fe,{modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=u=>i.value=u),headers:c.value,items:r.value,"item-value":"RegistrationUUID","show-select":"",loading:y.value,"sort-by":U.value,"onUpdate:sortBy":n[4]||(n[4]=u=>U.value=u)},{"item.CheckedIn":a(({item:u})=>[T(W(ue($e)(u.CheckedIn)),1)]),"item.Ticket":a(({item:u})=>[e(ge,{items:u.Ticket},null,8,["items"])]),"footer.prepend":a(()=>[L("div",Tt,[e(G,{variant:"text",color:"primary",onClick:n[1]||(n[1]=u=>i.value=r.value.map(A=>A.RegistrationUUID))},{default:a(()=>n[8]||(n[8]=[T(" (Select all on every page) ")])),_:1}),e(G,{variant:"text",color:"primary",onClick:n[2]||(n[2]=u=>i.value=[])},{default:a(()=>n[9]||(n[9]=[T(" (Unselect all on every page) ")])),_:1})])]),_:2},1032,["modelValue","headers","items","loading","sort-by"]),e(pe,{modelValue:i.value,"onUpdate:modelValue":n[5]||(n[5]=u=>i.value=u),details:r.value,"onUpdate:details":n[6]||(n[6]=u=>r.value=u),"model-type":"registration",convention:m.value,"onUpdate:convention":n[7]||(n[7]=u=>m.value=u)},null,8,["modelValue","details","convention"])]),_:1})):Z("",!0)],64))}}),ea=$({__name:"Reports",emits:["pageTitle"],setup(t,{emit:b}){b("pageTitle","Reports"),Q();const l=g("Hotel"),h=g(["Hotel","Tickets","Check In"]);return(m,d)=>(I(),B(ct,null,{default:a(()=>[e(gt,{color:"blue-darken-4"},{default:a(()=>[e(pt,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=i=>l.value=i),"show-arrows":""},{default:a(()=>[(I(!0),Y(ee,null,Le(h.value,i=>(I(),B(ft,null,{default:a(()=>[T(W(i),1)]),_:2},1024))),256))]),_:1},8,["modelValue"])]),_:1}),e(vt,{modelValue:l.value,"onUpdate:modelValue":d[1]||(d[1]=i=>l.value=i)},{default:a(()=>[e(M,{value:"Hotel"},{default:a(()=>[e(Vt)]),_:1}),e(M,{value:"Tickets"},{default:a(()=>[e(xt)]),_:1}),e(M,{value:"Check In"},{default:a(()=>[e(bt)]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{ea as default};
