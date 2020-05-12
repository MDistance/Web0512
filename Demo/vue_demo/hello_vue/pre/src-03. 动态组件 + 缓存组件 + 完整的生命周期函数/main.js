import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

// 全局错误捕获
Vue.config.errorHandler = (errorObj, errorVM, errorMsg) => {
	console.log('------- 全局捕获 -----------')
	console.log(errorObj, errorVM, errorMsg)
}

const vm = new Vue({
  render: h => h(App),
}).$mount('#app')
