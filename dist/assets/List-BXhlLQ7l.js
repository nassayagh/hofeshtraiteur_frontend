import{u as _e}from"./payments-B4bTL02t.js";import{u as ye}from"./eventType-DihHx9zG.js";import{u as we}from"./paymentMethod-Bos2PJMa.js";import{_ as be}from"./BaseBreadcrumb-D00x8Nkq.js";import{f as R,a as K}from"./formatters-DCCWVJxZ.js";import{a6 as re,Z as q,o as c,_ as P,w as t,b as e,a as l,t as r,V as h,a8 as v,c as w,a4 as f,aC as Ve,r as n,av as ke,aD as _,aE as $e,h as Pe,e as N,g as xe,q as Ce,n as X,d as x,X as De}from"./index-BXvHIqz6.js";import{u as Te}from"./Controller-Cyz8Ncp3.js";import{V as g,a as O}from"./VRow-DLf60uGt.js";import{V as k,a as b,b as Se,c as Ie}from"./VCard-CFuAZNZy.js";import{i as y}from"./VSpacer-Dc7J-cH2.js";import{V as Be}from"./VDataTableServer-B3Ce_yHB.js";import{V as Me}from"./VToolbar-CovYzROe.js";import{V as se}from"./VTextField-DbFfaD61.js";import{V as le}from"./VAutocomplete-UV3u4eFT.js";import{V as oe}from"./VDialog-CuLVqVmd.js";import{V as Ue}from"./VLocaleProvider-DxDsVkLi.js";import{V as Ee}from"./VDatePicker-BSLkzZ8v.js";import{V as ne}from"./VTooltip-C50umCi3.js";import"./VAvatar-CtXwuwxb.js";import"./VSheet-BzPpz1G0.js";const Ae={class:"d-flex align-start"},je={class:"text-h4"},Le={class:"ml-auto"},Ne={class:"mt-2"},Re={class:"text-h4 font-weight-regular"},qe={key:0,class:"text-subtitle-1"},Oe={class:"d-flex align-start"},ze={class:"text-h4"},Fe={class:"ml-auto"},Ge={class:"mt-2"},He={class:"text-h4 font-weight-regular"},Ke={key:0,class:"text-subtitle-1"},Xe={class:"d-flex align-start"},Ze={class:"text-h4"},Je={class:"ml-auto"},Qe={class:"mt-2"},We={class:"text-h4 font-weight-regular"},Ye={key:0,class:"text-subtitle-1"},et={class:"d-flex align-start"},tt={class:"text-h4"},at={class:"ml-auto"},st={class:"mt-2"},lt={class:"text-h4 font-weight-regular"},ot={key:0,class:"text-subtitle-1"},nt={class:"d-flex align-start"},rt={class:"text-h4"},it={class:"ml-auto"},dt={class:"mt-2"},ut={class:"text-h4 font-weight-regular"},ct={key:0,class:"text-subtitle-1"},mt={class:"d-flex align-start"},pt={class:"text-h4"},ht={class:"ml-auto"},ft={class:"mt-2"},vt={class:"text-h4 font-weight-regular"},gt={key:0,class:"text-subtitle-1"},_t={class:"d-flex align-start"},yt={class:"text-h4"},wt={class:"ml-auto"},bt={class:"mt-2"},Vt={class:"text-h4 font-weight-regular"},kt={key:0,class:"text-subtitle-1"},$t={class:"d-flex align-start"},Pt={class:"text-h4"},xt={class:"ml-auto"},Ct={class:"mt-2"},Dt={class:"text-h4 font-weight-regular"},Tt={key:0,class:"text-subtitle-1"},St=re({__name:"PrespationDashboard",props:{showDescription:{type:Boolean,default:!1},showPayments:{type:Boolean,default:!1},showValidation:{type:Boolean,default:!1},showValidated:{type:Boolean,default:!1},showProcessing:{type:Boolean,default:!1},showClosed:{type:Boolean,default:!1},showCancelled:{type:Boolean,default:!1},showTotalPayments:{type:Boolean,default:!1},md:{type:String,default:"3"}},setup(d){const p=Te();return p.fetchStatistics({}),(u,Z)=>{const D=q("CurrencyEuroIcon"),$=q("HotelServiceIcon");return d.showPayments?(c(),P(O,{key:0},{default:t(()=>[d.showTotalPayments?(c(),P(g,{key:0,class:"h-100",cols:"12",md:d.showTotalPayments?"4":"6"},{default:t(()=>[e(b,{elevation:"10",class:"bg-info h-100"},{default:t(()=>[e(k,null,{default:t(()=>[l("div",Ae,[l("h2",je,r(u.$t("Montant total")),1),e(y),l("div",Le,[e(h,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:t(()=>[e(D,{class:"text-info"})]),_:1})])]),l("div",Ne,[l("h2",Re,r(v(R)(v(p).statistics.totalPayments||0)),1),d.showDescription?(c(),w("span",qe,r(u.$t("Montant total de service")),1)):f("",!0)])]),_:1})]),_:1})]),_:1},8,["md"])):f("",!0),e(g,{class:"h-100",cols:"12",md:d.showTotalPayments?"4":"6"},{default:t(()=>[e(b,{elevation:"10",class:"bg-primary h-100"},{default:t(()=>[e(k,null,{default:t(()=>[l("div",Oe,[l("h2",ze,r(u.$t("Montant à régler")),1),e(y),l("div",Fe,[e(h,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:t(()=>[e(D,{class:"text-primary"})]),_:1})])]),l("div",Ge,[l("h2",He,r(v(R)(v(p).statistics.paymentsLeft||0)),1),d.showDescription?(c(),w("span",Ke,r(u.$t("Montant restant à régler")),1)):f("",!0)])]),_:1})]),_:1})]),_:1},8,["md"]),e(g,{class:"h-100",cols:"12",md:d.showTotalPayments?"4":"6"},{default:t(()=>[e(b,{elevation:"10",class:"bg-success h-100"},{default:t(()=>[e(k,null,{default:t(()=>[l("div",Xe,[l("h2",Ze,r(u.$t("Montant réglé")),1),e(y),l("div",Je,[e(h,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:t(()=>[e(D,{class:"text-success"})]),_:1})])]),l("div",Qe,[l("h2",We,r(v(R)(v(p).statistics.paymentsReceived||0)),1),d.showDescription?(c(),w("span",Ye,r(u.$t("Montant total déjà réglé")),1)):f("",!0)])]),_:1})]),_:1})]),_:1},8,["md"])]),_:1})):(c(),P(O,{key:1},{default:t(()=>[e(g,{class:"h-100",cols:"12",md:d.md},{default:t(()=>[e(b,{elevation:"10",class:"bg-primary h-100"},{default:t(()=>[e(k,null,{default:t(()=>[l("div",et,[l("h2",tt,r(u.$t("Prestations")),1),e(y),l("div",at,[e(h,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:t(()=>[e($,{class:"text-primary"})]),_:1})])]),l("div",st,[l("h2",lt,r(v(p).statistics.total||0),1),d.showDescription?(c(),w("span",ot,r(u.$t("Prestations total")),1)):f("",!0)])]),_:1})]),_:1})]),_:1},8,["md"]),d.showValidation?(c(),P(g,{key:0,class:"h-100",cols:"12",md:d.md},{default:t(()=>[e(b,{elevation:"10",class:"bg-success h-100"},{default:t(()=>[e(k,null,{default:t(()=>[l("div",nt,[l("h2",rt,r(u.$t("Prestations validées")),1),e(y),l("div",it,[e(h,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:t(()=>[e($,{class:"text-success"})]),_:1})])]),l("div",dt,[l("h2",ut,r(v(p).statistics.validated||0),1),d.showDescription?(c(),w("span",ct,r(u.$t("Prestations total validées")),1)):f("",!0)])]),_:1})]),_:1})]),_:1},8,["md"])):f("",!0),d.showValidated?(c(),P(g,{key:1,class:"h-100",cols:"12",md:d.md},{default:t(()=>[e(b,{elevation:"10",class:"bg-info h-100"},{default:t(()=>[e(k,null,{default:t(()=>[l("div",mt,[l("h2",pt,r(u.$t("Prestations en validation")),1),e(y),l("div",ht,[e(h,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:t(()=>[e($,{class:"text-info"})]),_:1})])]),l("div",ft,[l("h2",vt,r(v(p).statistics.validation||0),1),d.showDescription?(c(),w("span",gt,r(u.$t("Prestations total en attende de validation")),1)):f("",!0)])]),_:1})]),_:1})]),_:1},8,["md"])):f("",!0),d.showClosed?(c(),P(g,{key:2,class:"h-100",cols:"12",md:d.md},{default:t(()=>[e(b,{elevation:"10",class:"bg-info h-100"},{default:t(()=>[e(k,null,{default:t(()=>[l("div",_t,[l("h2",yt,r(u.$t("Prestations Clôturée")),1),e(y),l("div",wt,[e(h,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:t(()=>[e($,{class:"text-info"})]),_:1})])]),l("div",bt,[l("h2",Vt,r(v(p).statistics.closed||0),1),d.showDescription?(c(),w("span",kt,r(u.$t("Prestations total Clôturée")),1)):f("",!0)])]),_:1})]),_:1})]),_:1},8,["md"])):f("",!0),d.showCancelled?(c(),P(g,{key:3,class:"h-100",cols:"12",md:d.md},{default:t(()=>[e(b,{elevation:"10",class:"bg-error h-100"},{default:t(()=>[e(k,null,{default:t(()=>[l("div",$t,[l("h2",Pt,r(u.$t("Prestations annulées")),1),e(y),l("div",xt,[e(h,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:t(()=>[e($,{class:"text-error"})]),_:1})])]),l("div",Ct,[l("h2",Dt,r(v(p).statistics.cancelled||0),1),d.showDescription?(c(),w("span",Tt,r(u.$t("Prestations total annulées")),1)):f("",!0)])]),_:1})]),_:1})]),_:1},8,["md"])):f("",!0)]),_:1}))}}}),It=["onClick"],Bt=["onClick"],Mt={class:"d-flex align-center"},ta=re({__name:"List",setup(d){const p=Ve();n();const u=ke(),Z=ye(),D=we(),$=n({title:"Gestion des paiements"}),ie=n([{text:_("Dashboard"),disabled:!1,href:"/"},{text:_("Gestion des paiements"),disabled:!0,href:"#"}]),U=n([]),J=n([]),Q=n([]),z=_e(),W=$e();Pe(()=>{W.query.method&&(i.value.payment_method=[W.query.method]),te(),fe(),ve()});const T=n(!1);n(!1),n(!1),n(!1),n(!1),n(""),n(),n(!1);const Y=n(null);n(null),n(null),n(null);const E=n(!1);n();const F=n(100),S=n(2),A=n(2),j=n(0);n(!1);const de=n(!1);n(null);const G=n("");n(["primary","secondary","error","success","warning"]);const C=n([{key:"payment_date",order:"DESC"}]);n(0);const i=n({search:null,status:null,date:null,event_type:null}),I=n({itemsPerPage:100,rowsPerPage:100,page:1,sortDesc:[!0],sortBy:[{key:"payment_date",order:"DESC"}]}),ue=n(-1),H=n({id:null,avatar:"1.jpg",name:"",email:"",password:"",changePassword:!0,jdate:"",role:"",rolestatus:""});n({id:null,avatar:"1.jpg",name:"",email:"",password:"",changePassword:!0,jdate:"",role:"",rolestatus:""});const B=n(!1),ce=n([{title:"Actions",key:"actions",sortable:!1},{title:_("Prénom"),align:"start",key:"prestation.customer.firstname",sortable:!1},{title:_("Nom"),align:"start",key:"prestation.customer.lastname",sortable:!1},{title:_("Email"),align:"start",key:"prestation.customer.email",sortable:!1},{title:_("Téléphone"),align:"start",key:"prestation.customer.phone",sortable:!1},{title:_("Prestation"),align:"start",key:"prestation.event_type"},{title:_("Mode de paiement"),align:"start",key:"payment_method"},{title:_("Montant payé"),align:"start",key:"amount"},{title:_("Date du paiement"),align:"start",key:"payment_date"}]),ee=N(()=>i.value.date&&i.value.date.length>0?K(i.value.date[0])+" - "+K(i.value.date[i.value.date.length-1]):null);N(()=>z.payments.data.filter(o=>o.email.toLowerCase().includes(G.value.toLowerCase())));function me(o){H.value=o,B.value=!0}function pe(){z.deleteItem(H.value.id);const o=U.value.findIndex(s=>s.id==H.value.id);U.value.splice(o,1),B.value=!1,u.showSuccess(_("Utilisateur supprimé avec succès"))}N(()=>ue.value===-1?"Nouvel administrateur":"Modifier l’administrateur");const he=N(()=>i.value.date&&i.value.date.length?i.value.date.length>1?[p.format(i.value.date[0],"shortDate"),p.format(i.value.date[i.value.date.length-1],"shortDate")]:[p.format(i.value.date[0],"shortDate"),p.format(i.value.date[0],"shortDate")]:null);function te(){try{clearTimeout(Y.value)}catch{}Y.value=setTimeout(()=>{T.value=!0;let o="id",s="desc";console.log(C.value),C.value.length>0&&(o=C.value[0].key,s=C.value[0].order),z.fetchItems({term:G.value,paginate:F.value,current_page:S.value,direction:s,order_by:o,page:I.value.page,per_page:I.value.itemsPerPage,...i.value,date:he.value}).then(V=>{if(V.data){const{data:M,current_page:a,next_page_url:m,total:L,per_page:ae,to:Ut,last_page:ge}=V.data;U.value=M,A.value=ge,j.value=L}}).catch(V=>{console.error(V)}).then(()=>{T.value=!1})},1e3)}function fe(){Z.fetchItems({term:"",paginate:500,current_page:1,direction:"asc",order_by:"name",page:1,per_page:500}).then(o=>{if(o.data){const{data:s,current_page:V,next_page_url:M,total:a,per_page:m,to:L,last_page:ae}=o.data;J.value=s}}).catch(o=>{console.error(o)}).then(()=>{T.value=!1})}function ve(){D.fetchItems({term:"",paginate:500,current_page:1,direction:"asc",order_by:"name",page:1,per_page:500}).then(o=>{if(o.data){const{data:s,current_page:V,next_page_url:M,total:a,per_page:m,to:L,last_page:ae}=o.data;Q.value=s}}).catch(o=>{console.error(o)}).then(()=>{T.value=!1})}return xe([G,I,i],()=>{te()},{deep:!0}),Ce(()=>{S.value>A.value&&(S.value=A.value)}),(o,s)=>{const V=q("EyeIcon"),M=q("TrashIcon");return c(),w(De,null,[e(be,{title:`${$.value.title}(${j.value})`,breadcrumbs:ie.value},null,8,["title","breadcrumbs"]),e(St,{"show-payments":"","show-description":"","show-total-payments":""}),e(O,null,{default:t(()=>[e(g,{cols:"12"},{default:t(()=>[e(Be,{class:"border rounded-md",headers:ce.value,loading:T.value,items:U.value,"multi-sort":!1,"items-per-page":F.value,"onUpdate:itemsPerPage":s[12]||(s[12]=a=>F.value=a),"items-per-page-text":o.$t("Articles par page"),options:I.value,"onUpdate:options":s[13]||(s[13]=a=>I.value=a),"sort-by":C.value,"onUpdate:sortBy":s[14]||(s[14]=a=>C.value=a),page:S.value,"onUpdate:page":s[15]||(s[15]=a=>S.value=a),"items-length":j.value,"onUpdate:itemsLength":s[16]||(s[16]=a=>j.value=a),"show-select":!1,"loading-text":o.$t("Chargement des éléments"),"no-data-text":o.$t("Pas de données"),"no-results-text":o.$t("Aucun résultat"),onPageCount:s[17]||(s[17]=a=>A.value=a)},{top:t(()=>[e(Me,{class:"rounded-t-md pl-2 pr-2",flat:""},{default:t(()=>[e(O,null,{default:t(()=>[e(g,null,{default:t(()=>[e(se,{density:"compact",modelValue:i.value.search,"onUpdate:modelValue":s[0]||(s[0]=a=>i.value.search=a),placeholder:o.$t("Rechercher prénom, nom, email, téléphone..."),"hide-details":"",variant:"solo",clearable:""},null,8,["modelValue","placeholder"])]),_:1}),e(g,null,{default:t(()=>[e(le,{density:"compact",modelValue:i.value.event_type,"onUpdate:modelValue":s[1]||(s[1]=a=>i.value.event_type=a),placeholder:o.$t("Prestation"),items:J.value,"item-value":"id","item-title":"name",multiple:"","hide-details":"",variant:"solo",clearable:""},null,8,["modelValue","placeholder","items"])]),_:1}),e(g,null,{default:t(()=>[e(le,{density:"compact",modelValue:i.value.payment_method,"onUpdate:modelValue":s[2]||(s[2]=a=>i.value.payment_method=a),placeholder:o.$t("Mode de paiement"),items:Q.value,"item-value":"id","item-title":"name",multiple:"","hide-details":"",variant:"solo",clearable:""},null,8,["modelValue","placeholder","items"])]),_:1}),e(g,null,{default:t(()=>[e(oe,{ref_key:"dialog",ref:de,modelValue:E.value,"onUpdate:modelValue":s[8]||(s[8]=a=>E.value=a),"return-value":i.value.date,"onUpdate:returnValue":s[9]||(s[9]=a=>i.value.date=a),persistent:"",width:"290px"},{activator:t(({props:a})=>[e(se,X({modelValue:ee.value,"onUpdate:modelValue":s[3]||(s[3]=m=>ee.value=m),"prepend-inner-icon":"bx-calendar",readonly:""},a,{density:"compact",placeholder:o.$t("Date"),"hide-details":"",variant:"solo",clearable:"","onClick:clear":s[4]||(s[4]=m=>i.value.date=null)}),null,16,["modelValue","placeholder"])]),default:t(({isActive:a})=>[e(Ue,{locale:"fr"},{default:t(()=>[e(Ee,{modelValue:i.value.date,"onUpdate:modelValue":s[7]||(s[7]=m=>i.value.date=m),"hide-header":"",multiple:"range"},{actions:t(()=>[e(h,{color:"primary",onClick:s[5]||(s[5]=m=>E.value=!1)},{default:t(()=>[x(r(o.$t("Annuler")),1)]),_:1}),e(y),e(h,{variant:"elevated",color:"primary",onClick:s[6]||(s[6]=m=>E.value=!1)},{default:t(()=>[x(r(o.$t("OK")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue","return-value"])]),_:1})]),_:1}),e(oe,{modelValue:B.value,"onUpdate:modelValue":s[11]||(s[11]=a=>B.value=a),"max-width":"500px"},{default:t(()=>[e(b,null,{default:t(()=>[e(Se,{class:"text-h5 text-center py-6"},{default:t(()=>[x(r(o.$t("Êtes-vous sûr de vouloir supprimer cet élément ?")),1)]),_:1}),e(Ie,null,{default:t(()=>[e(y),e(h,{color:"error",variant:"flat",dark:"",onClick:s[10]||(s[10]=a=>B.value=!1)},{default:t(()=>[x(r(o.$t("Annuler")),1)]),_:1}),e(h,{color:"success",variant:"flat",dark:"",onClick:pe},{default:t(()=>[x(r(o.$t("OK")),1)]),_:1}),e(y)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.prestation.customer.firstname":t(({item:a})=>[l("span",{class:"cursor-pointer",onClick:m=>o.$router.push("/prestations/"+a.prestation_id)},r(a.prestation&&a.prestation.customer?a.prestation.customer.firstname:""),9,It)]),"item.prestation.customer.lastname":t(({item:a})=>[l("span",{class:"cursor-pointer",onClick:m=>o.$router.push("/prestations/"+a.prestation_id)},r(a.prestation&&a.prestation.customer?a.prestation.customer.lastname:""),9,Bt)]),"item.amount":t(({item:a})=>[x(r(v(R)(a.amount)),1)]),"item.payment_date":t(({item:a})=>[x(r(v(K)(a.payment_date)),1)]),"item.actions":t(({item:a})=>[l("div",Mt,[e(ne,{text:o.$t("Voir la prestation liée")},{activator:t(({props:m})=>[e(h,X({icon:"",flat:"",to:"/prestations/"+a.prestation_id},m),{default:t(()=>[e(V,{"stroke-width":"1.5",size:"20",class:"text-primary"})]),_:2},1040,["to"])]),_:2},1032,["text"]),e(ne,{text:o.$t("Supprimer")},{activator:t(({props:m})=>[e(h,X({icon:"",flat:"",onClick:L=>me(a)},m),{default:t(()=>[e(M,{"stroke-width":"1.5",size:"20",class:"text-error"})]),_:2},1040,["onClick"])]),_:2},1032,["text"])])]),"no-data":t(()=>[l("span",null,r(o.$t("Aucune donnée disponible")),1)]),_:1},8,["headers","loading","items","items-per-page","items-per-page-text","options","sort-by","page","items-length","loading-text","no-data-text","no-results-text"])]),_:1})]),_:1})],64)}}});export{ta as default};