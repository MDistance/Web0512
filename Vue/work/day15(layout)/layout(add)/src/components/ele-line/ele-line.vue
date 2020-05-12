<template>
    <div class="lineWrap">
        <span class="line"></span>
        <slot>
            <span>default</span>
        </slot>
        <span class="line"></span>
    </div>
</template>

<script>
    export default {
        name: "ele-line"
    }
</script>

<style scoped lang="stylus">
    .lineWrap
        display flex
        align-items center
        span
            font-size 14px
            line-height 14px
            font-weight 700
            color rgba(255,255,255,1)
        .line
            flex 1
            height 1px
            background rgba(255,255,255,.2)
</style>