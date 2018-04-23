<template>
  <div>
    <default-container>
      <default-header>ANSWER QUESTIONS</default-header>
      <app-form-test></app-form-test>
      <div>PROGRESS BAR / HAVE TO DO THIS WITH THE HELPER</div>
    </default-container>
  </div>
</template>

<script>
import DefaultHeader from '@/components/DefaultHeader'
import DefaultContainer from '@/components/DefaultContainer'
import AppFormTest from '@/components/AppFormTest'

export default {
  name: 'ViewTest',
  components: {
    'default-container': DefaultContainer,
    'default-header': DefaultHeader,
    'app-form-test': AppFormTest
  }
}
</script>

<style lang="scss" scoped>
</style>
