<template>
	<div>
		<h2>personal组件</h2>
		<p>props导入的数据: {{msg}}</p>
	</div>
</template>

<script>
	export default {
		// props: ['myPropsValue']
		props: ['msg', 'isShowFooter', 'path']
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
