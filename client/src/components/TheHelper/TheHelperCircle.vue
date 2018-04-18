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
  border: 1px solid black;
  fill: #333;
  height: 100%;
  width: 100%;
}

// ANIMATION SHORTHAND
// animation: name duration timing-function delay iteration-count direction fill-mode play-state;

.animation {
  animation:
    a-hover 12s ease-in-out infinite alternate;
    // hoverHorizontal 11s ease-in-out infinite alternate;
}

@keyframes a-hover {
  0% {
    transform: translate(0px, 0px);
  }
  15% {
    transform: translate(2px, 15px);
  }
  30% {
    transform: translate(3px, 0px);
  }
  50% {
    transform: translate(1px, 20px);
  }
  65% {
    transform: translate(-2px, 0px);
  }
  85% {
    transform: translate(0px, 17px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
