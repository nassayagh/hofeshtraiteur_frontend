import{ai as c,aj as h,aY as n}from"./index-D1vr5Jkw.js";const r=c({id:"chat",state:()=>({chats:[],chatContent:1}),getters:{},actions:{async fetchChats(){try{const t=await h.get("/api/data/chat/ChatData");this.chats=t.data}catch(t){alert(t),console.log(t)}},SelectChat(t){this.chatContent=t},sendMsg(t,s){const e={id:t,msg:s,type:"text",attachments:[],createdAt:n(new Date,{seconds:1}),senderId:t};this.chats=this.chats.filter(a=>a.id===t?{...a,...a.chatHistory.push(e)}:a)}}});export{r as u};