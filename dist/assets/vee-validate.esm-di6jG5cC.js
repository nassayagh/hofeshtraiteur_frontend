import{c as Ge}from"./createSimpleFunctional-D9qly2pF.js";import{p as Ye,b4 as qe,v as Ke,b5 as We,aS as Ze,I as He,aT as Je,aU as Xe,J as Qe,y as et,z as tt,b7 as rt,j as nt,u as it,e as C,A as at,bG as ot,bx as lt,aV as st,N as ut,aW as ct,aX as ft,P as dt,bn as vt,l as oe,aR as mt,b as F,bI as yt,ac as gt,aL as Se,V as bt,n as ht,a6 as Ot,$ as Vt,bY as At,r as D,bU as Pe,a8 as y,Y as ae,bZ as ve,g as le,h as St,aZ as Et,q as jt,b_ as wt,b$ as Ft,a_ as _t}from"./index-WpZFQxJ4.js";const Pt=Ge("v-alert-title"),It=["success","info","warning","error"],kt=Ye({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:qe,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>It.includes(e)},...Ke(),...We(),...Ze(),...He(),...Je(),...Xe(),...Qe(),...et(),...tt(),...rt({variant:"flat"})},"VAlert"),lr=nt()({name:"VAlert",props:kt(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,r){let{emit:t,slots:i}=r;const n=it(e,"modelValue"),o=C(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),s=C(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:m}=at(e),{colorClasses:c,colorStyles:v,variantClasses:g}=ot(s),{densityClasses:A}=lt(e),{dimensionStyles:b}=st(e),{elevationClasses:P}=ut(e),{locationStyles:w}=ct(e),{positionClasses:$}=ft(e),{roundedClasses:x}=dt(e),{textColorClasses:R,textColorStyles:N}=vt(oe(e,"borderColor")),{t:z}=mt(),I=C(()=>({"aria-label":z(e.closeLabel),onClick(B){n.value=!1,t("click:close",B)}}));return()=>{const B=!!(i.prepend||o.value),U=!!(i.title||e.title),T=!!(i.close||e.closable);return n.value&&F(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},m.value,c.value,A.value,P.value,$.value,x.value,g.value,e.class],style:[v.value,b.value,w.value,e.style],role:"alert"},{default:()=>{var G,Y;return[yt(!1,"v-alert"),e.border&&F("div",{key:"border",class:["v-alert__border",R.value],style:N.value},null),B&&F("div",{key:"prepend",class:"v-alert__prepend"},[i.prepend?F(Se,{key:"prepend-defaults",disabled:!o.value,defaults:{VIcon:{density:e.density,icon:o.value,size:e.prominent?44:28}}},i.prepend):F(gt,{key:"prepend-icon",density:e.density,icon:o.value,size:e.prominent?44:28},null)]),F("div",{class:"v-alert__content"},[U&&F(Pt,{key:"title"},{default:()=>{var S;return[((S=i.title)==null?void 0:S.call(i))??e.title]}}),((G=i.text)==null?void 0:G.call(i))??e.text,(Y=i.default)==null?void 0:Y.call(i)]),i.append&&F("div",{key:"append",class:"v-alert__append"},[i.append()]),T&&F("div",{key:"close",class:"v-alert__close"},[i.close?F(Se,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var S;return[(S=i.close)==null?void 0:S.call(i,{props:I.value})]}}):F(bt,ht({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},I.value),null)])]}})}}});/**
  * vee-validate v4.6.7
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */function se(e){return typeof e=="function"}function Ie(e){return e==null}const H=e=>e!==null&&!!e&&typeof e=="object"&&!Array.isArray(e);function ke(e){return Number(e)>=0}const Ct={};function Rt(e){return Ct[e]}const Ce=Symbol("vee-validate-form");function Bt(e){return se(e)&&!!e.__locatorRef}function Re(e){return!!e&&se(e.validate)}function Tt(e){return H(e)||Array.isArray(e)}function Be(e){return Array.isArray(e)?e.length===0:H(e)&&Object.keys(e).length===0}function ue(e){return/^\[.+\]$/i.test(e)}function Te(e){return pe(e)&&e.target&&"submit"in e.target}function pe(e){return e?!!(typeof Event<"u"&&se(Event)&&e instanceof Event||e&&e.srcElement):!1}var Ee=function e(r,t){if(r===t)return!0;if(r&&t&&typeof r=="object"&&typeof t=="object"){if(r.constructor!==t.constructor)return!1;var i,n,o;if(Array.isArray(r)){if(i=r.length,i!=t.length)return!1;for(n=i;n--!==0;)if(!e(r[n],t[n]))return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if(o=Object.keys(r),i=o.length,i!==Object.keys(t).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;for(n=i;n--!==0;){var s=o[n];if(!e(r[s],t[s]))return!1}return!0}return r!==r&&t!==t};function me(e){return ue(e)?e.replace(/\[|\]/gi,""):e}function _(e,r,t){return e?ue(r)?e[me(r)]:(r||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((n,o)=>Tt(n)&&o in n?n[o]:t,e):t}function L(e,r,t){if(ue(r)){e[me(r)]=t;return}const i=r.split(/\.|\[(\d+)\]/).filter(Boolean);let n=e;for(let o=0;o<i.length;o++){if(o===i.length-1){n[i[o]]=t;return}(!(i[o]in n)||Ie(n[i[o]]))&&(n[i[o]]=ke(i[o+1])?[]:{}),n=n[i[o]]}}function fe(e,r){if(Array.isArray(e)&&ke(r)){e.splice(Number(r),1);return}H(e)&&delete e[r]}function de(e,r){if(ue(r)){delete e[me(r)];return}const t=r.split(/\.|\[(\d+)\]/).filter(Boolean);let i=e;for(let o=0;o<t.length;o++){if(o===t.length-1){fe(i,t[o]);break}if(!(t[o]in i)||Ie(i[t[o]]))break;i=i[t[o]]}const n=t.map((o,s)=>_(e,t.slice(0,s).join(".")));for(let o=n.length-1;o>=0;o--)if(Be(n[o])){if(o===0){fe(e,t[0]);continue}fe(n[o-1],t[o-1])}}function j(e){return Object.keys(e)}function pt(e,r=void 0){const t=Ft();return(t==null?void 0:t.provides[e])||_t(e,r)}function je(e,r,t){if(Array.isArray(e)){const i=[...e],n=i.findIndex(o=>Ee(o,r));return n>=0?i.splice(n,1):i.push(r),i}return Ee(e,r)?t:r}function we(e,r=0){let t=null,i=[];return function(...n){return t&&window.clearTimeout(t),t=window.setTimeout(()=>{const o=e(...n);i.forEach(s=>s(o)),i=[]},r),new Promise(o=>i.push(o))}}function Mt(e,r){let t;return async function(...n){const o=e(...n);t=o;const s=await o;return o!==t||(t=void 0,r(s,n)),s}}const Dt=(e,r,t)=>r.slots.default?typeof e=="string"||!e?r.slots.default(t()):{default:()=>{var i,n;return(n=(i=r.slots).default)===null||n===void 0?void 0:n.call(i,t())}}:r.slots.default;function Nt(e){const r={};return Object.defineProperty(r,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?H(e)&&e._$$isNormalized?e:H(e)?Object.keys(e).reduce((t,i)=>{const n=zt(e[i]);return e[i]!==!1&&(t[i]=Fe(n)),t},r):typeof e!="string"?r:e.split("|").reduce((t,i)=>{const n=Lt(i);return n.name&&(t[n.name]=Fe(n.params)),t},r):r}function zt(e){return e===!0?[]:Array.isArray(e)||H(e)?e:[e]}function Fe(e){const r=t=>typeof t=="string"&&t[0]==="@"?$t(t.slice(1)):t;return Array.isArray(e)?e.map(r):e instanceof RegExp?[e]:Object.keys(e).reduce((t,i)=>(t[i]=r(e[i]),t),{})}const Lt=e=>{let r=[];const t=e.split(":")[0];return e.includes(":")&&(r=e.split(":").slice(1).join(":").split(",")),{name:t,params:r}};function $t(e){const r=t=>_(t,e)||t[e];return r.__locatorRef=e,r}const xt={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let Ut=Object.assign({},xt);const Gt=()=>Ut;async function Yt(e,r,t={}){const i=t==null?void 0:t.bails,n={name:(t==null?void 0:t.name)||"{field}",rules:r,bails:i??!0,formData:(t==null?void 0:t.values)||{}},s=(await qt(n,e)).errors;return{errors:s,valid:!s.length}}async function qt(e,r){if(Re(e.rules))return Kt(r,e.rules,{bails:e.bails});if(se(e.rules)||Array.isArray(e.rules)){const s={field:e.name,form:e.formData,value:r},m=Array.isArray(e.rules)?e.rules:[e.rules],c=m.length,v=[];for(let g=0;g<c;g++){const A=m[g],b=await A(r,s);if(typeof b!="string"&&b)continue;const w=typeof b=="string"?b:Me(s);if(v.push(w),e.bails)return{errors:v}}return{errors:v}}const t=Object.assign(Object.assign({},e),{rules:Nt(e.rules)}),i=[],n=Object.keys(t.rules),o=n.length;for(let s=0;s<o;s++){const m=n[s],c=await Wt(t,r,{name:m,params:t.rules[m]});if(c.error&&(i.push(c.error),e.bails))return{errors:i}}return{errors:i}}async function Kt(e,r,t){var i;return{errors:await r.validate(e,{abortEarly:(i=t.bails)!==null&&i!==void 0?i:!0}).then(()=>[]).catch(o=>{if(o.name==="ValidationError")return o.errors;throw o})}}async function Wt(e,r,t){const i=Rt(t.name);if(!i)throw new Error(`No such validator '${t.name}' exists.`);const n=Zt(t.params,e.formData),o={field:e.name,value:r,form:e.formData,rule:Object.assign(Object.assign({},t),{params:n})},s=await i(r,n,o);return typeof s=="string"?{error:s}:{error:s?void 0:Me(o)}}function Me(e){const r=Gt().generateMessage;return r?r(e):"Field is invalid"}function Zt(e,r){const t=i=>Bt(i)?i(r):i;return Array.isArray(e)?e.map(t):Object.keys(e).reduce((i,n)=>(i[n]=t(e[n]),i),{})}async function Ht(e,r){const t=await e.validate(r,{abortEarly:!1}).then(()=>[]).catch(o=>{if(o.name!=="ValidationError")throw o;return o.inner||[]}),i={},n={};for(const o of t){const s=o.errors;i[o.path]={valid:!s.length,errors:s},s.length&&(n[o.path]=s[0])}return{valid:!t.length,results:i,errors:n}}async function Jt(e,r,t){const n=j(e).map(async v=>{var g,A,b;const P=await Yt(_(r,v),e[v],{name:((g=t==null?void 0:t.names)===null||g===void 0?void 0:g[v])||v,values:r,bails:(b=(A=t==null?void 0:t.bailsMap)===null||A===void 0?void 0:A[v])!==null&&b!==void 0?b:!0});return Object.assign(Object.assign({},P),{path:v})});let o=!0;const s=await Promise.all(n),m={},c={};for(const v of s)m[v.path]={valid:v.valid,errors:v.errors},v.valid||(o=!1,c[v.path]=v.errors[0]);return{valid:o,results:m,errors:c}}function _e(e,r,t){typeof t.value=="object"&&(t.value=V(t.value)),!t.enumerable||t.get||t.set||!t.configurable||!t.writable||r==="__proto__"?Object.defineProperty(e,r,t):e[r]=t.value}function V(e){if(typeof e!="object")return e;var r=0,t,i,n,o=Object.prototype.toString.call(e);if(o==="[object Object]"?n=Object.create(e.__proto__||null):o==="[object Array]"?n=Array(e.length):o==="[object Set]"?(n=new Set,e.forEach(function(s){n.add(V(s))})):o==="[object Map]"?(n=new Map,e.forEach(function(s,m){n.set(V(m),V(s))})):o==="[object Date]"?n=new Date(+e):o==="[object RegExp]"?n=new RegExp(e.source,e.flags):o==="[object DataView]"?n=new e.constructor(V(e.buffer)):o==="[object ArrayBuffer]"?n=e.slice(0):o.slice(-6)==="Array]"&&(n=new e.constructor(e)),n){for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)_e(n,i[r],Object.getOwnPropertyDescriptor(e,i[r]));for(r=0,i=Object.getOwnPropertyNames(e);r<i.length;r++)Object.hasOwnProperty.call(n,t=i[r])&&n[t]===e[t]||_e(n,t,Object.getOwnPropertyDescriptor(e,t))}return n||e}var De=function e(r,t){if(r===t)return!0;if(r&&t&&typeof r=="object"&&typeof t=="object"){if(r.constructor!==t.constructor)return!1;var i,n,o;if(Array.isArray(r)){if(i=r.length,i!=t.length)return!1;for(n=i;n--!==0;)if(!e(r[n],t[n]))return!1;return!0}if(r instanceof Map&&t instanceof Map){if(r.size!==t.size)return!1;for(n of r.entries())if(!t.has(n[0]))return!1;for(n of r.entries())if(!e(n[1],t.get(n[0])))return!1;return!0}if(r instanceof Set&&t instanceof Set){if(r.size!==t.size)return!1;for(n of r.entries())if(!t.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(r)&&ArrayBuffer.isView(t)){if(i=r.length,i!=t.length)return!1;for(n=i;n--!==0;)if(r[n]!==t[n])return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if(o=Object.keys(r),i=o.length,i!==Object.keys(t).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;for(n=i;n--!==0;){var s=o[n];if(!e(r[s],t[s]))return!1}return!0}return r!==r&&t!==t};function Xt(e,r,t=!0){const i=t===!0?pt(Ce,void 0):void 0,n=D(y(r));function o(){return i?_(i.meta.value.initialValues,y(e),y(n)):y(n)}function s(g){if(!i){n.value=g;return}i.stageInitialValue(y(e),g,!0)}const m=C(o);if(!i)return{value:D(o()),initialValue:m,setInitialValue:s};const c=_(i.values,y(e),y(m));return i.stageInitialValue(y(e),c,!0),{value:C({get(){return _(i.values,y(e))},set(g){i.setFieldValue(y(e),g)}}),initialValue:m,setInitialValue:s}}let Qt=0;function er(e){var r;const t=Qt++;let i=!1;const n=D({}),o=D(!1),s=D(0),m=[],c=Pe(V(y(e==null?void 0:e.initialValues)||{})),{errorBag:v,setErrorBag:g,setFieldErrorBag:A}=nr(e==null?void 0:e.initialErrors),b=C(()=>j(v.value).reduce((a,l)=>{const f=v.value[l];return f&&f.length&&(a[l]=f[0]),a},{}));function P(a){const l=n.value[a];return Array.isArray(l)?l[0]:l}function w(a){return!!n.value[a]}const $=C(()=>j(n.value).reduce((a,l)=>{const f=P(l);return f&&(a[l]=y(f.label||f.name)||""),a},{})),x=C(()=>j(n.value).reduce((a,l)=>{var f;const d=P(l);return d&&(a[l]=(f=d.bails)!==null&&f!==void 0?f:!0),a},{})),R=Object.assign({},(e==null?void 0:e.initialErrors)||{}),N=(r=e==null?void 0:e.keepValuesOnUnmount)!==null&&r!==void 0?r:!1,{initialValues:z,originalInitialValues:I,setInitialValues:B}=rr(n,c,e==null?void 0:e.initialValues),U=tr(n,c,I,b),T=e==null?void 0:e.validationSchema,G=we(Ae,5),Y=we(Ae,5),S=Mt(async a=>await a==="silent"?G():Y(),(a,[l])=>{const f=O.fieldsByPath.value||{},d=j(O.errorBag.value);return[...new Set([...j(a.results),...j(f),...d])].reduce((h,E)=>{const M=f[E],Z=(a.results[E]||{errors:[]}).errors,k={errors:Z,valid:!Z.length};if(h.results[E]=k,k.valid||(h.errors[E]=k.errors[0]),!M)return K(E,Z),h;if(q(M,te=>te.meta.valid=k.valid),l==="silent")return h;const Ue=Array.isArray(M)?M.some(te=>te.meta.validated):M.meta.validated;return l==="validated-only"&&!Ue||q(M,te=>te.setState({errors:k.errors})),h},{valid:a.valid,results:{},errors:{}})}),O={formId:t,fieldsByPath:n,values:c,errorBag:v,errors:b,schema:T,submitCount:s,meta:U,isSubmitting:o,fieldArrays:m,keepValuesOnUnmount:N,validateSchema:y(T)?S:void 0,validate:ee,register:Ne,unregister:ze,setFieldErrorBag:A,validateField:ie,setFieldValue:X,setValues:Q,setErrors:J,setFieldError:K,setFieldTouched:re,setTouched:W,resetForm:ne,handleSubmit:ce,stageInitialValue:$e,unsetInitialValue:Le,setFieldInitialValue:Ve,useFieldModel:be};function p(a){return Array.isArray(a)}function q(a,l){return Array.isArray(a)?a.forEach(l):l(a)}function ye(a){Object.values(n.value).forEach(l=>{l&&q(l,a)})}function K(a,l){A(a,l)}function J(a){g(a)}function X(a,l,{force:f}={force:!1}){var d;const u=n.value[a],h=V(l);if(!u){L(c,a,h);return}if(p(u)&&((d=u[0])===null||d===void 0?void 0:d.type)==="checkbox"&&!Array.isArray(l)){const M=V(je(_(c,a)||[],l,void 0));L(c,a,M);return}let E=l;!p(u)&&u.type==="checkbox"&&!f&&!i&&(E=V(je(_(c,a),l,y(u.uncheckedValue)))),L(c,a,E)}function Q(a){j(c).forEach(l=>{delete c[l]}),j(a).forEach(l=>{X(l,a[l])}),m.forEach(l=>l&&l.reset())}function ge(a){const{value:l}=Xt(a);return le(l,()=>{w(y(a))||ee({mode:"validated-only"})},{deep:!0}),l}function be(a){return Array.isArray(a)?a.map(ge):ge(a)}function re(a,l){const f=n.value[a];f&&q(f,d=>d.setTouched(l))}function W(a){j(a).forEach(l=>{re(l,!!a[l])})}function ne(a){i=!0,a!=null&&a.values?(B(a.values),Q(a==null?void 0:a.values)):(B(I.value),Q(I.value)),ye(l=>l.resetField()),a!=null&&a.touched&&W(a.touched),J((a==null?void 0:a.errors)||{}),s.value=(a==null?void 0:a.submitCount)||0,ae(()=>{i=!1})}function he(a,l){const f=wt(a),d=l;if(!n.value[d]){n.value[d]=f;return}const u=n.value[d];u&&!Array.isArray(u)&&(n.value[d]=[u]),n.value[d]=[...n.value[d],f]}function Oe(a,l){const f=l,d=n.value[f];if(d){if(!p(d)&&a.id===d.id){delete n.value[f];return}if(p(d)){const u=d.findIndex(h=>h.id===a.id);if(u===-1)return;d.splice(u,1),d.length||delete n.value[f]}}}function Ne(a){const l=y(a.name);he(a,l),ve(a.name)&&le(a.name,async(d,u)=>{await ae(),Oe(a,u),he(a,d),(b.value[u]||b.value[d])&&(K(u,void 0),ie(d)),await ae(),w(u)||de(c,u)});const f=y(a.errorMessage);f&&(R==null?void 0:R[l])!==f&&ie(l),delete R[l]}function ze(a){const l=y(a.name),f=n.value[l],d=!!f&&p(f);Oe(a,l),ae(()=>{var u;const h=(u=y(a.keepValueOnUnmount))!==null&&u!==void 0?u:y(N),E=_(c,l);if(d&&(f===n.value[l]||!n.value[l])&&Array.isArray(E)&&!h){const Z=E.findIndex(k=>De(k,y(a.checkedValue)));if(Z>-1){const k=[...E];k.splice(Z,1),X(l,k,{force:!0})}}if(!w(l)){if(K(l,void 0),h||d&&!Be(_(c,l)))return;de(c,l)}})}async function ee(a){if(ye(u=>u.meta.validated=!0),O.validateSchema)return O.validateSchema((a==null?void 0:a.mode)||"force");const l=await Promise.all(Object.values(n.value).map(u=>{const h=Array.isArray(u)?u[0]:u;return h?h.validate(a).then(E=>({key:y(h.name),valid:E.valid,errors:E.errors})):Promise.resolve({key:"",valid:!0,errors:[]})})),f={},d={};for(const u of l)f[u.key]={valid:u.valid,errors:u.errors},u.errors.length&&(d[u.key]=u.errors[0]);return{valid:l.every(u=>u.valid),results:f,errors:d}}async function ie(a){const l=n.value[a];return l?Array.isArray(l)?l.map(f=>f.validate())[0]:l.validate():Promise.resolve({errors:[],valid:!0})}function ce(a,l){return function(d){return d instanceof Event&&(d.preventDefault(),d.stopPropagation()),W(j(n.value).reduce((u,h)=>(u[h]=!0,u),{})),o.value=!0,s.value++,ee().then(u=>{if(u.valid&&typeof a=="function")return a(V(c),{evt:d,setErrors:J,setFieldError:K,setTouched:W,setFieldTouched:re,setValues:Q,setFieldValue:X,resetForm:ne});!u.valid&&typeof l=="function"&&l({values:V(c),evt:d,errors:u.errors,results:u.results})}).then(u=>(o.value=!1,u),u=>{throw o.value=!1,u})}}function Ve(a,l){L(z.value,a,V(l))}function Le(a){de(z.value,a)}function $e(a,l,f=!1){L(c,a,l),Ve(a,l),f&&!(e!=null&&e.initialValues)&&L(I.value,a,V(l))}async function Ae(){const a=y(T);return a?Re(a)?await Ht(a,c):await Jt(a,c,{names:$.value,bailsMap:x.value}):{valid:!0,results:{},errors:{}}}const xe=ce((a,{evt:l})=>{Te(l)&&l.target.submit()});return St(()=>{if(e!=null&&e.initialErrors&&J(e.initialErrors),e!=null&&e.initialTouched&&W(e.initialTouched),e!=null&&e.validateOnMount){ee();return}O.validateSchema&&O.validateSchema("silent")}),ve(T)&&le(T,()=>{var a;(a=O.validateSchema)===null||a===void 0||a.call(O,"validated-only")}),Et(Ce,O),{errors:b,meta:U,values:c,isSubmitting:o,submitCount:s,validate:ee,validateField:ie,handleReset:()=>ne(),resetForm:ne,handleSubmit:ce,submitForm:xe,setFieldError:K,setErrors:J,setFieldValue:X,setValues:Q,setFieldTouched:re,setTouched:W,useFieldModel:be}}function tr(e,r,t,i){const n={touched:"some",pending:"some",valid:"every"},o=C(()=>!De(r,y(t)));function s(){const c=Object.values(e.value).flat(1).filter(Boolean);return j(n).reduce((v,g)=>{const A=n[g];return v[g]=c[A](b=>b.meta[g]),v},{})}const m=Pe(s());return jt(()=>{const c=s();m.touched=c.touched,m.valid=c.valid,m.pending=c.pending}),C(()=>Object.assign(Object.assign({initialValues:y(t)},m),{valid:m.valid&&!j(i.value).length,dirty:o.value}))}function rr(e,r,t){const i=D(V(y(t))||{}),n=D(V(y(t))||{});function o(s,m=!1){i.value=V(s),n.value=V(s),m&&j(e.value).forEach(c=>{const v=e.value[c],g=Array.isArray(v)?v.some(b=>b.meta.touched):v==null?void 0:v.meta.touched;if(!v||g)return;const A=_(i.value,c);L(r,c,V(A))})}return ve(t)&&le(t,s=>{o(s,!0)},{deep:!0}),{initialValues:i,originalInitialValues:n,setInitialValues:o}}function nr(e){const r=D({});function t(o){return Array.isArray(o)?o:o?[o]:[]}function i(o,s){if(!s){delete r.value[o];return}r.value[o]=t(s)}function n(o){r.value=j(o).reduce((s,m)=>{const c=o[m];return c&&(s[m]=t(c)),s},{})}return e&&n(e),{errorBag:r,setErrorBag:n,setFieldErrorBag:i}}const ir=Ot({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(e,r){const t=oe(e,"initialValues"),i=oe(e,"validationSchema"),n=oe(e,"keepValues"),{errors:o,values:s,meta:m,isSubmitting:c,submitCount:v,validate:g,validateField:A,handleReset:b,resetForm:P,handleSubmit:w,setErrors:$,setFieldError:x,setFieldValue:R,setValues:N,setFieldTouched:z,setTouched:I}=er({validationSchema:i.value?i:void 0,initialValues:t,initialErrors:e.initialErrors,initialTouched:e.initialTouched,validateOnMount:e.validateOnMount,keepValuesOnUnmount:n}),B=w((S,{evt:O})=>{Te(O)&&O.target.submit()},e.onInvalidSubmit),U=e.onSubmit?w(e.onSubmit,e.onInvalidSubmit):B;function T(S){pe(S)&&S.preventDefault(),b(),typeof r.attrs.onReset=="function"&&r.attrs.onReset()}function G(S,O){return w(typeof S=="function"&&!O?S:O,e.onInvalidSubmit)(S)}function Y(){return{meta:m.value,errors:o.value,values:s,isSubmitting:c.value,submitCount:v.value,validate:g,validateField:A,handleSubmit:G,handleReset:b,submitForm:B,setErrors:$,setFieldError:x,setFieldValue:R,setValues:N,setFieldTouched:z,setTouched:I,resetForm:P}}return r.expose({setFieldError:x,setErrors:$,setFieldValue:R,setValues:N,setFieldTouched:z,setTouched:I,resetForm:P,validate:g,validateField:A}),function(){const O=e.as==="form"?e.as:Vt(e.as),p=Dt(O,r,Y);if(!e.as)return p;const q=e.as==="form"?{novalidate:!0}:{};return At(O,Object.assign(Object.assign(Object.assign({},q),r.attrs),{onSubmit:U,onReset:T}),p)}}}),sr=ir;export{sr as F,lr as V};