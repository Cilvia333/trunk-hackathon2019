<template lang="pug">
  div
    div(v-if = "nowState === 'Main'")
      Main
    div(v-else-if = "nowState==='Error'")
      Error
    div(v-else-if = "nowState==='Loading'")
      transition
        Loading
</template>

<script>
import Main from "~/components/states/main.vue"
import Error from "~/components/states/error.vue"
import Loading from "~/components/states/loading.vue"

export default {
  components: {
    Main,
    Error,
    Loading
  },
  data: function() {
    return {
      nowState: "Loading"
    }
  },
  async mounted() {
    navigator.geolocation.getCurrentPosition(this.loadStoreData)
  },
  computed: {
    restaurantsData() {
      return this.$store.state.restaurants
    }
  },
  watch: {
    restaurantsData(val) {
      console.log(val)
      if(val != null) {
        this.changeState("Main")
      }
      else{
        this.changeState("Error")
      }
    }
  },
  methods: {
    async loadStoreData(position) {
      await this.$store.dispatch("getStoresFromGPS",position)
    },
    changeState(state){
      this.nowState = state
      console.log(this.nowState)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
