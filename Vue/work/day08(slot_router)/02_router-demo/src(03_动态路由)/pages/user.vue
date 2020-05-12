<template>
    <div>
      -----这是user组件----- <br>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "user",
        mounted(){
          console.log("user.mounted")
        },
        watch:{
          $route(){
            console.log("user.watch.$route")
          }
        }
    }
</script>

<style scoped>

</style>
