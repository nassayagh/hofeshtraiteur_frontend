import{s as B,h as Qe,e as y,bA as We,a_ as F,aZ as _,bB as T,r as P,p as M,u as X,i as ge,b0 as Xe,bt as be,bC as Ye,b4 as x,v as U,y as H,j as D,l as w,m as G,b as f,aL as R,aK as Ze,a1 as pe,bD as et,aM as oe,G as Se,b5 as he,aS as Ce,I as ke,J as we,bE as tt,z as Ve,b7 as Ie,bw as nt,bF as at,g as Pe,A as Ae,L as Le,bG as lt,bx as Oe,aV as Me,N as Be,P as xe,bH as st,a0 as it,bI as ot,X as re,ac as ue,bn as rt,n as $,b1 as ut,bg as A,aQ as te,M as ct,U as dt,bJ as Y,bs as vt,R as ft,bK as ce,bu as de,bk as mt,Y as yt,bL as ve,bM as gt}from"./index-BXBYVBfQ.js";import{a as bt}from"./index-Iw3IPOsb.js";import{c as Te}from"./createSimpleFunctional-CwhZkEih.js";import{V as fe}from"./VAvatar-8uoTWrfj.js";import{V as pt,a as St}from"./VDivider-U3R6LiAg.js";function ht(){const e=B(!1);return Qe(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:y(()=>e.value?void 0:{transition:"none !important"}),isBooted:We(e)}}const Z=Symbol.for("vuetify:list");function De(){const e=F(Z,{hasPrepend:B(!1),updateHasPrepend:()=>null}),l={hasPrepend:B(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return _(Z,l),e}function Ee(){return F(Z,null)}const Ct={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){const a=new Set;a.add(l);let i=s.get(l);for(;i!=null;)a.add(i),i=s.get(i);return a}else return n.delete(l),n},select:()=>null},Fe={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){let a=s.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=s.get(a);return n}else n.delete(l);return n},select:()=>null},kt={open:Fe.open,select:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(!t)return n;const a=[];let i=s.get(l);for(;i!=null;)a.push(i),i=s.get(i);return new Set(a)}},ne=e=>{const l={select:t=>{let{id:n,value:s,selected:a}=t;if(n=T(n),e&&!s){const i=Array.from(a.entries()).reduce((o,m)=>{let[g,b]=m;return b==="on"?[...o,g]:o},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,s?"on":"off"),a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:t=>{const n=[];for(const[s,a]of t.entries())a==="on"&&n.push(s);return n}};return l},_e=e=>{const l=ne(e);return{select:n=>{let{selected:s,id:a,...i}=n;a=T(a);const o=s.has(a)?new Map([[a,s.get(a)]]):new Map;return l.select({...i,id:a,selected:o})},in:(n,s,a)=>{let i=new Map;return n!=null&&n.length&&(i=l.in(n.slice(0,1),s,a)),i},out:(n,s,a)=>l.out(n,s,a)}},wt=e=>{const l=ne(e);return{select:n=>{let{id:s,selected:a,children:i,...o}=n;return s=T(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...o})},in:l.in,out:l.out}},Vt=e=>{const l=_e(e);return{select:n=>{let{id:s,selected:a,children:i,...o}=n;return s=T(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...o})},in:l.in,out:l.out}},It=e=>{const l={select:t=>{let{id:n,value:s,selected:a,children:i,parents:o}=t;n=T(n);const m=new Map(a),g=[n];for(;g.length;){const r=g.shift();a.set(r,s?"on":"off"),i.has(r)&&g.push(...i.get(r))}let b=o.get(n);for(;b;){const r=i.get(b),c=r.every(d=>a.get(d)==="on"),v=r.every(d=>!a.has(d)||a.get(d)==="off");a.set(b,c?"on":v?"off":"indeterminate"),b=o.get(b)}return e&&!s&&Array.from(a.entries()).reduce((c,v)=>{let[d,u]=v;return u==="on"?[...c,d]:c},[]).length===0?m:a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:(t,n)=>{const s=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&s.push(a);return s}};return l},E=Symbol.for("vuetify:nested"),Ge={id:B(),root:{register:()=>null,unregister:()=>null,parents:P(new Map),children:P(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:P(new Set),selected:P(new Map),selectedValues:P([])}},Pt=M({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),At=e=>{let l=!1;const t=P(new Map),n=P(new Map),s=X(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),a=y(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Vt(e.mandatory);case"leaf":return wt(e.mandatory);case"independent":return ne(e.mandatory);case"single-independent":return _e(e.mandatory);case"classic":default:return It(e.mandatory)}}),i=y(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return kt;case"single":return Ct;case"multiple":default:return Fe}}),o=X(e,"selected",e.selected,r=>a.value.in(r,t.value,n.value),r=>a.value.out(r,t.value,n.value));ge(()=>{l=!0});function m(r){const c=[];let v=r;for(;v!=null;)c.unshift(v),v=n.value.get(v);return c}const g=Xe("nested"),b={id:B(),root:{opened:s,selected:o,selectedValues:y(()=>{const r=[];for(const[c,v]of o.value.entries())v==="on"&&r.push(c);return r}),register:(r,c,v)=>{c&&r!==c&&n.value.set(r,c),v&&t.value.set(r,[]),c!=null&&t.value.set(c,[...t.value.get(c)||[],r])},unregister:r=>{if(l)return;t.value.delete(r);const c=n.value.get(r);if(c){const v=t.value.get(c)??[];t.value.set(c,v.filter(d=>d!==r))}n.value.delete(r),s.value.delete(r)},open:(r,c,v)=>{g.emit("click:open",{id:r,value:c,path:m(r),event:v});const d=i.value.open({id:r,value:c,opened:new Set(s.value),children:t.value,parents:n.value,event:v});d&&(s.value=d)},openOnSelect:(r,c,v)=>{const d=i.value.select({id:r,value:c,selected:new Map(o.value),opened:new Set(s.value),children:t.value,parents:n.value,event:v});d&&(s.value=d)},select:(r,c,v)=>{g.emit("click:select",{id:r,value:c,path:m(r),event:v});const d=a.value.select({id:r,value:c,selected:new Map(o.value),children:t.value,parents:n.value,event:v});d&&(o.value=d),b.root.openOnSelect(r,c,v)},children:t,parents:n}};return _(E,b),b.root},je=(e,l)=>{const t=F(E,Ge),n=Symbol(be()),s=y(()=>e.value!==void 0?e.value:n),a={...t,id:s,open:(i,o)=>t.root.open(s.value,i,o),openOnSelect:(i,o)=>t.root.openOnSelect(s.value,i,o),isOpen:y(()=>t.root.opened.value.has(s.value)),parent:y(()=>t.root.parents.value.get(s.value)),select:(i,o)=>t.root.select(s.value,i,o),isSelected:y(()=>t.root.selected.value.get(T(s.value))==="on"),isIndeterminate:y(()=>t.root.selected.value.get(s.value)==="indeterminate"),isLeaf:y(()=>!t.root.children.value.get(s.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(s.value,t.id.value,l),ge(()=>{!t.isGroupActivator&&t.root.unregister(s.value)}),l&&_(E,a),a},Lt=()=>{const e=F(E,Ge);_(E,{...e,isGroupActivator:!0})},Ot=Ye({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return Lt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Mt=M({activeColor:String,baseColor:String,color:String,collapseIcon:{type:x,default:"$collapse"},expandIcon:{type:x,default:"$expand"},prependIcon:x,appendIcon:x,fluid:Boolean,subgroup:Boolean,title:String,value:null,...U(),...H()},"VListGroup"),me=D()({name:"VListGroup",props:Mt(),setup(e,l){let{slots:t}=l;const{isOpen:n,open:s,id:a}=je(w(e,"value"),!0),i=y(()=>`v-list-group--id-${String(a.value)}`),o=Ee(),{isBooted:m}=ht();function g(v){s(!n.value,v)}const b=y(()=>({onClick:g,class:"v-list-group__header",id:i.value})),r=y(()=>n.value?e.collapseIcon:e.expandIcon),c=y(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&r.value,appendIcon:e.appendIcon||!e.subgroup&&r.value,title:e.title,value:e.value}}));return G(()=>f(e.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&f(R,{defaults:c.value},{default:()=>[f(Ot,null,{default:()=>[t.activator({props:b.value,isOpen:n.value})]})]}),f(Ze,{transition:{component:bt},disabled:!m.value},{default:()=>{var v;return[pe(f("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(v=t.default)==null?void 0:v.call(t)]),[[et,n.value]])]}})]})),{}}}),Bt=Te("v-list-item-subtitle"),xt=Te("v-list-item-title"),Tt=M({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:x,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:x,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:oe(),onClickOnce:oe(),...Se(),...U(),...he(),...Ce(),...ke(),...we(),...tt(),...H(),...Ve(),...Ie({variant:"text"})},"VListItem"),ye=D()({name:"VListItem",directives:{Ripple:nt},props:Tt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:s}=l;const a=at(e,t),i=y(()=>e.value===void 0?a.href.value:e.value),{select:o,isSelected:m,isIndeterminate:g,isGroupActivator:b,root:r,parent:c,openOnSelect:v}=je(i,!1),d=Ee(),u=y(()=>{var h;return e.active!==!1&&(e.active||((h=a.isActive)==null?void 0:h.value)||m.value)}),p=y(()=>e.link!==!1&&a.isLink.value),S=y(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!d)),C=y(()=>e.rounded||e.nav),V=y(()=>e.color??e.activeColor),L=y(()=>({color:u.value?V.value??e.baseColor:e.baseColor,variant:e.variant}));Pe(()=>{var h;return(h=a.isActive)==null?void 0:h.value},h=>{h&&c.value!=null&&r.open(c.value,!0),h&&v(h)},{immediate:!0});const{themeClasses:j}=Ae(e),{borderClasses:q}=Le(e),{colorClasses:J,colorStyles:z,variantClasses:O}=lt(L),{densityClasses:k}=Oe(e),{dimensionStyles:K}=Me(e),{elevationClasses:$e}=Be(e),{roundedClasses:Ue}=xe(C),He=y(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Q=y(()=>({isActive:u.value,select:o,isSelected:m.value,isIndeterminate:g.value}));function ae(h){var N;s("click",h),!(b||!S.value)&&((N=a.navigate)==null||N.call(a,h),e.value!=null&&o(!m.value,h))}function qe(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),ae(h))}return G(()=>{const h=p.value?"a":e.tag,N=n.title||e.title!=null,Je=n.subtitle||e.subtitle!=null,le=!!(e.appendAvatar||e.appendIcon),ze=!!(le||n.append),se=!!(e.prependAvatar||e.prependIcon),W=!!(se||n.prepend);return d==null||d.updateHasPrepend(W),e.activeColor&&st("active-color",["color","base-color"]),pe(f(h,{class:["v-list-item",{"v-list-item--active":u.value,"v-list-item--disabled":e.disabled,"v-list-item--link":S.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!W&&(d==null?void 0:d.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&u.value},j.value,q.value,J.value,k.value,$e.value,He.value,Ue.value,O.value,e.class],style:[z.value,K.value,e.style],href:a.href.value,tabindex:S.value?d?-2:0:void 0,onClick:ae,onKeydown:S.value&&!p.value&&qe},{default:()=>{var ie;return[ot(S.value||u.value,"v-list-item"),W&&f("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?f(R,{key:"prepend-defaults",disabled:!se,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var I;return[(I=n.prepend)==null?void 0:I.call(n,Q.value)]}}):f(re,null,[e.prependAvatar&&f(fe,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&f(ue,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),f("div",{class:"v-list-item__spacer"},null)]),f("div",{class:"v-list-item__content","data-no-activator":""},[N&&f(xt,{key:"title"},{default:()=>{var I;return[((I=n.title)==null?void 0:I.call(n,{title:e.title}))??e.title]}}),Je&&f(Bt,{key:"subtitle"},{default:()=>{var I;return[((I=n.subtitle)==null?void 0:I.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(ie=n.default)==null?void 0:ie.call(n,Q.value)]),ze&&f("div",{key:"append",class:"v-list-item__append"},[n.append?f(R,{key:"append-defaults",disabled:!le,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var I;return[(I=n.append)==null?void 0:I.call(n,Q.value)]}}):f(re,null,[e.appendIcon&&f(ue,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&f(fe,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),f("div",{class:"v-list-item__spacer"},null)])]}}),[[it("ripple"),S.value&&e.ripple]])}),{}}}),Dt=M({color:String,inset:Boolean,sticky:Boolean,title:String,...U(),...H()},"VListSubheader"),Et=D()({name:"VListSubheader",props:Dt(),setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:s}=rt(w(e,"color"));return G(()=>{const a=!!(t.default||e.title);return f(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:s},e.style]},{default:()=>{var i;return[a&&f("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),Ft=M({items:Array,returnObject:Boolean},"VListChildren"),Ke=D()({name:"VListChildren",props:Ft(),setup(e,l){let{slots:t}=l;return De(),()=>{var n,s;return((n=t.default)==null?void 0:n.call(t))??((s=e.items)==null?void 0:s.map(a=>{var c,v;let{children:i,props:o,type:m,raw:g}=a;if(m==="divider")return((c=t.divider)==null?void 0:c.call(t,{props:o}))??f(pt,o,null);if(m==="subheader")return((v=t.subheader)==null?void 0:v.call(t,{props:o}))??f(Et,o,null);const b={subtitle:t.subtitle?d=>{var u;return(u=t.subtitle)==null?void 0:u.call(t,{...d,item:g})}:void 0,prepend:t.prepend?d=>{var u;return(u=t.prepend)==null?void 0:u.call(t,{...d,item:g})}:void 0,append:t.append?d=>{var u;return(u=t.append)==null?void 0:u.call(t,{...d,item:g})}:void 0,title:t.title?d=>{var u;return(u=t.title)==null?void 0:u.call(t,{...d,item:g})}:void 0},r=me.filterProps(o);return i?f(me,$({value:o==null?void 0:o.value},r),{activator:d=>{let{props:u}=d;const p={...o,...u,value:e.returnObject?g:o.value};return t.header?t.header({props:p}):f(ye,p,b)},default:()=>f(Ke,{items:i},t)}):t.item?t.item({props:o}):f(ye,$(o,{value:e.returnObject?g:o.value}),b)}))}}}),_t=M({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:ut}},"list-items");function ee(e,l){const t=A(l,e.itemTitle,l),n=A(l,e.itemValue,t),s=A(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?te(l,["children"]):l:void 0:A(l,e.itemProps),i={title:t,value:n,...a};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(s)?Ne(e,s):void 0,raw:l}}function Ne(e,l){const t=[];for(const n of l)t.push(ee(e,n));return t}function zt(e){const l=y(()=>Ne(e,e.items)),t=y(()=>l.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(i=>i!==null)),a.map(i=>e.returnObject&&typeof i=="string"?ee(e,i):l.value.find(o=>e.valueComparator(i,o.value))||ee(e,i))}function s(a){return e.returnObject?a.map(i=>{let{raw:o}=i;return o}):a.map(i=>{let{value:o}=i;return o})}return{items:l,transformIn:n,transformOut:s}}function Gt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function jt(e,l){const t=A(l,e.itemType,"item"),n=Gt(l)?l:A(l,e.itemTitle),s=A(l,e.itemValue,void 0),a=A(l,e.itemChildren),i=e.itemProps===!0?te(l,["children"]):A(l,e.itemProps),o={title:n,value:s,...i};return{type:t,title:o.title,value:o.value,props:o,children:t==="item"&&a?Re(e,a):void 0,raw:l}}function Re(e,l){const t=[];for(const n of l)t.push(jt(e,n));return t}function Kt(e){return{items:y(()=>Re(e,e.items))}}const Nt=M({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...Pt({selectStrategy:"single-leaf",openStrategy:"list"}),...Se(),...U(),...he(),...Ce(),...ke(),itemType:{type:String,default:"type"},..._t(),...we(),...H(),...Ve(),...Ie({variant:"text"})},"VList"),Qt=D()({name:"VList",props:Nt(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=Kt(e),{themeClasses:s}=Ae(e),{backgroundColorClasses:a,backgroundColorStyles:i}=ct(w(e,"bgColor")),{borderClasses:o}=Le(e),{densityClasses:m}=Oe(e),{dimensionStyles:g}=Me(e),{elevationClasses:b}=Be(e),{roundedClasses:r}=xe(e),{open:c,select:v}=At(e),d=y(()=>e.lines?`v-list--${e.lines}-line`:void 0),u=w(e,"activeColor"),p=w(e,"baseColor"),S=w(e,"color");De(),dt({VListGroup:{activeColor:u,baseColor:p,color:S,expandIcon:w(e,"expandIcon"),collapseIcon:w(e,"collapseIcon")},VListItem:{activeClass:w(e,"activeClass"),activeColor:u,baseColor:p,color:S,density:w(e,"density"),disabled:w(e,"disabled"),lines:w(e,"lines"),nav:w(e,"nav"),slim:w(e,"slim"),variant:w(e,"variant")}});const C=B(!1),V=P();function L(k){C.value=!0}function j(k){C.value=!1}function q(k){var K;!C.value&&!(k.relatedTarget&&((K=V.value)!=null&&K.contains(k.relatedTarget)))&&O()}function J(k){if(V.value){if(k.key==="ArrowDown")O("next");else if(k.key==="ArrowUp")O("prev");else if(k.key==="Home")O("first");else if(k.key==="End")O("last");else return;k.preventDefault()}}function z(k){C.value=!0}function O(k){if(V.value)return Y(V.value,k)}return G(()=>f(e.tag,{ref:V,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},s.value,a.value,o.value,m.value,b.value,d.value,r.value,e.class],style:[i.value,g.value,e.style],tabindex:e.disabled||C.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:L,onFocusout:j,onFocus:q,onKeydown:J,onMousedown:z},{default:()=>[f(Ke,{items:n.value,returnObject:e.returnObject},t)]})),{open:c,select:v,focus:O}}}),Rt=M({id:String,...te(vt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:St}}),["absolute"])},"VMenu"),Wt=D()({name:"VMenu",props:Rt(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const n=X(e,"modelValue"),{scopeId:s}=ft(),a=be(),i=y(()=>e.id||`v-menu-${a}`),o=P(),m=F(ce,null),g=B(0);_(ce,{register(){++g.value},unregister(){--g.value},closeParents(){setTimeout(()=>{g.value||(n.value=!1,m==null||m.closeParents())},40)}});async function b(u){var C,V,L;const p=u.relatedTarget,S=u.target;await yt(),n.value&&p!==S&&((C=o.value)!=null&&C.contentEl)&&((V=o.value)!=null&&V.globalTop)&&![document,o.value.contentEl].includes(S)&&!o.value.contentEl.contains(S)&&((L=ve(o.value.contentEl)[0])==null||L.focus())}Pe(n,u=>{u?(m==null||m.register(),document.addEventListener("focusin",b,{once:!0})):(m==null||m.unregister(),document.removeEventListener("focusin",b))});function r(){m==null||m.closeParents()}function c(u){var p,S,C;e.disabled||u.key==="Tab"&&(gt(ve((p=o.value)==null?void 0:p.contentEl,!1),u.shiftKey?"prev":"next",L=>L.tabIndex>=0)||(n.value=!1,(C=(S=o.value)==null?void 0:S.activatorEl)==null||C.focus()))}function v(u){var S;if(e.disabled)return;const p=(S=o.value)==null?void 0:S.contentEl;p&&n.value?u.key==="ArrowDown"?(u.preventDefault(),Y(p,"next")):u.key==="ArrowUp"&&(u.preventDefault(),Y(p,"prev")):["ArrowDown","ArrowUp"].includes(u.key)&&(n.value=!0,u.preventDefault(),setTimeout(()=>setTimeout(()=>v(u))))}const d=y(()=>$({"aria-haspopup":"menu","aria-expanded":String(n.value),"aria-owns":i.value,onKeydown:v},e.activatorProps));return G(()=>{const u=de.filterProps(e);return f(de,$({ref:o,id:i.value,class:["v-menu",e.class],style:e.style},u,{modelValue:n.value,"onUpdate:modelValue":p=>n.value=p,absolute:!0,activatorProps:d.value,"onClick:outside":r,onKeydown:c},s),{activator:t.activator,default:function(){for(var p=arguments.length,S=new Array(p),C=0;C<p;C++)S[C]=arguments[C];return f(R,{root:"VMenu"},{default:()=>{var V;return[(V=t.default)==null?void 0:V.call(t,...S)]}})}})}),mt({id:i,ΨopenChildren:g},o)}});export{Et as V,xt as a,Bt as b,ye as c,me as d,Qt as e,Wt as f,zt as g,_t as m,ht as u};