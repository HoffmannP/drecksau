import Vue from 'vue'
import Vuex from 'vuex'

import neueKarte from '@/Kartenstapel.js'

Vue.use(Vuex)
const HANDKARTEN = 3
const SAUE_PRO_SPIELER = [undefined, undefined, 5, 4, 3]

export default new Vuex.Store({
  strict: true,
  state: {
    current: 0,
    spieler: []
  },
  mutations: {
    addSpieler (state, newSpieler) {
      state.spieler.push(newSpieler)
    },
    setCurrent (state, current) {
      this.current = current
    },
    newCard (state, { spieler, karte }) {
      const data = state.spieler[spieler]
      data.hand[karte] = neueKarte()
      Vue.set(state.spieler, spieler, data)
    },
    setSau (state, { spieler, sau, data }) {

    }
  },
  actions: {
    neuesSpiel ({ dispatch, commit }, anzahlSpieler) {
      for (let i = 0; i < anzahlSpieler; i++) {
        dispatch('neuerSpieler', SAUE_PRO_SPIELER[anzahlSpieler])
          .then(neuerSpieler => this.commit('addSpieler', neuerSpieler))
      }
      commit('setCurrent', 0)
    },
    neuerSpieler (context, anzahlSaeue) {
      return {
        hand: Array(HANDKARTEN)
          .fill(null)
          .map(_ => neueKarte()),
        saeue: Array(anzahlSaeue)
          .fill({
            dreckig: false,
            scheune: false,
            blitzableiter: false,
            vernagelt: false
          })
      }
    },
    neueKarte ({ state, commit }, { spieler, karte }) {
      this.commit('newCard', { spieler, karte })
    },
    scheune ({ state, commit }, spieler) {
      for (let i in state.spieler[spieler].saeue) {
        let sau = state.spieler[spieler].saeue[i]
        if (!sau.scheune) {
          sau.scheune = true
          return this.commit('setSau', { spieler, i, sau })
        }
      }
    },
    blitzableiter ({ state, commit }, spieler) {
      for (let i in state.spieler[spieler].saeue) {
        let sau = state.spieler[spieler].saeue[i]
        if (sau.scheune && !sau.blitzableiter) {
          sau.blitzableiter = true
          return this.commit('setSau', { spieler, i, sau })
        }
      }
    },
    vernagelt ({ state, commit }, spieler) {
      for (let i in state.spieler[spieler].saeue) {
        let sau = state.spieler[spieler].saeue[i]
        if (sau.scheune && sau.dreckig && !sau.vernagelt) {
          sau.vernagelt = true
          return this.commit('setSau', { spieler, i, sau })
        }
      }
    },

  }
})
