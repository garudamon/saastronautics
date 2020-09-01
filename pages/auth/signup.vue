<template>
  <div class="col-12 col-md-3 card-bg-white text-center py-4">
    <div class="px-5 py-3">
      <img src="~/assets/images/logo.png" alt />
    </div>
    <form class="p-3" @submit.prevent="signUp">
      <input
        type="text"
        class="form-control form-round form-gray border-0 mb-4"
        placeholder="enter your first name"
        v-model="form.firstName"
        required
      />
      <input
        type="text"
        class="form-control form-round form-gray border-0 mb-4"
        placeholder="enter your last name"
        v-model="form.lastName"
      />
      <input
        type="email"
        class="form-control form-round form-gray border-0 mb-4"
        placeholder="enter your email address"
        v-model="form.email"
        required
      />
      <input
        type="password"
        class="form-control form-round form-gray border-0 mb-4"
        placeholder="enter your password"
        required
      />
      <input
        type="password"
        class="form-control form-round form-gray border-0 mb-4"
        placeholder="confirm your password"
        v-model="form.newPassword"
        required
      />
      <div class="d-flex align-items-center">
        <p class="flex-grow-1 text-left m-0">
          <nuxt-link to="/auth/signin">Already have an account?</nuxt-link>
        </p>

        <button type="submit" class="btn btn-primary btn-md px-4">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data: () => ({
    form: {
      firstName: '',
      lastName: '',
      email: '',
      newPassword: ''
    }
  }),
  methods: {
    callError(error = '') {
      this.$swal('Failed', error, 'error')
    },
    signUp() {
      console.log(this.form)
      this.$axios
        .post('/customer/register', this.form)
        .then(res => {
          //Perform Success Action
          this.$router.push('/auth/signin')
          console.log(res.data)
        })
        .catch(error => {
          // error.response.status Check status code
          console.log(error)
        })
        // .finally(() => {
          //Perform action in always
        // })
    }
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
