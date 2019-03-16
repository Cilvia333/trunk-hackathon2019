<template lang="pug">
section
  menu
    img.umbrella(src="~/assets/imgs/umbrella.svg")
    .text 君の行く店はココだ！
  main

</template>

<script>
import Card from "~/components/card.vue"

export default {
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/variables.scss";
@import "~/assets/style/mixin.scss";

menu{
  width: 100%;
  height: 80px;
  background: $theme-gradient;
  padding-left: 12px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  .umbrella{
    height: 80px;
  }
  .text{
    padding-top: 12px;
    padding-left: 18px;
    @include noto-font(2.4rem,#fff);
    font-weight: 700;
  }
}
</style>
