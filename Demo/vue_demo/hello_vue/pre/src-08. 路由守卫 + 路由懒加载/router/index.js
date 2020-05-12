import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

// 1. 生成路由器
const router = new VueRouter({
	routes, // 管理路由
	mode: 'hash' // 哈希路由管理模式
	// mode: 'history' // H5history对象管理模式
})

// 一次完整的路由跳转全局的三个钩子函数都会参与
router.beforeEach((to, from, next) => {
	// 西游记： 贫僧从东土大唐而来(from)，要去西天取经(to)，途径宝地，望发放通关文牒(next)
	console.log(from, to, next)
  console.log('------------ beforeEach 全局前置守卫1---------------')
	next()
})

router.beforeResolve((to, from, next) => {
	// 
  console.log('------------ beforeResolve 全局解析守卫 3---------------')
	next()
})

router.afterEach((to, from) => {
	// 唐僧在女儿国回头望月看女儿国国王的一瞬间
	// 
  console.log('------------ afterEach 全局后置钩子 4---------------')
})
export default router