"use strict";(self["webpackChunkcendana_web"]=self["webpackChunkcendana_web"]||[]).push([[470],{2470:(e,a,t)=>{t.r(a),t.d(a,{default:()=>R});var l=t(3673),o=t(2323);const n={key:1,class:"q-px-lg"},s={class:"q-px-lg"};function p(e,a,t,p,u,r){const i=(0,l.up)("q-toolbar-title"),d=(0,l.up)("q-btn"),m=(0,l.up)("q-toolbar"),c=(0,l.up)("loading-pane"),g=(0,l.up)("q-td"),w=(0,l.up)("q-table"),b=(0,l.up)("q-select"),f=(0,l.up)("q-input"),h=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"q-px-lg bg-grey-2"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{class:"text-weight-bold"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Data "+(0,o.zw)(e.ENTITY_NAME),1)])),_:1}),(0,l.Wm)(d,{flat:"",color:"primary",label:"tambah",icon:"add",to:e.CREATE_URL},null,8,["to"])])),_:1}),e.showLoading?((0,l.wg)(),(0,l.j4)(c,{key:0})):((0,l.wg)(),(0,l.j4)("section",n,[(0,l.Wm)(w,{flat:"","hide-pagination":"",columns:e.COLUMNS,rows:e.listResult.items,"rows-per-page-options":[0]},{"body-cell-actions":(0,l.w5)((a=>[(0,l.Wm)(g,{props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{icon:"delete",color:"red",flat:"",size:"xs",onClick:t=>e.onRemove(a.row)},null,8,["onClick"]),(0,l.Wm)(d,{to:e.generateUpdateURL(a.row.id),icon:"edit",color:"primary",flat:"",size:"xs"},null,8,["to"])])),_:2},1032,["props"])])),_:1},8,["columns","rows"])])),(0,l.Wm)("section",s,[(0,l.Wm)(m,{class:"text-grey-8 q-py-lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{options:[10,25,50],modelValue:e.params.per_page,"onUpdate:modelValue":a[1]||(a[1]=a=>e.params.per_page=a),modelModifiers:{number:!0},label:"jumlah item per halaman",dense:"",outlined:"",class:"q-mr-lg",style:{"min-width":"200px"}},null,8,["modelValue"]),(0,l.Wm)(f,{"model-value":e.params.page+1,"onUpdate:modelValue":a[2]||(a[2]=a=>{e.params.page=a-1}),"shadow-text":`/${e.listResult.totalPage}`,suffix:`/${e.listResult.totalPage}`,type:"number",max:e.listResult.totalPage-1,min:1,label:"halaman",dense:"",outlined:"",style:{"max-width":"100px"}},null,8,["model-value","shadow-text","suffix","max"])])),_:1})])])),_:1})}var u=t(4964),r=t(7763),i=t(3265);const d=(0,l.aZ)({components:{LoadingPane:r.Z},setup(){const e=i.Wn+"/create";function a(e){return i.Wn+`/${e}/update`}const{params:t,result:o,getEntityList:n}=(0,u.F_)({name:i.X5,url:i.Mr}),{result:s,promptRemove:p}=(0,u.dK)(i.X5),r=e=>{p(`${i.Mr}/${e.id}`,e.title).then((()=>n()))},d=(0,l.Fl)((()=>"loading"==o.value.type||"loading"==s.value.type));return{COLUMNS:i.L0,ENTITY_NAME:i.X5,CREATE_URL:e,params:t,listResult:o,generateUpdateURL:a,onRemove:r,showLoading:d}}});var m=t(4379),c=t(9570),g=t(3747),w=t(2165),b=t(6429),f=t(3884),h=t(3314),x=t(4842),_=t(7518),y=t.n(_);d.render=p;const R=d;y()(d,"components",{QPage:m.Z,QToolbar:c.Z,QToolbarTitle:g.Z,QBtn:w.Z,QTable:b.Z,QTd:f.Z,QSelect:h.Z,QInput:x.Z})}}]);