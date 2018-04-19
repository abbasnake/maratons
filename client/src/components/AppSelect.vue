<template>
  <select class="select" name="testChoice" @change="changeTest($event)" required>
    <option value="" selected disabled>choose</option>
    <option v-for="test in allTests" :value="test.id">{{ test.name }}</option>
  </select>
</template>

<script>
export default {
  name: 'AppSelect',
  computed: {
    allTests () {
      return this.$store.getters.allData
    }
  },
  methods: {
    changeTest (e) {
      let testNumber = parseInt(e.target.value)
      this.$store.dispatch('changeCurrentTest', testNumber)
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  padding: 5px;
}
</style>
