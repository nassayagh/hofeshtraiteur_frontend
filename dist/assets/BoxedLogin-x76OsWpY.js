import{_ as S}from"./Logo-99cmhgVn.js";import{a6 as b,r as o,Z as $,o as v,_ as B,w as t,b as a,d,t as n,a as V,V as E,c as y,a4 as F,a8 as N,a7 as R,b_ as q,aD as f}from"./index-Haou7WZV.js";import{F as T}from"./vee-validate.esm-C95KK0ES.js";import"./customizer-BtUJLEwb.js";import{h,V as x}from"./VTextField-C_vc3FPB.js";import{V as I}from"./VAlert-BOpCpDmc.js";import{a as U,V as j}from"./VRow-BubB7DAO.js";import{a as z,d as A}from"./VCard-MdO1ZgSK.js";import{V as D}from"./VContainer-MidcLwaQ.js";import"./VLocaleProvider-Chf_L3IB.js";import"./VAvatar-D1nt9zQ9.js";const M={class:"d-flex flex-wrap align-center my-3 ml-n2"},J={class:"ml-sm-auto"},O={key:0,class:"mt-2"},Z=b({__name:"LoginForm",setup(w){const p=o();o(!1);const m=o(!1);o(!1);const g=o(!1),i=o(null),u=o(null),C=o([e=>!!e||f("Le mot de passe est requis"),e=>e&&e.length>=8||f("Le mot de passe doit comporter moins de 8 caractères")]),k=o([e=>!!e||f("L’e-mail est requis"),e=>/.+@.+\..+/.test(e)||"E-mail must be valid"]);function L(e,{setErrors:l}){var r;const c=R();(r=p.value)==null||r.validate().then(({valid:_})=>_&&u.value!=null&&i.value!=null&&u.value.toString().length>3&&i.value.toString().length>3?c.login(u.value,i.value).then(s=>{if(g.value=!1,s.data.error){l({apiError:s.data.message});return}c.user=s.data,localStorage.setItem("user",JSON.stringify(s.data)),q.push("/")}).catch(s=>l({apiError:s})).then(()=>{g.value=!1}):l({apiError:f("Veuillez soumettre des valeurs valides")}))}return(e,l)=>{const c=$("RouterLink");return v(),B(N(T),{onSubmit:L,ref_key:"refForm",ref:p,modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=r=>m.value=r),class:"mt-5"},{default:t(({errors:r,isSubmitting:_})=>[a(h,{class:"text-subtitle-1 font-weight-medium pb-2 text-lightText"},{default:t(()=>[d(n(e.$t("E-mail")),1)]),_:1}),a(x,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=s=>u.value=s),rules:k.value,class:"mb-8",required:"","hide-details":"auto"},null,8,["modelValue","rules"]),a(h,{class:"text-subtitle-1 font-weight-medium pb-2 text-lightText"},{default:t(()=>[d(n(e.$t("Mot de passe")),1)]),_:1}),a(x,{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=s=>i.value=s),rules:C.value,required:"","hide-details":"auto",type:"password",class:"pwdInput"},null,8,["modelValue","rules"]),V("div",M,[V("div",J,[a(c,{to:"",class:"text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"},{default:t(()=>[d(n(e.$t("Mot de passe oublié ?")),1)]),_:1})])]),a(E,{size:"large",loading:_,color:"primary",disabled:m.value,block:"",type:"submit",flat:""},{default:t(()=>[d(n(e.$t("Connexion")),1)]),_:2},1032,["loading","disabled"]),r.apiError?(v(),y("div",O,[a(I,{color:"error"},{default:t(()=>[d(n(r.apiError),1)]),_:2},1024)])):F("",!0)]),_:1},8,["modelValue"])}}}),G={class:"authentication"},H={class:"d-flex justify-center mb-5"},oe=b({__name:"BoxedLogin",setup(w){return(p,m)=>(v(),y("div",G,[a(D,{fluid:"",class:"pa-3"},{default:t(()=>[a(U,{class:"h-100vh d-flex justify-center align-center"},{default:t(()=>[a(j,{cols:"12",class:"d-flex align-center"},{default:t(()=>[a(z,{rounded:"md",elevation:"10",class:"px-sm-1 px-0 mx-auto","max-width":"450"},{default:t(()=>[a(A,{class:"pa-sm-8"},{default:t(()=>[V("div",H,[a(S)]),a(Z)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))}});export{oe as default};