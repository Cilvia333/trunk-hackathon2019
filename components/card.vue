<template lang="pug">
section(:data-front="restaurant_id")
  .container
  .category
    .category_prefecture {{restaurant_data.prefecture}}
    .category_name {{restaurant_data.category_name}}
  .restaurant {{restaurant_data.name}}
  ImgCarousel(:imgs="restaurant_data.images")
  h3.value {{restaurant_data.budget}}
  h3.catch {{restaurant_data.catch}}
  a.link(:src="restaurant_data.link") {{restaurant_id}}

</template>

<script>
import ImgCarousel from "~/components/imgCarousel.vue"

export default {
  components: {
    ImgCarousel
  },
  props: [
    'restaurant_data',
    'restaurant_id'
  ],
  data: function() {
    return{
      x: null,
      y: null,
      cursorStartPos: {x: 0, y: 0},
      cursorOffset: {x: 0, y: 0},
      is_front: "false",
    }
  },
  mounted() {
    if(this.restaurant_id == 0) {
      this.setInitialState()
    }
  },
  methods: {
    setInitialState: function() {
      var el = document.getElementsByTagName("section")[0];
      el.addEventListener("touchstart",this.touchstart)

      if( (this.x !== null) && (this.y !== null) ) return

      this.x = (window.innerWidth / 2) - (this.$el.clientWidth / 2)
      this.y = (window.innerHeight / 2) - (this.$el.clientHeight / 2)
    },
    touchstart: function(e) {
      //カーソルの初期位置を控えておく
      this.cursorOffset.x = e.changedTouches[0].pageX + this.x
      this.cursorOffset.y = e.changedTouches[0].pageY + this.y
      this.cursorStartPos = {x: this.x, y: this.y}
      //イベントを登録
      document.addEventListener("touchmove", this.touchmove)
      document.addEventListener("touchend", this.touchend)
      this.$emit("x",this.x)
      this.$emit("y",this.y)
    },
    touchmove: function(e) {
      //ウインドウを移動
      this.x = this.cursorStartPos.x + (e.changedTouches[0].pageX - this.cursorOffset.x)
      this.y = this.cursorStartPos.y + (e.changedTouches[0].pageY - this.cursorOffset.y)
      this.$emit("x",this.x)
      this.$emit("y",this.y)
    },
    touchend: function(e) {
      this.cursorStartPos = null
      //イベントの後始末
      document.removeEventListener("touchmove", this.touchmove)
      document.removeEventListener("touchend", this.touchend)
      this.x = (window.innerWidth / 2) - (this.$el.clientWidth / 2)
      this.y = (window.innerHeight / 2) - (this.$el.clientHeight / 2)
      this.$emit("x",this.x)
      this.$emit("y",this.y)
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/variables.scss";
@import "~/assets/style/mixin.scss";

section{
  width:80vw;
  height:80vw;
  top:50%;
  left:50%;
  margin:auto;
  background: $black;
}

section [data-front='0']{
  z-index:10;
}

.container *{
  text-align: center;
}
</style>

