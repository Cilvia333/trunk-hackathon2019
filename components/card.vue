<template lang="pug">
.card
  .card-wrapper
    .category
      .category_name
        .category_img(v-if="categoryImg(restaurant_data.category_name)")
          img(:src="`../category_imgs/${categoryImg(restaurant_data.category_name)}.png`")
        .category_name-text {{restaurant_data.category_name}}
      .category_prefecture
        .category_prefecture-text {{restaurant_data.prefecture}}
        font-awesome-icon(icon="map-marker-alt").category_pref-icon
    restaurantImg(:imgs="restaurant_data.images")
    .restaurant
      .restaurant_name {{restaurant_data.name}}
      .restaurant_data_list
        .restaurant_data
          font-awesome-icon(icon="yen-sign").restaurant_data_icon 
          .restaurant_data_value {{restaurant_data.budget}}
        .restaurant_data
          font-awesome-icon(icon="clock").restaurant_data_icon
          .restaurant_data_value {{restaurant_data.time}}
      .catch {{restaurant_data.catch}}
</template>

<script>
import restaurantImg from "~/components/restaurantImg.vue"

export default {
  components: {
    restaurantImg
  },
  props: ["restaurant_data"],
  methods:{
    categoryImg(category){
      switch(category){
        case "たこやき": return "takoyaki"; break;
        case "お好み焼き": return "okonomiyaki"; break;
        case "鹿せんべい": return "sikasenbei"; break;
        case "茶そば": return "tyasoba"; break;
        case "ラーメン": return "ramen"; break;
        default: return null; break;
      }
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
  padding: 6px;
  background: $theme-gradient;
  border-radius: 12px;
  overflow-y: overlay;
  .card-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background: #fff;
  }
}
.category {
  width: 100%;
  height: 46px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  @include noto-font(1.6rem);
}
.category_name {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  .category_img {
    width: 40px;
    height: 40px;
    padding: 2px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
  }
  .category_name-text {
    margin-left: 4px;
  }
}
.category_prefecture {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  .category_prefecture-text {
    margin-right: 2px;
  }
  .category_pref-icon {
    width: 24px;
    height: 40px;
    padding: 12px 0;
  }
}

.restaurant {
  width: 100%;
  padding: 8px 12px;
  .restaurant_name {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 4px;
  }
}
.restaurant_data_list {
  margin-bottom: 8px;
  .restaurant_data {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    .restaurant_data_icon {
      width: 15px;
      height: 15px;
      color: #333;
    }
    .restaurant_data_value {
      margin-left: 8px;
      font-size: 1.4rem;
    }

  }
}
.catch {

}
</style>

