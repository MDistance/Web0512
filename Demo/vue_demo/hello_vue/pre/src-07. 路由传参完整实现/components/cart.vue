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
		
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	#cartContainer
		border 1px solid
		height 500px
</style>
