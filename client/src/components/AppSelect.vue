<template>
  <select class="select" name="testChoice" @change="changeTest($event)" required>
    <option value="" selected disabled>choose</option>
    <!-- eslint-disable --> 
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
      let testNumber = parseInt(e.target.value) // must be number at the moment
      this.$store.dispatch('changeCurrentTest', testNumber)
      this.$store.dispatch('changeContentAnimation')
      this.$store.dispatch('resetAnimations')
    },
    resetAnimations () {
      this.$store.dispatch('resetAnimations')
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  padding: 5px;
}
</style>
