<template>
  <div class="helper a-enter">
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
  border: 1px solid white;
  height: $size;
  left: 20px;
  top: 100px;
  width: $size;
  z-index: 10;
}

.a-enter {
  animation-name: a-enter;
  animation-timing-function: ease-in-out;;
  animation-fill-mode: forwards;
  animation-duration: .5s;
}

@keyframes a-enter {
  0% {
    transform: translate(-100px, 0);
  }
  50% {
    transform: translate(20px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
