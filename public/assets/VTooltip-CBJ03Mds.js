import{a as b,V as u}from"./VOverlay-OdMvjfu9.js";import{f as O}from"./forwardRefs-DrPASvrm.js";import{p as S,ad as h,d as x,u as T,aO as k,c as e,r as w,m as d,f as A}from"./index-Ch9bXf7m.js";import{b as C}from"./scopeId-1QXxm33H.js";import{u as I}from"./VGrid-CYMVmI-n.js";const R=S({id:String,text:String,...h(b({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),M=x()({name:"VTooltip",props:R(),emits:{"update:modelValue":t=>!0},setup(t,m){let{slots:o}=m;const r=T(t,"modelValue"),{scopeId:v}=C(),f=k(),n=e(()=>t.id||`v-tooltip-${f}`),l=w(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:r.value?"scale-transition":"fade-transition"),p=e(()=>d({"aria-describedby":n.value},t.activatorProps));return I(()=>{const y=u.filterProps(t);return A(u,d({ref:l,class:["v-tooltip",t.class],style:t.style,id:n.value},y,{modelValue:r.value,"onUpdate:modelValue":a=>r.value=a,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:p.value,_disableGlobalStack:!0},v),{activator:o.activator,default:function(){var c;for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return((c=o.default)==null?void 0:c.call(o,...s))??t.text}})}),O({},l)}});export{M as V};
