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
      onAdd() {
        this.editingContact = { };
        this.isEdit = false;
        this.showEdit = true;
      },

      onEdit(item) {
        this.isEdit = true;
        this.showEdit = true;
        this.editingContact = item;
      },

      //contact - create update
      async onSave({name,tel,id}) {
        this.showEdit = false;
        this.showList = false;

        let body = "" ;
        if (this.isEdit) {
          body = await this.$http.contact.updateContact({name,tel,id})
        } else {
          //create操作  有两个接口的 一个传的是json 一个传的是form-data
          body = await this.$http.contact.createContactByForm({name,tel,id})
          body = await this.$http.contact.createContactByJosn({name,tel,id})
        }

        await this.updateList()
        if(body.code === OK)
          this.chosenContactId = body.data.id;
      },

      //contact - del
      async onDelete({id}) {
        this.showEdit = false;
        await this.$http.contact.delContactById({id})

        if (this.chosenContactId === id) {
          this.chosenContactId = null;
        }
        await this.updateList();
      },

      //contact - Red
      async updateList(){
        const {code,data,xxx} = await this.$http.contact.getContactList();
        console.log(xxx);
        if(code === OK)
          this.list = data
      },

      onSelect() {
        this.showList = false;
      },

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
        await this.updateList();
    }
  };
</script>

<style scoped>

</style>
