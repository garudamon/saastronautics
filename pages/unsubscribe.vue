<template>
  <div
    class="error d-flex justify-content-center align-items-center flex-column"
  >
    <img :src="$getStaticImage('error-404-01.png')" alt="404" />
    <h2 class="title-1 text-red">We Hate Goodbyes</h2>
    <p>
      So we're emailing you one last Time we can take a hint. Don't want to miss
      out a New update and offers or Let us Know if you want to continue
      receiving emails from Saastronautics click button below.
    </p>
    <nuxt-link :to="'/'" class="btn btn-primary btn-lg"
      >Keep Them Coming</nuxt-link
    >
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
  p {
      padding: 0 15%;
      text-align: center;
  }
  .btn {
    position: absolute;
    bottom: 2.5rem;
    // left: 5rem;
    // right: 5rem;
  }
}
</style>
