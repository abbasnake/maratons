<template>
  <div @click="onClick">
    <input
      type="radio"
      :value="inputValue"
      :name="inputName"
      :id="randomId"
      required
    >
    <label :for="randomId">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'DefaultInputRadio',
  props: {
    inputName: {type: String, default: 'answer'},
    inputValue: {type: String, required: true}
  },
  data () {
    return {
      randomId: ''
    }
  },
  mounted () {
    this.createRandomId()
  },
  methods: {
    createRandomId () {
      this.randomId = Math.random().toString(36).substr(2, 10)
    },
    onClick () {
      this.$emit('picked', this.inputValue)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
