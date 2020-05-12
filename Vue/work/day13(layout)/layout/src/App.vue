<template>
  <div id="app">
    <ele-header></ele-header>
    <div class="navs">
      <div class="item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from "components/ele-header/ele-header.vue"
  export default {
    name: 'App',
    components:{
        "ele-header":header
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl";
  #app
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
