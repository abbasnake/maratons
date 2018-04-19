<template>
  <transition name="fade" mode="out-in">
    <p class="paragraph" :key="stateTransition">{{ description }}</p>
  </transition>
</template>

<script>
export default {
  name: 'DefaultParagraph',
  data () {
    return {
      stateTransition: 0
    }
  },
  computed: {
    description () {
      return this.$store.getters.currentTestDescription
    }
  },
  watch: {
    description () {
      /*
      ** This is to make the transition animaton work.
      ** If transition happens between the same elements,
      ** or in this case just the content of the same
      ** element changes, transition has to be tricked
      ** that it is actually a different one, hence the
      ** :key property is incremented each time the
      ** computed property above changes
      */
      this.stateTransition++
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
