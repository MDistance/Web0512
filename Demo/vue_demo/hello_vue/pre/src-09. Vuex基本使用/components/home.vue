<template>
	<div>
		<h2>home组件</h2>
		<p>{{homeData}}</p>
		
		
		
		<br>
		<br>
		<br>
		<br>
		<br>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	export default {
		// props: {}, 外来户
		data(){ // 亲儿子
			return {
				msg: '测试'
			}
		},
		mounted() {
			// console.log(this.$store.state.home.initData)
			// this.$store.commit('changeHomeArr', [1,2,3]);
			
			// 分发action
			// this.$store.dispatch('getHomeDataAction')
			// 中大型的项目
			this.getHomeData()
			// const fun = function(){}
			// this.fun();
			// this.fun2();
		},
		// 计算属性， 通过已有的数据计算得到新的数据挂载到实例
		computed: { // 干儿子
			...mapState({
				homeData: state => state.home.initData,
				homeArr: state => state.home.homeArr
			})
		},
		methods: {// 放置所有事件的回调及自定义方法
			// 放在methods中的原因是因为action的本质是函数
			...mapActions({
				getHomeData: 'getHomeDataAction'
			}),
			
			fun2(){
				
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
