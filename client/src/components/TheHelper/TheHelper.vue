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
</style>
