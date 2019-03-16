<template lang="pug">
  section.container
    component(:is="nowState")
</template>

<script>
import Main from "~/states/main.vue"
import Error from "~/states/error.vue"
import Loading from "~/states/loading.vue"

export default {
  components: {
    Main,
    Error,
    Loading
  },
  data: function() {
    return {
      nowState: "Main"
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
