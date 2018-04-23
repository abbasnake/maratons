<template>
  <form @submit.prevent="onSubmit" method="POST">
    <default-container>
      <div>{{currentQuestion}}</div>
      <!-- eslint-disable -->
      <!-- will have to add the :key attribute I suppose, perhaps another randomly generated one -->
      <default-input-radio v-for="answer in currentAnswers" :input-name="currentQuestion" :input-value="answer">{{ answer }}</default-input-radio>
      <default-button set-type="submit">Submit</default-button>
    </default-container>
  </form>
</template>

<script>
import DefaultContainer from '@/components/DefaultContainer'
import DefaultButton from '@/components/DefaultButton'
import DefaultInputRadio from '@/components/DefaultInputRadio'

export default {
  name: 'AppFormChooseTest',
  components: {
    'default-container': DefaultContainer,
    'default-button': DefaultButton,
    'default-input-radio': DefaultInputRadio
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
    currentAnswers () {
      let answers = this.questions[this.currentQuestionIndex].fakes // set to fake answers
      answers.push(this.questions[this.currentQuestionIndex].answer) // add corrct answer
      answers = answers.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]) // shuffle/found online
      return answers
    }
  },
  methods: {
    onSubmit (e) {
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.$router.push({path: '/result'})
      } else {
        this.$store.dispatch('nextQuestion')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
