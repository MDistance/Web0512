<template>
    <div>
      当前登录的用户是<span style="color:red">{{id}}</span> 号;用户名为{{name}}
    </div>
</template>

<script>
    export default {
        name: "userDetail",
        props:{
          id:String,
          name:String
        }
    }
</script>

<style scoped>

</style>
