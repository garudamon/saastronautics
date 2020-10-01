<template>
  <div class="row d-flex justify-content-center pb-5">
    <template v-if="loading">
      <LazyLoading />
    </template>
    <template v-else>
      <template v-if="confirmed">
        <div class="col-md-3 px-0">
          <img src="~/assets/images/saastro-welcome.png" alt />
        </div>
        <div class="col-12 col-md-5 card-bg-white py-4">
          <div class="px-4 pt-4">
            <h1>Congratulation!!</h1>
            <p>
              Your account successfully confirmed
            </p>
            <p>
              Please <nuxt-link to="/auth/signin">sign-in here</nuxt-link>
            </p>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="col-md-3 px-0">
          <img src="~/assets/images/error.png" alt />
        </div>
        <div class="col-12 col-md-5 card-bg-white py-4">
          <div class="px-4 pt-4">
            <h1>Failed!!</h1>
            <p>
              Your account failed to confirm
            </p>
            <p><code>{{message}}</code></p>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'AccountConfirmation',
  data: () => ({
    loading: true,
    confirmed: false,
    message: ''
  }),
  mounted() {
    this.confirm()
  },
  methods: {
    confirm() {
      this.$axios.put(`/user/activate/${this.$route.params.id}`, {})
        .then((result) => {
          let {data: {success, message}} = result
          this.confirmed = success
          this.message = message
        })
        .catch(() => {
          this.confirmed = false
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style>

</style>