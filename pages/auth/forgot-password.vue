<template>
  <div class="row">
    <div class="col-md-6 pt-3 px-0 text-center justify-content-center align-self-center">
      <img :src="$getStaticImage('saastrobot/saastrobot-forgot-password.svg')" alt="Saastrobot Forgot Password" />
    </div>
    <div class="col-12 col-md-5 card-bg-white py-4">
      <div class="px-4 pt-4">
        <h1 class="title-1 display-5 font-weight-normal  d-none d-md-block">Forgot Password</h1>
        <p>
          Enter your e-mail address and we will send you a link to reset password
        </p>
      </div>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form class="p-4" @submit.prevent="handleSubmit(sendRequest)">
          <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
            <div class="form-group mb-4">
              <input
                type="text"
                class="form-control form-round form-primary-purple"
                placeholder="Email"
                v-model="email"
              />
              <span class="form-error" v-if="errors.length > 0">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <div class="d-flex align-items-center">
            <button type="submit" class="btn btn-primary btn-lg px-4">Forgot Password</button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm'
export default {
  layout: 'auth',
  name: 'ForgotPassword',
  head: {
    titleTemplate: 'Forgot Password – %s'
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    email: ''
  }),
  methods: {
    sendRequest() {
      let me = this;
      this.$axios.post('/user/forgotpassword', {email: this.email}).then(response => {
        let {data: { data, success, message }} = response
        if(success) {
          this.$swal('Success', message, 'success').then(() => {
            me.$router.push('/auth/signin')
          })
        } else {
          this.$swal('Failed', message, 'error')
        }
      })
    }
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
  max-width: 80%;
}
.card-bg-white {
  margin: 40px 0 100px 0;
}
.form-check {
  color: #8d8c8c;
}
</style>
