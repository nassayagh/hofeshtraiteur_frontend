import{_ as C}from"./ProfileBanner.vue_vue_type_style_index_0_lang-C25TJapw.js";import{_ as k}from"./BaseBreadcrumb-MM7Ucq-q.js";import{ai as S,aj as G,O as P,h as B,e as p,r as s,E as D,o as i,c as f,b as e,w as t,a,d as _,t as n,M as h,N as T,F,V as M}from"./index-D1vr5Jkw.js";import{V as v,a as V}from"./VRow-BCOZP6AP.js";import{V as N}from"./VChip-Dw9whi_v.js";import{V as z}from"./VSheet-BFbvfRap.js";import{V as L}from"./VTextField-Bnf5Ko1W.js";import{V as R,c as j}from"./VCard-DKlM9Kx7.js";import{V as E}from"./VAvatar-BWMYVnrm.js";import"./VTabs-BjBW1Ve9.js";import"./VSlideGroup--qSWK503.js";import"./index-BUFK01l6.js";/* empty css              *//* empty css                   */import"./VField-Dws-0noL.js";import"./VLabel-oCCmZsZR.js";import"./VInput-wE-kEM49.js";import"./createSimpleFunctional-Dch3cn5Q.js";const I=S({id:"Gallery",state:()=>({gallery:[]}),getters:{},actions:{async fetchGallery(){try{const l=await G.get("/api/gallery/list");this.gallery=l.data.gallery}catch(l){alert(l),console.log(l)}}}}),$={class:"d-sm-flex align-center mb-5"},A={class:"text-h3"},O=["src"],U={class:"d-flex align-center gap-3"},q={class:"text-h6 mb-1"},H={class:"text-subtitle-1 d-block text-truncate d-flex align-center gap-2"},J={class:"ml-auto"},ue=P({__name:"Gallery",setup(l){const c=I();B(()=>{c.fetchGallery()});const g=p(()=>c.gallery),r=s("");s([{title:"Remove Tag"},{title:"Download"},{title:"Make Profile Picture"},{title:"Make Cover Photo"},{title:"Find support or Report Photo"}]);const y=s({title:"Social Profile"}),d=p(()=>g.value.filter(m=>m.title.toLowerCase().includes(r.value.toLowerCase()))),x=s([{text:"Dashboard",disabled:!1,href:"/"},{text:"Social Profile",disabled:!0,href:"#"}]);return(m,u)=>{const b=D("DotsVerticalIcon");return i(),f(h,null,[e(k,{title:y.value.title,breadcrumbs:x.value},null,8,["title","breadcrumbs"]),e(C),e(V,{class:"justify-content-end mt-5"},{default:t(()=>[e(v,{cols:"12"},{default:t(()=>[a("div",$,[a("h3",A,[_(" Gallery "),e(N,{size:"small",class:"ml-2 elevation-0",variant:"elevated",color:"secondary"},{default:t(()=>[_(n(d.value.length),1)]),_:1})]),e(z,{width:"250",class:"ml-0 ml-sm-auto mt-3 mt-sm-0"},{default:t(()=>[e(L,{color:"primary","hide-details":"",variant:"outlined",placeholder:"Search Gallery",density:"compact","prepend-inner-icon":"mdi-magnify",modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=o=>r.value=o)},null,8,["modelValue"])]),_:1})]),e(V,null,{default:t(()=>[(i(!0),f(h,null,T(d.value,(o,w)=>(i(),F(v,{cols:"12",md:"4",sm:"6",key:w},{default:t(()=>[e(R,{elevation:"10",class:"card-hover overflow-hidden"},{default:t(()=>[e(E,{size:"220",class:"rounded-0 w-100"},{default:t(()=>[a("img",{src:o.image,alt:"gallery",width:"450"},null,8,O)]),_:2},1024),e(j,null,{default:t(()=>[a("div",U,[a("div",null,[a("h6",q,n(o.title),1),a("span",H,n(o.dateTime),1)]),a("div",J,[e(M,{size:"x-small",color:"inherit",icon:"",variant:"text"},{default:t(()=>[e(b,{width:"14","stroke-width":"1.5"})]),_:1})])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})],64)}}});export{ue as default};