<!--
** Universal container that centers content horizontally
** and vertically, can be used for single elements
** or groups (in which case the grid gap prop will take effect)
-->

<template>
  <div class="container" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DefaultContainer',
  props: {
    setGap: {type: String, default: '20px'},
    setHeight: {type: String, default: 'auto'},
    setWidth: {type: String, default: '100%'}
  },
  computed: {
    styleObject () {
      return {
        'grid-gap': this.setGap,
        'height': this.setHeight,
        'width': this.setWidth
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  display: grid;
  justify-items: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 5px;
}
</style>
