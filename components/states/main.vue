<template lang="pug">
section
  menu
    img.umbrella(src="~/assets/imgs/umbrella.svg")
    img.arrow(src="~/assets/imgs/umbrella.svg")
  main
    Card
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
  background: $theme-orange;
}
</style>
