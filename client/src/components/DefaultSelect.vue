<template>
  <div class="container">
    <select class="container__select" name="" id="">
      <option value="" selected disabled>choose</option>
      <option value="1">One</option>
      <option value="2">TwoTwo</option>
      <option value="3">333</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DefaultSelect'
}
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  border: 1px solid red;
  display: grid;
  justify-items: center;
  padding: 5px;
  &__select {
    padding: 5px;
  }
}
</style>
