import{u as ye,S as De,_ as Ce,E as $e}from"./EditorMenubar-ju5IFyNo.js";import{u as Se}from"./demands-Bd7_O0R0.js";import{u as ke}from"./eventType-CmYfRWBq.js";import{u as we}from"./customers-NQnCbvfi.js";import{u as Te}from"./hall-v6vk4rC_.js";import{a as Q}from"./BaseBreadcrumb-Cdp50F07.js";import{r as W}from"./validators-BPi-vT8z.js";import{a as Ue}from"./formatters-DCCWVJxZ.js";import{a6 as Ee,aD as y,aC as Pe,r as n,av as Ae,h as Ne,e as D,g as Be,q as Ie,o as c,_ as U,w as o,V as C,n as F,d as v,t as i,b as a,$ as Fe,a as Y,a8 as V,c as Z,X as Le,a4 as x}from"./index-4mdTQG7y.js";import{F as je,V as Me}from"./vee-validate.esm-Cy0oQTZe.js";import{V as ee}from"./VDialog-C9ZkNc-j.js";import{d as Oe,b as He,i as L}from"./VSpacer-CRjXgjsS.js";import{V as qe}from"./VAvatar-C6_2b9Gz.js";import{b as ze,V as Ke,c as Re,a as Xe}from"./VCard-CQSz4GEV.js";import{V as Ge}from"./VContainer-CR-Cn5PJ.js";import{a as Je,V as s}from"./VRow-D6qv1nVI.js";import{V as ae}from"./VAutocomplete-C1TpkBsH.js";import{V as p}from"./VTextField-a1TyJvKW.js";import{V as Qe}from"./VLocaleProvider-CnVmXnlN.js";import{V as We}from"./VDatePicker-Bqfbwx_D.js";const Ye={class:"text-h5"},Ze={key:0,class:"mt-2"},_a=Ee({__name:"DemandForm",props:{modelValue:Object,isNew:{type:Boolean,default:!0},showCustomer:{type:Boolean,default:!0},title:y("Service"),buttonText:{type:String,default:y("Ajouter une demande")}},emits:["update:modelValue","update:item"],setup($,{emit:te}){const g=Pe(),j=n(),le=Ae(),oe=ke(),re=we(),ue=Te(),ne=$,M=te,de=n([]),O=n([]),E=n([]),H=n([]),q=Se();Ne(()=>{J(),ge(),ue.fetchItems({per_page:1e3}).then(t=>{H.value=t.data.data})});const z=n(!1),b=n(!1),K=n(null),S=n(!1),se=n(100),P=n(2),A=n(2),me=n(0),R=n(!1),k=n(!1),X=n(""),w=n([{key:"event_date",order:"ASC"}]),m=n({search:null,status:null,date:null,event_type:null}),N=n({itemsPerPage:100,rowsPerPage:100,page:1,sortDesc:[!0],sortBy:[{key:"event_date",order:"ASC"}]});n(-1);const l=D({get:()=>ne.modelValue||{id:null,customer:{}},set:t=>M("update:modelValue",t)}),B=ye({extensions:[De],content:l.value.commentaire}),ie=D(()=>l.value.event_date?g.format(l.value.event_date,"shortDate"):null),G=D(()=>l.value.event_date?Ue(l.value.event_date):null);function ve(){k.value=!1}function pe(t,{setErrors:e}){var u;console.log(l.value),(u=j.value)==null||u.validate().then(({valid:f})=>{var r;f&&(b.value=!0,q.addItem({...l.value,event_date:ie.value,commentaire:(r=B.value)==null?void 0:r.getHTML()}).then(d=>{if(d.data.error){e({apiError:d.data.message});return}const _=d.data.event_date!=null?new Date(d.data.event_date):null,T={...d.data,event_date:_};M("saved",T),b.value=!1,k.value=!1,le.showSuccess(y("Demande enregistrée avec succès")),J()}).catch(d=>{b.value=!1,e({apiError:d})}).then(()=>{b.value=!1,e({apiError:null})}))})}const fe=D(()=>l.value.id==null?"Nouvelle demande":"Modifier la demande"),ce=D(()=>m.value.date&&m.value.date.length?m.value.date.length>1?[g.format(m.value.date[0],"shortDate"),g.format(m.value.date[m.value.date.length-1],"shortDate")]:[g.format(m.value.date[0],"shortDate"),g.format(m.value.date[0],"shortDate")]:null);function Ve(){try{clearTimeout(K.value)}catch{}K.value=setTimeout(()=>{z.value=!0;let t="id",e="desc";console.log(w.value),w.value.length>0&&(t=w.value[0].key,e=w.value[0].order),q.fetchItems({term:X.value,paginate:se.value,current_page:P.value,direction:e,order_by:t,page:N.value.page,per_page:N.value.itemsPerPage,...m.value,date:ce.value}).then(u=>{if(u.data){const{data:f,current_page:r,next_page_url:d,total:_,per_page:T,to:h,last_page:_e}=u.data;de.value=f.map(I=>{const he=I.event_date!=null?new Date(I.event_date):null;return{...I,event_date:he}}),A.value=_e,me.value=_}}).catch(u=>{console.error(u)}).then(()=>{z.value=!1})},1e3)}function J(){oe.fetchItems({term:"",paginate:500,current_page:1,direction:"asc",order_by:"name",page:1,per_page:500}).then(t=>{if(t.data){const{data:e,current_page:u,next_page_url:f,total:r,per_page:d,to:_,last_page:T}=t.data;O.value=e}}).catch(t=>{console.error(t)}).then(()=>{})}function ge(){re.fetchItems({term:"",paginate:5e3,current_page:1,direction:"asc",order_by:"firstname",page:1,per_page:5e3}).then(t=>{if(t.data){const{data:e,current_page:u,next_page_url:f,total:r,per_page:d,to:_,last_page:T}=t.data;E.value=e.map(h=>({...h,name:h.firstname+" "+h.lastname+" ("+(h.is_customer?y("Client"):y("Prospect"))+")"}))}}).catch(t=>{console.error(t)}).then(()=>{})}Be([X,N,m],()=>{Ve()},{deep:!0}),Ie(()=>{P.value>A.value&&(P.value=A.value)});function be(t){if(t){const e=E.value.find(u=>u.id==t);e&&(l.value.customer=e)}}return(t,e)=>(c(),U(ee,{modelValue:k.value,"onUpdate:modelValue":e[18]||(e[18]=u=>k.value=u),"max-width":"1000px"},{activator:o(({props:u})=>[$.isNew?(c(),U(C,F({key:0,color:"primary",class:"align-self-end float-end mx-2",variant:"flat",dark:""},u),{default:o(()=>[v(i($.buttonText),1)]),_:2},1040)):(c(),U(Oe,F({key:1,value:"action","hide-details":"","min-height":"38"},u),{default:o(()=>[a(He,null,{default:o(()=>[a(qe,{size:"20",class:"mr-2"},{default:o(()=>[(c(),U(Fe("EditIcon"),{"stroke-width":"2",size:"20"}))]),_:1}),v(" "+i(t.$t("Modifier")),1)]),_:1})]),_:2},1040))]),default:o(()=>[a(Xe,null,{default:o(()=>[a(ze,{class:"pa-4 bg-secondary"},{default:o(()=>[Y("span",Ye,i(fe.value),1)]),_:1}),a(V(je),{ref_key:"refForm",ref:j,modelValue:R.value,"onUpdate:modelValue":e[17]||(e[17]=u=>R.value=u),onSubmit:pe},{default:o(({errors:u,isSubmitting:f})=>[a(Ke,null,{default:o(()=>[a(Ge,{class:"px-0"},{default:o(()=>[a(Je,null,{default:o(()=>[$.showCustomer?(c(),Z(Le,{key:0},[a(s,{cols:"12"},{default:o(()=>[a(ae,{modelValue:l.value.customer_id,"onUpdate:modelValue":[e[0]||(e[0]=r=>l.value.customer_id=r),be],placeholder:t.$t("Client"),label:t.$t("Client"),items:E.value,"item-value":"id","item-title":"name",clearable:"","hide-details":"",variant:"outlined"},null,8,["modelValue","placeholder","label","items"])]),_:1}),a(s,{cols:"12",md:"6"},{default:o(()=>[a(p,{modelValue:l.value.customer.firstname,"onUpdate:modelValue":e[1]||(e[1]=r=>l.value.customer.firstname=r),rules:[V(W)],label:t.$t("Prénom")},null,8,["modelValue","rules","label"])]),_:1}),a(s,{cols:"12",md:"6"},{default:o(()=>[a(p,{modelValue:l.value.customer.lastname,"onUpdate:modelValue":e[2]||(e[2]=r=>l.value.customer.lastname=r),rules:[V(W)],label:t.$t("Nom")},null,8,["modelValue","rules","label"])]),_:1}),a(s,{cols:"12",md:"6"},{default:o(()=>[a(p,{modelValue:l.value.customer.email,"onUpdate:modelValue":e[3]||(e[3]=r=>l.value.customer.email=r),label:t.$t("Email")},null,8,["modelValue","label"])]),_:1}),a(s,{cols:"12",md:"6"},{default:o(()=>[a(p,{modelValue:l.value.customer.phone,"onUpdate:modelValue":e[4]||(e[4]=r=>l.value.customer.phone=r),label:t.$t("Téléphone")},null,8,["modelValue","label"])]),_:1})],64)):x("",!0),a(s,{cols:"12",md:"6"},{default:o(()=>[a(ae,{modelValue:l.value.event_type_id,"onUpdate:modelValue":e[5]||(e[5]=r=>l.value.event_type_id=r),placeholder:t.$t("Type d'événement"),items:O.value,"item-value":"id","item-title":"name",clearable:"","hide-details":"",variant:"outlined"},null,8,["modelValue","placeholder","items"])]),_:1}),a(s,{cols:"12",md:"6"},{default:o(()=>[a(ee,{ref:"dialogDemandDate",modelValue:S.value,"onUpdate:modelValue":e[11]||(e[11]=r=>S.value=r),"return-value":l.value.event_date,"onUpdate:returnValue":e[12]||(e[12]=r=>l.value.event_date=r),persistent:"",width:"290px"},{activator:o(({props:r})=>[a(p,F({modelValue:G.value,"onUpdate:modelValue":e[6]||(e[6]=d=>G.value=d),"prepend-inner-icon":"bx-calendar"},r,{placeholder:t.$t("Date de l'évènement"),"hide-details":"",clearable:"",readonly:"","onClick:clear":e[7]||(e[7]=d=>l.value.event_date=null)}),null,16,["modelValue","placeholder"])]),default:o(({isActive:r})=>[a(Qe,{locale:"fr"},{default:o(()=>[a(We,{modelValue:l.value.event_date,"onUpdate:modelValue":e[10]||(e[10]=d=>l.value.event_date=d),"hide-header":""},{actions:o(()=>[a(C,{color:"primary",onClick:e[8]||(e[8]=d=>S.value=!1)},{default:o(()=>[v(i(t.$t("Annuler")),1)]),_:1}),a(L),a(C,{variant:"elevated",color:"primary",onClick:e[9]||(e[9]=d=>S.value=!1)},{default:o(()=>[v(i(t.$t("OK")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue","return-value"])]),_:1}),a(s,{cols:"12",md:"6"},{default:o(()=>[a(Q,{modelValue:l.value.reception_period,"onUpdate:modelValue":e[13]||(e[13]=r=>l.value.reception_period=r),"hide-details":"",items:[t.$t("En matiné"),t.$t("Le midi"),t.$t("En soirée")],label:t.$t("La réception se déroulera plutôt"),clearable:""},null,8,["modelValue","items","label"])]),_:1}),a(s,{cols:"12",md:"6"},{default:o(()=>[a(p,{modelValue:l.value.reception_start_time,"onUpdate:modelValue":e[14]||(e[14]=r=>l.value.reception_start_time=r),"hide-details":"",label:t.$t("Heure de réception"),clearable:""},null,8,["modelValue","label"])]),_:1}),a(s,{cols:"12",md:"6"},{default:o(()=>[a(Q,{modelValue:l.value.hall_id,"onUpdate:modelValue":e[15]||(e[15]=r=>l.value.hall_id=r),items:H.value,"item-value":"id","item-title":"name",label:t.$t("Salle liée")},null,8,["modelValue","items","label"])]),_:1}),a(s,{cols:"12",md:"6"},{default:o(()=>[a(p,{modelValue:l.value.number_people,"onUpdate:modelValue":e[16]||(e[16]=r=>l.value.number_people=r),"hide-details":"",type:"number",label:t.$t("Nombre de convives")},null,8,["modelValue","label"])]),_:1}),a(s,{cols:"12"},{default:o(()=>[Y("label",null,i(t.$t("Commentaire")),1),a(Ce,{editor:V(B)},null,8,["editor"]),a(V($e),{editor:V(B)},null,8,["editor"])]),_:1})]),_:1}),u.apiError?(c(),Z("div",Ze,[a(Me,{color:"error"},{default:o(()=>[v(i(u.apiError),1)]),_:2},1024)])):x("",!0)]),_:2},1024)]),_:2},1024),a(Re,null,{default:o(()=>[a(L),a(C,{color:"error",variant:"flat",dark:"",onClick:ve},{default:o(()=>[v(i(t.$t("Annuler")),1)]),_:1}),a(C,{color:"success",variant:"flat",loading:b.value,type:"submit"},{default:o(()=>[v(i(t.$t("Sauvegarder")),1)]),_:1},8,["loading"]),a(L)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]))}});export{_a as _};