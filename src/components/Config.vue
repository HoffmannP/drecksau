<template>
  <div>
    <h1>Spiel einrichten</h1>
    <div>
      <h2>Spieler*innen</h2>
      <div>
        <input name="spielerin:0" placeholder="Name Spielerin 1" v-model="spielerinnen[0]" /><br>
        <input name="spielerin:1" placeholder="Name Spielerin 2" v-model="spielerinnen[1]" /><br>
        <input name="spielerin:2" placeholder="Name Spielerin 3" v-model="spielerinnen[2]" /><br>
        <input name="spielerin:3" placeholder="Name Spielerin 4" v-model="spielerinnen[3]" /><br>
      </div>
      <button @click="start">Beginnen</button>
    </div>
    <div>
      <h2>Regeln</h2>
      <label><input type="checkbox" /> Regen immer spielbar</label><br>
      <label><input type="checkbox" /> Endlosstapel</label><br>
      <label><input type="checkbox" /> Vier Handkarten</label><br>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
const reduceToUnique = function (a, c) {
  let d = c
  let i = 2
  while (a.includes(d)) {
    d = c + '' + i++
  }
  return [ ...a, d ]
}

export default {
  data: function () {
    return {
      spielerinnen: []
    }
  },
  methods: {
    start: function () {
      this.$store.dispatch(
        'addSpielerinnen',
        this.spielerinnen
          .filter(s => s.length > 0)
          .reduce(reduceToUnique, [])
      )
    }
  }
}
</script>
