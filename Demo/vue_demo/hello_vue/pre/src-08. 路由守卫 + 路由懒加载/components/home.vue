<template>
	<div>
		<h2>home组件</h2>
		<!-- <p>params传参内容: {{$route.params.id}} --- {{$route.params.xxx}}</p> -->
		<p>params传参内容: {{id}} --- {{xxx}}</p>
	</div>
</template>

<script>
	export default {
		// 需要通过props接收
		props: ['id', 'xxx'],
		data(){
			return {
				msg:'子组件home的数据',
				person: {
					firstName: 'kobe',
					lastName: 'bryant'
				}
			}
		},
		// 路由跳转至当前路由组件的时候
		beforeRouteEnter (to, from, next) {
			// 在渲染该组件的对应路由被 confirm 前调用
			// 不！能！获取组件实例 `this`
			// 因为当守卫执行前，组件实例还没被创建
			console.log('------------ beforeRouteEnter  组件进入守卫 2---------------')
			console.log(this) // undefined
			next()
		},
		// 在当前路由改变，但是该组件被复用时调用， 通常指的是 路由路径没变，路由参数发生改变的时候
		beforeRouteUpdate (to, from, next) {
			// 在当前路由改变，但是该组件被复用时调用
			// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
			// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
			// 可以访问组件实例 `this`
			console.log('------------ beforeRouteUpdate  组件更新守卫---------------')
			console.log(this)
			next()
		},
		
		// 从当前的路由跳转至别的路由下
		beforeRouteLeave (to, from, next) {
			// 导航离开该组件的对应路由时调用
			// 可以访问组件实例 `this`
			console.log('------------ beforeRouteLeave  离开组件守卫---------------')
			next() // 最终组件放手
		}
		
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
