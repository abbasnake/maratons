<template>
  <div>
    <default-container>
      <default-header>HEADER CHOOSE</default-header>
      <default-input/>
      <app-select></app-select>
      <default-button set-type="submit">Submit</default-button>
      <app-paragraph></app-paragraph>
    </default-container>
  </div>
</template>

<script>
import DefaultContainer from '@/components/DefaultContainer'
import DefaultHeader from '@/components/DefaultHeader'
import DefaultInput from '@/components/DefaultInput'
import DefaultButton from '@/components/DefaultButton'
import AppParagraph from '@/components/AppParagraph'
import AppSelect from '@/components/AppSelect'
import TheFormInput from '@/components/TheFormInput'

export default {
  name: 'ViewChoose',
  components: {
    'default-container': DefaultContainer,
    'default-header': DefaultHeader,
    'default-input': DefaultInput,
    'default-button': DefaultButton,
    'app-paragraph': AppParagraph,
    'app-select': AppSelect,
    'form-input': TheFormInput
  }
}
</script>

<style lang="scss" scoped>
</style>
