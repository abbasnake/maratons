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
    currentTestId: null,
    data: [],
    username: ''
  },
  getters: {
    allData: state => state.data,
    username: state => state.username,
    currentTestId: state => state.currentTestId,
    testNames: state => getKeyValues(state.data, 'name'),
    currentTestDescription: state => getCurrentTestKeyValue(state.data, state.currentTestId, 'description'),
    currentTestQuestions: state => getCurrentTestKeyValue(state.data, state.currentTestId, 'questions')
  },
  mutations: {
    setData (state, payload) {
      state.data = payload
    },
    changeCurrentTestId (state, payload) {
      state.currentTestId = payload
    }
  },
  actions: {
    getData (context) {
      context.commit('setData', data)
    },
    changeCurrentTest (context, payload) {
      context.commit('changeCurrentTestId', payload)
    }
  }
})
