<template>
  <div class="row d-flex justify-content-center">
    <template v-if="loading">
      <div class="col-12 col-md-5 card-bg-white p-5 text-center">
        <p class="pt-5">
          <span class="fa fa-3x fa-spinner fa-spin"></span>
        </p>
        <p class="pb-5">Loading...</p>
      </div>
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