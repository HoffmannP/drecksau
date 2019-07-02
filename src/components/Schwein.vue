<template>
  <div :class="schwein.highlight" @click="zielWaehlen">
    <img v-if="schwein.stall"         class="stall"          src="./../assets/scheune.png" />
    <img v-if="schwein.blitzableiter" class="blitzableiter"  src="./../assets/blitzableiter.png" />
    <img v-if="schwein.vernagelt"     class="vernagelt"      src="./../assets/vernagelt.png" />
    <img                              class="schwein"       :src="require(`./../assets/${schwein.dreckig ? 'dreckig' : 'sauber'}.png`)" />
  </div>
</template>

<style lang="stylus" scoped>
img
  border 3px solid transparent
  border-radius 10px
.stall img.stall, .stall img.vernagelt, .schwein img.schwein
  border-color red
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
