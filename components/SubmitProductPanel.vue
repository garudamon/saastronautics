<template>
  <div class="container">
    <div class="row pb-5">
      <div
        class="col-12 col-md-7 mx-auto p-md-5 p-3 p-md- subscribe-panel my-5 d-flex align-items-center"
      >
        <div class="row">
          <div class="col-12 col-md-4 p-5 p-md-0">
            <img
              src="~/assets/images/saastrobot/addemail.png"
              alt="Saastrobot Add Email"
            />
          </div>
          <div class="col-12 col-md-8 text-center">
            <h3 class="title-2">
              Reach More Users by Launching Your SaaS with Saastronautics
            </h3>
            <p class="py-2">
              Grow your core userbase, collect invaluable feedback, gain funds
              for reinvestment, and leverage your campaign to grow your MRR.
            </p>
            <nuxt-link class="btn btn-primary btn-lg" to="/partners-apply"
              >Submit Your Product</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    error: {}
  }),
  watch: {
    email: function(val) {
      if (!this.validEmail(val))
        this.error = { ...this.error, email: 'Email not valid' }
      else delete this.error['email']
    }
  },
  methods: {
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    subscribe(e) {
      e.preventDefault()
      if (!this.validEmail(this.email)) {
        this.error = { ...this.error, email: 'Email not valid' }
      } else {
        this.$axios
          .post('/emailcommunity/insert/', { email: this.email })
          .then(response => {
            if (response.data.success) {
              this.email = ''
              this.$swal(
                'Welcome to our community!',
                `${response.data.message}`,
                'success'
              )
            } else {
              this.$swal('Ooh dude!', `${response.data.message}`, 'error')
            }
          })
      }
      return false
    }
  }
}
</script>

<style></style>
