import{u as re}from"./customers-fFmhzPjN.js";import{u as be}from"./eventType-CwFzgWM3.js";import{_ as _e}from"./BaseBreadcrumb-D__NxWaF.js";import{r as ae}from"./validators-BPi-vT8z.js";import{a as $e}from"./formatters-ChhyeSK0.js";import{a6 as ue,Z as H,o as I,_ as ye,w as a,b as e,a as m,t as u,V as d,a8 as $,c as F,a4 as J,aL as Ce,r as o,av as ke,aM as V,h as we,e as N,g as Pe,q as De,n as X,d as i,X as Se}from"./index-DTjzZ6Ee.js";import{F as xe}from"./vee-validate.esm-DNwrrCti.js";import{a as M,V as Q,b as le,c as se}from"./VCard-BgGdzODY.js";import{a as y,V as Ue}from"./VSpacer-B3ipnv74.js";import{V as v,a as O}from"./VRow-DJLGGSVI.js";import{V as Ie}from"./VDataTableServer-B1IapQe_.js";import{V as Te}from"./VToolbar-BbltzkGT.js";import{V as k}from"./VTextField-Bmdo43we.js";import{b as Ae}from"./VSelect-DJNTmByM.js";import{V as Z}from"./VDialog-TPy4lPq7.js";import{V as je}from"./VLocaleProvider-B7--m4tv.js";import{V as Ee}from"./VDatePicker-BGhMPtSP.js";import{V as Le}from"./VContainer-DAKfHzTV.js";import{V as Be}from"./VAlert-Dyd5AN6c.js";import{V as oe}from"./VTooltip-y5pDxkN7.js";import"./VAvatar-D7w4jRkh.js";import"./filter-CN59YWWa.js";import"./VMenu-DayS87Sl.js";import"./VSheet-QOkHo8pf.js";const Ne={class:"d-flex align-start"},Oe={class:"text-h4"},Fe={class:"ml-auto"},Me={class:"mt-2"},ze={class:"text-h4 font-weight-regular"},Re={key:0,class:"text-subtitle-1"},qe={class:"d-flex align-start"},Ge={class:"text-h4"},Ke={class:"ml-auto"},Xe={class:"mt-2"},Ze={class:"text-h4 font-weight-regular"},He={key:0,class:"text-subtitle-1"},Je=ue({__name:"CustomerDashboard",props:{showDescription:{type:Boolean,default:!1}},setup(z){const p=re();return p.fetchStatistics({}),(h,R)=>{const T=H("UsersGroupIcon");return I(),ye(O,null,{default:a(()=>[e(v,{class:"h-100",cols:"12",md:"6"},{default:a(()=>[e(M,{elevation:"10",class:"bg-info h-100"},{default:a(()=>[e(Q,null,{default:a(()=>[m("div",Ne,[m("h2",Oe,u(h.$t("Prospets")),1),e(y),m("div",Fe,[e(d,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:a(()=>[e(T,{class:"text-info"})]),_:1})])]),m("div",Me,[m("h2",ze,u($(p).statistics.prospects||0),1),z.showDescription?(I(),F("span",Re,u(h.$t("Personnes sans prestations")),1)):J("",!0)])]),_:1})]),_:1})]),_:1}),e(v,{class:"h-100",cols:"12",md:"6"},{default:a(()=>[e(M,{elevation:"10",class:"bg-success h-100"},{default:a(()=>[e(Q,null,{default:a(()=>[m("div",qe,[m("h2",Ge,u(h.$t("Clients")),1),e(y),m("div",Ke,[e(d,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:a(()=>[e(T,{class:"text-success"})]),_:1})])]),m("div",Xe,[m("h2",Ze,u($(p).statistics.customers||0),1),z.showDescription?(I(),F("span",He,u(h.$t("Personnes avec des prestations")),1)):J("",!0)])]),_:1})]),_:1})]),_:1})]),_:1})}}}),Qe={class:"text-h5"},We={key:0,class:"mt-2"},Ye={class:"d-flex align-center"},Pt=ue({__name:"List",setup(z){const p=Ce(),h=o(),R=ke();be();const T=o({title:"Clients"}),ne=o([{text:V("Dashboard"),disabled:!1,href:"/"},{text:V("Clients"),disabled:!0,href:"#"}]),b=o([]);o([]);const _=re();we(()=>{te()});const A=o(!1),w=o(!1);o(!1),o(!1),o(!1),o(""),o(),o(!1);const W=o(null);o(null),o(null),o(null);const j=o(!1);o();const q=o(25),P=o(2),E=o(2),L=o(0),Y=o(!1),ie=o(!1),D=o(!1);o(null);const G=o("");o(["primary","secondary","error","success","warning"]);const C=o([{key:"created_at",order:"DESC"}]);o(0);const r=o({search:null,status:null,date:null,event_type:null}),S=o({itemsPerPage:25,rowsPerPage:25,page:1,sortDesc:[!0],sortBy:[{key:"created_at",order:"DESC"}]}),B=o(-1),n=o({id:null,avatar:"1.jpg",name:"",email:"",password:"",changePassword:!0,jdate:"",role:"",rolestatus:""}),de=o({id:null,avatar:"1.jpg",name:"",email:"",password:"",changePassword:!0,jdate:"",role:"",rolestatus:""}),x=o(!1),me=o([{title:"Prénom",align:"start",key:"firstname"},{title:"Nom",align:"start",key:"lastname"},{title:"Email",align:"start",key:"email"},{title:"Téléphone",align:"start",key:"phone"},{title:"Date de creation",align:"start",key:"created_at"},{title:"Status",align:"start",key:"is_customer"},{title:"Actions",key:"actions",sortable:!1}]),ee=N(()=>r.value.date&&r.value.date.length>0?p.format(r.value.date[0],"shortDate")+" - "+p.format(r.value.date[r.value.date.length-1],"shortDate"):null);N(()=>_.customers.data.filter(s=>s.email.toLowerCase().includes(G.value.toLowerCase())));function K(s){A.value=!1,B.value=b.value.indexOf(s),n.value=Object.assign({},s),D.value=!0}function fe(s){n.value=s,x.value=!0}function ve(){D.value=!1,setTimeout(()=>{n.value=Object.assign({},de.value),B.value=-1},300)}function ce(s,{setErrors:t}){var g;(g=h.value)==null||g.validate().then(({valid:U})=>{U&&(w.value=!0,_.addItem(n.value).then(l=>{if(l.data.error){t({apiError:l.data.message});return}n.value.id!=null?Object.assign(b.value[B.value],l.data):b.value.unshift(l.data),w.value=!1,D.value=!1,n.value={changePassword:!0},R.showSuccess(V("Client enregistré avec succès")),_.fetchStatistics()}).catch(l=>{w.value=!1,t({apiError:l})}).then(()=>{w.value=!1,t({apiError:null})}))})}function pe(){_.deleteItem(n.value.id);const s=b.value.findIndex(t=>t.id==n.value.id);b.value.splice(s,1),x.value=!1,R.showSuccess(V("Client supprimé avec succès")),_.fetchStatistics()}const ge=N(()=>B.value===-1?n.value.is_customer?V("Nouvel Client"):V("Nouvel Prospect"):n.value.is_customer?V("Modifier Le Client"):V("Modifier Le Prospect")),Ve=N(()=>r.value.date&&r.value.date.length?r.value.date.length>1?[p.format(r.value.date[0],"shortDate"),p.format(r.value.date[r.value.date.length-1],"shortDate")]:[p.format(r.value.date[0],"shortDate"),p.format(r.value.date[0],"shortDate")]:null);function te(){try{clearTimeout(W.value)}catch{}W.value=setTimeout(()=>{A.value=!0;let s="id",t="desc";console.log(C.value),C.value.length>0&&(s=C.value[0].key,t=C.value[0].order),_.fetchItems({term:G.value,paginate:q.value,current_page:P.value,direction:t,order_by:s,page:S.value.page,per_page:S.value.itemsPerPage,...r.value,date:Ve.value}).then(g=>{if(g.data){const{data:U,current_page:l,next_page_url:f,total:c,per_page:et,to:tt,last_page:he}=g.data;b.value=U,E.value=he,L.value=c}}).catch(g=>{console.error(g)}).then(()=>{A.value=!1})},1e3)}return Pe([G,S,r],()=>{te()},{deep:!0}),De(()=>{P.value>E.value&&(P.value=E.value)}),(s,t)=>{const g=H("PencilIcon"),U=H("TrashIcon");return I(),F(Se,null,[e(_e,{title:`${T.value.title}(${L.value})`,breadcrumbs:ne.value},null,8,["title","breadcrumbs"]),e(O,null,{default:a(()=>[e(v,{cols:"12"},{default:a(()=>[e(Je)]),_:1}),e(v,{cols:"12"},{default:a(()=>[e(Ie,{class:"border rounded-md",headers:me.value,loading:A.value,items:b.value,"multi-sort":!1,"items-per-page":q.value,"onUpdate:itemsPerPage":t[19]||(t[19]=l=>q.value=l),"items-per-page-text":s.$t("Articles par page"),options:S.value,"onUpdate:options":t[20]||(t[20]=l=>S.value=l),"sort-by":C.value,"onUpdate:sortBy":t[21]||(t[21]=l=>C.value=l),page:P.value,"onUpdate:page":t[22]||(t[22]=l=>P.value=l),"items-length":L.value,"onUpdate:itemsLength":t[23]||(t[23]=l=>L.value=l),"show-select":!1,"loading-text":s.$t("Chargement des éléments"),"no-data-text":s.$t("Pas de données"),"no-results-text":s.$t("Aucun résultat"),onPageCount:t[24]||(t[24]=l=>E.value=l)},{top:a(()=>[e(Te,{class:"rounded-t-md pl-2 pr-2",flat:""},{default:a(()=>[e(O,null,{default:a(()=>[e(v,null,{default:a(()=>[e(k,{density:"compact",modelValue:r.value.search,"onUpdate:modelValue":t[0]||(t[0]=l=>r.value.search=l),placeholder:s.$t("Rechercher prénom, nom, email, téléphone..."),"hide-details":"",variant:"solo"},null,8,["modelValue","placeholder"])]),_:1}),e(v,null,{default:a(()=>[e(Ae,{density:"compact",modelValue:r.value.status,"onUpdate:modelValue":t[1]||(t[1]=l=>r.value.status=l),placeholder:s.$t("Statut"),items:$(_).statusesList,"item-value":"id","item-title":"label",clearable:"","hide-details":"",variant:"solo"},null,8,["modelValue","placeholder","items"])]),_:1}),e(v,null,{default:a(()=>[e(Z,{ref_key:"dialog",ref:ie,modelValue:j.value,"onUpdate:modelValue":t[7]||(t[7]=l=>j.value=l),"return-value":r.value.date,"onUpdate:returnValue":t[8]||(t[8]=l=>r.value.date=l),persistent:"",width:"290px"},{activator:a(({props:l})=>[e(k,X({modelValue:ee.value,"onUpdate:modelValue":t[2]||(t[2]=f=>ee.value=f),"prepend-inner-icon":"bx-calendar"},l,{density:"compact",placeholder:s.$t("Date"),"hide-details":"",variant:"solo",clearable:"",readonly:"","onClick:clear":t[3]||(t[3]=f=>r.value.date=null)}),null,16,["modelValue","placeholder"])]),default:a(({isActive:l})=>[e(je,{locale:"fr"},{default:a(()=>[e(Ee,{modelValue:r.value.date,"onUpdate:modelValue":t[6]||(t[6]=f=>r.value.date=f),"hide-header":"",multiple:"range"},{actions:a(()=>[e(d,{color:"primary",onClick:t[4]||(t[4]=f=>j.value=!1)},{default:a(()=>[i(u(s.$t("Annuler")),1)]),_:1}),e(y),e(d,{variant:"elevated",color:"primary",onClick:t[5]||(t[5]=f=>j.value=!1)},{default:a(()=>[i(u(s.$t("OK")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue","return-value"])]),_:1}),e(v,{class:"d-flex gap-2 justify-space-between"},{default:a(()=>[e(d,{color:"primary",class:"align-self-end",variant:"flat",onClick:t[9]||(t[9]=l=>K({})),dark:""},{default:a(()=>[i(u(s.$t("Ajouter un Prospect")),1)]),_:1}),e(d,{color:"primary",class:"align-self-end",variant:"flat",onClick:t[10]||(t[10]=l=>K({is_customer:!0})),dark:""},{default:a(()=>[i(u(s.$t("Ajouter un client")),1)]),_:1}),e(Z,{modelValue:D.value,"onUpdate:modelValue":t[16]||(t[16]=l=>D.value=l),"max-width":"600px"},{default:a(()=>[e(M,null,{default:a(()=>[e(le,{class:"pa-4 bg-secondary"},{default:a(()=>[m("span",Qe,u(ge.value),1)]),_:1}),e($(xe),{ref_key:"refForm",ref:h,modelValue:Y.value,"onUpdate:modelValue":t[15]||(t[15]=l=>Y.value=l),onSubmit:ce},{default:a(({errors:l,isSubmitting:f})=>[e(Q,null,{default:a(()=>[e(Le,{class:"px-0"},{default:a(()=>[e(O,null,{default:a(()=>[e(v,{cols:"12",md:"6"},{default:a(()=>[e(k,{modelValue:n.value.firstname,"onUpdate:modelValue":t[11]||(t[11]=c=>n.value.firstname=c),rules:[$(ae)],label:s.$t("Prénom")},null,8,["modelValue","rules","label"])]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(k,{modelValue:n.value.lastname,"onUpdate:modelValue":t[12]||(t[12]=c=>n.value.lastname=c),rules:[$(ae)],label:s.$t("Nom")},null,8,["modelValue","rules","label"])]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(k,{modelValue:n.value.email,"onUpdate:modelValue":t[13]||(t[13]=c=>n.value.email=c),label:s.$t("Email")},null,8,["modelValue","label"])]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(k,{modelValue:n.value.phone,"onUpdate:modelValue":t[14]||(t[14]=c=>n.value.phone=c),label:s.$t("Téléphone")},null,8,["modelValue","label"])]),_:1})]),_:1}),l.apiError?(I(),F("div",We,[e(Be,{color:"error"},{default:a(()=>[i(u(l.apiError),1)]),_:2},1024)])):J("",!0)]),_:2},1024)]),_:2},1024),e(se,null,{default:a(()=>[e(y),e(d,{color:"error",variant:"flat",dark:"",onClick:ve},{default:a(()=>[i(u(s.$t("Annuler")),1)]),_:1}),e(d,{color:"success",variant:"flat",loading:w.value,type:"submit"},{default:a(()=>[i(u(s.$t("Sauvegarder")),1)]),_:1},8,["loading"]),e(y)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(Z,{modelValue:x.value,"onUpdate:modelValue":t[18]||(t[18]=l=>x.value=l),"max-width":"500px"},{default:a(()=>[e(M,null,{default:a(()=>[e(le,{class:"text-h5 text-center py-6"},{default:a(()=>[i(u(s.$t("Êtes-vous sûr de vouloir supprimer cet élément ?")),1)]),_:1}),e(se,null,{default:a(()=>[e(y),e(d,{color:"error",variant:"flat",dark:"",onClick:t[17]||(t[17]=l=>x.value=!1)},{default:a(()=>[i(u(s.$t("Annuler")),1)]),_:1}),e(d,{color:"success",variant:"flat",dark:"",onClick:pe},{default:a(()=>[i(u(s.$t("OK")),1)]),_:1}),e(y)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.created_at":a(({item:l})=>[i(u($($e)(l.created_at)),1)]),"item.is_customer":a(({item:l})=>[e(Ue,{color:l.is_customer==1?"success":"warning",size:"small",label:""},{default:a(()=>[i(u(l.is_customer==1?s.$t("Client"):s.$t("Prospet")),1)]),_:2},1032,["color"])]),"item.actions":a(({item:l})=>[m("div",Ye,[e(d,{density:"compact",color:"primary",variant:"outlined",to:"/customers/"+l.id},{default:a(()=>[i(u(s.$t("Voir")),1)]),_:2},1032,["to"]),e(oe,{text:s.$t("Modifier")},{activator:a(({props:f})=>[e(d,X({icon:"",flat:"",onClick:c=>K(l)},f),{default:a(()=>[e(g,{"stroke-width":"1.5",size:"20",class:"text-primary"})]),_:2},1040,["onClick"])]),_:2},1032,["text"]),e(oe,{text:s.$t("Supprimer")},{activator:a(({props:f})=>[e(d,X({icon:"",flat:"",onClick:c=>fe(l)},f),{default:a(()=>[e(U,{"stroke-width":"1.5",size:"20",class:"text-error"})]),_:2},1040,["onClick"])]),_:2},1032,["text"])])]),"no-data":a(()=>[m("span",null,u(s.$t("Aucune donnée disponible")),1)]),_:1},8,["headers","loading","items","items-per-page","items-per-page-text","options","sort-by","page","items-length","loading-text","no-data-text","no-results-text"])]),_:1})]),_:1})],64)}}});export{Pt as default};