import{a6 as U,av as A,e as g,r as u,aK as y,h as j,Z as z,o as v,_ as V,w as t,V as p,n as E,d,t as i,a4 as S,b as e}from"./index-h9IiG_-T.js";import{u as H}from"./demands-oqCGkyLU.js";import{u as K}from"./hall-CNs7vbzt.js";import{a as M}from"./formatters-ChhyeSK0.js";import{b as O,V as P,c as R,a as Z}from"./VCard-C9dFD9Yz.js";import{f as _}from"./VMenu-BYBTgcd3.js";import{a as q,V as C}from"./VRow-BEixVOdv.js";import{V as F}from"./VTextarea-CfZUdGLx.js";import{b as G}from"./VSelect-GKXwlEMC.js";import{a as b}from"./VSpacer-CNgfAsoG.js";import{V as J}from"./VDialog-WGK0BhCE.js";const re=U({__name:"ValidateDemand",props:{modelValue:Object,density:{type:String,default:"default"},icon:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{emit:h}){const w=H(),k=A(),D=K(),I=n,x=h,o=g({get:()=>I.modelValue,set:a=>x("update:modelValue",a)}),m=u(!1),r=u(!1),f=u(o.value.comment),c=u(o.value.hall_id),$=u([]),B=g(()=>`${y("Validation de la demande de ")} ${(o.value.customer||{firstname:""}).firstname} ${(o.value.customer||{lastname:""}).lastname} ${M(o.value.demand_date)||""}`);function N(){r.value=!0,w.validateItem(o.value.id,{comment:f.value,hall:c.value}).then(a=>{o.value=a.data,m.value=!1,k.showSuccess(y("Devis validé avec succès"))}).catch(a=>{r.value=!1,k.showError(a.message)}).then(()=>{r.value=!1})}return j(()=>{D.fetchItems({per_page:1e3}).then(a=>{$.value=a.data.data})}),(a,l)=>{const T=z("CheckIcon");return v(),V(J,{modelValue:m.value,"onUpdate:modelValue":l[4]||(l[4]=s=>m.value=s),"max-width":"500px"},{activator:t(({props:s})=>[o.value.prestation?S("",!0):(v(),V(p,E({key:0,dark:""},s,{flat:"",variant:"elevated",density:n.density,color:"primary",icon:n.icon,onClick:l[0]||(l[0]=L=>r.value=!1)}),{default:t(()=>[d(i(n.icon?"":a.$t("Valider en prestation"))+" ",1),n.icon?(v(),V(T,{key:0,"stroke-width":"1.5",size:"20"})):S("",!0)]),_:2},1040,["density","icon"]))]),default:t(()=>[e(Z,null,{default:t(()=>[e(O,{class:"text-h5 text-center py-6"},{default:t(()=>[d(i(a.$t("Êtes-vous sûr de vouloir Valider en prestation?")),1)]),_:1}),e(_),e(P,null,{default:t(()=>[e(q,null,{default:t(()=>[e(C,{cols:"12"},{default:t(()=>[d(i(B.value),1)]),_:1}),e(C,{cols:"12"},{default:t(()=>[e(F,{modelValue:f.value,"onUpdate:modelValue":l[1]||(l[1]=s=>f.value=s),label:a.$t("Note de liée")},null,8,["modelValue","label"])]),_:1}),e(C,{cols:"12"},{default:t(()=>[e(G,{modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=s=>c.value=s),items:$.value,"item-value":"id","item-title":"name",label:a.$t("Salle liée")},null,8,["modelValue","items","label"])]),_:1})]),_:1})]),_:1}),e(R,null,{default:t(()=>[e(b),e(p,{color:"error",variant:"flat",dark:"",onClick:l[3]||(l[3]=s=>m.value=!1)},{default:t(()=>[d(i(a.$t("Annuler")),1)]),_:1}),e(p,{color:"success",variant:"flat",loading:r.value,dark:"",onClick:N},{default:t(()=>[d(i(a.$t("Créer la prestation")),1)]),_:1},8,["loading"]),e(b)]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});export{re as _};