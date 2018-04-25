<template>
  <div>
    <default-container>
      <default-header>result view</default-header>
      <p>
        Well done <strong>{{ username }}</strong>,
        you answered <strong>{{ score[0] }}</strong>
        of the <strong>{{ score[1] }}</strong>
        questions correctly.
      </p>
    </default-container>
  </div>
</template>

<script>
import DefaultHeader from '@/components/DefaultHeader'
import DefaultContainer from '@/components/DefaultContainer'

export default {
  name: 'ViewResult',
  components: {
    'default-container': DefaultContainer,
    'default-header': DefaultHeader
  },
  computed: {
    username () {
      return this.$store.getters.username
    },
    score () {
      return this.$store.getters.score
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
