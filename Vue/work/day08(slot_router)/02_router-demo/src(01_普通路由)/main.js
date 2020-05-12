import Vue from 'vue'
import App from './App'

// 1. 将vue-router定义成插件
// 2. 定义路由组件
// 3. 定义路由
// 4. 定义路由器
// 5. 将路由器挂载给根实例
import router from "@/router"

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
