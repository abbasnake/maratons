<template>
  <div class="container">
    <input
      class="container__input"
      type="text"
      aria-label="Username"
      placeholder="username"
      required
    >
  </div>
</template>

<script>
export default {
  name: 'DefaultInput'
}
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  border: 1px solid white;
  display: grid;
  justify-items: center;
  padding: 5px;
  &__input {
    background-color: #ccc;
    border: none;
    border-radius: 5px;
    font-size: 3vw;
    padding: 5px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    max-width: 200px;
    width: 25%;
    z-index: 1;
    &:focus {
      width: 100%;
    }
  }
}

@media screen and (min-width:400px) {
  .container__input {
    font-size: 1.2rem;
  }
}
</style>
