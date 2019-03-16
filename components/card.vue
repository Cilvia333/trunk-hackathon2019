<template lang="pug">
section
  .container
  .category
    .category_prefecture {{restaurant_data.prefecture}}
    .category_name {{restaurant_data.category_name}}
  .restaurant {{restaurant_data.name}}
  ImgCarousel(:imgs="restaurant_data.images")
  h3.value {{restaurant_data.budget}}
  h3.catch {{restaurant_data.catch}}
  a.link(:src="restaurant_data.link")
</template>

<script>
import ImgCarousel from "~/components/imgCarousel.vue"

export default {
  components: {
    ImgCarousel
  },
  props: {
    restaurant_data: {
      type: Object,
      default: null, 
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/variables.scss";
@import "~/assets/style/mixin.scss";

.container *{
  text-align: center;
}
</style>

