<template>
    <div class="shop-info" ref="wrap">
        <div class="info-content">
            <section class="section">
                <h3 class="section-title">配送信息</h3>
                <div class="delivery">
                    <div>
                        <span class="delivery-icon">{{seller.description}}</span>
                        <span>由商家提供配送，约{{seller.deliveryTime}}分钟送达，距离{{seller.distance}}</span>
                    </div>
                    <div class="delivery-money">配送费￥{{seller.deliveryPrice}}</div>
                </div>
            </section>
            <div class="split"></div>
            <section class="section">
                <h3 class="section-title">活动与服务</h3>
                <div class="activity">
                    <ele-list class="list"
                              :supports="seller.supports" color="black"></ele-list>
                </div>
            </section>
            <div class="split"></div>
            <section class="section">
                <h3 class="section-title">商家实景</h3>
                <div class="pic-wrapper" ref="picWrapper">
                    <ul class="pic-list">
                        <li class="pic-item" v-for="(pic,index) in seller.pics" :key="index">
                            <img width="120" height="90" :src="pic">
                        </li>
                    </ul>
                </div>
            </section>
            <div class="split"></div>
            <section class="section">
                <h3 class="section-title">商家信息</h3>
                <ul class="detail">
                    <li>
                        <span class="bold">品类</span>
                        <span>{{seller.category}}</span>
                    </li>
                    <li>
                        <span class="bold">商家电话</span>
                        <span>{{seller.phone}}}</span>
                    </li>
                    <li>
                        <span class="bold">地址</span>
                        <span>{{seller.address}}</span>
                    </li>
                    <li>
                        <span class="bold">营业时间</span>
                        <span>{{seller.workTime}}</span>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>


<script>
    import {mapActions,mapState} from "vuex";
    import {GETSELLER} from "store/mutation_types";
    import BScroll from "better-scroll";
    import list from "components/ele-list/ele-list"
    export default {
        name: "ele-seller",
        computed:{
            ...mapState(["seller"])
        },
        methods:{
            ...mapActions([GETSELLER])
        },
        components:{
            "ele-list":list
        },
        async mounted(){
            await this[GETSELLER]()
            this.$nextTick(()=>{
                new BScroll(this.$refs.wrap);
                //scrollX:true 开启betterScroll的横向滑动
                new BScroll(this.$refs.picWrapper,{scrollX:true});
            })
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"

    .shop-info
        position: absolute
        top: 175px
        bottom: 0
        left: 0
        width: 100%
        background: #fff;
        overflow: hidden
        .section
            padding 16px 14px 14px
            font-size 16px
            background-color #fff
            color #666
            border-bottom 1px solid #eee
            position relative
            .section-title
                color #000
                font-weight 700
                line-height 16px
                > .iconfont
                    float right
                    color #ccc
            .delivery
                margin-top 16px
                font-size 13px
                line-height 18px
                .delivery-icon
                    width 55px
                    font-size 11px
                    margin-right 10px
                    display inline-block
                    text-align center
                    color #fff
                    background-color #0097ff
                    padding 1px 0
                    border-radius 4px
                .delivery-money
                    margin-top 5px

            .activity
                margin-top 16px
                .list
                    width 80%
                    margin 0 auto
            .pic-wrapper
                width: 100%
                overflow: hidden
                white-space: nowrap
                margin-top 16px
                .pic-list
                    display inline-block
                    font-size: 0
                    .pic-item
                        display: inline-block
                        margin-right: 6px
                        width: 120px
                        height: 90px
                        &:last-child
                            margin: 0
            .detail
                margin-bottom -16px
                & > li
                    one-px(#ddd)
                    display flex
                    justify-content space-between
                    align-items center
                    margin-right -10px
                    padding 16px 12px 16px 0
                    line-height 16px
                    font-size 13px
                    > .bold
                        font-weight 700
                        color #333
                    &:last-child
                        border-none()
</style>