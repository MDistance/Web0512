<template>
    <!--
        class='stars stars-24'
        class='stars stars-36'
        class='stars stars-48'
    -->
    <div class="stars" :class="`stars-${size}`">
        <div class="star" :class="item"
             v-for="(item,index) in scoreArr" :key="index"></div>
    </div>
</template>

<script>
    const Lenght = 5;
    export default {
        name: "ele-stars",
        props:{
            size:String,
            score:Number
        },
        computed:{
            scoreArr(){
                //根据分数 得到 分数对应的数组
                let arr =[];
               //分数的两个边界情况
               if(this.score === undefined)
                  return ["off","off","off","off","off"];
               if(this.score < 0)
                   return ["off","off","off","off","off"];
               if(this.score > Lenght)
                   return ["on","on","on","on","on"];

               //根据分数 得到星星的数量 (逢.5给半颗星)
               let stars = Math.floor(this.score * 2)/2;
               //满星的数量
               let fullStars = Math.floor(stars);
               //是否需要半星
               let needHalf =  (stars % 1) === 0 ? false:true;

               //构建评星数组
               for(let i=0;i<fullStars;i++){
                   arr.push("on")
               }
               needHalf?arr.push("half"):"";
               while (arr.length < Lenght)
                    arr.push("off")

               return arr;
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../common/stylus/mixin.styl"
    .stars
        display inline-flex
        .star
            background-repeat no-repeat
            background-size 100%
        &.stars-24
            .star
                width 10px
                height 10px
                margin-right 6px
                &:last-child
                    margin-right 0
                &.on
                    bg-image(star24_on)
                &.half
                    bg-image(star24_half)
                &.off
                    bg-image(star24_off)
        &.stars-36
            .star
                width 15px
                height 15px
                margin-right 9px
                &:last-child
                    margin-right 0
                &.on
                    bg-image(star36_on)
                &.half
                    bg-image(star36_half)
                &.off
                    bg-image(star36_off)
        &.stars-48
            .star
                width 20px
                height 20px
                margin-right 12px
                &:last-child
                    margin-right 0
                &.on
                    bg-image(star48_on)
                &.half
                    bg-image(star48_half)
                &.off
                    bg-image(star48_off)
</style>