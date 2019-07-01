<template>
  <div>
    <h1>Spiel einrichten</h1>
    <div>
      <label>
        Anzahl Spieler*innen:
        <input type="number" min="2" max="4" v-model="spieler"/>
      </label>
    </div>
    <div>
      <button @click="start">Spielen!</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      spieler: 2
    }
  },
  methods: {
    start: function () {
      this.$emit('start', this.spieler)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
