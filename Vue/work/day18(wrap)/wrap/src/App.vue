<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
    import FooterGuide from "components/FooterGuide/FooterGuide"
    import {mapActions} from "vuex"
    import {AUTOLOGIN} from "@/store/mutation_types.js"
    export default {
        name:"app",
        components:{
            FooterGuide
        },
        methods:{
            ...mapActions([AUTOLOGIN])
        },
        created(){
            //自动登录的流程  主要是对token进行检验 根据token的情况执行不同的动作
            this[AUTOLOGIN]()
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    overflow hidden
</style>
