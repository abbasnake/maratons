<template>
  <form @submit.prevent="onSubmit($event)" method="POST">
    <default-container>
      <div>{{currentQuestion}}</div>
      <!-- eslint-disable -->
      <!-- might have to make id's in the data -->
      <default-input-radio
        v-for="answer in currentAnswers"
        :key="createRandomId()"
        :input-name="currentQuestion"
        :input-value="answer"
        v-model="picked">
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

export default {
  name: 'AppFormChooseTest',
  components: {
    'default-container': DefaultContainer,
    'default-button': DefaultButton,
    'default-input-radio': DefaultInputRadio
  },
  data () {
    return {
      picked: ''
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
    currentAnswers () {
      let answers = this.questions[this.currentQuestionIndex].fakes // set to fake answers
      answers.push(this.questions[this.currentQuestionIndex].answer) // add corrct answer
      answers = answers.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]) // shuffle/found online
      return answers
    }
  },
  methods: {
    onSubmit (e) {
      console.log(e.target, this.picked)
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.$router.push({path: '/result'})
      } else {
        this.$store.dispatch('nextQuestion')
      }
    },
    createRandomId () {
      return Math.random().toString(36).substr(2, 10)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
