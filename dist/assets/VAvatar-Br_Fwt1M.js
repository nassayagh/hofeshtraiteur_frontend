import{j as P,b2 as J,c4 as Z,v as k,bj as $,p as I,ay as G,az as K,m as B,b as t,e as V,J as E,bt as Q,ba as p,M as ee,l as ae,P as O,aS as te,s as _,r as ne,g as T,T as re,c5 as le,Y as se,i as ie,a1 as W,a0 as ue,X as oe,n as ce,E as ve,bU as de,bm as z,aW as ge,aX as me,aY as fe,y as Se,z as ye,aZ as _e,A as be,bR as he,bF as ze,bS as Ve,ac as Pe,b9 as ke,bT as Ce}from"./index-D9FGzf8A.js";function Ae(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",r=arguments.length>2?arguments[2]:void 0;return P()({name:r??J(Z(e.replace(/__/g,"-"))),props:{tag:{type:String,default:o},...k()},setup(n,g){let{slots:c}=g;return()=>{var m;return $(n.tag,{class:[e,n.class],style:n.style},(m=c.default)==null?void 0:m.call(c))}}})}function Re(e){return{aspectStyles:V(()=>{const o=Number(e.aspectRatio);return o?{paddingBottom:String(1/o*100)+"%"}:void 0})}}const M=I({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...k(),...G()},"VResponsive"),x=P()({name:"VResponsive",props:M(),setup(e,o){let{slots:r}=o;const{aspectStyles:n}=Re(e),{dimensionStyles:g}=K(e);return B(()=>{var c;return t("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[g.value,e.style]},[t("div",{class:"v-responsive__sizer",style:n.value},null),(c=r.additional)==null?void 0:c.call(r),r.default&&t("div",{class:["v-responsive__content",e.contentClass]},[r.default()])])}),{}}}),Te=I({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...M(),...k(),...E(),...Q()},"VImg"),Ie=P()({name:"VImg",directives:{intersect:p},props:Te(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,o){let{emit:r,slots:n}=o;const{backgroundColorClasses:g,backgroundColorStyles:c}=ee(ae(e,"color")),{roundedClasses:m}=O(e),f=te("VImg"),b=_(""),s=ne(),l=_(e.eager?"loading":"idle"),v=_(),h=_(),u=V(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),S=V(()=>u.value.aspect||v.value/h.value||0);T(()=>e.src,()=>{C(l.value!=="idle")}),T(S,(a,i)=>{!a&&i&&s.value&&y(s.value)}),re(()=>C());function C(a){if(!(e.eager&&a)&&!(le&&!a&&!e.eager)){if(l.value="loading",u.value.lazySrc){const i=new Image;i.src=u.value.lazySrc,y(i,null)}u.value.src&&se(()=>{var i;r("loadstart",((i=s.value)==null?void 0:i.currentSrc)||u.value.src),setTimeout(()=>{var d;if(!f.isUnmounted)if((d=s.value)!=null&&d.complete){if(s.value.naturalWidth||A(),l.value==="error")return;S.value||y(s.value,null),l.value==="loading"&&w()}else S.value||y(s.value),U()})})}}function w(){var a;f.isUnmounted||(U(),y(s.value),l.value="loaded",r("load",((a=s.value)==null?void 0:a.currentSrc)||u.value.src))}function A(){var a;f.isUnmounted||(l.value="error",r("error",((a=s.value)==null?void 0:a.currentSrc)||u.value.src))}function U(){const a=s.value;a&&(b.value=a.currentSrc||a.src)}let R=-1;ie(()=>{clearTimeout(R)});function y(a){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const d=()=>{if(clearTimeout(R),f.isUnmounted)return;const{naturalHeight:F,naturalWidth:N}=a;F||N?(v.value=N,h.value=F):!a.complete&&l.value==="loading"&&i!=null?R=window.setTimeout(d,i):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,h.value=1)};d()}const j=V(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),H=()=>{var d;if(!u.value.src||l.value==="idle")return null;const a=t("img",{class:["v-img__img",j.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:w,onError:A},null),i=(d=n.sources)==null?void 0:d.call(n);return t(z,{transition:e.transition,appear:!0},{default:()=>[W(i?t("picture",{class:"v-img__picture"},[i,a]):a,[[de,l.value==="loaded"]])]})},q=()=>t(z,{transition:e.transition},{default:()=>[u.value.lazySrc&&l.value!=="loaded"&&t("img",{class:["v-img__img","v-img__img--preload",j.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),L=()=>n.placeholder?t(z,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!n.error)&&t("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,X=()=>n.error?t(z,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&t("div",{class:"v-img__error"},[n.error()])]}):null,Y=()=>e.gradient?t("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,D=_(!1);{const a=T(S,i=>{i&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{D.value=!0})}),a())})}return B(()=>{const a=x.filterProps(e);return W(t(x,ce({class:["v-img",{"v-img--booting":!D.value},g.value,m.value,e.class],style:[{width:ve(e.width==="auto"?v.value:e.width)},c.value,e.style]},a,{aspectRatio:S.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>t(oe,null,[t(H,null,null),t(q,null,null),t(Y,null,null),t(L,null,null),t(X,null,null)]),default:n.default}),[[ue("intersect"),{handler:C,options:e.options},null,{once:!0}]])}),{currentSrc:b,image:s,state:l,naturalWidth:v,naturalHeight:h}}}),Be=I({start:Boolean,end:Boolean,icon:ge,image:String,text:String,...k(),...me(),...E(),...fe(),...Se(),...ye(),..._e({variant:"flat"})},"VAvatar"),Ue=P()({name:"VAvatar",props:Be(),setup(e,o){let{slots:r}=o;const{themeClasses:n}=be(e),{colorClasses:g,colorStyles:c,variantClasses:m}=he(e),{densityClasses:f}=ze(e),{roundedClasses:b}=O(e),{sizeClasses:s,sizeStyles:l}=Ve(e);return B(()=>t(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,g.value,f.value,b.value,s.value,m.value,e.class],style:[c.value,l.value,e.style]},{default:()=>[r.default?t(ke,{key:"content-defaults",defaults:{VAvatar:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>{var v;return[(v=r.default)==null?void 0:v.call(r)]}}):e.image?t(Ie,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?t(Pe,{key:"icon",icon:e.icon},null):e.text,Ce(!1,"v-avatar")]})),{}}});export{Ue as V,Ie as a,Ae as c};