import{a9 as l,aK as i,aa as n}from"./index-BvY_KK37.js";const c=l({id:"Prestations",state:()=>({prestations:{data:[],loading:!1,error:null},statuses:{started:0,validated:1,processing:2,closed:3,cancelled:-1},statusesList:[{id:0,label:i("Validation")},{id:1,label:i("Validée")},{id:2,label:i("En cours")},{id:3,label:i("Clôturée")},{id:-1,label:i("Annulé")}],statistics:{total:0,validation:0,validated:0,processing:0,closed:0,cancelled:0,paymentsLeft:0,paymentsReceived:0,totalPayments:0}}),actions:{fetchStatistics(e){return n.get("/statistics/prestations",{params:e}).then(s=>{s.data&&(this.statistics=s.data)})},fetchItems(e){return n.get("/prestations",{params:e})},async addItem(e){return new Promise((s,a)=>{n.post("/prestations",e).then(t=>s(t)).catch(t=>a(t))})},fetchItem(e){return new Promise((s,a)=>{n.get(`/prestations/${e}`).then(t=>s(t)).catch(t=>a(t))})},deleteItem(e){return new Promise((s,a)=>{n.delete(`/prestations/${e}`).then(t=>s(t)).catch(t=>a(t))})},deleteService(e,s){return new Promise((a,t)=>{n.delete(`/prestations/services/${e}/${s}`).then(r=>a(r)).catch(r=>t(r))})},deletePayment(e,s){return new Promise((a,t)=>{n.delete(`/prestations/payments/${e}/${s}`).then(r=>a(r)).catch(r=>t(r))})},cancelItem(e,s){return new Promise((a,t)=>{n.post(`/prestations/cancel/${e}`,{comment:s}).then(r=>a(r)).catch(r=>t(r))})},startItem(e){return new Promise((s,a)=>{n.post(`/prestations/start/${e}`).then(t=>s(t)).catch(t=>a(t))})},closeItem(e){return new Promise((s,a)=>{n.post(`/prestations/close/${e}`).then(t=>s(t)).catch(t=>a(t))})},validateItem(e,s){return new Promise((a,t)=>{n.post(`/prestations/validate/${e}`,{comment:s}).then(r=>a(r)).catch(r=>t(r))})},saveService(e,s){return new Promise((a,t)=>{n.post(`/prestations/service/${e}`,s).then(r=>a(r)).catch(r=>t(r))})},savePayment(e,s){return new Promise((a,t)=>{n.post(`/prestations/payment/${e}`,s).then(r=>a(r)).catch(r=>t(r))})},statusColor(e){return e==-1?"#FA896B":e==1?"#97e686":e==3?"#1f9007":e==2?"#5D87FF":"#FFAE1F"},statusText(e){return e==this.statuses.cancelled?i("Annulé"):e==this.statuses.validated?i("Validée"):e==this.statuses.processing?i("En cours"):e==this.statuses.closed?i("Clôturée"):i("Validation")},pageTitle(e){return e==this.statuses.cancelled?i("Prestations annulées"):e==this.statuses.validated?i("Prestations validées"):e==this.statuses.processing?i("Prestations en cours"):e==this.statuses.closed?i("Prestations clôturées"):i("Prestations en attente de validation")},pageLink(e){return e==this.statuses.cancelled?"/prestations/list/cancelled":e==this.statuses.validated?"/prestations/list/validated":e==this.statuses.processing?"/prestations/list/processing":e==this.statuses.closed?"/prestations/list/closed":"/prestations/list/started"}}});export{c as u};