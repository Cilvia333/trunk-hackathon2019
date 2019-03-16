<template lang="pug">
.card(:data-swiped="is_swiped" :data-position="restaurant_id" @transitionend="NoticeAnimationEnd")
  .card-wrapper
    .category
      .category_prefecture {{restaurant_data.prefecture}}
      .category_name {{restaurant_data.category_name}}
    restaurantImg(:imgs="restaurant_data.images")
    .restaurant
      .restaurant_name {{restaurant_data.name}}
      .restaurant_data_list
        .restaurant_data
          .restaurant_data_icon
          .restaurant_data_value {{restaurant_data.budget}}
        .restaurant_data
          .restaurant_data_icon
          .restaurant_data_value {{restaurant_data.time}}
      .catch {{restaurant_data.catch}}
</template>

<script>
import restaurantImg from "~/components/restaurantImg.vue"

export default {
  components: {
    restaurantImg
  },
  props: [
    "restaurant_data",
    "restaurant_id",
    "is_swiped"
  ],
  methods: {
    NoticeAnimationEnd() {
      this.$emit("finishAnimation",this.is_swiped)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/variables.scss";
@import "~/assets/style/mixin.scss";

.card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 6px solid $theme-orange;
  border: 6px solid $theme-gradient;
  border-radius: 12px;
  background: #fff;
  overflow-y: overlay;
  transition: left 0s $bezier-ease-out;
}

.card[data-position="0"]{
  z-index: 2;
}

.card[data-position="0"][data-swiped="right"]{
  left:120%;
  transition: left 1s $bezier-ease-out;

}

.card[data-position="0"][data-swiped="left"]{
  left:-120%;
  transition: left 1s $bezier-ease-out;
}

.category {
  width: 100%;
  height: 50px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  @include noto-font(1.8rem);
  .category_prefecture {
    
  }
}
</style>

