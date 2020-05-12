<template>
  <div id="contact">
    <!-- 联系人卡片 -->
    <van-contact-card
      :type="cardType"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="showList = true"
    />

    <!-- 联系人列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-contact-list
        v-model="chosenContactId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </van-popup>

    <!-- 联系人编辑 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        :tel-validator="validator"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
  import { ContactCard, ContactList, ContactEdit,popup } from 'vant';
  const OK = 200;
  export default {
    name:"contact",
    data() {
      return {
        chosenContactId: null,
        editingContact: {},
        showList: false,
        showEdit: false,
        isEdit: false,
        list: []
      };
    },
    computed: {
      cardType() {
        return this.chosenContactId !== null ? 'edit' : 'add';
      },

      currentContact() {
        const id = this.chosenContactId;
        return id !== null ? this.list.filter(item => item.id === id)[0] : {};
      }
    },
    methods: {
      // 添加联系人
      onAdd() {
        this.editingContact = { };
        this.isEdit = false;
        this.showEdit = true;
      },

      // 编辑联系人
      onEdit(item) {
        this.isEdit = true;
        this.showEdit = true;
        this.editingContact = item;
      },

      // 保存联系人(新增时的保存  修改时的保存)
      async onSave({name,tel,id}) {
        this.showEdit = false;
        this.showList = false;

        let body = "" ;
        if (this.isEdit) {
          //编辑联系人
          body = await this.$http({
            url:"/contact/edit",
            method:"put",
            data:{name,tel,id}
          })
          console.log(body);
        } else {
          //新增联系人 数据库中加了一条 而list数据没有被同步 不要忘了同步list
          let data = new FormData();
          data.append("name",name);
          data.append("tel",tel);
          body = await this.$http({
            // url:"/contact/new/json",
            url:"/contact/new/form",
            method:"post",
            //data:{name, tel}, //在axios中 post请求 put请求默认传递的数据都是做json序列化处理的!
            timeout: 3000,
            data
          })
          //更新list  这是一个异步的更新!!!
          //更新list为什么要发请求? 而不是拿到list去进行一次push
          // this.list.push(body.data)
        }

        await this.updateList() //为了得到实时的数据!!!
        //是选中的id先更新 还是 list先更新
        //107行没有await 先更新了id 再更新list
        //107行有await 先更新list 再更新id
        //当前这段代码 必须等list更新完 才更新
        if(body.code === OK)
          this.chosenContactId = body.data.id;
      },

      // 删除联系人
      async onDelete({id}) {
        this.showEdit = false;
        //删除的逻辑  delete请求 和 get请求 在请求头内部是不能带数据的!!
        //url中是可以带数据的!!!
        /*
          前后台交互;可以进行数据传递的几种方式:
            1. 通过url上的params  /contact/:id
            2. 通过url上的query   /contact?name=damu&age=18
            3. 通过http想要的请求体
            4. 通过http协议的请求字段
        */
        await this.$http({
          url:"/contact",
          method:"delete",
          //这个最终使用的是query的形式
          params: {
            id
          },
        });
        //删除的那一项 就是 当前选中的这一项
        //在删除的时候, 一定要先更新id 再更新list
        if (this.chosenContactId === id) {
          this.chosenContactId = null;
        }
        await this.updateList();
      },

      //初始化&更新list
      async updateList(){
        const {code,data} = await this.$http({
          url:"/contactList",
          method:"get"
        })
        if(code === OK)
          this.list = data
      },

      // 选中联系人
      onSelect() {
        this.showList = false;
      },

      //手机号不做检验
      validator(){
        return true
      }
    },
    components:{
      [ContactCard.name]:ContactCard,
      [ContactList.name]:ContactList,
      [ContactEdit.name]:ContactEdit,
      [popup.name]:popup
    },
    async mounted(){
        //初始化渲染
        await this.updateList()
        //..... 下面的业务逻辑 需要请求到list数据之后才能执行 那一定要请求时加上
        // console.log(this.list)
    }
  };
</script>

<style scoped>

</style>
