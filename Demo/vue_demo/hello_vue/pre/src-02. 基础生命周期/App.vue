<template>
  <div>
    <h1>App 组件</h1>
		<p>{{num}}</p>
  </div>
</template>

<script>
	
  export default {
		data(){
			return {
				msg: '初始化测试数据',
				num: 1
			}
		},
		// 组件实例的生命周期： C M U D 
		beforeCreate() {
			console.log('---------- beforeCreate 初始化事件和生命周期之后, 数据劫持代理之前 ------------')
			// 没有进行数据劫持代理
			console.log(this.msg) // undefined
			this.msg = '修改之后的数据' // 在beforeCreate中直接通过实例this去修改状态数据无效 
			
			// 获取data中的数据： Vue在初始化实例之后会将实例所有配置信息放置在实例的$options属性中
			console.log(this.$options.data().msg)
			
			// 不能去发送ajax请求，无法直接更新data中状态数据
			console.log('----------- $el --------------' )
			console.log(this.$el)
		},
		created() {
			console.log('---------- created ------------')
			// 进行数据劫持代理 对数据监测
			console.log(this.msg)
			console.log('----------- $el --------------' )
			console.log(this.$el)
			
			// 可以发送ajax请求
			// 注意： 不要将运算量特别大的代码或者多个请求操作放置在此，因为会影响页面的渲染时间，可能导致界面长时间白屏， beforeMount也一样
		},
		beforeMount() {
			console.log('---------- beforeMount ------------')
			console.log('----------- $el --------------' )
			console.log(this.$el)
			
			// 注意： 不要将运算量特别大的代码或者多个请求操作放置在此，因为会影响页面的渲染时间
			// debugger
		},
		mounted() {
			console.log('---------- mounted ------------')
			console.log('----------- $el 在mounted可见 --------------' )
			// $el：虚拟DOM对象转换后的真实DOM对象片段 直接去替换掉之前的容器, 区别： React中是插入而不是替换
			console.log(this.$el)
			
			
			this.intervalId = setInterval(() => {
				console.log('setinterval()')
				this.num++
			}, 1000)
			
			// 销毁组件实例
			setTimeout(() => {
				// Vue中的销毁指的是销毁Vue应用的实例，销毁后页面会保留销毁之前的状态
				this.$destroy()
			}, 3000)
		},
		beforeUpdate() {
			console.log('---------- beforeUpdate ------------')
			// 页面更新的时候才会执行， 数据更新不一定伴随页面更新，页面更新一定有数据更新
		},
		updated() {
			console.log('---------- updated ------------')
		},
		beforeDestroy() {
			console.log('---------- beforeDestroy ------------')
			clearInterval(this.intervalId)
		},
		destroyed() {
			console.log('---------- destroyed ------------')
		}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
