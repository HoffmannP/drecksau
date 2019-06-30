<template>
  <div>
    <div v-for="karte in karten" :key="karte.id">
      <img src="{{karte}}.jpg" />
    </div>
  </div>
</template>

<style lang="stylus" scoped>

</style>

<script>
  export default {
    data: function () {
      return {
        karten: []
      }
    },
    methods: {
      _neueKarte: function () {
        Math.ranom()
      },
      karteSpielen: function () {

      },
      init: function () {

      }
    }
  }
</script>
