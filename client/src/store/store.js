import Vue from 'vue'
import Vuex from 'vuex'
import data from './data.js'
import { getKeyValues, getCurrentTestDescription } from './helpers.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTestId: null,
    data: [],
    username: ''
  },
  getters: {
    username: state => state.username,
    currentTestId: state => state.currentTestId,
    currentTestDescription: state => getCurrentTestDescription(state.data, state.currentTestId),
    testNames: state => getKeyValues(state.data, 'name')
  },
  mutations: {
    setData (state, payload) {
      state.data = payload
    }
  },
  actions: {
    getData (context) {
      context.commit('setData', data)
    }
  }
})
