<template>
	<div>
		<h2>home组件</h2>
	</div>
</template>

<script>
	export default {
		props: {
			getHomeData: {
				type: Function,
				required: true
			}
		},
		data(){
			return {
				msg: '子组件 home组件的数据'
			}
		},
		mounted() {
			console.log('Home mounted()')
			// 发送请求，如果要求数据实时性较高的话，当前组件被缓存起来会导致数据更新不及时
			
			// 抛出错误
			console.log(aaa)
			// this Home组件实例对象
			this.getHomeData(this.msg)
		},
		destroyed() {
			console.log('-----Home destroyed()------------')
			// 收尾工作，比如： 清除定时器
		},
		activated() {
			console.log('------------- Home activated 缓存组件被激活 ---------')
			// 需要和keep-alive搭配使用
			// 可以用来取代mounted中的操作，尤其是数据更新实时性高的，如： 炒股软件
		},
		deactivated() {
			console.log('------------- Home deactivated 缓存被停用 ---------')
			// 用来取代 destroyed 中的操作
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
