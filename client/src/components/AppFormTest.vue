<template>
  <form @submit.prevent="onSubmit($event)" method="POST">
    <default-container>
      <app-header>{{currentQuestion}}</app-header>
      <!-- eslint-disable -->
      <default-input-radio
        v-for="answer in currentAnswers"
        :key="createRandomId()"
        :input-name="currentQuestion"
        :input-value="answer"
        @picked="setCurrentUserAnswer($event)">
        {{ answer }}
      </default-input-radio>
      <default-button set-type="submit">Submit</default-button>
    </default-container>
  </form>
</template>

<script>
import DefaultContainer from '@/components/DefaultContainer'
import DefaultButton from '@/components/DefaultButton'
import DefaultInputRadio from '@/components/DefaultInputRadio'
import AppHeader from '@/components/AppHeader'

export default {
  name: 'AppFormChooseTest',
  components: {
    'default-container': DefaultContainer,
    'default-button': DefaultButton,
    'default-input-radio': DefaultInputRadio,
    'app-header': AppHeader
  },
  data () {
    return {
      currentUserAnswer: ''
    }
  },
  computed: {
    questions () {
      return this.$store.getters.currentTestQuestions
    },
    currentQuestionIndex () {
      return this.$store.getters.currentQuestionIndex
    },
    currentQuestion () {
      return this.questions[this.currentQuestionIndex].question
    },
    currentCorrectAnswer () {
      return this.questions[this.currentQuestionIndex].answer
    },
    currentAnswers () {
      let answers = this.questions[this.currentQuestionIndex].fakes // set to fake answers
      answers.push(this.currentCorrectAnswer) // add corrct answer
      answers = answers.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]) // shuffle/found online
      return answers
    }
  },
  methods: {
    onSubmit (e) {
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.$store.dispatch('addAnswer', {
          question: this.currentQuestion,
          correctAnswer: this.currentCorrectAnswer,
          userAnswer: this.currentUserAnswer
        })
        this.$router.push({path: '/result'})
      } else {
        this.$store.dispatch('addAnswer', {
          question: this.currentQuestion,
          correctAnswer: this.currentCorrectAnswer,
          userAnswer: this.currentUserAnswer
        })
        this.$store.dispatch('nextQuestion')
      }
    },
    createRandomId () {
      return Math.random().toString(36).substr(2, 10)
    },
    setCurrentUserAnswer (e) {
      this.currentUserAnswer = e
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
