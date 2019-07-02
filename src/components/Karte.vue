<template>
  <div>
    <img :class="{ active: aktiv === karte.id }" @mouseover="hover" @mouseout="unhover" @click="click" :src="require(`./../assets/${karte.value}.png`)" />
  </div>
</template>

<style lang="stylus" scoped>
img
  border 3px solid transparent
  border-radius 10px
img.active
  border-color blue
</style>

<script>
export default {
  props: [ 'id' ],
  computed: {
    karte () {
      return this.$store.getters.karte(this.id)
    },
    aktiv () {
      return this.$store.getters.aktiveKarte
    }
  },
  methods: {
    hover () {
      this.$store.dispatch('karteTesten', this.id)
    },
    unhover () {
      this.$store.dispatch('karteVerlassen', this.id)
    },
    click () {
      this.$store.dispatch('karteSpielen', this.id)
    }
  }
}
</script>
