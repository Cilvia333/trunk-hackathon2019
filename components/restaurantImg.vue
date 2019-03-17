<template lang="pug">
.restaurant-imgs
  .restaurant-img(@click="nextImg()")
    img(:src="imgs[now_image_id]")
    .nothing-img(v-if="imgs==null") 画像は読み込まれませんでした。
  .restaurant-imgs-number(v-if="imgs.length > 1")
    .img-number {{now_image_id + 1}} / {{imgs.length}}
    font-awesome-icon(icon="images").images-icon
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
      if(this.now_image_id+1 >= this.imgs.length){
        this.now_image_id = 0;
      }else if(this.now_image_id < this.imgs.length){
        this.now_image_id++;
      }
    },
    resetImgId(){
      this.now_image_id = 0;
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
  .nothing-img {
    width: 100%;
    padding: 20px 4px;
    background: #ddd;
    text-align: center;
  }
}
.restaurant-imgs-number {
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  flex-wrap: nowrap;
  color: #fff;
  align-items: flex-end;
  .img-number {
    padding: 0 8px;
    font-size: 1.4rem;
    filter: drop-shadow(0 0 4px #000);
  }
  .images-icon {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0 0 4px rgba(#000,0.5));
  }
}
</style>
