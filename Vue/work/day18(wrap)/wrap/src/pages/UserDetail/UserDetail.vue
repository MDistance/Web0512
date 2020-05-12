<template>
    <div style="text-align: center;padding-top:50px;display: flex;flex-direction: column">
        <i class="layout-close" @click="$router.replace(`/Profile`)"
           style="position: absolute;left: 10px;top: 10px;font-size: 30px;color: red"></i>
        <span style="margin-top:20px ">{{user._id}}</span>
        <van-button
                type="danger"
                style="width: 100px;margin: 0 auto;margin-top:20px"
                @click="exit">
            退出登录
        </van-button>
    </div>
</template>

<script>
    import {Button} from "vant"
    import {mapState,mapActions} from "vuex"
    import {RESETUSER} from "@/store/mutation_types.js"
    export default {
        name: "UserDetail",
        computed:{
            ...mapState(["user"])
        },
        methods:{
            ...mapActions([RESETUSER]),
            exit(){
                this[RESETUSER]()
            },
        },
        components:{
            [Button.name]:Button
        }
    }
</script>

<style scoped>

</style>