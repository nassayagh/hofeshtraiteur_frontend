import{u as ue}from"./service-Data54YE.js";import{_ as ie}from"./BaseBreadcrumb-DYaFDkdC.js";import{r as de}from"./validators-BPi-vT8z.js";import{a6 as me,r,av as ve,aD as u,h as ce,e as fe,g as pe,q as ge,Z as M,o as q,c as z,b as a,w as o,V as f,n as _,d,t as n,a as F,a8 as L,a4 as Ve,X as be}from"./index-D3DdXZdG.js";import{F as ke,V as Ce}from"./vee-validate.esm-DezKAZlh.js";import{V as A,a as R}from"./VRow-Bx-LvG9A.js";import{V as ye}from"./VDataTableServer-BNqi7y0T.js";import{V as $e,a as xe}from"./VToolbar-BCTsoXo1.js";import{V as U}from"./VTextField-DLykypQv.js";import{i as S,a as he}from"./VSpacer-DdAD-FGi.js";import{V as G}from"./VDialog-BHPx_cIy.js";import{a as K,b as X,V as Pe,c as Z}from"./VCard-1m9q3-_R.js";import{V as Se}from"./VContainer-7XyaLTnU.js";import{V as H}from"./VTooltip-Bont2L7V.js";import"./VAvatar-D6zO78xn.js";const Te={class:"text-h5"},we={key:0,class:"mt-2"},Ie=["onClick"],Ze=me({__name:"List",setup(_e){const E=r(),B=ve(),J=r({title:"Gestions des services"}),Q=r([{text:u("Tableau de bord"),disabled:!1,href:"/"},{text:u("Services"),disabled:!0,href:"#"}]),m=r([]),T=ue();ce(()=>{j()});const p=r(!1),w=r(!1),D=r(null),I=r(100),V=r(2),$=r(2),x=r(0),N=r(!1),b=r(!1),h=r("");r(["primary","secondary","error","success","warning"]);const g=r([{key:"name",order:"asc"}]);r(0);const k=r({itemsPerPage:100,rowsPerPage:100,page:1,sortDesc:[!0],sortBy:[{key:"name",order:"desc"}]}),P=r(-1),s=r({id:null,name:"",description:"",price:0,status:null}),W=r({id:null,name:"",description:"",status:null});function Y(l){return l==0?"#13DEB9":l==1?"#FA896B":l==2?"#5D87FF":"#FFAE1F"}function ee(l){return l==0?u("Started"):l=="cancel"?u("Cancelled"):l=="completed"?u("Completed"):u("Started")}const C=r(!1),ae=r([{title:"Actions",key:"actions",sortable:!1},{title:"Nom",align:"start",key:"name"},{title:"Prix",align:"start",key:"price"}]);function O(l){p.value=!1,P.value=m.value.indexOf(l),s.value=Object.assign({},l),b.value=!0}function te(l){s.value=l,C.value=!0}function le(){b.value=!1,setTimeout(()=>{s.value=Object.assign({},W.value),P.value=-1},300)}function oe(l,{setErrors:t}){var i;(i=E.value)==null||i.validate().then(({valid:y})=>{y&&(w.value=!0,T.addItem(s.value).then(e=>{if(e.data.error){t({apiError:e.data.message});return}s.value.id!=null?Object.assign(m.value[P.value],e.data):m.value.unshift(e.data),p.value=!1,b.value=!1,s.value={changePassword:!0},B.showSuccess(u("Service sauvée avec succès"))}).catch(e=>{w.value=!1,t({apiError:e})}).then(()=>{w.value=!1,t({apiError:null})}))})}function re(){T.deleteItem(s.value.id);const l=m.value.findIndex(t=>t.id==s.value.id);m.value.splice(l,1),C.value=!1,B.showSuccess(u("Service supprimé avec succès"))}const se=fe(()=>P.value===-1?u("Nouvel service"):u("Modifier la service"));function j(){try{clearTimeout(D.value)}catch{}D.value=setTimeout(()=>{p.value=!0;let l="id",t="desc";console.log(g.value),g.value.length>0&&(l=g.value[0].key,t=g.value[0].order),T.fetchItems({term:h.value,paginate:I.value,current_page:V.value,direction:t,order_by:l,page:k.value.page,per_page:k.value.itemsPerPage}).then(i=>{if(i.data){const{data:y,current_page:e,next_page_url:v,total:c,per_page:Fe,to:Ae,last_page:ne}=i.data;m.value=y,$.value=ne,x.value=c}}).catch(i=>{console.error(i)}).then(()=>{p.value=!1})},1e3)}return pe([h,k],()=>{j()},{deep:!0}),ge(()=>{V.value>$.value&&(V.value=$.value)}),(l,t)=>{const i=M("EditIcon"),y=M("TrashIcon");return q(),z(be,null,[a(ie,{title:`${J.value.title}(${x.value})`,breadcrumbs:Q.value},null,8,["title","breadcrumbs"]),a(R,null,{default:o(()=>[a(A,{cols:"12"},{default:o(()=>[a(ye,{class:"border rounded-md",headers:ae.value,loading:p.value,items:m.value,"multi-sort":!1,"items-per-page":I.value,"onUpdate:itemsPerPage":t[8]||(t[8]=e=>I.value=e),"items-per-page-text":l.$t("Articles par page"),options:k.value,"onUpdate:options":t[9]||(t[9]=e=>k.value=e),"sort-by":g.value,"onUpdate:sortBy":t[10]||(t[10]=e=>g.value=e),page:V.value,"onUpdate:page":t[11]||(t[11]=e=>V.value=e),"items-length":x.value,"onUpdate:itemsLength":t[12]||(t[12]=e=>x.value=e),"show-select":!1,"loading-text":l.$t("Chargement des éléments"),"no-data-text":l.$t("Pas de données"),"no-results-text":l.$t("Aucun résultat"),onPageCount:t[13]||(t[13]=e=>$.value=e)},{top:o(()=>[a($e,{class:"rounded-t-md",flat:""},{default:o(()=>[a(xe,null,{default:o(()=>[a(U,{density:"compact",modelValue:h.value,"onUpdate:modelValue":t[0]||(t[0]=e=>h.value=e),placeholder:l.$t("Rechercher..."),"hide-details":"",variant:"solo",clearable:""},null,8,["modelValue","placeholder"])]),_:1}),a(S),a(G,{modelValue:b.value,"onUpdate:modelValue":t[5]||(t[5]=e=>b.value=e),"max-width":"350px"},{activator:o(({props:e})=>[a(f,_({color:"primary",variant:"flat",onClick:t[1]||(t[1]=v=>s.value={}),dark:""},e),{default:o(()=>[d(n(l.$t("Ajouter une service")),1)]),_:2},1040)]),default:o(()=>[a(K,null,{default:o(()=>[a(X,{class:"pa-4 bg-secondary"},{default:o(()=>[F("span",Te,n(se.value),1)]),_:1}),a(L(ke),{ref_key:"refForm",ref:E,modelValue:N.value,"onUpdate:modelValue":t[4]||(t[4]=e=>N.value=e),onSubmit:oe},{default:o(({errors:e,isSubmitting:v})=>[a(Pe,null,{default:o(()=>[a(Se,{class:"px-0"},{default:o(()=>[a(R,null,{default:o(()=>[a(A,{cols:"12"},{default:o(()=>[a(U,{modelValue:s.value.name,"onUpdate:modelValue":t[2]||(t[2]=c=>s.value.name=c),rules:[L(de)],label:l.$t("Nom")},null,8,["modelValue","rules","label"])]),_:1}),a(A,{cols:"12"},{default:o(()=>[a(U,{modelValue:s.value.price,"onUpdate:modelValue":t[3]||(t[3]=c=>s.value.price=c),type:"number",label:l.$t("Prix")},null,8,["modelValue","label"])]),_:1})]),_:1}),e.apiError?(q(),z("div",we,[a(Ce,{color:"error"},{default:o(()=>[d(n(e.apiError),1)]),_:2},1024)])):Ve("",!0)]),_:2},1024)]),_:2},1024),a(Z,null,{default:o(()=>[a(S),a(f,{color:"error",variant:"flat",dark:"",onClick:le},{default:o(()=>[d(n(l.$t("Annuler")),1)]),_:1}),a(f,{color:"success",variant:"flat",loading:p.value,type:"submit"},{default:o(()=>[d(n(l.$t("Sauvegarder")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),a(G,{modelValue:C.value,"onUpdate:modelValue":t[7]||(t[7]=e=>C.value=e),"max-width":"500px"},{default:o(()=>[a(K,null,{default:o(()=>[a(X,{class:"text-h5 text-center py-6"},{default:o(()=>[d(n(l.$t("Êtes-vous sûr de vouloir supprimer cet élément ?")),1)]),_:1}),a(Z,null,{default:o(()=>[a(S),a(f,{color:"error",variant:"flat",dark:"",onClick:t[6]||(t[6]=e=>C.value=!1)},{default:o(()=>[d(n(l.$t("Annuler")),1)]),_:1}),a(f,{color:"success",variant:"flat",dark:"",onClick:re},{default:o(()=>[d(n(l.$t("OK")),1)]),_:1}),a(S)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.name":o(({item:e})=>[F("span",{onClick:v=>O(e),class:"cursor-pointer"},n(e.name),9,Ie)]),"item.status":o(({item:e})=>[a(he,{color:Y(e.status)},{default:o(()=>[d(n(ee(e.status)),1)]),_:2},1032,["color"])]),"item.actions":o(({item:e})=>[a(H,{text:l.$t("Modifier")},{activator:o(({props:v})=>[a(f,_({icon:"",flat:"",onClick:c=>O(e)},v),{default:o(()=>[a(i,{"stroke-width":"1.5",size:"20",class:"text-primary"})]),_:2},1040,["onClick"])]),_:2},1032,["text"]),a(H,{text:l.$t("Supprimer")},{activator:o(({props:v})=>[a(f,_({icon:"",flat:"",onClick:c=>te(e)},v),{default:o(()=>[a(y,{"stroke-width":"1.5",size:"20",class:"text-error"})]),_:2},1040,["onClick"])]),_:2},1032,["text"])]),"no-data":o(()=>[F("span",null,n(l.$t("Aucune donnée disponible")),1)]),_:1},8,["headers","loading","items","items-per-page","items-per-page-text","options","sort-by","page","items-length","loading-text","no-data-text","no-results-text"])]),_:1})]),_:1})],64)}}});export{Ze as default};