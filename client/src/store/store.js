import Vue from 'vue'
import Vuex from 'vuex'
import data from './data'
import helperAnimations from './helperAnimations'
import {
  getKeyValues,
  getCurrentTestKeyValue,
  getScore
} from './helpers.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTestId: null,
    currentQuestionIndex: 0,
    data: [],
    username: '',
    userAnswers: [],
    helperAnimations
  },
  getters: {
    allData: state => state.data,
    username: state => state.username,
    currentTestId: state => state.currentTestId,
    testNames: state => getKeyValues(state.data, 'name'),
    currentTestDescription: state => getCurrentTestKeyValue(state.data, state.currentTestId, 'description'),
    currentTestQuestions: state => getCurrentTestKeyValue(state.data, state.currentTestId, 'questions'),
    currentQuestionIndex: state => state.currentQuestionIndex,
    helperAnimations: state => state.helperAnimations,
    score: state => getScore(state.userAnswers)
  },
  mutations: {
    setData (state, payload) {
      state.data = payload
    },
    changeCurrentTestId (state, payload) {
      state.currentTestId = payload
    },
    setUsername (state, payload) {
      state.username = payload
    },
    resetAnimations (state) {
      state.helperAnimations.changeContent = false
    },
    changeContentAnimation (state) {
      state.helperAnimations.changeContent = true
    },
    nextQuestion (state) {
      state.currentQuestionIndex++
    },
    addAnswer (state, payload) {
      state.userAnswers.push(payload)
    }
  },
  actions: {
    getData (context) {
      context.commit('setData', data)
    },
    changeCurrentTest (context, payload) {
      context.commit('changeCurrentTestId', payload)
    },
    setUsername (context, payload) {
      context.commit('setUsername', payload)
    },
    changeContentAnimation (context) {
      context.commit('changeContentAnimation')
    },
    resetAnimations (context) {
      setTimeout(() => {
        context.commit('resetAnimations')
      }, 500) // this perhaps needs to be as a payload
    },
    nextQuestion (context) {
      context.commit('nextQuestion')
    },
    addAnswer (context, payload) {
      context.commit('addAnswer', payload)
    }
  }
})
