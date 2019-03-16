<template lang="pug">
  div
    .card-wrapper
      .card(v-for="(restaurantData, restaurant_id) in cards_data" :key="`key-${restaurant_id}`" :style="{top:`${top_position}px`,left:`${left_position}px`}")
        .takoyaki(draggable="true", @dragstart="dragStart", @dragend="dragEnd")
          Card(:restaurant_data="restaurantData" :restaurant_id="restaurant_id", @x="getX", @y="getY")
    .card-trash-right(@drop="onDrop",@dragover="dragOver",dropzone="move",ref="tako")
    .card-trash-left
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
      top_position: 0,
      left_position: 0
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
    dragStart(ev) {
      ev.dataTransfer.setDragImage(ev.target.cloneNode(true), 0, 0)
      // ev.target.style.opacity = '0'
    },
    dragEnd(ev) {
      ev.target.style.opacity = ''
    },
    dragOver(ev) {
      ev.preventDefault();
    },
    onDrop(ev) {
      ev.preventDefault();
      this.deleteCard();
    },
    deleteCard: function() {
      this.cards_data.shift()
      this.cards_data.push(this.restaurantsData[this.now_restrant_id])
      this.now_restrant_id++
    },
    getX: function(x) {
      this.left_position = x;
      console.log(this.left_position)
    },
    getY: function(y) {
      this.top_position = y;
    }
  }
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  position: relative;
  width: auto;
  height: auto;
  .card {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: auto;
    &:nth-last-child(){
      top: 0 !important;
      left: 0 !important;
    }
  }
}
.takoyaki {
  background-color: red;
}
section{
  position: absolute;
  top:0;
  left:0;
}


.card-trash {
  &-left{
  background-color: yellow;

    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100vh;
  }
  &-right{
  background-color: yellow;

    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100vh;
  }
}
</style>

