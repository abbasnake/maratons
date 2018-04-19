<template>
  <div id="app" class="app">
    <!-- <the-helper></the-helper> -->
    <router-view/>
  </div>
</template>

<script>
import TheHelper from '@/components/TheHelper/TheHelper'

export default {
  name: 'App',
  components: {
    'the-helper': TheHelper
  }
}
</script>

<!-- GLOBAL STYLES -->
<style lang="scss">
@import './scss/reset';
@import './scss/global-styles';
@import './scss/variables';
</style>

<!-- LOCAL STYLES -->
<style lang="scss" scoped>
.app {
  background-color: #aaa;
  display: grid;
  height: 100vh;
}
</style>
