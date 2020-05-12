<template>
  <div>
    <h1>App 组件</h1>
		
		<Home :getHomeData='getHomeData'></Home>
		<!-- 直接在html标签上绑定的click等事件是原生事件 -->
		<button @click="handleAppClick">app的测试按钮</button>
		<button @click="handleAppClick($event)">app的测试按钮222</button>
		<button @click="handleAppClick()">app的测试按钮333</button>
		<br>
		<br>
		<br>
		<br>
		
		<!-- 在组件标签上绑定的事件是自定义事件，该事件会绑定对应组件的实例对象身上， click是自己定义的事件， 浏览器不会主动去响应，需要我们自己触发 -->
		<!-- <Cart @myClick='handleCartClick'></Cart> -->
		<!-- <Cart v-on:myClick='handleCartClick'></Cart> -->
		<Cart ref='cart'></Cart>
  </div>
</template>

<script>
	import Home from './components/home'
	import Cart from './components/cart'
  export default {
		components: {
			Home, Cart
		},
		methods:{
			getHomeData(data){
				console.log('子组件传递给父组件的数据： ', data)
			},
			handleAppClick(event){
				console.log('app button绑定的click点击原生事件')
				console.log(event)
			},
			
			// 自定义事件
			handleCartClick(data){
				console.log('cart组件绑定自定义的click事件')
				console.log(data)
			}
		},
		beforeMount() {
			console.log('beforeMount ',this.$refs.cart)
		},
		mounted(){
			console.log('mounted ',this.$refs.cart)
			// 通过ref获取到真实的DOM对象，进而去绑定自定义事件
			this.$refs.cart.$on('myClick', this.handleCartClick)
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
