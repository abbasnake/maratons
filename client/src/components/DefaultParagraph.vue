<template>
  <p class="paragraph">{{ description }}</p>
</template>

<script>
export default {
  name: 'DefaultParagraph',
  computed: {
    description () {
      return this.$store.getters.currentTestDescription
    }
  }
} 
</script>

<style lang="scss" scoped>
.paragraph {
  // border: 1px solid green;
}
</style>
