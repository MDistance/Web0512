<template>
  <div id="app">
    <!--<keep-alive>-->
      <router-view></router-view>
    <!--</keep-alive>-->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
    import FooterGuide from "components/FooterGuide/FooterGuide"
    export default {
        name:"app",
        components:{
            FooterGuide
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    overflow hidden
</style>
