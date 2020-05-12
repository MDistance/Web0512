<template>
  <div id="app">
    <!--<van-popup v-model="show" position="top">-->
        <!-- 联系人卡片 -->
        <van-contact-card
          :editable="false"
          type="edit"
          name="damu"
          tel="15851802777"
          add-text="添加联系人信息"
          @click="handleC"></van-contact-card>
    <!--</van-popup>-->

    <van-popup v-model="show" position="top">
      <!-- 联系人列表 -->
      <van-contact-list
         v-model="id"
         :list="list"
         add-text="add"
         default-tag-text="尚硅谷彭于晏"
         @add="addFn"
         @edit="editFn"
         @select="selectFn"></van-contact-list>
    </van-popup>

    <!-- 联系人编辑 -->
    <van-popup v-model="show" position="top">
      <van-contact-edit
          :contact-info="info"
          :is-edit="true"
          :is-saving="false"
          :is-deleting="false"
          :tel-validator="validator"
          :show-set-default="true"
          set-default-label="xxx"
          @save="saveFn"
          @delete="deleteFn"></van-contact-edit>
    </van-popup>
  </div>
</template>

<script>
  import { ContactCard, ContactList, ContactEdit,Popup} from 'vant';
  export default {
    name: 'App',
    components:{
      [ContactCard.name]:ContactCard,
      [ContactList.name]:ContactList,
      [ContactEdit.name]:ContactEdit,
      [Popup.name]:Popup
    },
    data(){
      return {
        show:false,
        id:0,
        info:{
          id:0,
          name:"damu",
          tel:"15851802777"
        },
        list:[
          {id:0,name:"damu",tel:15851802777,isDefault:true},
          {id:1,name:"xfz",tel:15851802778},
          {id:2,name:"tt",tel:15851802779},
          {id:3,name:"yy",tel:15851802780}
        ],
        validator(tel){
          return true;
        }
      }
    },
    methods:{
      handleC(){console.log("-----")},
      addFn(){console.log("addFn")},
      editFn(item,index){console.log("editFn",item,index)},
      //当点击选中的小圆圈按钮时 当前这个事件的回调会被执行两次
      selectFn(item,index){console.log("selectFn",item,index)},
      //content : contact-info中的内容  而不仅仅是表单的内容
      saveFn(content){console.log("saveFn",content)},
      deleteFn(content){console.log("deleteFn",content)}
    }
  }
</script>

<style scoped>

</style>
