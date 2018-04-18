<template>
<svg class="svg" viewBox="0 0 200 200">
  <circle class="animation" cx="50%" cy="50%" r="50"/>
</svg>
</template>

<script>
export default {
  name: 'TheHelperCircle'
}
</script>

<style lang="scss" scoped>
.svg {
  // border: 1px solid black;
  fill: #333;
  height: 100%;
  width: 100%;
}

// ANIMATION SHORTHAND
// animation: name duration timing-function delay iteration-count direction fill-mode play-state;

.animation {
  animation:
    a-float 12s ease-in-out infinite alternate;
}

@keyframes a-float {
  0% {
    transform: translate(0px, 0px);
  }
  15% {
    transform: translate(11px, -25px);
  }
  30% {
    transform: translate(13px, 11px);
  }
  50% {
    transform: translate(1px, -40px);
  }
  65% {
    transform: translate(-20px, 22px);
  }
  85% {
    transform: translate(-5px, -47px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
