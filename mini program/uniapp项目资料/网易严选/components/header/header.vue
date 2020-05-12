<template>
	 <div class="header-search-login">
			<image class="logo" src="../../static/images/logo.png" ></image>
			<div class="searchInput" >
				<!-- 不方便适配定位 -->
				 <!-- <icon type="search" size="14"/> -->
				 <!-- 使用阿里矢量图标库，需要引入阿里资源 -->
				 <i class='iconfont icon-sousuo'></i>
				 <input type="text" placeholder="搜索商品" placeholder-class="placeholder">
			</div>
			<button>登录</button>
		</div>
</template>

<script>
</script>

<style lang="stylus">



.header-search-login
	display flex
	width 100%
	height 60upx
	padding 10upx 0
	.logo
		width 140upx
		height 40upx
		margin 10upx 30upx
	.searchInput 
		height 60upx
		width 440upx
		background #ededed
		position relative
		border-radius 10upx
		.iconfont
			font-size 30upx
			position absolute
			left 10upx 
			top 25%
		// icon
		// 	position absolute
		// 	left 10upx
		// 	top 25%
		input
			border-radius 10upx
			height 60upx
			width 390upx
			margin-left 50upx
		.placeholder
			font-size 24upx
			color #666
	button
		width 124upx
		height 60upx
		color #b4282d
		line-height 56upx
		text-align center
		font-size 24upx
		margin 0 20upx
</style>
