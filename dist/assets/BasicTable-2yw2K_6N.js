import{_ as v}from"./BaseBreadcrumb-Hezx_i_T.js";import{_ as s}from"./UiParentCard.vue_vue_type_script_setup_true_lang-TH41zdxa.js";import{B as r}from"./dataTable-CIbeUvLi.js";import{V as x,a as y}from"./VRow-BsuNGtNO.js";import{q as l}from"./VDataTable-BVkNS319.js";import{V as k}from"./VChip-oyYT5vSZ.js";import{O as B,r as i,o as D,c as V,b as e,w as t,Q as o,d as w,t as u,a as c,M as C}from"./index-CUPAlSMw.js";import"./VCard-BO1ndkev.js";import"./createSimpleFunctional-B4HWgZLU.js";import"./VAvatar-rh1wg38R.js";import"./VSpacer-NktmD2cS.js";/* empty css              */import"./VDivider-DdpUburD.js";import"./VSelect-CRYGgsKi.js";import"./VTextField-C8gGEMa3.js";/* empty css                   */import"./VField-C5J9Bt-Q.js";import"./index-0xMZgKO4.js";import"./VLabel-kv_J4-_w.js";import"./VInput-zc789c8J.js";import"./VList-Bbvp25zg.js";import"./ssrBoot-Bv-Phjmv.js";import"./dialog-transition-Bl1csaSv.js";import"./VMenu-C8ruu1bi.js";import"./VCheckboxBtn-DCQJCXrn.js";import"./VSelectionControl-C3v1ZqXl.js";import"./VTable-K1dFTe9o.js";import"./filter-mVmYd1gp.js";import"./VSlideGroup-DpvhW1l4.js";const F=["colspan"],le=B({__name:"BasicTable",setup(N){const f=i({title:"Basic Data Tables"}),b=i([{text:"Dashboard",disabled:!1,href:"#"},{text:"Basic Data Tables",disabled:!0,href:"#"}]),m=i([{title:"Name",align:"start",key:"name"},{title:"Project Name",align:"start",key:"project"},{title:"Post",align:"start",key:"post"},{title:"Status",align:"start",key:"status"},{title:"Budget",align:"end",key:"budget"}]),n=i(),_=i([{title:"Name",align:"start",key:"name",sortable:!1},{title:"Project Name",align:"start",key:"project"},{title:"Post",align:"start",key:"post"},{title:"Status",align:"start",key:"status"},{title:"Budget",align:"end",key:"budget"},{title:"",key:"data-table-expand"}]);function g(d){return d=="Active"?"#13DEB9":d=="Cancel"?"#FA896B":d=="Completed"?"#5D87FF":"#FFAE1F"}return(d,p)=>(D(),V(C,null,[e(v,{title:f.value.title,breadcrumbs:b.value},null,8,["title","breadcrumbs"]),e(y,null,{default:t(()=>[e(x,{cols:"12"},{default:t(()=>[e(s,{title:"Basic Table"},{default:t(()=>[e(l,{"items-per-page":"5",headers:m.value,items:o(r),"item-value":"name",class:"border rounded-md"},null,8,["headers","items"])]),_:1}),e(s,{title:"Selection",class:"mt-6 pb-0"},{default:t(()=>[e(l,{"items-per-page":"5",headers:m.value,items:o(r),"item-value":"name","show-select":"",class:"border rounded-md"},null,8,["headers","items"])]),_:1}),e(s,{title:"Density",class:"mt-6"},{default:t(()=>[e(l,{"items-per-page":"5",headers:m.value,items:o(r),"item-value":"name",density:"compact",class:"border rounded-md"},null,8,["headers","items"])]),_:1}),e(s,{title:"Item",class:"mt-6"},{default:t(()=>[e(l,{"items-per-page":"5",headers:m.value,items:o(r),"item-value":"name",class:"border rounded-md"},{"item.status":t(({item:a})=>[e(k,{color:g(a.status)},{default:t(()=>[w(u(a.status),1)]),_:2},1032,["color"])]),_:1},8,["headers","items"])]),_:1}),e(s,{title:"Expandable Rows",class:"mt-6"},{default:t(()=>[e(l,{expanded:n.value,"onUpdate:expanded":p[0]||(p[0]=a=>n.value=a),headers:_.value,items:o(r),"item-value":"name","show-expand":"",class:"border rounded-md"},{"expanded-row":t(({columns:a,item:h})=>[c("tr",null,[c("td",{colspan:a.length}," More info about "+u(h.name),9,F)])]),_:1},8,["expanded","headers","items"])]),_:1})]),_:1})]),_:1})],64))}});export{le as default};