import{ai as L,aj as F,O as J,h as M,e as b,r as d,E as k,o as x,c as g,b as e,w as l,V as v,n as C,R as $,d as p,a as o,t as i,M as U,N as q,d3 as G}from"./index-D1vr5Jkw.js";import{V as n,a as j}from"./VRow-BCOZP6AP.js";import{V as r}from"./VTextField-Bnf5Ko1W.js";import{V as H}from"./VDialog-BSMaHC31.js";import{V as K,a as Q,c as W,b as X}from"./VCard-DKlM9Kx7.js";import{V as Y}from"./VForm-Cjz8FYhm.js";import{V as Z}from"./VSelect-CIlRr3jv.js";import{V as ee}from"./VSpacer-BMzg9md4.js";import{a as te}from"./VAvatar-BWMYVnrm.js";import{V as le}from"./VChip-Dw9whi_v.js";import{V as T}from"./VTooltip-DJ5Ruo9y.js";import{V as ae}from"./VTable-jLgH7rer.js";const oe=L({id:"Contact",state:()=>({contacts:[]}),getters:{},actions:{async fetchContacts(){try{const m=await F.get("/api/contacts");this.contacts=m.data.contacts}catch(m){alert(m),console.log(m)}}}}),se={class:"title text-white"},ne=o("thead",null,[o("tr",null,[o("th",{class:"text-subtitle-1 font-weight-semibold"},"Id"),o("th",{class:"text-subtitle-1 font-weight-semibold"},"UserInfo"),o("th",{class:"text-subtitle-1 font-weight-semibold"},"Phone"),o("th",{class:"text-subtitle-1 font-weight-semibold"},"Joining Date"),o("th",{class:"text-subtitle-1 font-weight-semibold"},"Role"),o("th",{class:"text-subtitle-1 font-weight-semibold"},"Actions")])],-1),de={class:"text-subtitle-1"},ue={class:"d-flex align-center py-4"},ie={class:"ml-5"},re={class:"text-h6"},ce={class:"text-subtitle-1 d-block mt-1 textSecondary"},me={class:"text-subtitle-1"},fe={class:"text-subtitle-1"},ve={class:"d-flex align-center"},Ue=J({__name:"EditableTable",setup(m){const w=oe();M(()=>{w.fetchContacts()}),b(()=>w.contacts);const y=d(!0),V=d(!1),h=d(""),S=d(["primary","secondary","error","success","warning"]),c=d(G),f=d(-1),s=d({id:"",avatar:"1.jpg",userinfo:"",usermail:"",phone:"",jdate:"",role:"",rolestatus:""}),O=d({id:"",avatar:"1.jpg",userinfo:"",usermail:"",phone:"",jdate:"",role:"",rolestatus:""}),B=b(()=>c.value.filter(u=>u.userinfo.toLowerCase().includes(h.value.toLowerCase())));function D(u){f.value=c.value.indexOf(u),s.value=Object.assign({},u),V.value=!0}function E(u){const a=c.value.indexOf(u);confirm("Are you sure you want to delete this item?")&&c.value.splice(a,1)}function I(){V.value=!1,setTimeout(()=>{s.value=Object.assign({},O.value),f.value=-1},300)}function N(){f.value>-1?Object.assign(c.value[f.value],s.value):c.value.push(s.value),I()}const P=b(()=>f.value===-1?"New Contact":"Edit Contact");return(u,a)=>{const R=k("PencilIcon"),z=k("TrashIcon");return x(),g(U,null,[e(j,null,{default:l(()=>[e(n,{cols:"12",lg:"4",md:"6"},{default:l(()=>[e(r,{density:"compact",modelValue:h.value,"onUpdate:modelValue":a[0]||(a[0]=t=>h.value=t),label:"Search Contacts","hide-details":"",variant:"outlined"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",lg:"8",md:"6",class:"text-right"},{default:l(()=>[e(H,{modelValue:V.value,"onUpdate:modelValue":a[9]||(a[9]=t=>V.value=t),"max-width":"500"},{activator:l(({props:t})=>[e(v,C({color:"primary"},t,{flat:"",class:"ml-auto"}),{default:l(()=>[e($,{class:"mr-2"},{default:l(()=>[p("mdi-account-multiple-plus")]),_:1}),p("Add Contact ")]),_:2},1040)]),default:l(()=>[e(K,null,{default:l(()=>[e(Q,{class:"pa-4 bg-secondary"},{default:l(()=>[o("span",se,i(P.value),1)]),_:1}),e(W,null,{default:l(()=>[e(Y,{ref:"form",modelValue:y.value,"onUpdate:modelValue":a[8]||(a[8]=t=>y.value=t),"lazy-validation":""},{default:l(()=>[e(j,null,{default:l(()=>[e(n,{cols:"12",sm:"6"},{default:l(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.id,"onUpdate:modelValue":a[1]||(a[1]=t=>s.value.id=t),label:"Id"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.userinfo,"onUpdate:modelValue":a[2]||(a[2]=t=>s.value.userinfo=t),label:"User info"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.usermail,"onUpdate:modelValue":a[3]||(a[3]=t=>s.value.usermail=t),label:"User email",type:"email"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.phone,"onUpdate:modelValue":a[4]||(a[4]=t=>s.value.phone=t),label:"Phone",type:"phone"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.jdate,"onUpdate:modelValue":a[5]||(a[5]=t=>s.value.jdate=t),label:"Joining Date"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(r,{variant:"outlined","hide-details":"",modelValue:s.value.role,"onUpdate:modelValue":a[6]||(a[6]=t=>s.value.role=t),label:"Role"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",sm:"12"},{default:l(()=>[e(Z,{variant:"outlined","hide-details":"",items:S.value,modelValue:s.value.rolestatus,"onUpdate:modelValue":a[7]||(a[7]=t=>s.value.rolestatus=t),label:"Role Background"},null,8,["items","modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(X,{class:"pa-4"},{default:l(()=>[e(ee),e(v,{color:"error",onClick:I},{default:l(()=>[p("Cancel")]),_:1}),e(v,{color:"secondary",variant:"flat",disabled:s.value.userinfo==""||s.value.usermail=="",onClick:N},{default:l(()=>[p("Save")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(ae,{class:"mt-5"},{default:l(()=>[ne,o("tbody",null,[(x(!0),g(U,null,q(B.value,t=>(x(),g("tr",{key:t.id},[o("td",de,i(t.id),1),o("td",null,[o("div",ue,[o("div",null,[e(te,{src:t.avatar,width:"45px",class:"rounded-circle img-fluid"},null,8,["src"])]),o("div",ie,[o("h4",re,i(t.userinfo),1),o("span",ce,i(t.usermail),1)])])]),o("td",me,i(t.phone),1),o("td",fe,i(t.jdate),1),o("td",null,[e(le,{color:t.rolestatus,size:"small",label:""},{default:l(()=>[p(i(t.role),1)]),_:2},1032,["color"])]),o("td",null,[o("div",ve,[e(T,{text:"Edit"},{activator:l(({props:_})=>[e(v,C({icon:"",flat:"",onClick:A=>D(t)},_),{default:l(()=>[e(R,{"stroke-width":"1.5",size:"20",class:"text-primary"})]),_:2},1040,["onClick"])]),_:2},1024),e(T,{text:"Delete"},{activator:l(({props:_})=>[e(v,C({icon:"",flat:"",onClick:A=>E(t)},_),{default:l(()=>[e(z,{"stroke-width":"1.5",size:"20",class:"text-error"})]),_:2},1040,["onClick"])]),_:2},1024)])])]))),128))])]),_:1})],64)}}});export{Ue as _};