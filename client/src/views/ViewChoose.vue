<template>
  <div>
    <default-container>
      <default-header>HEADER CHOOSE</default-header>
    </default-container>

    <default-container>
      <default-input />
    </default-container>

    <default-container>
      <app-select></app-select>
    </default-container>
    
    <default-container>
      <default-submit></default-submit>
    </default-container>

    <default-container>
      <default-paragraph></default-paragraph>
    </default-container>
  </div>
</template>

<script>
import DefaultContainer from '@/components/DefaultContainer'
import DefaultHeader from '@/components/DefaultHeader'
import DefaultInput from '@/components/DefaultInput'
import DefaultSubmit from '@/components/DefaultSubmit'
import DefaultParagraph from '@/components/DefaultParagraph'
import AppSelect from '@/components/AppSelect'
import TheFormInput from '@/components/TheFormInput'

export default {
  name: 'ViewChoose',
  components: {
    'default-container': DefaultContainer,
    'default-header': DefaultHeader,
    'default-input': DefaultInput,
    'default-submit': DefaultSubmit,
    'default-paragraph': DefaultParagraph,
    'app-select': AppSelect,
    'form-input': TheFormInput
  }
}
</script>

<style lang="scss" scoped>
</style>
