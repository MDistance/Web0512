<template>
    <div class="list">
        <ul>
            <li>
                <ele-icon class="icon" size="2" type="decrease"></ele-icon>
                <span>在线支付满100送天禹</span>
            </li>
            <li>
                <ele-icon class="icon" size="2" type="discount"></ele-icon>
                <span>单人精彩套餐</span>
            </li>
            <li>
                <ele-icon class="icon" size="2" type="discount"></ele-icon>
                <span>海狗人参丸八折起购</span>
            </li>
            <li>
                <ele-icon class="icon" size="2" type="special"></ele-icon>
                <span>特价商品</span>
            </li>
            <li>
                <ele-icon class="icon" size="2" type="special"></ele-icon>
                <span>单人特色套餐</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import icon from "components/ele-icon/ele-icon"
    export default {
        name: "ele-list",
        components:{
            "ele-icon":icon
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/mixin.styl"
    li
      center()
      justify-content flex-start
      margin-bottom 12px
      .icon
        margin-right 6px
      span
        font-size 12px
        font-weight 200
        line-height 12px
        color rgba(255,255,255,1)
      &:last-child
        margin-bottom 0px

</style>