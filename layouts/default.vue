<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img src="~/assets/images/logo.png" alt />
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li
              :class="{'nav-item':true, 'active':$route.path==link.path}"
              v-for="(link, index) in topLink"
              :key="index"
            >
              <nuxt-link class="nav-link" :to="link.path">{{link.text}}</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      topLink: [
        {
          text: 'Home',
          path: '/',
          isButton: false
        },
        {
          text: 'Deals',
          path: '/deals',
          isButton: false
        },
        {
          text: 'Partners',
          path: '/partners',
          isButton: false
        },
        {
          text: 'About',
          path: '/about',
          isButton: false
        },
        {
          text: 'Support',
          path: '/support',
          isButton: false
        },
        {
          text: 'Get Started',
          path: '/get-started',
          isButton: true
        }
      ]
    }
  },
  components: {}
}
</script>

<style>
</style>
