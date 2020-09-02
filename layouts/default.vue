<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-expand-sm navbar-light px-0 px-md-3">
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

        <div :class="{ collapse: true, 'navbar-collapse': true, show: expandNav }">
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
              >{{ link.text }}</nuxt-link>
            </li>
            <li class="nav-item mx-lg-3" v-if="!isLogin">
              <nuxt-link class="btn btn-primary btn-sm mt-lg-1" to="/auth/signin">Get Started</nuxt-link>
            </li>
            <li class="nav-item mx-lg-3" v-else>
              <nuxt-link class="btn btn-primary btn-sm mt-lg-1" to="/account">my account</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div id="wrapper" class="px-3 px-md-0">
      <nuxt />
    </div>
    <footer class="mt-5 p-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3 pb-5 px-2 px-md-3">
            <img src="~/assets/images/logo-white.png" alt />
          </div>
          <div class="col-12 col-md-2">
            <div class="text-uppercase text-white font-weight-bold pb-3">sitemap</div>
            <ul>
              <li v-for="item in topLink" :key="item.text" class="py-1">
                <nuxt-link :to="item.path">{{ item.text }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-3">
            <div class="text-uppercase text-white font-weight-bold pb-3">account</div>
            <ul>
              <li class="py-1">
                <nuxt-link :to="''">Terms and Conditions</nuxt-link>
              </li>
              <li class="py-1">
                <nuxt-link :to="''">Privacy Policy</nuxt-link>
              </li>
              <li class="py-1">
                <nuxt-link :to="''">Frequently Asked</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md">
            <div class="text-uppercase text-white font-weight-bold pb-3">LOREM IPSUM</div>
            <ul>
              <li class="py-1">
                <nuxt-link :to="''">Fruits</nuxt-link>
              </li>
              <li class="py-1">
                <nuxt-link :to="''">Cupcake</nuxt-link>
              </li>
              <li class="py-1">
                <nuxt-link :to="''">Tea</nuxt-link>
              </li>
              <li class="py-1">
                <nuxt-link :to="''">Coffee</nuxt-link>
              </li>
              <li class="py-1">
                <nuxt-link :to="''">Mineral</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
        }
      ]
    }
  },
  computed: {
    ...mapState(['isLogin'])
  },
  components: {}
}
</script>

<style></style>
