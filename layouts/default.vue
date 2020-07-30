<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-expand-sm navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          :aria-expanded="expandNav"
          aria-label="Toggle navigation"
          @click="expandNav=!expandNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img src="~/assets/images/logo.png" alt />
        </a>

        <div :class="{'collapse': true, 'navbar-collapse':true, 'show':expandNav}">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li
              :class="{'nav-item':true, 'mx-lg-3':true, 'active':$route.path==link.path}"
              v-for="(link, index) in topLink"
              :key="index"
            >
              <nuxt-link
                :class="{'nav-link': !link.isButton, 'btn': link.isButton, 'btn-primary': link.isButton, 'btn-sm': link.isButton, 'mt-lg-1': link.isButton}"
                :to="link.path"
              >{{link.text}}</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div id="wrapper">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expandNav: false,
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
