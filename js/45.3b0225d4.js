"use strict";(self["webpackChunkcendana_web"]=self["webpackChunkcendana_web"]||[]).push([[45],{1045:(e,a,l)=>{l.r(a),l.d(a,{default:()=>q});var n=l(3673),t=l(2323);const o=(0,n.Wm)("div",{class:"q-pa-sm"},[(0,n.Wm)("h6",{class:"q-my-none"},"Kunci Penjualan")],-1),d={class:"text-weight-bold"};function u(e,a,l,u,p,m){const r=(0,n.up)("q-separator"),s=(0,n.up)("q-card-section"),i=(0,n.up)("payment-method-options"),y=(0,n.up)("rupiah-input"),c=(0,n.up)("q-input"),b=(0,n.up)("q-btn"),g=(0,n.up)("q-card"),w=(0,n.up)("q-dialog");return(0,n.wg)(),(0,n.j4)(w,{"model-value":!0,persistent:""},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{flat:"",bordered:"",style:{width:"500px"}},{default:(0,n.w5)((()=>[o,(0,n.Wm)(r),"loading"==e.sale.type?((0,n.wg)(),(0,n.j4)(s,{key:0})):((0,n.wg)(),(0,n.j4)(s,{key:1},{default:(0,n.w5)((()=>[(0,n.Wm)("div",d," Penjualan #"+(0,t.zw)(e.sale.item.id),1),(0,n.Wm)(i,{modelValue:e.payload.paymentMethod,"onUpdate:modelValue":a[1]||(a[1]=a=>e.payload.paymentMethod=a)},null,8,["modelValue"]),(0,n.Wm)(y,{label:"Total Bayar",modelValue:e.payload.nominal,"onUpdate:modelValue":a[2]||(a[2]=a=>e.payload.nominal=a)},null,8,["modelValue"]),e.needDelay?((0,n.wg)(),(0,n.j4)(n.HY,{key:0},[(0,n.Wm)(y,{label:"Total Hutang",readonly:"","model-value":e.debt.toString()},null,8,["model-value"]),(0,n.Wm)(c,{class:"q-mb-md",outlined:"",label:"Batas Waktu Pembayaran Hutang",type:"number",modelValue:e.payload.elapsedDelay,"onUpdate:modelValue":a[3]||(a[3]=a=>e.payload.elapsedDelay=a),modelModifiers:{number:!0},min:"0"},null,8,["modelValue"])],64)):(0,n.kq)("",!0),(0,n.Wm)(b,{onClick:e.onSubmit,loading:e.sealLoading,label:"simpan",unelevated:"",color:"blue",dark:""},null,8,["onClick","loading"])])),_:1})),(0,n.Wm)(r)])),_:1})])),_:1})}var p=l(1959),m=l(6635),r=l(5387),s=l.n(r),i=l(6729),y=l(3385),c=l(891),b=l(927),g=function(e,a){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(l[n[t]]=e[n[t]])}return l};const w=(0,n.aZ)({components:{RupiahInput:y.Z,PaymentMethodOptions:i.Z},setup(e){const a=(0,n.f3)("sale"),l=(0,p.qj)({nominal:"",status:c.LN.SUCCESS,paymentMethod:c.XL.CASH,elapsedDelay:30}),t=(0,n.Fl)((()=>{l.nominal;const e=new(s())(l.nominal),n=new(s())(a.value.item.grandTotal);return n.sub(e)})),o=(0,n.Fl)((()=>t.value.greaterThan(0))),{seal:d,loading:u}=(0,b.O)(),r=()=>{const{elapsedDelay:e}=l,n=g(l,["elapsedDelay"]);let t=Object.assign({},n);o.value&&(t.delay={dueDate:(0,m.Z)(new Date,e)}),d(a.value.item.id,t)};return(0,n.bv)((()=>{l.nominal=a.value.item.grandTotal})),{sale:a,payload:l,PAYMENT_METHOD_OPTIONS:c.x$,debt:t,needDelay:o,onSubmit:r,sealLoading:u}}});var f=l(6778),v=l(151),h=l(5869),O=l(5589),j=l(4842),k=l(2165),S=l(7518),W=l.n(S);w.render=u;const q=w;W()(w,"components",{QDialog:f.Z,QCard:v.Z,QSeparator:h.Z,QCardSection:O.Z,QInput:j.Z,QBtn:k.Z})}}]);