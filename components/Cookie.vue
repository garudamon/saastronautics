<template>
  <div class="cookie" v-if="agreed == false">
    <div class="container">
      <div class="row py-3 px-4 d-flex align-items-center">
        <div class="col-12 col-md-10">
          This site uses cookies.
        </div>
        <div class="col-12 col-md-2 text-right">
          <button class="btn btn-primary" @click="agree">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  name: 'Cookie',
  data: () => ({ agreed: true }),
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
}
</style>
