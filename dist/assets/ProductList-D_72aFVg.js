import{u as k}from"./eCommerce-CtZZDZZH.js";import{_ as z}from"./UiParentCard.vue_vue_type_script_setup_true_lang-CsqaYyYq.js";import{O as D,h as E,e as F,r as s,E as r,o as d,F as m,w as e,b as o,a,V as c,t as l,Q as B,d as f}from"./index-D1vr5Jkw.js";import{a as h,V as p}from"./VRow-BCOZP6AP.js";import{V as M}from"./VTextField-Bnf5Ko1W.js";import{f as T}from"./index-DJxI5245.js";import{V as v}from"./VChip-Dw9whi_v.js";import"./VCard-DKlM9Kx7.js";import"./createSimpleFunctional-Dch3cn5Q.js";import"./VAvatar-BWMYVnrm.js";import"./VSpacer-BMzg9md4.js";/* empty css              */import"./VDivider-YK6hVzJ9.js";/* empty css                   */import"./VField-Dws-0noL.js";import"./index-BUFK01l6.js";import"./VLabel-oCCmZsZR.js";import"./VInput-wE-kEM49.js";import"./index-DT2YvziZ.js";import"./VSlideGroup--qSWK503.js";const N={class:"d-flex gap-2 justify-end"},$={class:"player-wrapper"},j=["src"],L={class:"player-wrapper"},O={class:"text-h5"},U={class:"player-wrapper"},A={class:"player-wrapper"},Q={class:"text-h5"},R={class:"player-wrapper"},q={class:"text-h5"},G={class:"player-wrapper"},H={class:"operation-wrapper"},he=D({__name:"ProductList",setup(J){const u=k();E(()=>{u.fetchProducts()});const x=F(()=>u.products),y=s("name"),n=s(""),V=[{text:"#",value:"image"},{text:"Product name",value:"name",sortable:!0},{text:"Created",value:"created",sortable:!0},{text:"Price",value:"offerPrice",sortable:!0},{text:"sale-price",value:"salePrice",sortable:!0},{text:"status",value:"isStock"},{text:"Action",value:"operation"}],w=s(x),P=s("rgb(var(--v-theme-secondary))"),_=s([]);return(K,i)=>{const b=r("CopyIcon"),g=r("PrinterIcon"),C=r("FilterIcon"),I=r("DotsIcon"),S=r("EasyDataTable");return d(),m(h,null,{default:e(()=>[o(p,{cols:"12",md:"12"},{default:e(()=>[o(z,{title:"Product List"},{default:e(()=>[o(h,{justify:"space-between",class:"align-center mb-3"},{default:e(()=>[o(p,{cols:"12",md:"3"},{default:e(()=>[o(M,{type:"text",variant:"outlined",placeholder:"Search Product",modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=t=>n.value=t),density:"compact","hide-details":"","prepend-inner-icon":"mdi-magnify"},null,8,["modelValue"])]),_:1}),o(p,{cols:"12",md:"3"},{default:e(()=>[a("div",N,[o(c,{icon:"",variant:"text"},{default:e(()=>[o(b,{size:"20"})]),_:1}),o(c,{icon:"",variant:"text"},{default:e(()=>[o(g,{size:"20"})]),_:1}),o(c,{icon:"",variant:"text"},{default:e(()=>[o(C,{size:"20"})]),_:1})])]),_:1})]),_:1}),o(S,{headers:V,items:w.value,"table-class-name":"customize-table","theme-color":P.value,"search-field":y.value,"search-value":n.value,"rows-per-page":5,"items-selected":_.value,"onUpdate:itemsSelected":i[1]||(i[1]=t=>_.value=t)},{"item-image":e(({image:t})=>[a("div",$,[a("img",{alt:"product",width:"70",class:"rounded-md",src:t},null,8,j)])]),"item-name":e(({name:t})=>[a("div",L,[a("h5",O,l(t),1)])]),"item-created":e(({date:t})=>[a("div",U,l(B(T)(new Date(t),"E, MMM d")),1)]),"item-offerPrice":e(({offerPrice:t})=>[a("div",A,[a("h5",Q,"$"+l(t),1)])]),"item-salePrice":e(({salePrice:t})=>[a("div",R,[a("h5",q,"$"+l(t),1)])]),"item-isStock":e(({isStock:t})=>[a("div",G,[t?(d(),m(v,{key:0,color:"success",size:"small"},{default:e(()=>[f(" In Stock ")]),_:1})):(d(),m(v,{key:1,color:"error",size:"small"},{default:e(()=>[f(" Out of Stock ")]),_:1}))])]),"item-operation":e(t=>[a("div",H,[o(c,{icon:"",variant:"text"},{default:e(()=>[o(I,{size:"18"})]),_:1})])]),_:1},8,["items","theme-color","search-field","search-value","items-selected"])]),_:1})]),_:1})]),_:1})}}});export{he as default};