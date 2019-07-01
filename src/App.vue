<template>
  <div id="app">
    <img alt="Drecksau" src="./assets/dreckig.png">
    <ConfigGame v-if="spielers.length === 0" @start="start" />
    <div v-for="(spieler, i) in spielers" :key="`Spieler${i}`">
      <Spieler
        :index="i"
        :am-zug="current === i"
        @spielt="spielen" />
    </div>
  </div>
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  text-align center
  color #2c3e50
  margin-top 60px
</style>

<script>
import ConfigGame from './components/ConfigGame.vue'
import Spieler from './components/Spieler.vue'

export default {
  name: 'app',
  computed: {
    current: function () { return this.$store.state.current },
    spielers: function () { return this.$store.state.spieler }
  },
  components: {
    ConfigGame,
    Spieler
  },
  methods: {
    start: function (anzahlSpieler) {
      this.$store.dispatch('neuesSpiel', anzahlSpieler)
    },
    spielen: function (spieltEvent) {
      console.log(spieltEvent)
    }
  }
}
</script>
