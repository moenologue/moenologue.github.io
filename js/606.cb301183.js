"use strict";(self["webpackChunkcendana_web"]=self["webpackChunkcendana_web"]||[]).push([[606],{5606:(e,a,t)=>{t.r(a),t.d(a,{default:()=>oe});var n=t(3673),l=t(2323);const u={class:"row q-my-xl q-mx-md"},o={class:"col-md-6 col-xs-12"},d=(0,n.Uk)("Pelanggan"),r=(0,n.Uk)("Pegawai"),i=(0,n.Uk)("Batas Waktu Pembayaran"),m=(0,n.Uk)("Jumlah Hutang"),s=(0,n.Uk)("Status"),c={class:"row q-my-xl q-mx-md"},p={class:"col-12"},f=(0,n.Uk)("Daftar Pembayaran");function w(e,a,t,w,y,g){const b=(0,n.up)("q-toolbar-title"),W=(0,n.up)("q-toolbar"),h=(0,n.up)("q-separator"),_=(0,n.up)("q-item-label"),q=(0,n.up)("q-item-section"),k=(0,n.up)("router-link"),v=(0,n.up)("q-item"),Z=(0,n.up)("q-list"),S=(0,n.up)("q-card"),U=(0,n.up)("q-btn"),x=(0,n.up)("payment-list"),P=(0,n.up)("add-payment"),Q=(0,n.up)("q-dialog"),A=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(A,null,{default:(0,n.w5)((()=>[(0,n.Wm)(W,{class:"bg-grey-2"},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{class:"text-weight-bold"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Detail Hutang #"+(0,l.zw)(e.id),1)])),_:1})])),_:1}),(0,n.Wm)(h),(0,n.Wm)("div",u,[(0,n.Wm)("div",o,["result"==e.delay.type?((0,n.wg)(),(0,n.j4)(S,{key:0,flat:"",bordered:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Z,{separator:""},{default:(0,n.w5)((()=>[(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[d])),_:1})])),_:1}),(0,n.Wm)(q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(k,{to:`/app/customer/${e.delay.data.order.targetUserId}/detail`},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e.delay.data.order.targetUser.name),1)])),_:1},8,["to"])])),_:1})])),_:1}),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[r])),_:1})])),_:1}),(0,n.Wm)(q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(k,{to:`/app/admin/${e.delay.data.order.authorId}/detail`},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e.delay.data.order.author.name),1)])),_:1},8,["to"])])),_:1})])),_:1}),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[i])),_:1})])),_:1}),(0,n.Wm)(q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e.displayDateTime(e.delay.data.dueDate)),1)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[m])),_:1})])),_:1}),(0,n.Wm)(q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e.rupiah(e.delay.data.total)),1)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[s])),_:1})])),_:1}),(0,n.Wm)(q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e.open?"Belum Lunas":"Lunas"),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})):(0,n.kq)("",!0)])]),(0,n.Wm)("div",c,[(0,n.Wm)("div",p,[(0,n.Wm)(S,{flat:"",bordered:""},{default:(0,n.w5)((()=>[(0,n.Wm)(W,{class:"bg-grey-2"},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{class:"text-subtitle1"},{default:(0,n.w5)((()=>[f])),_:1}),e.open?((0,n.wg)(),(0,n.j4)(U,{key:0,onClick:a[1]||(a[1]=a=>e.showAddDialog=!0),flat:"",dark:"",color:"primary",icon:"add",label:"tambah pembayaran"})):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(h),(0,n.Wm)(x,{items:e.payments},null,8,["items"])])),_:1})])]),(0,n.Wm)(Q,{modelValue:e.showAddDialog,"onUpdate:modelValue":a[2]||(a[2]=a=>e.showAddDialog=a)},{default:(0,n.w5)((()=>[(0,n.Wm)(P,{id:e.id,style:{width:"500px"},max:e.remainingPaid,onPaymentAdded:e.loadData},null,8,["id","max","onPaymentAdded"])])),_:1},8,["modelValue"])])),_:1})}var y=t(1959),g=t(4964),b=t(2273),W=t(7378),h=t(1768),_=t(8825),q=function(e,a,t,n){function l(e){return e instanceof t?e:new t((function(a){a(e)}))}return new(t||(t=Promise))((function(t,u){function o(e){try{r(n.next(e))}catch(a){u(a)}}function d(e){try{r(n["throw"](e))}catch(a){u(a)}}function r(e){e.done?t(e.value):l(e.value).then(o,d)}r((n=n.apply(e,a||[])).next())}))};function k(e){const a=(0,_.Z)(),t=(0,y.iH)([]),l=(0,n.Fl)((()=>`/v1/api/delays/${e.value}/payments`)),u=()=>q(this,void 0,void 0,(function*(){const e=(0,y.SU)(l);try{const a=yield h.api.get(e),{data:n}=a;t.value=n}catch(n){console.log(n),a.notify({message:"Gagal mengambil data pembayaran",type:"negative"})}}));return{getPayments:u,payments:t}}function v(e,a,t,l,u,o){const d=(0,n.up)("q-table");return(0,n.wg)(),(0,n.j4)(d,{"hide-pagination":"",columns:e.columns,rows:e.items,"rows-per-page-options":[0],flat:""},null,8,["columns","rows"])}const Z=[{name:"id",align:"left",field:"id",label:"id",required:!0},{name:"waktu",align:"left",field:"createdAt",format:W.L,label:"Waktu",required:!0},{name:"nominal",align:"left",field:"nominal",format:e=>"IDR "+(0,b.z)(e),label:"Nominal",required:!0},{name:"actions",align:"right",field:"id",label:""}],S=(0,n.aZ)({props:{items:{type:Array,required:!0}},setup(e){return{columns:Z}}});var U=t(6429),x=t(7518),P=t.n(x);S.render=v;const Q=S;P()(S,"components",{QTable:U.Z});const A=(0,n.Wm)("h6",null,"Tambah Pembayaran",-1);function V(e,a,t,l,u,o){const d=(0,n.up)("q-card-section"),r=(0,n.up)("q-separator"),i=(0,n.up)("rupiah-input"),m=(0,n.up)("datetime-input"),s=(0,n.up)("payment-method-options"),c=(0,n.up)("q-form"),p=(0,n.up)("q-btn"),f=(0,n.up)("q-card-actions"),w=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(w,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{class:"bg-grey-2"},{default:(0,n.w5)((()=>[A])),_:1}),(0,n.Wm)(r),(0,n.Wm)(c,{ref:"form",onSubmit:e.onSubmit},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"Nominal",modelValue:e.payload.nominal,"onUpdate:modelValue":a[1]||(a[1]=a=>e.payload.nominal=a),class:"q-mb-md",rules:[e.decGreaterThan("0","Harus lebih besar dari 0"),e.lessThanMax]},null,8,["modelValue","rules"]),(0,n.Wm)(m,{label:"Waktu dan Tanggal",modelValue:e.payload.createdAt,"onUpdate:modelValue":a[2]||(a[2]=a=>e.payload.createdAt=a),class:"q-mb-md"},null,8,["modelValue"]),(0,n.Wm)(s,{modelValue:e.payload.paymentMethod,"onUpdate:modelValue":a[3]||(a[3]=a=>e.payload.paymentMethod=a)},null,8,["modelValue"])])),_:1})])),_:1},8,["onSubmit"]),(0,n.Wm)(r),(0,n.Wm)(f,{align:"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{onClick:e.onSubmit,outline:"",label:"simpan",dark:"",color:"primary"},null,8,["onClick"])])),_:1})])),_:1})}var D=t(2783),C=t(5898),T=t(6729),z=t(3385),H=t(6135),I=t(891),L=t(2386),j=function(e,a,t,n){function l(e){return e instanceof t?e:new t((function(a){a(e)}))}return new(t||(t=Promise))((function(t,u){function o(e){try{r(n.next(e))}catch(a){u(a)}}function d(e){try{r(n["throw"](e))}catch(a){u(a)}}function r(e){e.done?t(e.value):l(e.value).then(o,d)}r((n=n.apply(e,a||[])).next())}))};const M=(0,n.aZ)({components:{PaymentMethodOptions:T.Z,RupiahInput:z.Z,DatetimeInput:H.Z},props:{id:{type:[Number,String],required:!0},max:{type:String,required:!0}},emits:["payment-added"],setup(e,{emit:a}){const t=(0,n.f3)("user"),l=(0,y.qj)({nominal:"0",createdAt:(0,D.s)(),status:I.LN.SUCCESS,paymentMethod:I.XL.CASH}),{result:u,createEntity:o}=(0,g.Zh)({entityName:"Pembayaran",transform:e=>{const a=(0,y.SU)(t);if(!a)throw new Error("user is undefined");return Object.assign(Object.assign({},e),{createdAt:(0,C.V)(e.createdAt),authorId:a.id})}}),d=(0,y.iH)(null);function r(){return j(this,void 0,void 0,(function*(){const t=(0,y.SU)(d);if(!t)throw new Error("form is undefined");const n=yield t.validate(!0);if(console.log(`isValid = ${n}`),!n)return;const u=`/v1/api/delays/${e.id}/payments`;o(u,l).then((()=>{a("payment-added")}))}))}const i=(0,n.Fl)((()=>{const a=e.max;return(0,L.x)(a,`Harus kurang dari ${(0,b.z)(a)}`)}));return{payload:l,form:d,createResult:u,onSubmit:r,decGreaterThan:L.b,lessThanMax:i}}});var N=t(151),$=t(5589),F=t(5869),E=t(5269),B=t(9367),G=t(2165);M.render=V;const O=M;P()(M,"components",{QCard:N.Z,QCardSection:$.Z,QSeparator:F.Z,QForm:E.Z,QCardActions:B.Z,QBtn:G.Z});var R=t(5387),J=t.n(R);const X=(0,n.aZ)({components:{PaymentList:Q,AddPayment:O},props:{id:{type:[Number,String],required:!0}},setup(e){const a=(0,y.Vh)(e,"id"),t=(0,n.Fl)((()=>`/v1/api/delays/${e.id}`)),{result:l,getSingleEntity:u}=(0,g.ZM)({entityName:"Hutang",url:t}),o=(0,n.Fl)((()=>{const e=(0,y.SU)(l);return"result"==e.type&&!e.data.complete})),{payments:d,getPayments:r}=k(a);function i(){u(),r()}const m=(0,n.Fl)((()=>{const e=new(J())("0"),a=(0,y.SU)(l);if("result"!=a.type)return e;const t=new(J())(a.data.total),n=(0,y.SU)(d),u=n.map((e=>{const a=new(J())(e.nominal);return a})).reduce(((e,a)=>e.plus(a)),e);return t.sub(u).toString()}));(0,n.bv)(i);const s=(0,y.iH)(!1);return{delay:l,payments:d,rupiah:b.z,displayDateTime:W.L,showAddDialog:s,remainingPaid:m,open:o,loadData:i}}});var K=t(4379),Y=t(9570),ee=t(3747),ae=t(7011),te=t(3414),ne=t(2035),le=t(2350),ue=t(6778);X.render=w;const oe=X;P()(X,"components",{QPage:K.Z,QToolbar:Y.Z,QToolbarTitle:ee.Z,QSeparator:F.Z,QCard:N.Z,QList:ae.Z,QItem:te.Z,QItemSection:ne.Z,QItemLabel:le.Z,QBtn:G.Z,QDialog:ue.Z})}}]);