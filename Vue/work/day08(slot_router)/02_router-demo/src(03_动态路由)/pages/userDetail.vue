<template>
    <div>
      当前登录的用户是{{$route.params.id}}号;用户名为{{$route.query.name}}
    </div>
</template>

<script>
    export default {
        name: "userDetail"
    }
</script>

<style scoped>

</style>
