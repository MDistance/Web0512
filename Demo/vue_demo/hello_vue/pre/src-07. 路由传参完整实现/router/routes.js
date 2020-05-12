import Home from '../components/home.vue';
import Cart from '../components/cart.vue';
import Personal from '../components/personal.vue';


export default [
	// params传参： 需要注册路由的时候声明占位符
	{
		path: '/home/:id',
		component: Home,
		name: 'Home',
		props: true // 允许params参数导入props中
	},
	// query传参： 注册路由的时候不需要做任何处理
	{
		path: '/cart',
		component: Cart,
		name:  'Cart'
	},
	// meta传参： 只需要在注册路由的时候声明参数就行
	{
		path: '/personal',
		component: Personal,
		meta: {
			isShowFooter: true
		},
		// props对象的形式通常用于导入静态数据
		// props: {
		// 	myPropsValue:  '这是我通过注册路由的时候导入的props数据'
		// }
		props: route => ({msg: '静态数据', isShowFooter: route.meta.isShowFooter, path: route.path})
	},
	{
		path: '/',
		redirect: '/home' // 路由重定向
	}
]