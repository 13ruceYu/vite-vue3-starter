import{c as e,a as t,b as o,d as a,r as s,e as n,f as r,t as d,w as c,p as l,g as u,h as m,i,o as p,j as f,k as v}from"./vendor.e1a504da.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const a=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,n)=>{const r=new URL(e,a);if(self[t].moduleMap[r])return o(self[t].moduleMap[r]);const d=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(d),onerror(){n(new Error(`Failed to import: ${e}`)),s(c)},onload(){o(self[t].moduleMap[r]),s(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("assets/");const b=e({history:t(),routes:[]}),g={count:0};var h=o({state:()=>g,mutations:{increment(e){e.count++}},actions:{increment(e){e.commit("increment")}},getters:{double:e=>2*e.count}}),_=a({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:s(0)})});const k=c();l("data-v-f68b26d0");const j=u('<p data-v-f68b26d0> Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-f68b26d0>VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" data-v-f68b26d0> Vetur </a> or <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-f68b26d0>Volar</a> (if using <code data-v-f68b26d0>&lt;script setup&gt;</code>) </p><p data-v-f68b26d0>See <code data-v-f68b26d0>README.md</code> for more information.</p><p data-v-f68b26d0><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-f68b26d0> Vite Docs </a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-f68b26d0>Vue 3 Docs</a></p>',3),R=r("p",null,[m(" Edit "),r("code",null,"components/HelloWorld.vue"),m(" to test hot module replacement. ")],-1);i();const V=k(((e,t,o,a,s,c)=>(p(),n("div",null,[r("h1",null,d(e.msg),1),j,r("button",{onClick:t[1]||(t[1]=t=>e.count++)},"count is: "+d(e.count),1),R]))));_.render=V,_.__scopeId="data-v-f68b26d0";var w=a({name:"App",components:{HelloWorld:_}});const y=r("img",{alt:"Vue logo",src:"./assets/logo.03d6d6da.png"},null,-1);w.render=function(e,t,o,a,s,d){const c=f("HelloWorld");return p(),n("div",null,[y,r(c,{msg:"Hello Vue 3 + TypeScript + Vite"})])};const E=v(w);E.use(b),E.use(h),E.mount("#app");
