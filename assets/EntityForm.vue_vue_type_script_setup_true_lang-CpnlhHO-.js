import{q as ye,r as R,x as xe,y as _,z as M,A as z,B as Re,b as g,C as we,D as Oe,u as d,E as K,G as Q,H as X,d as Ee,c as I,a as x,g as j,v as D,n as Y,t as N,j as ee,I as Ce,J as Ve,o as F}from"./index-DhWPw_WE.js";function te(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function O(e){for(var s=1;s<arguments.length;s++){var r=arguments[s]!=null?arguments[s]:{};s%2?te(Object(r),!0).forEach(function(t){_e(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _e(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}function ne(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((r,t)=>(s.includes(t)||(r[t]=d(e[t])),r),{})}function L(e){return typeof e=="function"}function je(e){return we(e)||Oe(e)}function ie(e,s,r){let t=e;const a=s.split(".");for(let l=0;l<a.length;l++){if(!t[a[l]])return r;t=t[a[l]]}return t}function B(e,s,r){return g(()=>e.some(t=>ie(s,t,{[r]:!1})[r]))}function re(e,s,r){return g(()=>e.reduce((t,a)=>{const l=ie(s,a,{[r]:!1})[r]||[];return t.concat(l)},[]))}function le(e,s,r,t){return e.call(t,d(s),d(r),t)}function ue(e){return e.$valid!==void 0?!e.$valid:!e}function Pe(e,s,r,t,a,l,m){let{$lazy:u,$rewardEarly:f}=a,o=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],p=arguments.length>8?arguments[8]:void 0,$=arguments.length>9?arguments[9]:void 0,h=arguments.length>10?arguments[10]:void 0;const v=R(!!t.value),n=R(0);r.value=!1;const i=_([s,t].concat(o,h),()=>{if(u&&!t.value||f&&!$.value&&!r.value)return;let c;try{c=le(e,s,p,m)}catch(b){c=Promise.reject(b)}n.value++,r.value=!!n.value,v.value=!1,Promise.resolve(c).then(b=>{n.value--,r.value=!!n.value,l.value=b,v.value=ue(b)}).catch(b=>{n.value--,r.value=!!n.value,l.value=b,v.value=!0})},{immediate:!0,deep:typeof s=="object"});return{$invalid:v,$unwatch:i}}function Le(e,s,r,t,a,l,m,u){let{$lazy:f,$rewardEarly:o}=t;const p=()=>({}),$=g(()=>{if(f&&!r.value||o&&!u.value)return!1;let h=!0;try{const v=le(e,s,m,l);a.value=v,h=ue(v)}catch(v){a.value=v}return h});return{$unwatch:p,$invalid:$}}function ze(e,s,r,t,a,l,m,u,f,o,p){const $=R(!1),h=e.$params||{},v=R(null);let n,i;e.$async?{$invalid:n,$unwatch:i}=Pe(e.$validator,s,$,r,t,v,a,e.$watchTargets,f,o,p):{$invalid:n,$unwatch:i}=Le(e.$validator,s,r,t,v,a,f,o);const c=e.$message;return{$message:L(c)?g(()=>c(ne({$pending:$,$invalid:n,$params:ne(h),$model:s,$response:v,$validator:l,$propertyPath:u,$property:m}))):c||"",$params:h,$pending:$,$invalid:n,$response:v,$unwatch:i}}function Ae(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=d(e),r=Object.keys(s),t={},a={},l={};let m=null;return r.forEach(u=>{const f=s[u];switch(!0){case L(f.$validator):t[u]=f;break;case L(f):t[u]={$validator:f};break;case u==="$validationGroups":m=f;break;case u.startsWith("$"):l[u]=f;break;default:a[u]=f}}),{rules:t,nestedValidators:a,config:l,validationGroups:m}}const Te="__root";function Se(e,s,r,t,a,l,m,u,f){const o=Object.keys(e),p=t.get(a,e),$=R(!1),h=R(!1),v=R(0);if(p){if(!p.$partial)return p;p.$unwatch(),$.value=p.$dirty.value}const n={$dirty:$,$path:a,$touch:()=>{$.value||($.value=!0)},$reset:()=>{$.value&&($.value=!1)},$commit:()=>{}};return o.length?(o.forEach(i=>{n[i]=ze(e[i],s,n.$dirty,l,m,i,r,a,f,h,v)}),n.$externalResults=g(()=>u.value?[].concat(u.value).map((i,c)=>({$propertyPath:a,$property:r,$validator:"$externalResults",$uid:`${a}-externalResult-${c}`,$message:i,$params:{},$response:null,$pending:!1})):[]),n.$invalid=g(()=>{const i=o.some(c=>d(n[c].$invalid));return h.value=i,!!n.$externalResults.value.length||i}),n.$pending=g(()=>o.some(i=>d(n[i].$pending))),n.$error=g(()=>n.$dirty.value?n.$pending.value||n.$invalid.value:!1),n.$silentErrors=g(()=>o.filter(i=>d(n[i].$invalid)).map(i=>{const c=n[i];return z({$propertyPath:a,$property:r,$validator:i,$uid:`${a}-${i}`,$message:c.$message,$params:c.$params,$response:c.$response,$pending:c.$pending})}).concat(n.$externalResults.value)),n.$errors=g(()=>n.$dirty.value?n.$silentErrors.value:[]),n.$unwatch=()=>o.forEach(i=>{n[i].$unwatch()}),n.$commit=()=>{h.value=!0,v.value=Date.now()},t.set(a,e,n),n):(p&&t.set(a,e,n),n)}function ke(e,s,r,t,a,l,m){const u=Object.keys(e);return u.length?u.reduce((f,o)=>(f[o]=q({validations:e[o],state:s,key:o,parentKey:r,resultsCache:t,globalConfig:a,instance:l,externalResults:m}),f),{}):{}}function Ie(e,s,r){const t=g(()=>[s,r].filter(n=>n).reduce((n,i)=>n.concat(Object.values(d(i))),[])),a=g({get(){return e.$dirty.value||(t.value.length?t.value.every(n=>n.$dirty):!1)},set(n){e.$dirty.value=n}}),l=g(()=>{const n=d(e.$silentErrors)||[],i=t.value.filter(c=>(d(c).$silentErrors||[]).length).reduce((c,b)=>c.concat(...b.$silentErrors),[]);return n.concat(i)}),m=g(()=>{const n=d(e.$errors)||[],i=t.value.filter(c=>(d(c).$errors||[]).length).reduce((c,b)=>c.concat(...b.$errors),[]);return n.concat(i)}),u=g(()=>t.value.some(n=>n.$invalid)||d(e.$invalid)||!1),f=g(()=>t.value.some(n=>d(n.$pending))||d(e.$pending)||!1),o=g(()=>t.value.some(n=>n.$dirty)||t.value.some(n=>n.$anyDirty)||a.value),p=g(()=>a.value?f.value||u.value:!1),$=()=>{e.$touch(),t.value.forEach(n=>{n.$touch()})},h=()=>{e.$commit(),t.value.forEach(n=>{n.$commit()})},v=()=>{e.$reset(),t.value.forEach(n=>{n.$reset()})};return t.value.length&&t.value.every(n=>n.$dirty)&&$(),{$dirty:a,$errors:m,$invalid:u,$anyDirty:o,$error:p,$pending:f,$touch:$,$reset:v,$silentErrors:l,$commit:h}}function q(e){let{validations:s,state:r,key:t,parentKey:a,childResults:l,resultsCache:m,globalConfig:u={},instance:f,externalResults:o}=e;const p=a?`${a}.${t}`:t,{rules:$,nestedValidators:h,config:v,validationGroups:n}=Ae(s),i=O(O({},u),v),c=t?g(()=>{const y=d(r);return y?d(y[t]):void 0}):r,b=O({},d(o)||{}),H=g(()=>{const y=d(o);return t?y?d(y[t]):void 0:y}),W=Se($,c,t,m,p,i,f,H,r),E=ke(h,c,p,m,i,f,H),Z={};n&&Object.entries(n).forEach(y=>{let[C,w]=y;Z[C]={$invalid:B(w,E,"$invalid"),$error:B(w,E,"$error"),$pending:B(w,E,"$pending"),$errors:re(w,E,"$errors"),$silentErrors:re(w,E,"$silentErrors")}});const{$dirty:A,$errors:de,$invalid:T,$anyDirty:fe,$error:$e,$pending:S,$touch:k,$reset:me,$silentErrors:pe,$commit:J}=Ie(W,E,l),ve=t?g({get:()=>d(c),set:y=>{A.value=!0;const C=d(r),w=d(o);w&&(w[t]=b[t]),M(C[t])?C[t].value=y:C[t]=y}}):null;t&&i.$autoDirty&&_(c,()=>{A.value||k();const y=d(o);y&&(y[t]=b[t])},{flush:"sync"});async function ge(){return k(),i.$rewardEarly&&(J(),await X()),await X(),new Promise(y=>{if(!S.value)return y(!T.value);const C=_(S,()=>{y(!T.value),C()})})}function he(y){return(l.value||{})[y]}function be(){M(o)?o.value=b:Object.keys(b).length===0?Object.keys(o).forEach(y=>{delete o[y]}):Object.assign(o,b)}return z(O(O(O({},W),{},{$model:ve,$dirty:A,$error:$e,$errors:de,$invalid:T,$anyDirty:fe,$pending:S,$touch:k,$reset:me,$path:p||Te,$silentErrors:pe,$validate:ge,$commit:J},l&&{$getResultsForChild:he,$clearExternalResults:be,$validationGroups:Z}),E))}class De{constructor(){this.storage=new Map}set(s,r,t){this.storage.set(s,{rules:r,result:t})}checkRulesValidity(s,r,t){const a=Object.keys(t),l=Object.keys(r);return l.length!==a.length||!l.every(u=>a.includes(u))?!1:l.every(u=>r[u].$params?Object.keys(r[u].$params).every(f=>d(t[u].$params[f])===d(r[u].$params[f])):!0)}get(s,r){const t=this.storage.get(s);if(!t)return;const{rules:a,result:l}=t,m=this.checkRulesValidity(s,r,a),u=l.$unwatch?l.$unwatch:()=>({});return m?l:{$dirty:l.$dirty,$partial:!0,$unwatch:u}}}const P={COLLECT_ALL:!0,COLLECT_NONE:!1},se=Symbol("vuelidate#injectChildResults"),ae=Symbol("vuelidate#removeChildResults");function Ne(e){let{$scope:s,instance:r}=e;const t={},a=R([]),l=g(()=>a.value.reduce((p,$)=>(p[$]=d(t[$]),p),{}));function m(p,$){let{$registerAs:h,$scope:v,$stopPropagation:n}=$;n||s===P.COLLECT_NONE||v===P.COLLECT_NONE||s!==P.COLLECT_ALL&&s!==v||(t[h]=p,a.value.push(h))}r.__vuelidateInjectInstances=[].concat(r.__vuelidateInjectInstances||[],m);function u(p){a.value=a.value.filter($=>$!==p),delete t[p]}r.__vuelidateRemoveInstances=[].concat(r.__vuelidateRemoveInstances||[],u);const f=K(se,[]);Q(se,r.__vuelidateInjectInstances);const o=K(ae,[]);return Q(ae,r.__vuelidateRemoveInstances),{childResults:l,sendValidationResultsToParent:f,removeValidationResultsFromParent:o}}function ce(e){return new Proxy(e,{get(s,r){return typeof s[r]=="object"?ce(s[r]):g(()=>s[r])}})}let oe=0;function Fe(e,s){var r;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(t=e,e=void 0,s=void 0);let{$registerAs:a,$scope:l=P.COLLECT_ALL,$stopPropagation:m,$externalResults:u,currentVueInstance:f}=t;const o=f||((r=ye())===null||r===void 0?void 0:r.proxy),p=o?o.$options:{};a||(oe+=1,a=`_vuelidate_${oe}`);const $=R({}),h=new De,{childResults:v,sendValidationResultsToParent:n,removeValidationResultsFromParent:i}=o?Ne({$scope:l,instance:o}):{childResults:R({})};if(!e&&p.validations){const c=p.validations;s=R({}),xe(()=>{s.value=o,_(()=>L(c)?c.call(s.value,new ce(s.value)):c,b=>{$.value=q({validations:b,state:s,childResults:v,resultsCache:h,globalConfig:t,instance:o,externalResults:u||o.vuelidateExternalResults})},{immediate:!0})}),t=p.validationsConfig||t}else{const c=M(e)||je(e)?e:z(e||{});_(c,b=>{$.value=q({validations:b,state:s,childResults:v,resultsCache:h,globalConfig:t,instance:o??{},externalResults:u})},{immediate:!0})}return o&&(n.forEach(c=>c($,{$registerAs:a,$scope:l,$stopPropagation:m})),Re(()=>i.forEach(c=>c(a)))),g(()=>O(O({},d($.value)),v.value))}const U=e=>{if(e=d(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let s in e)return!0;return!1}return!!String(e).length},Be=e=>(e=d(e),Array.isArray(e)?e.length:typeof e=="object"?Object.keys(e).length:String(e).length);function V(){for(var e=arguments.length,s=new Array(e),r=0;r<e;r++)s[r]=arguments[r];return t=>(t=d(t),!U(t)||s.every(a=>(a.lastIndex=0,a.test(t))))}V(/^[a-zA-Z]*$/);V(/^[a-zA-Z0-9]*$/);V(/^\d*(\.\d+)?$/);const Ge=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;V(Ge);function Me(e){return s=>!U(s)||Be(s)<=d(e)}function qe(e){return{$validator:Me(e),$message:s=>{let{$params:r}=s;return`The maximum length allowed is ${r.max}`},$params:{max:e,type:"maxLength"}}}function Ue(e){return typeof e=="string"&&(e=e.trim()),U(e)}var G={$validator:Ue,$message:"Value is required",$params:{type:"required"}};const He=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;V(He);V(/(^[0-9]*$)|(^-[0-9]+$)/);V(/^[-]?\d*(\.\d+)?$/);const We={class:"mb-4"},Ze={key:0,class:"text-red-500 text-xs mt-1"},Je={class:"mb-4"},Ke={key:0,class:"text-red-500 text-xs mt-1"},Qe={class:"mb-4"},Xe={class:"flex items-center"},Ye={class:"mb-4"},et={class:"flex items-center justify-between"},tt=["disabled"],rt=Ee({__name:"EntityForm",props:{initialValue:{},submitButtonText:{}},emits:["submit"],setup(e,{emit:s}){var f,o,p,$,h;const r=e,t=s,a=z({id:((f=r.initialValue)==null?void 0:f.id)??0,title:((o=r.initialValue)==null?void 0:o.title)??"",description:((p=r.initialValue)==null?void 0:p.description)??"",published:(($=r.initialValue)==null?void 0:$.published)??!1,published_from:((h=r.initialValue)==null?void 0:h.published_from)??null}),l=g(()=>({title:{required:G,maxLength:qe(50)},description:{required:G},published:{required:G}})),m=Fe(l,a),u=async()=>{await m.value.$validate()&&t("submit",{...a})};return(v,n)=>(F(),I("form",{onSubmit:Ve(u,["prevent"]),class:"max-w-2xl mx-auto p-4"},[x("div",We,[n[5]||(n[5]=x("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"title"}," Title ",-1)),j(x("input",{id:"title","onUpdate:modelValue":n[0]||(n[0]=i=>a.title=i),type:"text",class:Y(["shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",{"border-red-500":d(m).title.$error}])},null,2),[[D,a.title]]),d(m).title.$error?(F(),I("div",Ze,N(d(m).title.$errors[0].$message),1)):ee("",!0)]),x("div",Je,[n[6]||(n[6]=x("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"description"}," Description (Markdown) ",-1)),j(x("textarea",{id:"description","onUpdate:modelValue":n[1]||(n[1]=i=>a.description=i),class:Y(["shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32",{"border-red-500":d(m).description.$error}])},null,2),[[D,a.description]]),d(m).description.$error?(F(),I("div",Ke,N(d(m).description.$errors[0].$message),1)):ee("",!0)]),x("div",Qe,[x("label",Xe,[j(x("input",{"onUpdate:modelValue":n[2]||(n[2]=i=>a.published=i),type:"checkbox",class:"form-checkbox h-4 w-4 text-blue-600"},null,512),[[Ce,a.published]]),n[7]||(n[7]=x("span",{class:"ml-2"},"Published",-1))])]),x("div",Ye,[n[8]||(n[8]=x("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"published_from"}," Published From ",-1)),j(x("input",{id:"published_from","onUpdate:modelValue":n[3]||(n[3]=i=>a.published_from=i),type:"date",class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"},null,512),[[D,a.published_from]])]),x("div",et,[x("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",disabled:d(m).$invalid},N(v.submitButtonText),9,tt),x("button",{type:"button",onClick:n[4]||(n[4]=i=>v.$router.back()),class:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}," Cancel ")])],32))}});export{rt as _};
