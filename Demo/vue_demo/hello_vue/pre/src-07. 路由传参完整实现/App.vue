<template>
  <div>
    <h1>App 组件</h1>
		<!-- 组件标签 -->
		<!-- params + name -->
		<router-link :to='{name: "Home", params: {id: 123, xxx: "abc"}}'>home链接 params传参</router-link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		
		<!-- params + path 不能使用 -->
		<!-- <router-link :to='{path: "/home", params: {id: 123, xxx: "abc"}}'>home链接 params传参</router-link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
		<!-- query  +  path -->
		<router-link :to='{path: "/cart", query: {a: 123, b: "abc"}}'>cart链接 query传参</router-link>&nbsp;&nbsp;
		
		<!-- query + name -->
		<!-- <router-link :to='{name: "Cart", query: {a: 123, b: "abc"}}'>cart链接 query传参</router-link>&nbsp;&nbsp; -->
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
