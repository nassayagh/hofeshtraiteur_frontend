import{u as re}from"./eventType-DBhcZX2R.js";import{_ as se}from"./BaseBreadcrumb-fyBJdSqw.js";import{r as ne}from"./validators-BPi-vT8z.js";import{a6 as ue,r,av as ie,aK as n,h as de,e as me,g as ve,q as fe,o as B,c as E,b as t,w as o,V as C,n as pe,d as u,t as i,a as D,a8 as N,a4 as ce,ac as O,X as ge}from"./index-Cbri8peo.js";import{F as Ve}from"./vee-validate.esm-B7zgDFPg.js";import{V as j,a as q}from"./VRow-DgMjTeOq.js";import{V as be}from"./VDataTableServer-Fworj-iS.js";import{V as Ce,a as ke}from"./VToolbar-CIeXORtz.js";import{V as z}from"./VTextField-BaVdAKnF.js";import{a as x,V as ye}from"./VSpacer-BopiE_oa.js";import{V as K}from"./VDialog-Da6d4ZZk.js";import{a as L,b as M,V as $e,c as R}from"./VCard-CQWGNQxb.js";import{V as he}from"./VContainer-C85smIiD.js";import{V as xe}from"./VAlert-DbqOOpsx.js";import"./VSelect-CI7ZCyIn.js";import"./VMenu-b91v3T8V.js";import"./VAvatar-cgqxsFrK.js";import"./filter-DUqRVzUz.js";const Pe={class:"text-h5"},Te={key:0,class:"mt-2"},Je=ue({__name:"List",setup(we){const I=r(),S=ie(),G=r({title:"Gestions des événements"}),X=r([{text:n("Tableau de bord"),disabled:!1,href:"/"},{text:n("Événements"),disabled:!0,href:"#"}]),m=r([]),P=re();de(()=>{U()});const f=r(!1),T=r(!1),F=r(null),w=r(100),c=r(2),k=r(2),y=r(0),_=r(!1),g=r(!1),$=r("");r(["primary","secondary","error","success","warning"]);const p=r([{key:"name",order:"asc"}]);r(0);const V=r({itemsPerPage:100,rowsPerPage:100,page:1,sortDesc:[!0],sortBy:[{key:"name",order:"desc"}]}),h=r(-1),s=r({id:null,name:"",description:"",status:null}),H=r({id:null,name:"",description:"",status:null});function J(l){return l==0?"#13DEB9":l==1?"#FA896B":l==2?"#5D87FF":"#FFAE1F"}function Q(l){return l==0?n("Started"):l=="cancel"?n("Cancelled"):l=="completed"?n("Completed"):n("Started")}const b=r(!1),W=r([{title:"Nom",align:"start",key:"name"},{title:"Actions",key:"actions",sortable:!1}]);function A(l){f.value=!1,h.value=m.value.indexOf(l),s.value=Object.assign({},l),g.value=!0}function Y(l){s.value=l,b.value=!0}function Z(){g.value=!1,setTimeout(()=>{s.value=Object.assign({},H.value),h.value=-1},300)}function ee(l,{setErrors:a}){var e;(e=I.value)==null||e.validate().then(({valid:v})=>{v&&(T.value=!0,P.addItem(s.value).then(d=>{if(d.data.error){a({apiError:d.data.message});return}s.value.id!=null?Object.assign(m.value[h.value],d.data):m.value.unshift(d.data),f.value=!1,g.value=!1,s.value={changePassword:!0},S.showSuccess(n("Événement sauvée avec succès"))}).catch(d=>{T.value=!1,a({apiError:d})}).then(()=>{T.value=!1,a({apiError:null})}))})}function ae(){P.deleteItem(s.value.id);const l=m.value.findIndex(a=>a.id==s.value.id);m.value.splice(l,1),b.value=!1,S.showSuccess(n("Événement supprimé avec succès"))}const te=me(()=>h.value===-1?n("Nouvel événements"):n("Modifier la événements"));function U(){try{clearTimeout(F.value)}catch{}F.value=setTimeout(()=>{f.value=!0;let l="id",a="desc";console.log(p.value),p.value.length>0&&(l=p.value[0].key,a=p.value[0].order),P.fetchItems({term:$.value,paginate:w.value,current_page:c.value,direction:a,order_by:l,page:V.value.page,per_page:V.value.itemsPerPage}).then(e=>{if(e.data){const{data:v,current_page:d,next_page_url:Ie,total:le,per_page:Se,to:Fe,last_page:oe}=e.data;m.value=v,k.value=oe,y.value=le}}).catch(e=>{console.error(e)}).then(()=>{f.value=!1})},1e3)}return ve([$,V],()=>{U()},{deep:!0}),fe(()=>{c.value>k.value&&(c.value=k.value)}),(l,a)=>(B(),E(ge,null,[t(se,{title:`${G.value.title}(${y.value})`,breadcrumbs:X.value},null,8,["title","breadcrumbs"]),t(q,null,{default:o(()=>[t(j,{cols:"12"},{default:o(()=>[t(be,{class:"border rounded-md",headers:W.value,loading:f.value,items:m.value,"multi-sort":!1,"items-per-page":w.value,"onUpdate:itemsPerPage":a[7]||(a[7]=e=>w.value=e),"items-per-page-text":l.$t("Articles par page"),options:V.value,"onUpdate:options":a[8]||(a[8]=e=>V.value=e),"sort-by":p.value,"onUpdate:sortBy":a[9]||(a[9]=e=>p.value=e),page:c.value,"onUpdate:page":a[10]||(a[10]=e=>c.value=e),"items-length":y.value,"onUpdate:itemsLength":a[11]||(a[11]=e=>y.value=e),"show-select":!1,"loading-text":l.$t("Chargement des éléments"),"no-data-text":l.$t("Pas de données"),"no-results-text":l.$t("Aucun résultat"),onPageCount:a[12]||(a[12]=e=>k.value=e)},{top:o(()=>[t(Ce,{class:"rounded-t-md",flat:""},{default:o(()=>[t(ke,null,{default:o(()=>[t(z,{density:"compact",modelValue:$.value,"onUpdate:modelValue":a[0]||(a[0]=e=>$.value=e),placeholder:l.$t("Rechercher..."),"hide-details":"",variant:"solo"},null,8,["modelValue","placeholder"])]),_:1}),t(x),t(K,{modelValue:g.value,"onUpdate:modelValue":a[4]||(a[4]=e=>g.value=e),"max-width":"350px"},{activator:o(({props:e})=>[t(C,pe({color:"primary",variant:"flat",onClick:a[1]||(a[1]=v=>A={}),dark:""},e),{default:o(()=>[u(i(l.$t("Ajouter une événements")),1)]),_:2},1040)]),default:o(()=>[t(L,null,{default:o(()=>[t(M,{class:"pa-4 bg-secondary"},{default:o(()=>[D("span",Pe,i(te.value),1)]),_:1}),t(N(Ve),{ref_key:"refForm",ref:I,modelValue:_.value,"onUpdate:modelValue":a[3]||(a[3]=e=>_.value=e),onSubmit:ee},{default:o(({errors:e,isSubmitting:v})=>[t($e,null,{default:o(()=>[t(he,{class:"px-0"},{default:o(()=>[t(q,null,{default:o(()=>[t(j,{cols:"12"},{default:o(()=>[t(z,{modelValue:s.value.name,"onUpdate:modelValue":a[2]||(a[2]=d=>s.value.name=d),rules:[N(ne)],label:l.$t("Nom")},null,8,["modelValue","rules","label"])]),_:1})]),_:1}),e.apiError?(B(),E("div",Te,[t(xe,{color:"error"},{default:o(()=>[u(i(e.apiError),1)]),_:2},1024)])):ce("",!0)]),_:2},1024)]),_:2},1024),t(R,null,{default:o(()=>[t(x),t(C,{color:"error",variant:"flat",dark:"",onClick:Z},{default:o(()=>[u(i(l.$t("Annuler")),1)]),_:1}),t(C,{color:"success",variant:"flat",loading:f.value,type:"submit"},{default:o(()=>[u(i(l.$t("Sauvegarder")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),t(K,{modelValue:b.value,"onUpdate:modelValue":a[6]||(a[6]=e=>b.value=e),"max-width":"500px"},{default:o(()=>[t(L,null,{default:o(()=>[t(M,{class:"text-h5 text-center py-6"},{default:o(()=>[u(i(l.$t("Êtes-vous sûr de vouloir supprimer cet élément ?")),1)]),_:1}),t(R,null,{default:o(()=>[t(x),t(C,{color:"error",variant:"flat",dark:"",onClick:a[5]||(a[5]=e=>b.value=!1)},{default:o(()=>[u(i(l.$t("Annuler")),1)]),_:1}),t(C,{color:"success",variant:"flat",dark:"",onClick:ae},{default:o(()=>[u(i(l.$t("OK")),1)]),_:1}),t(x)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.status":o(({item:e})=>[t(ye,{color:J(e.status)},{default:o(()=>[u(i(Q(e.status)),1)]),_:2},1032,["color"])]),"item.actions":o(({item:e})=>[t(O,{color:"info",size:"small",class:"me-2",onClick:v=>A(e)},{default:o(()=>[u(" mdi-pencil ")]),_:2},1032,["onClick"]),t(O,{color:"error",size:"small",onClick:v=>Y(e)},{default:o(()=>[u(" mdi-delete ")]),_:2},1032,["onClick"])]),"no-data":o(()=>[D("span",null,i(l.$t("Aucune donnée disponible")),1)]),_:1},8,["headers","loading","items","items-per-page","items-per-page-text","options","sort-by","page","items-length","loading-text","no-data-text","no-results-text"])]),_:1})]),_:1})],64))}});export{Je as default};