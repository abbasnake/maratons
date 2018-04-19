<template>
  <transition name="fade" mode="out-in">
    <!-- description is added to :key to trick the
    transition that it is changing to another
    element, doesn't work otherwise -->
    <p class="paragraph" :key="description">{{ description }}</p>
  </transition>
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
  opacity: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
