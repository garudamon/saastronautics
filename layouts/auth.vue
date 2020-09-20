<template>
  <div class="auth">
    <div class="container">
      <nav class="navbar navbar-expand-sm navbar-light px-0 px-md-3 py-2">
        <a class="navbar-brand" href="#">
          <img src="~/assets/images/logo.png" alt="logo saastronautics" />
        </a>
      </nav>
      <!-- <div class="nav-back">
        <a class="px-4" href="/">&#8592; Back to home</a>
      </div> -->
    </div>
    <div class="container px-3 px-md-0">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
  middleware: 'unauthenticated'
}
</script>

<style lang="scss" scoped>
.auth {
  background: #f6f4fc 0% 0% no-repeat padding-box !important;

  .nav-back {
    a {
      color: #000;
    }
    a:hover {
      color: var(--primary-color-red);
      text-decoration: none;
    }
    
  }
}
</style>