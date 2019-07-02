<template>
  <div :class="{ amZug: amZug }">
    <h2>Spielerin {{ id }}</h2>
    <div v-if="gewonnen">Gewonnen!</div>

    <div class="schweine">
      <Schwein v-for="schweinId in schweine" :key="schweinId" :id="schweinId" />
    </div>

    <div class="karten">
      <Karte v-for="karteId in karten" :key="karteId" :id="karteId" />
      <button @click="abwerfen">Hand abwerfen</button>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
div.amZug
  background lightyellow
div:not(.amZug) > .karten
  opacity .5
button
  transform: rotate(-90deg);
  transform-origin: left top;
  margin-left: 10px;
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
  },
  methods: {
    abwerfen () {
      this.$store.dispatch('abwerfen', this.id)
    }
  }
}
</script>
