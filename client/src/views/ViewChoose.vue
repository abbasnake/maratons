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
      <p>description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae in odio ea nostrum suscipit nesciunt porro optio eaque praesentium possimus, veritatis quas et iste, quia cumque neque, excepturi. Numquam, labore.</p>
    </default-container>
  </div>
</template>

<script>
import DefaultContainer from '@/components/DefaultContainer'
import DefaultHeader from '@/components/DefaultHeader'
import DefaultInput from '@/components/DefaultInput'
import DefaultSubmit from '@/components/DefaultSubmit'
import AppSelect from '@/components/AppSelect'
import TheFormInput from '@/components/TheFormInput'

export default {
  name: 'ViewChoose',
  components: {
    'default-container': DefaultContainer,
    'default-header': DefaultHeader,
    'default-input': DefaultInput,
    'default-submit': DefaultSubmit,
    'app-select': AppSelect,
    'form-input': TheFormInput
  }
}
</script>

<style lang="scss" scoped>
</style>
