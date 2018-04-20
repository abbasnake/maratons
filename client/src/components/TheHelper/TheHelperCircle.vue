<template>
  <svg class="svg" xmlns="http://www.w3.org/2000/svg" :viewBox="`0 0 ${boxWidth} ${boxHeight}`">
    <circle class="svg__circle" :cx="cx" :cy="cy" :r="radius"/>
  </svg>
</template>

<script>
export default {
  name: 'TheHelperCircle',
  data () {
    return {
      boxWidth: 200,
      boxHeight: 200,
      cx: 100,
      cy: 100,
      radius: 50,
      ySpeed: 0.1,
      xSpeed: 0.3,
      hoverRange: 20, // for hoverBorder method
      hoverAnimationOn: true
    }
  },
  mounted () {
    this.placeCircleInMiddle()
    this.loop()
  },
  methods: {
    placeCircleInMiddle () {
      this.cx = this.boxWidth / 2
      this.cy = this.boxHeight / 2
    },
    avoidBorders () {
      if (this.cy > this.boxHeight - this.radius || this.cy < 0 + this.radius) {
        this.cy = this.boxHeight / 2
      }
      if (this.cx > this.boxWidth - this.radius || this.cx < 0 + this.radius) {
        this.cx = this.boxWidth / 2
      }
    },
    hoverBorder () {
      if (this.cy > this.boxHeight / 2 + this.hoverRange || this.cy < this.boxHeight / 2 - this.hoverRange) {
        this.ySpeed *= -1
      }
      if (this.cx > this.boxWidth / 2 + 20 || this.cx < this.boxWidth / 2 - 20) { // not correct, needs different physics
        this.xSpeed *= -1
      }
    },
    hover () {
      let xDeviation = this.xSpeed * (Math.random() - Math.random())
      this.cx += xDeviation
      this.cy += this.ySpeed
    },
    hoverAnimation () {
      this.hover()
      this.hoverBorder()
      this.avoidBorders()
    },
    mainAnimation () {
      requestAnimationFrame(this.mainAnimation)
      if (this.hoverAnimationOn) { this.hoverAnimation() }
    },
    loop () {
      requestAnimationFrame(this.mainAnimation)
    }
  }
}
</script>

<style lang="scss" scoped>
.svg {
  // border: 1px solid black;
  fill: #333;
  height: 100%;
  width: 100%;
  /*
  ** ANIMATION SHORTHAND
  ** animation: name duration timing-function delay iteration-count direction fill-mode play-state;
  */
  // &__circle {
  //   animation:
  //     a-float 12s ease-in-out infinite alternate;
  // }
}

// @keyframes a-float {
//   0% {
//     transform: translate(0px, 0px);
//   }
//   15% {
//     transform: translate(11px, -25px);
//   }
//   30% {
//     transform: translate(13px, 11px);
//   }
//   50% {
//     transform: translate(1px, -40px);
//   }
//   65% {
//     transform: translate(-20px, 22px);
//   }
//   85% {
//     transform: translate(-5px, -47px);
//   }
//   100% {
//     transform: translate(0px, 0px);
//   }
// }
</style>
