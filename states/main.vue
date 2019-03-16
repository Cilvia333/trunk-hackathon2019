<template lang="pug">
section.container hogehoge
    h1.genre {{category_name}}
    h2.name {{restaurant}}
    ImgCarousel
    h3.money {{value}}
    h3.duration {{time}}
    a.detail(src="https://www.jalan.net/news/article/203522/")
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
    detail() {
      if(this.$store.stores != null){
        return "hoge"//this.$store.stores[0].detail
      }
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
