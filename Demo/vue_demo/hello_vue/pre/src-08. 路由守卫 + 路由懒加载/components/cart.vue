<template>
	<div id="cartContainer">
		<h2>cart组件</h2>
		<p>query请求参数： {{$route.query.a}} --- {{$route.query.b}}</p>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg:'cart子组件的数据'
			}
		},
		// beforeRouteUpdate (to, from, next) {
		// 	// 在当前路由改变，但是该组件被复用时调用
		// 	// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
		// 	// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
		// 	// 可以访问组件实例 `this`
		// 	console.log('------------ cart beforeRouteUpdate  组件更新守卫---------------')
		// },
		
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	#cartContainer
		border 1px solid
		height 500px
</style>
