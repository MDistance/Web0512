<template>
	<div>
		<h2>home组件</h2>
		
		<!-- 安装插槽 -->
		<slot name="topSlot">
			
		</slot>
		<p>-----------------</p>
		<slot name="bottomSlot" :person='person'>
			
		</slot>
		
		<slot>我是插槽的默认内容: 后备内容 --- {{person.firstName}}</slot>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg:'子组件home的数据',
				person: {
					firstName: 'kobe',
					lastName: 'bryant'
				}
			}
		},
		
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
