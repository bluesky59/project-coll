(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/components/tapBar"],{"27d8":function(t,a,e){"use strict";e.r(a);var n=e("a07b"),c=e.n(n);for(var l in n)"default"!==l&&function(t){e.d(a,t,function(){return n[t]})}(l);a["default"]=c.a},"424c":function(t,a,e){"use strict";e.r(a);var n=e("ccea"),c=e("27d8");for(var l in c)"default"!==l&&function(t){e.d(a,t,function(){return c[t]})}(l);e("46ab");var u,i=e("f0c5"),r=Object(i["a"])(c["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);a["default"]=r.exports},"46ab":function(t,a,e){"use strict";var n=e("6a5b"),c=e.n(n);c.a},"6a5b":function(t,a,e){},a07b:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{scanData:{label:"",value:"scan",icon:"scan",title:"扫描VIN码"},tabsArrL:[{label:"首页",value:"home",icon:"home",title:"好好汽配"},{label:"分类",value:"class",icon:"class",title:"全部商品"}],tabsArrR:[{label:"购物车",value:"cart",icon:"cart",title:"购物车"},{label:"我的",value:"mine",icon:"mine",title:"个人中心"}],tabsVal:"home"}},props:{tabsName:{type:String,default:"home"}},watch:{tabsName:function(t){this.tabsVal=t}},methods:{skipTo:function(t){this.$emit("clickRes",t),this.tabsVal=t.value}}};a.default=n},ccea:function(t,a,e){"use strict";var n,c=function(){var t=this,a=t.$createElement;t._self._c},l=[];e.d(a,"b",function(){return c}),e.d(a,"c",function(){return l}),e.d(a,"a",function(){return n})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/components/tapBar-create-component',
    {
        'pages/components/tapBar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("424c"))
        })
    },
    [['pages/components/tapBar-create-component']]
]);
