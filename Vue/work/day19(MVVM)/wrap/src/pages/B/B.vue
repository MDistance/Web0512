<template>
    <div>
        B
        <br>
        <router-link to="/B/2" style="font-size: 40px">B2</router-link>
        <br>
        <router-link to="/B/3" style="font-size: 40px">B3</router-link>
    </div>
</template>

<script>
    export default {
        name: "B",
        // beforeRouteEnter (to, from, next) {
        //     // 在渲染该组件的对应路由被 confirm 前调用
        //     // 不！能！获取组件实例 `this`
        //     // 因为当守卫执行前，组件实例还没被创建
        //     console.log("B组件 beforeRouteEnter")
        //     next((vm)=>{
        //       console.log(vm)
        //     })
        // },

        //动态路由组件 第一次被渲染时 生命周期钩子是会被钓用的 但是beforeRouteUpdate这个路由守卫钩子不会调用
        mounted(){
          console.log("mounted")
        },
        //在动态路由组件 被动态匹配的时候 生命周期钩子不会调用 但是beforeRouteUpdate这个路由守卫钩子会调用
        beforeRouteUpdate (to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
            console.log("B组件 beforeRouteUpdate")
            next()
        }
        // beforeRouteLeave (to, from, next) {
        //     // 导航离开该组件的对应路由时调用
        //     // 可以访问组件实例 `this`
        //     console.log("B组件 beforeRouteLeave")
        //     next()
        // }
    }
</script>

<style scoped>

</style>