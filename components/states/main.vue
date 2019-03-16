<template lang="pug">
section
  menu
    img.umbrella()
  main
    h1.category_name {{category_name}}
    h2.restaurant {{restaurant}}
    ImgCarousel
    h3.value {{value}}
    h3.time {{time}}
    a.link(:src="link")
</template>

<script>
import ImgCarousel from "~/components/imgCarousel.vue"

export default {
  components: {
      ImgCarousel
  },
  computed: {
    category_name() {
      if(this.$store.stores != null){
        return this.$store.stores[0].category_name
      }
    },
    restaurant() {
      if(this.$store.stores != null){
        return this.$store.stores[0].restaurant
      }
    },
    value() {
      if(this.$store.stores != null){
        return this.$store.stores[0].value
      }
    },
    time() {
      if(this.$store.stores != null){
        return this.$store.stores[0].time
      }
    },
    link() {
      if(this.$store.stores != null){
        return this.$store.stores[0].link
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/variables.scss";
@import "~/assets/style/mixin.scss";

menu{
  width: 100%;
  height: 80px;
  background: $theme-orange;
}
</style>
