<template>
    <div class="list">
        <ul>
            <li v-for="(item,index) in supports">
                <ele-icon class="icon" size="2" :type="item.type"></ele-icon>
                <span>{{item.content}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import icon from "components/ele-icon/ele-icon"
    export default {
        name: "ele-list",
        props:{
            supports:Array
        },
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