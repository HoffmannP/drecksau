<template>
  <div :class="schwein.highlight" @click="zielWaehlen">
    <img                              class="schwein"       :src="require(`./../assets/${schwein.dreckig ? 'dreckig' : 'sauber'}.png`)" />
    <img v-if="schwein.stall"         class="stall"          src="./../assets/stall.png" />
    <img v-if="schwein.blitzableiter" class="blitzableiter"  src="./../assets/blitzableiter.png" />
    <img v-if="schwein.vernagelt"     class="vernagelt"      src="./../assets/vernagelt.png" />
  </div>
</template>

<style lang="stylus" scoped>
div
  display contents
img
  border 3px solid transparent
  border-radius 10px
.stall img.stall, .stall img.vernagelt, .schwein img.schwein
  border-color red
img.stall, img.blitzableiter, img.vernagelt
  margin-left -129px
  margin-right 77px
  height 77px
  width 46.5px
img.vernagelt
  margin-right 0px
  margin-left -53px
</style>

<script>
export default {
  props: [ 'id' ],
  computed: {
    schwein () {
      return this.$store.getters.schwein(this.id)
    }
  },
  methods: {
    zielWaehlen () {
      this.$store.dispatch('zielWaehlen', this.id)
    }
  }
}
</script>
