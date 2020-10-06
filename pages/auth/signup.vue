<template>
  <div class="row">
    <div class="col-md-6 px-0">
      <img src="~/assets/images/saastro-welcome.png" alt />
    </div>
    <div class="col-12 col-md-5 card-bg-white py-4">
      <div class="px-4 pt-4">
        <h1 class="title-1 display-5 font-weight-normal d-none d-md-block">
          Sign Up
        </h1>
        <p>
          Already have an account?
          <nuxt-link to="/auth/signin">Sign In</nuxt-link>
        </p>
      </div>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form class="p-3" @submit.prevent="handleSubmit(signUp)">
          <ValidationProvider
            name="Name"
            rules="required|alpha"
            v-slot="{ errors }"
          >
            <div class="form-group mb-4">
              <input
                type="text"
                class="form-control form-round form-primary-purple"
                placeholder="First name"
                v-model="form.firstName"
              />
              <span class="form-error" v-if="errors.length > 0">{{
                errors[0]
              }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider
            name="E-mail"
            rules="required|email"
            v-slot="{ errors }"
          >
            <div class="form-group mb-4">
              <input
                type="email"
                class="form-control form-round form-primary-purple"
                placeholder="Email"
                v-model="form.email"
              />
              <span class="form-error" v-if="errors.length > 0">{{
                errors[0]
              }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider
            name="Password"
            rules="required"
            v-slot="{ errors }"
          >
            <div class="form-group mb-4">
              <input
                type="password"
                class="form-control form-round form-primary-purple"
                placeholder="Password"
                v-model="form.Password"
                ref="password"
              />
              <span class="form-error" v-if="errors.length > 0">{{
                errors[0]
              }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider
            name="Password Confirmation"
            rules="required|password:@Password"
            v-slot="{ errors }"
          >
            <div class="form-group mb-4">
              <input
                type="password"
                class="form-control form-round form-primary-purple"
                placeholder="Type your password again"
                v-model="form.newPassword"
                data-vv-as="password"
              />
              <span class="form-error" v-if="errors.length > 0">{{
                errors[0]
              }}</span>
            </div>
          </ValidationProvider>
          <div class="d-flex align-items-center">
            <button type="submit" class="btn btn-primary btn-md px-4">
              Sign Up
            </button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver,
  extend
} from 'vee-validate/dist/vee-validate.full.esm'

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: 'Password confirmation does not match'
})

export default {
  layout: 'auth',
  loading: false,
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    form: {
      firstName: '',
      email: '',
      password: '',
      newPassword: ''
    }
  }),
  mounted() {
    /* remark by frank
          if(this.$route.query.aff){
            console.log('lllll')
            this.$affiliateSet(this.$route.query.aff)
          }
          */
  },
  methods: {
    callError(error = '') {
      this.$swal('Failed', error, 'error')
    },
    signUp() {
      console.log(this.form)
      this.$swal({
        title: 'Sign Up',
        text: 'Are you sure?',
        icon: 'warning',
        buttons: true
      }).then(willSave => {
        if (willSave) {
          this.loading = true
          this.$axios
            .post('/customer/register', this.form)
            .then(res => {
              //Perform Success Action
              if (res.data.success) {
                window.refMonkeyClient
                  .user(this.form.email)
                  .then(res => console.log(res))
                this.$swal('Success', res.data.message, 'success').then(() => {
                  this.$router.push('/auth/signin')
                })
              } else {
                this.callError(res.data.message)
              }
            })
            .catch(error => {
              // error.response.status Check status code
              this.callError('Call Administrator')
              console.log(error)
            })
            .finally(() => {
              // Perform action in always
              this.loading = false
            })
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

.form-error {
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
