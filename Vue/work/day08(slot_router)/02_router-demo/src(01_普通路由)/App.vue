<template>
  <div id="app">
    <!--<a href="#/a">to a</a>-->
    <!--<a href="#/b">to b</a>-->
    <router-link to="/a">Go to A</router-link>
    <router-link to="/b">Go to B</router-link>
    <!--渲染一级路由-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
