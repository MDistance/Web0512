// 静态引入 import xxx from 'xx'
// import Home from '../components/home.vue';
// import Cart from '../components/cart.vue';
// import Personal from '../components/personal.vue';

// 动态引入，路由组件懒加载
const Home = () => import('../components/home.vue')
const Cart = () => import('../components/cart.vue')
const Personal = () => import('../components/personal.vue')


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
		name: 'Person',
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
		redirect: '/home/0' // 路由重定向
	}
]