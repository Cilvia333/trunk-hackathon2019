<template lang="pug">
.main
  menu
    .reload(@click="")
      img.umbrella(src="~/assets/imgs/umbrella.svg")
    .text 君の行く店はココだ !
  .cards
    .cards-wrapper
      CardWrapper(@updateRestaurant="setRestaurantLink")
      .text カードが無くなったぞ！
  a(:href="go_link")
    .go-button: .go-text Go!
</template>

<script>
import CardWrapper from "~/components/cardWrapper.vue"

export default {
  components: {
    CardWrapper
  },
  data(){
    return{
      go_link:""
    }
  },
  methods: {
    setRestaurantLink(link) {
      this.go_link = link
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/variables.scss";
@import "~/assets/style/mixin.scss";

.main {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

menu{
  width: 100%;
  height: 60px;
  background: $theme-orange;
  background: $theme-gradient;
  padding-left: 12px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  position: relative;
  .reload{
    position: absolute;
    display: inline-block;
    bottom: 0;
    left: 0;
    width: auto;
    height: 60px;
    .umbrella {
      display: block;
      margin-left: 8px;
      width: 60px;
      height: 60px;
    }
  }

  .text{
    padding-top: 4px;
    @include noto-font(2rem,#fff);
    font-weight: 700;
  }
}
.cards{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 60px; /*menu-bar*/
  padding-bottom: (60px + 20px);

  .cards-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px;

    .text {
      position: absolute;
      display: block;
      top: 0;
      bottom: 0;
      margin:auto;
      text-align: center;
      width: calc(100% - 40px);
      height:min-content;
    }
  }
}

.go-button {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
  width: calc(100vw - 40px);
  height: 60px;
  background: $theme-orange;
  background: $theme-gradient;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s $bezier-ease-out;
  filter: brightness(100%);
  &:active{
    filter: brightness(130%);
  }
  .go-text {
    @include noto-font(2.2rem,#fff);
  }
}


@media (max-width:640px){
  menu .reload .umbrella{
    margin-left: 4px;
  }
}
@media (max-width:340px){
  /*340px以下で適用する内容*/
  menu{
    .reload {
      height: 60px;
      .umbrella{
        margin-top: 10px;
        width: 50px;
        height: 50px;
        margin-left: 2px;
      }
    }
    .text{
      padding-top: 8px;
      font-size: 1.8rem;
    }
  }
}
</style>
