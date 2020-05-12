<template>
	<div>
		<h2>home组件</h2>
		<p>子组件home: {{num}}</p>
		<p>{{person.name}}</p>
		<br>
		<br>
		<br>
		<br>
		<br>
	</div>
</template>

<script>
	export default {
		// this.props.person = person perosn数据来源于父组件 引用传递
		// this.props.num = num  num 数据来源于父组件  值传递
		
		props: ['num', 'person'],
		data(){ // 亲儿子
			return {
				msg: '测试'
			}
		},
		mounted() {
			setTimeout(() => {
				// this.num = 123
				// this.person.name = 'curry'
			}, 2000)
		},
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
