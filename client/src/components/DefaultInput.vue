<template>
  <input
  class="input"
  type="text"
  aria-label="Username"
  placeholder="username"
  required
  >
</template>

<script>
export default {
  name: 'DefaultInput'
}
</script>

<style lang="scss" scoped>
.input {
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  font-size: 5vw;
  padding: 5px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  max-width: 200px;
  width: 40%;
  z-index: 1;
  &:focus {
    width: 100%;
  }
}

@media screen and (min-width:400px) {
  .input {
    font-size: 1.2rem;
  }
}
</style>
