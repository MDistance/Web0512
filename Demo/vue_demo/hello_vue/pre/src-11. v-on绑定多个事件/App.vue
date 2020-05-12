<template>
  <div>
    <h1>App 组件</h1>
		<button v-on="{mouseleave: handleMouseLeave, click: handleClick}">测试v-on</button>
		<br>
		<br>
		<br>
		<Home></Home>
		<Cart></Cart>
  </div>
</template>

<script>
	import Home from './components/home'
	import Cart from './components/cart'
  export default {
		components: {
			Home, Cart
		},
		methods: {
			handleClick(){
				console.log('click');
			},
			handleMouseLeave(){
				console.log('handleMouseLeave')
			}
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
