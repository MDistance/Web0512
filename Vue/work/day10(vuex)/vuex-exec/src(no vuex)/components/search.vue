<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName"/>
      <button @click="Search">Search</button>
    </div>
  </section>
</template>

<script>
    export default {
        name: "search",
        data(){
          return {
            searchName:""
          }
        },
        methods:{
          Search(){
            this.$bus.$emit("Search",this.searchName)
          }
        }
    }
</script>

<style scoped>

</style>
