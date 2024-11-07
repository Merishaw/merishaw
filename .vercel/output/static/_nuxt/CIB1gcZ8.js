import{u as W}from"./D5V43RPg.js";import{d as H,a as G,C as O,r as w,D as Q,E as Y,F as X,G as Z,H as ee,I as L,J as te,K as B,L as se,M as re,i as ae,N as ne,O as ie,P as C,v as k,z as V,A as K,x as b,Q as z,R as F,S as U,y as oe,t as T,B as le}from"./CzDieITK.js";const I=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ue(a,s){s?s={...I,...s}:s=I;const r=q(s);return r.dispatch(a),r.toString()}const ce=Object.freeze(["prototype","__proto__","constructor"]);function q(a){let s="",r=new Map;const t=e=>{s+=e};return{toString(){return s},getContext(){return r},dispatch(e){return a.replacer&&(e=a.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const n=Object.prototype.toString.call(e);let i="";const d=n.length;d<10?i="unknown:["+n+"]":i=n.slice(8,d-1),i=i.toLowerCase();let c=null;if((c=r.get(e))===void 0)r.set(e,r.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](e):a.ignoreUnknown||this.unkown(e,i);else{let h=Object.keys(e);a.unorderedObjects&&(h=h.sort());let y=[];a.respectType!==!1&&!A(e)&&(y=ce),a.excludeKeys&&(h=h.filter(u=>!a.excludeKeys(u)),y=y.filter(u=>!a.excludeKeys(u))),t("object:"+(h.length+y.length)+":");const o=u=>{this.dispatch(u),t(":"),a.excludeValues||this.dispatch(e[u]),t(",")};for(const u of h)o(u);for(const u of y)o(u)}},array(e,n){if(n=n===void 0?a.unorderedArrays!==!1:n,t("array:"+e.length+":"),!n||e.length<=1){for(const c of e)this.dispatch(c);return}const i=new Map,d=e.map(c=>{const h=q(a);h.dispatch(c);for(const[y,o]of h.getContext())i.set(y,o);return h.toString()});return r=i,d.sort(),this.array(d,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,n){if(t(n),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),A(e)?this.dispatch("[native]"):this.dispatch(e.toString()),a.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),a.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const n=[...e];return this.array(n,a.unorderedSets!==!1)},set(e){t("set:");const n=[...e];return this.array(n,a.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(a.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const J="[native code] }",fe=J.length;function A(a){return typeof a!="function"?!1:Function.prototype.toString.call(a).slice(-fe)===J}var de=Object.defineProperty,he=(a,s,r)=>s in a?de(a,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[s]=r,N=(a,s,r)=>(he(a,typeof s!="symbol"?s+"":s,r),r);class x{constructor(s,r){N(this,"words"),N(this,"sigBytes"),s=this.words=s||[],this.sigBytes=r===void 0?s.length*4:r}toString(s){return(s||pe).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let r=0;r<s.sigBytes;r++){const t=s.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=t<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<s.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=s.words[r>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new x([...this.words])}}const pe={stringify(a){const s=[];for(let r=0;r<a.sigBytes;r++){const t=a.words[r>>>2]>>>24-r%4*8&255;s.push((t>>>4).toString(16),(t&15).toString(16))}return s.join("")}},ye={stringify(a){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let t=0;t<a.sigBytes;t+=3){const e=a.words[t>>>2]>>>24-t%4*8&255,n=a.words[t+1>>>2]>>>24-(t+1)%4*8&255,i=a.words[t+2>>>2]>>>24-(t+2)%4*8&255,d=e<<16|n<<8|i;for(let c=0;c<4&&t*8+c*6<a.sigBytes*8;c++)r.push(s.charAt(d>>>6*(3-c)&63))}return r.join("")}},me={parse(a){const s=a.length,r=[];for(let t=0;t<s;t++)r[t>>>2]|=(a.charCodeAt(t)&255)<<24-t%4*8;return new x(r,s)}},ge={parse(a){return me.parse(unescape(encodeURIComponent(a)))}};class ve{constructor(){N(this,"_data",new x),N(this,"_nDataBytes",0),N(this,"_minBufferSize",0),N(this,"blockSize",512/32)}reset(){this._data=new x,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=ge.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,r){}_process(s){let r,t=this._data.sigBytes/(this.blockSize*4);s?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,n=Math.min(e*4,this._data.sigBytes);if(e){for(let i=0;i<e;i+=this.blockSize)this._doProcessBlock(this._data.words,i);r=this._data.words.splice(0,e),this._data.sigBytes-=n}return new x(r,n)}}class _e extends ve{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}var be=Object.defineProperty,we=(a,s,r)=>s in a?be(a,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[s]=r,De=(a,s,r)=>(we(a,s+"",r),r);const $=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Be=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],P=[];class xe extends _e{constructor(){super(...arguments),De(this,"_hash",new x([...$]))}reset(){super.reset(),this._hash=new x([...$])}_doProcessBlock(s,r){const t=this._hash.words;let e=t[0],n=t[1],i=t[2],d=t[3],c=t[4],h=t[5],y=t[6],o=t[7];for(let u=0;u<64;u++){if(u<16)P[u]=s[r+u]|0;else{const f=P[u-15],S=(f<<25|f>>>7)^(f<<14|f>>>18)^f>>>3,_=P[u-2],E=(_<<15|_>>>17)^(_<<13|_>>>19)^_>>>10;P[u]=S+P[u-7]+E+P[u-16]}const g=c&h^~c&y,l=e&n^e&i^n&i,D=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),m=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),p=o+m+g+Be[u]+P[u],v=D+l;o=y,y=h,h=c,c=d+p|0,d=i,i=n,n=e,e=p+v|0}t[0]=t[0]+e|0,t[1]=t[1]+n|0,t[2]=t[2]+i|0,t[3]=t[3]+d|0,t[4]=t[4]+c|0,t[5]=t[5]+h|0,t[6]=t[6]+y|0,t[7]=t[7]+o|0}finalize(s){super.finalize(s);const r=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(t+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Se(a){return new xe().finalize(a).toString(ye)}function Pe(a,s={}){const r=typeof a=="string"?a:ue(a,s);return Se(r).slice(0,10)}const Ce=a=>{const s=Object.create(null);for(const r in a){const t=a[r];t!==void 0&&(s[r]=t)}return s},Oe=(a,s)=>(r,t)=>(W(()=>a({...Ce(r),...t.attrs},t)),()=>{var e,n;return s?(n=(e=t.slots).default)==null?void 0:n.call(e):null}),Ne=H({name:"Title",inheritAttrs:!1,setup:Oe((a,{slots:s})=>{var r,t,e;return{title:((e=(t=(r=s.default)==null?void 0:r.call(s))==null?void 0:t[0])==null?void 0:e.children)||null}})}),ke=H({name:"Head",inheritAttrs:!1,setup:(a,s)=>()=>{var r,t;return(t=(r=s.slots).default)==null?void 0:t.call(r)}}),Te=a=>a==="defer"||a===!1;function ze(...a){var D;const s=typeof a[a.length-1]=="string"?a.pop():void 0;typeof a[0]!="string"&&a.unshift(s);let[r,t,e={}]=a;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=G(),i=t,d=()=>O.value,c=()=>n.isHydrating?n.payload.data[r]:n.static.data[r];e.server=e.server??!0,e.default=e.default??d,e.getCachedData=e.getCachedData??c,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??O.deep,e.dedupe=e.dedupe??"cancel";const h=e.getCachedData(r,n),y=h!=null;if(!n._asyncData[r]||!e.immediate){(D=n.payload._errors)[r]??(D[r]=O.errorValue);const m=e.deep?w:Q;n._asyncData[r]={data:m(y?h:e.default()),pending:w(!y),error:Y(n.payload._errors,r),status:w("idle"),_default:e.default}}const o={...n._asyncData[r]};delete o._default,o.refresh=o.execute=(m={})=>{if(n._asyncDataPromises[r]){if(Te(m.dedupe??e.dedupe))return n._asyncDataPromises[r];n._asyncDataPromises[r].cancelled=!0}if(m._initial||n.isHydrating&&m._initial!==!1){const v=m._initial?h:e.getCachedData(r,n);if(v!=null)return Promise.resolve(v)}o.pending.value=!0,o.status.value="pending";const p=new Promise((v,f)=>{try{v(i(n))}catch(S){f(S)}}).then(async v=>{if(p.cancelled)return n._asyncDataPromises[r];let f=v;e.transform&&(f=await e.transform(v)),e.pick&&(f=Ue(f,e.pick)),n.payload.data[r]=f,o.data.value=f,o.error.value=O.errorValue,o.status.value="success"}).catch(v=>{if(p.cancelled)return n._asyncDataPromises[r];o.error.value=te(v),o.data.value=B(e.default()),o.status.value="error"}).finally(()=>{p.cancelled||(o.pending.value=!1,delete n._asyncDataPromises[r])});return n._asyncDataPromises[r]=p,n._asyncDataPromises[r]},o.clear=()=>Fe(n,r);const u=()=>o.refresh({_initial:!0}),g=e.server!==!1&&n.payload.serverRendered;{const m=se();if(m&&!m._nuxtOnBeforeMountCbs){m._nuxtOnBeforeMountCbs=[];const f=m._nuxtOnBeforeMountCbs;X(()=>{f.forEach(S=>{S()}),f.splice(0,f.length)}),Z(()=>f.splice(0,f.length))}g&&n.isHydrating&&(o.error.value||h!=null)?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):m&&(n.payload.serverRendered&&n.isHydrating||e.lazy)&&e.immediate?m._nuxtOnBeforeMountCbs.push(u):e.immediate&&u();const p=re();if(e.watch){const f=ee(e.watch,()=>o.refresh());p&&L(f)}const v=n.hook("app:data:refresh",async f=>{(!f||f.includes(r))&&await o.refresh()});p&&L(v)}const l=Promise.resolve(n._asyncDataPromises[r]).then(()=>o);return Object.assign(l,o),l}function Fe(a,s){s in a.payload.data&&(a.payload.data[s]=void 0),s in a.payload._errors&&(a.payload._errors[s]=O.errorValue),a._asyncData[s]&&(a._asyncData[s].data.value=void 0,a._asyncData[s].error.value=O.errorValue,a._asyncData[s].pending.value=!1,a._asyncData[s].status.value="idle"),s in a._asyncDataPromises&&(a._asyncDataPromises[s]&&(a._asyncDataPromises[s].cancelled=!0),a._asyncDataPromises[s]=void 0)}function Ue(a,s){const r={};for(const t of s)r[t]=a[t];return r}function Me(a,s,r){const[t={},e]=typeof s=="string"?[{},s]:[s,r],n=ae(()=>C(a)),i=t.key||Pe([e,typeof n.value=="string"?n.value:"",...He(t)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);const d=i===e?"$f"+i:i;if(!t.baseURL&&typeof n.value=="string"&&n.value[0]==="/"&&n.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:h,default:y,transform:o,pick:u,watch:g,immediate:l,getCachedData:D,deep:m,dedupe:p,...v}=t,f=ne({...ie,...v,cache:typeof t.cache=="boolean"?void 0:t.cache}),S={server:c,lazy:h,default:y,transform:o,pick:u,immediate:l,getCachedData:D,deep:m,dedupe:p,watch:g===!1?[]:[f,n,...g||[]]};let _;return ze(d,()=>{var j;(j=_==null?void 0:_.abort)==null||j.call(_,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),_=typeof AbortController<"u"?new AbortController:{};const R=C(t.timeout);let M;return R&&(M=setTimeout(()=>_.abort(new DOMException("Request aborted due to timeout.","AbortError")),R),_.signal.onabort=()=>clearTimeout(M)),(t.$fetch||globalThis.$fetch)(n.value,{signal:_.signal,...f}).finally(()=>{clearTimeout(M)})},S)}function He(a){var r;const s=[((r=C(a.method))==null?void 0:r.toUpperCase())||"GET",C(a.baseURL)];for(const t of[a.params||a.query]){const e=C(t);if(!e)continue;const n={};for(const[i,d]of Object.entries(e))n[C(i)]=C(d);s.push(n)}return s}const Ee={class:"mt-8 px-8"},Re={class:"flex flex-col items-center"},je={class:"flex flex-col items-center justify-center"},Le={key:0},Ve={key:1},Ke={key:2,class:"mt-4 bg-gray-400/15 rounded-2xl p-2"},Ie={key:3},Je=H({__name:"index",setup(a){let s=w(""),r=w(!1),t=w(!1);const e=w(""),n=w(""),i=w(""),d=w(""),c=async()=>{if(e.value.length>=3&&n.value.length>=3&&i.value.length==10){r.value=!0;const g=await Me("/api/submit",{method:"get",params:{firstName:e.value,lastName:n.value,phone:i.value,email:d.value}},"$pqtWcjQkdb");r.value=!1;const l=JSON.stringify(g);console.log(l),l.includes("success")?s.value="Thank you for your participation! You will receive further instructions via sms.":s.value="Oops! Seems something went wrong. Please try again later.",t.value=!0,setTimeout(()=>{t.value=!1,e.value="",n.value="",i.value="",d.value="",r.value=!1,s.value=""},5e3)}(e.value.length<3||n.value.length<3)&&(s.value="Please double check your name",t.value=!0,setTimeout(()=>{t.value=!1,s.value=""},5e3)),(i.value.length<10||i.value.length>10)&&(s.value="Ensure your phone number is 10 digits",t.value=!0,setTimeout(()=>{t.value=!1,s.value=""},5e3))};function h(g){e.value=g.target.value}function y(g){n.value=g.target.value}function o(g){i.value=g.target.value}function u(g){d.value=g.target.value}return(g,l)=>{const D=Ne,m=ke;return T(),k("div",null,[V(m,null,{default:K(()=>[V(D,null,{default:K(()=>l[5]||(l[5]=[le("Merishaw School")])),_:1})]),_:1}),b("div",Ee,[b("form",Re,[l[6]||(l[6]=b("p",{class:"greeting"},"Hi there!",-1)),l[7]||(l[7]=b("p",{class:"regular-text my-8"},"Thank you for showing interest in us. Please fill out the form below to stand a chance of winning a gift from us.",-1)),z(b("input",{name:"firstName",type:"text",placeholder:"First Name",class:"input-decor","onUpdate:modelValue":l[0]||(l[0]=p=>U(e)?e.value=p:null),onInput:h},null,544),[[F,B(e),void 0,{trim:!0}]]),z(b("input",{name:"lastName",type:"text",placeholder:"Last Name",class:"input-decor","onUpdate:modelValue":l[1]||(l[1]=p=>U(n)?n.value=p:null),onInput:y},null,544),[[F,B(n),void 0,{trim:!0}]]),z(b("input",{name:"phone",type:"text",placeholder:"Phone (eg 0731303350)",class:"input-decor","onUpdate:modelValue":l[2]||(l[2]=p=>U(i)?i.value=p:null),onInput:o},null,544),[[F,B(i),void 0,{trim:!0}]]),z(b("input",{name:"email",type:"email",placeholder:"Email (Optional)",class:"input-decor","onUpdate:modelValue":l[3]||(l[3]=p=>U(d)?d.value=p:null),onInput:u},null,544),[[F,B(d),void 0,{trim:!0}]])]),b("div",je,[B(r)==!1?(T(),k("div",Le,[b("button",{class:"btn",onClick:c},l[8]||(l[8]=[b("div",{class:"btn-text"},"Submit",-1)]))])):(T(),k("div",Ve,[b("button",{class:"loading-btn",onClick:l[4]||(l[4]=()=>{})},l[9]||(l[9]=[b("div",{class:"btn-text"},"Submitting",-1)]))])),B(t)==!0?(T(),k("div",Ke,[b("div",null,oe(B(s)),1)])):(T(),k("div",Ie)),l[10]||(l[10]=b("div",{class:"h-12"},null,-1))])])])}}});export{Je as default};