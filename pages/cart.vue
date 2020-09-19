<template>
  <div class="container">
    <h2 class="font-weight-bold mb-3">My Cart</h2>
    <div class="row">
      <div class="col-12 col-md-8">
        <div class="card">
          <div class="card-body p-0">
            <table class="table table-borderless" v-if="cart.myCartLine">
              <thead>
                <tr>
                  <th scope="col" width="150">Product</th>
                  <th scope="col"></th>
                  <th scope="col">Plan</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart.myCartLine" :key="item.id">
                  <td scope="row">
                    <img
                      :src="$getImage(item.productMaster.id)"
                      :alt="`${item.productMaster.name} thumbnail`"
                      class="rounded"
                    />
                  </td>
                  <td class="font-weight-bold align-middle">
                    <nuxt-link :to="`/product/${item.productMaster.id}`">
                      {{ item.productMaster.name }}
                      <span class="fa fa-external-link ml-1"></span>
                    </nuxt-link>
                  </td>
                  <td class="align-middle">{{ item.productPriceMaster.title }}</td>
                  <td class="align-middle">{{ item.productPriceMaster.codes }}</td>
                  <td class="align-middle font-weight-bold">{{ $formattedMoney(item.subTotal) }}</td>
                  <td class="align-middle">
                    <a href="#" class="remove" @click="deleteCart(item)">
                      <span class="fa fa-times"></span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <p class="text-center font-italic pt-4" v-else>Your cart empty</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card soft-purple">
          <div class="card-body">
            <template v-if="Object.keys(cart).length > 0">
              <div class="row cart-summary d-flex flex-row-reverse">
                <img src="~/assets/images/cart-mascot.png" alt="Cart Mascot">
                <div class="summary-action">
                  <div class="d-flex flex-column font-weight-bold">
                    <div class="label">Total</div>
                    <div class="text-red total">
                      {{
                      $formattedMoney(cart.grandTotal)
                      }}
                    </div>
                  </div>
                  <button
                    class="btn btn-primary btn-block"
                    @click="checkout()"
                  >Check out</button>
                  <nuxt-link to="/deals" class="btn btn-success btn-block">Continue Shooping</nuxt-link>
                </div>
              </div>
            </template>
            <p class="text-center font-italic pt-4" v-else>Your cart empty</p>
          </div>
        </div>

        <div class="card soft-purple d-none d-lg-block mt-4 cart-supplement">
          <div class="card-body">
            <p class="font-weight-bold">Hustle with Confidence</p>
            <ul>
              <li>* Try any product risk free. We offer an industry-best 60-day money-back guarantee — no matter the reason. So go ‘head and take any of our products for a spin to see if they’re a good fit for your business.  </li>
              <li>* World-class customer support. There’s customer support, and then there’s AppSumo customer support. We take pride in going above and beyond to solve issues and keep our community happy.</li>
              <li>* Access to founders and CEOs. As an early adopter, you have the CEO’s ear — ask your burning questions on any active deal and have them answered by the product founders themselves.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Cart',
  middleware: 'authenticated',
  data: () => ({}),
  computed: {
    ...mapState(['cart'])
  },
  mounted() {
    this.getMyCart()
  },
  methods: {
    ...mapMutations(['setCart']),
    getMyCart() {
      this.$axios.get('/cart/my').then(response => {
        let {
          data: { data, success }
        } = response
        if (success) {
          this.setCart(data)
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
    },
    checkout() {
      // console.log(this.cart)
      this.$axios
        .post('/payment/testcheckout', {
          // url will be replace after stable backend, this just for test only
          customer: this.cart.customerID,
          cart: this.cart.id
        })
        .then(res => {
          let {
            data: { success, data, message }
          } = res
          if (success) {
            // move to checkout
            this.$router.push({
              name: 'checkout',
              params: {
                id: data
              }
            })
            this.$router.push(`/checkout/${data}`)
          } else {
            this.$swal('Failed', message, 'error')
          }
        })
        .catch(e => {
          this.$swal('Faield', 'Silahkan hubungi administrator', 'error')
        })

      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 2rem 0 2rem;
}
.card {
  border-radius: 1em;
  border-color: #F2EDF7;
  &.soft-purple{
    background-color: #F2EDF7;
  }
}
table {
  .fa-external-link {
    font-size: 0.7em;
  }
  img {
    max-width: 100px;
  }
  th{
    background-color: #F2EDF7;
    text-transform: uppercase;
    font-size: 0.9rem;
    padding: 15px 20px;
  }
  td{
    font-size: 0.9rem;
    padding: 15px 20px;
    color: #4B4B4B;
    a.remove{
      color: #999;
    }
  }
}
.cart-supplement {
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    li{
      font-size: 0.8rem;
      margin-bottom: .5rem;
    }
  }
}
.cart-summary{
  position: relative;
  img{
    width: 72%;
    position: absolute;
    left: -15px;
    top: -20px;
  }
  .summary-action{
    width: 35%;
    margin-right: 1rem;
    z-index: 3;
    padding-top: 2rem;
    text-align: center;
    margin-bottom: 0.7rem;
    .btn{
      font-size: 0.5rem;
      padding: 8px 5px;
    }
    .total {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
