import{m as Z,b as $,c as ee,d as ae,e as te,f as oe,g as le,u as re,p as se,h as ue,i as de,j as ne,k as ie,l as ce,n as me,o as w,q as B,r as I}from"./VDataTable-DKNe66S5.js";import{p as ge,d as ve,a9 as be,c as p,t as r,aa as pe,ab as fe,f as o,H as k,m as H}from"./index-_3doXhpQ.js";import{V as R}from"./VTable-CwDlnvMb.js";import{V as Pe}from"./VDivider-j7pEaUVb.js";import{u as ye}from"./VBtn-BpS949DL.js";const he=ge({itemsLength:{type:[Number,String],required:!0},...Z(),...$(),...ee()},"VDataTableServer"),we=ve()({name:"VDataTableServer",props:he(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,c){let{attrs:d,slots:a}=c;const{groupBy:l}=ae(e),{sortBy:s,multiSort:m,mustSort:g}=te(e),{page:n,itemsPerPage:v}=oe(e),{disableSort:F}=be(e),G=p(()=>parseInt(e.itemsLength,10)),{columns:f,headers:E}=le(e,{groupBy:l,showSelect:r(e,"showSelect"),showExpand:r(e,"showExpand")}),{items:i}=re(e,f),{toggleSort:P}=se({sortBy:s,multiSort:m,mustSort:g,page:n}),{opened:N,isGroupOpen:_,toggleGroup:C,extractRows:L}=ue({groupBy:l,sortBy:s,disableSort:F}),{pageCount:q,setItemsPerPage:O}=de({page:n,itemsPerPage:v,itemsLength:G}),{flatItems:y}=ne(i,l,N),{isSelected:j,select:A,selectAll:W,toggleSelect:z,someSelected:J,allSelected:K}=ie(e,{allItems:i,currentPage:i}),{isExpanded:M,toggleExpand:Q}=ce(e),h=p(()=>L(i.value));me({page:n,itemsPerPage:v,sortBy:s,groupBy:l,search:r(e,"search")}),pe("v-data-table",{toggleSort:P,sortBy:s}),fe({VDataTableRows:{hideNoData:r(e,"hideNoData"),noDataText:r(e,"noDataText"),loading:r(e,"loading"),loadingText:r(e,"loadingText")}});const t=p(()=>({page:n.value,itemsPerPage:v.value,sortBy:s.value,pageCount:q.value,toggleSort:P,setItemsPerPage:O,someSelected:J.value,allSelected:K.value,isSelected:j,select:A,selectAll:W,toggleSelect:z,isExpanded:M,toggleExpand:Q,isGroupOpen:_,toggleGroup:C,items:h.value.map(b=>b.raw),internalItems:h.value,groupedItems:y.value,columns:f.value,headers:E.value}));ye(()=>{const b=w.filterProps(e),U=B.filterProps(e),X=I.filterProps(e),Y=R.filterProps(e);return o(R,H({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},Y,{fixedHeader:e.fixedHeader||e.sticky}),{top:()=>{var u;return(u=a.top)==null?void 0:u.call(a,t.value)},default:()=>{var u,D,T,S,x,V;return a.default?a.default(t.value):o(k,null,[(u=a.colgroup)==null?void 0:u.call(a,t.value),!e.hideDefaultHeader&&o("thead",{key:"thead",class:"v-data-table__thead",role:"rowgroup"},[o(B,U,a)]),(D=a.thead)==null?void 0:D.call(a,t.value),!e.hideDefaultBody&&o("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(T=a["body.prepend"])==null?void 0:T.call(a,t.value),a.body?a.body(t.value):o(I,H(d,X,{items:y.value}),a),(S=a["body.append"])==null?void 0:S.call(a,t.value)]),(x=a.tbody)==null?void 0:x.call(a,t.value),(V=a.tfoot)==null?void 0:V.call(a,t.value)])},bottom:()=>a.bottom?a.bottom(t.value):!e.hideDefaultFooter&&o(k,null,[o(Pe,null,null),o(w,b,{prepend:a["footer.prepend"]})])})})}}),Be=(e,c=500,d=!1)=>{let a;return(...l)=>{const m=function(){a=void 0,d||e.apply(void 0,l)},g=d&&!a;clearTimeout(a),a=setTimeout(m,c),g&&e.apply(void 0,l)}};export{we as V,Be as u};
