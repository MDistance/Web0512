import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
Vue.config.productionTip = false


const vm = new Vue({
  render: h => h(App),
}).$mount('#app')

// let a = 123;
// ;()(function () {
//   console.log('立即执行函数');
// })
