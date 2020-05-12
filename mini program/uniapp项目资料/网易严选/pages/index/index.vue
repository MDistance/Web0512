<template>
	<div id='indexContainer'>
		<IndexHeader></IndexHeader>
		<div class="navContainer">
			<scroll-view scroll-x="true">
				<view @click="changeNavIndex(0, 0)" class="navItem" :class="{activeClass: 0 === navIndex}">推荐</view>
				<view @click="changeNavIndex((index + 1), item.L1Id)" class="navItem " :class="{activeClass: (index + 1) === navIndex}" v-for="(item, index) in navList" :key='index'>{{item.text}}</view>
			</scroll-view>
		</div>
		<scroll-view scroll-y="true" class="contentContainer">
			<div id='content'>
				<Recommend v-if='navIndex=== 0'/>
				<CateList v-if='navIndex !== 0' :navId='navId'/>
			</div>
		</scroll-view>
	</div>
</template>

<script>
	import {request} from '../../utils/request.js'
	import Header from '../../components/header/header.vue'
	import Recommend from '../../components/recommend/recommend.vue'
	import CateList from '../../components/cateList/cateList.vue'
	export default {
		components: {
			Recommend,
			CateList,
			IndexHeader: Header
		},
		data(){
			return {
				navList: [ // 
					
				],
				navIndex: 0, // 标识下边框
				navId: 0
			}
		},
		methods:{
			changeNavIndex(index, navId){
				this.navIndex = index
				this.navId = navId
			}
		},
		async mounted(){
			let result = await request('/getIndex')
			this.navList = result.kingKongModule.kingKongList
		}
	}
</script>

<style lang="stylus">
	#indexContainer
		width 100%
		height 100%
		.navContainer
			height 80upx
			width 100%
			border-bottom 1upx solid #eee
			white-space nowrap /*该属性必须设置,官网没有明确说明*/
			// ::-webkit-scrollbar  /* 去除默认滚动条样式的 */
			// 	height 0
			
			.navItem
				width 140upx
				height 100%
				margin 0 10upx
				display inline-block /*该属性必须设置,官网没有明确说明*/
				line-height 80upx
				text-align center
				font-size 28upx
				position relative
				&.activeClass:after
					content ''
					height 1upx
					width 100%
					position absolute
					bottom 0
					left 0
					background #BB2C08
					// z-index 99!important
		.contentContainer
			width 100%
			height calc(100vh - 162upx)
			::-webkit-scrollbar
				width 0
		
</style>
