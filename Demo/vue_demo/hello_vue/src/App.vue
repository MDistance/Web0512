<template>
  <div>
    <h1>App 组件</h1>
		<button v-on="{mouseleave: handleMouseLeave, click: handleClick}">测试v-on</button>
		<p v-cloak>{{num}}</p>
		<p v-cloak>{{person.name}}</p>
		
		<ul>
			<li v-for="(item, index) in arr" :key='index'>
				{{item}}
			</li>
		</ul>
		<br>
		<br>
		<br>
		<Home :num='num' :person='person'></Home>
		<Cart></Cart>
  </div>
</template>

<script>
	import Home from './components/home'
	import Cart from './components/cart'
  export default {
		data(){
			return {
				num: 1,
				person: {
					name: 'kobe'
				},
				arr: [1,2,3,3,4,5,5,6]
			}
		},
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
		},
		beforeMount() {
			for(let i = 0; i< 100000; i++){
				console.log(i)
			}
		}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	[v-cloak]
		display none
	.navList
		display flex
		.navItem
			width 50%
			height 200px
			line-height 200px
			text-align center
			border 1px solid #eee
			
</style>
