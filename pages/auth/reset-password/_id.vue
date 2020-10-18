<template>
  <div class="row">
    <div class="col-md-6 px-0">
      <img :src="$getStaticImage('saastro-welcome.png')" alt="Saastrobot Welcome" />
    </div>
    <div class="col-12 col-md-5 card-bg-white py-4">
      <div class="px-4 pt-4">
        <h1 class="title-1 display-5 font-weight-normal  d-none d-md-block">Reset Password</h1>
        <p>
          Choose your new password easily and wisely
        </p>
      </div>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form class="p-3" @submit.prevent="handleSubmit(resetPassword)">
          <ValidationProvider name="Password" rules="required" v-slot="{ errors }">
            <div class="form-group mb-4">
              <input
                type="password"
                class="form-control form-round form-primary-purple"
                placeholder="Password"
                v-model="form.password"
                ref="password"
              />
              <span class="form-error" v-if="errors.length > 0">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider
            name="Re-password"
            rules="required_if:Password|confirmed:Password"
            v-slot="{ errors }"
          >
            <div class="form-group mb-4">
              <input
                type="password"
                class="form-control form-round form-primary-purple"
                placeholder="Type your password again"
                v-model="form.rePassword"
                data-vv-as="password"
              />
              <span class="form-error" v-if="errors.length > 0">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <div class="d-flex align-items-center">
            <button type="submit" class="btn btn-primary btn-md px-4">Change Password</button>
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
  loading: false,
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    form: {
      password: '',
      rePassword: ''
    }
  }),
  methods: {
    resetPassword() {
      let me = this
      this.$axios
        .put(`/user/forgotpassword/${this.$route.params.id}`, {
          newPassword: this.form.password
        })
        .then(res => {
          //Perform Success Action
          if (res.data.success) {
            this.$swal('Success', res.data.message, 'success').then(() => {
              me.$router.push('/auth/signin')
            })
          } else {
            this.$swal('Failed', res.data.message, 'error')
          }
        })
        .catch(error => {
          this.$swal('Failed', 'Something wrong', 'error')
        })
        .finally(() => {
          // Perform action in always
          this.loading = false
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
.form-error{
  font-size: 0.6rem !important;
  padding-left: 0.8rem;
  color: tomato;
}
.swal-button--cancel {
  color: white;
}
img {
  max-width: 105%;
}
.card-bg-white {
  margin: 40px 0 100px 0;
}
.form-check {
  color: #8d8c8c;
}
</style>
