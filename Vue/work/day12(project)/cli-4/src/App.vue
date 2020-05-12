<template>
  <div id="app">
    app
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: 'App',
    async mounted(){
      const body = await axios({
          url:"/api/seller",
          method:"get"
      })
      console.log(body.data.data.score,body.data.data.address);
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
