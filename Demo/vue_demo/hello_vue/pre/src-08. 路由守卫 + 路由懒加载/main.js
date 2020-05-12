import Vue from 'vue'
import router from './router'
import App from './App.vue'
Vue.config.productionTip = false

// 全局错误捕获
Vue.config.errorHandler = (errorObj, errorVM, errorMsg) => {
	console.log('------- 全局捕获 -----------')
	console.log(errorObj, errorVM, errorMsg)
}


Vue.prototype.$eventBus = new Vue() 

const vm = new Vue({
  render: h => h(App),
	router
}).$mount('#app')
