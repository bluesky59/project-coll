(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/components/goods-list"],{"1f21":function(t,n,e){},7756:function(t,n,e){"use strict";e.r(n);var u=e("827a"),a=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);n["default"]=a.a},"827a":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("2947"),a={name:"goods-list",props:{eventHandle:{type:String,default:""},hot:{type:Boolean,default:!1}},data:function(){return{saleArrs:u.saleArrs,baseUrl:"http://39.108.65.247:8087",num:0}},methods:{goodNumControl:function(t){switch(t){case"reduce":this.num=Math.max(0,--this.num);break;case"plus":this.num=Math.min(200,++this.num);break;default:break}},productPlus:function(){this.num=1},skipTo:function(){t.navigateTo({url:"/pages/other/good-detail"})}}};n.default=a}).call(this,e("543d")["default"])},d2f6:function(t,n,e){"use strict";var u,a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return u})},db46:function(t,n,e){"use strict";e.r(n);var u=e("d2f6"),a=e("7756");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("ec04");var r,c=e("f0c5"),i=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,"3a7c9374",null,!1,u["a"],r);n["default"]=i.exports},ec04:function(t,n,e){"use strict";var u=e("1f21"),a=e.n(u);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/components/goods-list-create-component',
    {
        'pages/components/goods-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("db46"))
        })
    },
    [['pages/components/goods-list-create-component']]
]);
