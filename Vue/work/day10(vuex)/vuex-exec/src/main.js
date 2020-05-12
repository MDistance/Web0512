// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//vue生态的三剑客
import axios from "./http"
import router from './router'
import store from "./store"

//引入样式
import "@/common/card.css"

//注册总线
Vue.prototype.$bus=new Vue();
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
