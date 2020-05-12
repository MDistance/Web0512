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
        }
    }
</script>

<style scoped>

</style>