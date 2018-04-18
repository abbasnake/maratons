<template>
  <form class="form" @submit.prevent="onSubmit">
    <input type="text">
    <select name="" id="">
      <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option>
    </select>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'TheFormInput',
  methods: {
    onSubmit () {
      console.log('on submit')
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  border: 1px solid blue;
}
</style>
