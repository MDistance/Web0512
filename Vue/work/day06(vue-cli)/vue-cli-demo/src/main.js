import Vue from 'vue'   //拿到的就是运行时的 vue 版本
import App from './App' //当前这个import 是webpack的语法!!! 不是原生的ES6 import


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)  //我们生成项目的时候选择的是runtime-only的版本  是不支持解析template的
})


/*
  template: '<div id="app">
    <span>test</span>
  </div>'
*/
