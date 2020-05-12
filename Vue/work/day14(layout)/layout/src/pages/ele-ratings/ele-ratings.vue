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
        }
    }
</script>

<style scoped>

</style>