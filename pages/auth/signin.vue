<template>
  <div class="col-12 col-md-3 card-bg-white text-center py-4">
    <div class="px-5 py-3">
      <img src="~/assets/images/logo.png" alt />
    </div>
    <form class="p-3" @submit.prevent="signIn">
      <input
        type="text"
        class="form-control form-round form-gray border-0 mb-4"
        placeholder="Enter your email address"
        v-model="email"
      />
      <input
        type="password"
        class="form-control form-round form-gray border-0 mb-4"
        placeholder="and your password"
        v-model="password"
      />
      <div class="d-flex align-items-center">
        <p class="flex-grow-1 text-left m-0">
          <nuxt-link to="/auth/signup">Don't have an account?</nuxt-link>
        </p>

        <button type="submit" class="btn btn-primary btn-md px-4">
          Sign in
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'auth',
  name: 'SignIn',
  head: {
    titleTemplate: 'Signin – %s'
  },
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    signIn() {
      this.$axios
        .post(
          '/user/login',
          {},
          {
            auth: {
              username: this.email,
              password: this.password
            }
          }
        )
        .then(response => {
          let {
            data: { data, success }
          } = response
          if (success) {
            localStorage.setItem('_token', data)
            this.setLogin(true)
            this.$router.push('/account')
          }
        })
      return false
    },
    ...mapMutations(['setLogin'])
  }
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
