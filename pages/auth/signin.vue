<template>
  <div class="row">
    <div class="col-md-6 px-0 text-center justify-content-center align-self-center">
      <img :src="$getStaticImage('saastrobot/saastrobot-sign-in.svg')" alt="Saastrobot Sign In" />
    </div>
    <div class="col-12 col-md-5 card-bg-white py-4">
      <div class="px-4 pt-4">
            <h1 class="title-1 display-5 font-weight-normal d-none d-md-block">Sign In</h1>
        <p>
          Don't have an account?
          <nuxt-link to="/auth/signup">Sign Up</nuxt-link>
        </p>
      </div>
      <form class="p-4" @submit.prevent="signIn">
        <input
          type="text"
          class="form-control form-round form-primary-purple mb-4"
          placeholder="Email"
          v-model="email"
        />
        <input
          type="password"
          class="form-control form-round form-primary-purple mb-4"
          placeholder="Password"
          v-model="password"
        />
        <div class="d-flex pb-1">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="check" />
            <p class="form-check-p" for="check">Remember me</p>
          </div>

          <p class="flex-grow-1 text-right">
            <nuxt-link to="/auth/forgot-password">Forgot Password?</nuxt-link>
          </p>
        </div>
        <div class="d-flex align-items-center">
          <button type="submit" class="btn btn-primary btn-lg px-4">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
const Cookie = require('js-cookie')
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
    callError(error = '') {
      this.$swal('Failed', error, 'error')
    },
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
            Cookie.set('_token', data)
            this.setLogin(true)
            this.setToken(data)
            this.$router.push('/account')
          } else {
            this.callError('Your email or password were incorrect.')
          }
        })
      return false
    },
    ...mapMutations(['setLogin', 'setToken'])
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 0.8rem;
}
a {
  color: var(--primary-color-blue);
}
img {
  max-width: 85%;
}
.card-bg-white {
  margin: 40px 0 100px 0;
}
.form-check {
  color: #8d8c8c;
}
</style>
