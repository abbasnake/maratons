<template>
  <header class="header">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'DefaultHeader'
}
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  display: grid;
  font-size: 7vw;
  font-weight: bold;
  justify-items: center;
  padding: 10px;
}

@media screen and (min-width:400px) {
  .header {
    font-size: 1.8rem;
  }
}
</style>
