import{u as Je}from"./demands-qRWKPGVb.js";import{u as We}from"./eventType-BeaE8zRB.js";import{u as Xe}from"./customers-DP3747WA.js";import{u as Ye}from"./hall-Bjqkp3to.js";import{_ as Ze}from"./BaseBreadcrumb-DPJCXDT3.js";import{r as Ee}from"./validators-BPi-vT8z.js";import{a as Re}from"./formatters-ChhyeSK0.js";import{p as Qe,ay as el,az as ll,j as al,aA as tl,r as s,s as de,u as Me,e as D,aB as ol,g as ne,Y as Le,aC as nl,m as ul,b as l,X as me,n as F,ac as Oe,aD as rl,aE as sl,d as w,aF as il,aG as dl,aH as ml,aI as vl,a6 as cl,aJ as fl,av as pl,aK as C,h as Vl,q as gl,Z as Ie,o as ae,c as Ne,w as n,V as I,t as h,a as j,a8 as J,_ as ke,a4 as Ue,ae as Ae,af as Te}from"./index-CmHXyYx9.js";import{F as bl}from"./vee-validate.esm-DOnvsYd8.js";import{_ as yl}from"./ValidateDemand.vue_vue_type_script_setup_true_lang-Cp0SEo6e.js";import{V as _,a as Fe}from"./VRow-DguH7A3U.js";import{V as hl}from"./VDataTableServer-D9AfTYTv.js";import{V as kl}from"./VToolbar-BV8SpjJx.js";import{m as Cl,u as _l,V as U}from"./VTextField-DW2t7TcW.js";import{m as $l,u as xl,V as wl,a as Dl,b as Ce}from"./VSelect-KNoAAS8L.js";import{V as _e}from"./VDialog-U6db8KCa.js";import{V as Be}from"./VLocaleProvider-CoeuH1Dh.js";import{V as je}from"./VDatePicker-DgEs07z_.js";import{V as Ge,a as te}from"./VSpacer-BdbqMcpc.js";import{a as Ke,b as ze,V as Sl,c as He}from"./VCard-CT1ap8kE.js";import{V as Pl}from"./VContainer-BCt6nyL9.js";import{V as Il}from"./VAutocomplete-DVkS3Oc5.js";import{m as Ul,u as Al}from"./filter-CxFxo8pj.js";import{h as Tl,t as $e,g as Fl,e as El,c as qe}from"./VMenu-CnH1YEJZ.js";import{V as Rl}from"./VAvatar-2B62Bmjy.js";import{V as Ml}from"./VTextarea-B3swc2EN.js";import{V as Ll}from"./VAlert-CGgndlKo.js";import{V as oe}from"./VTooltip-C7NxLLFY.js";import"./VSheet-jg7HPqls.js";function Ol(o,$,K){if($==null)return o;if(Array.isArray($))throw new Error("Multiple matches is not implemented");return typeof $=="number"&&~$?l(me,null,[l("span",{class:"v-combobox__unmask"},[o.substr(0,$)]),l("span",{class:"v-combobox__mask"},[o.substr($,K)]),l("span",{class:"v-combobox__unmask"},[o.substr($+K)])]):o}const Nl=Qe({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:{type:Boolean,default:!0},delimiters:Array,...Ul({filterKeys:["title"]}),...$l({hideNoData:!0,returnObject:!0}),...el(Cl({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...ll({transition:!1})},"VCombobox"),Bl=al()({name:"VCombobox",props:Nl(),emits:{"update:focused":o=>!0,"update:modelValue":o=>!0,"update:search":o=>!0,"update:menu":o=>!0},setup(o,$){var ge;let{emit:K,slots:p}=$;const{t:ue}=tl(),E=s(),A=de(!1),R=de(!0),W=de(!1),S=s(),X=s(),z=Me(o,"menu"),b=D({get:()=>z.value,set:u=>{var a;z.value&&!u&&((a=S.value)!=null&&a.ΨopenChildren)||(z.value=u)}}),f=de(-1);let N=!1;const H=D(()=>{var u;return(u=E.value)==null?void 0:u.color}),re=D(()=>b.value?o.closeText:o.openText),{items:Y,transformIn:Z,transformOut:se}=Tl(o),{textColorClasses:q,textColorStyles:Q}=ol(H),v=Me(o,"modelValue",[],u=>Z(ml(u)),u=>{const a=se(u);return o.multiple?a:a[0]??null}),M=_l(),P=de(o.multiple?"":((ge=v.value[0])==null?void 0:ge.title)??""),k=D({get:()=>P.value,set:u=>{var a;if(P.value=u??"",o.multiple||(v.value=[$e(o,u)]),u&&o.multiple&&((a=o.delimiters)!=null&&a.length)){const e=u.split(new RegExp(`(?:${o.delimiters.join("|")})+`));e.length>1&&(e.forEach(V=>{V=V.trim(),V&&T($e(o,V))}),P.value="")}u||(f.value=-1),R.value=!u}}),B=D(()=>typeof o.counterValue=="function"?o.counterValue(v.value):typeof o.counterValue=="number"?o.counterValue:o.multiple?v.value.length:k.value.length);ne(P,u=>{N?Le(()=>N=!1):A.value&&!b.value&&(b.value=!0),K("update:search",u)}),ne(v,u=>{var a;o.multiple||(P.value=((a=u[0])==null?void 0:a.title)??"")});const{filteredItems:c,getMatches:G}=Al(o,Y,()=>R.value?"":k.value),x=D(()=>o.hideSelected?c.value.filter(u=>!v.value.some(a=>a.value===u.value)):c.value),d=D(()=>v.value.map(u=>u.value)),ee=D(()=>{var a;return(o.autoSelectFirst===!0||o.autoSelectFirst==="exact"&&k.value===((a=x.value[0])==null?void 0:a.title))&&x.value.length>0&&!R.value&&!W.value}),L=D(()=>o.hideNoData&&!x.value.length||o.readonly||(M==null?void 0:M.isReadonly.value)),ie=s(),{onListScroll:ve,onListKeydown:ce}=xl(ie,E);function fe(u){N=!0,o.openOnClear&&(b.value=!0)}function xe(){L.value||(b.value=!0)}function we(u){L.value||(A.value&&(u.preventDefault(),u.stopPropagation()),b.value=!b.value)}function De(u){var V;if(vl(u)||o.readonly||M!=null&&M.isReadonly.value)return;const a=E.value.selectionStart,e=v.value.length;if((f.value>-1||["Enter","ArrowDown","ArrowUp"].includes(u.key))&&u.preventDefault(),["Enter","ArrowDown"].includes(u.key)&&(b.value=!0),["Escape"].includes(u.key)&&(b.value=!1),["Enter","Escape","Tab"].includes(u.key)&&(ee.value&&["Enter","Tab"].includes(u.key)&&T(c.value[0]),R.value=!0),u.key==="ArrowDown"&&ee.value&&((V=ie.value)==null||V.focus("next")),!!o.multiple){if(["Backspace","Delete"].includes(u.key)){if(f.value<0){u.key==="Backspace"&&!k.value&&(f.value=e-1);return}const i=f.value,g=v.value[f.value];g&&!g.props.disabled&&T(g,!1),f.value=i>=e-1?e-2:i}if(u.key==="ArrowLeft"){if(f.value<0&&a>0)return;const i=f.value>-1?f.value-1:e-1;v.value[i]?f.value=i:(f.value=-1,E.value.setSelectionRange(k.value.length,k.value.length))}if(u.key==="ArrowRight"){if(f.value<0)return;const i=f.value+1;v.value[i]?f.value=i:(f.value=-1,E.value.setSelectionRange(0,0))}u.key==="Enter"&&k.value&&(T($e(o,k.value)),k.value="")}}function Se(){var u;A.value&&(R.value=!0,(u=E.value)==null||u.focus())}function T(u){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(o.multiple){const e=v.value.findIndex(i=>o.valueComparator(i.value,u.value)),V=a??!~e;if(~e){const i=V?[...v.value,u]:[...v.value];i.splice(e,1),v.value=i}else V&&(v.value=[...v.value,u]);o.clearOnSelect&&(k.value="")}else{const e=a!==!1;v.value=e?[u]:[],P.value=e?u.title:"",Le(()=>{b.value=!1,R.value=!0})}}function Pe(u){A.value=!0,setTimeout(()=>{W.value=!0})}function pe(u){W.value=!1}function Ve(u){(u==null||u===""&&!o.multiple)&&(v.value=[])}return ne(A,(u,a)=>{u||u===a||(f.value=-1,b.value=!1,ee.value&&!W.value&&!v.value.some(e=>{let{value:V}=e;return V===x.value[0].value})?T(x.value[0]):o.multiple&&k.value&&T($e(o,k.value)))}),ne(b,()=>{if(!o.hideSelected&&b.value&&v.value.length){const u=x.value.findIndex(a=>v.value.some(e=>o.valueComparator(e.value,a.value)));nl&&window.requestAnimationFrame(()=>{var a;u>=0&&((a=X.value)==null||a.scrollToIndex(u))})}}),ne(x,(u,a)=>{A.value&&(!u.length&&o.hideNoData&&(b.value=!1),!a.length&&u.length&&(b.value=!0))}),ul(()=>{const u=!!(o.chips||p.chip),a=!!(!o.hideNoData||x.value.length||p["prepend-item"]||p["append-item"]||p["no-data"]),e=v.value.length>0,V=U.filterProps(o);return l(U,F({ref:E},V,{modelValue:k.value,"onUpdate:modelValue":[i=>k.value=i,Ve],focused:A.value,"onUpdate:focused":i=>A.value=i,validationValue:v.externalValue,counterValue:B.value,dirty:e,class:["v-combobox",{"v-combobox--active-menu":b.value,"v-combobox--chips":!!o.chips,"v-combobox--selection-slot":!!p.selection,"v-combobox--selecting-index":f.value>-1,[`v-combobox--${o.multiple?"multiple":"single"}`]:!0},o.class],style:o.style,readonly:o.readonly,placeholder:e?void 0:o.placeholder,"onClick:clear":fe,"onMousedown:control":xe,onKeydown:De}),{...p,default:()=>l(me,null,[l(Fl,F({ref:S,modelValue:b.value,"onUpdate:modelValue":i=>b.value=i,activator:"parent",contentClass:"v-combobox__content",disabled:L.value,eager:o.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:o.transition,onAfterLeave:Se},o.menuProps),{default:()=>[a&&l(El,F({ref:ie,selected:d.value,selectStrategy:o.multiple?"independent":"single-independent",onMousedown:i=>i.preventDefault(),onKeydown:ce,onFocusin:Pe,onFocusout:pe,onScrollPassive:ve,tabindex:"-1","aria-live":"polite",color:o.itemColor??o.color},o.listProps),{default:()=>{var i,g,t;return[(i=p["prepend-item"])==null?void 0:i.call(p),!x.value.length&&!o.hideNoData&&(((g=p["no-data"])==null?void 0:g.call(p))??l(qe,{title:ue(o.noDataText)},null)),l(wl,{ref:X,renderless:!0,items:x.value},{default:m=>{var be;let{item:r,index:y,itemRef:O}=m;const le=F(r.props,{ref:O,key:y,active:ee.value&&y===0?!0:void 0,onClick:()=>T(r,null)});return((be=p.item)==null?void 0:be.call(p,{item:r,index:y,props:le}))??l(qe,le,{prepend:ye=>{let{isSelected:he}=ye;return l(me,null,[o.multiple&&!o.hideSelected?l(Dl,{key:r.value,modelValue:he,ripple:!1,tabindex:"-1"},null):void 0,r.props.prependAvatar&&l(Rl,{image:r.props.prependAvatar},null),r.props.prependIcon&&l(Oe,{icon:r.props.prependIcon},null)])},title:()=>{var ye,he;return R.value?r.title:Ol(r.title,(ye=G(r))==null?void 0:ye.title,((he=k.value)==null?void 0:he.length)??0)}})}}),(t=p["append-item"])==null?void 0:t.call(p)]}})]}),v.value.map((i,g)=>{function t(O){O.stopPropagation(),O.preventDefault(),T(i,!1)}const m={"onClick:close":t,onMousedown(O){O.preventDefault(),O.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},r=u?!!p.chip:!!p.selection,y=r?rl(u?p.chip({item:i,index:g,props:m}):p.selection({item:i,index:g})):void 0;if(!(r&&!y))return l("div",{key:i.value,class:["v-combobox__selection",g===f.value&&["v-combobox__selection--selected",q.value]],style:g===f.value?Q.value:{}},[u?p.chip?l(sl,{key:"chip-defaults",defaults:{VChip:{closable:o.closableChips,size:"small",text:i.title}}},{default:()=>[y]}):l(Ge,F({key:"chip",closable:o.closableChips,size:"small",text:i.title,disabled:i.props.disabled},m),null):y??l("span",{class:"v-combobox__selection-text"},[i.title,o.multiple&&g<v.value.length-1&&l("span",{class:"v-combobox__selection-comma"},[w(",")])])])})]),"append-inner":function(){var m;for(var i=arguments.length,g=new Array(i),t=0;t<i;t++)g[t]=arguments[t];return l(me,null,[(m=p["append-inner"])==null?void 0:m.call(p,...g),(!o.hideNoData||o.items.length)&&o.menuIcon?l(Oe,{class:"v-combobox__menu-icon",icon:o.menuIcon,onMousedown:we,onClick:il,"aria-label":ue(re.value),title:ue(re.value)},null):void 0])}})}),dl({isFocused:A,isPristine:R,menu:b,search:k,selectionIndex:f,filteredItems:c,select:T},E)}}),jl={class:"text-h5"},Kl={key:0,class:"mt-2"},zl=["onClick"],Hl=["onClick"],ql={class:"d-flex align-center"},Ca=cl({__name:"List",setup(o){const $=fl(),K=s(),p=pl(),ue=We(),E=Xe(),A=Ye(),R=s({title:C("Gestion des demandes")}),W=s([{text:C("Dashboard"),disabled:!1,href:"/"},{text:C("Gestion des demandes"),disabled:!0,href:"#"}]),S=s([]),X=s([]),z=s([]),b=s([]),f=Je();Vl(()=>{pe(),Ve(),ge(),A.fetchItems({per_page:1e3}).then(a=>{b.value=a.data.data})}),s(!1);const N=s(!1),H=s(!1);s(!1),s(!1),s(!1),s(""),s(),s(!1);const re=s(null);s(null),s(null),s(null);const Y=s(!1),Z=s(!1);s();const se=s(100),q=s(2),Q=s(2),v=s(0),M=s(!1),P=s(!1);s(null);const k=s("");s(["primary","secondary","error","success","warning"]);const B=s([{key:"event_date",order:"ASC"}]);s(0),s({total:0,validated:0,unvalidated:0});const c=s({search:null,status:null,date:null,event_type:null}),G=s({itemsPerPage:100,rowsPerPage:100,page:1,sortDesc:[!0],sortBy:[{key:"event_date",order:"ASC"}]}),x=s(-1),d=s({id:null,avatar:"1.jpg",name:"",email:"",password:"",changePassword:!0,jdate:"",role:"",rolestatus:""}),ee=s({id:null,avatar:"1.jpg",name:"",email:"",password:"",changePassword:!0,jdate:"",role:"",rolestatus:"",customer:{}}),L=s(!1),ie=s([{title:C("ID"),align:"start",key:"id",sortable:!0},{title:C("Prénom"),align:"start",key:"customer.firstname",sortable:!1},{title:C("Nom"),align:"start",key:"customer.lastname",sortable:!1},{title:C("Email"),align:"start",key:"customer.email",sortable:!1},{title:C("Tél."),align:"start",key:"customer.phone",sortable:!1},{title:C("Prest."),align:"start",key:"event_type"},{title:C("Source"),align:"start",key:"source"},{title:C("Date 'évén"),key:"event_date"},{title:C("Moment"),key:"reception_period"},{title:C("Heure"),key:"reception_start_time"},{title:C("Lieu"),key:"event_location"},{title:C("Salle"),key:"hall.name"},{title:C("Conv"),key:"number_people"},{title:"Actions",key:"actions",sortable:!1}]),ve=D(()=>c.value.date&&c.value.date.length>0?$.format(c.value.date[0],"shortDate")+" - "+$.format(c.value.date[c.value.date.length-1],"shortDate"):null),ce=D(()=>d.value.event_date?$.format(d.value.event_date,"shortDate"):null);D(()=>f.demands.data.filter(a=>a.email.toLowerCase().includes(k.value.toLowerCase())));function fe(a){N.value=!1,x.value=S.value.indexOf(a),d.value=Object.assign({},a),P.value=!0}function xe(a){d.value=a,L.value=!0}function we(){P.value=!1,setTimeout(()=>{d.value=Object.assign({customer:{}},ee.value),x.value=-1},300)}function De(a,{setErrors:e}){var V;(V=K.value)==null||V.validate().then(({valid:i})=>{i&&(H.value=!0,f.addItem(d.value).then(g=>{if(g.data.error){e({apiError:g.data.message});return}d.value.id!=null?Object.assign(S.value[x.value],g.data):S.value.unshift(g.data),H.value=!1,P.value=!1,d.value={customer:{}},p.showSuccess(C("Demande enregistrée avec succès")),Ve(),f.fetchStatistics()}).catch(g=>{H.value=!1,e({apiError:g})}).then(()=>{H.value=!1,e({apiError:null})}))})}function Se(){f.deleteItem(d.value.id);const a=S.value.findIndex(e=>e.id==d.value.id);S.value.splice(a,1),L.value=!1,p.showSuccess(C("Demande supprimée avec succès")),f.fetchStatistics()}const T=D(()=>x.value===-1?"Nouvelle demande":"Modifier la demande"),Pe=D(()=>c.value.date&&c.value.date.length?c.value.date.length>1?[$.format(c.value.date[0],"shortDate"),$.format(c.value.date[c.value.date.length-1],"shortDate")]:[$.format(c.value.date[0],"shortDate"),$.format(c.value.date[0],"shortDate")]:null);function pe(){try{clearTimeout(re.value)}catch{}re.value=setTimeout(()=>{N.value=!0;let a="id",e="desc";console.log(B.value),B.value.length>0&&(a=B.value[0].key,e=B.value[0].order),f.fetchItems({term:k.value,paginate:se.value,current_page:q.value,direction:e,order_by:a,page:G.value.page,per_page:G.value.itemsPerPage,...c.value,date:Pe.value}).then(V=>{if(V.data){const{data:i,current_page:g,next_page_url:t,total:m,per_page:r,to:y,last_page:O}=V.data;S.value=i.map(le=>{const be=le.event_date!=null?new Date(le.event_date):null;return{...le,event_date:be}}),Q.value=O,v.value=m}}).catch(V=>{console.error(V)}).then(()=>{N.value=!1})},1e3)}function Ve(){ue.fetchItems({term:"",paginate:500,current_page:1,direction:"asc",order_by:"name",page:1,per_page:500}).then(a=>{if(a.data){const{data:e,current_page:V,next_page_url:i,total:g,per_page:t,to:m,last_page:r}=a.data;X.value=e}}).catch(a=>{console.error(a)}).then(()=>{})}function ge(){E.fetchItems({term:"",paginate:5e3,current_page:1,direction:"asc",order_by:"firstname",page:1,per_page:5e3}).then(a=>{if(a.data){const{data:e,current_page:V,next_page_url:i,total:g,per_page:t,to:m,last_page:r}=a.data;z.value=e.map(y=>({...y,name:y.firstname+" "+y.lastname+" ("+(y.is_customer?C("Client"):C("Prospect"))+")"}))}}).catch(a=>{console.error(a)}).then(()=>{})}ne([k,G,c],()=>{pe()},{deep:!0}),gl(()=>{q.value>Q.value&&(q.value=Q.value)});function u(a){if(a){const e=z.value.find(V=>V.id==a);e&&(d.value.customer=e)}}return(a,e)=>{const V=Ie("EyeIcon"),i=Ie("PencilIcon"),g=Ie("TrashIcon");return ae(),Ne(me,null,[l(Ze,{title:`${R.value.title}(${v.value})`,breadcrumbs:W.value},null,8,["title","breadcrumbs"]),l(Fe,null,{default:n(()=>[l(_,{cols:"12"},{default:n(()=>[l(hl,{class:"border rounded-md",headers:ie.value,loading:N.value,items:S.value,"multi-sort":!1,"items-per-page":se.value,"onUpdate:itemsPerPage":e[34]||(e[34]=t=>se.value=t),"items-per-page-text":a.$t("Articles par page"),options:G.value,"onUpdate:options":e[35]||(e[35]=t=>G.value=t),"sort-by":B.value,"onUpdate:sortBy":e[36]||(e[36]=t=>B.value=t),page:q.value,"onUpdate:page":e[37]||(e[37]=t=>q.value=t),"items-length":v.value,"onUpdate:itemsLength":e[38]||(e[38]=t=>v.value=t),"show-select":!1,"loading-text":a.$t("Chargement des éléments"),"no-data-text":a.$t("Pas de données"),"no-results-text":a.$t("Aucun résultat"),onPageCount:e[39]||(e[39]=t=>Q.value=t)},{top:n(()=>[l(kl,{class:"rounded-t-md pl-2 pr-2",flat:""},{default:n(()=>[l(Fe,null,{default:n(()=>[l(_,null,{default:n(()=>[l(U,{density:"compact",modelValue:c.value.search,"onUpdate:modelValue":e[0]||(e[0]=t=>c.value.search=t),placeholder:a.$t("Rechercher prénom, nom, email, téléphone..."),"hide-details":"",variant:"solo",clearable:""},null,8,["modelValue","placeholder"])]),_:1}),l(_,null,{default:n(()=>[l(Ce,{density:"compact",modelValue:c.value.event_type,"onUpdate:modelValue":e[1]||(e[1]=t=>c.value.event_type=t),placeholder:a.$t("Prestation"),items:X.value,"item-value":"name","item-title":"name",clearable:"",multiple:"","hide-details":"",variant:"solo"},null,8,["modelValue","placeholder","items"])]),_:1}),l(_,null,{default:n(()=>[l(Ce,{density:"compact",modelValue:c.value.source,"onUpdate:modelValue":e[2]||(e[2]=t=>c.value.source=t),placeholder:a.$t("Source"),items:["admin","site"],clearable:"","hide-details":"",variant:"solo"},null,8,["modelValue","placeholder"])]),_:1}),l(_,null,{default:n(()=>[l(_e,{ref:"dialog",modelValue:Y.value,"onUpdate:modelValue":e[8]||(e[8]=t=>Y.value=t),"return-value":c.value.date,"onUpdate:returnValue":e[9]||(e[9]=t=>c.value.date=t),persistent:"",width:"290px"},{activator:n(({props:t})=>[l(U,F({modelValue:ve.value,"onUpdate:modelValue":e[3]||(e[3]=m=>ve.value=m),"prepend-inner-icon":"bx-calendar"},t,{density:"compact",placeholder:a.$t("Date"),"hide-details":"",variant:"solo",clearable:"",readonly:"","onClick:clear":e[4]||(e[4]=m=>c.value.date=null)}),null,16,["modelValue","placeholder"])]),default:n(({isActive:t})=>[l(Be,{locale:"fr"},{default:n(()=>[l(je,{modelValue:c.value.date,"onUpdate:modelValue":e[7]||(e[7]=m=>c.value.date=m),"hide-header":"",multiple:"range"},{actions:n(()=>[l(I,{color:"primary",onClick:e[5]||(e[5]=m=>Y.value=!1)},{default:n(()=>[w(h(a.$t("Annuler")),1)]),_:1}),l(te),l(I,{variant:"elevated",color:"primary",onClick:e[6]||(e[6]=m=>Y.value=!1)},{default:n(()=>[w(h(a.$t("OK")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue","return-value"])]),_:1}),l(_,{class:""},{default:n(()=>[l(_e,{modelValue:P.value,"onUpdate:modelValue":e[31]||(e[31]=t=>P.value=t),"max-width":"600px"},{activator:n(({props:t})=>[l(I,F({color:"primary",class:"align-self-end float-end",variant:"flat",onClick:e[10]||(e[10]=m=>fe({customer:{},source:"admin"})),dark:""},t),{default:n(()=>[w(h(a.$t("Ajouter une demande")),1)]),_:2},1040)]),default:n(()=>[l(Ke,null,{default:n(()=>[l(ze,{class:"pa-4 bg-secondary"},{default:n(()=>[j("span",jl,h(T.value),1)]),_:1}),l(J(bl),{ref_key:"refForm",ref:K,modelValue:M.value,"onUpdate:modelValue":e[30]||(e[30]=t=>M.value=t),onSubmit:De},{default:n(({errors:t,isSubmitting:m})=>[l(Sl,null,{default:n(()=>[l(Pl,{class:"px-0"},{default:n(()=>[l(Fe,null,{default:n(()=>[l(_,{cols:"12"},{default:n(()=>[l(Il,{modelValue:d.value.customer_id,"onUpdate:modelValue":[e[11]||(e[11]=r=>d.value.customer_id=r),u],placeholder:a.$t("Client"),items:z.value,"item-value":"id","item-title":"name",clearable:"","hide-details":"",variant:"outlined"},null,8,["modelValue","placeholder","items"])]),_:1}),l(_,{cols:"12",md:"6"},{default:n(()=>[l(U,{modelValue:d.value.customer.firstname,"onUpdate:modelValue":e[12]||(e[12]=r=>d.value.customer.firstname=r),rules:[J(Ee)],label:a.$t("Prénom")},null,8,["modelValue","rules","label"])]),_:1}),l(_,{cols:"12",md:"6"},{default:n(()=>[l(U,{modelValue:d.value.customer.lastname,"onUpdate:modelValue":e[13]||(e[13]=r=>d.value.customer.lastname=r),rules:[J(Ee)],label:a.$t("Nom")},null,8,["modelValue","rules","label"])]),_:1}),l(_,{cols:"12",md:"6"},{default:n(()=>[l(U,{modelValue:d.value.customer.email,"onUpdate:modelValue":e[14]||(e[14]=r=>d.value.customer.email=r),label:a.$t("Email")},null,8,["modelValue","label"])]),_:1}),l(_,{cols:"12",md:"6"},{default:n(()=>[l(U,{modelValue:d.value.customer.phone,"onUpdate:modelValue":e[15]||(e[15]=r=>d.value.customer.phone=r),label:a.$t("Téléphone")},null,8,["modelValue","label"])]),_:1}),l(_,{cols:"12",md:"6"},{default:n(()=>[l(Bl,{modelValue:d.value.event_type,"onUpdate:modelValue":e[16]||(e[16]=r=>d.value.event_type=r),placeholder:a.$t("Type d'événement"),items:X.value.map(r=>r.name),clearable:"","hide-details":"",variant:"outlined"},null,8,["modelValue","placeholder","items"])]),_:1}),l(_,{cols:"12",md:"6"},{default:n(()=>[l(_e,{ref:"dialogDemandDate",modelValue:Z.value,"onUpdate:modelValue":e[22]||(e[22]=r=>Z.value=r),"return-value":d.value.event_date,"onUpdate:returnValue":e[23]||(e[23]=r=>d.value.event_date=r),persistent:"",width:"290px"},{activator:n(({props:r})=>[l(U,F({modelValue:ce.value,"onUpdate:modelValue":e[17]||(e[17]=y=>ce.value=y),"prepend-inner-icon":"bx-calendar"},r,{placeholder:a.$t("Date de la demande"),"hide-details":"",clearable:"",readonly:"","onClick:clear":e[18]||(e[18]=y=>d.value.event_date=null)}),null,16,["modelValue","placeholder"])]),default:n(({isActive:r})=>[l(Be,{locale:"fr"},{default:n(()=>[l(je,{modelValue:d.value.event_date,"onUpdate:modelValue":e[21]||(e[21]=y=>d.value.event_date=y),"hide-header":""},{actions:n(()=>[l(I,{color:"primary",onClick:e[19]||(e[19]=y=>Z.value=!1)},{default:n(()=>[w(h(a.$t("Annuler")),1)]),_:1}),l(te),l(I,{variant:"elevated",color:"primary",onClick:e[20]||(e[20]=y=>Z.value=!1)},{default:n(()=>[w(h(a.$t("OK")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue","return-value"])]),_:1}),l(_,{cols:"12",md:"6"},{default:n(()=>[l(Ce,{modelValue:d.value.reception_period,"onUpdate:modelValue":e[24]||(e[24]=r=>d.value.reception_period=r),"hide-details":"",items:[a.$t("En matiné"),a.$t("Le midi"),a.$t("En soirée")],label:a.$t("La réception se déroulera plutôt"),clearable:""},null,8,["modelValue","items","label"])]),_:1}),l(_,{cols:"12",md:"6"},{default:n(()=>[l(U,{modelValue:d.value.reception_start_time,"onUpdate:modelValue":e[25]||(e[25]=r=>d.value.reception_start_time=r),"hide-details":"",label:a.$t("Heure de réception"),clearable:""},null,8,["modelValue","label"])]),_:1}),d.value.source!="admin"?(ae(),ke(_,{key:0,cols:"12",md:"6"},{default:n(()=>[l(U,{modelValue:d.value.event_location,"onUpdate:modelValue":e[26]||(e[26]=r=>d.value.event_location=r),"hide-details":"",label:a.$t("Lieu de l'événement")},null,8,["modelValue","label"])]),_:1})):(ae(),ke(_,{key:1,cols:"12",md:"6"},{default:n(()=>[l(Ce,{modelValue:d.value.hall_id,"onUpdate:modelValue":e[27]||(e[27]=r=>d.value.hall_id=r),items:b.value,"item-value":"id","item-title":"name",label:a.$t("Salle liée")},null,8,["modelValue","items","label"])]),_:1})),l(_,{cols:"12",md:"6"},{default:n(()=>[l(U,{modelValue:d.value.number_people,"onUpdate:modelValue":e[28]||(e[28]=r=>d.value.number_people=r),"hide-details":"",type:"number",label:a.$t("Nombre de convives")},null,8,["modelValue","label"])]),_:1}),l(_,{cols:"12"},{default:n(()=>[l(Ml,{modelValue:d.value.comment,"onUpdate:modelValue":e[29]||(e[29]=r=>d.value.comment=r),"hide-details":"",label:a.$t("Description de la demande")},null,8,["modelValue","label"])]),_:1})]),_:1}),t.apiError?(ae(),Ne("div",Kl,[l(Ll,{color:"error"},{default:n(()=>[w(h(t.apiError),1)]),_:2},1024)])):Ue("",!0)]),_:2},1024)]),_:2},1024),l(He,null,{default:n(()=>[l(te),l(I,{color:"error",variant:"flat",dark:"",onClick:we},{default:n(()=>[w(h(a.$t("Annuler")),1)]),_:1}),l(I,{color:"success",variant:"flat",loading:H.value,type:"submit"},{default:n(()=>[w(h(a.$t("Sauvegarder")),1)]),_:1},8,["loading"]),l(te)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(_e,{modelValue:L.value,"onUpdate:modelValue":e[33]||(e[33]=t=>L.value=t),"max-width":"500px"},{default:n(()=>[l(Ke,null,{default:n(()=>[l(ze,{class:"text-h5 text-center py-6"},{default:n(()=>[w(h(a.$t("Êtes-vous sûr de vouloir supprimer cet élément ?")),1)]),_:1}),l(He,null,{default:n(()=>[l(te),l(I,{color:"error",variant:"flat",dark:"",onClick:e[32]||(e[32]=t=>L.value=!1)},{default:n(()=>[w(h(a.$t("Annuler")),1)]),_:1}),l(I,{color:"success",variant:"flat",dark:"",onClick:Se},{default:n(()=>[w(h(a.$t("OK")),1)]),_:1}),l(te)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.customer.firstname":n(({item:t})=>[j("span",{class:"cursor-pointer",onClick:m=>a.$router.push("/demands/"+t.id)},h(t.customer?t.customer.firstname:""),9,zl)]),"item.customer.lastname":n(({item:t})=>[j("span",{class:"cursor-pointer",onClick:m=>a.$router.push("/demands/"+t.id)},h(t.customer?t.customer.lastname:""),9,Hl)]),"item.customer.email":n(({item:t})=>[l(oe,{text:t.customer.email},{activator:n(({props:m})=>[j("span",Ae(Te(m)),h(!t.customer||t.customer.email==null||t.customer.email.length<7?t.customer.email:`${t.customer.email.replace(`
`," ").slice(0,6)}...`),17)]),_:2},1032,["text"])]),"item.demand_date":n(({item:t})=>[w(h(J(Re)(t.demand_date)),1)]),"item.event_date":n(({item:t})=>[w(h(J(Re)(t.event_date)),1)]),"item.event_location":n(({item:t})=>[l(oe,{text:t.event_location},{activator:n(({props:m})=>[j("span",Ae(Te(m)),h(!t.event_location||t.event_location.length<10?t.event_location:`${t.event_location.slice(0,9)}...`),17)]),_:2},1032,["text"])]),"item.event_type":n(({item:t})=>[l(oe,{text:t.event_type},{activator:n(({props:m})=>[j("span",Ae(Te(m)),h(!t.event_type||t.event_type.length<10?t.event_type:`${t.event_type.slice(0,9)}...`),17)]),_:2},1032,["text"])]),"item.status":n(({item:t})=>[l(Ge,{color:J(f).statusColor(t.status),size:"small",label:""},{default:n(()=>[w(h(J(f).statusText(t.status)),1)]),_:2},1032,["color"])]),"item.actions":n(({index:t,item:m})=>[j("div",ql,[m.prestation?Ue("",!0):(ae(),ke(yl,{key:0,modelValue:S.value[t],"onUpdate:modelValue":r=>S.value[t]=r,icon:!0},null,8,["modelValue","onUpdate:modelValue"])),l(oe,{text:a.$t("Voir")},{activator:n(({props:r})=>[l(I,F({icon:"",flat:"",to:"/demands/"+m.id},r),{default:n(()=>[l(V,{"stroke-width":"1.5",size:"20",class:"text-primary"})]),_:2},1040,["to"])]),_:2},1032,["text"]),l(oe,{text:a.$t("Modifier")},{activator:n(({props:r})=>[l(I,F({icon:"",flat:"",onClick:y=>fe(m)},r),{default:n(()=>[l(i,{"stroke-width":"1.5",size:"20",class:"text-primary"})]),_:2},1040,["onClick"])]),_:2},1032,["text"]),m.prestation==null?(ae(),ke(oe,{key:1,text:a.$t("Supprimer")},{activator:n(({props:r})=>[l(I,F({icon:"",flat:"",onClick:y=>xe(m)},r),{default:n(()=>[l(g,{"stroke-width":"1.5",size:"20",class:"text-error"})]),_:2},1040,["onClick"])]),_:2},1032,["text"])):Ue("",!0)])]),"no-data":n(()=>[j("span",null,h(a.$t("Aucune donnée disponible")),1)]),_:1},8,["headers","loading","items","items-per-page","items-per-page-text","options","sort-by","page","items-length","loading-text","no-data-text","no-results-text"])]),_:1})]),_:1})],64)}}});export{Ca as default};