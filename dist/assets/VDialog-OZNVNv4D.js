import{p as P,bz as y,j as D,u as h,R as S,r as x,bv as B,g as v,e as R,n as f,m as w,bd as F,Y as I,bB as m,b as g,b9 as T,bC as C}from"./index-D9FGzf8A.js";import{k as O}from"./VSpacer-Hsby7M-8.js";const k=P({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...y({origin:"center center",scrollStrategy:"block",transition:{component:O},zIndex:2400})},"VDialog"),L=D()({name:"VDialog",props:k(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const n=h(a,"modelValue"),{scopeId:b}=S(),t=x();function i(l){var r,s;const e=l.relatedTarget,o=l.target;if(e!==o&&((r=t.value)!=null&&r.contentEl)&&((s=t.value)!=null&&s.globalTop)&&![document,t.value.contentEl].includes(o)&&!t.value.contentEl.contains(o)){const u=C(t.value.contentEl);if(!u.length)return;const d=u[0],E=u[u.length-1];e===d?E.focus():d.focus()}}B&&v(()=>n.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),v(n,async l=>{var e,o;await I(),l?(e=t.value.contentEl)==null||e.focus({preventScroll:!0}):(o=t.value.activatorEl)==null||o.focus({preventScroll:!0})});const V=R(()=>f({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return w(()=>{const l=m.filterProps(a);return g(m,f({ref:t,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:V.value,role:"dialog"},b),{activator:c.activator,default:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return g(T,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...o)]}})}})}),F({},t)}});export{L as V};