import{u as xe}from"./eCommerce-CtZZDZZH.js";import{O as R,r as m,aZ as L,aq as P,h as we,a_ as Ge,a$ as Ze,e as Z,g as pe,b0 as Me,b1 as k,b2 as S,M as j,ag as Xe,b3 as Je,b4 as Ke,b5 as et,b6 as tt,b7 as at,b8 as nt,b9 as st,ba as ot,o as x,c as I,b as a,w as o,Q as T,N as ne,a as i,E as Q,F as E,aC as F,V as U,d as A,t as B,L as De,a3 as lt}from"./index-D1vr5Jkw.js";import{_ as it}from"./ProductItem.vue_vue_type_style_index_0_lang-DZnO3xe1.js";import{V as w,a as q}from"./VRow-BCOZP6AP.js";import{V as Oe}from"./VChip-Dw9whi_v.js";import{V as We}from"./VRating-CHqKjn3U.js";import{V as Ee}from"./VDivider-YK6hVzJ9.js";import{V as rt}from"./VAvatar-BWMYVnrm.js";import{_ as ut}from"./BaseBreadcrumb-MM7Ucq-q.js";import{_ as ct}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as G,d as dt,c as mt}from"./VCard-DKlM9Kx7.js";import{V as ft,a as Le}from"./VTabs-BjBW1Ve9.js";import{V as vt,a as Re}from"./VWindowItem-DMxE_nrm.js";import"./VTooltip-DJ5Ruo9y.js";/* empty css              */import"./index-BUFK01l6.js";import"./VSlideGroup--qSWK503.js";import"./createSimpleFunctional-Dch3cn5Q.js";import"./ssrBoot-DqJR9fHu.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const h={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},ze={itemsToShow:{default:h.itemsToShow,type:Number},itemsToScroll:{default:h.itemsToScroll,type:Number},wrapAround:{default:h.wrapAround,type:Boolean},throttle:{default:h.throttle,type:Number},snapAlign:{default:h.snapAlign,validator(n){return["start","end","center","center-even","center-odd"].includes(n)}},transition:{default:h.transition,type:Number},breakpoints:{default:h.breakpoints,type:Object},autoplay:{default:h.autoplay,type:Number},pauseAutoplayOnHover:{default:h.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:h.mouseDrag,type:Boolean},touchDrag:{default:h.touchDrag,type:Boolean},dir:{default:h.dir,validator(n){return["rtl","ltr"].includes(n)}},i18n:{default:h.i18n,type:Object},settings:{default(){return{}},type:Object}};function pt({config:n,slidesCount:e}){const{snapAlign:t,wrapAround:u,itemsToShow:s=1}=n;if(u)return Math.max(e-1,0);let c;switch(t){case"start":c=e-s;break;case"end":c=e-1;break;case"center":case"center-odd":c=e-Math.ceil((s-.5)/2);break;case"center-even":c=e-Math.ceil(s/2);break;default:c=0;break}return Math.max(c,0)}function _t({config:n,slidesCount:e}){const{wrapAround:t,snapAlign:u,itemsToShow:s=1}=n;let c=0;if(t||s>e)return c;switch(u){case"start":c=0;break;case"end":c=s-1;break;case"center":case"center-odd":c=Math.floor((s-1)/2);break;case"center-even":c=Math.floor((s-2)/2);break;default:c=0;break}return c}function _e({val:n,max:e,min:t}){return e<t?n:Math.min(Math.max(n,t),e)}function gt({config:n,currentSlide:e,slidesCount:t}){const{snapAlign:u,wrapAround:s,itemsToShow:c=1}=n;let p=e;switch(u){case"center":case"center-odd":p-=(c-1)/2;break;case"center-even":p-=(c-2)/2;break;case"end":p-=c-1;break}return s?p:_e({val:p,max:t-c,min:0})}function He(n){return n?n.reduce((e,t)=>{var u;return t.type===j?[...e,...He(t.children)]:((u=t.type)===null||u===void 0?void 0:u.name)==="CarouselSlide"?[...e,t]:e},[]):[]}function ge({val:n,max:e,min:t=0}){return n>e?ge({val:n-(e+1),max:e,min:t}):n<t?ge({val:n+(e+1),max:e,min:t}):n}function ht(n,e){let t;return e?function(...u){const s=this;t||(n.apply(s,u),t=!0,setTimeout(()=>t=!1,e))}:n}function bt(n,e){let t;return function(...u){t&&clearTimeout(t),t=setTimeout(()=>{n(...u),t=null},e)}}function xt(n="",e={}){return Object.entries(e).reduce((t,[u,s])=>t.replace(`{${u}}`,String(s)),n)}var wt=R({name:"ARIA",setup(){const n=S("config",L(Object.assign({},h))),e=S("currentSlide",m(0)),t=S("slidesCount",m(0));return()=>k("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},xt(n.i18n.itemXofY,{currentSlide:e.value+1,slidesCount:t.value}))}}),Be=R({name:"Carousel",props:ze,setup(n,{slots:e,emit:t,expose:u}){var s;const c=m(null),p=m([]),d=m(0),v=m(0),l=L(Object.assign({},h));let _=Object.assign({},h),y;const f=m((s=n.modelValue)!==null&&s!==void 0?s:0),V=m(0),X=m(0),N=m(0),W=m(0);let z,se;P("config",l),P("slidesCount",v),P("currentSlide",f),P("maxSlide",N),P("minSlide",W),P("slideWidth",d);function oe(){y=Object.assign({},n.breakpoints),_=Object.assign(Object.assign(Object.assign({},_),n),{i18n:Object.assign(Object.assign({},_.i18n),n.i18n),breakpoints:void 0}),ye(_)}function J(){if(!y||!Object.keys(y).length)return;const r=Object.keys(y).map(g=>Number(g)).sort((g,$)=>+$-+g);let b=Object.assign({},_);r.some(g=>{const $=window.matchMedia(`(min-width: ${g}px)`).matches;return $&&(b=Object.assign(Object.assign({},b),y[g])),$}),ye(b)}function ye(r){Object.entries(r).forEach(([b,g])=>l[b]=g)}const Se=bt(()=>{J(),H()},16);function H(){if(!c.value)return;const r=c.value.getBoundingClientRect();d.value=r.width/l.itemsToShow}function le(){v.value<=0||(X.value=Math.ceil((v.value-1)/2),N.value=pt({config:l,slidesCount:v.value}),W.value=_t({config:l,slidesCount:v.value}),l.wrapAround||(f.value=_e({val:f.value,max:N.value,min:W.value})))}we(()=>{Ge(()=>H()),setTimeout(()=>H(),1e3),J(),Te(),window.addEventListener("resize",Se,{passive:!0}),t("init")}),Ze(()=>{se&&clearTimeout(se),z&&clearInterval(z),window.removeEventListener("resize",Se,{passive:!0})});let C=!1;const K={x:0,y:0},ee={x:0,y:0},M=L({x:0,y:0}),te=m(!1),ie=m(!1),Ye=()=>{te.value=!0},Fe=()=>{te.value=!1};function ke(r){["INPUT","TEXTAREA","SELECT"].includes(r.target.tagName)||(C=r.type==="touchstart",C||r.preventDefault(),!(!C&&r.button!==0||D.value)&&(K.x=C?r.touches[0].clientX:r.clientX,K.y=C?r.touches[0].clientY:r.clientY,document.addEventListener(C?"touchmove":"mousemove",Ce,!0),document.addEventListener(C?"touchend":"mouseup",Ve,!0)))}const Ce=ht(r=>{ie.value=!0,ee.x=C?r.touches[0].clientX:r.clientX,ee.y=C?r.touches[0].clientY:r.clientY;const b=ee.x-K.x,g=ee.y-K.y;M.y=g,M.x=b},l.throttle);function Ve(){const r=l.dir==="rtl"?-1:1,b=Math.sign(M.x)*.4,g=Math.round(M.x/d.value+b)*r;if(g&&!C){const $=de=>{de.stopPropagation(),window.removeEventListener("click",$,!0)};window.addEventListener("click",$,!0)}O(f.value-g),M.x=0,M.y=0,ie.value=!1,document.removeEventListener(C?"touchmove":"mousemove",Ce,!0),document.removeEventListener(C?"touchend":"mouseup",Ve,!0)}function Te(){!l.autoplay||l.autoplay<=0||(z=setInterval(()=>{l.pauseAutoplayOnHover&&te.value||ae()},l.autoplay))}function Ae(){z&&(clearInterval(z),z=null),Te()}const D=m(!1);function O(r){const b=l.wrapAround?r:_e({val:r,max:N.value,min:W.value});f.value===b||D.value||(t("slide-start",{slidingToIndex:r,currentSlideIndex:f.value,prevSlideIndex:V.value,slidesCount:v.value}),D.value=!0,V.value=f.value,f.value=b,se=setTimeout(()=>{if(l.wrapAround){const g=ge({val:b,max:N.value,min:0});g!==f.value&&(f.value=g,t("loop",{currentSlideIndex:f.value,slidingToIndex:r}))}t("update:modelValue",f.value),t("slide-end",{currentSlideIndex:f.value,prevSlideIndex:V.value,slidesCount:v.value}),D.value=!1,Ae()},l.transition))}function ae(){O(f.value+l.itemsToScroll)}function re(){O(f.value-l.itemsToScroll)}const $e={slideTo:O,next:ae,prev:re};P("nav",$e),P("isSliding",D);const Pe=Z(()=>gt({config:l,currentSlide:f.value,slidesCount:v.value}));P("slidesToScroll",Pe);const Qe=Z(()=>{const r=l.dir==="rtl"?-1:1,b=Pe.value*d.value*r;return{transform:`translateX(${M.x-b}px)`,transition:`${D.value?l.transition:0}ms`,margin:l.wrapAround?`0 -${v.value*d.value}px`:"",width:"100%"}});function Ie(){oe(),J(),le(),H(),Ae()}Object.keys(ze).forEach(r=>{["modelValue"].includes(r)||pe(()=>n[r],Ie)}),pe(()=>n.modelValue,r=>{r!==f.value&&O(Number(r))}),pe(v,le),t("before-init"),oe();const Ne={config:l,slidesCount:v,slideWidth:d,next:ae,prev:re,slideTo:O,currentSlide:f,maxSlide:N,minSlide:W,middleSlide:X};u({updateBreakpointsConfigs:J,updateSlidesData:le,updateSlideWidth:H,initDefaultConfigs:oe,restartCarousel:Ie,slideTo:O,next:ae,prev:re,nav:$e,data:Ne});const ue=e.default||e.slides,ce=e.addons,je=L(Ne);return()=>{const r=He(ue==null?void 0:ue(je)),b=(ce==null?void 0:ce(je))||[];r.forEach((me,fe)=>me.props.index=fe);let g=r;if(l.wrapAround){const me=r.map((ve,Y)=>Me(ve,{index:-r.length+Y,isClone:!0,key:`clone-before-${Y}`})),fe=r.map((ve,Y)=>Me(ve,{index:r.length+Y,isClone:!0,key:`clone-after-${Y}`}));g=[...me,...r,...fe]}p.value=r,v.value=Math.max(r.length,1);const $=k("ol",{class:"carousel__track",style:Qe.value,onMousedownCapture:l.mouseDrag?ke:null,onTouchstartPassiveCapture:l.touchDrag?ke:null},g),de=k("div",{class:"carousel__viewport"},$);return k("section",{ref:c,class:{carousel:!0,"is-sliding":D.value,"is-dragging":ie.value,"is-hover":te.value,"carousel--rtl":l.dir==="rtl"},dir:l.dir,"aria-label":l.i18n.ariaGallery,tabindex:"0",onMouseenter:Ye,onMouseleave:Fe},[de,b,k(wt)])}}}),he;(function(n){n.arrowUp="arrowUp",n.arrowDown="arrowDown",n.arrowRight="arrowRight",n.arrowLeft="arrowLeft"})(he||(he={}));const yt={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function St(n){return n in he}const be=n=>{const e=S("config",L(Object.assign({},h))),t=String(n.name),u=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!St(t))return;const s=yt[t],c=k("path",{d:s}),p=e.i18n[u]||n.title||t,d=k("title",p);return k("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":p},[d,c])};be.props={name:String,title:String};const Ue=(n,{slots:e,attrs:t})=>{const{next:u,prev:s}=e||{},c=S("config",L(Object.assign({},h))),p=S("maxSlide",m(1)),d=S("minSlide",m(1)),v=S("currentSlide",m(1)),l=S("nav",{}),{dir:_,wrapAround:y,i18n:f}=c,V=_==="rtl",X=k("button",{type:"button",class:["carousel__prev",!y&&v.value<=d.value&&"carousel__prev--disabled",t==null?void 0:t.class],"aria-label":f.ariaPreviousSlide,onClick:l.prev},(s==null?void 0:s())||k(be,{name:V?"arrowRight":"arrowLeft"})),N=k("button",{type:"button",class:["carousel__next",!y&&v.value>=p.value&&"carousel__next--disabled",t==null?void 0:t.class],"aria-label":f.ariaNextSlide,onClick:l.next},(u==null?void 0:u())||k(be,{name:V?"arrowLeft":"arrowRight"}));return[X,N]};var qe=R({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(n,{slots:e}){const t=S("config",L(Object.assign({},h))),u=S("currentSlide",m(0)),s=S("slidesToScroll",m(0)),c=S("isSliding",m(!1)),p=()=>n.index===u.value,d=()=>n.index===u.value-1,v=()=>n.index===u.value+1,l=()=>{const _=Math.floor(s.value),y=Math.ceil(s.value+t.itemsToShow-1);return n.index>=_&&n.index<=y};return()=>{var _;return k("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":n.isClone,"carousel__slide--visible":l(),"carousel__slide--active":p(),"carousel__slide--prev":d(),"carousel__slide--next":v(),"carousel__slide--sliding":c.value},"aria-hidden":!l()},(_=e.default)===null||_===void 0?void 0:_.call(e))}}});const kt={class:"carousel__item"},Ct=["src"],Vt=["onClick"],Tt=["src"],At={__name:"ProductCarousel",setup(n){const e=xe(),t=Xe(),s=[{image:Z(()=>e.products[t.params.id-1].image).value,id:1},{image:Je,id:2},{image:Ke,id:3},{image:et,id:4},{image:tt,id:5},{image:at,id:6},{image:nt,id:7},{image:st,id:8},{image:ot,id:9}],c=m(0);function p(d){c.value=d}return(d,v)=>(x(),I("div",null,[a(T(Be),{id:"gallery","items-to-show":1,"wrap-around":!1,modelValue:c.value,"onUpdate:modelValue":v[0]||(v[0]=l=>c.value=l)},{addons:o(()=>[a(T(Ue))]),default:o(()=>[(x(),I(j,null,ne(s,(l,_)=>a(T(qe),{key:_},{default:o(()=>[i("div",kt,[i("img",{alt:"product",src:l.image,class:"w-100 rounded-md"},null,8,Ct)])]),_:2},1024)),64))]),_:1},8,["modelValue"]),a(T(Be),{id:"thumbnails",currentSlide:c.value,transition:500,"items-to-show":6,"wrap-around":!0,modelValue:c.value,"onUpdate:modelValue":v[1]||(v[1]=l=>c.value=l),ref:"carousel"},{addons:o(()=>[a(T(Ue))]),default:o(()=>[(x(),I(j,null,ne(s,(l,_)=>a(T(qe),{key:_},{default:o(()=>[i("div",{class:"carousel__item cursor-pointer",onClick:y=>p(l.id-1)},[i("img",{alt:"product",src:l.image,class:"w-100"},null,8,Tt)],8,Vt)]),_:2},1024)),64))]),_:1},8,["currentSlide","modelValue"])]))}},$t={},Pt=i("h5",{class:"text-h5 font-weight-semibold"}," Sed at diam elit. Vivamus tortor odio, pellentesque eu tincidunt a, aliquet sit amet lorem pellentesque eu tincidunt a, aliquet sit amet lorem. ",-1),It=i("p",{class:"text-subtitle-1 mt-8 lh-md"}," Cras eget elit semper, congue sapien id, pellentesque diam. Nulla faucibus diam nec fermentum ullamcorper. Praesent sed ipsum ut augue vestibulum malesuada. Duis vitae volutpat odio. Integer sit amet elit ac justo sagittis dignissim. ",-1),Nt=i("p",{class:"text-subtitle-1 mt-8 lh-md"}," Vivamus quis metus in nunc semper efficitur eget vitae diam. Proin justo diam, venenatis sit amet eros in, iaculis auctor magna. Pellentesque sit amet accumsan urna, sit amet pretium ipsum. Fusce condimentum venenatis mauris et luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; ",-1);function jt(n,e){return x(),I(j,null,[Pt,It,Nt],64)}const Mt=ct($t,[["render",jt]]),Dt={class:"pa-7 py-9"},Ot=i("h6",{class:"text-subtitle-1 font-weight-regular"},"Average Rating",-1),Et=i("h1",{class:"text-primary text-h1 my-4"},"4/5",-1),Lt={class:"text-medium-emphasis align-center justify-center d-flex mb-3 gap-2"},Rt={class:"pa-7"},zt={class:"d-flex align-center gap-4 mb-5"},Bt=i("div",{class:"text-no-wrap text-subtitle-2"},"1 Stars",-1),Ut=i("span",{class:"text-subtitle-1"},"(125)",-1),qt={class:"d-flex align-center gap-4 my-5"},Xt=i("div",{class:"text-no-wrap text-subtitle-2"},"2 Stars",-1),Wt=i("span",{class:"text-subtitle-1"},"(125)",-1),Ht={class:"d-flex align-center gap-4 my-5"},Yt=i("div",{class:"text-no-wrap text-subtitle-2"},"3 Stars",-1),Ft=i("span",{class:"text-subtitle-1"},"(160)",-1),Qt={class:"d-flex align-center gap-4 my-5"},Gt=i("div",{class:"text-no-wrap text-subtitle-2"},"4 Stars",-1),Zt=i("span",{class:"text-subtitle-1"},"(105)",-1),Jt={class:"d-flex align-center gap-4 mt-5"},Kt=i("div",{class:"text-no-wrap text-subtitle-2"},"5 Stars",-1),ea=i("span",{class:"text-subtitle-1"},"(325)",-1),ta={class:"pa-7 py-9"},aa=R({__name:"ProductReview",setup(n){const e=m(4);return(t,u)=>{const s=Q("PencilIcon");return x(),E(q,null,{default:o(()=>[a(w,{lg:"4",class:"align-streach"},{default:o(()=>[a(G,{variant:"outlined",elevation:"0",class:"text-center h-100 d-flex align-center justify-center"},{default:o(()=>[i("div",Dt,[Ot,Et,i("div",Lt,[a(We,{color:"warning","half-increments":"",modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=c=>e.value=c),density:"compact"},null,8,["modelValue"])])])]),_:1})]),_:1}),a(w,{lg:"4",class:"align-streach justify-center"},{default:o(()=>[a(G,{variant:"outlined",elevation:"0",class:"text-center justify-center h-100"},{default:o(()=>[i("div",Rt,[i("div",zt,[Bt,a(F,{"model-value":"15",color:"primary",rounded:"md"}),Ut]),i("div",qt,[Xt,a(F,{"model-value":"15",color:"primary",rounded:"md"}),Wt]),i("div",Ht,[Yt,a(F,{"model-value":"35",color:"primary",rounded:"md"}),Ft]),i("div",Qt,[Gt,a(F,{"model-value":"12",color:"primary",rounded:"md"}),Zt]),i("div",Jt,[Kt,a(F,{"model-value":"55",color:"primary",rounded:"md"}),ea])])]),_:1})]),_:1}),a(w,{lg:"4",class:"align-streach"},{default:o(()=>[a(G,{variant:"outlined",elevation:"0",class:"d-flex align-center justify-center h-100"},{default:o(()=>[i("div",ta,[a(U,{variant:"outlined",size:"large",color:"primary"},{default:o(()=>[a(s,{size:"20",class:"mr-1"}),A(" Write a Review")]),_:1})])]),_:1})]),_:1})]),_:1})}}}),na={class:"mt-5"},sa=R({__name:"ProductTab",setup(n){const e=m(null);return(t,u)=>(x(),E(G,{elevation:"10"},{default:o(()=>[a(dt,null,{default:o(()=>[a(ft,{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=s=>e.value=s),color:"primary",class:"border-bottom"},{default:o(()=>[a(Le,{value:"one"},{default:o(()=>[A("Description")]),_:1}),a(Le,{value:"two"},{default:o(()=>[A("Review")]),_:1})]),_:1},8,["modelValue"]),i("div",na,[a(vt,{modelValue:e.value,"onUpdate:modelValue":u[1]||(u[1]=s=>e.value=s)},{default:o(()=>[a(Re,{value:"one"},{default:o(()=>[a(Mt)]),_:1}),a(Re,{value:"two"},{default:o(()=>[a(aa)]),_:1})]),_:1},8,["modelValue"])])]),_:1})]),_:1}))}}),oa=i("h4",{class:"text-h4 mt-8 mb-4"},"Related Products",-1),la=R({__name:"RelatedProducts",setup(n){const e=xe();we(()=>{e.fetchProducts()});const t=Z(()=>e.products);m({itemsToShow:1,snapAlign:"center"}),m({700:{itemsToShow:3,snapAlign:"center"},1024:{itemsToShow:4,snapAlign:"center"},2e3:{itemsToShow:5,snapAlign:"start"}});function u(s){e.AddToCart(s)}return(s,c)=>(x(),I(j,null,[oa,a(q,null,{default:o(()=>{var p;return[(x(!0),I(j,null,ne((p=t.value)==null?void 0:p.slice(0,4),d=>(x(),E(w,{key:d.id,cols:"12",sm:"6",lg:"3"},{default:o(()=>[a(it,{name:d.name,image:d.image,desc:d.description,salePrice:d.salePrice,offerPrice:d.offerPrice,rating:d.rating,goto:1,onHandlecart:v=>u(d)},null,8,["name","image","desc","salePrice","offerPrice","rating","onHandlecart"])]),_:2},1024))),128))]}),_:1})],64))}}),ia={key:0},ra={class:"d-flex align-center gap-2"},ua={class:"text-subtitle-2"},ca={class:"text-h3 my-2 mb-3"},da={class:"v-col-lg-10 px-0"},ma={class:"d-flex align-center gap-2"},fa={class:"text-decoration-line-through text-h6"},va={class:"text-h4"},pa={class:"text-medium-emphasis align-center d-flex mt-3 gap-2"},_a=i("span",null,"(236 reviews)",-1),ga=i("h6",{class:"text-h6"},[A("Colors"),i("span",{class:"text-error"},"*")],-1),ha=i("h6",{class:"text-h6"},"Quantity",-1),ba={class:"mt-8"},xa=i("h6",{class:"text-subtitle-1"},"Dispatched in 2-3 weeks",-1),wa={__name:"ProductDetail",setup(n){const e=xe(),t=Xe();m(["10","09","08","07"]),m(["10"]);const u=m(1);we(()=>{e.fetchProducts()});const s=Z(()=>e.products[t.params.id-1]);function c(p){u.value=p}return(p,d)=>{const v=Q("CheckIcon"),l=Q("MinusIcon"),_=Q("PlusIcon"),y=Q("router-link");return s.value?(x(),I("div",ia,[a(q,null,{default:o(()=>[a(w,{lg:"6",sm:"12"},{default:o(()=>[a(At)]),_:1}),a(w,{lg:"6",sm:"12",class:"pl-lg-5"},{default:o(()=>[i("div",null,[i("div",ra,[s.value.isStock?(x(),E(Oe,{key:0,color:"success",variant:"elevated",size:"small",elevation:"0"},{default:o(()=>[A(" In Stock ")]),_:1})):(x(),E(Oe,{key:1,color:"error"},{default:o(()=>[A(" Out of Stock ")]),_:1})),i("span",ua,B(s.value.gender),1)]),i("h3",ca,B(s.value.name),1)]),i("p",da,B(s.value.description),1),i("div",ma,[i("p",fa,"$"+B(s.value.offerPrice),1),i("h4",va,"$"+B(s.value.salePrice),1)]),i("div",pa,[a(We,{color:"warning","half-increments":"",modelValue:s.value.rating,"onUpdate:modelValue":d[0]||(d[0]=f=>s.value.rating=f),size:"small",density:"compact"},null,8,["modelValue"]),_a]),a(Ee,{class:"my-5"}),a(q,null,{default:o(()=>[a(w,{cols:"6",sm:"2",class:"d-flex align-center"},{default:o(()=>[ga]),_:1}),a(w,{cols:"6",sm:"10"},{default:o(()=>[(x(!0),I(j,null,ne(s.value.colors,(f,V)=>(x(),E(rt,{key:V,onClick:X=>c(V),variant:"flat",color:f,size:"x-small",class:"mr-1 cursor-pointer"},{default:o(()=>[u.value==V?(x(),E(v,{key:0,size:"13"})):De("",!0)]),_:2},1032,["onClick","color"]))),128))]),_:1}),a(w,{cols:"6",sm:"2",class:"d-flex align-center"},{default:o(()=>[ha]),_:1}),a(w,{cols:"6",sm:"10"},{default:o(()=>[a(lt,{divided:"",variant:"outlined"},{default:o(()=>[a(U,{size:"x-small",color:"secondary",onClick:d[1]||(d[1]=f=>T(e).decrementQty(s.value.id))},{default:o(()=>[a(l,{size:"18"})]),_:1}),a(U,{size:"x-small",color:"secondary"},{default:o(()=>[A(B(s.value.qty),1)]),_:1}),a(U,{size:"x-small",color:"secondary",onClick:d[2]||(d[2]=f=>T(e).incrementQty(s.value.id))},{default:o(()=>[a(_,{size:"18"})]),_:1})]),_:1})]),_:1})]),_:1}),a(Ee,{class:"my-5"}),a(q,{class:"mt-6"},{default:o(()=>[a(w,{cols:"12",sm:"4"},{default:o(()=>[a(U,{block:"",size:"large",color:"primary",to:"/ecommerce/checkout",onClick:d[3]||(d[3]=f=>T(e).AddToCart(s.value))},{default:o(()=>[A("Buy Now")]),_:1})]),_:1}),a(w,{cols:"12",sm:"4"},{default:o(()=>[a(U,{block:"",size:"large",color:"secondary",onClick:d[4]||(d[4]=f=>T(e).AddToCart(s.value))},{default:o(()=>[A("Add To Cart")]),_:1})]),_:1})]),_:1}),i("div",ba,[xa,a(y,{to:"/",class:"text-subtitle-1 text-decoration-none"},{default:o(()=>[A("Why the longer time for delivery?")]),_:1})])]),_:1})]),_:1})])):De("",!0)}}},Ba=R({__name:"ProductDetails",setup(n){const e=m({title:"Products"}),t=m([{text:"Ecommerce",disabled:!1,href:"#"},{text:"product Page",disabled:!0,href:"#"}]);return(u,s)=>(x(),I(j,null,[a(ut,{title:e.value.title,breadcrumbs:t.value},null,8,["title","breadcrumbs"]),a(q,null,{default:o(()=>[a(w,{cols:"12"},{default:o(()=>[a(G,{elevation:"10"},{default:o(()=>[a(mt,null,{default:o(()=>[a(wa)]),_:1})]),_:1})]),_:1}),a(w,{cols:"12"},{default:o(()=>[a(sa)]),_:1}),a(w,{cols:"12"},{default:o(()=>[a(la)]),_:1})]),_:1})],64))}});export{Ba as default};