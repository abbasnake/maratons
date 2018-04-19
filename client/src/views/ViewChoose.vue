<template>
  <div>
    <default-header>HEADER CHOOSE</default-header>
    <default-input />
    <default-select></default-select>
    <button>Submit</button>
    <p>description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae in odio ea nostrum suscipit nesciunt porro optio eaque praesentium possimus, veritatis quas et iste, quia cumque neque, excepturi. Numquam, labore.</p>
  </div>
</template>

<script>
import DefaultHeader from '@/components/DefaultHeader'
import DefaultInput from '@/components/DefaultInput'
import DefaultSelect from '@/components/DefaultSelect'
import TheFormInput from '@/components/TheFormInput'

export default {
  name: 'ViewChoose',
  components: {
    'default-header': DefaultHeader,
    'default-input': DefaultInput,
    'default-select': DefaultSelect,
    'form-input': TheFormInput
  }
}
</script>

<style lang="scss" scoped>
</style>
