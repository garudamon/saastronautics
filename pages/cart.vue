<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8">
        <div class="card">
          <div class="card-header">Deals</div>
          <div class="card-body">
            <table class="table table-borderless" v-if="cartData != null">
              <thead>
                <tr>
                  <th scope="col" width="150"></th>
                  <th scope="col">Product</th>
                  <th scope="col">Plan</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cartData.myCartLine" :key="item.id">
                  <th scope="row">
                    <img
                      :src="$getImage(item.productMaster.id)"
                      :alt="`${item.productMaster.name} thumbnail`"
                      class="rounded"
                    />
                  </th>
                  <td class="font-weight-bold align-middle">
                    <nuxt-link :to="`/product/${item.productMaster.id}`">
                      {{item.productMaster.name}}
                      <span class="fa fa-external-link ml-1"></span>
                    </nuxt-link>
                  </td>
                  <td class="align-middle">{{item.productPriceMaster.title}}</td>
                  <td class="align-middle">{{item.productPriceMaster.codes}}</td>
                  <td class="align-middle">{{$formattedMoney(item.subTotal)}}</td>
                  <td class="align-middle">
                    <a href="#" class="text-warning" @click="deleteCart(item)">
                      <span class="fa fa-trash"></span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <p class="text-center font-italic" v-else>Your cart empty</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card">
          <div class="card-header">Summary</div>
          <div class="card-body">
            <template v-if="cartData != null">
              <div class="d-flex justify-content-between font-weight-light py-2">
                <span>Subtotal</span>
                <span>{{$formattedMoney(cartData.subTotal)}}</span>
              </div>
              <div class="d-flex justify-content-between font-weight-bold py-2 border-top">
                <span>Total</span>
                <span class="text-success">{{$formattedMoney(cartData.grandTotal)}}</span>
              </div>
              <nuxt-link to="#" class="btn btn-primary btn-block pt-2 mt-4">Proceed to Checkout</nuxt-link>
              <nuxt-link to="/deals" class="btn btn-success btn-block py-2 mt-3">Continue Shooping</nuxt-link>
            </template>
            <p class="text-center font-italic" v-else>Your cart empty</p>
          </div>
        </div>

        <div class="cart-supplement d-none d-lg-block mt-5">
          <p class="cart-supplement-header">Hustle with Confidence</p>
          <ul class="list-inline mt-20">
            <li class="d-flex">
              <img
                class="icon"
                width="auto"
                height="20px"
                src="https://appsumo2.b-cdn.net/static/images/svg/calendar.svg"
              />
              <span class="pl-2">
                <b>Try any product risk free.</b> We offer an industry-best 60-day money-back guarantee
                — no matter the reason. So go ‘head and take any of our products for a spin to see if they’re
                a good fit for your business.
              </span>
            </li>

            <li class="d-flex">
              <img
                class="icon"
                width="auto"
                height="20px"
                src="https://appsumo2.b-cdn.net/static/images/svg/lifebuoy.svg"
              />
              <span class="pl-2">
                <b>World-class customer support.</b> There’s customer support,
                and then there’s AppSumo customer support. We take pride in going
                above and beyond to solve issues and keep our community happy.
              </span>
            </li>
            <li class="d-flex">
              <img
                class="icon"
                width="auto"
                height="20px"
                src="https://appsumo2.b-cdn.net/static/images/svg/message-text.svg"
              />
              <span class="pl-2">
                <b>Access to founders and CEOs.</b> As an early adopter,
                you have the CEO’s ear — ask your burning questions on
                any active deal and have them answered by the product founders themselves.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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
        let {
          data: { data, success }
        } = response
        if (success) {
          this.cartData = { ...data }
        }
      })
    },
    deleteCart(item) {
      let _this = this
      this.$swal({
        title: 'Sure?',
        text: `Are you sure to remove ${item.productMaster.name} from cart?`,
        icon: 'warning',
        buttons: ['No, cancel it!', 'Yes, I am sure!'],
        dangerMode: true
      }).then(function(isConfirm) {
        if (isConfirm) {
          _this.$axios.delete(`/cart/${item.id}`).then(response => {
            let {
              data: { success, message }
            } = response
            if (success) {
              _this
                .$swal(
                  'Success!',
                  `${item.productMaster.name} deleted successfully`,
                  'success'
                )
                .then(() => {
                  _this.getMyCart()
                })
            } else {
              _this.$swal('Oops!', `${message}`, 'error')
            }
          })
        }
      })
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  .fa-external-link {
    font-size: 0.7em;
  }
  img {
    max-width: 100px;
  }
}
.cart-supplement {
  .list-inline {
    li {
      margin-bottom: 1em;
      font-size: 0.8em;
    }
  }
}
</style>