import{a as p,u as v}from"./VBtn-BpS949DL.js";import{m as b,c as F}from"./form-DOKm0nu_.js";import{f as V}from"./forwardRefs-C5Rpdz9U.js";import{p as y,d as h,r as R,f as P}from"./index-_3doXhpQ.js";const k=y({...p(),...b()},"VForm"),w=h()({name:"VForm",props:k(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,f){let{slots:n,emit:i}=f;const a=F(r),m=R();function u(t){t.preventDefault(),a.reset()}function l(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),i("submit",o),o.defaultPrevented||e.then(c=>{var s;let{valid:d}=c;d&&((s=m.value)==null||s.submit())}),o.preventDefault()}return v(()=>{var t;return P("form",{ref:m,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:u,onSubmit:l},[(t=n.default)==null?void 0:t.call(n,a)])}),V(a,m)}});export{w as V};
