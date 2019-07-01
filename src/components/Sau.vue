<template>
  <div>
    <img v-if="sau.stall" src="./../assets/scheune.png" />
    <img v-if="sau.blitzableiter" src="./../assets/blitzableiter.png" />
    <img v-if="sau.vernagelt" src="./../assets/vernagelt.png" />
    <img :src="require(`./../assets/${sau.dreckig ? 'dreckig' : 'sauber'}.png`)" />
  </div>
</template>

<style lang="stylus" scoped>

</style>

<script>
export default {
  props: [ 'spieler', 'index' ],
  computed: {
    sau () {
      return this.$store.spieler[this.$spieler].saue[this.$index]
    }
  }
}
</script>
