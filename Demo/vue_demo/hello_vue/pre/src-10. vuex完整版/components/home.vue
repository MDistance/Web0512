<template>
	<div>
		<h2>home组件</h2>
		<p>{{homeData}}</p>
		<p>{{newNum}}</p>
		<button @click="emitAction">分发action获取数据</button>
		
		
		<ul>
			<li v-for="(item, index) in homeArr" :key='index'>{{item}}</li>
		</ul>
		<br>
		<br>
		<br>
		<br>
		<br>
	</div>
</template>

<script>
	import {mapState, mapActions, mapGetters} from 'vuex'
	export default {
		// props: {}, 外来户
		data(){ // 亲儿子
			return {
				msg: '测试',
				num:  1
			}
		},
		beforeMount() {
			window.addEventListener('beforeunload', () => {
				// console.log('xxxx');
				// sessionStorage.setItem('test', '测试数据')
				// 将需要保存的数据存储值sessionStorage
				sessionStorage.setItem('homeArr', JSON.stringify(this.homeArr))
			})
		},
		mounted() {
			// console.log(this.$store.state.home.initData)
			// this.$store.commit('changeHomeArr', [1,2,3]);
			
			// 分发action
			// this.$store.dispatch('getHomeDataAction')
			// 中大型的项目分发action
			// this.getHomeData()
			// const fun = function(){}
			// this.fun();
			// this.fun2();
			// if(sessionStorage.getItem('homeArr')){
			// 	this.$store.commit('changeHomeArr', JSON.parse(sessionStorage.getItem('homeArr')))
			// }
			sessionStorage.getItem('homeArr') && this.$store.commit('changeHomeArr', JSON.parse(sessionStorage.getItem('homeArr'))) 
			
		},
		// 计算属性， 通过已有的数据计算得到新的数据挂载到实例
		computed: { // 干儿子
			...mapState({
				homeData: state => state.home.initData,
				homeArr: state => state.home.homeArr
			}),
			...mapGetters(['newArr']),
			newNum(){
				return this.num + 10
			},
			storeState(){
				return this.$store.state
			}
		},
		methods: {// 放置所有事件的回调及自定义方法
			// 放在methods中的原因是因为action的本质是函数
			...mapActions({
				getHomeData: 'getHomeDataAction'
			}),
			
			fun2(){
				
			},
			emitAction(){
				this.getHomeData()
			}
		},
		watch: {
			// $route(){
				
			// }
			// $store(){
			// 	console.log('监听到变化')
			// }
			
			// $store: {
			// 	deep: true,
			// 	handler: function(){
			// 		console.log('监听到变化')
			// 	}
			// }
			storeState: {
				deep: true,
				handler: function(){
					console.log('监听到变化')
				}
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
