import{b as m,u as c,J as p,a as i,ad as u,r as l,a5 as n,x as d}from"./entry.5069b23d.js";import{u as f}from"./asyncData.bace911e.js";import _ from"./Ellipsis.a989896d.js";import y from"./ComponentPlaygroundData.93261f61.js";import"./TabsHeader.a48e8d67.js";import"./ComponentPlaygroundProps.0dc2d518.js";import"./ProseH4.275c2f17.js";import"./ProseCodeInline.967e8802.js";import"./Badge.a9708774.js";import"./ContentSlot.a6341508.js";import"./ProseP.f7f1abbf.js";import"./index.80ff44bb.js";import"./ComponentPlaygroundSlots.vue.ef62ac20.js";import"./ComponentPlaygroundTokens.vue.bd5be6f3.js";async function g(o){m();const t=c(o);{const{data:e}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const b=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await g(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(_,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(b,[["__scopeId","data-v-b3b26dce"]]);export{V as default};
