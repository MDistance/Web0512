<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name:"app",
    async mounted(){
      // const body = await this.$http.user.getUser();
      // const body = await this.$http.user.getRep();
      // console.log(body);
    }
  };
</script>

<style scoped>

</style>
