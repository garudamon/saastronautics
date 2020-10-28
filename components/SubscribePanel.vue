<template>
  <div class="container">
    <div class="row py-3 py-md-5">
      <div
        class="col-12 col-md-7 mx-auto p-md-5 p-3 pb-5 subscribe-panel mb-5 d-flex align-items-center "
      >
        <div class="row">
          <div class="col-12 col-md-4 p-3 p-md-0 text-center" >
            <img
              :src="$getStaticImage('saastrobot/saastrobot-add-email.svg')"
              alt="Saastrobot Add Email"
            />
          </div>
          <div class="col-12 col-md-8 text-center">
            <h3 class="title-2">
              Sign Up and Launch Your Workflow into Hyperspace!
            </h3>
            <p class="py-2">
              Stay in the loop and keep up with our ventures. Be the first to know about our new deals.
            </p>
            <form class="row d-flex justify-content-center" @submit="subscribe">
              <div class="col-6 pr-0 mr-2">
                <input
                  type="email"
                  :class="{
                    'form-control form-round border-0 px-3': true,
                    error: error.email ? true : false
                  }"
                  placeholder="Enter your email address"
                  v-model="email"
                />
              </div>
              <div class="col-5 px-0 my-auto">
                <button type="submit" class="btn btn-primary btn-md-md btn-sm px-4">
                  Send Me Email
                </button>
              </div>
            </form>
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
