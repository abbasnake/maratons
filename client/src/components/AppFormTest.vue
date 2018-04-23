<template>
  <form @submit.prevent="onSubmit($event)" method="POST">
    <default-container>
      <default-input-radio/>
      <default-input-radio/>
      <default-input-radio/>
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
  methods: {
    onSubmit (e) {
      console.log('answer test form')
      // const username = e.target[0].value
      // this.$store.dispatch('setUsername', username)
      // this.$store.dispatch('changeContentAnimation')
      // this.$store.dispatch('resetAnimations')
      // this.$router.push({path: '/test'})
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
