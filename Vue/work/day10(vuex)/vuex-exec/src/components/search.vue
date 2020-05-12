<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model.lazy="serachName"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
    import {mapActions} from "vuex";
    export default {
        name: "search",
        computed:{
          serachName:{
            get(){
              return this.$store.state.serachName
            },
            set(val){
              //修改仓库中的数据  转发一个action
              this.$store.dispatch("chaneSerachName",val)
            }
          }
        },
        methods:{
          ...mapActions(["search"])
        }
    }
</script>

<style scoped>

</style>
