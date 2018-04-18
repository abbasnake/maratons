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
  // border: 1px solid white;
  height: $size;
  left: 20px;
  top: 100px;
  width: $size;
  z-index: 10;
}

.animation {
  animation:
    a-leave 5s ease-in-out forwards;
}

@keyframes a-leave {
  0% {
    transform: translate(-100px, -100px);
  }
  50% {
    transform: translate(100px, 100px);
  }
  75% {
    transform: translate(-10px, -50px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
