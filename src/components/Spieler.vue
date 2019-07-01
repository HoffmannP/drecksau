<template>
  <div>
    <h2>Spieler {{ index }}</h2>
    <div v-if="amZug">am Zug</div>
    <div v-for="(sau, i) in saeue" :key="`Sau${i}`">
      <Sau :spieler="index" :index="i" />
    </div>
    <div v-for="(karte, i) in hand" :key="`Karte${i}`">
      <img @click="_ => spielen(i, karte)" :src="require(`./../assets/${karte}.png`)" />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
</style>

<script>
import Sau from './Sau.vue'

export default {
  props: [
    'index',
    'amZug'
  ],
  components: {
    Sau
  },
  computed: {
    saeue () {
      return this.$store.state.spieler[this.index].saeue
    },
    hand () {
      return this.$store.state.spieler[this.index].hand
    }
  },
  methods: {
    spielen: function (index, karte) {
      switch (karte) {
        case 'blitzableiter':
          this.$store.dispatch('blitzableiter', this.index)
          break
        case 'matschen':
          this.$store.dispatch('matschen', this.index)
          break
        case 'scheune':
          this.$store.dispatch('scheune', this.index)
          break
        case 'vernagelt':
          this.$store.dispatch('vernagelt', this.index)
          break
        default:
          this.$emit('spielt', {
            spieler: this.index,
            karte: karte
          })
      }
      this.$store.dispatch('neueKarte', {
        spieler: this.index,
        karte: index
      })
    }
  }
}
</script>
