import{u as B}from"./Controller-B94AR8hB.js";import{a6 as F,e as U,o as p,_ as C,w as t,b as e,a as o,t as l,a8 as f,d as _,a4 as O,c as N,av as L,r as d,aM as P,n as W,V as S,h as ie,Z as K,aN as me,g as ce,aO as ve,X as ee,a5 as se}from"./index-DU4Ip7cm.js";import{_ as fe,V as oe}from"./BaseBreadcrumb-DAGp_hs4.js";import{f as q,a as z}from"./formatters-BQuIx1l-.js";import{d as te,V as D,a as T,b as X,c as Z}from"./VCard-VzGi2o3t.js";import{f as E}from"./VMenu-D3BY79qY.js";import{a as M,V as g}from"./VRow-KcC3-R_Z.js";import{V as le}from"./VTextarea-B09cZ4VN.js";import{V as ae,a as A}from"./VSpacer-BZJel4Gu.js";import{V as G}from"./VDialog-7tXyM-gZ.js";import{u as pe}from"./service-BKH_VWpJ.js";import{V as _e}from"./VAutocomplete-DYon43-m.js";import{V as ne}from"./VTextField-C_r9msRC.js";import{a as Ve,_ as ue}from"./PaymentForm.vue_vue_type_script_setup_true_lang-DuFeENw7.js";import{_ as he}from"./HallWidget.vue_vue_type_script_setup_true_lang-DpPC6A2X.js";import{V as re}from"./VTooltip-CgS39xVf.js";import"./VAvatar-BdPy9Na4.js";import"./VSelect-Ct51bVp_.js";import"./filter-C6CALvAH.js";import"./paymentMethod-BBpV3k1U.js";import"./VLocaleProvider-DicOH4ld.js";import"./VDatePicker-CEHym_yu.js";import"./VSheet-CfSE2cos.js";import"./ChangeHall.vue_vue_type_script_setup_true_lang-CKjlXKbD.js";import"./hall-IbpW5hbj.js";import"./VAlert-D3VFvyPX.js";const $e={class:"text-h6"},ye={class:"text-subtitle-1 textSecondary mt-3"},ge={class:"text-subtitle-1 textSecondary mt-3"},be={class:"text-subtitle-1 textSecondary mt-3"},ke={class:"text-subtitle-1 textSecondary mt-3"},Ce={class:"text-subtitle-1 textSecondary mt-3"},we={class:"text-subtitle-1 textSecondary mt-3"},Se={class:"text-subtitle-1 textSecondary mt-3"},xe={class:"text-subtitle-1 textSecondary mt-3"},je={class:"text-subtitle-1 textSecondary mt-3"},Pe={class:"text-subtitle-1 textSecondary mt-3"},Ue={key:0,class:"text-subtitle-1 textSecondary mt-3"},Ae=F({__name:"CustomerWidget",props:{modelValue:Object,showDemandInfo:Boolean,source:{type:String,default:"SITE"}},emits:["update:modelValue"],setup(j,{emit:a}){const v=B(),w=j,x=a,$=U({get:()=>w.modelValue,set:i=>x("update:modelValue",i)});return(i,n)=>(p(),C(T,{elevation:"10",class:"overflow-hidden h-100"},{default:t(()=>[e(te,{class:"py-4 px-6 text-white bg-primary"},{default:t(()=>[o("h4",$e,l(i.$t("Identification du demandeur")),1)]),_:1}),e(D,{class:"pl-6 pr-6"},{default:t(()=>[o("p",ye,l(i.$t("Prénom :"))+" "+l($.value.customer.firstname||""),1),o("p",ge,l(i.$t("Nom :"))+" "+l($.value.customer.lastname||""),1),o("p",be,l(i.$t("Email :"))+" "+l($.value.customer.email||""),1),o("p",ke,l(i.$t("Téléphone :"))+" "+l($.value.customer.phone||""),1),o("p",Ce,l(i.$t("Date d'enregistrement :"))+" "+l(f(q)($.value.customer.created_at)||""),1),o("p",we,[_(l(i.$t("Type :"))+" ",1),$.value.customer&&$.value.customer.is_customer?(p(),C(ae,{key:0,color:"success"},{default:t(()=>[_(l(i.$t("Client")),1)]),_:1})):(p(),C(ae,{key:1,color:"error"},{default:t(()=>[_(l(i.$t("Prospect")),1)]),_:1}))])]),_:1}),j.showDemandInfo?(p(),C(D,{key:0,class:"pt-0 pb-0"},{default:t(()=>[e(E)]),_:1})):O("",!0),j.showDemandInfo?(p(),C(D,{key:1,class:"pl-6 pr-6"},{default:t(()=>[o("p",Se,l(i.$t("Source :"))+" "+l(w.source||""),1),o("p",xe,l(i.$t("Type événement :"))+" "+l($.value.event_type||""),1),o("p",je,l(i.$t("Date de la demande :"))+" "+l(f(q)($.value.demand_date)||""),1),o("p",Pe,l(i.$t("Date création de la prestation :"))+" "+l(f(q)($.value.created_at)||""),1),$.value.status>=f(v).statuses.closed?(p(),N("p",Ue,l(i.$t("Date clôture de la prestation :"))+" "+l(f(q)($.value.closed_date)||""),1)):O("",!0)]),_:1})):O("",!0)]),_:1}))}}),Ie=F({__name:"CancelPrestation",props:{modelValue:Object},emits:["update:modelValue"],setup(j,{emit:a}){const v=B(),w=L(),x=j,$=a,i=U({get:()=>x.modelValue,set:s=>$("update:modelValue",s)}),n=d(!1),m=d(!1),b=d("");U(()=>`${P("Annuler la prestation")}`);function V(){m.value=!0,v.cancelItem(i.value.id,b.value).then(s=>{i.value=s.data,n.value=!1,w.showSuccess(P("Prestation annulée avec succès"))}).catch(s=>{m.value=!1,w.showError(s.message)}).then(()=>{m.value=!1})}return(s,c)=>(p(),C(G,{modelValue:n.value,"onUpdate:modelValue":c[3]||(c[3]=u=>n.value=u),"max-width":"500px"},{activator:t(({props:u})=>[e(S,W({class:"ml-2",dark:""},u,{variant:"outlined",color:"primary",onClick:c[0]||(c[0]=y=>m.value=!1)}),{default:t(()=>[_(l(s.$t("Annuler la prestation")),1)]),_:2},1040)]),default:t(()=>[e(T,null,{default:t(()=>[e(X,{class:"text-h5 text-center py-6"},{default:t(()=>[_(l(s.$t("Annuler la prestation")),1)]),_:1}),e(E),e(D,null,{default:t(()=>[e(M,null,{default:t(()=>[e(g,{cols:"12",class:"text-center"},{default:t(()=>[_(l(s.$t("Êtes-vous sûr de vouloir Annuler la prestation?")),1)]),_:1}),e(g,{cols:"12"},{default:t(()=>[e(le,{modelValue:b.value,"onUpdate:modelValue":c[1]||(c[1]=u=>b.value=u),placeholder:s.$t("Commentaire"),label:s.$t("Commentaire")},null,8,["modelValue","placeholder","label"])]),_:1})]),_:1})]),_:1}),e(E),e(Z,null,{default:t(()=>[e(A),e(S,{color:"error",variant:"flat",dark:"",onClick:c[2]||(c[2]=u=>n.value=!1)},{default:t(()=>[_(l(s.$t("Non")),1)]),_:1}),e(S,{color:"success",variant:"flat",loading:m.value,dark:"",onClick:V},{default:t(()=>[_(l(s.$t("Oui")),1)]),_:1},8,["loading"]),e(A)]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),De=F({__name:"ValidatePrestation",props:{modelValue:Object},emits:["update:modelValue"],setup(j,{emit:a}){const v=B(),w=L(),x=j,$=a,i=U({get:()=>x.modelValue,set:s=>$("update:modelValue",s)}),n=d(!1),m=d(!1),b=d("");U(()=>`${P("Valider la prestation")}`);function V(){m.value=!0,v.validateItem(i.value.id,b.value).then(s=>{i.value=s.data,n.value=!1,w.showSuccess(P("Prestation validée avec succès"))}).catch(s=>{m.value=!1,w.showError(s.message)}).then(()=>{m.value=!1})}return(s,c)=>(p(),C(G,{modelValue:n.value,"onUpdate:modelValue":c[3]||(c[3]=u=>n.value=u),"max-width":"500px"},{activator:t(({props:u})=>[e(S,W({dark:""},u,{variant:"elevated",color:"primary",onClick:c[0]||(c[0]=y=>m.value=!1)}),{default:t(()=>[_(l(i.value.status==f(v).statuses.cancelled?s.$t("Rouvrir la prestation"):s.$t("Valider la prestation")),1)]),_:2},1040)]),default:t(()=>[e(T,null,{default:t(()=>[e(X,{class:"text-h5 text-center py-6"},{default:t(()=>[_(l(i.value.status==f(v).statuses.cancelled?s.$t("Rouvrir la prestation"):s.$t("Valider la prestation")),1)]),_:1}),e(E),e(D,null,{default:t(()=>[e(M,null,{default:t(()=>[e(g,{cols:"12",class:"text-center"},{default:t(()=>[_(l(i.value.status==f(v).statuses.cancelled?s.$t("Êtes-vous sûr de vouloir Rouvrir la prestation"):s.$t("Êtes-vous sûr de vouloir Valider la prestation?")),1)]),_:1}),i.value.status==f(v).statuses.cancelled?(p(),C(g,{key:0,cols:"12"},{default:t(()=>[e(le,{modelValue:b.value,"onUpdate:modelValue":c[1]||(c[1]=u=>b.value=u),placeholder:s.$t("Commentaire"),label:s.$t("Commentaire")},null,8,["modelValue","placeholder","label"])]),_:1})):O("",!0)]),_:1})]),_:1}),e(E),e(Z,null,{default:t(()=>[e(A),e(S,{color:"error",variant:"flat",dark:"",onClick:c[2]||(c[2]=u=>n.value=!1)},{default:t(()=>[_(l(s.$t("Non")),1)]),_:1}),e(S,{color:"success",variant:"flat",loading:m.value,dark:"",onClick:V},{default:t(()=>[_(l(s.$t("Oui")),1)]),_:1},8,["loading"]),e(A)]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),Te={key:1},de=F({__name:"ServiceForm",props:{modelValue:Object,prestation:Object,title:P("Service"),buttonText:P("Ajouter un service")},emits:["update:modelValue","update:item"],setup(j,{emit:a}){const v=B(),w=L(),x=pe(),$=j,i=a,n=U({get:()=>$.modelValue,set:u=>i("update:modelValue",u)}),m=d(!1),b=d(!1),V=d([]);ie(()=>{x.fetchItems({per_page:500}).then(u=>{V.value=u.data.data,console.log(V.value)})});function s(){b.value=!0,v.saveService($.prestation.id,n.value).then(u=>{m.value=!1,i("update:item",u.data),w.showSuccess(P("Service enregistré avec succès"))}).catch(u=>{b.value=!1,w.showError(u.message)}).then(()=>{b.value=!1})}function c(u){if(u){const y=V.value.find(Q=>Q.name==u);y&&(n.value.quantity=n.value.quantity||1,n.value.service_id=y.id||null,n.value.price=y.price||0,n.value.total=(n.value.quantity||1)*(y.price||0))}}return(u,y)=>{const Q=K("EditIcon");return p(),C(G,{modelValue:m.value,"onUpdate:modelValue":y[5]||(y[5]=I=>m.value=I),"max-width":"500px"},{activator:t(({props:I})=>[e(S,W({dark:""},I,{icon:n.value.id!=null,flat:n.value.id!=null,variant:"elevated",color:n.value.id!=null?null:"primary",onClick:y[0]||(y[0]=r=>b.value=!1)}),{default:t(()=>[n.value.id?(p(),C(Q,{key:0,"stroke-width":"1.5",size:"20",class:"text-primary"})):(p(),N("span",Te,l(j.buttonText),1))]),_:2},1040,["icon","flat","color"])]),default:t(()=>[e(T,null,{default:t(()=>[e(X,{class:"text-h5 text-center py-6"},{default:t(()=>[_(l(j.title),1)]),_:1}),e(E),e(D,null,{default:t(()=>[e(M,null,{default:t(()=>[e(g,{cols:"12"},{default:t(()=>[e(_e,{modelValue:n.value.name,"onUpdate:modelValue":[y[1]||(y[1]=I=>n.value.name=I),c],label:u.$t("Service"),clearable:"",items:V.value,"item-title":"name","item-value":"name",filled:!1,variant:"outlined"},null,8,["modelValue","label","items"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(ne,{min:1,modelValue:n.value.quantity,"onUpdate:modelValue":y[2]||(y[2]=I=>n.value.quantity=I),type:"number",label:u.$t("Quantité")},null,8,["modelValue","label"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(ne,{min:0,modelValue:n.value.price,"onUpdate:modelValue":y[3]||(y[3]=I=>n.value.price=I),type:"number",label:u.$t("Prix")},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1}),e(Z,null,{default:t(()=>[e(A),e(S,{color:"error",variant:"flat",dark:"",onClick:y[4]||(y[4]=I=>m.value=!1)},{default:t(()=>[_(l(u.$t("Annuler")),1)]),_:1}),e(S,{color:"success",variant:"flat",loading:b.value,dark:"",onClick:s},{default:t(()=>[_(l(u.$t("Ajouter")),1)]),_:1},8,["loading"]),e(A)]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),Oe=F({__name:"DeleteService",props:{modelValue:Object,service:Object},emits:["update:modelValue"],setup(j,{emit:a}){const v=B(),w=L(),x=j,$=a,i=U({get:()=>x.modelValue,set:V=>$("update:modelValue",V)}),n=d(!1),m=d(!1);function b(){m.value=!0,v.deleteService(i.value.id,x.service.id).then(V=>{i.value=V.data,n.value=!1,w.showSuccess(P("Service supprimé avec succès"))}).then(()=>{n.value=!1,m.value=!1})}return(V,s)=>{const c=K("TrashIcon");return p(),C(G,{modelValue:n.value,"onUpdate:modelValue":s[2]||(s[2]=u=>n.value=u),"max-width":"350px"},{activator:t(({props:u})=>[e(S,W({icon:"",flat:"",class:"ml-3",dark:""},u,{onClick:s[0]||(s[0]=y=>m.value=!1)}),{default:t(()=>[e(c,{"stroke-width":"1.5",size:"20",class:"text-error"})]),_:2},1040)]),default:t(()=>[e(T,null,{default:t(()=>[e(X,{class:"text-h5 text-center py-6"},{default:t(()=>[_(l(V.$t("Êtes-vous sûr de vouloir supprimer le service?")),1)]),_:1}),e(Z,null,{default:t(()=>[e(A),e(S,{color:"error",variant:"flat",dark:"",onClick:s[1]||(s[1]=u=>n.value=!1)},{default:t(()=>[_(l(V.$t("Non")),1)]),_:1}),e(S,{color:"success",variant:"flat",loading:m.value,dark:"",onClick:b},{default:t(()=>[_(l(V.$t("Oui")),1)]),_:1},8,["loading"]),e(A)]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),Me=F({__name:"DeletePayment",props:{modelValue:Object,payment:Object},emits:["update:modelValue"],setup(j,{emit:a}){const v=B(),w=L(),x=j,$=a,i=U({get:()=>x.modelValue,set:V=>$("update:modelValue",V)}),n=d(!1),m=d(!1);function b(){m.value=!0,v.deletePayment(x.payment.prestation_id,x.payment.id).then(V=>{i.value=V.data,n.value=!1,w.showSuccess(P("Paiement supprimé avec succès"))}).then(()=>{n.value=!1,m.value=!1})}return(V,s)=>{const c=K("TrashIcon");return p(),C(G,{modelValue:n.value,"onUpdate:modelValue":s[2]||(s[2]=u=>n.value=u),"max-width":"350px"},{activator:t(({props:u})=>[e(S,W({icon:"",flat:"",class:"ml-3",dark:""},u,{onClick:s[0]||(s[0]=y=>m.value=!1)}),{default:t(()=>[e(c,{"stroke-width":"1.5",size:"20",class:"text-error"})]),_:2},1040)]),default:t(()=>[e(T,null,{default:t(()=>[e(X,{class:"text-h5 text-center py-6"},{default:t(()=>[_(l(V.$t("Êtes-vous sûr de vouloir supprimer le paiement?")),1)]),_:1}),e(Z,null,{default:t(()=>[e(A),e(S,{color:"error",variant:"flat",dark:"",onClick:s[1]||(s[1]=u=>n.value=!1)},{default:t(()=>[_(l(V.$t("Non")),1)]),_:1}),e(S,{color:"success",variant:"flat",loading:m.value,dark:"",onClick:b},{default:t(()=>[_(l(V.$t("Oui")),1)]),_:1},8,["loading"]),e(A)]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),Ee=F({__name:"CommentPrestation",props:{modelValue:Object},emits:["update:modelValue"],setup(j,{emit:a}){const v=B(),w=L(),x=j,$=a,i=U({get:()=>x.modelValue,set:s=>$("update:modelValue",s)}),n=d(!1),m=d(!1),b=d(i.value.commentaire||"");U(()=>`${P("Commentaire")}`);function V(){m.value=!0,v.addComment(i.value.id,b.value).then(s=>{i.value=s.data,n.value=!1,w.showSuccess(P("Commentaire ajouté avec succès"))}).catch(s=>{m.value=!1,w.showError(s.message)}).then(()=>{m.value=!1})}return(s,c)=>(p(),C(G,{modelValue:n.value,"onUpdate:modelValue":c[3]||(c[3]=u=>n.value=u),"max-width":"500px"},{activator:t(({props:u})=>[e(S,W({density:"compact",dark:""},u,{variant:"outlined",color:"primary",onClick:c[0]||(c[0]=y=>m.value=!1)}),{default:t(()=>[_(l(!i.value.commentaire||i.value.commentaire.length==0?s.$t("Ajouter"):s.$t("Modifier")),1)]),_:2},1040)]),default:t(()=>[e(T,null,{default:t(()=>[e(X,{class:"text-h5 text-center py-6"},{default:t(()=>[_(l(!i.value.commentaire||i.value.commentaire.length==0?s.$t("Ajouter un commentaire"):s.$t("Modifier le commentaire")),1)]),_:1}),e(E),e(D,null,{default:t(()=>[e(M,null,{default:t(()=>[e(g,{cols:"12"},{default:t(()=>[e(le,{modelValue:b.value,"onUpdate:modelValue":c[1]||(c[1]=u=>b.value=u),placeholder:s.$t("Commentaire"),label:s.$t("Commentaire")},null,8,["modelValue","placeholder","label"])]),_:1})]),_:1})]),_:1}),e(E),e(Z,null,{default:t(()=>[e(A),e(S,{color:"error",variant:"flat",dark:"",onClick:c[2]||(c[2]=u=>n.value=!1)},{default:t(()=>[_(l(s.$t("Annuler")),1)]),_:1}),e(S,{color:"success",variant:"flat",loading:m.value,dark:"",onClick:V},{default:t(()=>[_(l(s.$t("Enregistrer")),1)]),_:1},8,["loading"]),e(A)]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),Ne={key:0,class:"ml-2"},qe={class:"d-flex align-start"},Be={class:"text-h4 mt-1"},Fe={class:"ml-auto"},Re={class:"mt-9"},ze={class:"text-h4 font-weight-semibold mb-1"},Le={class:"d-flex align-start"},Qe={class:"text-h4 mt-1"},We={class:"ml-auto"},Xe={class:"mt-9"},Ze={class:"text-h4 font-weight-semibold mb-1"},Ge={class:"d-flex align-start"},He={class:"text-h4 mt-1"},Je={class:"mt-4"},Ke={class:"mb-1"},Ye={class:"d-flex align-start"},et={class:"text-h4 mt-1"},tt={class:"mt-4"},at={class:"mb-1"},lt={class:"d-flex align-start"},st={class:"text-h4 mt-1"},ot={class:"mt-4"},nt={class:"mb-1"},ut={class:"text-h6 d-flex align-center"},rt={class:"text-h6"},dt={class:"text-h6"},it={class:"text-h6"},mt={class:"text-h6"},ct={class:"text-h6"},vt={class:"d-flex align-center"},ft={class:"text-h6 d-flex align-center"},pt={class:"mr-2"},_t={class:"text-h6"},Vt={class:"text-h6"},ht={class:"text-h6"},$t={class:"text-h6"},Wt=F({__name:"View",setup(j){d(),L();const a=d({id:null,status:0,service:"",demand_date:null,customer_id:null,demand_id:null,payments:[],services:[],customer:{id:null,firstname:"",lastname:"",email:"",phone:"",is_customer:!1,created_at:null,demands:[],prestations:[]}}),v=B(),w=me(),x=d({title:P("Détails du prestation")+" "+(a.value.event_type||"")+" "+(a.value.customer||{firstname:""}).firstname+" "+(a.value.customer||{lastname:""}).lastname+" "+(q(a.value.demand_date)||"")}),$=d([{text:P("Dashboard"),disabled:!1,href:"/"},{text:P("Prestations"),disabled:!1,href:"/prestations"},{text:a.value.event_type||"",disabled:!0,href:"#"}]);function i(){x.value={title:P("Prestation")+" "+(a.value.demand.event_type||"")+" ("+(a.value.customer||{firstname:""}).firstname+" "+(a.value.customer||{lastname:""}).lastname+" "+(q(a.value.event_date)||"")+")"},$.value=[{text:P("Dashboard"),disabled:!1,href:"/"},{text:P("Prestations"),disabled:!1,href:"/prestations"},{text:x.value.title,disabled:!0,href:"#"}]}ie(()=>{Q()});const n=d(!1);d(!1),d(!1),d(!1),d(!1),d(!1),d(!1),d({}),d({}),d(!1),d(10),d(2),d(2),d(!1),d(!1),d(null);const m=d("");d(["primary","secondary","error","success","warning"]),d([{key:"demand_date",order:"DESC"}]),d(0),d({itemsPerPage:10,rowsPerPage:10,page:1,sortDesc:[!0],sortBy:[{key:"demand_date",order:"DESC"}]});const b=d(-1);d({id:null,avatar:"1.jpg",name:"",email:"",password:"",changePassword:!0,jdate:"",role:"",rolestatus:""});const V=d({id:null,service_id:null,name:"",price:0,total:0,quantity:0}),s=d({id:null,prestation_id:null,amount:0});d({id:null,avatar:"1.jpg",name:"",email:"",password:"",changePassword:!0,jdate:"",role:"",rolestatus:""}),d(!1),d([{title:"Prestation",align:"start",key:"event_type"},{title:"Date de la prestation",align:"start",key:"demand_date"},{title:"Status",align:"start",key:"status"},{title:"Actions",key:"actions",sortable:!1}]),U(()=>v.prestations.data.filter(r=>r.email.toLowerCase().includes(m.value.toLowerCase())));const c=U(()=>w.params.id);U(()=>a.value.customer.prestations?a.value.customer.prestations.filter(r=>r.id!=a.value.id):[]);const u=U(()=>a.value.services&&a.value.services.length?a.value.services.reduce((r,h)=>(console.log(h.total,r),parseFloat(h.total)+parseFloat(r)),0):0),y=U(()=>a.value.payments&&a.value.payments.length?u.value-a.value.payments.reduce((r,h)=>parseFloat(h.amount)+parseFloat(r),0):u.value);U(()=>b.value===-1?"Nouvel administrateur":"Modifier l’administrateur");function Q(){n.value=!0,v.fetchItem(w.params.id).then(r=>{r.data.error||(n.value=!1,a.value=r.data,a.value.payments=(a.value.payments||[]).map(h=>{const J=h.payment_date!=null?new Date(h.payment_date):null;return{...h,payment_date:J}}),i())}).catch(r=>{n.value=!1}).then(()=>{n.value=!1})}function I(r){a.value=r}return ce(c,(r,h)=>{r!=h&&Q()},{deep:!0}),(r,h)=>{const J=K("CurrencyEuroIcon");return p(),N(ee,null,[n.value?O("",!0):(p(),C(fe,{key:0,title:x.value.title,breadcrumbs:$.value},null,8,["title","breadcrumbs"])),n.value?(p(),C(M,{key:1,justify:"center",align:"center","align-content":"center"},{default:t(()=>[e(g,{cols:"12",justify:"center",align:"center","align-content":"center"},{default:t(()=>[e(ve,{indeterminate:"",color:"primary",size:"150"})]),_:1})]),_:1})):(p(),C(M,{key:2},{default:t(()=>[e(g,{cols:"12",md:"4"},{default:t(()=>[_(l(r.$t("Status :"))+" ",1),e(ae,{rounded:"md",class:"font-weight-bold",color:f(v).statusColor(a.value.status),size:"small",label:""},{default:t(()=>[_(l(f(v).statusText(a.value.status)),1)]),_:1},8,["color"]),a.value.status==f(v).statuses.cancelled?(p(),N("span",Ne,l(r.$t("Le"))+" "+l(f(q)(a.value.cancelled_date)||""),1)):O("",!0)]),_:1}),e(g,{cols:"12",md:"8",justify:"end","align-content":"end",align:"end"},{default:t(()=>[a.value.status==f(v).statuses.started||a.value.status==f(v).statuses.cancelled?(p(),C(De,{key:0,modelValue:a.value,"onUpdate:modelValue":h[0]||(h[0]=k=>a.value=k)},null,8,["modelValue"])):O("",!0),a.value.status==f(v).statuses.validated?(p(),C(Ve,{key:1,modelValue:a.value,"onUpdate:modelValue":h[1]||(h[1]=k=>a.value=k)},null,8,["modelValue"])):O("",!0),a.value.status!=f(v).statuses.cancelled?(p(),C(Ie,{key:2,modelValue:a.value,"onUpdate:modelValue":h[2]||(h[2]=k=>a.value=k)},null,8,["modelValue"])):O("",!0),e(E,{vertical:""}),e(S,{variant:"elevated",color:"success",class:"ml-2",to:"/customers/"+a.value.customer_id},{default:t(()=>[_(l(r.$t("Voir le Client")),1)]),_:1},8,["to"])]),_:1}),e(g,{cols:"12",md:"3"},{default:t(()=>[e(Ae,{modelValue:a.value,"onUpdate:modelValue":h[3]||(h[3]=k=>a.value=k),"show-demand-info":"",source:a.value.source},null,8,["modelValue","source"])]),_:1}),e(g,{cols:"12",md:"3"},{default:t(()=>[e(he,{modelValue:a.value,"onUpdate:modelValue":h[4]||(h[4]=k=>a.value=k),"show-demand-info":""},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",md:"6",class:"justify-end align-end"},{default:t(()=>[e(M,{class:"align-end justify-end align-content-end"},{default:t(()=>[e(g,{cols:"12",class:"align-end justify-end align-content-end"},{default:t(()=>[e(M,{class:"align-end justify-end align-content-end"},{default:t(()=>[a.value.status>=f(v).statuses.validated?(p(),C(g,{key:0,cols:"12",md:"6",class:""},{default:t(()=>[e(T,{elevation:"10"},{default:t(()=>[e(D,null,{default:t(()=>[o("div",qe,[o("h2",Be,l(r.$t("Reste à payer")),1),e(A),o("div",Fe,[e(S,{color:"primary",icon:"",flat:""},{default:t(()=>[e(J)]),_:1})])]),o("div",Re,[o("h2",ze,l(f(z)(y.value)),1)])]),_:1})]),_:1})]),_:1})):O("",!0),e(g,{cols:"12",md:"6"},{default:t(()=>[e(T,{elevation:"10"},{default:t(()=>[e(D,null,{default:t(()=>[o("div",Le,[o("h2",Qe,l(r.$t("Montant total")),1),e(A),o("div",We,[e(S,{color:"primary",icon:"",flat:""},{default:t(()=>[e(J)]),_:1})])]),o("div",Xe,[o("h2",Ze,l(f(z)(a.value.payment_total||0))+"/"+l(f(z)(u.value||0)),1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{cols:"12",class:"align-end justify-end align-content-end"},{default:t(()=>[e(M,{class:"align-end justify-end align-content-end"},{default:t(()=>[e(g,{class:"h-100",cols:"12"},{default:t(()=>[e(M,null,{default:t(()=>[e(g,{cols:"12",md:"6"},{default:t(()=>[e(T,{elevation:"10",class:"h-100"},{default:t(()=>[e(D,null,{default:t(()=>[o("div",Ge,[o("h2",He,l(r.$t("Note liée à la prestation")),1)]),o("div",Je,[o("p",Ke,l(a.value.comment||r.$t("Aucun note")),1)])]),_:1})]),_:1})]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(T,{elevation:"10",class:"h-100"},{default:t(()=>[e(D,null,{default:t(()=>[o("div",Ye,[o("h2",et,l(r.$t("Commentaire")),1),e(Ee,{modelValue:a.value,"onUpdate:modelValue":h[5]||(h[5]=k=>a.value=k)},null,8,["modelValue"])]),o("div",tt,[o("p",at,l(a.value.commentaire||r.$t("Aucun commentaire")),1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a.value.status==f(v).statuses.cancelled?(p(),C(g,{key:0,cols:"12"},{default:t(()=>[e(T,{elevation:"10",class:"h-100"},{default:t(()=>[e(D,null,{default:t(()=>[o("div",lt,[o("h2",st,l(r.$t("Raison de l'annulation")),1)]),o("div",ot,[o("p",nt,l(a.value.cancel_comment||r.$t("Aucun commentaire")),1)])]),_:1})]),_:1})]),_:1})):O("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{cols:"12",lg:a.value.status>f(v).statuses.started?"6":"12"},{default:t(()=>[e(T,{elevation:"10",class:"overflow-hidden h-100"},{default:t(()=>[e(te,{class:"py-4 px-6 text-white bg-info"},{default:t(()=>[o("h4",ut,[o("span",null,l(r.$t("Désignation des services attendus")),1),e(A),e(de,{modelValue:V.value,"onUpdate:modelValue":h[6]||(h[6]=k=>V.value=k),prestation:a.value,"onUpdate:item":I,"button-text":r.$t("Ajouter un service"),title:r.$t("Ajouter un service")},null,8,["modelValue","prestation","button-text","title"])])]),_:1}),e(D,{class:"pa-6"},{default:t(()=>[e(oe,{class:"month-table"},{default:t(()=>[o("thead",null,[o("tr",null,[o("th",rt,l(r.$t("Désignation")),1),o("th",dt,l(r.$t("Quantité")),1),o("th",it,l(r.$t("Prix unitaire")),1),o("th",mt,l(r.$t("Prix total")),1),o("th",ct,l(r.$t("Actions")),1)])]),o("tbody",null,[(p(!0),N(ee,null,se(a.value.services,(k,R)=>(p(),N("tr",{key:k.id,class:"month-item"},[o("td",null,l(k.name),1),o("td",null,l(k.quantity),1),o("td",null,l(f(z)(k.price)),1),o("td",null,l(f(z)(k.total)),1),o("td",null,[o("div",vt,[e(re,{text:r.$t("Modifier")},{activator:t(({props:H})=>[e(de,{modelValue:a.value.services[R],"onUpdate:modelValue":Y=>a.value.services[R]=Y,prestation:a.value,"onUpdate:item":I,"button-text":r.$t("Modifier le service"),title:r.$t("Modifier le service")},null,8,["modelValue","onUpdate:modelValue","prestation","button-text","title"])]),_:2},1032,["text"]),e(Oe,{modelValue:a.value,"onUpdate:modelValue":h[7]||(h[7]=H=>a.value=H),service:a.value.services[R]},null,8,["modelValue","service"])])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1},8,["lg"]),a.value.status>f(v).statuses.started?(p(),C(g,{key:0,cols:"12",lg:a.value.status>f(v).statuses.started?"6":"12"},{default:t(()=>[e(T,{elevation:"10",class:"overflow-hidden h-100"},{default:t(()=>[e(te,{class:"py-4 px-6 text-white bg-info"},{default:t(()=>[o("h4",ft,[o("span",pt,l(r.$t("Paiements")),1),_(" : "+l(a.value.payments.length)+" - "+l(f(z)(a.value.payment_total||0))+" ",1),e(A),e(ue,{prestation:a.value,"onUpdate:item":I,"button-text":r.$t("Ajouter un paiement"),title:r.$t("Ajouter un paiement")},null,8,["prestation","button-text","title"])])]),_:1}),e(D,{class:"pa-6"},{default:t(()=>[e(oe,{class:"month-table"},{default:t(()=>[o("thead",null,[o("tr",null,[o("th",_t,l(r.$t("Mode de paiement")),1),o("th",Vt,l(r.$t("Montant payé")),1),o("th",ht,l(r.$t("Date du paiement")),1),o("th",$t,l(r.$t("Actions")),1)])]),o("tbody",null,[(p(!0),N(ee,null,se(a.value.payments,(k,R)=>(p(),N("tr",{key:s.value.id},[o("td",null,l(k.payment_method),1),o("td",null,l(f(z)(k.amount)),1),o("td",null,l(f(q)(k.payment_date)),1),o("td",null,[e(re,{text:r.$t("Modifier")},{activator:t(({props:H})=>[e(ue,{modelValue:a.value.payments[R],"onUpdate:modelValue":Y=>a.value.payments[R]=Y,icon:"",prestation:a.value,"onUpdate:item":I,"button-text":r.$t("Modifier le paiement"),title:r.$t("Modifier le paiement")},null,8,["modelValue","onUpdate:modelValue","prestation","button-text","title"])]),_:2},1032,["text"]),e(Me,{modelValue:a.value,"onUpdate:modelValue":h[8]||(h[8]=H=>a.value=H),payment:a.value.payments[R]},null,8,["modelValue","payment"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1},8,["lg"])):O("",!0)]),_:1}))],64)}}});export{Wt as default};