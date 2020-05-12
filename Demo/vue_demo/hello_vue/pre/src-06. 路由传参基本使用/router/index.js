import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

// 1. 生成路由器
export default new VueRouter({
	routes, // 管理路由
	mode: 'hash' // 哈希路由管理模式
	// mode: 'history' // H5history对象管理模式
})