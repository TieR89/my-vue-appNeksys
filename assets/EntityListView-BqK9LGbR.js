import{d as st,c as H,a,t as A,o as T,r as G,s as at,b as ut,e as lt,f as tt,w as et,g as ct,v as dt,u as Q,F as ft,h as ht,i as pt,j as mt,k as $t,l as nt,n as yt}from"./index-DhWPw_WE.js";import{u as vt}from"./entity-CVL6snHz.js";const gt={class:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full",id:"modal"},bt={class:"relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"},_t={class:"mt-3 text-center"},xt={class:"mt-2 px-7 py-3"},wt={class:"text-sm text-gray-500"},Dt={class:"items-center px-4 py-3"},Mt=st({__name:"DeleteConfirmationModal",props:{entity:{}},emits:["confirm","cancel"],setup(D){return(M,m)=>{var v;return T(),H("div",gt,[a("div",bt,[a("div",_t,[m[2]||(m[2]=a("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," Confirm Delete ",-1)),a("div",xt,[a("p",wt,' Are you sure you want to delete "'+A((v=M.entity)==null?void 0:v.title)+'"? This action cannot be undone. ',1)]),a("div",Dt,[a("button",{onClick:m[0]||(m[0]=x=>M.$emit("confirm")),class:"px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 mb-2"}," Delete "),a("button",{onClick:m[1]||(m[1]=x=>M.$emit("cancel")),class:"px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"}," Cancel ")])])])])}}});var St=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kt(D){return D&&D.__esModule&&Object.prototype.hasOwnProperty.call(D,"default")?D.default:D}var rt={exports:{}};(function(D,M){(function(m,v){D.exports=v()})(St,function(){var m=1e3,v=6e4,x=36e5,U="millisecond",k="second",S="minute",O="hour",w="day",L="week",g="month",B="quarter",b="year",d="date",F="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,R=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,it={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],t=r%100;return"["+r+(n[(t-20)%10]||n[t]||n[0])+"]"}},Z=function(r,n,t){var s=String(r);return!s||s.length>=n?r:""+Array(n+1-s.length).join(t)+r},ot={s:Z,z:function(r){var n=-r.utcOffset(),t=Math.abs(n),s=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+Z(s,2,"0")+":"+Z(e,2,"0")},m:function r(n,t){if(n.date()<t.date())return-r(t,n);var s=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(s,g),i=t-e<0,o=n.clone().add(s+(i?-1:1),g);return+(-(s+(t-e)/(i?e-o:o-e))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:g,y:b,w:L,d:w,D:d,h:O,m:S,s:k,ms:U,Q:B}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},V="en",Y={};Y[V]=it;var K="$isDayjsObject",q=function(r){return r instanceof J||!(!r||!r[K])},z=function r(n,t,s){var e;if(!n)return V;if(typeof n=="string"){var i=n.toLowerCase();Y[i]&&(e=i),t&&(Y[i]=t,e=i);var o=n.split("-");if(!e&&o.length>1)return r(o[0])}else{var l=n.name;Y[l]=n,e=l}return!s&&e&&(V=e),e||!s&&V},f=function(r,n){if(q(r))return r.clone();var t=typeof n=="object"?n:{};return t.date=r,t.args=arguments,new J(t)},u=ot;u.l=z,u.i=q,u.w=function(r,n){return f(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var J=function(){function r(t){this.$L=z(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[K]=!0}var n=r.prototype;return n.parse=function(t){this.$d=function(s){var e=s.date,i=s.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var o=e.match($);if(o){var l=o[2]-1||0,c=(o[7]||"0").substring(0,3);return i?new Date(Date.UTC(o[1],l,o[3]||1,o[4]||0,o[5]||0,o[6]||0,c)):new Date(o[1],l,o[3]||1,o[4]||0,o[5]||0,o[6]||0,c)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==F},n.isSame=function(t,s){var e=f(t);return this.startOf(s)<=e&&e<=this.endOf(s)},n.isAfter=function(t,s){return f(t)<this.startOf(s)},n.isBefore=function(t,s){return this.endOf(s)<f(t)},n.$g=function(t,s,e){return u.u(t)?this[s]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,s){var e=this,i=!!u.u(s)||s,o=u.p(t),l=function(E,y){var C=u.w(e.$u?Date.UTC(e.$y,y,E):new Date(e.$y,y,E),e);return i?C:C.endOf(w)},c=function(E,y){return u.w(e.toDate()[E].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(y)),e)},h=this.$W,p=this.$M,_=this.$D,N="set"+(this.$u?"UTC":"");switch(o){case b:return i?l(1,0):l(31,11);case g:return i?l(1,p):l(0,p+1);case L:var j=this.$locale().weekStart||0,W=(h<j?h+7:h)-j;return l(i?_-W:_+(6-W),p);case w:case d:return c(N+"Hours",0);case O:return c(N+"Minutes",1);case S:return c(N+"Seconds",2);case k:return c(N+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,s){var e,i=u.p(t),o="set"+(this.$u?"UTC":""),l=(e={},e[w]=o+"Date",e[d]=o+"Date",e[g]=o+"Month",e[b]=o+"FullYear",e[O]=o+"Hours",e[S]=o+"Minutes",e[k]=o+"Seconds",e[U]=o+"Milliseconds",e)[i],c=i===w?this.$D+(s-this.$W):s;if(i===g||i===b){var h=this.clone().set(d,1);h.$d[l](c),h.init(),this.$d=h.set(d,Math.min(this.$D,h.daysInMonth())).$d}else l&&this.$d[l](c);return this.init(),this},n.set=function(t,s){return this.clone().$set(t,s)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,s){var e,i=this;t=Number(t);var o=u.p(s),l=function(p){var _=f(i);return u.w(_.date(_.date()+Math.round(p*t)),i)};if(o===g)return this.set(g,this.$M+t);if(o===b)return this.set(b,this.$y+t);if(o===w)return l(1);if(o===L)return l(7);var c=(e={},e[S]=v,e[O]=x,e[k]=m,e)[o]||1,h=this.$d.getTime()+t*c;return u.w(h,this)},n.subtract=function(t,s){return this.add(-1*t,s)},n.format=function(t){var s=this,e=this.$locale();if(!this.isValid())return e.invalidDate||F;var i=t||"YYYY-MM-DDTHH:mm:ssZ",o=u.z(this),l=this.$H,c=this.$m,h=this.$M,p=e.weekdays,_=e.months,N=e.meridiem,j=function(y,C,I,P){return y&&(y[C]||y(s,i))||I[C].slice(0,P)},W=function(y){return u.s(l%12||12,y,"0")},E=N||function(y,C,I){var P=y<12?"AM":"PM";return I?P.toLowerCase():P};return i.replace(R,function(y,C){return C||function(I){switch(I){case"YY":return String(s.$y).slice(-2);case"YYYY":return u.s(s.$y,4,"0");case"M":return h+1;case"MM":return u.s(h+1,2,"0");case"MMM":return j(e.monthsShort,h,_,3);case"MMMM":return j(_,h);case"D":return s.$D;case"DD":return u.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return j(e.weekdaysMin,s.$W,p,2);case"ddd":return j(e.weekdaysShort,s.$W,p,3);case"dddd":return p[s.$W];case"H":return String(l);case"HH":return u.s(l,2,"0");case"h":return W(1);case"hh":return W(2);case"a":return E(l,c,!0);case"A":return E(l,c,!1);case"m":return String(c);case"mm":return u.s(c,2,"0");case"s":return String(s.$s);case"ss":return u.s(s.$s,2,"0");case"SSS":return u.s(s.$ms,3,"0");case"Z":return o}return null}(y)||o.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,s,e){var i,o=this,l=u.p(s),c=f(t),h=(c.utcOffset()-this.utcOffset())*v,p=this-c,_=function(){return u.m(o,c)};switch(l){case b:i=_()/12;break;case g:i=_();break;case B:i=_()/3;break;case L:i=(p-h)/6048e5;break;case w:i=(p-h)/864e5;break;case O:i=p/x;break;case S:i=p/v;break;case k:i=p/m;break;default:i=p}return e?i:u.a(i)},n.daysInMonth=function(){return this.endOf(g).$D},n.$locale=function(){return Y[this.$L]},n.locale=function(t,s){if(!t)return this.$L;var e=this.clone(),i=z(t,s,!0);return i&&(e.$L=i),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),X=J.prototype;return f.prototype=X,[["$ms",U],["$s",k],["$m",S],["$H",O],["$W",w],["$M",g],["$y",b],["$D",d]].forEach(function(r){X[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),f.extend=function(r,n){return r.$i||(r(n,J,f),r.$i=!0),f},f.locale=z,f.isDayjs=q,f.unix=function(r){return f(1e3*r)},f.en=Y[V],f.Ls=Y,f.p={},f})})(rt);var Ot=rt.exports;const Ct=kt(Ot),Tt={class:"max-w-6xl mx-auto p-4"},Yt={class:"flex justify-between items-center mb-6"},jt={class:"mb-6"},Et={key:0,class:"text-center py-4"},Ht={key:1,class:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert"},Lt={class:"block sm:inline"},Nt={key:2,class:"bg-white shadow-md rounded my-6"},At={class:"min-w-full table-auto"},Ft={class:"px-4 py-2"},Vt={class:"px-4 py-2"},Wt={class:"max-w-xs overflow-hidden text-ellipsis"},It={class:"px-4 py-2"},Ut={class:"px-4 py-2"},Bt={class:"px-4 py-2"},zt={class:"flex space-x-2"},Jt=["onClick"],qt=st({__name:"EntityListView",setup(D){const M=vt(),m=G({title:""}),v=G(!1),x=G(null),{entities:U,loading:k,error:S}=at(M),O=ut(()=>M.filteredEntities(m.value)),w=b=>Ct(b).format("YYYY-MM-DD"),L=b=>{x.value=b,v.value=!0},g=async()=>{x.value&&(await M.deleteEntity(x.value.id),v.value=!1,x.value=null)},B=()=>{v.value=!1,x.value=null};return lt(async()=>{await M.fetchEntities()}),(b,d)=>{const F=$t("router-link");return T(),H("div",Tt,[a("div",Yt,[d[2]||(d[2]=a("h1",{class:"text-2xl font-bold"},"Entities",-1)),tt(F,{to:"/entity/create",class:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"},{default:et(()=>d[1]||(d[1]=[nt(" Create New ")])),_:1})]),a("div",jt,[ct(a("input",{"onUpdate:modelValue":d[0]||(d[0]=$=>m.value.title=$),type:"text",placeholder:"Filter by title...",class:"shadow appearance-none border rounded w-full md:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"},null,512),[[dt,m.value.title]])]),Q(k)?(T(),H("div",Et,d[3]||(d[3]=[a("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"},null,-1)]))):Q(S)?(T(),H("div",Ht,[a("span",Lt,A(Q(S)),1)])):(T(),H("div",Nt,[a("table",At,[d[5]||(d[5]=a("thead",null,[a("tr",{class:"bg-gray-100"},[a("th",{class:"px-4 py-2"},"Title"),a("th",{class:"px-4 py-2"},"Description"),a("th",{class:"px-4 py-2"},"Status"),a("th",{class:"px-4 py-2"},"Published From"),a("th",{class:"px-4 py-2"},"Actions")])],-1)),a("tbody",null,[(T(!0),H(ft,null,ht(O.value,$=>(T(),H("tr",{key:$.id,class:"border-b hover:bg-gray-50"},[a("td",Ft,A($.title),1),a("td",Vt,[a("div",Wt,A($.description.substring(0,100))+"... ",1)]),a("td",It,[a("span",{class:yt([{"bg-green-100 text-green-800":$.published,"bg-gray-100 text-gray-800":!$.published},"px-2 inline-flex text-xs leading-5 font-semibold rounded-full"])},A($.published?"Published":"Draft"),3)]),a("td",Ut,A($.published_from?w($.published_from):"Not set"),1),a("td",Bt,[a("div",zt,[tt(F,{to:`/entity/edit/${$.id}`,class:"text-blue-600 hover:text-blue-900"},{default:et(()=>d[4]||(d[4]=[nt(" Edit ")])),_:2},1032,["to"]),a("button",{onClick:R=>L($),class:"text-red-600 hover:text-red-900"}," Delete ",8,Jt)])])]))),128))])])])),v.value?(T(),pt(Mt,{key:3,entity:x.value,onConfirm:g,onCancel:B},null,8,["entity"])):mt("",!0)])}}});export{qt as default};
