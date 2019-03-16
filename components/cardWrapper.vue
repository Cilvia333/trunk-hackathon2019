<template lang="pug">
  section
    Card(v-for:)
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
      y: null
    }
  },
}
</script>

<style lang="scss" scoped>

</style>

