<template>
  <div class="container-fluid px-0">
    <div class="container">
      <nav class="navbar navbar-expand-sm navbar-light px-0">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          :aria-expanded="expandNav"
          aria-label="Toggle navigation"
          @click="expandNav = !expandNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img src="~/assets/images/logo.png" alt />
        </a>

        <div
          :class="{ collapse: true, 'navbar-collapse': true, show: expandNav }"
        >
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li
              :class="{
                'nav-item': true,
                'mx-lg-3': true
              }"
              v-for="(link, index) in topLink"
              :key="index"
            >
              <nuxt-link
                :class="{
                  'nav-link': !link.isButton,
                  btn: link.isButton,
                  'btn-primary': link.isButton,
                  'btn-sm': link.isButton,
                  'mt-lg-1': link.isButton
                }"
                :to="link.path"
                >{{ link.text }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div id="wrapper" class="px-3 px-md-0 d-flex">
      <aside class="py-4"></aside>
      <div class="content flex-grow-1 p-4">
        <nuxt />
      </div>
    </div>
    <footer class="p-5">
      <div class="d-flex justify-content-around align-items-center">
        <div>
          <img src="~/assets/images/logo-white.png" alt="" />
        </div>
        <div>
          <nuxt-link :to="`#`">Sitemap</nuxt-link>
        </div>
        <div>
          <nuxt-link :to="`#`">Terms and Conditions</nuxt-link>
        </div>
        <div>
          <nuxt-link :to="`#`">Privacy Policy</nuxt-link>
        </div>
        <div>
          <nuxt-link :to="`#`">Frequently Ask Questions</nuxt-link>
        </div>
        <div>
          <a href="#" class="px-2">
            <span class="fa fa-facebook"></span>
          </a>
          <a href="#" class="px-2">
            <span class="fa fa-twitter"></span>
          </a>
          <a href="#" class="px-2">
            <span class="fa fa-instagram"></span>
          </a>
        </div>
      </div>
    </footer>
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

<style></style>
