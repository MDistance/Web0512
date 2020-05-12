<template>
    <footer class="footer_guide border-1px">
        <a href="javascript:;" class="guide_item" @click="goto(`/Msite`)" :class="{on:$route.path===`/Msite`}">
             <span class="item_icon">
                <i class="iconfont icon-waimai"></i>
             </span>
             <span>外卖</span>
        </a>
        <a href="javascript:;" class="guide_item" @click="goto(`/Search`)" :class="{on:$route.path===`/Search`}">
            <span class="item_icon">
                <i class="iconfont icon-search"></i>
            </span>
            <span>搜索</span>
        </a>
        <a href="javascript:;" class="guide_item" @click="goto(`/Order`)" :class="{on:$route.path===`/Order`}">
            <span class="item_icon">
                <i class="iconfont icon-dingdan"></i>
            </span>
            <span>订单</span>
        </a>
        <a href="javascript:;" class="guide_item" @click="goto(`/Profile`)" :class="{on:$route.path===`/Profile`}">
            <span class="item_icon">
              <i class="iconfont icon-geren"></i>
            </span>
            <span>我的</span>
        </a>
    </footer>
</template>

<script>
    export default {
        name: "FooterGuide",
        methods:{
            goto(path){
                //編程式导航
                this.$router.replace(path)
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .footer_guide
        top-border-1px(#e4e4e4)
        position fixed
        z-index 100
        left 0
        right 0
        bottom -3px
        background-color #fff
        width 100%
        height 50px
        display flex
        .guide_item
            display flex
            flex 1
            text-align center
            flex-direction column
            align-items center
            margin 5px
            color #999999
            &.on
                color #02a774
            span
                font-size 12px
                margin-top 2px
                margin-bottom 2px
                .iconfont
                    font-size 22px
</style>