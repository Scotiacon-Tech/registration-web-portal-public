import{p as Y,ar as w,ap as Se,d as Z,af as Ce,al as xe,s as B,c as g,b6 as Ie,aM as te,w as Ve,f as i,aN as Pe,aB as ze,I as de,J as ve,ab as Ae,t as D,m as X,aF as ae,ag as we,u as Ee,a7 as ne,ah as Re,a8 as _e,H as se}from"./index-Ch9bXf7m.js";import{e as ie,g as Te,a as oe}from"./forwardRefs-DrPASvrm.js";import{a as ee,h as le,A as fe,q as pe,n as ce,u as he,d as E,w as ye,e as Fe,t as Be,f as Ge,r as Oe,g as Me,M as De,B as We,R as Le,j as He,I as $e,v as qe,k as Ne,l as Ke,O as je,s as Je,N as Ue,J as Qe,z as W}from"./VGrid-CYMVmI-n.js";function Xe(e){let{selectedElement:n,containerElement:a,isRtl:r,isHorizontal:o}=e;const y=G(o,a),u=me(o,r,a),m=G(o,n),v=ke(o,n),b=m*.4;return u>v?v-b:u+y<v+m?v-y+m+b:u}function Ye(e){let{selectedElement:n,containerElement:a,isHorizontal:r}=e;const o=G(r,a),y=ke(r,n),u=G(r,n);return y-o/2+u/2}function ue(e,n){const a=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[a])||0}function Ze(e,n){const a=e?"clientWidth":"clientHeight";return(n==null?void 0:n[a])||0}function me(e,n,a){if(!a)return 0;const{scrollLeft:r,offsetWidth:o,scrollWidth:y}=a;return e?n?y-o+r:r:a.scrollTop}function G(e,n){const a=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[a])||0}function ke(e,n){const a=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[a])||0}const el=Symbol.for("vuetify:v-slide-group"),ge=Y({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:el},nextIcon:{type:w,default:"$next"},prevIcon:{type:w,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...ee(),...Se({mobile:null}),...le(),...fe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),re=Z()({name:"VSlideGroup",props:ge(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isRtl:r}=Ce(),{displayClasses:o,mobile:y}=xe(e),u=pe(e,e.symbol),m=B(!1),v=B(0),b=B(0),x=B(0),d=g(()=>e.direction==="horizontal"),{resizeRef:f,contentRect:R}=ce(),{resizeRef:p,contentRect:P}=ce(),s=Ie(),k=g(()=>({container:f.el,duration:200,easing:"easeOutQuart"})),L=g(()=>u.selected.value.length?u.items.value.findIndex(t=>t.id===u.selected.value[0]):-1),S=g(()=>u.selected.value.length?u.items.value.findIndex(t=>t.id===u.selected.value[u.selected.value.length-1]):-1);if(te){let t=-1;Ve(()=>[u.selected.value,R.value,P.value,d.value],()=>{cancelAnimationFrame(t),t=requestAnimationFrame(()=>{if(R.value&&P.value){const l=d.value?"width":"height";b.value=R.value[l],x.value=P.value[l],m.value=b.value+1<x.value}if(L.value>=0&&p.el){const l=p.el.children[S.value];_(l,e.centerActive)}})})}const z=B(!1);function _(t,l){let c=0;l?c=Ye({containerElement:f.el,isHorizontal:d.value,selectedElement:t}):c=Xe({containerElement:f.el,isHorizontal:d.value,isRtl:r.value,selectedElement:t}),O(c)}function O(t){if(!te||!f.el)return;const l=G(d.value,f.el),c=me(d.value,r.value,f.el);if(!(ue(d.value,f.el)<=l||Math.abs(t-c)<16)){if(d.value&&r.value&&f.el){const{scrollWidth:U,offsetWidth:Q}=f.el;t=U-Q-t}d.value?s.horizontal(t,k.value):s(t,k.value)}}function h(t){const{scrollTop:l,scrollLeft:c}=t.target;v.value=d.value?c:l}function I(t){if(z.value=!0,!(!m.value||!p.el)){for(const l of t.composedPath())for(const c of p.el.children)if(c===l){_(c);return}}}function H(t){z.value=!1}let T=!1;function M(t){var l;!T&&!z.value&&!(t.relatedTarget&&((l=p.el)!=null&&l.contains(t.relatedTarget)))&&C(),T=!1}function F(){T=!0}function $(t){if(!p.el)return;function l(c){t.preventDefault(),C(c)}d.value?t.key==="ArrowRight"?l(r.value?"prev":"next"):t.key==="ArrowLeft"&&l(r.value?"next":"prev"):t.key==="ArrowDown"?l("next"):t.key==="ArrowUp"&&l("prev"),t.key==="Home"?l("first"):t.key==="End"&&l("last")}function V(t,l){if(!t)return;let c=t;do c=c==null?void 0:c[l==="next"?"nextElementSibling":"previousElementSibling"];while(c!=null&&c.hasAttribute("disabled"));return c}function C(t){if(!p.el)return;let l;if(!t)l=Pe(p.el)[0];else if(t==="next"){if(l=V(p.el.querySelector(":focus"),t),!l)return C("first")}else if(t==="prev"){if(l=V(p.el.querySelector(":focus"),t),!l)return C("last")}else t==="first"?(l=p.el.firstElementChild,l!=null&&l.hasAttribute("disabled")&&(l=V(l,"next"))):t==="last"&&(l=p.el.lastElementChild,l!=null&&l.hasAttribute("disabled")&&(l=V(l,"prev")));l&&l.focus({preventScroll:!0})}function A(t){const l=d.value&&r.value?-1:1,c=(t==="prev"?-l:l)*b.value;let J=v.value+c;if(d.value&&r.value&&f.el){const{scrollWidth:U,offsetWidth:Q}=f.el;J+=U-Q}O(J)}const q=g(()=>({next:u.next,prev:u.prev,select:u.select,isSelected:u.isSelected})),N=g(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!y.value;case!0:return m.value||Math.abs(v.value)>0;case"mobile":return y.value||m.value||Math.abs(v.value)>0;default:return!y.value&&(m.value||Math.abs(v.value)>0)}}),K=g(()=>Math.abs(v.value)>1),j=g(()=>{if(!f.value)return!1;const t=ue(d.value,f.el),l=Ze(d.value,f.el);return t-l-Math.abs(v.value)>1});return he(()=>i(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":N.value,"v-slide-group--is-overflowing":m.value},o.value,e.class],style:e.style,tabindex:z.value||u.selected.value.length?-1:0,onFocus:M},{default:()=>{var t,l,c;return[N.value&&i("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!K.value}],onMousedown:F,onClick:()=>K.value&&A("prev")},[((t=a.prev)==null?void 0:t.call(a,q.value))??i(ie,null,{default:()=>[i(E,{icon:r.value?e.nextIcon:e.prevIcon},null)]})]),i("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:h},[i("div",{ref:p,class:"v-slide-group__content",onFocusin:I,onFocusout:H,onKeydown:$},[(l=a.default)==null?void 0:l.call(a,q.value)])]),N.value&&i("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!j.value}],onMousedown:F,onClick:()=>j.value&&A("next")},[((c=a.next)==null?void 0:c.call(a,q.value))??i(ie,null,{default:()=>[i(E,{icon:r.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:u.selected,scrollTo:A,scrollOffset:v,focus:C,hasPrev:K,hasNext:j}}}),be=Symbol.for("vuetify:v-chip-group"),ll=Y({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:ze},...ge(),...ee(),...fe({selectedClass:"v-chip--selected"}),...le(),...de(),...ye({variant:"tonal"})},"VChipGroup"),il=Z()({name:"VChipGroup",props:ll(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{themeClasses:r}=ve(e),{isSelected:o,select:y,next:u,prev:m,selected:v}=pe(e,be);return Ae({VChip:{color:D(e,"color"),disabled:D(e,"disabled"),filter:D(e,"filter"),variant:D(e,"variant")}}),he(()=>{const b=re.filterProps(e);return i(re,X(b,{class:["v-chip-group",{"v-chip-group--column":e.column},r.value,e.class],style:e.style}),{default:()=>{var x;return[(x=a.default)==null?void 0:x.call(a,{isSelected:o,select:y,next:u,prev:m,selected:v.value})]}})}),{}}}),tl=Y({activeClass:String,appendAvatar:String,appendIcon:w,closable:Boolean,closeIcon:{type:w,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:w,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:w,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ae(),onClickOnce:ae(),...Fe(),...ee(),...Be(),...Ge(),...Oe(),...Me(),...De(),...We(),...le({tag:"span"}),...de(),...ye({variant:"tonal"})},"VChip"),ol=Z()({name:"VChip",directives:{Ripple:Le},props:tl(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:a,emit:r,slots:o}=n;const{t:y}=we(),{borderClasses:u}=He(e),{colorClasses:m,colorStyles:v,variantClasses:b}=$e(e),{densityClasses:x}=qe(e),{elevationClasses:d}=Ne(e),{roundedClasses:f}=Ke(e),{sizeClasses:R}=je(e),{themeClasses:p}=ve(e),P=Ee(e,"modelValue"),s=Je(e,be,!1),k=Ue(e,a),L=g(()=>e.link!==!1&&k.isLink.value),S=g(()=>!e.disabled&&e.link!==!1&&(!!s||e.link||k.isClickable.value)),z=g(()=>({"aria-label":y(e.closeLabel),onClick(h){h.preventDefault(),h.stopPropagation(),P.value=!1,r("click:close",h)}}));function _(h){var I;r("click",h),S.value&&((I=k.navigate)==null||I.call(k,h),s==null||s.toggle())}function O(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),_(h))}return()=>{var C;const h=k.isLink.value?"a":e.tag,I=!!(e.appendIcon||e.appendAvatar),H=!!(I||o.append),T=!!(o.close||e.closable),M=!!(o.filter||e.filter)&&s,F=!!(e.prependIcon||e.prependAvatar),$=!!(F||o.prepend),V=!s||s.isSelected.value;return P.value&&ne(i(h,X({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":M,"v-chip--pill":e.pill,[`${e.activeClass}`]:e.activeClass&&((C=k.isActive)==null?void 0:C.value)},p.value,u.value,V?m.value:void 0,x.value,d.value,f.value,R.value,b.value,s==null?void 0:s.selectedClass.value,e.class],style:[V?v.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:S.value?0:void 0,onClick:_,onKeydown:S.value&&!L.value&&O},k.linkProps),{default:()=>{var A;return[Qe(S.value,"v-chip"),M&&i(Te,{key:"filter"},{default:()=>[ne(i("div",{class:"v-chip__filter"},[o.filter?i(W,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):i(E,{key:"filter-icon",icon:e.filterIcon},null)]),[[_e,s.isSelected.value]])]}),$&&i("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?i(W,{key:"prepend-defaults",disabled:!F,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):i(se,null,[e.prependIcon&&i(E,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(oe,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content","data-no-activator":""},[((A=o.default)==null?void 0:A.call(o,{isSelected:s==null?void 0:s.isSelected.value,selectedClass:s==null?void 0:s.selectedClass.value,select:s==null?void 0:s.select,toggle:s==null?void 0:s.toggle,value:s==null?void 0:s.value.value,disabled:e.disabled}))??e.text]),H&&i("div",{key:"append",class:"v-chip__append"},[o.append?i(W,{key:"append-defaults",disabled:!I,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):i(se,null,[e.appendIcon&&i(E,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(oe,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),T&&i("button",X({key:"close",class:"v-chip__close",type:"button","data-testid":"close-chip"},z.value),[o.close?i(W,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):i(E,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Re("ripple"),S.value&&e.ripple,null]])}}});export{il as V,ol as a,re as b,ge as m};
