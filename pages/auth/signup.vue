<template>
  <div class="col-12 col-md-3 card-bg-white text-center py-4">
    <div class="px-5 py-3">
      <img src="~/assets/images/logo.png" alt />
    </div>
    <form class="p-3">
      <input
        type="text"
        class="form-control form-round form-gray border-0 mb-4"
        placeholder="enter your email address"
      />
      <input
        type="password"
        class="form-control form-round form-gray border-0 mb-4"
        placeholder="enter your password"
      />
      <input
        type="password"
        class="form-control form-round form-gray border-0 mb-4"
        placeholder="confirm your password"
      />
      <div class="d-flex align-items-center">
        <p class="flex-grow-1 text-left m-0">
          <nuxt-link to="/auth/signin">Already have an account?</nuxt-link>
        </p>

        <button type="submit" class="btn btn-primary btn-md px-4">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'auth'
}
</script>

<style lang="scss" scoped>
p {
  font-size: 0.8rem;
}
a {
  color: var(--primary-color-red);
}
</style>
