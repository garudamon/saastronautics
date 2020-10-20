<template>
  <div class="error d-flex justify-content-center align-items-center flex-column">
    <img :src="$getStaticImage('error-404-01.png')" alt="404">
    <h3>We Hate Goodbyes</h3>
    <nuxt-link :to="'/'" class="btn btn-primary btn-lg">Back to Home</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'nostyle'
}
</script>

<style lang="scss" scoped>
.error {
  height: 100vh;
  position: relative;
  img {
    max-width: 25%;
  }
  h3 {
    color: tomato;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
  }
  .btn {
    position: absolute;
    bottom: 2.5rem;
    left: 5rem;
    right: 5rem;
  }
}
</style>
