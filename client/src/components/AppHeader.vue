<template>
  <header class="header">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.header {
  font-size: 6vw;
  font-weight: bold;
  padding: 5px;
  text-align: center;
}

@media screen and (min-width:400px) {
  .header {
    font-size: 1.6rem;
  }
}
</style>
