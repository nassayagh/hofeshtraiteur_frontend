import{p as h,v as y,j as C,m as B,b as t,bM as N,y as _,bN as A,e as k,aB as R,bb as F,bc as D,J as E,M as j,l as m,bz as T,P as z,U as H,ac as w,aE as L,X as M,n as U,z as J,A as X,E as $,o as q,c as G,a as g,t as P,a2 as K,w as V,d as O}from"./index-1gY6uGV-.js";const Q=h({divider:[Number,String],...y()},"VBreadcrumbsDivider"),W=C()({name:"VBreadcrumbsDivider",props:Q(),setup(e,l){let{slots:a}=l;return B(()=>{var s;return t("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((s=a==null?void 0:a.default)==null?void 0:s.call(a))??e.divider])}),{}}}),Y=h({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...y(),...N(),..._({tag:"li"})},"VBreadcrumbsItem"),Z=C()({name:"VBreadcrumbsItem",props:Y(),setup(e,l){let{slots:a,attrs:s}=l;const d=A(e,s),i=k(()=>{var n;return e.active||((n=d.isActive)==null?void 0:n.value)}),c=k(()=>i.value?e.activeColor:e.color),{textColorClasses:u,textColorStyles:r}=R(c);return B(()=>t(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":i.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:i.value&&e.activeClass},u.value,e.class],style:[r.value,e.style],"aria-current":i.value?"page":void 0},{default:()=>{var n,f;return[d.isLink.value?t("a",{class:"v-breadcrumbs-item--link",href:d.href.value,"aria-current":i.value?"page":void 0,onClick:d.navigate},[((f=a.default)==null?void 0:f.call(a))??e.title]):((n=a.default)==null?void 0:n.call(a))??e.title]}})),{}}}),p=h({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:F,items:{type:Array,default:()=>[]},...y(),...D(),...E(),..._({tag:"ul"})},"VBreadcrumbs"),ee=C()({name:"VBreadcrumbs",props:p(),setup(e,l){let{slots:a}=l;const{backgroundColorClasses:s,backgroundColorStyles:d}=j(m(e,"bgColor")),{densityClasses:i}=T(e),{roundedClasses:c}=z(e);H({VBreadcrumbsDivider:{divider:m(e,"divider")},VBreadcrumbsItem:{activeClass:m(e,"activeClass"),activeColor:m(e,"activeColor"),color:m(e,"color"),disabled:m(e,"disabled")}});const u=k(()=>e.items.map(r=>typeof r=="string"?{item:{title:r},raw:r}:{item:r,raw:r}));return B(()=>{const r=!!(a.prepend||e.icon);return t(e.tag,{class:["v-breadcrumbs",s.value,i.value,c.value,e.class],style:[d.value,e.style]},{default:()=>{var n;return[r&&t("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?t(L,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):t(w,{key:"prepend-icon",start:!0,icon:e.icon},null)]),u.value.map((f,o,S)=>{var x;let{item:v,raw:I}=f;return t(M,null,[((x=a.item)==null?void 0:x.call(a,{item:v,index:o}))??t(Z,U({key:o,disabled:o>=S.length-1},typeof v=="string"?{title:v}:v),{default:a.title?()=>{var b;return(b=a.title)==null?void 0:b.call(a,{item:v,index:o})}:void 0}),o<S.length-1&&t(W,null,{default:a.divider?()=>{var b;return(b=a.divider)==null?void 0:b.call(a,{item:I,index:o})}:void 0})])}),(n=a.default)==null?void 0:n.call(a)]}})}),{}}}),ae=h({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...y(),...D(),..._(),...J()},"VTable"),ne=C()({name:"VTable",props:ae(),setup(e,l){let{slots:a,emit:s}=l;const{themeClasses:d}=X(e),{densityClasses:i}=T(e);return B(()=>t(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!a.top,"v-table--has-bottom":!!a.bottom,"v-table--hover":e.hover},d.value,i.value,e.class],style:e.style},{default:()=>{var c,u,r;return[(c=a.top)==null?void 0:c.call(a),a.default?t("div",{class:"v-table__wrapper",style:{height:$(e.height)}},[t("table",null,[a.default()])]):(u=a.wrapper)==null?void 0:u.call(a),(r=a.bottom)==null?void 0:r.call(a)]}})),{}}}),te={class:"mt-3 mb-6"},re={class:"d-flex justify-space-between"},se={class:"d-flex py-0 align-center"},ie={class:"text-h3 mb-2"},le={class:"text-h6 font-weight-regular"},ce={__name:"BaseBreadcrumb",props:{title:String,breadcrumbs:Array,icon:String,text:String},setup(e){return(l,a)=>(q(),G("div",te,[g("div",re,[g("div",se,[g("div",null,[g("h3",ie,P(e.title),1),t(ee,{items:e.breadcrumbs,class:"pa-0 ml-n1"},K({title:V(({item:s})=>[g("h6",le,P(s.text),1)]),_:2},[e.breadcrumbs?{name:"divider",fn:V(()=>[t(w,null,{default:V(()=>[O("mdi-chevron-right")]),_:1})]),key:"0"}:void 0]),1032,["items"])])])])]))}};export{ne as V,ce as _,ae as m};