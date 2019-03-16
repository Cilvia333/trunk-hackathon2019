<template lang="pug">
section.container
  Carousel(:perPageCustom="[[768, 1], [1024, 2]]")
    Slide(v-for="(img,img_id) in imgs" :key="`key-${img_id}`")
      img(:src="img" )

</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'

export default {
  components: {
    Carousel,
    Slide
  },
  props: {
    imgs: {
      type: Array,
      default: null, 
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/variables.scss";
@import "~/assets/style/mixin.scss";

img{
  text-align: center;
}
</style>
