<template>
  <svg class="helper" :style="styleObject" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
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
  data () {
    return {
      xPos: 20,
      yPos: 100
    }
  },
  mounted () {
    this.loop()
  },
  computed: {
    styleObject () {
      return {
        'transform': `translate(${this.xPos}px, ${this.yPos}px)`
      }
    }
  },
  methods: {
    changeContentAnimation () {

    },
    mainAnimation () {
      requestAnimationFrame(this.mainAnimation)
      // if (this.hoverAnimationOn) { this.hoverAnimation() }
      this.changeContentAnimation()
    },
    loop () {
      requestAnimationFrame(this.mainAnimation)
    }
  }
}
</script>

<style lang="scss" scoped>
$size: 80px;

.helper {
  border: 1px solid white;
  position: absolute;
  height: $size;
  // left: 20px; // doing this in javascript
  // top: 100px; // doing this in javascript
  width: $size;
  z-index: 10;
}
</style>
