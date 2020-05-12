<template>
	<div id='categoryContainer'>
		<div class="header">
			<div class='headerBg'></div>
			<span>搜索商品</span>
		</div>
		
		<div class="content">
			<div class="left">
				<scroll-view  class="scrollContainer" scroll-y="true" show-scrollbar='false'>
						<ul class='navList'>
							<li @click='changeActive(index)' v-for='(item,index) in categoryDatas' :key='index' :class='{active: index === navIndex}'>{{item.name}}</li>
						</ul>
				</scroll-view>
			</div>
			<div class="right" >
				<scroll-view scroll-y="true" v-if='categoryDatas.length' class="scrollContainer">
					<div class="proList">
						<image class="cateImg" :src="categoryDatas[navIndex].imgUrl" mode=""></image>
						<div @click='toList' class='proItem' v-for='(item, index) in categoryDatas[navIndex].subCateList' :key='index'>
							<image :src="item.wapBannerUrl" mode=""></image>
							<p>{{item.name}}</p>
						</div>
					</div>
				</scroll-view>
			</div>
		</div>
	</div>
</template>

<script>
	import {request} from '../../utils/request.js'
	export default {
		data(){
			return {
				categoryDatas: [],
				navIndex: 0
			}
		},
		async mounted(){
			let categoryDatas = await request('/getCategoryDatas')
			// 更新状态categoryDatas的状态值
			this.categoryDatas = categoryDatas
		},
		methods: {
			changeActive(index){
				this.navIndex = index
			},
			toList(){
				wx.navigateTo({
					url: '/pages/list/list'
				})
			}
		}
	}
</script>

<style lang="stylus">
	
	#categoryContainer
		.header 
			width 100%
			height 56rpx
			position relative
			padding 20rpx 0
			.headerBg 
				width 90%
				height 56rpx
				background #EDEDED
				margin auto
				border-radius 10rpx 
			span 
				position absolute
				text-align center 
				height 56rpx 
				line-height 56rpx
				left 0
				top 20rpx
				width 100%
				font-size 24rpx
		.content 
			border-top 1rpx solid #eee 
			display flex 
			width 100%
			.left 
				width 20%
				border-right 1rpx solid #eee
				font-size 28upx
				box-sizing border-box
				.scrollContainer 
					height calc(100vh - 96rpx) /* 1vh = 屏幕高度的百分之一 */
					::-webkit-scrollbar  /* 去除默认滚动条样式的 */
						width 0
					.navList 
						li 
							height 80rpx
							line-height 80rpx
							text-align center
							margin 10rpx 0
							&.active
								color #B4282D
								position relative
								&:after
									content ''
									height 70%
									width 2rpx 
									background #B4282D
									position absolute
									top 15%
									left 6upx
									
			.right 
				width 80%
				.scrollContainer
					height calc(100vh - 96rpx)
				.proList
					width 100%
					display flex
					flex-wrap wrap
					.cateImg
						width 520upx
						height 190upx
						margin 20upx auto
					.proItem 
						width 33%
						padding 10upx
						box-sizing border-box
						display flex 
						align-items center
						flex-direction column
						image 
							width 90% 
							height 144upx
						p
							font-size 24upx
							text-align center
				
</style>
		