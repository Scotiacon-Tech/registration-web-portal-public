import{a as m,t as h,h as d,v as b,u as v}from"./VGrid-CYMVmI-n.js";import{p as f,I as u,d as c,J as g,f as t,K as x}from"./index-Ch9bXf7m.js";const T=f({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...m(),...h(),...d(),...u()},"VTable"),k=c()({name:"VTable",props:T(),setup(a,r){let{slots:e,emit:y}=r;const{themeClasses:i}=g(a),{densityClasses:n}=b(a);return v(()=>t(a.tag,{class:["v-table",{"v-table--fixed-height":!!a.height,"v-table--fixed-header":a.fixedHeader,"v-table--fixed-footer":a.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom,"v-table--hover":a.hover},i.value,n.value,a.class],style:a.style},{default:()=>{var o,s,l;return[(o=e.top)==null?void 0:o.call(e),e.default?t("div",{class:"v-table__wrapper",style:{height:x(a.height)}},[t("table",null,[e.default()])]):(s=e.wrapper)==null?void 0:s.call(e),(l=e.bottom)==null?void 0:l.call(e)]}})),{}}});export{k as V,T as m};
