import{_ as g}from"./BaseBreadcrumb-Hezx_i_T.js";import{_ as f}from"./UiParentCard.vue_vue_type_script_setup_true_lang-TH41zdxa.js";import{B as s}from"./dataTable-CIbeUvLi.js";import{V as b,a as c}from"./VRow-BsuNGtNO.js";import{q as v,r as _}from"./VDataTable-BVkNS319.js";import{V}from"./VTextField-C8gGEMa3.js";import{O as x,r as o,o as h,c as P,b as t,w as l,Q as m,a as k,M as y}from"./index-CUPAlSMw.js";import"./VCard-BO1ndkev.js";import"./createSimpleFunctional-B4HWgZLU.js";import"./VAvatar-rh1wg38R.js";import"./VSpacer-NktmD2cS.js";/* empty css              */import"./VDivider-DdpUburD.js";import"./VSelect-CRYGgsKi.js";import"./VInput-zc789c8J.js";import"./index-0xMZgKO4.js";import"./VList-Bbvp25zg.js";import"./ssrBoot-Bv-Phjmv.js";import"./dialog-transition-Bl1csaSv.js";import"./VMenu-C8ruu1bi.js";import"./VCheckboxBtn-DCQJCXrn.js";import"./VSelectionControl-C3v1ZqXl.js";import"./VLabel-kv_J4-_w.js";import"./VChip-oyYT5vSZ.js";import"./VSlideGroup-DpvhW1l4.js";import"./VTable-K1dFTe9o.js";import"./filter-mVmYd1gp.js";/* empty css                   */import"./VField-C5J9Bt-Q.js";const B={class:"text-center pt-2 mb-3 px-3"},ot=x({__name:"Pagination",setup(D){const n=o({title:"Data Table Pagination"}),p=o([{text:"Dashboard",disabled:!1,href:"#"},{text:"Data Table Pagination",disabled:!0,href:"#"}]),r=o(1),i=o(5),u=o([{title:"Name",align:"start",key:"name"},{title:"Project Name",align:"start",key:"project"},{title:"Post",align:"start",key:"post"},{title:"Status",align:"start",key:"status"},{title:"Budget",align:"end",key:"budget"}]),d=Math.ceil(s.length/i.value);return(C,e)=>(h(),P(y,null,[t(g,{title:n.value.title,breadcrumbs:p.value},null,8,["title","breadcrumbs"]),t(c,null,{default:l(()=>[t(b,{cols:"12"},{default:l(()=>[t(f,{title:"External Pagination"},{default:l(()=>[t(v,{"items-per-page":i.value,headers:u.value,items:m(s),page:r.value,"onUpdate:page":e[2]||(e[2]=a=>r.value=a),"hide-default-footer":"",class:"border rounded-md"},{bottom:l(()=>[k("div",B,[t(_,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),length:m(d)},null,8,["modelValue","length"]),t(V,{"model-value":i.value,class:"pa-2",label:"Items per page",type:"number",min:"-1",max:"15","hide-details":"","onUpdate:modelValue":e[1]||(e[1]=a=>i.value=parseInt(a,10))},null,8,["model-value"])])]),_:1},8,["items-per-page","headers","items","page"])]),_:1})]),_:1})]),_:1})],64))}});export{ot as default};