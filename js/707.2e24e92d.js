"use strict";(self["webpackChunkcendana_web"]=self["webpackChunkcendana_web"]||[]).push([[707],{6707:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Q});var l=t(3673);const o=(0,l.Uk)(" Data Beban Usaha "),n={class:"q-px-lg flex q-py-md"},r={class:"q-px-lg"};function p(e,a,t,p,s,i){const m=(0,l.up)("q-toolbar-title"),d=(0,l.up)("q-btn"),u=(0,l.up)("q-toolbar"),c=(0,l.up)("q-separator"),g=(0,l.up)("q-input"),f=(0,l.up)("month-select"),y=(0,l.up)("loading-pane"),b=(0,l.up)("q-td"),w=(0,l.up)("q-table"),q=(0,l.up)("pagination"),h=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"q-px-lg bg-grey-2"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"text-weight-bold"},{default:(0,l.w5)((()=>[o])),_:1}),(0,l.Wm)(d,{to:"/app/opex/create",flat:"",color:"primary",label:"tambah",icon:"add"})])),_:1}),(0,l.Wm)(c),(0,l.Wm)("div",n,[(0,l.Wm)(g,{dense:"",placeholder:"keyword...",modelValue:e.params.keyword,"onUpdate:modelValue":a[1]||(a[1]=a=>e.params.keyword=a),class:"q-mr-md"},null,8,["modelValue"]),(0,l.Wm)(f,{year:e.params.year,"onUpdate:year":a[2]||(a[2]=a=>e.params.year=a),month:e.params.month,"onUpdate:month":a[3]||(a[3]=a=>e.params.month=a)},null,8,["year","month"])]),"loading"==e.opexes.type?((0,l.wg)(),(0,l.j4)(y,{key:0})):"data"==e.opexes.type?((0,l.wg)(),(0,l.j4)(l.HY,{key:1},[(0,l.Wm)("section",null,[(0,l.Wm)(w,{"hide-pagination":"",columns:e.COLUMNS,rows:e.opexes.items,"rows-per-page-options":[0],flat:""},{"body-cell-actions":(0,l.w5)((e=>[(0,l.Wm)(b,{props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{icon:"delete",color:"red",flat:"",size:"xs"}),(0,l.Wm)(d,{to:`/app/opex/${e.row.id}/update`,icon:"edit",color:"primary",flat:"",size:"xs"},null,8,["to"])])),_:2},1032,["props"])])),_:1},8,["columns","rows"])]),(0,l.Wm)("section",r,[(0,l.Wm)(u,{class:"text-grey-8 q-py-lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{page:e.params.page,"onUpdate:page":a[4]||(a[4]=a=>e.params.page=a),"per-page":e.params.perPage,"onUpdate:per-page":a[5]||(a[5]=a=>e.params.perPage=a),"total-page":e.opexes.totalPage},null,8,["page","per-page","total-page"])])),_:1})])],64)):(0,l.kq)("",!0)])),_:1})}var s=t(3158),i=t(7763),m=t(7179),d=t(4964),u=t(2273),c=t(4240),g=t(7746);const f=[{name:"id",align:"left",field:"id",label:"id",required:!0},{name:"ocat",align:"left",field:e=>e.opex.title,label:"Kategori",required:!0},{name:"waktu",align:"left",field:"createdAt",format:e=>{const a=new Date(e);return(0,c.Z)(a,"d MMMM yyyy, HH:mm",{locale:g.Z})},label:"Waktu",required:!0},{name:"nominal",align:"left",field:"nominal",format:u.z,label:"Mominal",required:!0},{name:"description",align:"left",field:"description",label:"Keterangan",required:!0},{name:"actions",align:"right",field:"id",label:""}];var y=t(1379);const b=(0,l.aZ)({components:{LoadingPane:i.Z,Pagination:m.Z,MonthSelect:s.Z},setup(){const{year:e,month:a}=(0,y.V)(),t={year:e,month:a,keyword:"",type:"OPEX"},{params:o,result:n,getEntities:r}=(0,d.IT)({name:"Beban Usaha",url:"/v1/api/transactions",initialParams:t});return(0,l.bv)((()=>{r()})),{opexes:n,params:o,COLUMNS:f}}});var w=t(4379),q=t(9570),h=t(3747),x=t(2165),W=t(5869),k=t(4842),Z=t(6429),U=t(3884),M=t(7518),P=t.n(M);b.render=p;const Q=b;P()(b,"components",{QPage:w.Z,QToolbar:q.Z,QToolbarTitle:h.Z,QBtn:x.Z,QSeparator:W.Z,QInput:k.Z,QTable:Z.Z,QTd:U.Z})}}]);