<template>
  <div class="container-fluid px-0">
    <nav class="navbar navbar-expand-sm navbar-light px-5">
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
            <button class="btn btn-primary btn-sm mt-lg-1" @click="signout">Sign out</button>
          </li>
        </ul>
      </div>
    </nav>
    <div id="wrapper" class="px-3 px-md-0 d-flex">
      <aside class="py-4">
        <div
          class="d-flex align-items-center justify-content-center flex-column border-bottom pb-4"
        >
          <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="profile photo" />
          <h6 class="font-weight-bold pt-3 my-0">John Mess</h6>
          <p class="py-0 my-0">@john_mess</p>
        </div>
        <ul class="nav flex-column">
          <li class="nav-item">
            <nuxt-link to="/account" class="nav-link">
              <span class="fa fa-dashboard mr-2"></span>
              Dasboard
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/account/my-deals" class="nav-link">
              <span class="fa fa-tags mr-2"></span>
              My Deals
            </nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="fa fa-download mr-2"></span>
              Download
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="fa fa-user-o mr-2"></span>
              Account Detail
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="fa fa-shopping-cart mr-2"></span>
              My Cart
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="fa fa-bell-o mr-2"></span>
              Notifications
            </a>
          </li>
        </ul>
      </aside>
      <div class="content flex-grow-1 px-5 pb-4">
        <nuxt />
      </div>
    </div>
    <footer class="p-3">
      <div class="d-flex justify-content-around align-items-center">
        <div>
          <img src="~/assets/images/logo-white.png" alt />
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
const Cookie = require('js-cookie')
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'AccountLayout',
  middleware: 'authenticated',
  head: {
    titleTemplate: 'My Account - %s'
  },
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
  components: {},
  methods: {
    ...mapMutations(['setLogin']),
    signout() {
      Cookie.remove('_token')
      this.setLogin(false)
      this.$router.push('/')
      return false
    }
  }
}
</script>

<style></style>
