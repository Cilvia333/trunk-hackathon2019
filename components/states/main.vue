<template lang="pug">
section
  menu
    img.umbrella(src="~/assets/imgs/umbrella.svg")
    img.arrow(src="~/assets/imgs/umbrella.svg")
  main
    h1.category_name {{restaurantData.category_name}}
    h2.restaurant {{restaurantData.name}}
    ImgCarousel
    h3.value {{restaurantData.budget}}
    h3.catch {{restaurantData.catch}}
    a.link(:src="restaurantData.link")
</template>

<script>
import ImgCarousel from "~/components/imgCarousel.vue"

export default {
  components: {
      ImgCarousel
  },
  computed: {
    restaurantData() {
      if(this.$store.state.restaurants != null){
        return this.$store.state.restaurants[0]
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
