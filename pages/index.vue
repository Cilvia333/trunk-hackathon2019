<template lang="pug">
  div
    Main(v-if = "nowState === 'Main'" @reload="reloadPage")
    Error(v-if = "nowState ==='Error'" v-bind:errorCode="errorCode")
    transition
      Loading(v-if = "nowState ==='Loading'")
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
      nowState: "Loading",
      errorCode: null,
      logo:true
    }
  },
  async mounted() {
    navigator.geolocation.getCurrentPosition(this.loadStoreData, this.missingGeolocation)
  },
  computed: {
    restaurantsData() {
      return this.$store.state.restaurants
    },
    isServerError() {
      return this.$store.state.is_error
    }
  },
  watch: {
    restaurantsData(val) {
      if(val.length >= 0) {
        this.changeState("Main")
      }
      else{
        this.changeState("Error")
        this.errorCode = 5
      }
    },
    isServerError(val) {
      this.changeState("Error")
      this.errorCode = 4
    }
  },
  methods: {
    async loadStoreData(position) {
      await this.$store.dispatch("getStoresFromGPS",position)
    },
    missingGeolocation(code) {
      this.changeState("Error")
      this.errorCode = code.code
    },
    changeState(state){
      this.nowState = state
    },
    reloadPage() {
      this.changeState("Loading")
      navigator.geolocation.getCurrentPosition(this.loadStoreData, this.missingGeolocation)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
