import{p as ge,d as ye,a5 as be,t as v,c as w,s as Y,a7 as xe,f as l,J as z,m as F,i as Ve,r as x,R as De,q as j,v as i,N as Te,Q as ke,P as Re,n as U,B as Ne,O as we,F as Ie,x as C,D as Z,y as J,A as Se}from"./index-Cfjh1arS.js";import{v as Ee}from"./v4-CQkTLCs1.js";import{V as ee,a as Be}from"./VTable-40LsvCaP.js";import{a as Fe,b as Ue}from"./VTabs-CGJvPj4r.js";import{V as Ce}from"./VToolbar-CXSOYJAO.js";import{V as Pe,a as te}from"./VRow-DAVRc4gY.js";import{m as Ge,a as _e,u as Ae,b as He,c as Le,V as We}from"./filter-BKO13_F2.js";import{V as Oe}from"./scopeId-C0Ey8hzl.js";import{u as qe,V as ze,e as je}from"./VContainer-BsHTJ5LH.js";import{e as Je}from"./VCard-B4SgjzgT.js";import{b as Ke,s as Me,d as Qe,e as $e,g as Xe,u as Ye,p as Ze,h as et,t as tt,j as at,k as ot,l as lt,n as st,q as ae,r as oe,v as rt}from"./VDataTable-CV9taxpR.js";import"./forwardRefs-Ova6Q0r0.js";import"./VOverlay-CvqTvm0h.js";import"./VList-CQSLmvHM.js";import"./createSimpleFunctional-CNzVSQr5.js";import"./VDivider-DSE83xPO.js";import"./VChip-DRtqQ_fV.js";import"./VTextField-Bo9qGKyQ.js";import"./form-DCb_K9u2.js";import"./VCheckboxBtn-DUWzbAw4.js";const nt=ge({...Ke(),...Me(),...Ge(),..._e()},"VDataTableVirtual"),it=ye()({name:"VDataTableVirtual",props:nt(),emits:{"update:modelValue":t=>!0,"update:sortBy":t=>!0,"update:options":t=>!0,"update:groupBy":t=>!0,"update:expanded":t=>!0},setup(t,P){let{attrs:K,slots:a}=P;const{groupBy:f}=Qe(t),{sortBy:c,multiSort:m,mustSort:h}=$e(t),{disableSort:V}=be(t),{columns:p,headers:g,filterFunctions:I,sortFunctions:G,sortRawFunctions:D}=Xe(t,{groupBy:f,showSelect:v(t,"showSelect"),showExpand:v(t,"showExpand")}),{items:S}=Ye(t,p),E=v(t,"search"),{filteredItems:_}=Ae(t,S,E,{transform:u=>u.columns,customKeyFilter:I}),{toggleSort:A}=Ze({sortBy:c,multiSort:m,mustSort:h}),{sortByWithGroups:H,opened:L,extractRows:B,isGroupOpen:s,toggleGroup:o}=et({groupBy:f,sortBy:c,disableSort:V}),{sortedItems:e}=tt(t,_,H,{transform:u=>({...u.raw,...u.columns}),sortFunctions:G,sortRawFunctions:D}),{flatItems:r}=at(e,f,L),y=w(()=>B(r.value)),{isSelected:n,select:W,selectAll:T,toggleSelect:k,someSelected:R,allSelected:O}=ot(t,{allItems:y,currentPage:y}),{isExpanded:le,toggleExpand:se}=lt(t),{containerRef:re,markerRef:ne,paddingTop:ie,paddingBottom:ue,computedItems:me,handleItemResize:de,handleScroll:ce,handleScrollend:pe}=He(t,r),ve=w(()=>me.value.map(u=>u.raw));st({sortBy:c,page:Y(1),itemsPerPage:Y(-1),groupBy:f,search:E}),xe({VDataTableRows:{hideNoData:v(t,"hideNoData"),noDataText:v(t,"noDataText"),loading:v(t,"loading"),loadingText:v(t,"loadingText")}});const N=w(()=>({sortBy:c.value,toggleSort:A,someSelected:R.value,allSelected:O.value,isSelected:n,select:W,selectAll:T,toggleSelect:k,isExpanded:le,toggleExpand:se,isGroupOpen:s,toggleGroup:o,items:y.value.map(u=>u.raw),internalItems:y.value,groupedItems:r.value,columns:p.value,headers:g.value}));qe(()=>{const u=ae.filterProps(t),fe=oe.filterProps(t),he=ee.filterProps(t);return l(ee,F({class:["v-data-table",{"v-data-table--loading":t.loading},t.class],style:t.style},he),{top:()=>{var d;return(d=a.top)==null?void 0:d.call(a,N.value)},wrapper:()=>{var d,M,Q;return l("div",{ref:re,onScrollPassive:ce,onScrollend:pe,class:"v-table__wrapper",style:{height:z(t.height)}},[l("table",null,[(d=a.colgroup)==null?void 0:d.call(a,N.value),!t.hideDefaultHeader&&l("thead",{key:"thead"},[l(ae,F(u,{sticky:t.fixedHeader}),a)]),!t.hideDefaultBody&&l("tbody",null,[l("tr",{ref:ne,style:{height:z(ie.value),border:0}},[l("td",{colspan:p.value.length,style:{height:0,border:0}},null)]),(M=a["body.prepend"])==null?void 0:M.call(a,N.value),l(oe,F(K,fe,{items:ve.value}),{...a,item:b=>l(Le,{key:b.internalItem.index,renderless:!0,"onUpdate:height":q=>de(b.internalItem.index,q)},{default:q=>{var X;let{itemRef:$}=q;return((X=a.item)==null?void 0:X.call(a,{...b,itemRef:$}))??l(rt,F(b.props,{ref:$,key:b.internalItem.index,index:b.internalItem.index}),a)}})}),(Q=a["body.append"])==null?void 0:Q.call(a,N.value),l("tr",{style:{height:z(ue.value),border:0}},[l("td",{colspan:p.value.length,style:{height:0,border:0}},null)])])])])},bottom:()=>{var d;return(d=a.bottom)==null?void 0:d.call(a,N.value)}})})}}),St=Ve({__name:"Reports",emits:["pageTitle"],setup(t,{emit:P}){var B;P("pageTitle","Reports");const a=Te(),f=ke(),c=Re(),m=x(),h=x([{Name:"Hotel",Data:[]}]),V=x({ID:0,ConventionUUID:Ee(),OrganisationID:0,OrganisationUUID:De,Name:"",Description:"",DetailLink:"",Logo:"",Slug:"",Accommodation:[],Tickets:[],Extras:[],Interests:[],Visible:!1}),p=((B=f.params.convention)==null?void 0:B.toString())||"",g=x(),I=x([]);p?a.getConvention(p).then(s=>{if(s){V.value=s;const o=h.value.find(e=>e.Name=="Hotel");o&&(a.getHotelReport(V.value.ConventionUUID).then(e=>{o.Data=e}),a.getConventionVenues(V.value.ConventionUUID).then(e=>{I.value=e}))}}).catch(()=>{c.push("/")}):c.push("/");const G=w(()=>h.value.find(o=>o.Name===m.value)?m.value!=="Hotel"?[]:[{title:"First Name",align:"start",key:"FirstName"},{title:"Last Name",align:"start",key:"LastName"},{title:"Room Partners",align:"start",key:"Guests"},{title:"Venue",align:"start",key:"Venue"},{title:"Room Type",align:"start",key:"RoomType"},{title:"Arrival",align:"start",key:"ArrivalDay"},{title:"Departure",align:"start",key:"DepartureDay"}]:[]),D=w(()=>{const s=h.value.find(e=>e.Name===m.value);if(!s)return[];if(m.value!=="Hotel")return s.Data;const o=[];return s.Data.forEach(e=>{g.value&&e.Venue!=g.value||e.Guests.forEach((r,y)=>{const n={FirstName:"",LastName:"",Guests:"",Venue:"",Accommodation:"",RoomType:"",ArrivalDay:"",DepartureDay:""};n.FirstName=r.FirstName,n.LastName=r.LastName;const W=e.Guests.filter((R,O)=>O!==y);let T="";W.forEach(R=>{T+=R.FirstName+" "+R.LastName+","}),n.Guests=T.substring(0,T.length-1),n.Venue=e.Venue;const k=e.Accommodation.match(/\((.*?)\)/);k&&k.length>=1&&(n.Accommodation=k[1]),n.RoomType=e.RoomType,n.ArrivalDay=e.Days[0],n.DepartureDay=e.Days[e.Days.length-1],o.push(n)})}),o}),S=x(),E="data:application/vnd.ms-excel;base64,",_='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><?xml version="1.0" encoding="UTF-8" standalone="yes"?><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',A=function(s){return btoa(unescape(encodeURIComponent(s)))},H=function(s,o){return s.replace(/{(\w+)}/g,function(e,r){return o[r]})},L=s=>{var r;const o=(r=S.value)==null?void 0:r.getElementsByTagName("table")[0],e={worksheet:s||"Worksheet",table:o.innerHTML};window.location.href=E+A(H(_,e))};return(s,o)=>(U(),j(Be,null,{default:i(()=>[l(Ce,{color:"blue-darken-4"},{default:i(()=>[l(Fe,{modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=e=>m.value=e),"show-arrows":""},{default:i(()=>[(U(!0),Ne(Ie,null,we(h.value,e=>(U(),j(Ue,{key:e.Name,value:e.Name},{default:i(()=>[C(J(e.Name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(je,{fluid:""},{default:i(()=>[l(Pe,null,{default:i(()=>[l(te,{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"},{default:i(()=>[l(We,{modelValue:g.value,"onUpdate:modelValue":o[1]||(o[1]=e=>g.value=e),label:"Venue",items:I.value,"item-value":"Name","item-title":"Name",clearable:"",variant:"outlined","hide-details":""},null,8,["modelValue","items"])]),_:1}),l(Oe),l(te,{cols:"12",sm:"5",md:"3",lg:"2",xl:"2",class:"text-right"},{default:i(()=>[l(ze,{onClick:o[2]||(o[2]=e=>L(m.value)),color:"primary","prepend-icon":"mdi:mdi-table",class:"w-100 w-sm-auto"},{default:i(()=>o[3]||(o[3]=[C(" Download Excel ")])),_:1})]),_:1})]),_:1})]),_:1}),D.value?(U(),j(Je,{key:0,class:"pa-2"},{default:i(()=>[Z("div",{ref_key:"reportTable",ref:S},[l(it,{headers:G.value,items:D.value,"items-length":D.value.length},{"item.RoomType":i(({item:e})=>[C(J(e.RoomType)+" ",1),o[4]||(o[4]=Z("br",null,null,-1)),C(" ("+J(e.Accommodation)+") ",1)]),_:2},1032,["headers","items","items-length"])],512)]),_:1})):Se("",!0)]),_:1}))}});export{St as default};
