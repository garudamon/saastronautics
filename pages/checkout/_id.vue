<template>
  <div class="container">
    <h2 class="font-weight-bold mb-3">Checkout</h2>
    <div class="row">
      <div class="col-12 col-md-8">
        <div class="card">
          <div class="card-header">1. Account Verification</div>
          <div class="card-body">
            <p>Your order confirmation will be emailed to:</p>
            <p class="text-info">{{ profile.email }}</p>
          </div>
        </div>
        <div class="card my-4">
          <div class="card-header">2. Payment Method</div>
          <div class="card-body">
            <div class="form-check mb-2">
              <input
                class="form-check-input"
                type="radio"
                name="paymentMethod"
                id="payment-paypal"
                value="paypal"
                v-model="paymentMethod"
              />
              <label class="form-check-label" for="payment-paypal">
                <span class="fa fa-fw fa-paypal paypal-color mx-1"></span>
                Paypal
              </label>
            </div>
            <div class="form-check mb-2">
              <input
                class="form-check-input"
                type="radio"
                name="paymentMethod"
                id="payment-cc"
                value="cc"
                v-model="paymentMethod"
              />
              <label class="form-check-label" for="payment-cc">
                <span class="fa fa-fw fa-credit-card cc-color mx-1"></span>
                Credit or Debit Card
              </label>
            </div>
            <div class="card-list">
              <template v-if="data.cardViews && data.cardViews.length > 0">
                <p class="font-weight-bold">Choose Existing Card</p>
                <div
                  class="form-check mb-2"
                  v-for="(item, i) in data.cardViews"
                  :key="i"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    name="selectedCard"
                    id="payment-paypal"
                    :value="item.stripePaymentID"
                    v-model="selectedCard"
                  />
                  <label class="form-check-label" for="payment-paypal">
                    <span>**** **** {{ item.lastFour }}</span>
                    <span class="text-muted"
                      >{{ item.month }} / {{ item.year }}</span
                    >
                  </label>
                </div>
              </template>
              <div class="form-check mb-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="selectedCard"
                  id="payment-paypal"
                  value="newCard"
                  v-model="selectedCard"
                />
                <label class="form-check-label" for="payment-paypal"
                  >New Card</label
                >
              </div>
              <div
                v-show="selectedCard == 'newCard'"
                style="padding-left:1.3rem"
                ref="cardelement"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card">
          <div class="card-header">Summary</div>
          <div class="card-body">
            <template v-if="Object.keys(data).length > 0">
              <div
                class="d-flex justify-content-between font-weight-light py-2"
              >
                <span>Subtotal</span>
                <span>{{ $formattedMoney(data.subTotal) }}</span>
              </div>
              <div
                class="d-flex justify-content-between font-weight-light py-2"
              >
                <span>Discount</span>
                <span>{{ $formattedMoney(data.totalDiscount) }}</span>
              </div>
              <div
                class="d-flex justify-content-between font-weight-bold py-2 border-top"
              >
                <span>Total</span>
                <span class="text-success">
                  {{ $formattedMoney(data.grandTotal) }}
                </span>
              </div>
              <button
                class="btn btn-primary btn-block pt-2 mt-4"
                @click="pay()"
              >
                Pay
              </button>
            </template>
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
                <b>Try any product risk free.</b> We offer an industry-best
                60-day money-back guarantee — no matter the reason. So go ‘head
                and take any of our products for a spin to see if they’re a good
                fit for your business.
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
                and then there’s AppSumo customer support. We take pride in
                going above and beyond to solve issues and keep our community
                happy.
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
                <b>Access to founders and CEOs.</b> As an early adopter, you
                have the CEO’s ear — ask your burning questions on any active
                deal and have them answered by the product founders themselves.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Checkout',
  head() {
    return {
      script: [
        {
          src: 'https://js.stripe.com/v3/'
        }
      ]
    }
  },
  data: () => ({
    stripe: null,
    card: null,
    clientSecret: null,
    data: {},
    paymentMethod: 'cc',
    selectedCard: 'newCard'
  }),
  computed: {
    ...mapState(['profile'])
  },
  methods: {
    ...mapMutations(['setCart']),
    getDetail() {
      this.$axios.get(`/payment/detail/${this.$route.params.id}`).then(res => {
        let {
          data: { success, data }
        } = res
        if (success) {
          this.data = { ...data }
          this.clientSecret = this.data.stripeSecretClientKey

          if (this.data.cardViews.length > 0) {
            this.selectedCard = this.data.cardViews[0].stripePaymentID
          }

          this.generateStripeElement()
        }
      })
    },
    generateStripeElement() {
      const publicKey = this.data.stripePublicKey
      this.stripe = window.Stripe(publicKey)
      const elements = this.stripe.elements()

      const style = {
        base: {
          color: '#32325d',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '16px',
          '::placeholder': {
            color: '#aab7c4'
          }
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a'
        }
      }

      this.card = elements.create('card', { style })
      this.card.mount(this.$refs.cardelement)
    },
    pay() {
      const me = this

      let params = {}
      if (this.selectedCard != 'newCard') {
        params = {
          payment_method: this.selectedCard
        }
      } else {
        params = {
          payment_method: {
            card: this.card
          },
          save_payment_method: true
          // setup_future_usage: 'off_session'
        }
      }

      this.stripe
        .confirmCardPayment(this.clientSecret, params)
        .then(function(result) {
          if (result.error) {
            // Show error to your customer
            me.$swal('Failed', result.error.message, 'failed')
            console.log(result.error.message)
          } else {
            // The payment has been processed!
            me.orderComplete(me.clientSecret)
          }
        })
    },
    orderComplete() {
      const me = this
      this.stripe
        .retrievePaymentIntent(this.clientSecret)
        .then(function(result) {
          console.log(result)
          me.$swal(
            'Success',
            'Your transaction successfully paid',
            'success'
          ).then(() => {
            me.$router.push('/account')
            me.setCart({})
          })
        })
    }
  },
  mounted() {
    this.getDetail()
  }
}
</script>

<style lang="scss" scoped>
.paypal-color {
  color: #21aef3;
  font-size: 1.2rem;
}
.cc-color {
  color: #ff9800;
  font-size: 1.2rem;
}
.card-list {
  padding-left: 1.6rem;
}
</style>
