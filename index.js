"use strict";function t(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var r=t(require("bitcoinsource"));var e=t(require("axios"));function n(t,r,e,n,a,i,s){try{var o=t[i](s);var u=o.value}catch(t){return void e(t)}o.done?r(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var r=this,e=arguments;return new Promise((function(a,i){var s=t.apply(r,e);function o(t){n(s,a,i,o,u,"next",t)}function u(t){n(s,a,i,o,u,"throw",t)}o(void 0)}))}}function i(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function s(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?s(Object(e),!0).forEach((function(r){i(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function u(t,r){if(null==t)return{};var e={};var n=Object.keys(t);var a,i;for(i=0;i<n.length;i++)a=n[i],r.indexOf(a)>=0||(e[a]=t[a]);return e}function c(t,r){if(null==t)return{};var e=u(t,r);var n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(e[n]=t[n])}return e}function v(t,r){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function p(t){var r=v(t,"string");return"symbol"==typeof r?r:String(r)}var h=process.env.BC_CHAIN||"BSV";var d=process.env.BC_CHAIN||"testnet";var l=process.env.BC_LOCAL_BBS||!1;var f=process.env.BC_DUST_LIMIT||4e3;var g=process.env.BC_DEFAULT_FEE||("BSV"===h?500:1e3);var _=process.env.BC_SCRIPT_CHUNK_SIZE||479;var m;var w;process.env.BC_BBS_URL?(w="http://".concat(process.env.BC_BBS_URL),m="ws://".concat(process.env.BC_BBS_URL)):(w=l?"http://localhost:3000":"https://bbs.bitcoincomputer.io",m=l?"ws://localhost:3000":"wss://bbs.bitcoincomputer.io");var y={CHAIN:h,NETWORK:d,MIN_NON_DUST_AMOUNT:f,SCRIPT_CHUNK_SIZE:_,UN_P2SH_URL:w,WS_URL:m,DEFAULT_FEE:g};var S=["_id","_rev","_owners","_amount","__vouts","__txId","__cls","__func","__index","kind","_args"];var O=t=>"object"==typeof t?Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1]:Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();var b=t=>["undefined","number","string","boolean","Null"].includes(O(t));var x=t=>b(t)||["Array","Object"].includes(O(t));var P=t=>"Object"===O(t)&&Object.keys(t).every(t=>!isNaN(parseInt(t,10)));var I=(t,r)=>{if(!x(t)||!x(r))throw new Error("Unsupported data types for deep equals: ".concat(O(t)," & ").concat(O(r)));return O(t)===O(r)&&(b(t)&&b(r)?t===r:t&&r&&Object.entries(t).every(t=>{var[e,n]=t;return I(r[e],n)})&&Object.entries(r).every(r=>{var[e,n]=r;return I(t[e],n)}))};var N=t=>{if(b(t))return t;if("Array"===O(t))return t.map(N);if("Object"===O(t)){var r=Object.keys(t).reduce((r,e)=>(r[e]=N(t[e]),r),{});var e=Object.create(Object.getPrototypeOf(t));return Object.assign(e,r)}throw new Error("Unsupported data type for clone: ".concat(O(t)))};var k=(t,r)=>t.reduce((t,e,n)=>{var[a,i]=t;return r(e,n)?[[...a,e],i]:[a,[...i,e]]},[[],[]]);var D=(t,r)=>Object.fromEntries(Object.entries(t).map(t=>{var[e,n]=t;return[e,r(n)]}));var E=(t,r)=>Object.fromEntries(Object.entries(t).filter(t=>{var[,e]=t;return r(e)}));var T=t=>b(t)?t:Object.entries(t).reduce((t,r)=>{var[e,n]=r;var a=T(n);return P(a)?Object.entries(a).forEach(r=>{var[n,a]=r;t["".concat(e,"_").concat(n)]=a}):t[e]=a,t},{});var j=0;var C=()=>"__temp__:".concat(j++);var B=t=>{if("Array"===O(t))t.map(B);else if("Object"===O(t)){var r=C();t._id=t._id||r,t._rev=t._rev||r,Object.values(t).map(B)}};var A=(t,r,e)=>{if(!b(t)){var n=r.findIndex(r=>r===t._rev);-1!==n&&(t._rev="".concat(e,":").concat(n)),"Array"===O(t)?t.map(t=>A(t,r,e)):"Object"===O(t)&&Object.values(t).map(t=>A(t,r,e))}};var K=(t,r)=>{if(!b(t)&&"undefined"!==O(r)){if(t._rev===r)return t;if("Array"===O(t))return t.find(t=>K(t,r));if("Object"===O(t))return Object.values(t).find(t=>K(t,r));throw new Error("Unsupported type ".concat(O(t)," in findByRev"))}};var U=(t,r)=>{if("Array"===O(t))return t.map(t=>U(t,r));if("Object"===O(t)){var e=Object.entries(t).reduce((t,e)=>{var[n,a]=e;var i=S.includes(n)?a:U(a,r);return o(o({},t),{[n]:i})},{});var n=void 0!==t._amount?t._amount:y.MIN_NON_DUST_AMOUNT;var a=void 0!==t._owners?t._owners:[r];return o(o({},e),{_amount:n,_owners:a})}return t};var R=t=>{"Array"===O(t)?t.map(R):"Object"===O(t)&&(void 0!==t._owners&&(t._owners=JSON.stringify(t._owners)),Object.values(t).map(R))};var H=t=>{"Array"===O(t)?t.map(H):"Object"===O(t)&&(void 0!==t._owners&&(t._owners=JSON.parse(t._owners)),Object.values(t).map(H))};var J=t=>{var r={[t._id]:Object.entries(t).reduce((t,r)=>{var[e,n]=r;return S.includes(e)?o(o({},t),{[e]:n}):b(n)?o(o({},t),{["__basic__".concat(e)]:n}):o(o({},t),{[e]:n._id})},{})};return Object.values(t).filter(t=>!b(t)).reduce((t,r)=>o(o({},t),J(r)),r)};var F=(t,r)=>(t[r].__contains=Object.entries(t[r]).reduce((r,e)=>{var[n,a]=e;return["__contains"].concat(S).includes(n)?r:"__change"===n?"new"===a||"diff"===a||r:F(t,a)[a].__contains||r},!1),t);var M=(t,r)=>Object.fromEntries(Object.entries(r).map(r=>{var[e,n]=r;var a=t[e];var i;return n.__change=(i=a)?I(i,n)?"same":"diff":"new",[e,n]}));var L=t=>Object.fromEntries(Object.entries(t).filter(t=>{var[r]=t;return!r.startsWith("__basic__")}));var V=t=>t.reduce((t,r,e)=>o(o({},t),{[r._id]:e}),{});var z=(t,r)=>t.map(t=>Object.entries(t).reduce((t,e)=>{var[n,a]=e;var i="undefined"!==O(r[a])?r[a]:a;return o(o({},t),{[n]:i})},{}));var W=(t,r)=>{B(r);var e=r._id;var n=N(t);var a=N(r);R(n),R(a);var i=T(n);var s=T(a);var u=J(i);var c=J(s);var v=M(u,c);var p=D(v,L);var h=F(p,e);var{index:d}=h;delete h.index;var l=D(h,t=>t._rev);var f=E(h,t=>t.__contains||Object.values(d).includes(t._id));var g=Object.values(f);var[_,m]=k(g,t=>"new"===t.__change);var w=[...m,..._];var y=V(w);var S=z(w,y);var[O]=z([d],y);var b=m.map(t=>t._rev);S.concat([O]).forEach(t=>{delete t._id,delete t._rev,delete t.__change,delete t.__contains});var x=S.map(t=>Object.entries(t).reduce((t,r)=>{var[e,n]=r;return o(o({},t),{[e]:l[n]||n})},{}));return H(x),[b,x,O]};var q=t=>({smartArgs:t.filter(t=>t._rev),dumbArgs:t.map(t=>t._rev?"__":t)});var Z=(t,r)=>r.map(r=>"__"===r?t.shift():r);r.versionGuard=()=>!0,r.Networks.defaultNetwork=r.Networks[y.NETWORK];class G{constructor(t){this.kind=t}toJSON(){return{}}}function Q(t){return{writable:!0,value:t}}function X(t,r,e){var{[t]:n}=e;return o({[r]:n},c(e,[t].map(p)))}var{PublicKey:Y,Address:$,Transaction:tt}=r;class rt extends G{constructor(t,r){super("pkh"),this.address=t,this._amount=r}static fromPublicKeyHashInput(t){var{output:r}=t;return new this(r.script.toAddress(),r.satoshis)}toJSON(){return{kind:"pkh",address:this.address.toString(),amount:this._amount}}static isJSON(t){return t.address&&t.amount}static fromJSON(t){return new this(new $(t.address),t.amount)}}class et extends G{constructor(t){super("return"),this.data=t||""}getData(){return this.data}toJSON(){return{kind:"return",data:this.data}}static isJSON(t){return!!t.data}static fromJSON(t){return new this(t.data)}}var{PublicKey:nt,Signature:at,Script:it,Opcode:st}=r;function ot(t,r){var e=[];var n=0;for(;n<t.length;)e.push(t.slice(n,n+r)),n+=r;return e}class ut extends it{static outScriptFromData(t){var{kind:r,_owners:e,_amount:n,__vouts:a,__txId:i}=t,s=c(t,["kind","_owners","_amount","__vouts","__txId"]);var o=ot(Buffer.from(JSON.stringify(s)),y.SCRIPT_CHUNK_SIZE);return o[o.length-1].byteLength>=y.SCRIPT_CHUNK_SIZE&&ot(o.pop(),y.SCRIPT_CHUNK_SIZE).forEach(t=>{o.push(t)}),o.map(t=>{var r=new ut;return r.add("OP_1"),e.forEach(t=>r.add(t.toBuffer())),r.add("OP_".concat(e.length)),r.add("OP_CHECKMULTISIG"),r.add(t),r.add("OP_DROP"),{redeemScript:r,chunk:t}})}getData(){return this.isDbDataScript()?JSON.parse(this.chunks[this.chunks.length-2].buf.toString()):{}}getPublicKeys(){if(this.isDbDataScript())return this.chunks.slice(1,this.chunks.length-4).map(t=>new nt(t.buf));throw new Error("Cannot get owners from non-data script")}isDbDataScript(){return!!(this.chunks.length>=5&&this.chunks[0].opcodenum===st.OP_1&&this.chunks[1].buf&&[20,33].includes(this.chunks[1].buf.length)&&this.chunks[this.chunks.length-3].opcodenum===st.OP_CHECKMULTISIG&&this.chunks[this.chunks.length-2].buf&&this.chunks[this.chunks.length-1].opcodenum===st.OP_DROP)}static isP2shScript(t){return!(3!==t.chunks.length||t.chunks[0].opcodenum!==st.OP_0||!t.chunks[1].buf||!t.chunks[2].buf)}static redeemScriptFromP2shScript(t){if(!this.isP2shScript(t))throw new Error("not a p2sh script");var r=new it(t.chunks[2].buf);var e=new this;return e.chunks=r.chunks,e}static fromScript(t){var r=new it(t);var e=new ut;return e.chunks=r.chunks,e}}var{PublicKey:ct,Transaction:vt,Script:pt}=r;class ht extends G{constructor(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super("script"),Object.assign(this,t)}getData(t){return this[t]}getSerializeData(){var t=c(this,["kind","_owners","_amount"]);return Buffer.from(JSON.stringify(t))}static fromMultiSigScriptHashInput(t){var{_scriptBuffer:r}=t;var e=ut.fromBuffer(r);var{redeemScript:n=ut.redeemScriptFromP2shScript(e)}=t;return this.fromRedeemScript(n)}static fromRedeemScript(t){return this.fromRedeemScripts([t])}static fromRedeemScripts(t){var r=t.map(t=>t.chunks[t.chunks.length-2].buf);var e=Buffer.concat(r);var n=JSON.parse(e.toString());return Object.assign(new this,o({kind:"script",_owners:t[0].getPublicKeys(),_amount:y.MIN_NON_DUST_AMOUNT},n))}static addVouts(t){var r=0;return t.map(t=>{var e="script"===t.kind?ut.outScriptFromData(t).length:1;return t.__vouts=Array(e).fill(r).map((t,r)=>t+r),r+=e,t})}toJSON(){return o(o({},this),{},{kind:"script",_owners:(this._owners||[]).map(t=>t.toString())})}static isJSON(t){return"script"===t.kind}static fromJSON(t){var r=N(t);return void 0!==r._owners&&(r._owners=r._owners.map(t=>new ct(t))),new ht(r)}}class dt{constructor(t){this.db=t}construct(t,r){var e=this;return a((function*(){return a((function*(){var[n,a]=N([r,{}]);var i=new t(...r);var{smartArgs:s,dumbArgs:u}=q(n);var{smartArgs:c}=q(r);var v=o(o(o({},s),{obj:a}),{},{_id:"index"});var p=o(o(o({},c),{obj:i}),{},{_id:"index"});var[h,d,l]=W(v,p);void 0!==d[0]&&(d[0].__func="constructor",d[0]._args=u,d[0].__index=l,d[0].__cls=t.toString());var f=d.map(ht.fromJSON);var g=yield e.db.update(h,f);var _=g[0].split(":")[0];A([...c,i],h,_);var m=g[c.length];return i._rev=m,i._id=m,i}))()}))()}call(t,r,e){var n=this;return a((function*(){var[a,i]=N([e,t]);var s=Reflect.apply(t[r],t,e);var{smartArgs:u,dumbArgs:c}=q(a);var{smartArgs:v}=q(e);var p=o(o(o({},u),{obj:i}),{},{_id:"index"});var h=o(o(o({},v),{obj:t}),{},{_id:"index"});"object"===O(s)&&(h.res=s);var[d,l,f]=W(p,h);void 0!==l[0]&&(l[0].__func=r,l[0]._args=c,l[0].__index=f);var g=l.map(ht.fromJSON);var _=yield n.db.update(d,g);var m="object"===O(s)?[...v,t,s]:[...v,t];var w=_[0].split(":")[0];A(m,d,w);var y=_[v.length];return"Object"===O(s)&&(s._rev=y,s._id=y),s}))()}get(t,r){var e=this;return"function"==typeof t[r]?function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return e.call(t,r,a)}:Reflect.get(t,r)}}var{PublicKey:lt,Address:ft}=r;class gt extends G{constructor(t){super("change"),this.address=t}toJSON(){return{kind:"change",address:this.address.toString()}}static isJSON(t){return t.address}static fromJSON(t){return new this(new ft(t.address))}}var{Address:_t,Transaction:mt,PublicKey:wt,Script:yt}=r;var St=new Map;class Ot{constructor(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.CHAIN;var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.NETWORK;var e=arguments.length>2?arguments[2]:void 0;this.chain=t,this.network=r,e&&(this.wocApiKey=e)}getBaseUrl(){if("BSV"===this.chain){var t="livenet"===this.network?"main":"test";return"https://api.whatsonchain.com/v1/bsv/".concat(t)}var r="livenet"===this.network?"rest":"trest";return"https://".concat(r,".bitcoin.com/v2")}getRequestHeaders(){return"BSV"===this.chain&&this.wocApiKey?{"woc-api-key":this.wocApiKey}:{}}unwrap(t){return a((function*(){try{return(yield t).data}catch(t){var{message:r,config:e,response:n}=t;var{url:a,method:i,data:s}=e;var o;try{o=JSON.parse(s)}catch(t){o=null}var u=o&&o.txhex?new mt(o.txhex):null;throw t.message="Communication Error\n\nmessage\t".concat(r,"\nrequest\t").concat(i," ").concat(a,"\n").concat(u?"transaction\t ".concat(JSON.stringify(u.toJSON(),null,2)):"post"!==i||u?"":"data\t".concat(s),"\n").concat(n?"response\t".concat(JSON.stringify(n.data)):""),t}}))()}get(t){var r=arguments,n=this;return a((function*(){var a=r.length>1&&void 0!==r[1]&&r[1]?"":n.getBaseUrl();return n.unwrap(e.get("".concat(a).concat(t),{headers:n.getRequestHeaders()}))}))()}post(t,r){var n=arguments,i=this;return a((function*(){var a=n.length>2&&void 0!==n[2]&&n[2]?"":i.getBaseUrl();return i.unwrap(e.post("".concat(a).concat(t),r,{headers:i.getRequestHeaders()}))}))()}getBalance(t){var r=this;return a((function*(){switch(r.chain){case"BSV":var e="/address/".concat(t.toString(),"/balance");var{confirmed:n,unconfirmed:a}=yield r.get(e);return parseInt(n,10)+parseInt(a,10);case"BCH":var i="/address/details/".concat(t.toString());var{balanceSat:s,unconfirmedBalanceSat:o}=yield r.get(i);return parseInt(s,10)+parseInt(o,10);default:throw new Error("chain is not set in getBalance")}}))()}getTransaction(t){var r=this;return a((function*(){var e=yield r.getRawTransaction(t);return new mt(e)}))()}getTransactionWithSpendingData(t){var r=this;return a((function*(){if("testnet"===r.network&&"BSV"===r.chain)throw new Error("Restclient.getTransactionWithSpendingData is not supported on BSV testnet");switch([t]=t.split(":"),r.chain){case"BSV":var e="https://api.blockchair.com/bitcoin-sv/dashboards/transaction/".concat(t);var{data:n}=yield r.get(e,!0);var{transaction:a,inputs:i,outputs:s}=n[t];return{hex:"",txid:a.hash,hash:a.hash,version:a.version,size:a.size,locktime:a.lock_time,vin:i,vout:s.map(t=>({value:t.value,n:t.index,scriptPubKey:t.script_hex,spentTxId:t.spending_transaction_id,spentIndex:t.spending_index})),blockhash:"unknown",confirmations:"unknown",time:"unknown",blocktime:"unknown"};case"BCH":return r.get("/transaction/details/".concat(t));default:throw new Error("chain is not set in getTransactionWithSpendingData")}}))()}getRawTransaction(t){var r=this;return a((function*(){[t]=t.split(":");var n=St.get(t);if(n)return n;var a="livenet"===r.network?"main":"test";var i=yield r.unwrap(e.get("".concat(y.UN_P2SH_URL,"/tx/").concat(r.chain,"/").concat(a,"/").concat(t)));return St.set(t,i),i}))()}sendTransaction(t){var r=this;return a((function*(){if("BSV"===r.chain)return yield r.post("/tx/raw",{txhex:t.toString()});if("BCH"===r.chain){var[e]=yield r.post("/rawtransactions/sendRawTransaction",{hexes:[t.toString()]});return e}throw new Error("chain is not set in sendTransaction")}))()}getUtxosFromAddress(t){var r=this;return a((function*(){var e=[];var n="";switch(r.chain){case"BSV":var i=(e=yield r.get("/address/".concat(t.toString(),"/unspent"))).map(t=>{var{tx_hash:r,tx_pos:e,value:n}=t;return{txId:r,vout:e,satoshis:n,amount:n/1e8}});return Promise.all(i.map(function(){var t=a((function*(t){var e=(yield r.getTransaction(t.txId)).outputs[t.vout];return t.scriptPubKey=e.script.toHex(),t}));return function(r){return t.apply(this,arguments)}}()));case"BCH":return({utxos:e,scriptPubKey:n}=yield r.get("/address/utxo/".concat(t.toString()))),(e=e.map(t=>o({scriptPubKey:n},t))).map(t=>{var{txid:r}=t;return o({txId:r},c(t,["txid"]))});default:throw new Error("chain is not set in getUtxosFromAddress")}}))()}getTxosFromOutputData(t){var r=this;return a((function*(){var e=t.map(t=>t.__txId);var n=[...new Set(e)];var i=new Map;return yield Promise.all(n.map(function(){var t=a((function*(t){return i.set(t,yield r.getTransaction(t))}));return function(r){return t.apply(this,arguments)}}())),t.map(t=>{var{vout:r,blockheight:e,confirmations:n}=i.get(t.__txId)||{};return t.__vouts.map(a=>{var{scriptPubKey:i,value:s}=r[a];return{address:i.addresses[0],txId:t.__txId,vout:a,scriptPubKey:i.hex,amount:parseFloat(s),satoshis:parseInt(1e8*s,10),height:e,confirmations:n}})})}))()}postOutputData(t){var r=this;return a((function*(){return r.post("".concat(y.UN_P2SH_URL,"/"),t,!0)}))()}getOutputData(t){var r=this;return a((function*(){return r.get("".concat(y.UN_P2SH_URL,"/un-p2sh/").concat(t),!0)}))()}getOwnedRevs(t){var r=this;return a((function*(){return r.get("".concat(y.UN_P2SH_URL,"/txos/").concat(t.toString()),!0)}))()}setTxoSpent(t){var r=this;return a((function*(){var[e,n]=t.split(":");return r.post("".concat(y.UN_P2SH_URL,"/txos/set-spent/"),{txId:e,virtualIndex:parseInt(n,10)},!0)}))()}}class bt{static fromJSON(t){if(ht.isJSON(t))return ht.fromJSON(t);if(rt.isJSON(t))return rt.fromJSON(t);if(gt.isJSON(t))return gt.fromJSON(t);if(et.isJSON(t))return et.fromJSON(t);throw new Error("unrecognized json ".concat(JSON.stringify(t)))}}var{Transaction:xt,PublicKey:Pt,Address:It,BN:Nt,Script:kt,encoding:Dt}=r;var{Output:Et,Input:Tt}=xt;var{MultiSigScriptHash:jt,PublicKeyHashInput:Ct}=Tt;var{BufferReader:Bt}=Dt;var At=t=>new Promise(r=>setTimeout(r,t));class Kt extends xt{constructor(t,r,e){super(e),this._outputData=[],this.restClient=new Ot(t,r),this.feePerKb(y.DEFAULT_FEE),Object.defineProperty(this,"to",Q(this._to)),Object.defineProperty(this,"from",Q(this._from))}get chain(){return this.restClient.chain}get network(){return this.restClient.network}get dataInputs(){var t=[];var r=function*(t){for(var r of t)yield r}(this.inputs);var e=r.next();for(;!e.done;){var n=e.value;var a=ut.fromScript(n._scriptBuffer);if(a.isPublicKeyHashIn())t.push(new rt(a.toAddress(),0));else if(ut.isP2shScript(a)){var i=!1;var s=[ut.redeemScriptFromP2shScript(a)];for(;!i;)try{t.push(ht.fromRedeemScripts(s)),i=!0}catch(t){var o=r.next();if(o.done)throw new Error("Could not compute data inputs");var u=o.value;var c=ut.fromScript(u._scriptBuffer);s.push(ut.redeemScriptFromP2shScript(c))}}e=r.next()}return t}set dataInputs(t){throw Error("dataTransaction.dataInputs cannot be set directly, use dataTransaction.from or dataTransaction.fromScriptOutput")}get inputsWithData(){return this.dataInputs.filter(t=>"script"===t.kind)}getVirtualInputs(){var t=this;return a((function*(){if("BSV"===t.chain)return(yield Promise.all(t.inputs.map(function(){var r=a((function*(r){var{prevTxId:e,outputIndex:n}=r;var a=r.prevTxId.toString("hex");var i=(yield Kt.fromTxId(a,t.chain,t.network)).outputs[n];return!!ut.fromScript(i._scriptBuffer).isDbDataScript()&&r}));return function(t){return r.apply(this,arguments)}}()))).filter(t=>!!t).map(t=>"".concat(t.prevTxId.toString("hex"),":").concat(t.outputIndex));if("BCH"===t.chain){var{inputsWithData:r}=t;var e=ht.addVouts(r);return Promise.all(e.map(function(){var r=a((function*(r){var e=[];r.__vouts.forEach(r=>{e.push(t.inputs[r])});var n=e[0].prevTxId.toString("hex");var a=yield Kt.fromTxId(n,t.chain,t.network);yield a.fetchOutputData();var i=ht.addVouts(a.outputData);var s=[];i.forEach((t,r)=>{I(t.__vouts,e.map(t=>t.outputIndex))&&s.push(r)});var o=s[0];return"".concat(n,":").concat(o)}));return function(t){return r.apply(this,arguments)}}()))}throw new Error("chain not set in getVirtualInputs")}))()}fromMultiSig(t,r,e){var n=t.map(t=>X("txId","txid",t));return super.from(n,r,e)}_from(t,r,e){var n=X("txId","txid",t);return super.from(n,r,e)}fromScriptOutput(t,r){var e=ut.outScriptFromData(r);var{_owners:n}=r;return e.forEach((r,e)=>{var{redeemScript:a}=r;var{scriptPubKey:i,satoshis:s,txId:o,vout:u}=t[e];var c=new Et({script:new ut(i),satoshis:parseInt(s,10)});var v=new ut;var p=new jt({prevTxId:o,output:c,outputIndex:u,script:v},n,1,null,a);this.addInput(p)}),this}get outputData(){if("BSV"===this.chain)return this.outputs.filter(t=>ut.fromScript(t._scriptBuffer).isDbDataScript()).map(t=>{var{chunks:r}=t._script||t.script;var{buf:e}=r[r.length-2];var n=JSON.parse(e.toString());var a=r.slice(1,r.length-4);return n._owners=a.map(t=>new Pt(t.buf).toString()),n._amount=t._satoshis,n});if("BCH"===this.chain)return this._outputData;throw new Error("Chain not set in dataTransaction get outputdata")}set outputData(t){throw Error("dataTransaction.outputData cannot be set directly")}change(t){var r=this.outputs.length;return super.change(t),this.outputs.length>r&&this._outputData.push(new gt(t)),this}toChangeOutput(t){var r=this.outputs.length;return super.change(t.address),this.outputs.length>r&&this._outputData.push(t),this._outputData.length-1}toPkhOutput(t){return super.to(t.address,t._amount),this._outputData.push(t),this._outputData.length-1}toScriptOutput(t){if("BSV"===this.chain){var{_owners:r,_amount:e}=t,n=c(t,["_owners","_amount"]);var a=new ut;a.add("OP_1"),r.forEach(t=>a.add(t.toBuffer())),a.add("OP_".concat(r.length)),a.add("OP_CHECKMULTISIG"),a.add(Buffer.from(JSON.stringify(n))),a.add("OP_DROP");var i=new Et({script:a,satoshis:e});return this.addOutput(i),this.outputs.length-1}if("BCH"===this.chain){var s=ut.outScriptFromData(t);return this._outputData.push(t),s.forEach(r=>{var{redeemScript:e,chunk:n}=r;var a="BSV"===this.chain?e:ut.buildScriptHashOut(e);var i=t._amount;var s=new Et({script:a,satoshis:i});this.addOutput(s)}),this._outputData.length-1}throw new Error("chain not set in dataScript.toScriptOutput")}toReturnOutput(t){return this.addData(t.data),this._outputData.push(t),this._outputData.length-1}_to(t){switch(t.kind){case"change":return this.toChangeOutput(t);case"return":return this.toReturnOutput(t);case"script":return this.toScriptOutput(t);case"pkh":return this.toPkhOutput(t);default:throw new Error("Unsupported output kind ".concat(t.kind))}}fetchOutputData(){var t=this;return a((function*(){if(t._outputData.length)return t._outputData;var r=t.getTxId();var e=[];return"BSV"===t.chain?e=t.outputs.map(t=>{var r=ut.fromScript(t._scriptBuffer);var e=t._satoshis;if(r.isDbDataScript()){var n=r.getPublicKeys().map(t=>t.toString());return Object.assign(r.getData(),{kind:"script",_amount:e,_owners:n})}if(r.isPublicKeyHashOut()){var a=r.getPublicKeyHash();return{kind:"change",address:It.fromPublicKeyHash(a)}}throw new Error("Unrecognized output script ".concat(r.toString()))}):"BCH"===t.chain&&(e=yield t.restClient.getOutputData(r)),t._outputData=e.map(bt.fromJSON),t._outputData}))()}get prevObjectIds(){return this.inputs.map(t=>"".concat(t.prevTxId.toString("hex"),":").concat(t.outputIndex))}getTxId(){return new Bt(this._getHash()).readReverse().toString("hex")}static fromTxId(t,r,e){return a((function*(){var n=null;var a=new Ot(r,e);try{n=yield a.getRawTransaction(t)}catch(r){yield At(3e3),n=yield a.getRawTransaction(t)}var i=new Kt(r,e);return i.fromString(n),i}))()}}var{Mnemonic:Ut,HDPrivateKey:Rt,PrivateKey:Ht,PublicKey:Jt,Address:Ft,OutputData:Mt}=r;class Lt{constructor(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var{path:n="m/44'/0'/0'/0",passphrase:a=""}=e;this.mnemonic=t,this.path=n,this.passphrase=a,this.restClient=r,this.hdPrivateKey=this.mnemonic.toHDPrivateKey(this.passphrase,y.NETWORK),this.path&&(this.hdPrivateKey=this.hdPrivateKey.derive(this.path))}get chain(){return this.restClient.chain}get network(){return this.restClient.network}getMnemonic(){return this.mnemonic}getPath(){return this.path}derive(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=new Lt(this.mnemonic,this.restClient);return e.path="".concat(this.path).concat(this.path.length?"/":"").concat(t).concat(r?"'":""),e.hdPrivateKey=this.hdPrivateKey.derive(t,r),e}static getHdPrivateKey(){return new Rt}getPrivateKey(){return this.hdPrivateKey.privateKey}getPublicKey(){return this.hdPrivateKey.publicKey}getAddress(){return this.address=this.address||this.getPublicKey().toAddress(this.network),this.address}getBalance(){var t=this;return a((function*(){var r=t.getAddress();return t.restClient.getBalance(r.toString())}))()}getUtxos(t){var r=arguments,e=this;return a((function*(){var n=r.length>1&&void 0!==r[1]?r[1]:e.getAddress();var a=yield e.restClient.getUtxosFromAddress(n);for(var i=a.length-1;i>0;i-=1){var s=Math.floor(Math.random()*(i+1));[a[i],a[s]]=[a[s],a[i]]}var o=0;var u=[];var c=0;for(;o<t&&c<a.length;)u.push(a[c]),o+=a[c].satoshis,c+=1;if(o>=t)return u;throw new Error("Insufficient balance in address ".concat(n.toString()," on ").concat(y.NETWORK," ").concat(y.CHAIN,". Found ").concat(o,", required ").concat(t,"."))}))()}sendOutputData(t,r){var e=this;return a((function*(){var n=new Kt(e.chain,e.network);var a=r||e.getAddress();var i=Kt._estimateFee(n._estimateSize(),n._getUnspentValue(),y.DEFAULT_FEE);return(yield e.getUtxos(n._getOutputAmount()-n._getInputAmount()+i)).forEach(t=>n.from(t)),t.forEach(n.to.bind(n)),n.change(a),n.sign(e.getPrivateKey()),e.sendTransaction(n)}))()}sendTransaction(t){var r=arguments,e=this;return a((function*(){var n=r.length>1&&void 0!==r[1]&&r[1];var a=yield e.restClient.sendTransaction(t);if(n){var i=t.outputData.map(t=>{var{_owners:r}=t;if(void 0!==r){var e=r.map(t=>t.toString());return o(o({},t),{_owners:e})}return t});var s=JSON.stringify(i);var u=t.toJSON().inputs.map(t=>{var{prevTxId:r,outputIndex:e}=t;return{txId:r,outputIndex:e}});yield e.restClient.postOutputData({txId:a,outputData:s,inputs:u})}return a}))()}sendAll(t){var r=this;return a((function*(){var e=yield r.getBalance();var n=y.DEFAULT_FEE;if(e>n){var a=new rt(t,e-n);return r.sendOutputData([a])}throw new Error("Insufficient funds to send payment.")}))()}}var{HDPrivateKey:Vt,Mnemonic:zt,Transaction:Wt,Script:qt}=r;class Zt{constructor(t){this.wallet=t}get chain(){return this.wallet.chain}get network(){return this.wallet.network}put(t){var r=this;return a((function*(){return r.update([],t)}))()}getOutputDataMap(t){var r=this;return a((function*(){var e=[...new Set(t)];var n=yield Promise.all(e.map(function(){var t=a((function*(t){var e=(yield r.wallet.restClient.getOutputData(t)).map(bt.fromJSON);var n=0;var a=e.map(r=>{var e="script"===r.kind?ut.outScriptFromData(r).length:1;var a=Array(e).fill(n).map((t,r)=>t+r);return n+=e,o(o({},r),{},{__vouts:a,__txId:t})});return[t,a]}));return function(r){return t.apply(this,arguments)}}()));return new Map(n)}))()}get(t){var r=this;return a((function*(){if("BSV"===r.chain){var e=t.map(t=>t.split(":")[0]);var n=[...new Set(e)];var i=yield Promise.all(n.map(function(){var t=a((function*(t){return[t,yield r.wallet.restClient.getTransaction(t)]}));return function(r){return t.apply(this,arguments)}}()));var s=new Map(i);return Promise.all(t.map(function(){var t=a((function*(t){var[r,e]=t.split(":");var n=s.get(r).outputs[parseInt(e,10)];var a=ut.fromScript(n.script);return Object.assign(a.getData(),{__txId:r,__vouts:[parseInt(e,10)],_owners:a.getPublicKeys(),_amount:Math.round(n.satoshis)})}));return function(r){return t.apply(this,arguments)}}()))}if("BCH"===r.chain){var o=t.map(t=>t.split(":")[0]);var u=yield r.getOutputDataMap(o);return t.map(t=>{var[r,e]=t.split(":");var n=u.get(r);if(!n||!Array.isArray(n))throw new Error("No data found.");return n[parseInt(e,10)]})}throw new Error("chain not set in db.get")}))()}getUpdateTxBch(t,r,e){var n=this;return a((function*(){var e=new Kt(n.chain,n.network);var i=yield n.get(t);var s=yield n.wallet.restClient.getTxosFromOutputData(i);t.forEach(function(){var t=a((function*(t,r){e.fromScriptOutput(s[r],i[r])}));return function(r,e){return t.apply(this,arguments)}}());var o=U(r,n.wallet.getPublicKey()).map(t=>e.to(t));var u=Wt._estimateFee(e._estimateSize(),e._getUnspentValue(),y.DEFAULT_FEE);return(yield n.wallet.getUtxos(e._getOutputAmount()-e._getInputAmount()+u)).forEach(t=>e.from(t)),e.change(n.wallet.getAddress()),e.sign(n.wallet.getPrivateKey()),{transaction:e,virtualIndices:o}}))()}getUpdateTxBsv(t,r,e){var n=this;return a((function*(){var e=new Kt(n.chain,n.network);(yield Promise.all(t.map(function(){var t=a((function*(t){var[r,e]=t.split(":");var a=yield n.wallet.restClient.getTransaction(r);var{script:i,satoshis:s}=a.outputs[parseInt(e,10)];var o=ut.fromScript(i);return{output:{txId:r,outputIndex:parseInt(e,10),scriptPubKey:o,satoshis:Math.round(s)},publicKeys:o.getPublicKeys(),nr:1}}));return function(r){return t.apply(this,arguments)}}()))).forEach(t=>{var{output:r,publicKeys:n,nr:a}=t;e.from(r,n,a)});var i=U(r,n.wallet.getPublicKey()).map(t=>e.to(t));var s=Wt._estimateFee(e._estimateSize(),e._getUnspentValue(),y.DEFAULT_FEE);return(yield n.wallet.getUtxos(e._getOutputAmount()-e._getInputAmount()+s)).forEach(t=>e.from(t)),e.change(n.wallet.getAddress()),e.sign(n.wallet.getPrivateKey()),yield e.fetchOutputData(),{transaction:e,virtualIndices:i}}))()}update(t,r){var e=this;return a((function*(){var n=r.reduce((t,r)=>t+parseInt(r._amount,10),0);if("BSV"===e.chain){var{transaction:i,virtualIndices:s}=yield e.getUpdateTxBsv(t,r,n);var o=yield e.wallet.sendTransaction(i,!0);return t.forEach(function(){var t=a((function*(t){yield e.wallet.restClient.setTxoSpent(t)}));return function(r){return t.apply(this,arguments)}}()),s.map(t=>"".concat(o,":").concat(t))}if("BCH"===e.chain){var{transaction:u,virtualIndices:c}=yield e.getUpdateTxBch(t,r,n);var v=yield e.wallet.sendTransaction(u,!0);return t.forEach(function(){var t=a((function*(t){yield e.wallet.restClient.setTxoSpent(t)}));return function(r){return t.apply(this,arguments)}}()),c.map(t=>"".concat(v,":").concat(t))}throw new Error("Chain not set in db.update ".concat(e.chain))}))()}createUtxos(t,r){var e=this;return a((function*(){var n=r||10*y.MIN_NON_DUST_AMOUNT;console.log("Creating ".concat(t," unspent outputs with ").concat(n," satoshis in address ").concat(e.wallet.getAddress().toString()));var a=[...Array(t-1).keys()].map(()=>new rt(e.wallet.getAddress(),n));return e.update([],a)}))()}}var Gt;if("undefined"==typeof window){var{LocalStorage:Qt}=require("node-localstorage");Gt=new Qt("./uls-scratch")}else void 0!==window.localStorage&&({localStorage:Gt}=window);var Xt=Gt;class Yt{static serialize(t){return JSON.stringify(Object.entries(t))}static deserialize(t,r){var e=r?new r:{};return JSON.parse(t).forEach(t=>{var[r,n]=t;return e[r]=n}),e}static set(t){if(void 0===t._rev)throw new Error("Rev not set in Cache.set");var r="Object"===t.constructor.name?JSON.stringify({data:this.serialize(t)}):JSON.stringify({data:this.serialize(t),clazz:t.constructor.toString()});return Xt.setItem(t._rev,r),t._rev}static get(t){var{data:r,clazz:e}=JSON.parse(Xt.getItem(t||""))||{};if(r){var n="string"==typeof e?eval("(".concat(e,")")):void 0;return this.deserialize(r,n)}return null}}class $t{constructor(t,r){this.chain=t,this.network=r}get(t){var r=this;return a((function*(){var e=Yt.get(t);if(e)return e;var[n]=t.split(":");var i=yield Kt.fromTxId(n,r.chain,r.network);yield i.fetchOutputData(r.chain);var[{__cls:s,__func:o,_args:u,__index:c}]=i.outputData;var v=yield i.getVirtualInputs();var p=Object.fromEntries(yield Promise.all(Object.entries(c).map(function(){var t=a((function*(t){var[e,n]=t;return[e,v[n]?yield r.get(v[n]):{}]}));return function(r){return t.apply(this,arguments)}}())));var h=p.obj;delete p.obj;var d=Object.entries(p).reduce((t,r)=>{var[e,n]=r;return Number.isNaN(parseInt(e,10))||(t[parseInt(e,10)]=n),t},[]);var l=Z(d,u);var f;if("constructor"===o){var g=eval("(".concat(s,")"));h=new g(...l)}else{var _=h[o].bind(h);f=Reflect.apply(_,h,l)}if("Object"!==O(h))return h;A([...l,h,f],v,n);var m=K([...l,h,f],t);return m?(Yt.set(m),m):(h._id=t,h._rev=t,Yt.set(h),h)}))()}}var{Mnemonic:tr,PublicKey:rr}=r;class er{constructor(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var{seed:r,chain:e=y.CHAIN,network:n=y.NETWORK,mnemonic:a=new tr(r),wocApiKey:i,path:s="m/44'/0'/0'/0",passphrase:o=""}=t;this.restClient=new Ot(e,n,i);var{db:u=new Zt(new Lt(a,this.restClient,{path:s,passphrase:o}))}=t;this.db=u,this.reader=new $t(this.chain,this.network)}get chain(){return this.db.chain}get network(){return this.db.network}static parseContract(t){return"string"===O(t)&&(t=t.startsWith("export ")?t.slice(7):t,t=t.startsWith("default ")?t.slice(8):t,t="(".concat(t,")"),t=eval(t)),t}new(t,r){var e=this;return a((function*(){var n=new dt(e.db);var a=er.parseContract(t);var i=new Proxy(a,n);var s=yield new i(...r);return new Proxy(s,n)}))()}sync(t){var r=this;return a((function*(){var e=yield r.reader.get(t);var n=new dt(r.db);return new Proxy(e,n)}))()}getOwnedRevs(){var t=arguments,r=this;return a((function*(){var e=t.length>0&&void 0!==t[0]?t[0]:r.db.wallet.getPublicKey();return r.db.wallet.restClient.getOwnedRevs(e)}))()}}module.exports=er;
