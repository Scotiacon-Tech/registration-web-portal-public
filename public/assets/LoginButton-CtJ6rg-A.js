import{s as n}from"./index-fwfMqYug.js";import{i as g,r,c as h,n as l,q as f,v as d,x as y,y as b,D as w,A as C,a0 as k,l as E,f as m}from"./index-CKB4TnKb.js";import{V as I}from"./VContainer-DO5312cJ.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{E as B}from"./emailFormVariant-DbFKH7n9.js";const v={key:0,class:"ml-1"},A=g({__name:"AuthButton",props:{appendIcon:{type:[String,Array,Function,Object],default:""},class:{default:""},credential:{},showUsername:{type:Boolean,default:!1},source:{default:"internal"}},setup(a){const t={amazon:{icon:"fa:fas fa-brands fa-amazon",label:n.buttonLoginAmazon,name:"Amazon"},email:{icon:"mdi:mdi-email",label:n.buttonLoginEmail,name:"Email"},facebook:{icon:"fa:fa fa-brands fa-facebook",label:n.buttonLoginFaceBook,name:"FaceBook"},google:{icon:"fa:fa fa-brands fa-google",label:n.buttonLoginGoogle,name:"Google"},internal:{icon:"mdi:mdi-email",label:n.buttonLoginEmail,name:"Email"},instagram:{icon:"fa:fa fa-brands fa-instagram",label:n.buttonLoginInstagram,name:"Instagram"},microsoft:{icon:"fa:fa fa-brands fa-windows",label:n.buttonLoginMicrosoft,name:"Microsoft"},steam:{icon:"fa:fa fa-brands fa-steam",label:n.buttonLoginSteam,name:"Steam"},telegram:{icon:"fa:fa fa-brands fa-telegram",label:n.buttonLoginTelegram,name:"Telegram"},twitch:{icon:"fa:fa fa-brands fa-twitch",label:n.buttonLoginTwitch,name:"Twitch"},twitter:{icon:"fa:fa fa-brands fa-twitter",label:n.buttonLoginTwitter,name:"Twitter"}},i=r(t[a.source.toLowerCase()].label||""),c=r(t[a.source.toLowerCase()].icon||""),e=h(()=>{var o,s;if(a.source.toLowerCase()==="internal"||a.source.toLowerCase()==="email")return(o=a.credential)==null?void 0:o.Email;try{const p=JSON.parse(((s=a.credential)==null?void 0:s.Data)||"{}");switch(a.source.toLowerCase()){case"telegram":return`@${p.username||p.id}`}}catch{}return""});return(o,s)=>(l(),f(I,{"append-icon":o.appendIcon,"prepend-icon":c.value,class:k(`${o.source.toLowerCase()} ${a.class}`)},{default:d(()=>[y(b(i.value)+" ",1),o.showUsername&&o.credential?(l(),w("small",v,"("+b(e.value)+")",1)):C("",!0)]),_:1},8,["append-icon","prepend-icon","class"]))}}),u=L(A,[["__scopeId","data-v-0b0a21a2"]]),D=["href"],T=g({__name:"LoginButton",props:{appendIcon:{type:[String,Array,Function,Object],default:""},credential:{},params:{default:()=>({variant:B.COMBINED})},showUsername:{type:Boolean,default:!1},source:{default:"internal"},url:{default:""}},setup(a){const t=r("");try{const e=new URL(a.url);t.value=e.searchParams.get("state")||""}catch{}const i=r({name:"EmailLogin",query:{state:t},params:a.params}),c=r({name:"TelegramLogin",query:{state:t},params:a.params});return(e,o)=>{const s=E("RouterLink");return e.source.toLowerCase()==="internal"||e.source.toLowerCase()==="email"?(l(),f(s,{key:0,to:i.value},{default:d(()=>[m(u,{"append-icon":e.appendIcon,credential:e.credential,"show-username":e.showUsername,source:e.source,class:"d-flex justify-start w-100"},null,8,["append-icon","credential","show-username","source"])]),_:1},8,["to"])):e.source.toLowerCase()==="telegram"?(l(),f(s,{key:1,to:c.value},{default:d(()=>[m(u,{"append-icon":e.appendIcon,credential:e.credential,"show-username":e.showUsername,source:e.source,class:"d-flex justify-start w-100"},null,8,["append-icon","credential","show-username","source"])]),_:1},8,["to"])):(l(),w("a",{key:2,href:`${e.url}${e.params.variant=="ADD_CREDENTIAL"?"/ADD_CREDENTIAL":""}`},[m(u,{"append-icon":e.appendIcon,credential:e.credential,"show-username":e.showUsername,source:e.source,class:"d-flex justify-start w-100"},null,8,["append-icon","credential","show-username","source"])],8,D))}}}),V=L(T,[["__scopeId","data-v-13016bf1"]]);export{u as A,V as L};
