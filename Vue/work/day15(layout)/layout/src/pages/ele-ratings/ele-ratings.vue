<template>
    <div>
        ratings
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import {GETRATINGS} from "store/mutation_types"
    export default {
        name: "ele-ratings",
        methods:{
            ...mapActions([GETRATINGS])
        },
        mounted(){
            this[GETRATINGS]()
        },
        created(){
            console.log("created ele-ratings")
        },
    }
</script>

<style scoped>

</style>