<template lang="pug">
section
    .container
    .category
        .category_prefecture {{restaurantData.prefecture}}
        .category_name {{restaurantData.category_name}}
    .restaurant {{restaurantData.name}}
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

.container *{
    text-align: center;
}
</style>

