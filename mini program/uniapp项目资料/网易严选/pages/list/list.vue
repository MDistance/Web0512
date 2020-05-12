<template>
	<view class="listContainer">
		<div class="navList">
			<p :class='{active: navIndex === 0}' @click='handleClick(0)'>综合排序</p>
			<p :class='{active: navIndex === 1}' @click='handleClick(1)'>销量排序</p>
			<p :class='{active: navIndex === 2}' @click='handleClick(2)' class='price'>
				<span class='priceNav'>价格排序</span>
				<span class='jiantou'>
					<i class='iconfont icon-paixujiantoushang1' :class='{defaultSort: sortType}'></i>
					<i class='iconfont icon-paixujiantouxia1' :class='{defaultSort: !sortType}'></i>
				</span>
			</p>
		</div>
		<div class='shopListContainer' v-if='shopListArr.length'>
			<ShopList :shopList='newShopList'></ShopList>
		</div>
	</view>
</template>

<script>
	import ShopList from '../../components/shopList/shopList.vue'
	import {request} from '../../utils/request.js'
	export default {
		components: {ShopList},
		data() {
			return {
				navIndex: 0,
				sortType: true, // true代表升序， false代表降序
				clickCount: 0,
				shopListArr: [],
				newShopList: []
			}
		},
		methods: {
			handleClick(index){
				this.newShopList = []
				this.navIndex = index
				uni.showToast({
					icon: 'loading',
					title: '正在加载'
				})
				setTimeout(() => {
					// 修改导航标识
					if(index === 2){
						// 判断点击的是否是价格排序
						this.clickCount++
						// 通过点击的次数验证排序的方式，奇数为升序，偶数为降序
						if(this.clickCount%2 !== 0){ //  升序
							this.sortType = true
							this.newShopList = [...this.shopListArr].sort((a, b) => a.retailPrice - b.retailPrice)
						}else {  // 降序
							this.sortType = false
							this.newShopList = [...this.shopListArr].sort((a, b) => b.retailPrice - a.retailPrice)
						}
						
					}else {
						// 当点击其他的导航选项应该清空计数器
						this.clickCount = 0
						this.newShopList = this.shopListArr.reverse()
					}
					uni.hideToast()
				}, 1500)
			}
		},
		async mounted(){
			uni.showToast({
				icon: 'loading',
				title: '正在加载'
			})
			let result = await request('/getCateList')
			this.shopListArr = result[0].itemList
			this.newShopList = [...this.shopListArr]
			uni.hideToast()
		}
	}
</script>

<style lang="stylus">
	.listContainer
		.navList
			display flex
			width 100%
			background #fff
			position fixed
			top 0
			left 0
			p
				width 33.3333%
				height 80upx
				line-height 80upx
				text-align center
				font-size 28upx
				color #333333
				position relative
				&.active:after
					content ''
					width 40%
					height 4upx
					background #D43C33
					position absolute
					bottom 0
					left 30%
				&.price
					.jiantou
						background red
						position absolute
						.iconfont 
							font-size 28upx
							position absolute
							right -30upx
							top 4upx
							color #999
							&.defaultSort
								color #D43C33
		.shopListContainer
			margin-top 80upx
				
						
</style>
