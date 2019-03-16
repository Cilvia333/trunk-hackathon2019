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
      return ["https://pbs.twimg.com/profile_images/3406268893/54b7e1f981b7df7c817af48d1b96ad5e_400x400.jpeg", "https://www.mag2.com/p/news/wp-content/uploads/2018/05/DeLLJF-V4AADsMk-copy-1.jpg"]
      if(this.$store.stores != null){
        return this.$store.stores[0].image_urls
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
