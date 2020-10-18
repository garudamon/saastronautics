<template>
  <div class="cookie" v-if="agreed == false">
    <div class="container">
      <div class="row py-3 px-4 d-flex align-items-center">
        <div class="col-12 col-md-10 cookie-text">
          This website uses Cookies in order to provide a more personalized user
          experience. By Continuing browse the site you are agreeing to our use
          of cookies. Review our
          <nuxt-link to="/privacy">cookies information</nuxt-link> for more
          details.
        </div>
        <div class="col-12 col-md-2 text-right">
          <button class="btn btn-primary" @click="agree">Agree</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  name: 'Cookie',
  data: () => ({
    agreed: true
  }),
  mounted() {
    let cookie_agreement = Cookie.get('cookie_agreement')
    if (cookie_agreement == 'true') this.agreed = true
    else this.agreed = false
  },
  methods: {
    agree() {
      Cookie.set('cookie_agreement', true)
      this.agreed = true
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-top: solid 1px var(--primary-color-red);
  background: white;
  .cookie-text {
    font-size: 14px;
  }
}
</style>
