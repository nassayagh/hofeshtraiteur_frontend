import{_ as g}from"./BaseBreadcrumb-MM7Ucq-q.js";import{_ as f}from"./UiParentCard.vue_vue_type_script_setup_true_lang-CsqaYyYq.js";import{B as s}from"./dataTable-NQ3V0Wbg.js";import{V as b,a as c}from"./VRow-BCOZP6AP.js";import{q as v,r as _}from"./VDataTable-DPrwZVW5.js";import{V}from"./VTextField-Bnf5Ko1W.js";import{O as x,r as o,o as h,c as P,b as t,w as l,Q as m,a as k,M as y}from"./index-D1vr5Jkw.js";import"./VCard-DKlM9Kx7.js";import"./createSimpleFunctional-Dch3cn5Q.js";import"./VAvatar-BWMYVnrm.js";import"./VSpacer-BMzg9md4.js";/* empty css              */import"./VDivider-YK6hVzJ9.js";import"./VSelect-CIlRr3jv.js";import"./VInput-wE-kEM49.js";import"./index-BUFK01l6.js";import"./VList-DCxqrd6Z.js";import"./ssrBoot-DqJR9fHu.js";import"./dialog-transition-qqLD_QR0.js";import"./VMenu-B7rYg6cM.js";import"./VCheckboxBtn-CZutz9LK.js";import"./VSelectionControl-DriL0Ll-.js";import"./VLabel-oCCmZsZR.js";import"./VChip-Dw9whi_v.js";import"./VSlideGroup--qSWK503.js";import"./VTable-jLgH7rer.js";import"./filter-DbrqyDXV.js";/* empty css                   */import"./VField-Dws-0noL.js";const B={class:"text-center pt-2 mb-3 px-3"},ot=x({__name:"Pagination",setup(D){const n=o({title:"Data Table Pagination"}),p=o([{text:"Dashboard",disabled:!1,href:"#"},{text:"Data Table Pagination",disabled:!0,href:"#"}]),r=o(1),i=o(5),u=o([{title:"Name",align:"start",key:"name"},{title:"Project Name",align:"start",key:"project"},{title:"Post",align:"start",key:"post"},{title:"Status",align:"start",key:"status"},{title:"Budget",align:"end",key:"budget"}]),d=Math.ceil(s.length/i.value);return(C,e)=>(h(),P(y,null,[t(g,{title:n.value.title,breadcrumbs:p.value},null,8,["title","breadcrumbs"]),t(c,null,{default:l(()=>[t(b,{cols:"12"},{default:l(()=>[t(f,{title:"External Pagination"},{default:l(()=>[t(v,{"items-per-page":i.value,headers:u.value,items:m(s),page:r.value,"onUpdate:page":e[2]||(e[2]=a=>r.value=a),"hide-default-footer":"",class:"border rounded-md"},{bottom:l(()=>[k("div",B,[t(_,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),length:m(d)},null,8,["modelValue","length"]),t(V,{"model-value":i.value,class:"pa-2",label:"Items per page",type:"number",min:"-1",max:"15","hide-details":"","onUpdate:modelValue":e[1]||(e[1]=a=>i.value=parseInt(a,10))},null,8,["model-value"])])]),_:1},8,["items-per-page","headers","items","page"])]),_:1})]),_:1})]),_:1})],64))}});export{ot as default};