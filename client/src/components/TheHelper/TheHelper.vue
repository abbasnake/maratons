<template>
  <svg class="helper" :class="classObject" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <helper-circle></helper-circle>
  </svg>
</template>

<script>
import TheHelperCircle from '@/components/TheHelper/TheHelperCircle'

export default {
  name: 'TheHelper',
  components: {
    'helper-circle': TheHelperCircle
  },
  computed: {
    classObject () {
      return {
        'changeContentAnimation': true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$size: 80px;

.helper {
  // border: 1px solid white;
  position: absolute;
  height: $size;
  left: 20px;
  top: 100px;
  width: $size;
  z-index: 10;
}

.changeContentAnimation {
  animation: change-content 1s cubic-bezier(0.86, 0, 0.07, 1);
}

@keyframes change-content {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(4000px, 1000px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
