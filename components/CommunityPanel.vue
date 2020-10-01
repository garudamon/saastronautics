<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12 col-md-8 mx-auto p-md-5 p-3 p-md- subscribe-panel my-5 d-flex align-items-center"
      >
        <div class="row">
          <div class="col-12 col-md-4 p-5 p-md-0">
            <img
              src="~/assets/images/saastrobot/community.png"
              alt="Community Illustrator"
              v-if="['/about', '/partners'].indexOf($route.path) > -1"
            />
            <img src="~/assets/images/saastrobot/community.png" alt="Community Illustrator" v-else />
          </div>
          <div class="col-12 col-md-8 text-center">
            <h3 class="title-2">Join Our Community and Grow Together!</h3>
            <p
              class="py-2"
            >Join the official Saastronautics Facebook group, Saastronaut Life, our community of entrepreneurs, marketers, agency owners, and freelancers.</p>
            <a
              href="https://www.facebook.com/groups/saastronautics"
              target="_blank"
              class="btn btn-primary btn-md px-5 mt-1 text-white"
            >Join Now</a>
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
