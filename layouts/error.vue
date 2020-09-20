<template>
  <div class="error d-flex justify-content-center align-items-center flex-column">
    <img src="~/assets/images/error-404-01.png" alt="404">
    <h3 v-if="error.statusCode === 404">Page not found</h3>
    <h3 v-else>An error occurred</h3>
    <nuxt-link :to="'/'" class="btn btn-primary btn-lg">Back to Home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
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
  }
  .btn {
    position: absolute;
    bottom: 2.5rem;
    left: 5rem;
    right: 5rem;
  }
}
</style>
