<template>
    <div class="shop">
        <ele-header></ele-header>
        <div class="navs">
            <div class="item">
                <router-link :to="`/shop/${id}/goods`">商品</router-link>
            </div>
            <div class="item">
                <router-link :to="`/shop/${id}/ratings`">评价</router-link>
            </div>
            <div class="item">
                <router-link :to="`/shop/${id}/seller`">商家</router-link>
            </div>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import header from "components/ele-header/ele-header.vue";
    import {mapActions} from "vuex";
    import {GETSELLER} from "store/mutation_types"
    export default {
        name: 'ele-shop',
        props:{
            id:String
        },
        components:{
            "ele-header":header
        },
        methods:{
            ...mapActions([GETSELLER])
        },
        beforeRouteUpdate (to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`

            //永远都是上一次的id

            //提前是hash模式
            console.log(to.params.id,"beforeRouteUpdate")
            this[GETSELLER](to.params.id);
            next()
        },
        mounted(){
            //普通路由在切换的时候 生命周期钩子都被执行
            //动态路由切换的时候  生命周期钩子是不会被执行的
            console.log(this.id,"mounted")
            this[GETSELLER](this.id);
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/mixin.styl";
    .shop
        position relative
        width 100%
        height 100%
        overflow hidden
        .navs
            one-px(black)
            display flex
            height 40px
            & > .item
                flex 1
                a
                    center()
                    width 100%
                    height 100%
                    font-size 14px
                    line-height 14px
                    color rgba(77,85,93,1)
                    &.active
                        color rgba(240,20,20,1)
</style>