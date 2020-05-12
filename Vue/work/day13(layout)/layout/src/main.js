import Vue from 'vue'
import App from './App.vue'


//1. 配置mock
import "@/mock";
//2. 注册axios
import http from "@/http";
Vue.prototype.$http = http;
//3. 注册router
import router from "@/router";
//4. 注册vuex
import store from "@/store";
//5. 引用字体图标
import "@/common/stylus/style.styl"


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
