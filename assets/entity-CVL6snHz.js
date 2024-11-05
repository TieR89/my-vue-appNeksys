import{K as n}from"./index-DhWPw_WE.js";const o=n("entity",{state:()=>({entities:[{id:1,title:"Test Entity 1",description:"This is a test entity",published:!0,published_from:"2024-01-01"},{id:2,title:"Test Entity 2",description:"This is another test entity",published:!1,published_from:null}],loading:!1,error:null}),getters:{filteredEntities:i=>t=>i.entities.filter(e=>t.title?e.title.toLowerCase().includes(t.title.toLowerCase()):!0),getEntityById:i=>t=>i.entities.find(e=>e.id===t)},actions:{async fetchEntities(){this.loading=!0;try{}catch(i){this.error="Failed to fetch entities",console.error(i)}finally{this.loading=!1}},async createEntity(i){try{const t={...i,id:Math.max(0,...this.entities.map(e=>e.id))+1};return this.entities.push(t),t}catch(t){throw this.error="Failed to create entity",t}},async updateEntity(i,t){try{const e=this.entities.findIndex(r=>r.id===i);if(e!==-1)return this.entities[e]={...t,id:i},this.entities[e];throw new Error("Entity not found")}catch(e){throw this.error="Failed to update entity",e}},async deleteEntity(i){try{const t=this.entities.findIndex(e=>e.id===i);t!==-1&&this.entities.splice(t,1)}catch(t){throw this.error="Failed to delete entity",t}}}});export{o as u};
