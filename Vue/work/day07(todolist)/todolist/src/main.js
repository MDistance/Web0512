import Vue from 'vue'
import App from './App' //组件的配置对象
// import "../static/base.css"


//总线
Vue.prototype.$bus=new Vue();
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
