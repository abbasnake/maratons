<template>
  <div class="helper animation">
    <helper-circle></helper-circle>
  </div>
</template>

<script>
import TheHelperCircle from '@/components/TheHelper/TheHelperCircle'

export default {
  name: 'TheHelper',
  components: {
    'helper-circle': TheHelperCircle
  }
}
</script>

<style lang="scss" scoped>
$size: 80px;

.helper {
  position: absolute;
  height: $size;
  left: 20px;
  top: 100px;
  width: $size;
  z-index: 10;
}

.animation {
  animation:
      a-get-stuff 1s ease-in-out alternate;
}

@keyframes a-get-stuff {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(4000px, 300px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
