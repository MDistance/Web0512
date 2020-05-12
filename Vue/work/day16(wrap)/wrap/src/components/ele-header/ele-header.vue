<template>
    <div class="header">
        <div class="top">
            <div class="left">
                <img :src="seller.avatar" class="avatar">
            </div>
            <div class="right">
                <div class="title">
                    <i class="brand"></i>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="info">
                    <span>{{seller.description}}/{{seller.deliveryTime}}分钟送达</span>
                </div>
                <div class="support" v-if="seller.supports && seller.supports[0]">
                    <ele-icon class="icon" size="1" :type="seller.supports[0].type"></ele-icon>
                    <span class="text">{{seller.supports[0].content}}</span>
                </div>
            </div>
            <div class="btns" @click="showMask = true">
                <div>
                    <span v-if="seller.supports" class="text">
                        {{seller.supports.length}}个
                    </span>
                    <i class="layout-keyboard_arrow_right"></i>
                </div>
            </div>
        </div>
        <div class="bulletin" @click="showMask = true">
            <div class="content">
                <i class="icon"></i>
                <span class="text">{{seller.bulletin}}</span>
            </div>
            <i class="layout-keyboard_arrow_right arrow"></i>
        </div>
        <div class="bg">
            <img :src="seller.bgImg" class="avatar">
        </div>
        <transition name="mask">
            <div class="mask" v-show="showMask">
                <div class="mainWrap">
                    <div class="main">
                        <!--真正存放那内容的地方 在这个内部要清除浮动-->
                        <!--因为main的高度对整个css sticky footer 有着至关重要的作用-->
                        <!--不能让main中浮动的元素影响main的高度-->
                        <h2 class="title">{{seller.name}}</h2>
                        <div class="starsWrap">
                            <ele-stars size="48" :score="seller.score"></ele-stars>
                        </div>
                        <ele-line class="line">
                            <span class="text">优惠信息</span>
                        </ele-line>
                        <ele-list class="list" :supports="seller.supports"></ele-list>
                        <ele-line class="line">
                            <span class="text">商家公告</span>
                        </ele-line>
                        <p class="bulletin">
                            {{seller.bulletin}}
                        </p>
                    </div>
                </div>
                <div class="footer" @click="showMask = false">
                    <i class="layout-close"></i>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import line from "components/ele-line/ele-line.vue"
    import list from "components/ele-list/ele-list.vue"
    import stars from "components/ele-stars/ele-stars.vue"
    export default {
        name: "ele-header",
        data(){
          return {
              showMask:false
          }
        },
        computed:{
            ...mapState(["seller"])
        },
        components:{
            "ele-line":line,
            "ele-list":list,
            "ele-stars":stars
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"
    @import "../../common/stylus/extend.styl"
    .header
        position relative
        background rgba(7,17,27,.5)
        overflow hidden
        & > .top
            display flex
            padding 24px 0 18px 24px
            position relative
            & > .left
                width 64px
                height 64px
                margin-right 16px
                .avatar
                    width 100%
                    height 100%
                    border-radius 2px
            & > .right
                .title
                    center()
                    font-size 16px
                    line-height 18px
                    font-weight bold
                    color rgba(255,255,255,1)
                    margin-top 2px
                    margin-bottom 8px
                    .brand
                        bg-image(brand)
                        display inline-block
                        width 30px
                        height 18px
                        background-repeat no-repeat
                        background-size 100%
                        margin-right 6px
                .info
                    font-size 12px
                    line-height 12px
                    font-weight 200
                    color rgba(255,255,255,1)
                .support
                    center()
                    justify-content flex-start
                    font-size 10px
                    line-height 12px
                    font-weight 200
                    color rgba(255,255,255,1)
                    margin-top 10px
                    margin-bottom 2px
                    .icon
                        margin-right 4px
            & > .btns
                center()
                position absolute
                right 4px
                bottom 5px
                width 48px
                height 24px
                background rgba(0,0,0,.2)
                border-radius 16px
                color rgba(255,255,255,1)
                font-size 10px
                font-weight 200
                line-height 12px
                @media screen and (max-width 325px)
                    bottom 35px
                .text
                    margin-right 2px

        & > .bulletin
            center()
            position relative
            padding-left 12px
            padding-right 26px
            height 28px
            background rgba(7,17,27,.2)
            .content
                width 100%
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                font-size 10px
                font-weight 200
                color rgba(255,255,255,1)
                .icon
                    bg-image(bulletin)
                    display inline-block
                    width 22px
                    height 12px
                    background-repeat no-repeat
                    background-size 100%
                    margin-right 4px
                    flex-basis 22px
                .text
                    position relative
                    top -2px;
            .arrow
                position absolute
                right 12px
                color rgba(255,255,255,1)
        & > .bg
            z-index -1
            position absolute
            left 0
            right 0
            top 0
            bottom 0
            filter blur(3px)
            img
                width 100%
                height 100%


        & > .mask
            z-index 9
            position fixed
            left 0
            right 0
            top 0
            bottom 0
            backdrop-filter:blur(10px)
            background rgba(7,17,27,.8)
            overflow auto
            .mainWrap
                min-height 100%
                .main
                    @extend .clearfix
                    padding-bottom 96px
                    padding-top 64px
                    .title
                        font-size 16px
                        line-height 16px
                        font-weight 700
                        color rgba(255,255,255,1)
                        text-align center
                    .line
                        width 80%
                        margin 0 auto
                        .text
                            margin 0 12px
                    .starsWrap
                        width 80%
                        margin 0 auto
                        text-align center
                        margin-top 16px
                        margin-bottom 28px
                    .list
                        box-sizing border-box
                        width 80%
                        padding 0 12px
                        margin 0 auto
                        margin-top 24px
                        margin-bottom 28px
                    .bulletin
                        box-sizing border-box
                        width 80%
                        margin 0 auto
                        margin-top 24px
                        font-size 12px
                        line-height 24px
                        color rgba(255,255,255,1)
                        padding 0 12px
            .footer
                margin-top -96px
                height 96px
                line-height 96px
                text-align center
                font-size 32px
                color rgba(255,255,255,.5)
</style>