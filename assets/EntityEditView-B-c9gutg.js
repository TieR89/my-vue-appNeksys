import{d as p,r as i,e as v,c as r,a as u,t as f,F as _,i as x,j as E,p as b,m as h,o}from"./index-DhWPw_WE.js";import{u as k}from"./entity-CVL6snHz.js";import{_ as g}from"./EntityForm.vue_vue_type_script_setup_true_lang-CpnlhHO-.js";const w={class:"max-w-4xl mx-auto p-4"},B={key:0,class:"text-center py-4"},F={key:1,class:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"},C=p({__name:"EntityEditView",setup(I){const d=b(),c=h(),l=k(),e=i(null),s=i(!1),n=i(null),y=async()=>{const a=parseInt(d.params.id);if(isNaN(a)){n.value="Invalid entity ID";return}s.value=!0;try{const t=l.getEntityById(a);if(!t)throw new Error("Entity not found");e.value=t}catch(t){n.value="Failed to load entity",console.error(t)}finally{s.value=!1}},m=async a=>{if(e.value)try{await l.updateEntity(e.value.id,a),c.push("/")}catch(t){console.error("Failed to update entity:",t)}};return v(y),(a,t)=>(o(),r("div",w,[s.value?(o(),r("div",B,t[0]||(t[0]=[u("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"},null,-1)]))):n.value?(o(),r("div",F,f(n.value),1)):(o(),r(_,{key:2},[t[1]||(t[1]=u("h1",{class:"text-2xl font-bold mb-6"},"Edit Entity",-1)),e.value?(o(),x(g,{key:0,"initial-value":e.value,"submit-button-text":"Update",onSubmit:m},null,8,["initial-value"])):E("",!0)],64))]))}});export{C as default};
