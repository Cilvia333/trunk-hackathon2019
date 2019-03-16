<template lang="pug">
  section.container
    h1.genre {{category_name}}
    h2.name {{restaurant}}
    img.store_images(:src="image_urls")
    h3.money {{value}}
    h3.duration {{time}}
    a.detail(src="https://www.jalan.net/news/article/203522/")
</template>

<script>
export default {
  computed: {
    category_name() {
      return this.$store.stores[0].category_name
    },
    restaurant() {
      return this.$store.stores[0].restaurant
    },
    image_urls() {
      return this.$store.stores[0].image_urls
    },
    value() {
      return this.$store.stores[0].value
    },
    time() {
      return this.$store.stores[0].time
    },
    detail() {
      return "hoge"//this.$store.stores[0].detail
    }
  },
  async mounted() {
    await this.$store.dispatch("getStoresFromGPS")
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
