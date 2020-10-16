<template>
  <div class="container-fluid px-0 h-100">
    <nav class="navbar navbar-expand-sm navbar-light px-5 fixed-top">
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
        <img src="~/assets/images/logo_account.png" alt />
      </a>

      <div
        :class="{ collapse: true, 'navbar-collapse': true, show: expandNav }"
      >
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li
            :class="{
              'nav-item': true,
              'mx-lg-4': true
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
          <li class="nav-item mx-lg-3" v-if="!isLogin">
            <nuxt-link class="btn btn-primary btn-sm mt-lg-1" to="/auth/signin"
              >Get Started</nuxt-link
            >
          </li>
          <template v-else>
            <li class="nav-item mx-lg-3 d-flex align-items-center cart">
              <nuxt-link to="/cart">
                <span class="fa fa-shopping-cart mr-2 fa-xl"></span>
                <span class="count-buble" v-if="cart.quantity > 0">
                  {{ cart.quantity }}
                </span>
              </nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <div id="wrapper" class="px-3 px-md-0 d-flex">
      <aside class="py-4">
        <div
          class="d-flex align-items-center justify-content-center flex-column border-bottom pb-4 px-3 profile-info"
        >
          <img
            v-if="profile.customer"
            :src="$getProfile(profile.customer.id)"
            alt="Profile Photo"
          />
          <h6 class="title-1 pt-3 my-0 text-capitalize">
            {{ profile.customer && profile.customer.firstName }}
          </h6>
          <p class="py-0 my-0">{{ profile.email }}</p>
        </div>
        <ul class="nav flex-column">
          <li class="nav-item">
            <nuxt-link to="/account" class="nav-link">
              <span class="fa fa-fw fa-dashboard fa-xl mr-3"></span>
              Dashboard
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/account/my-deals" class="nav-link">
              <span class="fa fa-fw fa-tags fa-xl mr-3"></span>
              My Deals
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/account/profile">
              <span class="fa fa-fw fa-user-o fa-xl mr-3"></span>
              Account Detail
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/account/payment" class="nav-link">
              <span class="fa fa-fw fa-credit-card fa-xl mr-3"></span>
              Payment
            </nuxt-link>
          </li>
        </ul>
        <div class="text-center mb-5" v-if="isLogin">
          <br />
          <button class="btn btn-red btn-md mt-lg-1" @click="signout">
            Sign out
            <i class="fa fa-sign-out pl-2"></i>
          </button>
        </div>
      </aside>
      <div class="content flex-grow-1 px-5">
        <nuxt />
      </div>
    </div>
    <footer class="p-3 fixed-bottom">
      <div class="d-flex justify-content-around align-items-center">
        <div>
          <img
            class="ml-3"
            src="~/assets/images/white_logo.png"
            alt="Saastronautics Logo"
          />
        </div>
        <div>
          <nuxt-link :to="`#`">Sitemap</nuxt-link>
        </div>
        <div>
          <nuxt-link :to="'/terms'">Terms of Use</nuxt-link>
        </div>
        <div>
          <nuxt-link :to="'/privacy'">Privacy Policy</nuxt-link>
        </div>
        <div>
          <nuxt-link :to="'support'">Frequently Ask Questions</nuxt-link>
        </div>
        <div>
          <a
            href="https://web.facebook.com/saastronautics"
            target="_blank"
            class="px-3"
          >
            <span class="fa fa-facebook"></span>
          </a>
          <a
            href="https://twitter.com/saastronautics"
            target="_blank"
            class="px-3"
          >
            <span class="fa fa-twitter"></span>
          </a>
          <a
            href="https://www.instagram.com/saastronautics/"
            target="_blank"
            class="px-3"
          >
            <span class="fa fa-instagram"></span>
          </a>
        </div>
      </div>
    </footer>
    <Cookie />
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
    ...mapState(['isLogin', 'profile', 'cart'])
  },
  components: {},
  methods: {
    ...mapMutations(['setLogin', 'setProfile', 'setCart']),
    signout() {
      Cookie.remove('_token')
      this.setLogin(false)
      this.$router.push('/')
      return false
    },
    getProfile() {
      this.$axios.get('/user/myprofile').then(response => {
        let {
          data: { success, data }
        } = response
        if (success) {
          this.setProfile(data)
        }
      })

      this.$axios.get('/cart/my').then(response => {
        let {
          data: { data, success }
        } = response
        if (success) {
          this.setCart(data)
        }
      })
    }
  },
  mounted() {
    this.getProfile()
  }
}
</script>

<style lang="scss" scoped>
nav {
  background: var(--primary-gray-smooth);
}
aside {
  position: fixed;
  bottom: 0px;
  top: 75px;
  .profile-info {
    > * {
      overflow: hidden !important;
      text-overflow: ellipsis;
      max-width: 100%;
    }
  }
  .fa-xl {
    font-size: 1.45em;
  }
}
.content {
  background: var(--primary-gray-smooth);
  margin-bottom: 50px;
  margin-top: 80px;
  padding-bottom: 30px;
  margin-left: 225px;
}

.btn-red {
  background: #ff4370;
  color: white;
  padding: 7px 45px;
}

footer {
  img {
    width: 18%;
  }
}
</style>
