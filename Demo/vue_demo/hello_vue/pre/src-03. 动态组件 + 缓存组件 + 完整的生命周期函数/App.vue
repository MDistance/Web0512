<template>
  <div>
    <h1>App 组件</h1>
		
		<!-- 导航列表 -->
		<div class="navList">
			<div class="navItem" @click="changeComName('Home')">
				home导航
			</div>
			<div class="navItem" @click="changeComName('Cart')">
				cart导航
			</div>
		</div>
		
		<!-- 动态组件 -->
		<!-- 动态组件在切换的时候会销毁之前的组件实例 -->
		<!-- keep-alive缓存组件，可以保证组件实例不被销毁 -->
		<keep-alive :exclude="['Cart']" >
			<component :is="comName" :getHomeData='getHomeData'></component>
		</keep-alive>
  </div>
</template>

<script>
	import Home from './components/home'
	import Cart from './components/cart'
  export default {
		components: {
			Home, Cart
		},
		data(){
			return {
				comName: 'Home'
			}
		},
		methods: {
			changeComName(comName){
				this.comName = comName
			},
			getHomeData(homeData){
				console.log('子组件home传递的数据： ', homeData);
			}
		},
		errorCaptured(errorObj, errorVM, errorMsg) {
			console.log('------------ errorCaptured 捕获子孙组件的错误 ------------')
			console.log(errorObj.message)
			console.log(errorObj, errorVM, errorMsg)
			// errorVM === 错误组件实例对象 === Home组件实例
			errorVM.getHomeData(errorVM.msg)
			return false // 阻止错误继续向上传播 默认解决了错误
		}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.navList
		display flex
		.navItem
			width 50%
			height 200px
			line-height 200px
			text-align center
			border 1px solid #eee
			
</style>
