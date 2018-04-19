import Vue from 'vue'
import Vuex from 'vuex'
import data from './data.js'
import {
  getKeyValues,
  getCurrentTestKeyValue
} from './helpers.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTestId: 1,
    data: [],
    username: ''
  },
  getters: {
    username: state => state.username,
    currentTestId: state => state.currentTestId,
    currentTestDescription: state => getCurrentTestKeyValue(state.data, state.currentTestId, 'description'),
    currentTestQuestions: state => getCurrentTestKeyValue(state.data, state.currentTestId, 'questions'),
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
