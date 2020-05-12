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
		
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
