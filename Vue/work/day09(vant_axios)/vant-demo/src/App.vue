<template>
  <div id="app">
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
  export default {
    data() {
      return {
        chosenContactId: null, // 选中的id
        editingContact: {}, //打开编辑页的时候 显示的联系人信息 得看editingContact
        showList: false, //默认情况下列表不显示
        showEdit: false, //默认情况下编辑不显示
        isEdit: false,   //代表要不要出现删除按钮
        list: [
          {name: '张三0', tel: '13000000000', id: 0},
          {name: '张三1', tel: '13000000000', id: 1},
          {name: '张三2', tel: '13000000000', id: 2},
        ] //代表列表显示的时候 渲染的列表数据
      };
    },
    computed: {
      cardType() {
        // console.log(this.chosenContactId !== null)
        return this.chosenContactId !== null ? 'edit' : 'add';
      },

      currentContact() {
        const id = this.chosenContactId; //新增那条数据的id
        return id !== null ? this.list.filter(item => item.id === id)[0] : {};
      }
    },
    methods: {
      // 添加联系人
      onAdd() {
        this.editingContact = { id: this.list.length };
        this.isEdit = false; // 添加联系人时 不管怎么样删除按钮都不应该出现
        this.showEdit = true; // 让编辑页显示
      },

      // 编辑联系人
      // onEdit是一个回调函数  回调函数的参数 得看api  item:代表的是当前你编辑的那个联系人的信息
      onEdit(item) {
        this.isEdit = true; //显示删除按钮
        this.showEdit = true; //编辑页显示
        this.editingContact = item;//编辑页上表单中的数据 包含id
      },

      // 保存联系人(新增时的保存  修改时的保存)
      // onSave是一个回调函数  回调函数的参数 得看api  info:代表的是修改完的联系人信息
      onSave(info) {
        this.showEdit = false; //隐藏编辑页
        this.showList = false; //隐藏列表页

        //可以根据this.isEdit来区分是进行新增(false) 还是 修改(true)
        if (this.isEdit) {
          //修改时的保存
          //map方法将数组中元素一个个拿出来 做一次统一的修改
          //实现了编辑
          this.list = this.list.map(item => item.id === info.id ? info : item);
        } else {
          //info就是编辑页表单中录入的数据 (包括id)  新增时的保存
          //实现了新增
          this.list.push(info);
        }

        //新增或修改的那一条自动变为选中状态
        this.chosenContactId = info.id;
      },

      // 删除联系人
      // 我有三条数据,我删除了第一条,我在添加一条信息,id是不是会重复  确实会重复;但是不用考虑
      // 因为我们当前的这个demo 所有的数据都是拿数组的length来控制的
      // 之后数据的id 应该是数据库自动生成的 每次都会+1
      onDelete(info) {
        this.showEdit = false; //编辑页就会隐藏
        //实现了删除
        this.list = this.list.filter(item => item.id !== info.id);
        //如果删除的那一条 正好是 之前选中的那一条 那么要将chosenContactId置为null
        if (this.chosenContactId === info.id) {
          this.chosenContactId = null;
        }
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
    }
  };
</script>

<style scoped>

</style>
