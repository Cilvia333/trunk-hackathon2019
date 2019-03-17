<template lang="pug">
  div
    Main(v-if = "nowState === 'Main'" @reload="reloadPage")
    Error(v-if = "nowState ==='Error'" v-bind:errorCode="errorCode")
    transition
      Loading(v-show = "nowState ==='Loading'")
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
      errorCode: null
    }
  },
  async mounted() {
    navigator.geolocation.getCurrentPosition(this.loadStoreData, this.missingGeolocation)
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
        console.log(hogehoge)
      }
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
