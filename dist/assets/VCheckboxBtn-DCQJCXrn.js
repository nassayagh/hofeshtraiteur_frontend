import{m as V,V as a}from"./VSelectionControl-C3v1ZqXl.js";import{p as f,aI as I,j as v,u as c,e as l,m as b,bD as k,b as x,n as h}from"./index-CUPAlSMw.js";const C=f({indeterminate:Boolean,indeterminateIcon:{type:I,default:"$checkboxIndeterminate"},...V({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),y=v()({name:"VCheckboxBtn",props:C(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{slots:u}=r;const t=c(e,"indeterminate"),n=c(e,"modelValue");function s(o){t.value&&(t.value=!1)}const m=l(()=>t.value?e.indeterminateIcon:e.falseIcon),i=l(()=>t.value?e.indeterminateIcon:e.trueIcon);return b(()=>{const o=k(a.filterProps(e),["modelValue"]);return x(a,h(o,{modelValue:n.value,"onUpdate:modelValue":[d=>n.value=d,s],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:m.value,trueIcon:i.value,"aria-checked":t.value?"mixed":void 0}),u)}),{}}});export{y as V,C as m};