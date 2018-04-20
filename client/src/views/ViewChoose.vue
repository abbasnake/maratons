<template>
  <div>
    <default-container>
      <default-header>HEADER CHOOSE</default-header>
      <app-form-choose-test/>
      <app-paragraph></app-paragraph>
    </default-container>
  </div>
</template>

<script>
import DefaultContainer from '@/components/DefaultContainer'
import DefaultHeader from '@/components/DefaultHeader'
import AppParagraph from '@/components/AppParagraph'
import AppFormChooseTest from '@/components/AppFormChooseTest'

export default {
  name: 'ViewChoose',
  components: {
    'default-container': DefaultContainer,
    'default-header': DefaultHeader,
    'app-paragraph': AppParagraph,
    'app-form-choose-test': AppFormChooseTest
  }
}
</script>

<style lang="scss" scoped>
</style>
