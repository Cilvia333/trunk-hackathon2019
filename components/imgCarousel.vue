<template lang="pug">
section.container
    img.store_images(:src="image_urls")
</template>

<script>
export default {
  computed: {
      image_urls() {
        if(this.$store.stores != null){
          return this.$store.stores[0].image_urls
      }
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
