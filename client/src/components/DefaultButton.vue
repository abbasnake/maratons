<template>
  <button class="button" :type="setType" @click="onCLick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'DefaultButton',
  props: {
    setType: {type: String, default: ''}
  },
  methods: {
    onCLick () {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  border-radius: 5px;
  padding: 5px;
}
</style>
