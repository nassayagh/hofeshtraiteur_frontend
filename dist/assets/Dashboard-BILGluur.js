import{a6 as w,r as u,o as i,_ as S,w as l,b as o,a as t,t as e,a8 as f,V as T,d as k,c,a4 as D,a5 as x,ae as O,af as j,n as J,X as b,h as L}from"./index-Cbri8peo.js";import{V as C,_ as B}from"./BaseBreadcrumb-fyBJdSqw.js";import"./demands-ingcnFQ-.js";import{u as P}from"./Controller-C6pfVhua.js";import{f as v,a as Y,b as G}from"./formatters-ChhyeSK0.js";import{a as M}from"./VSpacer-BopiE_oa.js";import{V as R}from"./VTooltip-B3L_hMg8.js";import{V as E,a as A}from"./VCard-CQWGNQxb.js";import{u as H}from"./customers-DcT2ffMU.js";import{V as z}from"./VAutocomplete-CZVtPqNb.js";import{u as U}from"./hall-nqhCOHmM.js";import{u as X}from"./payments-C_gobQmj.js";import{u as q}from"./paymentMethod-DsTi9QN4.js";import{u as K}from"./eventType-DBhcZX2R.js";import{V as g,a as Q}from"./VRow-DgMjTeOq.js";import"./VAvatar-cgqxsFrK.js";import"./VSelect-CI7ZCyIn.js";import"./VTextField-BaVdAKnF.js";import"./VMenu-b91v3T8V.js";import"./filter-DUqRVzUz.js";const W={class:"d-sm-flex align-center"},Z={class:"text-h4"},tt={class:"ml-auto"},et={class:"text-subtitle-1 font-weight-medium"},st={key:0,class:"text-subtitle-1 font-weight-medium"},ot={class:"text-subtitle-1 font-weight-medium"},at={class:"text-subtitle-1 font-weight-medium"},lt={key:1,class:"text-subtitle-1 font-weight-medium"},nt=["onClick"],it={class:"text-no-wrap"},rt={key:0,class:"text-no-wrap"},dt={class:"text-no-wrap text-truncate"},ut={key:1,class:"text-no-wrap text-truncate"},N=w({__name:"PrestastionTable",props:{title:{type:String,default:""},options:{type:Object,default:()=>({per_page:"10",order_by:"id",direction:"DESC"})}},setup(p){u("March"),u(["March","April","May","June"]);const r=u([]),_=u(0),d=P(),s=p;return d.fetchStats(s.options).then(h=>{r.value=h.data.data,_.value=h.data.total||0}),(h,a)=>(i(),S(A,{elevation:"10"},{default:l(()=>[o(E,null,{default:l(()=>[t("div",W,[t("div",null,[t("h2",Z,e(p.title)+" : "+e(_.value||0)+" - "+e(f(v)(r.value.reduce((n,m)=>parseFloat(n)+m.service_total,0))),1)]),o(M),t("div",tt,[o(T,{variant:"tonal",color:"primary",density:"compact",to:`/prestations?status=${p.options.status}`},{default:l(()=>[k(e(h.$t("Voir plus")),1)]),_:1},8,["to"])])]),o(C,{density:"compact"},{default:l(()=>[t("thead",null,[t("tr",null,[t("th",et,e(h.$t("Nom")),1),s.options.statistics!="closed"?(i(),c("th",st,e(h.$t("Date")),1)):D("",!0),t("th",ot,e(h.$t("Montant")),1),t("th",at,e(h.$t("Type")),1),s.options.statistics!="closed"?(i(),c("th",lt,e(h.$t("Lieu")),1)):D("",!0)])]),t("tbody",null,[(i(!0),c(b,null,x(r.value,n=>(i(),c("tr",{key:n.id,class:"month-item cursor-pointer",onClick:m=>h.$router.push("/prestations/"+n.id)},[t("td",it,e(n.customer?`${n.customer.firstname} ${n.customer.lastname}`:"-"),1),s.options.statistics!="closed"?(i(),c("td",rt,e(f(Y)(n.event_date)),1)):D("",!0),t("td",null,e(f(v)(n.service_total)),1),t("td",dt,[o(R,{text:n.event_type},{activator:l(({props:m})=>[t("span",O(j(m)),e(n.event_type==null||n.event_type.length<10?n.event_type:`${n.event_type.replace(`
`," ").slice(0,9)}...`),17)]),_:2},1032,["text"])]),s.options.statistics!="closed"?(i(),c("td",ut,[o(R,{text:n.hall?n.hall.name:""},{activator:l(({props:m})=>[n.hall?(i(),c("span",O(J({key:0},m)),e(n.hall.name.length<10?n.hall.name:`${n.hall.name.replace(`
`," ").slice(0,9)}...`),17)):D("",!0)]),_:2},1032,["text"])])):D("",!0)],8,nt))),128))])]),_:1})]),_:1})]),_:1}))}}),ct={class:"d-sm-flex align-center"},pt={class:"text-h4"},_t={class:"ml-auto"},ht={class:"text-subtitle-1 font-weight-medium"},mt={class:"text-subtitle-1 font-weight-medium"},$t={class:"text-subtitle-1 font-weight-medium"},ft={class:"text-subtitle-1 font-weight-medium"},yt=["onClick"],vt={class:"text-no-wrap"},gt=w({__name:"CustomerTable",props:{title:{type:String,default:""},options:{type:Object,default:()=>({per_page:"10",order_by:"id",direction:"DESC"})}},setup(p){u("March"),u(["March","April","May","June"]);const r=u([]),_=H(),d=p;return _.fetchItems(d.options).then(s=>{r.value=s.data.data}),(s,h)=>(i(),S(A,{elevation:"10"},{default:l(()=>[o(E,null,{default:l(()=>[t("div",ct,[t("div",null,[t("h2",pt,e(p.title),1)]),o(M),t("div",_t,[o(T,{variant:"tonal",color:"primary",density:"compact",to:"/customers"},{default:l(()=>[k(e(s.$t("Voir plus")),1)]),_:1})])]),o(C,{density:"compact"},{default:l(()=>[t("thead",null,[t("tr",null,[t("th",ht,e(s.$t("Nom")),1),t("th",mt,e(s.$t("Mail")),1),t("th",$t,e(s.$t("Tel")),1),t("th",ft,e(s.$t("Prest")),1)])]),t("tbody",null,[(i(!0),c(b,null,x(r.value,a=>(i(),c("tr",{onClick:n=>s.$router.push("/customers/"+a.id),key:a.id,class:"month-item cursor-pointer"},[t("td",null,e(`${a.firstname} ${a.lastname}`),1),t("td",null,e(`${a.email}`),1),t("td",null,e(`${a.phone}`),1),t("td",vt,e(a.prestations_count),1)],8,yt))),128))])]),_:1})]),_:1})]),_:1}))}}),bt={class:"d-sm-flex align-center"},xt={class:"text-h4"},wt={class:"ml-auto"},St={class:"text-subtitle-1 font-weight-medium"},Ct={class:"text-subtitle-1 font-weight-medium"},Et={class:"text-subtitle-1 font-weight-medium"},At={class:"text-subtitle-1 font-weight-medium"},Mt={class:"text-subtitle-1 font-weight-medium"},Tt={class:"text-subtitle-1 font-weight-medium"},kt={class:"text-subtitle-1 font-weight-medium"},Vt=["onClick"],Dt={class:"text-no-wrap"},F=w({__name:"IncomePerMonthTable",props:{title:{type:String,default:""},options:{type:Object,default:()=>({per_page:"10",order_by:"id",direction:"DESC"})}},setup(p){const r=new Date().getFullYear(),_=u(r);u(["March","April","May","June"]);const d=u([]),s=P(),h=p,a=Array.from({length:20},($,V)=>h.options.section=="future"?r+V:r-V);function n(){s.fetchYearStatistics({...h.options,year:_.value}).then($=>{d.value=$.data})}L(()=>{n()});function m($){n()}return($,V)=>(i(),S(A,{elevation:"10"},{default:l(()=>[o(E,null,{default:l(()=>[t("div",bt,[t("div",null,[t("h2",xt,e(p.title)+" "+e(f(v)(d.value.reduce((y,I)=>parseFloat(y)+I.total_amount,0))),1)]),o(M),t("div",wt,[o(z,{modelValue:_.value,"onUpdate:modelValue":[V[0]||(V[0]=y=>_.value=y),m],items:f(a),variant:"outlined",dense:"",density:"compact","hide-details":""},null,8,["modelValue","items"])])]),o(C,{density:"compact"},{default:l(()=>[t("thead",null,[t("tr",null,[t("th",St,e($.$t("Mois")),1),t("th",Ct,e($.$t("Reste")),1),t("th",Et,e($.$t("Déjà")),1),t("th",At,e($.$t("CA")),1),t("th",Mt,e($.$t("Cls")),1),t("th",Tt,e($.$t("Fait")),1),t("th",kt,e($.$t("Anlé")),1)])]),t("tbody",null,[(i(!0),c(b,null,x(d.value,y=>(i(),c("tr",{key:y.id,class:"month-item"},[t("td",{class:"text-no-wrap cursor-pointer",onClick:I=>$.$router.push(`/prestations?status=-5&date=${[y.date1,y.date2]}`)},e(f(G)(y.label)),9,Vt),t("td",Dt,e(f(v)(y.amount_left)),1),t("td",null,e(f(v)(y.amount_paid)),1),t("td",null,e(f(v)(y.total_amount)),1),t("td",null,e(y.customers_count||0),1),t("td",null,e(y.prestations_closed||0),1),t("td",null,e(y.prestations_cancelled||0),1)]))),128))])]),_:1})]),_:1})]),_:1}))}}),Nt={class:"d-sm-flex align-center"},Pt={class:"text-h4"},It={class:"text-subtitle-1 font-weight-medium"},Ot={class:"text-subtitle-1 font-weight-medium"},Rt={class:"text-subtitle-1 font-weight-medium"},Ft={class:"text-subtitle-1 font-weight-medium"},Yt={class:"text-subtitle-1 font-weight-medium"},jt={class:"text-subtitle-1 font-weight-medium"},Jt={class:"text-subtitle-1 font-weight-medium"},Lt=["onClick"],Bt={class:"text-no-wrap"},Gt=w({__name:"IncomePerYearTable",props:{title:{type:String,default:""},options:{type:Object,default:()=>({per_page:"10",order_by:"id",direction:"DESC"})}},setup(p){u("March"),u(["March","April","May","June"]);const r=u([]),_=P(),d=p;return _.fetchYearStatistics(d.options).then(s=>{r.value=s.data}),(s,h)=>(i(),S(A,{elevation:"10"},{default:l(()=>[o(E,null,{default:l(()=>[t("div",Nt,[t("div",null,[t("h2",Pt,e(p.title),1)])]),o(C,{density:"compact"},{default:l(()=>[t("thead",null,[t("tr",null,[t("th",It,e(s.$t("Année")),1),t("th",Ot,e(s.$t("Reste")),1),t("th",Rt,e(s.$t("Déjà")),1),t("th",Ft,e(s.$t("CA")),1),t("th",Yt,e(s.$t("Cls")),1),t("th",jt,e(s.$t("Fait")),1),t("th",Jt,e(s.$t("Anlé")),1)])]),t("tbody",null,[(i(!0),c(b,null,x(r.value,a=>(i(),c("tr",{key:a.id,class:"month-item"},[t("td",{class:"text-no-wrap cursor-pointer",onClick:n=>s.$router.push(`/prestations?status=-5&date=${[a.date1,a.date2]}`)},e(a.year),9,Lt),t("td",Bt,e(f(v)(a.amount_left)),1),t("td",null,e(f(v)(a.amount_paid)),1),t("td",null,e(f(v)(a.total_amount)),1),t("td",null,e(a.customers_count||0),1),t("td",null,e(a.prestations_closed||0),1),t("td",null,e(a.prestations_cancelled||0),1)]))),128))])]),_:1})]),_:1})]),_:1}))}}),Ht={class:"d-sm-flex align-center"},zt={class:"text-h4"},Ut={class:"ml-auto"},Xt={class:"text-subtitle-1 font-weight-medium"},qt={class:"text-subtitle-1 font-weight-medium"},Kt={class:"text-subtitle-1 font-weight-medium"},Qt=["onClick"],Wt={class:"text-no-wrap"},Zt={class:"text-no-wrap"},te=w({__name:"HallTable",props:{title:{type:String,default:""},options:{type:Object,default:()=>({per_page:"10",order_by:"id",direction:"DESC"})}},setup(p){u("March"),u(["March","April","May","June"]);const r=u([]),_=U(),d=p;return _.fetchItems(d.options).then(s=>{r.value=s.data.data}),(s,h)=>(i(),S(A,{elevation:"10"},{default:l(()=>[o(E,null,{default:l(()=>[t("div",Ht,[t("div",null,[t("h2",zt,e(p.title),1)]),o(M),t("div",Ut,[o(T,{variant:"tonal",color:"primary",density:"compact",to:"/halls"},{default:l(()=>[k(e(s.$t("Voir plus")),1)]),_:1})])]),o(C,{density:"compact"},{default:l(()=>[t("thead",null,[t("tr",null,[t("th",Xt,e(s.$t("Nom")),1),t("th",qt,e(s.$t("Faite")),1),t("th",Kt,e(s.$t("Venir")),1)])]),t("tbody",null,[(i(!0),c(b,null,x(r.value,a=>(i(),c("tr",{key:a.id,class:"month-item"},[t("td",{class:"text-no-wrap cursor-pointer",onClick:n=>s.$router.push(`/prestations?hall=${a.id}`)},e(`${a.name}`),9,Qt),t("td",Wt,e(a.prestations_past),1),t("td",Zt,e(a.prestations_coming),1)]))),128))])]),_:1})]),_:1})]),_:1}))}}),ee={class:"d-sm-flex align-center"},se={class:"text-h4"},oe={class:"ml-auto"},ae={class:"text-subtitle-1 font-weight-medium"},le={class:"text-subtitle-1 font-weight-medium"},ne={class:"text-subtitle-1 font-weight-medium"},ie={class:"text-subtitle-1 font-weight-medium"},re=["onClick"],de={class:"text-no-wrap"},ue={class:"text-no-wrap"},ce={class:"text-no-wrap"},pe={class:"text-no-wrap"},_e=w({__name:"PaymentTable",props:{title:{type:String,default:""},options:{type:Object,default:()=>({per_page:"10",order_by:"id",direction:"DESC"})}},setup(p){u("March"),u(["March","April","May","June"]);const r=u([]),_=X(),d=p;return _.fetchItems(d.options).then(s=>{r.value=s.data.data}),(s,h)=>(i(),S(A,{elevation:"10"},{default:l(()=>[o(E,null,{default:l(()=>[t("div",ee,[t("div",null,[t("h2",se,e(p.title)+" "+e(f(v)(r.value.reduce((a,n)=>parseFloat(a)+parseFloat(n.amount),0))),1)]),o(M),t("div",oe,[o(T,{variant:"tonal",color:"primary",density:"compact",to:"/payments"},{default:l(()=>[k(e(s.$t("Voir plus")),1)]),_:1})])]),o(C,{density:"compact"},{default:l(()=>[t("thead",null,[t("tr",null,[t("th",ae,e(s.$t("Montant")),1),t("th",le,e(s.$t("Client")),1),t("th",ne,e(s.$t("Prest")),1),t("th",ie,e(s.$t("Date")),1)])]),t("tbody",null,[(i(!0),c(b,null,x(r.value,a=>(i(),c("tr",{key:a.id,class:"month-item cursor-pointer",onClick:n=>s.$router.push("/prestations/"+a.prestation_id)},[t("td",de,e(f(v)(a.amount)),1),t("td",ue,e(`${a.prestation&&a.prestation.customer?`${a.prestation.customer.firstname} ${a.prestation.customer.lastname}`:""}`),1),t("td",ce,e(`${a.prestation?`${a.prestation.event_type||"-"}`:""}`),1),t("td",pe,e(f(Y)(a.created_at)),1)],8,re))),128))])]),_:1})]),_:1})]),_:1}))}}),he={class:"d-sm-flex align-center"},me={class:"text-h4"},$e={class:"ml-auto"},fe={class:"text-subtitle-1 font-weight-medium"},ye={class:"text-subtitle-1 font-weight-medium"},ve={class:"text-subtitle-1 font-weight-medium"},ge=["onClick"],be={class:"text-no-wrap"},xe={class:"text-no-wrap"},we=w({__name:"PaymentTypeTable",props:{title:{type:String,default:""},options:{type:Object,default:()=>({per_page:"10",order_by:"id",direction:"DESC"})}},setup(p){u("March"),u(["March","April","May","June"]);const r=u([]),_=q(),d=p;return _.fetchItems(d.options).then(s=>{r.value=s.data.data}),(s,h)=>(i(),S(A,{elevation:"10"},{default:l(()=>[o(E,null,{default:l(()=>[t("div",he,[t("div",null,[t("h2",me,e(p.title)+" "+e(f(v)(r.value.reduce((a,n)=>parseFloat(a)+n.payments_sum_amount,0))),1)]),o(M),t("div",$e,[o(T,{variant:"tonal",color:"primary",density:"compact",to:"/payments"},{default:l(()=>[k(e(s.$t("Voir plus")),1)]),_:1})])]),o(C,{density:"compact"},{default:l(()=>[t("thead",null,[t("tr",null,[t("th",fe,e(s.$t("Nom")),1),t("th",ye,e(s.$t("Montant")),1),t("th",ve,e(s.$t("NB Réglements")),1)])]),t("tbody",null,[(i(!0),c(b,null,x(r.value,a=>(i(),c("tr",{key:a.id,class:"month-item"},[t("td",{class:"text-no-wrap cursor-pointer",onClick:n=>s.$router.push(`/payments?method=${a.name}`)},e(a.name),9,ge),t("td",be,e(f(v)(a.payments_sum_amount)),1),t("td",xe,e(a.payments_count),1)]))),128))])]),_:1})]),_:1})]),_:1}))}}),Se={class:"d-sm-flex align-center"},Ce={class:"text-h4"},Ee={class:"ml-auto"},Ae={class:"text-subtitle-1 font-weight-medium"},Me={class:"text-subtitle-1 font-weight-medium"},Te=["onClick"],ke={class:"text-no-wrap"},Ve=w({__name:"PrestationTypeTable",props:{title:{type:String,default:""},options:{type:Object,default:()=>({per_page:"10",order_by:"id",direction:"DESC"})}},setup(p){u("March"),u(["March","April","May","June"]);const r=u([]),_=K(),d=p,s=u([]),h=new Date().getFullYear();return Array.from({length:4},(a,n)=>h-n),_.fetchItems(d.options).then(a=>{r.value=a.data.data;for(let n=0;n<4;n++){const m=new Date().getFullYear()-n;for(let $=0;$<r.value.length;$++)r.value[$][`prestation_${m}`]>0&&s.value.indexOf(m)==-1&&s.value.push(m)}}),(a,n)=>(i(),S(A,{elevation:"10"},{default:l(()=>[o(E,null,{default:l(()=>[t("div",Se,[t("div",null,[t("h2",Ce,e(p.title),1)]),o(M),t("div",Ee,[o(T,{variant:"tonal",color:"primary",density:"compact",to:"/event_types"},{default:l(()=>[k(e(a.$t("Voir plus")),1)]),_:1})])]),o(C,{density:"compact"},{default:l(()=>[t("thead",null,[t("tr",null,[t("th",Ae,e(a.$t("Nom")),1),(i(!0),c(b,null,x(s.value,m=>(i(),c("th",Me,e(m),1))),256))])]),t("tbody",null,[(i(!0),c(b,null,x(r.value,m=>(i(),c("tr",{key:m.id,class:"month-item"},[t("td",{class:"text-no-wrap cursor-pointer",onClick:$=>a.$router.push(`/prestations?event_type=${m.name}`)},e(m.name),9,Te),(i(!0),c(b,null,x(s.value,$=>(i(),c("td",ke,e(m[`prestation_${$}`]||0),1))),256))]))),128))])]),_:1})]),_:1})]),_:1}))}}),We=w({__name:"Dashboard",setup(p){const r=u({title:"Dashboard"}),_=u([]);return(d,s)=>(i(),c(b,null,[o(B,{title:r.value.title,breadcrumbs:_.value},null,8,["title","breadcrumbs"]),o(Q,{class:"dashboard"},{default:l(()=>[o(g,{cols:"12",md:"6",lg:"6",xl:"4",xxl:"4"},{default:l(()=>[o(N,{class:"h-100",title:d.$t("PRESTATION A VENIR"),options:{per_page:10,order_by:"event_date",direction:"ASC",statistics:"future",status:1}},null,8,["title"])]),_:1}),o(g,{cols:"12",md:"6",lg:"6",xl:"4",xxl:"4"},{default:l(()=>[o(N,{class:"h-100",title:d.$t("PRESTATION DEJA PASSE"),options:{per_page:10,order_by:"event_date",direction:"DESC",statistics:"past",status:3}},null,8,["title"])]),_:1}),o(g,{cols:"12",md:"6",lg:"6",xl:"4",xxl:"4"},{default:l(()=>[o(gt,{class:"h-100",title:d.$t("CLIENTS RECENTS"),options:{per_page:10,order_by:"created_at",direction:"DESC",statistics:"past",status:1}},null,8,["title"])]),_:1}),o(g,{cols:"12",md:"6",lg:"6",xl:"4",xxl:"4"},{default:l(()=>[o(F,{class:"h-100",title:d.$t("CA/MOIS - DÉJÀ PASSÉ"),options:{per_page:10,order_by:"event_date",direction:"ASC",statistics:"month_income",section:"past"}},null,8,["title"])]),_:1}),o(g,{cols:"12",md:"6",lg:"6",xl:"4",xxl:"4"},{default:l(()=>[o(F,{class:"h-100",title:d.$t("CA/MOIS - A VENIR"),options:{per_page:10,order_by:"event_date",direction:"ASC",statistics:"month_income",section:"future"}},null,8,["title"])]),_:1}),o(g,{cols:"12",md:"6",lg:"6",xl:"4",xxl:"4"},{default:l(()=>[o(Gt,{class:"h-100",title:d.$t("CA A L’ANNEE"),options:{per_page:10,order_by:"event_date",direction:"ASC",statistics:"year_income"}},null,8,["title"])]),_:1}),o(g,{cols:"12",md:"6",lg:"6",xl:"4",xxl:"4"},{default:l(()=>[o(te,{class:"h-100",title:d.$t("LISTE SALLES"),options:{per_page:10,order_by:"name",direction:"ASC",statistics:"dashboard"}},null,8,["title"])]),_:1}),o(g,{cols:"12",md:"6",lg:"6",xl:"4",xxl:"4"},{default:l(()=>[o(_e,{class:"h-100",title:d.$t("REGLEMENTS"),options:{per_page:10,order_by:"created_at",direction:"DESC",statistics:"dashboard"}},null,8,["title"])]),_:1}),o(g,{cols:"12",md:"6",lg:"6",xl:"4",xxl:"4"},{default:l(()=>[o(N,{class:"h-100",title:d.$t("REGLEMENTS EN ATTENTE"),options:{per_page:10,order_by:"event_date",direction:"ASC",statistics:"closed"}},null,8,["title"])]),_:1}),o(g,{cols:"12",md:"6",lg:"6",xl:"4",xxl:"4"},{default:l(()=>[o(we,{class:"h-100",title:d.$t("TYPE REGLEMENTS"),options:{per_page:1e3,order_by:"name",direction:"ASC",statistics:"dashboard"}},null,8,["title"])]),_:1}),o(g,{cols:"12",md:"6",lg:"6",xl:"6",xxl:"6"},{default:l(()=>[o(Ve,{class:"h-100",title:d.$t("TYPE PRESTATIONS"),options:{per_page:1e3,order_by:"name",direction:"ASC",statistics:"dashboard"}},null,8,["title"])]),_:1})]),_:1})],64))}});export{We as default};