<template>
  <div>
     <span style="color: red;font-size: 40px;font-weight: 800" @click="inc(1)">
       当前的mun是:{{num}};它是一个 <i style="color: black;">{{flag}}</i> 数
     </span>
     <br/>
     <span style="color: pink;font-size: 30px;font-weight: 800">{{fullName}}</span>
     <br/>
     <button @click="incAsync(2)">async add</button>
  </div>
</template>

<script>
    //优化组件的写法
    import {mapState,mapGetters,mapActions,mapMutations} from "vuex";
    export default {
        name: "demo",
        computed:{
          ...mapState(["num"]),
          ...mapGetters(["fullName","flag"])
        },
        methods:{
          ...mapMutations(["inc"]),
          ...mapActions(["incAsync"])
        }
    }
</script>

<style scoped>

</style>
