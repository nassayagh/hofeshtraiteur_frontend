import{a6 as M,av as y,e as V,r,aK as g,h as B,o as D,_ as H,w as l,b as a,d as n,t as d,n as T,V as f}from"./index-1gY6uGV-.js";import{u as A}from"./Controller-BQruU9Fa.js";import{u as E}from"./hall-DX5Dvy8F.js";import{b as I,V as N,c as P,a as U}from"./VCard-BB6Js1Oe.js";import{f as h}from"./VMenu-BgdHDmje.js";import{a as j,V as C}from"./VRow-DR6SNGE0.js";import{b as K}from"./VSelect-ph4-yU08.js";import{a as S}from"./VSpacer-D92K55La.js";import{V as O}from"./VDialog-C5FspTwe.js";const Y=M({__name:"ChangeHall",props:{modelValue:Object},emits:["update:modelValue"],setup(k,{emit:b}){const _=A(),c=y(),$=E(),w=k,p=b,i=V({get:()=>w.modelValue,set:e=>p("update:modelValue",e)}),u=r(!1),s=r(!1);r("");const m=r(i.value.hall_id||null),v=r([]);V(()=>`${g("Modifier la salle")}`);function x(){s.value=!0,_.changeHall(i.value.id,m.value).then(e=>{i.value=e.data,u.value=!1,c.showSuccess(g("Salle changée avec succès")),p("refresh",e.data)}).catch(e=>{s.value=!1,c.showError(e.message)}).then(()=>{s.value=!1})}return B(()=>{$.fetchItems({per_page:1e3}).then(e=>{v.value=e.data.data})}),(e,t)=>(D(),H(O,{modelValue:u.value,"onUpdate:modelValue":t[3]||(t[3]=o=>u.value=o),"max-width":"500px"},{activator:l(({props:o})=>[a(f,T({dark:""},o,{variant:"tonal",density:"compact",onClick:t[0]||(t[0]=R=>s.value=!1)}),{default:l(()=>[n(d(e.$t("Modifier")),1)]),_:2},1040)]),default:l(()=>[a(U,null,{default:l(()=>[a(I,{class:"text-h5 text-center py-6"},{default:l(()=>[n(d(e.$t("Modifier la salle")),1)]),_:1}),a(h),a(N,null,{default:l(()=>[a(j,null,{default:l(()=>[a(C,{cols:"12"},{default:l(()=>[a(C,{cols:"12"},{default:l(()=>[a(K,{modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=o=>m.value=o),items:v.value,"item-value":"id","item-title":"name",label:e.$t("Salle liée")},null,8,["modelValue","items","label"])]),_:1})]),_:1})]),_:1})]),_:1}),a(h),a(P,null,{default:l(()=>[a(S),a(f,{color:"error",variant:"flat",dark:"",onClick:t[2]||(t[2]=o=>u.value=!1)},{default:l(()=>[n(d(e.$t("Annuller")),1)]),_:1}),a(f,{color:"success",variant:"flat",loading:s.value,dark:"",onClick:x},{default:l(()=>[n(d(e.$t("Enregistrer")),1)]),_:1},8,["loading"]),a(S)]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});export{Y as _};