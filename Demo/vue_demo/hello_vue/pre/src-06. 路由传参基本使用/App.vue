<template>
  <div>
    <h1>App 组件</h1>
		<!-- 组件标签 -->
		<router-link to='/home/123'>home链接 params传参</router-link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<router-link to='/cart?a=1&b=2'>cart链接 query传参</router-link>&nbsp;&nbsp;
		<router-link to='/personal'>personal链接 meta传参</router-link>
		<br>
		<br>
		<br>
		<br>
		<br>
		<router-view></router-view>
		<!-- <Home ></Home> -->
  </div>
</template>

<script>
	import Home from './components/home'
	import Cart from './components/cart'
  export default {
		components: {
			Home, Cart
		},
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
