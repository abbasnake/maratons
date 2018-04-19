<template>
  <button class="button" type="submit" @click="onCLick">Submit</button>
</template>

<script>
export default {
  name: 'DefaultButton',
  methods: {
    onCLick () {
      console.log('submit button')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  border-radius: 5px;
  padding: 5px;
}
</style>
