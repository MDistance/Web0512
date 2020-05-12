<template>
  <div id="app">
     <span>{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      msg:"test2"
    }
  }
}
</script>

<style>
</style>


<!--
app.vue 在被vue-loader解析过后:
export default {
  name: 'App',
  template:'<div id="app">
    <span>{{msg}}</span>
  </div>',
  data(){
    return {
      msg:"test"
    }
  }
}
-->
