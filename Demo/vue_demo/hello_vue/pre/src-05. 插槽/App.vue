<template>
  <div>
    <h1>App 组件</h1>
		
		<Home >
			<!-- 当需要传递的数据是标签数据的时候考虑使用slot -->
			<!-- 具名插槽的全写方式： template + v-slot -->
			<!-- <template v-slot:topSlot>
				<p>我是往上边插槽注入的内容</p>
			</template>
			<template v-slot:bottomSlot>
				<p>我是往下边插槽注入的内容</p>
			</template> -->
			
			<!-- 具名插槽的简写方式 -->
			<template #topSlot>
				<p>我是往上边插槽注入的内容</p>
			</template>
			<template v-slot:bottomSlot='{person}' >
				<p>我是往下边插槽注入的内容 --- {{person.lastName}}</p>
			</template>
		</Home>
		
		<br>
		<br>
		<br>
		<br>
		<br>
		<Cart ></Cart>
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
