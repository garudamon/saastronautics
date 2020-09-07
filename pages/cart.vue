<template>
  <div>my cart</div>
</template>

<script>
export default {
  name: 'Cart',
  middleware: 'authenticated',
  data: () => ({
    cartData: null
  }),
  mounted() {
    this.getMyCart()
  },
  methods: {
    getMyCart() {
      this.$axios.get('/cart/my').then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style>
</style>