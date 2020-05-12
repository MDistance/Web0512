<template>
  <div>
      <h1>App 组件</h1>
      <p class="test1">没有适配</p>
      <p class="test2">有适配</p>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  *
    margin 0
    padding 0
    .test1
      width 375px
      background red
      height 100px;
    .test2
      width 375px /*设计稿上的尺寸*/
      height 100px;
      background greenyellow

</style>
