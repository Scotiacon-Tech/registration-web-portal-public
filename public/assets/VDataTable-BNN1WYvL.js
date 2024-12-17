import{ap as Vt,p as D,d as E,ac as G,f as i,aa as Oe,ad as Tt,aq as A,c as S,ab as Dt,a5 as q,ar as _t,G as Ne,H as Ge,a6 as le,t as V,r as j,as as Ct,u as W,a9 as Y,I as Bt,ah as re,s as Ft,at as ee,m as B,au as Ve,U as Te,w as me,av as Me,a as de,aw as At,J as N,h as Et,ax as Lt,ay as $t,az as He,aA as ce,aB as ne,aC as te,an as be,F as U,x as De,aD as fe,z as _e,y as Rt,aE as ae,a4 as Ot}from"./index-Bl6vN6z6.js";import{d as Nt}from"./forwardRefs-DqZZjb2J.js";import{a as oe,u as $,b as Gt,R as Mt,j as ye,c as Ht,A as je,d as ve,g as ze,s as jt,h as We,i as he,t as zt,l as Wt,n as qt,B as Kt,r as Ut,f as Jt,v as Qt,C as Xt,x as Yt,o as Zt,V as z,D as ea,E as ta,L as aa}from"./VContainer-B_erhKyg.js";import{m as la,u as na}from"./SaveButton.vue_vue_type_script_setup_true_lang-DbWXHPil.js";import{a as qe,m as sa,u as ra}from"./VAutocomplete-CGom0zxp.js";import{V as xe}from"./VCheckboxBtn-_GU9uK2C.js";import{a as oa}from"./VChip-BMOW25TY.js";import{m as ia,V as Ce}from"./VTable-Bzal4Xyk.js";import{V as ua}from"./VDivider-BCl1zHCG.js";function Be(e,l,a){return Object.keys(e).filter(t=>Vt(t)&&t.endsWith(l)).reduce((t,n)=>(t[n.slice(0,-l.length)]=s=>e[n](s,a(s)),t),{})}const X=Symbol.for("vuetify:v-expansion-panel"),Ke=D({...oe(),...la()},"VExpansionPanelText"),Fe=E()({name:"VExpansionPanelText",props:Ke(),setup(e,l){let{slots:a}=l;const t=G(X);if(!t)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:n,onAfterLeave:s}=na(e,t.isSelected);return $(()=>i(Nt,{onAfterLeave:s},{default:()=>{var r;return[Oe(i("div",{class:["v-expansion-panel-text",e.class],style:e.style},[a.default&&n.value&&i("div",{class:"v-expansion-panel-text__wrapper"},[(r=a.default)==null?void 0:r.call(a)])]),[[Tt,t.isSelected.value]])]}})),{}}}),Ue=D({color:String,expandIcon:{type:A,default:"$expand"},collapseIcon:{type:A,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...oe(),...Gt()},"VExpansionPanelTitle"),Ae=E()({name:"VExpansionPanelTitle",directives:{Ripple:Mt},props:Ue(),setup(e,l){let{slots:a}=l;const t=G(X);if(!t)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:n,backgroundColorStyles:s}=ye(e,"color"),{dimensionStyles:r}=Ht(e),o=S(()=>({collapseIcon:e.collapseIcon,disabled:t.disabled.value,expanded:t.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),c=S(()=>t.isSelected.value?e.collapseIcon:e.expandIcon);return $(()=>{var u;return Oe(i("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":t.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},n.value,e.class],style:[s.value,r.value,e.style],type:"button",tabindex:t.disabled.value?-1:void 0,disabled:t.disabled.value,"aria-expanded":t.isSelected.value,onClick:e.readonly?void 0:t.toggle},[i("span",{class:"v-expansion-panel-title__overlay"},null),(u=a.default)==null?void 0:u.call(a,o.value),!e.hideActions&&i(je,{defaults:{VIcon:{icon:c.value}}},{default:()=>{var g;return[i("span",{class:"v-expansion-panel-title__icon"},[((g=a.actions)==null?void 0:g.call(a,o.value))??i(ve,null,null)])]}})]),[[Dt("ripple"),e.ripple]])}),{}}}),Je=D({title:String,text:String,bgColor:String,...ze(),...jt(),...We(),...he(),...Ue(),...Ke()},"VExpansionPanel"),ol=E()({name:"VExpansionPanel",props:Je(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:a}=l;const t=zt(e,X),{backgroundColorClasses:n,backgroundColorStyles:s}=ye(e,"bgColor"),{elevationClasses:r}=Wt(e),{roundedClasses:o}=qt(e),c=S(()=>(t==null?void 0:t.disabled.value)||e.disabled),u=S(()=>t.group.items.value.reduce((d,y,b)=>(t.group.selected.value.includes(y.id)&&d.push(b),d),[])),g=S(()=>{const d=t.group.items.value.findIndex(y=>y.id===t.id);return!t.isSelected.value&&u.value.some(y=>y-d===1)}),h=S(()=>{const d=t.group.items.value.findIndex(y=>y.id===t.id);return!t.isSelected.value&&u.value.some(y=>y-d===-1)});return q(X,t),$(()=>{const d=!!(a.text||e.text),y=!!(a.title||e.title),b=Ae.filterProps(e),P=Fe.filterProps(e);return i(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":t.isSelected.value,"v-expansion-panel--before-active":g.value,"v-expansion-panel--after-active":h.value,"v-expansion-panel--disabled":c.value},o.value,n.value,e.class],style:[s.value,e.style]},{default:()=>[i("div",{class:["v-expansion-panel__shadow",...r.value]},null),i(je,{defaults:{VExpansionPanelTitle:{...b},VExpansionPanelText:{...P}}},{default:()=>{var m;return[y&&i(Ae,{key:"title"},{default:()=>[a.title?a.title():e.title]}),d&&i(Fe,{key:"text"},{default:()=>[a.text?a.text():e.text]}),(m=a.default)==null?void 0:m.call(a)]}})]})}),{groupItem:t}}}),da=["default","accordion","inset","popout"],ca=D({flat:Boolean,...Kt(),..._t(Je(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...Ne(),...oe(),...he(),variant:{type:String,default:"default",validator:e=>da.includes(e)}},"VExpansionPanels"),il=E()({name:"VExpansionPanels",props:ca(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const{next:t,prev:n}=Ut(e,X),{themeClasses:s}=Ge(e),r=S(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return le({VExpansionPanel:{bgColor:V(e,"bgColor"),collapseIcon:V(e,"collapseIcon"),color:V(e,"color"),eager:V(e,"eager"),elevation:V(e,"elevation"),expandIcon:V(e,"expandIcon"),focusable:V(e,"focusable"),hideActions:V(e,"hideActions"),readonly:V(e,"readonly"),ripple:V(e,"ripple"),rounded:V(e,"rounded"),static:V(e,"static")}}),$(()=>i(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},s.value,r.value,e.class],style:e.style},{default:()=>{var o;return[(o=a.default)==null?void 0:o.call(a,{prev:n,next:t})]}})),{next:t,prev:n}}});function fa(){const e=j([]);Ct(()=>e.value=[]);function l(a,t){e.value[t]=a}return{refs:e,updateRef:l}}const va=D({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:A,default:"$first"},prevIcon:{type:A,default:"$prev"},nextIcon:{type:A,default:"$next"},lastIcon:{type:A,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...Jt(),...oe(),...Qt(),...ze(),...We(),...Xt(),...he({tag:"nav"}),...Ne(),...Yt({variant:"text"})},"VPagination"),Ee=E()({name:"VPagination",props:va(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:a,emit:t}=l;const n=W(e,"modelValue"),{t:s,n:r}=Y(),{isRtl:o}=Bt(),{themeClasses:c}=Ge(e),{width:u}=re(),g=Ft(-1);le(void 0,{scoped:!0});const{resizeRef:h}=Zt(x=>{if(!x.length)return;const{target:f,contentRect:k}=x[0],w=f.querySelector(".v-pagination__list > *");if(!w)return;const T=k.width,C=w.offsetWidth+parseFloat(getComputedStyle(w).marginRight)*2;g.value=P(T,C)}),d=S(()=>parseInt(e.length,10)),y=S(()=>parseInt(e.start,10)),b=S(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):g.value>=0?g.value:P(u.value,58));function P(x,f){const k=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((x-f*k)/f).toFixed(2)))}const m=S(()=>{if(d.value<=0||isNaN(d.value)||d.value>Number.MAX_SAFE_INTEGER)return[];if(b.value<=0)return[];if(b.value===1)return[n.value];if(d.value<=b.value)return ee(d.value,y.value);const x=b.value%2===0,f=x?b.value/2:Math.floor(b.value/2),k=x?f:f+1,w=d.value-f;if(k-n.value>=0)return[...ee(Math.max(1,b.value-1),y.value),e.ellipsis,d.value];if(n.value-w>=(x?1:0)){const T=b.value-1,C=d.value-T+y.value;return[y.value,e.ellipsis,...ee(T,C)]}else{const T=Math.max(1,b.value-3),C=T===1?n.value:n.value-Math.ceil(T/2)+y.value;return[y.value,e.ellipsis,...ee(T,C),e.ellipsis,d.value]}});function p(x,f,k){x.preventDefault(),n.value=f,k&&t(k,f)}const{refs:v,updateRef:_}=fa();le({VPaginationBtn:{color:V(e,"color"),border:V(e,"border"),density:V(e,"density"),size:V(e,"size"),variant:V(e,"variant"),rounded:V(e,"rounded"),elevation:V(e,"elevation")}});const F=S(()=>m.value.map((x,f)=>{const k=w=>_(w,f);if(typeof x=="string")return{isActive:!1,key:`ellipsis-${f}`,page:x,props:{ref:k,ellipsis:!0,icon:!0,disabled:!0}};{const w=x===n.value;return{isActive:w,key:x,page:r(x),props:{ref:k,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:w?e.activeColor:e.color,"aria-current":w,"aria-label":s(w?e.currentPageAriaLabel:e.pageAriaLabel,x),onClick:T=>p(T,x)}}}})),I=S(()=>{const x=!!e.disabled||n.value<=y.value,f=!!e.disabled||n.value>=y.value+d.value-1;return{first:e.showFirstLastPage?{icon:o.value?e.lastIcon:e.firstIcon,onClick:k=>p(k,y.value,"first"),disabled:x,"aria-label":s(e.firstAriaLabel),"aria-disabled":x}:void 0,prev:{icon:o.value?e.nextIcon:e.prevIcon,onClick:k=>p(k,n.value-1,"prev"),disabled:x,"aria-label":s(e.previousAriaLabel),"aria-disabled":x},next:{icon:o.value?e.prevIcon:e.nextIcon,onClick:k=>p(k,n.value+1,"next"),disabled:f,"aria-label":s(e.nextAriaLabel),"aria-disabled":f},last:e.showFirstLastPage?{icon:o.value?e.firstIcon:e.lastIcon,onClick:k=>p(k,y.value+d.value-1,"last"),disabled:f,"aria-label":s(e.lastAriaLabel),"aria-disabled":f}:void 0}});function R(){var f;const x=n.value-y.value;(f=v.value[x])==null||f.$el.focus()}function M(x){x.key===Ve.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,Te(R)):x.key===Ve.right&&!e.disabled&&n.value<y.value+d.value-1&&(n.value=n.value+1,Te(R))}return $(()=>i(e.tag,{ref:h,class:["v-pagination",c.value,e.class],style:e.style,role:"navigation","aria-label":s(e.ariaLabel),onKeydown:M,"data-test":"v-pagination-root"},{default:()=>[i("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&i("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(I.value.first):i(z,B({_as:"VPaginationBtn"},I.value.first),null)]),i("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(I.value.prev):i(z,B({_as:"VPaginationBtn"},I.value.prev),null)]),F.value.map((x,f)=>i("li",{key:x.key,class:["v-pagination__item",{"v-pagination__item--is-active":x.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(x):i(z,B({_as:"VPaginationBtn"},x.props),{default:()=>[x.page]})])),i("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(I.value.next):i(z,B({_as:"VPaginationBtn"},I.value.next),null)]),e.showFirstLastPage&&i("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(I.value.last):i(z,B({_as:"VPaginationBtn"},I.value.last),null)])])]})),{}}}),ga=D({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Qe=Symbol.for("vuetify:data-table-pagination");function ma(e){const l=W(e,"page",void 0,t=>+(t??1)),a=W(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function ba(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=S(()=>a.value===-1?0:a.value*(l.value-1)),s=S(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),r=S(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));me([l,r],()=>{l.value>r.value&&(l.value=r.value)});function o(d){a.value=d,l.value=1}function c(){l.value=de(l.value+1,1,r.value)}function u(){l.value=de(l.value-1,1,r.value)}function g(d){l.value=de(d,1,r.value)}const h={page:l,itemsPerPage:a,startIndex:n,stopIndex:s,pageCount:r,itemsLength:t,nextPage:c,prevPage:u,setPage:g,setItemsPerPage:o};return q(Qe,h),h}function ya(){const e=G(Qe);if(!e)throw new Error("Missing pagination!");return e}function ha(e){const l=Me("usePaginatedItems"),{items:a,startIndex:t,stopIndex:n,itemsPerPage:s}=e,r=S(()=>s.value<=0?a.value:a.value.slice(t.value,n.value));return me(r,o=>{l.emit("update:currentItems",o)}),{paginatedItems:r}}const Xe=D({prevIcon:{type:A,default:"$prev"},nextIcon:{type:A,default:"$next"},firstIcon:{type:A,default:"$first"},lastIcon:{type:A,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),Le=E()({name:"VDataTableFooter",props:Xe(),setup(e,l){let{slots:a}=l;const{t}=Y(),{page:n,pageCount:s,startIndex:r,stopIndex:o,itemsLength:c,itemsPerPage:u,setItemsPerPage:g}=ya(),h=S(()=>e.itemsPerPageOptions.map(d=>typeof d=="number"?{value:d,title:d===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(d)}:{...d,title:isNaN(Number(d.title))?t(d.title):d.title}));return $(()=>{var y;const d=Ee.filterProps(e);return i("div",{class:"v-data-table-footer"},[(y=a.prepend)==null?void 0:y.call(a),i("div",{class:"v-data-table-footer__items-per-page"},[i("span",null,[t(e.itemsPerPageText)]),i(qe,{items:h.value,modelValue:u.value,"onUpdate:modelValue":b=>g(Number(b)),density:"compact",variant:"outlined","hide-details":!0},null)]),i("div",{class:"v-data-table-footer__info"},[i("div",null,[t(e.pageText,c.value?r.value+1:0,o.value,c.value)])]),i("div",{class:"v-data-table-footer__pagination"},[i(Ee,B({modelValue:n.value,"onUpdate:modelValue":b=>n.value=b,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:s.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},d),null)])])}),{}}}),se=At({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},(e,l)=>{let{slots:a}=l;const t=e.tag??"td";return i(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding,"v-data-table-column--nowrap":e.nowrap},`v-data-table-column--align-${e.align}`],style:{height:N(e.height),width:N(e.width),maxWidth:N(e.maxWidth),left:N(e.fixedOffset||null)}},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})}),xa=D({headers:Array},"DataTable-header"),Ye=Symbol.for("vuetify:data-table-headers"),Ze={title:"",sortable:!1},pa={...Ze,width:48};function Pa(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(a=>({element:a,priority:0}));return{enqueue:(a,t)=>{let n=!1;for(let s=0;s<l.length;s++)if(l[s].priority>t){l.splice(s,0,{element:a,priority:t}),n=!0;break}n||l.push({element:a,priority:t})},size:()=>l.length,count:()=>{let a=0;if(!l.length)return 0;const t=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===t&&(a+=1);return a},dequeue:()=>l.shift()}}function ge(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const a of e.children)ge(a,l);return l}function et(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const a of e)a.key&&l.add(a.key),a.children&&et(a.children,l);return l}function Sa(e){if(e.key){if(e.key==="data-table-group")return Ze;if(["data-table-expand","data-table-select"].includes(e.key))return pa}}function pe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(a=>pe(a,l+1))):l}function ka(e){let l=!1;function a(s){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s)if(r&&(s.fixed=!0),s.fixed)if(s.children)for(let o=s.children.length-1;o>=0;o--)a(s.children[o],!0);else l?isNaN(+s.width)&&$t(`Multiple fixed columns should have a static width (key: ${s.key})`):s.lastFixed=!0,l=!0;else if(s.children)for(let o=s.children.length-1;o>=0;o--)a(s.children[o]);else l=!1}for(let s=e.length-1;s>=0;s--)a(e[s]);function t(s){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!s)return r;if(s.children){s.fixedOffset=r;for(const o of s.children)r=t(o,r)}else s.fixed&&(s.fixedOffset=r,r+=parseFloat(s.width||"0")||0);return r}let n=0;for(const s of e)n=t(s,n)}function wa(e,l){const a=[];let t=0;const n=Pa(e);for(;n.size()>0;){let r=n.count();const o=[];let c=1;for(;r>0;){const{element:u,priority:g}=n.dequeue(),h=l-t-pe(u);if(o.push({...u,rowspan:h??1,colspan:u.children?ge(u).length:1}),u.children)for(const d of u.children){const y=g%1+c/Math.pow(10,t+2);n.enqueue(d,t+h+y)}c+=1,r-=1}t+=1,a.push(o)}return{columns:e.map(r=>ge(r)).flat(),headers:a}}function tt(e){const l=[];for(const a of e){const t={...Sa(a),...a},n=t.key??(typeof t.value=="string"?t.value:null),s=t.value??n??null,r={...t,key:n,value:s,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?tt(t.children):void 0};l.push(r)}return l}function Ia(e,l){const a=j([]),t=j([]),n=j({}),s=j({}),r=j({});Et(()=>{var P,m,p;const u=(e.headers||Object.keys(e.items[0]??{}).map(v=>({key:v,title:Lt(v)}))).slice(),g=et(u);(P=l==null?void 0:l.groupBy)!=null&&P.value.length&&!g.has("data-table-group")&&u.unshift({key:"data-table-group",title:"Group"}),(m=l==null?void 0:l.showSelect)!=null&&m.value&&!g.has("data-table-select")&&u.unshift({key:"data-table-select"}),(p=l==null?void 0:l.showExpand)!=null&&p.value&&!g.has("data-table-expand")&&u.push({key:"data-table-expand"});const h=tt(u);ka(h);const d=Math.max(...h.map(v=>pe(v)))+1,y=wa(h,d);a.value=y.headers,t.value=y.columns;const b=y.headers.flat(1);for(const v of b)v.key&&(v.sortable&&(v.sort&&(n.value[v.key]=v.sort),v.sortRaw&&(s.value[v.key]=v.sortRaw)),v.filter&&(r.value[v.key]=v.filter))});const o={headers:a,columns:t,sortFunctions:n,sortRawFunctions:s,filterFunctions:r};return q(Ye,o),o}function ie(){const e=G(Ye);if(!e)throw new Error("Missing headers!");return e}const Va={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[(t=l[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},at={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return at.select({items:a,value:l,selected:t})}},lt={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return lt.select({items:a,value:l,selected:t})}},Ta=D({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:He}},"DataTable-select"),nt=Symbol.for("vuetify:data-table-selection");function Da(e,l){let{allItems:a,currentPage:t}=l;const n=W(e,"modelValue",e.modelValue,p=>new Set(ce(p).map(v=>{var _;return((_=a.value.find(F=>e.valueComparator(v,F.value)))==null?void 0:_.value)??v})),p=>[...p.values()]),s=S(()=>a.value.filter(p=>p.selectable)),r=S(()=>t.value.filter(p=>p.selectable)),o=S(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return Va;case"all":return lt;case"page":default:return at}});function c(p){return ce(p).every(v=>n.value.has(v.value))}function u(p){return ce(p).some(v=>n.value.has(v.value))}function g(p,v){const _=o.value.select({items:p,value:v,selected:new Set(n.value)});n.value=_}function h(p){g([p],!c([p]))}function d(p){const v=o.value.selectAll({value:p,allItems:s.value,currentPage:r.value,selected:new Set(n.value)});n.value=v}const y=S(()=>n.value.size>0),b=S(()=>{const p=o.value.allSelected({allItems:s.value,currentPage:r.value});return!!p.length&&c(p)}),P=S(()=>o.value.showSelectAll),m={toggleSelect:h,select:g,selectAll:d,isSelected:c,isSomeSelected:u,someSelected:y,allSelected:b,showSelectAll:P};return q(nt,m),m}function ue(){const e=G(nt);if(!e)throw new Error("Missing selection!");return e}const _a=D({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),st=Symbol.for("vuetify:data-table-sort");function Ca(e){const l=W(e,"sortBy"),a=V(e,"mustSort"),t=V(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function Ba(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,s=c=>{if(c.key==null)return;let u=l.value.map(h=>({...h}))??[];const g=u.find(h=>h.key===c.key);g?g.order==="desc"?a.value?g.order="asc":u=u.filter(h=>h.key!==c.key):g.order="desc":t.value?u=[...u,{key:c.key,order:"asc"}]:u=[{key:c.key,order:"asc"}],l.value=u,n&&(n.value=1)};function r(c){return!!l.value.find(u=>u.key===c.key)}const o={sortBy:l,toggleSort:s,isSorted:r};return q(st,o),o}function rt(){const e=G(st);if(!e)throw new Error("Missing sort!");return e}function Fa(e,l,a,t){const n=Y();return{sortedItems:S(()=>{var r,o;return a.value.length?Aa(l.value,a.value,n.current.value,{transform:t==null?void 0:t.transform,sortFunctions:{...e.customKeySort,...(r=t==null?void 0:t.sortFunctions)==null?void 0:r.value},sortRawFunctions:(o=t==null?void 0:t.sortRawFunctions)==null?void 0:o.value}):l.value})}}function Aa(e,l,a,t){const n=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return e.map(r=>[r,t!=null&&t.transform?t.transform(r):r]).sort((r,o)=>{var c,u;for(let g=0;g<l.length;g++){let h=!1;const d=l[g].key,y=l[g].order??"asc";if(y===!1)continue;let b=ne(r[1],d),P=ne(o[1],d),m=r[0].raw,p=o[0].raw;if(y==="desc"&&([b,P]=[P,b],[m,p]=[p,m]),(c=t==null?void 0:t.sortRawFunctions)!=null&&c[d]){const v=t.sortRawFunctions[d](m,p);if(v==null)continue;if(h=!0,v)return v}if((u=t==null?void 0:t.sortFunctions)!=null&&u[d]){const v=t.sortFunctions[d](b,P);if(v==null)continue;if(h=!0,v)return v}if(!h){if(b instanceof Date&&P instanceof Date)return b.getTime()-P.getTime();if([b,P]=[b,P].map(v=>v!=null?v.toString().toLocaleLowerCase():v),b!==P)return te(b)&&te(P)?0:te(b)?-1:te(P)?1:!isNaN(b)&&!isNaN(P)?Number(b)-Number(P):n.compare(b,P)}}return 0}).map(r=>{let[o]=r;return o})}const ot=D({color:String,sticky:Boolean,disableSort:Boolean,multiSort:Boolean,sortAscIcon:{type:A,default:"$sortAsc"},sortDescIcon:{type:A,default:"$sortDesc"},headerProps:{type:Object},...be(),...ea()},"VDataTableHeaders"),$e=E()({name:"VDataTableHeaders",props:ot(),setup(e,l){let{slots:a}=l;const{t}=Y(),{toggleSort:n,sortBy:s,isSorted:r}=rt(),{someSelected:o,allSelected:c,selectAll:u,showSelectAll:g}=ue(),{columns:h,headers:d}=ie(),{loaderClasses:y}=ta(e);function b(x,f){if(!(!e.sticky&&!x.fixed))return{position:"sticky",left:x.fixed?N(x.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${f})`:void 0}}function P(x){const f=s.value.find(k=>k.key===x.key);return f?f.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:m,backgroundColorStyles:p}=ye(e,"color"),{displayClasses:v,mobile:_}=re(e),F=S(()=>({headers:d.value,columns:h.value,toggleSort:n,isSorted:r,sortBy:s.value,someSelected:o.value,allSelected:c.value,selectAll:u,getSortIcon:P})),I=S(()=>["v-data-table__th",{"v-data-table__th--sticky":e.sticky},v.value,y.value]),R=x=>{let{column:f,x:k,y:w}=x;const T=f.key==="data-table-select"||f.key==="data-table-expand",C=B(e.headerProps??{},f.headerProps??{});return i(se,B({tag:"th",align:f.align,class:[{"v-data-table__th--sortable":f.sortable&&!e.disableSort,"v-data-table__th--sorted":r(f),"v-data-table__th--fixed":f.fixed},...I.value],style:{width:N(f.width),minWidth:N(f.minWidth),maxWidth:N(f.maxWidth),...b(f,w)},colspan:f.colspan,rowspan:f.rowspan,onClick:f.sortable?()=>n(f):void 0,fixed:f.fixed,nowrap:f.nowrap,lastFixed:f.lastFixed,noPadding:T},C),{default:()=>{var K;const H=`header.${f.key}`,Z={column:f,selectAll:u,isSorted:r,toggleSort:n,sortBy:s.value,someSelected:o.value,allSelected:c.value,getSortIcon:P};return a[H]?a[H](Z):f.key==="data-table-select"?((K=a["header.data-table-select"])==null?void 0:K.call(a,Z))??(g.value&&i(xe,{modelValue:c.value,indeterminate:o.value&&!c.value,"onUpdate:modelValue":u},null)):i("div",{class:"v-data-table-header__content"},[i("span",null,[f.title]),f.sortable&&!e.disableSort&&i(ve,{key:"icon",class:"v-data-table-header__sort-icon",icon:P(f)},null),e.multiSort&&r(f)&&i("div",{key:"badge",class:["v-data-table-header__sort-badge",...m.value],style:p.value},[s.value.findIndex(J=>J.key===f.key)+1])])}})},M=()=>{const x=B(e.headerProps??{}??{}),f=S(()=>h.value.filter(w=>(w==null?void 0:w.sortable)&&!e.disableSort)),k=S(()=>{if(h.value.find(T=>T.key==="data-table-select")!=null)return c.value?"$checkboxOn":o.value?"$checkboxIndeterminate":"$checkboxOff"});return i(se,B({tag:"th",class:[...I.value],colspan:d.value.length+1},x),{default:()=>[i("div",{class:"v-data-table-header__content"},[i(qe,{chips:!0,class:"v-data-table__td-sort-select",clearable:!0,density:"default",items:f.value,label:t("$vuetify.dataTable.sortBy"),multiple:e.multiSort,variant:"underlined","onClick:clear":()=>s.value=[],appendIcon:k.value,"onClick:append":()=>u(!c.value)},{...a,chip:w=>{var T;return i(oa,{onClick:(T=w.item.raw)!=null&&T.sortable?()=>n(w.item.raw):void 0,onMousedown:C=>{C.preventDefault(),C.stopPropagation()}},{default:()=>[w.item.title,i(ve,{class:["v-data-table__td-sort-icon",r(w.item.raw)&&"v-data-table__td-sort-icon-active"],icon:P(w.item.raw),size:"small"},null)]})}})])]})};$(()=>_.value?i("tr",null,[i(M,null,null)]):i(U,null,[a.headers?a.headers(F.value):d.value.map((x,f)=>i("tr",null,[x.map((k,w)=>i(R,{column:k,x:w,y:f},null))])),e.loading&&i("tr",{class:"v-data-table-progress"},[i("th",{colspan:h.value.length},[i(aa,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),Ea=D({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),it=Symbol.for("vuetify:data-table-group");function La(e){return{groupBy:W(e,"groupBy")}}function $a(e){const{disableSort:l,groupBy:a,sortBy:t}=e,n=j(new Set),s=S(()=>a.value.map(g=>({...g,order:g.order??!1})).concat(l!=null&&l.value?[]:t.value));function r(g){return n.value.has(g.id)}function o(g){const h=new Set(n.value);r(g)?h.delete(g.id):h.add(g.id),n.value=h}function c(g){function h(d){const y=[];for(const b of d.items)"type"in b&&b.type==="group"?y.push(...h(b)):y.push(b);return y}return h({type:"group",items:g,id:"dummy",key:"dummy",value:"dummy",depth:0})}const u={sortByWithGroups:s,toggleGroup:o,opened:n,groupBy:a,extractRows:c,isGroupOpen:r};return q(it,u),u}function ut(){const e=G(it);if(!e)throw new Error("Missing group!");return e}function Ra(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=ne(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function dt(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=Ra(e,l[0]),s=[],r=l.slice(1);return n.forEach((o,c)=>{const u=l[0],g=`${t}_${u}_${c}`;s.push({depth:a,id:g,key:u,value:c,items:r.length?dt(o,r,a+1,g):o,type:"group"})}),s}function ct(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...ct(t.items,l))):a.push(t);return a}function Oa(e,l,a){return{flatItems:S(()=>{if(!l.value.length)return e.value;const n=dt(e.value,l.value.map(s=>s.key));return ct(n,a.value)})}}const Na=D({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),Ga=E()({name:"VDataTableGroupHeaderRow",props:Na(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:s}=ut(),{isSelected:r,isSomeSelected:o,select:c}=ue(),{columns:u}=ie(),g=S(()=>s([e.item]));return()=>i("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[u.value.map(h=>{var d,y;if(h.key==="data-table-group"){const b=t(e.item)?"$expand":"$next",P=()=>n(e.item);return((d=a["data-table-group"])==null?void 0:d.call(a,{item:e.item,count:g.value.length,props:{icon:b,onClick:P}}))??i(se,{class:"v-data-table-group-header-row__column"},{default:()=>[i(z,{size:"small",variant:"text",icon:b,onClick:P},null),i("span",null,[e.item.value]),i("span",null,[De("("),g.value.length,De(")")])]})}if(h.key==="data-table-select"){const b=r(g.value),P=o(g.value)&&!b,m=p=>c(g.value,p);return((y=a["data-table-select"])==null?void 0:y.call(a,{props:{modelValue:b,indeterminate:P,"onUpdate:modelValue":m}}))??i("td",null,[i(xe,{modelValue:b,indeterminate:P,"onUpdate:modelValue":m},null)])}return i("td",null,null)})])}}),Ma=D({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),ft=Symbol.for("vuetify:datatable:expanded");function Ha(e){const l=V(e,"expandOnClick"),a=W(e,"expanded",e.expanded,o=>new Set(o),o=>[...o.values()]);function t(o,c){const u=new Set(a.value);c?u.add(o.value):u.delete(o.value),a.value=u}function n(o){return a.value.has(o.value)}function s(o){t(o,!n(o))}const r={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:s};return q(ft,r),r}function vt(){const e=G(ft);if(!e)throw new Error("foo");return e}const ja=D({index:Number,item:Object,cellProps:[Object,Function],onClick:fe(),onContextmenu:fe(),onDblclick:fe(),...be()},"VDataTableRow"),za=E()({name:"VDataTableRow",props:ja(),setup(e,l){let{slots:a}=l;const{displayClasses:t,mobile:n}=re(e,"v-data-table__tr"),{isSelected:s,toggleSelect:r,someSelected:o,allSelected:c,selectAll:u}=ue(),{isExpanded:g,toggleExpand:h}=vt(),{toggleSort:d,sortBy:y,isSorted:b}=rt(),{columns:P}=ie();$(()=>i("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)},t.value],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&P.value.map((m,p)=>{const v=e.item,_=`item.${m.key}`,F=`header.${m.key}`,I={index:e.index,item:v.raw,internalItem:v,value:ne(v.columns,m.key),column:m,isSelected:s,toggleSelect:r,isExpanded:g,toggleExpand:h},R={column:m,selectAll:u,isSorted:b,toggleSort:d,sortBy:y.value,someSelected:o.value,allSelected:c.value,getSortIcon:()=>""},M=typeof e.cellProps=="function"?e.cellProps({index:I.index,item:I.item,internalItem:I.internalItem,value:I.value,column:m}):e.cellProps,x=typeof m.cellProps=="function"?m.cellProps({index:I.index,item:I.item,internalItem:I.internalItem,value:I.value}):m.cellProps;return i(se,B({align:m.align,class:{"v-data-table__td--expanded-row":m.key==="data-table-expand","v-data-table__td--select-row":m.key==="data-table-select"},fixed:m.fixed,fixedOffset:m.fixedOffset,lastFixed:m.lastFixed,maxWidth:n.value?void 0:m.maxWidth,noPadding:m.key==="data-table-select"||m.key==="data-table-expand",nowrap:m.nowrap,width:n.value?void 0:m.width},M,x),{default:()=>{var k,w,T,C,H;if(a[_]&&!n.value)return(k=a[_])==null?void 0:k.call(a,I);if(m.key==="data-table-select")return((w=a["item.data-table-select"])==null?void 0:w.call(a,I))??i(xe,{disabled:!v.selectable,modelValue:s([v]),onClick:_e(()=>r(v),["stop"])},null);if(m.key==="data-table-expand")return((T=a["item.data-table-expand"])==null?void 0:T.call(a,I))??i(z,{icon:g(v)?"$collapse":"$expand",size:"small",variant:"text",onClick:_e(()=>h(v),["stop"])},null);const f=Rt(I.value);return n.value?i(U,null,[i("div",{class:"v-data-table__td-title"},[((C=a[F])==null?void 0:C.call(a,R))??m.title]),i("div",{class:"v-data-table__td-value"},[((H=a[_])==null?void 0:H.call(a,I))??f])]):f}})})]))}}),gt=D({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function],...be()},"VDataTableRows"),Re=E()({name:"VDataTableRows",inheritAttrs:!1,props:gt(),setup(e,l){let{attrs:a,slots:t}=l;const{columns:n}=ie(),{expandOnClick:s,toggleExpand:r,isExpanded:o}=vt(),{isSelected:c,toggleSelect:u}=ue(),{toggleGroup:g,isGroupOpen:h}=ut(),{t:d}=Y(),{mobile:y}=re(e);return $(()=>{var b,P;return e.loading&&(!e.items.length||t.loading)?i("tr",{class:"v-data-table-rows-loading",key:"loading"},[i("td",{colspan:n.value.length},[((b=t.loading)==null?void 0:b.call(t))??d(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?i("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[i("td",{colspan:n.value.length},[((P=t["no-data"])==null?void 0:P.call(t))??d(e.noDataText)])]):i(U,null,[e.items.map((m,p)=>{var F;if(m.type==="group"){const I={index:p,item:m,columns:n.value,isExpanded:o,toggleExpand:r,isSelected:c,toggleSelect:u,toggleGroup:g,isGroupOpen:h};return t["group-header"]?t["group-header"](I):i(Ga,B({key:`group-header_${m.id}`,item:m},Be(a,":group-header",()=>I)),t)}const v={index:p,item:m.raw,internalItem:m,columns:n.value,isExpanded:o,toggleExpand:r,isSelected:c,toggleSelect:u},_={...v,props:B({key:`item_${m.key??m.index}`,onClick:s.value?()=>{r(m)}:void 0,index:p,item:m,cellProps:e.cellProps,mobile:y.value},Be(a,":row",()=>v),typeof e.rowProps=="function"?e.rowProps({item:v.item,index:v.index,internalItem:v.internalItem}):e.rowProps)};return i(U,{key:_.props.key},[t.item?t.item(_):i(za,_.props,t),o(m)&&((F=t["expanded-row"])==null?void 0:F.call(t,v))])})])}),{}}}),Wa=D({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function qa(e,l,a,t){const n=e.returnObject?l:ae(l,e.itemValue),s=ae(l,e.itemSelectable,!0),r=t.reduce((o,c)=>(c.key!=null&&(o[c.key]=ae(l,c.value)),o),{});return{type:"item",key:e.returnObject?ae(l,e.itemValue):n,index:a,value:n,selectable:s,columns:r,raw:l}}function Ka(e,l,a){return l.map((t,n)=>qa(e,t,n,a))}function Ua(e,l){return{items:S(()=>Ka(e,e.items,l.value))}}function Ja(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:s}=e;const r=Me("VDataTable"),o=S(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:s.value}));let c=null;me(o,()=>{He(c,o.value)||(c&&c.search!==o.value.search&&(l.value=1),r.emit("update:options",o.value),c=o.value)},{deep:!0,immediate:!0})}const Qa=D({...gt(),hideDefaultBody:Boolean,hideDefaultFooter:Boolean,hideDefaultHeader:Boolean,width:[String,Number],search:String,...Ma(),...Ea(),...xa(),...Wa(),...Ta(),..._a(),...ot(),...ia()},"DataTable"),Xa=D({...ga(),...Qa(),...sa(),...Xe()},"VDataTable"),ul=E()({name:"VDataTable",props:Xa(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=La(e),{sortBy:s,multiSort:r,mustSort:o}=Ca(e),{page:c,itemsPerPage:u}=ma(e),{disableSort:g}=Ot(e),{columns:h,headers:d,sortFunctions:y,sortRawFunctions:b,filterFunctions:P}=Ia(e,{groupBy:n,showSelect:V(e,"showSelect"),showExpand:V(e,"showExpand")}),{items:m}=Ua(e,h),p=V(e,"search"),{filteredItems:v}=ra(e,m,p,{transform:O=>O.columns,customKeyFilter:P}),{toggleSort:_}=Ba({sortBy:s,multiSort:r,mustSort:o,page:c}),{sortByWithGroups:F,opened:I,extractRows:R,isGroupOpen:M,toggleGroup:x}=$a({groupBy:n,sortBy:s,disableSort:g}),{sortedItems:f}=Fa(e,v,F,{transform:O=>({...O.raw,...O.columns}),sortFunctions:y,sortRawFunctions:b}),{flatItems:k}=Oa(f,n,I),w=S(()=>k.value.length),{startIndex:T,stopIndex:C,pageCount:H,setItemsPerPage:Z}=ba({page:c,itemsPerPage:u,itemsLength:w}),{paginatedItems:K}=ha({items:k,startIndex:T,stopIndex:C,itemsPerPage:u}),J=S(()=>R(K.value)),{isSelected:mt,select:bt,selectAll:yt,toggleSelect:ht,someSelected:xt,allSelected:pt}=Da(e,{allItems:m,currentPage:J}),{isExpanded:Pt,toggleExpand:St}=Ha(e);Ja({page:c,itemsPerPage:u,sortBy:s,groupBy:n,search:p}),le({VDataTableRows:{hideNoData:V(e,"hideNoData"),noDataText:V(e,"noDataText"),loading:V(e,"loading"),loadingText:V(e,"loadingText")}});const L=S(()=>({page:c.value,itemsPerPage:u.value,sortBy:s.value,pageCount:H.value,toggleSort:_,setItemsPerPage:Z,someSelected:xt.value,allSelected:pt.value,isSelected:mt,select:bt,selectAll:yt,toggleSelect:ht,isExpanded:Pt,toggleExpand:St,isGroupOpen:M,toggleGroup:x,items:J.value.map(O=>O.raw),internalItems:J.value,groupedItems:K.value,columns:h.value,headers:d.value}));return $(()=>{const O=Le.filterProps(e),kt=$e.filterProps(e),wt=Re.filterProps(e),It=Ce.filterProps(e);return i(Ce,B({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},It),{top:()=>{var Q;return(Q=t.top)==null?void 0:Q.call(t,L.value)},default:()=>{var Q,Pe,Se,ke,we,Ie;return t.default?t.default(L.value):i(U,null,[(Q=t.colgroup)==null?void 0:Q.call(t,L.value),!e.hideDefaultHeader&&i("thead",{key:"thead"},[i($e,kt,t)]),(Pe=t.thead)==null?void 0:Pe.call(t,L.value),!e.hideDefaultBody&&i("tbody",null,[(Se=t["body.prepend"])==null?void 0:Se.call(t,L.value),t.body?t.body(L.value):i(Re,B(a,wt,{items:K.value}),t),(ke=t["body.append"])==null?void 0:ke.call(t,L.value)]),(we=t.tbody)==null?void 0:we.call(t,L.value),(Ie=t.tfoot)==null?void 0:Ie.call(t,L.value)])},bottom:()=>t.bottom?t.bottom(L.value):!e.hideDefaultFooter&&i(U,null,[i(ua,null,null),i(Le,O,{prepend:t["footer.prepend"]})])})}),{}}});export{il as V,ol as a,Ae as b,Fe as c,ul as d,Ee as e,Qa as f,Xe as g,La as h,Ca as i,ma as j,Ia as k,$a as l,ga as m,ba as n,Oa as o,Ba as p,Da as q,Ha as r,Ja as s,Le as t,Ua as u,$e as v,Re as w};