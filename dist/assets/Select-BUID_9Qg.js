import{_ as f}from"./BaseBreadcrumb-Hezx_i_T.js";import{_ as M}from"./UiParentCard.vue_vue_type_script_setup_true_lang-TH41zdxa.js";import{_ as p}from"./UiChildCard.vue_vue_type_script_setup_true_lang-D9anYQoW.js";import{V as s}from"./VSelect-CRYGgsKi.js";import{O as r,r as i,o as m,c as u,b as e,w as t,M as b}from"./index-CUPAlSMw.js";import{V as n,a as h}from"./VRow-BsuNGtNO.js";import"./VCard-BO1ndkev.js";import"./createSimpleFunctional-B4HWgZLU.js";import"./VAvatar-rh1wg38R.js";import"./VSpacer-NktmD2cS.js";/* empty css              */import"./VDivider-DdpUburD.js";import"./VTextField-C8gGEMa3.js";/* empty css                   */import"./VField-C5J9Bt-Q.js";import"./index-0xMZgKO4.js";import"./VLabel-kv_J4-_w.js";import"./VInput-zc789c8J.js";import"./VList-Bbvp25zg.js";import"./ssrBoot-Bv-Phjmv.js";import"./dialog-transition-Bl1csaSv.js";import"./VMenu-C8ruu1bi.js";import"./VCheckboxBtn-DCQJCXrn.js";import"./VSelectionControl-C3v1ZqXl.js";import"./VChip-oyYT5vSZ.js";import"./VSlideGroup-DpvhW1l4.js";const v=r({__name:"SelectDefault",setup(c){const a=i(["Foo","Bar","Fizz","Buzz"]);return(l,d)=>(m(),u("div",null,[e(s,{items:a.value,label:"Select Item","hide-details":""},null,8,["items"])]))}}),S=r({__name:"SelectReadOnly",setup(c){const a=i(["Foo","Bar","Fizz","Buzz"]);return(l,d)=>(m(),u("div",null,[e(s,{items:a.value,label:"Select Item",readonly:"","hide-details":""},null,8,["items"])]))}}),g=r({__name:"SelectMultiple",setup(c){const a=i([]),l=i(["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]);return(d,o)=>(m(),u("div",null,[e(s,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=_=>a.value=_),items:l.value,label:"Select Multiple",multiple:"",hint:"Pick your favorite states","persistent-hint":""},null,8,["modelValue","items"])]))}}),V=r({__name:"SelectChip",setup(c){const a=i([]),l=i(["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]);return(d,o)=>(m(),u("div",null,[e(s,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=_=>a.value=_),items:l.value,label:"Select item",multiple:"",chips:"",hint:"What are the target regions","persistent-hint":""},null,8,["modelValue","items"])]))}}),k=r({__name:"SelectDensity",setup(c){const a=i(["Foo","Bar","Fizz","Buzz"]);return(l,d)=>(m(),u("div",null,[e(s,{items:a.value,label:"Compact",density:"compact"},null,8,["items"]),e(s,{items:a.value,label:"Comfortable",density:"comfortable"},null,8,["items"]),e(s,{items:a.value,label:"Default","hide-details":""},null,8,["items"])]))}}),q=r({__name:"Select",setup(c){const a=i({title:"Select"}),l=i([{text:"Dashboard",disabled:!1,href:"#"},{text:"Select",disabled:!0,href:"#"}]);return(d,o)=>(m(),u(b,null,[e(f,{title:a.value.title,breadcrumbs:l.value},null,8,["title","breadcrumbs"]),e(h,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(M,{title:"Select"},{default:t(()=>[e(h,null,{default:t(()=>[e(n,{cols:"12",sm:"6"},{default:t(()=>[e(p,{title:"Basic"},{default:t(()=>[e(v)]),_:1})]),_:1}),e(n,{cols:"12",sm:"6"},{default:t(()=>[e(p,{title:"Read only"},{default:t(()=>[e(S)]),_:1})]),_:1}),e(n,{cols:"12",sm:"6"},{default:t(()=>[e(p,{title:"Multiple"},{default:t(()=>[e(g)]),_:1})]),_:1}),e(n,{cols:"12",sm:"6"},{default:t(()=>[e(p,{title:"Chips"},{default:t(()=>[e(V)]),_:1})]),_:1}),e(n,{cols:"12",sm:"12"},{default:t(()=>[e(p,{title:"Density"},{default:t(()=>[e(k)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64))}});export{q as default};