<template>
    <div class="goods">
        <div class="typeWrap" ref="typeWrap">
            <ul class="typeList" ref="typeList">
                <li class="type" :class="{active:index===currentIndex}"
                    @click="handleCForType(index)"
                    v-for="(good,index) in goods" :key="index">
                    <ele-icon class="icon" v-show="good.type >= 0" size="3" :type="good.type"></ele-icon>
                    <span>{{good.name}}</span>
                </li>
            </ul>
        </div>
        <div class="goodWrap" ref="goodWrap">
            <ul class="goodList" ref="goodList">
                <li class="good" v-for="(good,index) in goods" :key="index">
                    <h2 class="goodName">{{good.name}}</h2>
                    <ul class="foodlist">
                        <li class="foodWrap" v-for="(food,index) in good.foods" :key="index">
                            <ele-food :food="food"></ele-food>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!--购物车组件-->
        <!--当前这个组件化不是用来复用的 是为了优化代码结构的 所以样式什么的可以全部写在组件内部-->
        <ele-cart :selectedFoods="selectedFoods" @clear="clear"></ele-cart>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {mapActions,mapState} from "vuex";
    import {GETGOODS} from "store/mutation_types";
    import food from "components/ele-food/ele-food"
    import cart from "components/ele-cart/ele-cart"
    export default {
        name: "ele-goods",
        data(){
          return {
              tops:[], //记录右侧列表滑到每一项时的位置信息
              scrollY:0 //goodList实时的滑动位置(取的是正值)
          }
        },
        computed:{
            ...mapState(["goods"]),
            //列表左右联动的功能
            currentIndex(){
                //根据tops & scrollY 来确定左侧列表谁该选中
                let {tops,scrollY} = this;
                let index = tops.findIndex((top,index)=>{
                    return scrollY >= top && scrollY < tops[index+1]
                });

                //如果index没有产生改变 下述两行是不用执行的
                //让左侧列表滑动到选中的li节点上
                if(this.oldIndex !== index){
                    this.oldIndex=index;
                    let targetLi = this.$refs.typeList && this.$refs.typeList.children[index];
                    this.typeWrapBS && this.typeWrapBS.scrollToElement(targetLi,300)
                }

                return index;
            },
            //购物车中的食品
            selectedFoods(){
                let selectedFoods =[];
                this.goods.forEach((good)=>{
                    good.foods.forEach((food)=>{
                        if(food.count > 0){
                            selectedFoods.push(food)
                        }
                    })
                })
                return selectedFoods;
            }
        },
        methods:{
            ...mapActions([GETGOODS]),
            //列表左右联动的功能
            initTops(){
                /*
                    注意 mounted 不会保证所有的子组件也都一起被挂载。
                    如果你希望等到整个视图都渲染完毕，可以在 mounted 内部使用 vm.$nextTick
                    当你的业务逻辑需要依赖于一个节点的尺寸 位置相关的信息时;我们一定要等到对应的
                    节点完全渲染完毕之后 再去进行操作

                    vm.$nextTick(()=>{})
                        将回调延迟到下次 DOM 更新循环之后执行; 保证上一次渲染已经完成;界面已经更新
                */
                //当前这个nexttick回调在被注册的时候 很有可能action中的请求还没有完成
                //数据还有可能没有回来  有可能这个回调在被执行时 数据照样还没回来呢
                this.$nextTick(()=>{
                    //初始化Tops
                    let goodList = this.$refs.goodList;
                    let goods = goodList.children;
                    let top = 0;
                    let tops = [top];
                    Array.from(goods).forEach((good)=>{
                        top += good.offsetHeight;
                        tops.push(top)
                    })
                    this.tops = tops;
                })
            },
            initScrollY(){
                //初始化滑屏
                this.$nextTick(()=>{
                    this.typeWrapBS =new BScroll(this.$refs.typeWrap);
                    this.goodWrapBS = new BScroll(this.$refs.goodWrap,{probeType:3});
                    this.goodWrapBS.on("scroll",({x,y})=>{
                        this.scrollY = Math.abs(y)
                    })
                })
            },
            handleCForType(index){
                //index 代表左侧列表的下标
                let scrollY = this.tops[index];
                this.goodWrapBS.scrollTo(0,-scrollY,300) //会让scrollY得到更新
            },

            //购物车控制组件的功能
            add(food){
                if(!food.count){
                    this.$set(food,"count",1)
                }else {
                    food.count++
                }
            },
            remove(food){
                if(food.count >0){
                    food.count--
                }
            },

            //清空购物车数据
            clear(){
                this.goods.forEach((good)=>{
                    good.foods.forEach((food)=>{
                        if(food.count > 0){
                            food.count = 0
                        }
                    })
                })
            }
        },
        async mounted(){
            //这个action是用来发送请求 拿回goods相关的数据 进行界面更新的
            //整个action中的流程走完 action转发所返回的promise的状态才会确定
            await this[GETGOODS]();
            this.initScrollY();
            this.initTops();

            //购物车控制组件的功能
            this.$bus.$on("add",(food)=>{
                this.add(food)
            })
            this.$bus.$on("remove",(food)=>{
                this.remove(food)
            })

            console.log("-----")
        },
        components:{
            "ele-food":food,
            "ele-cart":cart
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/mixin.styl"
    .goods
        display flex
        position absolute
        top 174px
        bottom 46px
        left 0
        right 0
        .typeWrap
            flex 0 0 80px
            overflow hidden
            .typeList
                .type
                    center()
                    one-px(rgba(7,17,27,.1))
                    height 54px
                    padding 0 12px
                    font-size 12px
                    line-height 14px
                    color gray
                    background #f3f5f7
                    .icon
                        margin-right 3px
                    &.active
                        background #ffffff
                    &:after
                        width 56px
                        left 0px
                        right 0px
                        margin auto
                    &:last-child
                        border-none()
        .goodWrap
            flex 1
            overflow hidden
            .goodList
                .good
                    .goodName
                        height 26px
                        line-height 26px
                        font-size 12px
                        font-weight 800
                        background #f3f5f7
                        border-left 3px solid #d9dde1
                        padding-left 14px
                        color rgba(147,153,159,1)
                    .foodlist
                        .foodWrap
                            one-px(rgba(7,17,27,.1))
                            padding 18px
                            position relative
                            &:after
                                width 80%
                                left 0
                                right 0
                                margin auto
                            &:last-child
                                border-none()
</style>