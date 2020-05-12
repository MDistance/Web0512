<template>
    <div>
        <router-link to="/B/1" style="font-size: 30px;text-align: center;">
            toB1
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "A",
        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            console.log("A组件 beforeRouteLeave")
            next()
        }
    }
</script>

<style scoped>

</style>