import{s as B,e as g,aH as ee,h as Z,g as H,i as U,bo as te,p as ae,bp as ne,v as oe,bq as le,aL as ue,aJ as ie,y as re,z as se,j as ce,aG as ve,A as de,br as me,aN as z,l as $,aP as fe,aW as he,aO as ge,bs as ye,u as we,bt as be,r as Se,bu as ke,k as Y,bv as Me,ar as Ee,m as Te,b as E,n as A,bw as pe,M as xe,a_ as Be}from"./index-D1vr5Jkw.js";import{m as Ce,u as Pe}from"./layout-CMBB49mC.js";import{u as Ve}from"./ssrBoot-DqJR9fHu.js";function He(e){let{rootEl:s,isSticky:c,layoutItemStyles:i}=e;const a=B(!1),t=B(0),f=g(()=>{const h=typeof a.value=="boolean"?"top":a.value;return[c.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[h]:ee(t.value)}:{top:i.value.top}]});Z(()=>{H(c,h=>{h?window.addEventListener("scroll",S,{passive:!0}):window.removeEventListener("scroll",S)},{immediate:!0})}),U(()=>{window.removeEventListener("scroll",S)});let b=0;function S(){const h=b>window.scrollY?"up":"down",l=s.value.getBoundingClientRect(),v=parseFloat(i.value.top??0),r=window.scrollY-Math.max(0,t.value-v),m=l.height+Math.max(t.value,v)-window.scrollY-window.innerHeight,k=parseFloat(getComputedStyle(s.value).getPropertyValue("--v-body-scroll-y"))||0;l.height<window.innerHeight-v?(a.value="top",t.value=v):h==="up"&&a.value==="bottom"||h==="down"&&a.value==="top"?(t.value=window.scrollY+l.top-k,a.value=!0):h==="down"&&m<=0?(t.value=0,a.value="bottom"):h==="up"&&r<=0&&(k?a.value!=="top"&&(t.value=-r+k+v,a.value="top"):(t.value=l.top+r,a.value="top")),b=window.scrollY}return{isStuck:a,stickyStyles:f}}const Re=100,Ye=20;function q(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function F(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let c=e.length-1;c>0;c--){if(e[c].t===e[c-1].t)continue;const i=q(s),a=(e[c].d-e[c-1].d)/(e[c].t-e[c-1].t);s+=(a-i)*Math.abs(a),c===e.length-1&&(s*=.5)}return q(s)*1e3}function Le(){const e={};function s(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new te(Ye))).push([a.timeStamp,t])})}function c(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function i(a){var h;const t=(h=e[a])==null?void 0:h.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const f=t[0],b=[],S=[];for(const l of t){if(f[0]-l[0]>Re)break;b.push({t:l[0],d:l[1].clientX}),S.push({t:l[0],d:l[1].clientY})}return{x:F(b),y:F(S),get direction(){const{x:l,y:v}=this,[r,m]=[Math.abs(l),Math.abs(v)];return r>m&&l>=0?"right":r>m&&l<=0?"left":m>r&&v>=0?"down":m>r&&v<=0?"up":Ne()}}}return{addMovement:s,endTouch:c,getVelocity:i}}function Ne(){throw new Error}function Ie(e){let{isActive:s,isTemporary:c,width:i,touchless:a,position:t}=e;Z(()=>{window.addEventListener("touchstart",C,{passive:!0}),window.addEventListener("touchmove",P,{passive:!1}),window.addEventListener("touchend",T,{passive:!0})}),U(()=>{window.removeEventListener("touchstart",C),window.removeEventListener("touchmove",P),window.removeEventListener("touchend",T)});const f=g(()=>["left","right"].includes(t.value)),{addMovement:b,endTouch:S,getVelocity:h}=Le();let l=!1;const v=B(!1),r=B(0),m=B(0);let k;function y(o,n){return(t.value==="left"?o:t.value==="right"?document.documentElement.clientWidth-o:t.value==="top"?o:t.value==="bottom"?document.documentElement.clientHeight-o:x())-(n?i.value:0)}function R(o){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const u=t.value==="left"?(o-m.value)/i.value:t.value==="right"?(document.documentElement.clientWidth-o-m.value)/i.value:t.value==="top"?(o-m.value)/i.value:t.value==="bottom"?(document.documentElement.clientHeight-o-m.value)/i.value:x();return n?Math.max(0,Math.min(1,u)):u}function C(o){if(a.value)return;const n=o.changedTouches[0].clientX,u=o.changedTouches[0].clientY,d=25,M=t.value==="left"?n<d:t.value==="right"?n>document.documentElement.clientWidth-d:t.value==="top"?u<d:t.value==="bottom"?u>document.documentElement.clientHeight-d:x(),p=s.value&&(t.value==="left"?n<i.value:t.value==="right"?n>document.documentElement.clientWidth-i.value:t.value==="top"?u<i.value:t.value==="bottom"?u>document.documentElement.clientHeight-i.value:x());(M||p||s.value&&c.value)&&(l=!0,k=[n,u],m.value=y(f.value?n:u,s.value),r.value=R(f.value?n:u),S(o),b(o))}function P(o){const n=o.changedTouches[0].clientX,u=o.changedTouches[0].clientY;if(l){if(!o.cancelable){l=!1;return}const M=Math.abs(n-k[0]),p=Math.abs(u-k[1]);(f.value?M>p&&M>3:p>M&&p>3)?(v.value=!0,l=!1):(f.value?p:M)>3&&(l=!1)}if(!v.value)return;o.preventDefault(),b(o);const d=R(f.value?n:u,!1);r.value=Math.max(0,Math.min(1,d)),d>1?m.value=y(f.value?n:u,!0):d<0&&(m.value=y(f.value?n:u,!1))}function T(o){if(l=!1,!v.value)return;b(o),v.value=!1;const n=h(o.changedTouches[0].identifier),u=Math.abs(n.x),d=Math.abs(n.y);(f.value?u>d&&u>400:d>u&&d>3)?s.value=n.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||x()):s.value=r.value>.5}const V=g(()=>v.value?{transform:t.value==="left"?`translateX(calc(-100% + ${r.value*i.value}px))`:t.value==="right"?`translateX(calc(100% - ${r.value*i.value}px))`:t.value==="top"?`translateY(calc(-100% + ${r.value*i.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${r.value*i.value}px))`:x(),transition:"none"}:void 0);return{isDragging:v,dragProgress:r,dragStyles:V}}function x(){throw new Error}const We=["start","end","left","right","top","bottom"],De=ae({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>We.includes(e)},sticky:Boolean,...ne(),...oe(),...le(),...ue(),...Ce(),...ie(),...re({tag:"nav"}),...se()},"VNavigationDrawer"),ze=ce()({name:"VNavigationDrawer",props:De(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:c,emit:i,slots:a}=s;const{isRtl:t}=ve(),{themeClasses:f}=de(e),{borderClasses:b}=me(e),{backgroundColorClasses:S,backgroundColorStyles:h}=z($(e,"color")),{elevationClasses:l}=fe(e),{displayClasses:v,mobile:r}=he(e),{roundedClasses:m}=ge(e),k=ye(),y=we(e,"modelValue",null,w=>!!w),{ssrBootStyles:R}=Ve(),{scopeId:C}=be(),P=Se(),T=B(!1),V=g(()=>e.rail&&e.expandOnHover&&T.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),o=g(()=>ke(e.location,t.value)),n=g(()=>!e.permanent&&(r.value||e.temporary)),u=g(()=>e.sticky&&!n.value&&o.value!=="bottom");Y(()=>e.expandOnHover&&e.rail!=null,()=>{H(T,w=>i("update:rail",!w))}),Y(()=>!e.disableResizeWatcher,()=>{H(n,w=>!e.permanent&&Be(()=>y.value=!w))}),Y(()=>!e.disableRouteWatcher&&!!k,()=>{H(k.currentRoute,()=>n.value&&(y.value=!1))}),H(()=>e.permanent,w=>{w&&(y.value=!0)}),Me(()=>{e.modelValue!=null||n.value||(y.value=e.permanent||!r.value)});const{isDragging:d,dragProgress:M,dragStyles:p}=Ie({isActive:y,isTemporary:n,width:V,touchless:$(e,"touchless"),position:o}),L=g(()=>{const w=n.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):V.value;return d.value?w*M.value:w}),{layoutItemStyles:N,layoutItemScrimStyles:j}=Pe({id:e.name,order:g(()=>parseInt(e.order,10)),position:o,layoutSize:L,elementSize:V,active:g(()=>y.value||d.value),disableTransitions:g(()=>d.value),absolute:g(()=>e.absolute||u.value&&typeof I.value!="string")}),{isStuck:I,stickyStyles:G}=He({rootEl:P,isSticky:u,layoutItemStyles:N}),W=z(g(()=>typeof e.scrim=="string"?e.scrim:null)),J=g(()=>({...d.value?{opacity:M.value*.2,transition:"none"}:void 0,...j.value}));Ee({VList:{bgColor:"transparent"}});function K(){T.value=!0}function Q(){T.value=!1}return Te(()=>{const w=a.image||e.image;return E(xe,null,[E(e.tag,A({ref:P,onMouseenter:K,onMouseleave:Q,class:["v-navigation-drawer",`v-navigation-drawer--${o.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":T.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":n.value,"v-navigation-drawer--active":y.value,"v-navigation-drawer--sticky":u.value},f.value,S.value,b.value,v.value,l.value,m.value,e.class],style:[h.value,N.value,p.value,R.value,G.value,e.style]},C,c),{default:()=>{var D,_,O,X;return[w&&E("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(D=a.image)==null?void 0:D.call(a,{image:e.image}):E("img",{src:e.image,alt:""},null)]),a.prepend&&E("div",{class:"v-navigation-drawer__prepend"},[(_=a.prepend)==null?void 0:_.call(a)]),E("div",{class:"v-navigation-drawer__content"},[(O=a.default)==null?void 0:O.call(a)]),a.append&&E("div",{class:"v-navigation-drawer__append"},[(X=a.append)==null?void 0:X.call(a)])]}}),E(pe,{name:"fade-transition"},{default:()=>[n.value&&(d.value||y.value)&&!!e.scrim&&E("div",A({class:["v-navigation-drawer__scrim",W.backgroundColorClasses.value],style:[J.value,W.backgroundColorStyles.value],onClick:()=>y.value=!1},C),null)]})])}),{isStuck:I}}});export{ze as V};