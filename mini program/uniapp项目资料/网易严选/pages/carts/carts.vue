<template>
	<view class="cartContainer">
		<div class='noLogin' v-if='isLogin'>
			<image class="emptyCart" src="../../static/images/carts/emptyCart.gif" mode=""></image>
			<button class="login" @click="toLogin">登录</button>
		</div>
		<div class="isLogin" v-else>
			<div class='all'>全部商品</div>
			<div class="goodsList">
				<div class="goodItem">
					<div class='icon'>
						<i class='iconfont icon-duihao'></i>
					</div>
					<image class="goodImg" src="../../static/yunyinyue.jpg" mode=""></image>
					<div class="goodInfo">
						<p class="godName">bose耳机</p>
						<p class="goodPrice">1600</p>
					</div>
					<div class="countCtrl">
						<div class="del">-</div>
						<div class="count">1</div>
						<div class="add">+</div>
					</div>
				</div>
				
				
				<div class="goodItem">
					<div class='icon'>
						<i class='iconfont icon-duihao'></i>
					</div>
					<image class="goodImg" src="../../static/yunyinyue.jpg" mode=""></image>
					<div class="goodInfo">
						<p class="godName">bose耳机</p>
						<p class="goodPrice">1600</p>
					</div>
					<div class="countCtrl">
						<div class="del">-</div>
						<div class="count">1</div>
						<div class="add">+</div>
					</div>
				</div>
				
				
				<div class="goodItem">
					<div class='icon'>
						<i class='iconfont icon-duihao'></i>
					</div>
					<image class="goodImg" src="../../static/yunyinyue.jpg" mode=""></image>
					<div class="goodInfo">
						<p class="godName">bose耳机</p>
						<p class="goodPrice">1600</p>
					</div>
					<div class="countCtrl">
						<div class="del">-</div>
						<div class="count">1</div>
						<div class="add">+</div>
					</div>
				</div>
				
				
		
			
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: false,
				cartsList: [
					{
						name: 'USA',
						value: '美国',
						checked: 'false',
						imgUrl: 'http://m.360buyimg.com/babel/jfs/t5197/28/400249159/97561/304ce550/58ff0dbeN88884779.jpg!q50.jpg.webp'
					},
					{
							name: 'CHN',
							value: '中国',
							checked: 'true',
							imgUrl: 'http://m.360buyimg.com/babel/jfs/t5197/28/400249159/97561/304ce550/58ff0dbeN88884779.jpg!q50.jpg.webp'
					}
				],
				
			}
		},
		methods: {
			toLogin(){
				wx.navigateTo({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="stylus">
	.cartContainer
		display flex
		flex-direction column
		align-items center
		.noLogin
			.emptyCart
				width 400upx
				height 300upx
				margin-top 250upx
				
			.login
				width 300upx
				height 70upx
				background #DD1A21
				color #FFFFFF
				font-size 26upx
				line-height 70upx
				text-align center
				margin-top 100upx
		.isLogin
			width 100%
			background #f5f5f5
			.all
				line-height 60upx
				font-weight bold
			.goodsList
				.goodItem
					width 100%
					height 160upx
					padding 20upx 0
					display flex 
					align-items center
					background #FFFFFF
					margin 30upx 0
					position relative
					.icon 
						width 32upx
						height 32upx
						border-radius 50%
						border 6upx solid #eee
						text-align center
						line-height 32upx
						margin 0 40upx
						.iconfont 
							font-size 24upx
							font-weight bold
							color red
					.goodImg 
						width 160upx
						height 160upx
						margin-right 40upx
					.goodInfo
						height 100%
						font-size 28upx
						color #666
						line-height 40upx
					.countCtrl
						position absolute
						bottom 20upx
						right 20upx
						display flex
						div
							border 1upx solid #eee
							padding 0 20upx
							font-size 28rpx
							height 40rpx
							line-height 40rpx
							&:nth-child(2n)
								border-right none
								border-left none
							
</style>
