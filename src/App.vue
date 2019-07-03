<template>
  <div id="app">
    <img alt="Drecksau" src="./assets/dreckig.png">
    <Config v-if="spielerinnen.length === 0" @start="start" />
    <Spielerin v-for="spielerinId in spielerinnen" :key="spielerinId" :id="spielerinId" />
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
import Config from './components/Config.vue'
import Spielerin from './components/Spielerin.vue'

export default {
  name: 'app',
  computed: {
    spielerinnen: function () {
      return this.$store.getters.spielerinnen
    }
  },
  components: {
    Config,
    Spielerin
  },
  methods: {
    start: function (anzahlSpielerinnen) {
      this.$store.dispatch('addSpielerinnen', anzahlSpielerinnen)
    }
  }
}
</script>
