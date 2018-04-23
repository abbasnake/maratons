<template>
  <div>
    <input
      type="radio"
      name="answer"
      :id="randomId"
      required
    >
    <label :for="randomId">{{ randomId }}</label>
  </div>
</template>

<script>
export default {
  name: 'DefaultInputRadio',
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
      this.randomId = Math.random().toString(36).substr(2, 10);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
