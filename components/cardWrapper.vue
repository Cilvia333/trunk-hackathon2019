<template lang="pug">
  .card-wrapper-child
    Card(v-for="(restaurantData, restaurant_id) in cards_data" :key="`rest-${restaurant_id}`" :restaurant_data="restaurantData" :restaurant_id="restaurant_id" :is_swiped="is_swiped" @finishAnimation="deleteCard" v-touch:swipe="onSwipe")
</template>

<script>
import Card from "~/components/card.vue"

export default {
  components: {
    Card
  },
  data: function() {
    return {
      cards_data: [],
      now_restrant_id: 0,
      is_swiped: "false"
    }
  },
  computed: {
    restaurantsData() {
      if(this.$store.state.restaurants != null){
        return this.$store.state.restaurants
      }
    }
  },
  mounted() {
    for(var i = 0; i < 2; i++){
      this.cards_data.push(this.restaurantsData[this.now_restrant_id])
      this.now_restrant_id++;
    }
  },
  methods: {
    deleteCard() {
      this.cards_data.shift()
      this.cards_data.push(this.restaurantsData[this.now_restrant_id])
      if(this.now_restrant_id+1 < this.restaurantsData.length){
        this.now_restrant_id++
      }
      this.is_swiped = "false"
    },
    onSwipe(ev) {
      if(ev == "right") {
        this.is_swiped = "right"
      }
      else if(ev == "left") {
        this.is_swiped = "left"
      }
      console.log(ev)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-wrapper-child {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

