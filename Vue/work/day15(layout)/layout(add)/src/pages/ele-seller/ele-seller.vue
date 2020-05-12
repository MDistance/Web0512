<template>
    <div>seller</div>
</template>

<script>
    import {mapActions} from "vuex";
    import {GETSELLER} from "store/mutation_types"
    export default {
        name: "ele-seller",
        methods:{
            ...mapActions([GETSELLER])
        },
        mounted(){
            this[GETSELLER]()
        },
        created(){
            console.log("created ele-seller.vue")
        }
    }
</script>

<style scoped>

</style>