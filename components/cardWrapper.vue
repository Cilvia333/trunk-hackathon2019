<template lang="pug">
  .card-wrapper-child
    Card(v-for="(restaurantData, restaurant_id) in cards_data" :key="`rest-${restaurant_id}`" :restaurant_data="restaurantData")
</template>

<script>
import Card from "~/components/card.vue"
export default {
  components: {
    Card
  },
  data: function() {
    return {
      x: null,
      y: null,
      cards_data: [],
      now_restrant_id: 0
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
    deleteCard: function() {
      this.cards_data.shift()
      this.cards_data.push(this.restaurantsData[this.now_restrant_id])
      this.now_restrant_id++;
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

