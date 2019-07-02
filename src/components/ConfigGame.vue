<template>
  <div>
    <h1>Spiel einrichten</h1>
    <div>
      <label>
        Anzahl Spieler*innen:
        <input type="number" min="2" max="4" v-model="anzahl_spielerinnen"/>
      </label>
    </div>
    <div>
      <button @click="start">Spielen!</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  data: function () {
    return {
      anzahl_spielerinnen: 2
    }
  },
  methods: {
    start: function () {
      this.$emit('start', this.anzahl_spielerinnen)
    }
  }
}
</script>
