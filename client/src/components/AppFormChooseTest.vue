<template>
  <form @submit.prevent="onSubmit" method="POST">
    <default-container>
      <default-input/>
      <app-select/>
      <default-button set-type="submit">Submit</default-button>
    </default-container>
  </form>
</template>

<script>
import DefaultContainer from '@/components/DefaultContainer'
import DefaultInput from '@/components/DefaultInput'
import DefaultButton from '@/components/DefaultButton'
import AppSelect from '@/components/AppSelect'

export default {
  name: 'AppFormChooseTest',
  components: {
    'default-container': DefaultContainer,
    'default-input': DefaultInput,
    'app-select': AppSelect,
    'default-button': DefaultButton
  },
  methods: {
    onSubmit () {
      console.log('submitting')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
