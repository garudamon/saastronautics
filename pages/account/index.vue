<template>
  <div>
    <LazyDashboardTopBar
      :name="profile.customer && profile.customer.firstName"
    />
    <div class="row py-5">
      <div class="col-12 col-md-4" v-for="item in items" :key="item.header">
        <nuxt-link :to="item.link">
          <div
            class="item py-5 px-3 d-flex flex-column justify-content-center align-items-center"
          >
            <img :src="$getStaticImage(item.image)" :alt="item.header" />
            <h5 class="gordita-bold text-capitalize pt-4">{{ item.header }}</h5>
            <p class="text-center">{{ item.desc }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  layout: 'account',
  data() {
    return {
      items: [
        {
          image: 'analytic.svg',
          header: 'profile setting',
          desc: 'Edit Name, Password and Profile Picture',
          link: '/account/profile'
        },
        {
          image: 'disk.svg',
          header: 'my deals',
          desc: 'Track, Redeem and Refund Deals',
          link: '/account/my-deals'
        },
        {
          image: 'nfc-card.svg',
          header: 'payment setting',
          desc: 'Manage Your Payment Method',
          link: '/account/payment'
        }
      ]
    }
  },
  computed: {
    ...mapState(['profile'])
  },
  methods: {
    ...mapMutations(['setProfile']),
    getProfile() {
      this.$axios.get('/user/myprofile').then(response => {
        let {
          data: { success, data }
        } = response
        if (success) {
          this.setProfile(data)
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
h5 {
  letter-spacing: 1px;
}
a {
  color: black;
  &:hover {
    text-decoration: none;
  }
}
.item {
  min-height: 350px;
  border-radius: 20px;
  border: thin solid rgba($color: #bdbdbd, $alpha: 0.3);
  background: white;
  cursor: pointer;
  transition: all 500ms;
  &:hover {
    transform: translateY(-10px);
  }
  &.nuxt-link-exact-active,
      &:hover {
        color: #ff4370;
        text-decoration: none;
      }
}
</style>
