<template>
  <div>
    <h2>Spielerin {{ id }}</h2>
    <div v-if="amZug">am Zug</div>
    <div v-if="gewonnen">Gewonnen!</div>

    <div v-for="schweinId in schweine" :key="schweinId">
      <Schwein :id="schweinId" />
    </div>

    <div v-for="karteId in karten" :key="karteId">
      <Karte :id="karteId" />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
</style>

<script>
import Schwein from './Schwein.vue'
import Karte from './Karte.vue'

export default {
  props: [
    'id'
  ],
  components: {
    Schwein,
    Karte
  },
  computed: {
    schweine () {
      return this.$store.getters.schweine(this.id)
    },
    karten () {
      return this.$store.getters.karten(this.id)
    },
    amZug () {
      return this.$store.getters.current === this.id
    },
    gewonnen () {
      return this.$store.getters.gewonnen(this.id)
    }
  }
}
</script>
