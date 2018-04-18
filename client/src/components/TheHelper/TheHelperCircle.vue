<template>
<svg class="svg" viewBox="0 0 200 200">
  <circle class="hover" cx="50%" cy="50%" r="50"/>
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

.hover {
  animation-name: hover;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 4s;
}

@keyframes hover {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
