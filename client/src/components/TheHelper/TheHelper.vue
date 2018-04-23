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
      xStartPos: 20,
      yStartPos: 100,
      xPos: 0,
      yPos: 0,
      xSpeed: 1,
      ySpeed: 0
    }
  },
  mounted () {
    this.setInitialPosition()
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
    setInitialPosition () {
      this.xPos = this.xStartPos
      this.yPos = this.yStartPos
    },
    goTo (x) {
      if (!(x >= 0)) { this.xSpeed *= -1 }
      this.xPos += this.xSpeed
      // if (!(this.xPos >= x)) {
      //   this.xPos += this.xSpeed
      //   return false
      // } else {
      //   return true
      // }
    },
    changeContentAnimation () {
      if (this.goTo(100, 0)) { this.goTo(-200, 0)}
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
