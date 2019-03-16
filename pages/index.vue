<template lang="pug">
  section.container
    div(v-if = "nowState === 'Main'")
      Main
    div(v-else-if = "nowState==='Error'")
      Error
    div(v-else-if = "nowState==='Loading'")
      transition
        Loading
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
    navigator.geolocation.getCurrentPosition(this.loadStoreData)
  },
  methods: {
    async loadStoreData(position) {
      await this.$store.dispatch("getStoresFromGPS",position)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
