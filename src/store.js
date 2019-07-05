import Vue from 'vue'
import Vuex from 'vuex'

import neueKarte from '@/Kartenstapel.js'

Vue.use(Vuex)
const HANDKARTEN = 3
const SCHWEINE_PRO_SPIELERIN = [undefined, undefined, 5, 4, 3]
const DEFAULT_SCHWEIN = _ => ({
  dreckig: false,
  stall: false,
  blitzableiter: false,
  vernagelt: false,
  highlight: ''
})

export default new Vuex.Store({
  strict: true,
  state: {
    current: 0,
    aktive_karte: undefined,
    schweine: [],
    karten: [],
    spielerin_schweine: [],
    spielerin_karten: [],
    spielerinnen: []
  },
  getters: {
    spielerinnen (state) {
      return state.spielerinnen
    },
    schweine (state) {
      return spielerinId => state.spielerin_schweine.find(s => s.id === spielerinId).schweine
    },
    schwein (state) {
      return schweinId => state.schweine.find(s => s.id === schweinId)
    },
    karten (state) {
      return spielerinId => state.spielerin_karten.find(s => s.id === spielerinId).karten
    },
    karte (state) {
      return karteId => state.karten.find(k => k.id === karteId)
    },
    current (state) {
      return state.spielerinnen[state.current]
    },
    aktiveKarte (state) {
      return state.aktive_karte
    },

    spielerinDerKarte (state) {
      return karteId => state.spielerin_karten.find(s => s.karten.includes(karteId)).id
    },
    eigeneSchweine (state, getters) {
      return karteId => getters.schweine(getters.spielerinDerKarte(karteId))
        .map(s => getters.schwein(s))
    },
    fremdeSchweine (state, getters) {
      return karteId => state.spielerin_schweine
        .filter(s => s.id !== getters.spielerinDerKarte(karteId))
        .map(s => s.schweine).flat()
        .map(s => getters.schwein(s))
    },
    alleSchweine (state) {
      return state.schweine
    },

    fremdeSchweineMitStallOhneBlitzableiter (state, getters) {
      return karteId => getters.fremdeSchweine(karteId).filter(s => s.stall && !s.blitzableiter)
    },
    eigeneSchweineMitStallOhneBlitzableiter (state, getters) {
      return karteId => getters.eigeneSchweine(karteId).filter(s => s.stall && !s.blitzableiter)
    },
    eigeneSchweineNichtDreckig (state, getters) {
      return karteId => getters.eigeneSchweine(karteId).filter(s => !s.dreckig)
    },
    alleSchweineDreckigOhneStall (state, getters) {
      return karteId => getters.alleSchweine.filter(s => s.dreckig && !s.stall)
    },
    eigeneSchweineOhneStall (state, getters) {
      return karteId => getters.eigeneSchweine(karteId).filter(s => !s.stall)
    },
    fremdeSchweineDreckig (state, getters) {
      return karteId => getters.fremdeSchweine(karteId).filter(s => s.dreckig)
    },
    eigeneSchweineDreckigMitStallOhneVernagelt (state, getters) {
      return karteId => getters.eigeneSchweine(karteId).filter(s => s.dreckig && s.stall && !s.vernagelt)
    },
    aktionSelektion (state, getters) {
      return karteId => ({
        blitz: getters.fremdeSchweineMitStallOhneBlitzableiter,
        blitzableiter: getters.eigeneSchweineMitStallOhneBlitzableiter,
        matschen: getters.eigeneSchweineNichtDreckig,
        regen: getters.alleSchweineDreckigOhneStall,
        stall: getters.eigeneSchweineOhneStall,
        waschen: getters.fremdeSchweineDreckig,
        vernagelt: getters.eigeneSchweineDreckigMitStallOhneVernagelt
      }[getters.karte(karteId).value](karteId))
        .map(s => s.id)
    },
    modifiedSchwein (state, getters) {
      return function (karteId, schweinId) {
        const schwein = { ...getters.schwein(schweinId) }
        switch (getters.karte(karteId).value) {
          case 'blitz':
            schwein.stall = false
            schwein.vernagelt = false
            break
          case 'blitzableiter':
            schwein.blitzableiter = true
            break
          case 'matschen':
            schwein.dreckig = true
            break
          case 'regen':
          case 'waschen':
            schwein.dreckig = false
            break
          case 'stall':
            schwein.stall = true
            break
          case 'vernagelt':
            schwein.vernagelt = true
            break
        }
        return schwein
      }
    },
    gewonnen (state, getters) {
      return spielerinId => state.spielerin_schweine
        .find(s => s.id === spielerinId).schweine
        .every(s => getters.schwein(s).dreckig)
    }
  },
  mutations: {
    setSchwein (state, schwein) {
      state.schweine = [...state.schweine.filter(s => s.id !== schwein.id), schwein]
    },
    highlightSchwein (state, { schweine, highlight }) {
      state.schweine = [ ...state.schweine.map(s => ({ ...s, highlight: schweine.includes(s.id) ? highlight : '' })) ]
    },
    setKarte (state, karte) {
      state.karten = [...state.karten.filter(s => s.id !== karte.id), karte]
    },
    setAktiveKarte (state, karteId) {
      state.aktive_karte = karteId
    },
    addSpielerin (state, { spielerinId, anzahlSchweine }) {
      const schweine = Array(anzahlSchweine).fill(DEFAULT_SCHWEIN()).map((s, i) => ({ ...s, id: `schwein:${spielerinId}:${i}` }))
      const karten = Array(HANDKARTEN).fill({}).map((_, i) => ({ id: `karte:${spielerinId}:${i}`, value: neueKarte() }))
      state.schweine = [...state.schweine, ...schweine]
      state.spielerin_schweine.push({ id: spielerinId, schweine: schweine.map(s => s.id) })
      state.karten = [...state.karten, ...karten]
      state.spielerin_karten.push({ id: spielerinId, karten: karten.map(s => s.id) })
      state.spielerinnen.push(spielerinId)
    },
    updateCurrent (state) {
      state.current = (state.current + 1) % state.spielerinnen.length
    },
    newKarte (state, karteId) {
      Vue.set(state.karten, karteId, neueKarte())
    },
    regen (state) {
      state.schweine = [ ...state.schweine.map(s => ({ ...s, dreckig: s.dreckig && s.stall })) ]
    }
  },
  actions: {
    addSpielerinnen ({ commit }, spielerinnen) {
      console.log(spielerinnen)
      spielerinnen.forEach(s => commit('addSpielerin', { spielerinId: s, anzahlSchweine: SCHWEINE_PRO_SPIELERIN[spielerinnen.length] }))
    },
    karteTesten ({ commit, getters }, karteId) {
      if (getters.spielerinDerKarte(karteId) !== getters.current) {
        return
      }
      commit('highlightSchwein', {
        schweine: getters.aktionSelektion(karteId),
        highlight: ['blitz', 'blitzableiter', 'vernagelt'].includes(getters.karte(karteId).value) ? 'stall' : 'schwein'
      })
    },
    karteSpielen ({ dispatch, commit, getters }, karteId) {
      if (getters.spielerinDerKarte(karteId) !== getters.current) {
        return
      }
      if (getters.karte(karteId).value === 'regen' && getters.aktiveKarte === undefined) {
        return dispatch('regen', karteId)
      }
      if (getters.aktiveKarte === karteId) {
        commit('setAktiveKarte')
        dispatch('karteVerlassen', karteId)
      } else {
        commit('setAktiveKarte', karteId)
        dispatch('karteTesten', karteId)
      }
    },
    regen ({ commit, dispatch, getters }, karteId) {
      commit('setAktiveKarte', karteId)
      commit('regen')
      return dispatch('zugEnde')
    },
    karteVerlassen ({ commit, getters }, karteId) {
      if (getters.aktiveKarte === undefined) {
        commit('highlightSchwein', { schweine: [] })
      }
    },
    zielWaehlen ({ commit, dispatch, getters }, schweinId) {
      if (getters.aktiveKarte && getters.aktionSelektion(getters.aktiveKarte).includes(schweinId)) {
        commit('setSchwein', getters.modifiedSchwein(getters.aktiveKarte, schweinId))
        dispatch('zugEnde')
      }
    },
    zugEnde ({ commit, getters }) {
      commit('setKarte', { id: getters.aktiveKarte, value: neueKarte() })
      commit('setAktiveKarte')
      commit('highlightSchwein', { schweine: [] })
      commit('updateCurrent')
    },
    abwerfen ({ commit, getters }, spielerId) {
      getters.karten(spielerId).forEach(k => commit('setKarte', { id: k, value: neueKarte() }))
    }
  }
})
