<template lang="pug">
section.container
  Carousel(:perPage="1")
    Slide(v-for="(img,img_id) in image_urls" :key="`key-${img_id}`")
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
  computed: {
    image_urls() {
      if(this.$store.stores != null){
        return this.$store.stores[0].image_urls
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
