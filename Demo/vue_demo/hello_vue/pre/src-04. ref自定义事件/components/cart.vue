<template>
	<div id="cartContainer">
		<h2>cart组件</h2>
		<button @click="handleClick">cart内部的按钮</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg:'cart子组件的数据'
			}
		},
		methods:{
			handleClick(){
				// 触发给cart组件绑定的自定义事件 myClick
				console.log('cart按钮的点击事件')
				this.$emit('myClick', this.msg)
			}
		},
		mounted() {
			
			// 绑定事件一定发生在触发之前，否则无法触发
			this.$eventBus.$on('eventBusClick', () => {
				console.log('------事件总线的形式绑定自定义事件------')
			});
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	#cartContainer
		border 1px solid
		height 500px
</style>
