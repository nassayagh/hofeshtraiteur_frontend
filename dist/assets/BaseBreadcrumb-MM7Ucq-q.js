import{p as k,v as B,j as V,m as h,b as t,bM as w,y as D,bP as R,e as y,bT as N,aI as A,aE as T,aJ as F,aN as j,l as u,aF as E,aO as J,ar as L,R as I,aQ as M,M as O,n as Q,o as $,c as q,a as v,t as P,J as z,w as C,d as G}from"./index-D1vr5Jkw.js";const H=k({divider:[Number,String],...B()},"VBreadcrumbsDivider"),K=V()({name:"VBreadcrumbsDivider",props:H(),setup(e,n){let{slots:a}=n;return h(()=>{var s;return t("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((s=a==null?void 0:a.default)==null?void 0:s.call(a))??e.divider])}),{}}}),U=k({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...B(),...w(),...D({tag:"li"})},"VBreadcrumbsItem"),W=V()({name:"VBreadcrumbsItem",props:U(),setup(e,n){let{slots:a,attrs:s}=n;const d=R(e,s),l=y(()=>{var i;return e.active||((i=d.isActive)==null?void 0:i.value)}),g=y(()=>l.value?e.activeColor:e.color),{textColorClasses:f,textColorStyles:r}=N(g);return h(()=>t(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":l.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:l.value&&e.activeClass},f.value,e.class],style:[r.value,e.style],"aria-current":l.value?"page":void 0},{default:()=>{var i,b;return[d.isLink.value?t("a",{class:"v-breadcrumbs-item--link",href:d.href.value,"aria-current":l.value?"page":void 0,onClick:d.navigate},[((b=a.default)==null?void 0:b.call(a))??e.title]):((i=a.default)==null?void 0:i.call(a))??e.title]}})),{}}}),X=k({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:A,items:{type:Array,default:()=>[]},...B(),...T(),...F(),...D({tag:"ul"})},"VBreadcrumbs"),Y=V()({name:"VBreadcrumbs",props:X(),setup(e,n){let{slots:a}=n;const{backgroundColorClasses:s,backgroundColorStyles:d}=j(u(e,"bgColor")),{densityClasses:l}=E(e),{roundedClasses:g}=J(e);L({VBreadcrumbsDivider:{divider:u(e,"divider")},VBreadcrumbsItem:{activeClass:u(e,"activeClass"),activeColor:u(e,"activeColor"),color:u(e,"color"),disabled:u(e,"disabled")}});const f=y(()=>e.items.map(r=>typeof r=="string"?{item:{title:r},raw:r}:{item:r,raw:r}));return h(()=>{const r=!!(a.prepend||e.icon);return t(e.tag,{class:["v-breadcrumbs",s.value,l.value,g.value,e.class],style:[d.value,e.style]},{default:()=>{var i;return[r&&t("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?t(M,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):t(I,{key:"prepend-icon",start:!0,icon:e.icon},null)]),f.value.map((b,c,S)=>{var _;let{item:o,raw:x}=b;return t(O,null,[((_=a.item)==null?void 0:_.call(a,{item:o,index:c}))??t(W,Q({key:c,disabled:c>=S.length-1},typeof o=="string"?{title:o}:o),{default:a.title?()=>{var m;return(m=a.title)==null?void 0:m.call(a,{item:o,index:c})}:void 0}),c<S.length-1&&t(K,null,{default:a.divider?()=>{var m;return(m=a.divider)==null?void 0:m.call(a,{item:x,index:c})}:void 0})])}),(i=a.default)==null?void 0:i.call(a)]}})}),{}}}),Z={class:"mt-3 mb-6"},p={class:"d-flex justify-space-between"},ee={class:"d-flex py-0 align-center"},ae={class:"text-h3 mb-2"},te={class:"text-h6 font-weight-regular"},se={__name:"BaseBreadcrumb",props:{title:String,breadcrumbs:Array,icon:String,text:String},setup(e){return(n,a)=>($(),q("div",Z,[v("div",p,[v("div",ee,[v("div",null,[v("h3",ae,P(e.title),1),t(Y,{items:e.breadcrumbs,class:"pa-0 ml-n1"},z({title:C(({item:s})=>[v("h6",te,P(s.text),1)]),_:2},[e.breadcrumbs?{name:"divider",fn:C(()=>[t(I,null,{default:C(()=>[G("mdi-chevron-right")]),_:1})]),key:"0"}:void 0]),1032,["items"])])])])]))}};export{se as _};