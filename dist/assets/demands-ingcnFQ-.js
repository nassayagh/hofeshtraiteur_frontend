import{a9 as i,aK as r,aa as s}from"./index-Cbri8peo.js";const c=i({id:"Demands",state:()=>({statuses:{started:0,validated:1,processing:2,closed:3,cancelled:-1},statusesList:[{id:0,label:r("Nouvelle demande")},{id:-1,label:r("Annulé")}],statistics:{total:0,validated:0,unvalidated:0,cancelled:0},demands:{data:[],loading:!1,error:null}}),actions:{fetchStatistics(e){return s.get("/statistics/demands",{params:e}).then(a=>{a.data&&(this.statistics=a.data)})},fetchItems(e){return s.get("/demands",{params:e})},async addItem(e){return new Promise((a,n)=>{s.post("/demands",e).then(t=>a(t)).catch(t=>n(t))})},fetchItem(e){return new Promise((a,n)=>{s.get(`/demands/${e}`).then(t=>a(t)).catch(t=>n(t))})},deleteItem(e){return new Promise((a,n)=>{s.delete(`/demands/${e}`).then(t=>a(t)).catch(t=>n(t))})},cancelItem(e){return new Promise((a,n)=>{s.post(`/demands/cancel/${e}`).then(t=>a(t)).catch(t=>n(t))})},addComment(e,a){return new Promise((n,t)=>{s.post(`/demands/comment/${e}`,{comment:a}).then(d=>n(d)).catch(d=>t(d))})},validateItem(e,a){return new Promise((n,t)=>{s.post(`/demands/validate/${e}`,a).then(d=>n(d)).catch(d=>t(d))})},statusColor(e){return e==-1?"#FA896B":e==1?"#79d066":e==2?"#5D87FF":"#FFAE1F"},statusText(e){return e==-1?r("Annulé"):e==1?r("Validé"):e==2?r("Terminé"):r("Nouvelle demande")},getStatuses(){}}});export{c as u};