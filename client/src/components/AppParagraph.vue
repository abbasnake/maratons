<template>
  <transition name="slide" mode="out-in">
    <!--
    ** description is added to :key to trick the
    ** transition that it is changing to another
    ** element, doesn't work otherwise
    -->
    <p class="paragraph" :key="description">{{ description }}</p>
  </transition>
</template>

<script>
export default {
  name: 'AppParagraph',
  computed: {
    description () {
      return this.$store.getters.currentTestDescription
    }
  }
}
</script>

<style lang="scss" scoped>
.paragraph {
}

.slide-enter-active {
  transition: all .3s ease-in-out;
}
.slide-leave-active {
  transition: all .3s ease-in-out;
}
.slide-enter, .slide-leave-to {
  transform: translateX(1000px);
  opacity: 0;
}
</style>
