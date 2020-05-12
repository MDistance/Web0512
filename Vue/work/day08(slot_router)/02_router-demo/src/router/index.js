import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

import routes from "routes";
export default new VueRouter({
  routes,
  mode:"history",
  linkActiveClass:"active"//在有嵌套路由的情况下 我们一般都使用linkActiveClass 进行模糊匹配
  // linkExactActiveClass:"active"
})
