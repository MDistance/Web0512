(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goods"],{"0ce3":function(t,e,s){},"16b9":function(t,e,s){"use strict";var o=s("2a3b"),n=s.n(o);n.a},"174d":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods"},[s("div",{ref:"menuWrap",staticClass:"menu-wrap"},[s("ul",{ref:"menuList",staticClass:"menu-list"},t._l(t.goods,(function(e,o){return s("li",{staticClass:"menu-item",class:{active:t.currentIndex===o},on:{click:function(e){return t.handleCForMenuList(o)}}},[s("ele-icon",{directives:[{name:"show",rawName:"v-show",value:e.type>=0,expression:"good.type >= 0"}],staticClass:"icon",attrs:{size:3,type:e.type}}),s("span",{staticClass:"text"},[t._v(t._s(e.name))])],1)})),0)]),s("div",{ref:"foodsWrap",staticClass:"foods-wrap"},[s("ul",{ref:"foodsList",staticClass:"foods-list"},t._l(t.goods,(function(e,o){return s("li",{staticClass:"foods-item"},[s("h2",{staticClass:"title"},[t._v(t._s(e.name))]),s("ul",{staticClass:"food-list"},t._l(e.foods,(function(e,n){return s("li",{staticClass:"food-item"},[s("div",{staticClass:"left"},[s("img",{attrs:{src:e.icon}})]),s("div",{staticClass:"right"},[s("div",{staticClass:"name"},[t._v(t._s(e.name))]),s("div",{staticClass:"description"},[t._v(t._s(e.description))]),s("div",{staticClass:"others"},[s("span",{staticClass:"sellCount"},[t._v("月售"+t._s(e.sellCount)+"份")]),s("span",{staticClass:"rating"},[t._v("好评率"+t._s(e.rating)+"%")])]),s("div",{staticClass:"prices"},[s("span",{staticClass:"nowPrice"},[t._v("¥"+t._s(e.price))]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.oldPrice,expression:"food.oldPrice"}],staticClass:"oldPrice"},[t._v("¥"+t._s(e.oldPrice))])]),s("ele-control",{staticClass:"control",attrs:{food:e,goodIndex:o,foodIndex:n},on:{addCount:t.addCount,removeCount:t.removeCount}})],1)])})),0)])})),0)]),s("ele-cart",{attrs:{deliveryPrice:t.seller.deliveryPrice,minPrice:t.seller.minPrice,selectedFoods:t.selectedFoods},on:{clear:t.clear,addCount:t.addCount,removeCount:t.removeCount}})],1)},n=[],i=(s("c740"),s("a630"),s("d3b7"),s("3ca3"),s("159b"),s("96cf"),s("1fba")),r=s("8158"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-control"},[s("transition",{attrs:{name:"cartControlRemove"}},[s("i",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"remove damu-remove_circle_outline",on:{click:t.removeCount}})]),s("transition",{attrs:{name:"cartControlRemove"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"text"},[t._v(t._s(t.food.count))])]),s("i",{staticClass:"add damu-add_circle",on:{click:t.addCount}})],1)},c=[],l=(s("a9e3"),s("911a")),u=s.n(l),f={ballAnimation:"ballAnimation"},d={name:"ele-contorl",props:{food:{type:Object,require:!0},goodIndex:{type:Number,require:!1},foodIndex:{type:Number,require:!1}},methods:{addCount:function(t){this.$emit("addCount",this.food),u.a.publish(f.ballAnimation,t.target)},removeCount:function(){this.$emit("removeCount",this.food)}}},h=d,v=(s("f1ba"),s("2877")),p=Object(v["a"])(h,a,c,!1,null,"94a4af4a",null),m=p.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"shop-cart"},[s("div",{staticClass:"left",staticStyle:{"will-change":"scroll-position"},on:{click:t.flodFn}},[s("div",{staticClass:"shop-wrap",class:{highLight:t.totalPrice>0}},[t._m(0),s("span",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount >0"}],staticClass:"qipao"},[t._v(t._s(t.totalCount))])]),s("div",{staticClass:"totalPrice"},[s("span",{class:{highLight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))])]),s("div",{staticClass:"deliveryPrice"},[s("span",[t._v("另需配送费￥"+t._s(t.deliveryPrice))])])]),s("div",{staticClass:"right",class:{highlight:this.totalPrice>=this.minPrice},staticStyle:{"will-change":"scroll-position"}},[s("span",[t._v(t._s(t.payText))])]),s("div",{staticClass:"balls"},t._l(t.balls,(function(e){return s("div",{staticClass:"ball-wrap"},[s("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeDrop,enter:t.dropping,"after-enter":t.afterDrop}},[s("i",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"ball.show"}],staticClass:"ball"})])],1)})),0)]),s("transition",{attrs:{name:"shopCartList"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"list"},[s("div",{staticClass:"header"},[s("h2",{staticClass:"title"},[t._v("购物车")]),s("span",{staticClass:"clear",on:{click:t.clear}},[t._v("清空")])]),s("div",{ref:"shopCartListContent",staticClass:"content"},[s("ul",t._l(t.selectedFoods,(function(e){return s("li",{staticClass:"selectedFood"},[s("span",{staticClass:"name left"},[t._v(t._s(e.name))]),s("div",{staticClass:"right"},[s("span",{staticClass:"price"},[t._v("¥"+t._s(e.count*e.price))]),s("ele-control",{staticClass:"control",attrs:{food:e},on:{addCount:t.addCount,removeCount:t.removeCount}})],1)])})),0)])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"mask",on:{click:function(e){t.flod=!0}}})],1)},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[s("i",{staticClass:"shopping_cart damu-shopping_cart"})])}];function b(t,e,s){if(!(arguments.length>=3)){if(2===arguments.length)return s=t.transform?t.transform[e]:void 0,void 0===s&&(s=0,"scale"===e&&(s=1)),s;throw new Error("该函数至少需要2个参数")}var o="";for(var n in t.transform||(t.transform={}),t.transform[e]=s,t.transform)switch(n){case"translateX":case"translateY":case"translateZ":o+=n+"("+t.transform[n]+"px)";break;case"rotateX":case"rotateY":case"rotateZ":case"rotate":o+=n+"("+t.transform[n]+"deg)";break;case"scale":o+=n+"("+t.transform[n]+")";break}t.style.transform=o}var g={name:"ele-cart",props:{selectedFoods:Array,deliveryPrice:Number,minPrice:Number},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],flod:!0}},computed:{totalPrice:function(){var t=0;return this.selectedFoods.forEach((function(e){t+=e.count*e.price})),t},totalCount:function(){var t=0;return this.selectedFoods.forEach((function(e){t+=e.count})),t},payText:function(){return 0===this.totalPrice?"¥".concat(this.minPrice,"起送"):this.totalPrice<this.minPrice?"还差¥".concat(this.minPrice-this.totalPrice,"起送"):"去结算"},showList:function(){return this.totalCount<=0?(this.flod=!0,!1):(this.scroll?this.scroll.refresh():this.scroll=new i["a"](this.$refs.shopCartListContent,{click:!0}),!this.flod)}},methods:{drop:function(t){for(var e=0;e<this.balls.length;e++){var s=this.balls[e];if(!s.show)return s.show=!0,s.target=t,void this.dropBalls.push(s)}},beforeDrop:function(t){var e=this.balls.length;while(e--){var s=this.balls[e];if(s.show){var o=document.documentElement.clientHeight,n=s.target.getBoundingClientRect(),i=n.left-32,r=o-n.top-22;b(t,"translateX",i+3),b(t,"translateY",20-r)}}},dropping:function(t){t.offsetHeight;this.$nextTick((function(){b(t,"translateX",0),b(t,"translateY",0)}))},afterDrop:function(t){var e=this.dropBalls.shift();e.show&&(e.show=!1,t.style.display="none")},flodFn:function(){this.totalCount<=0||(this.flod=!this.flod)},clear:function(){this.$emit("clear")},addCount:function(t){this.$emit("addCount",t)},removeCount:function(t){this.$emit("removeCount",t)}},components:{"ele-control":m},mounted:function(){var t=this;u.a.subscribe(f.ballAnimation,(function(e,s){t.drop(s)}))}},y=g,_=(s("16b9"),Object(v["a"])(y,C,w,!1,null,"16c2760c",null)),x=_.exports,P=0,O={name:"ele-goods",props:{seller:Object},data:function(){return{goods:[],scrollY:0,tops:[]}},computed:{selectedFoods:function(){var t=[];return this.goods.forEach((function(e){e.foods.forEach((function(e){e.count>0&&t.push(e)}))})),t},currentIndex:function(){var t=this.tops,e=this.scrollY,s=t.findIndex((function(s,o){return e>=s&&e<t[o+1]}));if(s!==this.oldindex){this.oldindex=s;var o=this.$refs.menuList.children[s];this.menuScroll.scrollToElement(o,300)}return s}},components:{"ele-icon":r["a"],"ele-control":m,"ele-cart":x},methods:{clear:function(){this.selectedFoods.forEach((function(t){t.count=0}))},addCount:function(t){t.count?t.count++:this.$set(t,"count",1)},removeCount:function(t){t.count>0&&t.count--},handleCForMenuList:function(t){var e=this.tops[t];this.foodsScroll.scrollTo(0,-e,300)},_initScroll:function(){var t=this;this.menuScroll=new i["a"](this.$refs.menuWrap,{click:!0}),this.foodsScroll=new i["a"](this.$refs.foodsWrap,{click:!0,probeType:3}),this.foodsScroll.on("scroll",(function(e){e.x;var s=e.y;t.scrollY=Math.abs(s)}))},_initTops:function(){var t=this.$refs.foodsList.children,e=0,s=[e];Array.from(t).forEach((function(t){e+=t.offsetHeight,s.push(e)})),this.tops=s}},mounted:function(){var t,e,s,o=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(this.$http.goods.getGoods());case 2:t=n.sent,e=t.errno,s=t.body,e===P&&(this.goods=s),this._initScroll(),this.$nextTick((function(){o._initTops()}));case 8:case"end":return n.stop()}}),null,this)}},S=O,k=(s("da1c"),Object(v["a"])(S,o,n,!1,null,"2a1cec7e",null));e["default"]=k.exports},"2a3b":function(t,e,s){},"4abd":function(t,e,s){},"4df4":function(t,e,s){"use strict";var o=s("f8c2"),n=s("7b0b"),i=s("9bdd"),r=s("e95a"),a=s("50c4"),c=s("8418"),l=s("35a1");t.exports=function(t){var e,s,u,f,d,h=n(t),v="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,C=void 0!==m,w=0,b=l(h);if(C&&(m=o(m,p>2?arguments[2]:void 0,2)),void 0==b||v==Array&&r(b))for(e=a(h.length),s=new v(e);e>w;w++)c(s,w,C?m(h[w],w):h[w]);else for(f=b.call(h),d=f.next,s=new v;!(u=d.call(f)).done;w++)c(s,w,C?i(f,m,[u.value,w],!0):u.value);return s.length=w,s}},"911a":function(t,e,s){(function(t){(function(s,o){"use strict";var n={};s.PubSub=n;var i=s.define;o(n),"function"===typeof i&&i.amd?i((function(){return n})):(void 0!==t&&t.exports&&(e=t.exports=n),e.PubSub=n,t.exports=e=n)})("object"===typeof window&&window||this,(function(t){"use strict";var e={},s=-1;function o(t){var e;for(e in t)if(t.hasOwnProperty(e))return!0;return!1}function n(t){return function(){throw t}}function i(t,e,s){try{t(e,s)}catch(o){setTimeout(n(o),0)}}function r(t,e,s){t(e,s)}function a(t,s,o,n){var a,c=e[s],l=n?r:i;if(e.hasOwnProperty(s))for(a in c)c.hasOwnProperty(a)&&l(c[a],t,o)}function c(t,e,s){return function(){var o=String(t),n=o.lastIndexOf(".");a(t,t,e,s);while(-1!==n)o=o.substr(0,n),n=o.lastIndexOf("."),a(t,o,e,s)}}function l(t){var s=String(t),n=Boolean(e.hasOwnProperty(s)&&o(e[s])),i=s.lastIndexOf(".");while(!n&&-1!==i)s=s.substr(0,i),i=s.lastIndexOf("."),n=Boolean(e.hasOwnProperty(s)&&o(e[s]));return n}function u(t,e,s,o){t="symbol"===typeof t?t.toString():t;var n=c(t,e,o),i=l(t);return!!i&&(!0===s?n():setTimeout(n,0),!0)}t.publish=function(e,s){return u(e,s,!1,t.immediateExceptions)},t.publishSync=function(e,s){return u(e,s,!0,t.immediateExceptions)},t.subscribe=function(t,o){if("function"!==typeof o)return!1;t="symbol"===typeof t?t.toString():t,e.hasOwnProperty(t)||(e[t]={});var n="uid_"+String(++s);return e[t][n]=o,n},t.subscribeOnce=function(e,s){var o=t.subscribe(e,(function(){t.unsubscribe(o),s.apply(this,arguments)}));return t},t.clearAllSubscriptions=function(){e={}},t.clearSubscriptions=function(t){var s;for(s in e)e.hasOwnProperty(s)&&0===s.indexOf(t)&&delete e[s]},t.unsubscribe=function(s){var o,n,i,r=function(t){var s;for(s in e)if(e.hasOwnProperty(s)&&0===s.indexOf(t))return!0;return!1},a="string"===typeof s&&(e.hasOwnProperty(s)||r(s)),c=!a&&"string"===typeof s,l="function"===typeof s,u=!1;if(!a){for(o in e)if(e.hasOwnProperty(o)){if(n=e[o],c&&n[s]){delete n[s],u=s;break}if(l)for(i in n)n.hasOwnProperty(i)&&n[i]===s&&(delete n[i],u=!0)}return u}t.clearSubscriptions(s)}}))}).call(this,s("62e4")(t))},a630:function(t,e,s){var o=s("23e7"),n=s("4df4"),i=s("1c7e"),r=!i((function(t){Array.from(t)}));o({target:"Array",stat:!0,forced:r},{from:n})},c740:function(t,e,s){"use strict";var o=s("23e7"),n=s("b727").findIndex,i=s("44d2"),r="findIndex",a=!0;r in[]&&Array(1)[r]((function(){a=!1})),o({target:"Array",proto:!0,forced:a},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(r)},da1c:function(t,e,s){"use strict";var o=s("4abd"),n=s.n(o);n.a},f1ba:function(t,e,s){"use strict";var o=s("0ce3"),n=s.n(o);n.a}}]);
//# sourceMappingURL=goods.d83c5f57.js.map