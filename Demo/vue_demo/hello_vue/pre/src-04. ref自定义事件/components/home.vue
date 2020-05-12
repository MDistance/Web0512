<template>
	<div>
		<h2>home组件</h2>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg:'子组件home的数据'
			}
		},
		props:  ['getHomeData'],
		mounted(){
			this.getHomeData(this.msg)
			// 页面下一次重新渲染之后
			this.$nextTick(() => {
				// 事件总线
				this.$eventBus.$emit('eventBusClick');
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
