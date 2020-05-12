import Vue from 'vue'
import App from './App'
import router from "router"
import http from "http"

Vue.config.productionTip = false;
Vue.prototype.$http = http;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
