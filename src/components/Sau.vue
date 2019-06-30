<template>
  <div>
    <img v-if="stall" src="stall.jpg" />
    <img v-if="blitzableiter" src="blitzableiter.jpg" />
    <img v-if="vernagelt" src="vernagelt.jpg" />
    <img v-if="dreckig" src="dreckigeSau.jpg" />>
    <img v-else src="saubereSau.jpg" />>
  </div>
</template>

<style lang="stylus" scoped>

</style>

<script>
import func from '../../vue-temp/vue-editor-bridge';
  export default {
    data: function () {
      return {
        dreckig: false,
        stall: false,
        blitzableiter: false,
        vernagelt: false
      }
    },
    methods: {
      matschen: function () {
        this.dreckig = true
      },
      bauen: function () {
        if (!this.stall) {
          this.stall = true
        }
      },
      vernageln: function () {
        if (this.stall && this.dreckig) {
          this.vernagelt = true
        }
      },
      schuetzen: function () {
        if (this.stall) {
          this.blitzableiter = true
        }
      },
      waschen: function () {
        if (!(this.stall && this.vernagelt)) {
          this.dreckig = false
        }
      },
      regnen: function () {
        if (!this.stall) {
          this.dreckig = false
        }
      },
      blitzen: function () {
        if (!this.blitzableiter) {
          this.stall = false
          this.vernagelt = false
        }
      }
    }
  }
</script>
