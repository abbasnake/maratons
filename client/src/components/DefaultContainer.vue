<template>
  <div class="container" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DefaultContainer',
  props: {
    containerHeight: {
      type: String,
      default: 'auto'
    },
    containerWidth: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    styleObject () {
      return {
        'height': this.containerHeight,
        'width': this.containerWidth
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
  padding: 5px;
}
</style>
