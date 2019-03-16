<template lang="pug">
.restaurant-imgs
  .restaurant-img(@click="nextImg()")
    img(:src="imgs[now_image_id]")
</template>

<script>
export default {
  props: ["imgs"],
  data(){
    return {
      now_image_id:0
    }
  },
  methods:{
    nextImg(){
      if(this.imgs.length == 1){
        // これ以上画像はありません
      }else if(this.now_image_id+1 > this.imgs.length){
        this.now_image_id = 0;
      }else if(this.now_image_id+1 < this.imgs.length){
        this.now_image_id++;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/variables.scss";
@import "~/assets/style/mixin.scss";

.restaurant-imgs {
  width: 100%;
  position: relative;
}
.restaurant-img {
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
