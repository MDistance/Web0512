<template>
  <div class="row">
    <p v-if="showMsg" style="color: gray;font-size: 30px;font-weight: 800">请输入需要查询的用户,建明丢了</p>
    <p v-else-if="showLoading" style="color: pink;font-size: 30px;font-weight: 800">loading</p>
    <p v-else-if="showNoBody" style="color: deeppink;font-size: 30px;font-weight: 800">查无此人</p>
    <div v-else>
      <div  class="card" v-for="item in list" :key="item.id">
        <a :href="item.html_url" target="_blank">
          <img :src="item.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{item.login}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapState} from "vuex";
    export default {
        name: "list",
        computed:{
          ...mapState(["showMsg","showLoading","showNoBody","list"])
        }
    }
</script>

<style scoped>

</style>
