import{p as P,bu as y,j as D,u as h,R as x,r as R,aR as S,g as f,e as w,n as v,m as T,aV as B,Y as F,bw as m,b as g,aT as I,bx as O}from"./index-Haou7WZV.js";import{i as A}from"./VMenu-D2Zs2JLs.js";const C=P({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...y({origin:"center center",scrollStrategy:"block",transition:{component:A},zIndex:2400})},"VDialog"),j=D()({name:"VDialog",props:C(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const n=h(a,"modelValue"),{scopeId:V}=x(),t=R();function i(l){var r,s;const e=l.relatedTarget,o=l.target;if(e!==o&&((r=t.value)!=null&&r.contentEl)&&((s=t.value)!=null&&s.globalTop)&&![document,t.value.contentEl].includes(o)&&!t.value.contentEl.contains(o)){const u=O(t.value.contentEl);if(!u.length)return;const d=u[0],E=u[u.length-1];e===d?E.focus():d.focus()}}S&&f(()=>n.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),f(n,async l=>{var e,o;await F(),l?(e=t.value.contentEl)==null||e.focus({preventScroll:!0}):(o=t.value.activatorEl)==null||o.focus({preventScroll:!0})});const b=w(()=>v({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return T(()=>{const l=m.filterProps(a);return g(m,v({ref:t,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:b.value,role:"dialog"},V),{activator:c.activator,default:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return g(I,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...o)]}})}})}),B({},t)}});export{j as V};