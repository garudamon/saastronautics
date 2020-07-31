<template>
  <div class="error d-flex justify-content-center align-items-center">
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
