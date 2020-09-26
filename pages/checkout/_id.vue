<template>
  <div class="container">
    <h2 class="font-weight-bold mb-3">Checkout</h2>
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-body p-5">
            <div class="row">
              <div class="col-12 col-md-7 pr-5">
                <p class="h4 mb-4">Payment Method</p>
                <template v-if="data.grandTotal > 0">
                  <div class="form-check mb-3 font-weight-bold">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="payment-paypal"
                      value="paypal"
                      v-model="paymentMethod"
                      disabled
                    />
                    <label class="form-check-label" for="payment-paypal">
                      <img src="~/assets/images/payment/iconfinder_paypal_1220357.png" alt="Paypal Icon" class="icon">
                      Paypal
                    </label>
                    <small>(Not Available)</small>
                  </div>
                  <div class="form-check mb-3 font-weight-bold">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="payment-cc"
                      value="cc"
                      v-model="paymentMethod"
                    />
                    <label class="form-check-label" for="payment-cc">
                      <img src="~/assets/images/payment/icons8-mastercard-credit-card-96.png" alt="Card Icon" class="icon">
                      Credit or Debit Card
                    </label>
                  </div>
                  <div class="card-list">
                    <template v-if="data.cardViews && data.cardViews.length > 0">
                      <label 
                        v-for="(item, i) in data.cardViews"
                        :key="i"
                        :class="{'form-check mb-2 d-flex justify-content-between align-items-center': true, 'active-card': selectedCard==item.stripePaymentID}"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          name="selectedCard"
                          :value="item.stripePaymentID"
                          v-model="selectedCard"
                        />
                          <div class="available-card">
                            <img v-if="item.brand == 'visa'" src="~/assets/images/payment/visa-logo.png" alt="">
                            <img v-if="item.brand == 'mastercard'" src="~/assets/images/payment/visa-logo.png" alt="">
                            <span>**** **** {{ item.lastFour }}</span>
                            <span class="text-muted">{{ item.month }} / {{ item.year }}</span>
                          </div>
                          <span class="fa fa-check-circle"></span>
                      </label>
                    </template>
                  </div>
                  <div class="form-check mb-3 font-weight-bold">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="payment-new"
                      value="newCard"
                      v-model="selectedCard"
                    />
                    <label class="form-check-label" for="payment-new"
                      >
                      <img src="~/assets/images/payment/icons8-card-payment-96.png" alt="Card Icon" class="icon bigger">
                      New Card</label
                    >

                    <div
                      v-show="selectedCard == 'newCard'"
                      style="margin-left: 3px; margin-top: 5px;"
                      ref="cardelement"
                    />
                  </div>

                  <div class="confirmation-info">
                    Your order confirmation will be email to: <br>
                    <span class="text-red font-weight-bold">{{data.customer && data.customer.email}}</span>
                  </div>
                </template>
                <div class="form-check mb-3 font-weight-bold" v-else>
                  <label class="form-check-label">
                    None, it's a freebies
                  </label>
                </div>
              </div>
              <div class="col-12 col-md-5">
                <p class="h4 mb-4">Summary</p>
                <template v-if="Object.keys(data).length > 0">
                  <div class="cart-line text-smaller">
                    <div class="row" v-for="(item, idx) in data.myCartLine" :key="idx">
                      <div class="col-8">
                        <div class="font-weight-bold">{{item.productMaster.name}}</div>
                        <div class="font-weight-light text-muted">{{`${item.productPriceMaster.title} (Qty ${item.productPriceMaster.codes})`}}</div>
                      </div>
                      <div class="col-4 text-right">{{$formattedMoney(item.subTotal)}}</div>
                    </div>
                  </div>
                  <div
                    class="d-flex justify-content-between font-weight-bold py-3 border-top border-bottom text-smaller"
                  >
                    <span>Total</span>
                    <span>
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
          </div>
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
      if(this.data.grandTotal > 0) this.stripePay()
      else this.freePay()
    },
    freePay() {
      let me = this
      this.$axios.put(`/payment/approvefreepayment/${this.$route.params.id}`)
        .then(res => {
          let {
            data: { success, data, message }
          } = res
          if (success) {
            me.$swal(
              'Success',
              'Your transaction successfully paid',
              'success'
            ).then(() => {
              me.$router.push('/account/my-deals')
              me.setCart({})
            })
          } else {
            me.$swal('Failed', message, 'error')
          }
        })
        .catch(e => {
          me.$swal('Faield', 'Silahkan hubungi administrator', 'error')
        })
    },
    stripePay() {
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
            me.$router.push('/account/my-deals')
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
small {
  color: var(--primary-color-red);
}
.card-list {
  padding-left: 1.6rem;
  .form-check{
    border: 1px solid #AFAFAF;
    border-radius: 10px;
    padding: 15px 20px;
    max-width: 400px;
    overflow: hidden;
    .fa{
      display: none;
    }
    input{
      visibility: hidden;
    }
    &.active-card{
      border: 1px solid #509CF5;
      .fa{
        color: #509CF5;
        display: inline-block;
        float: right;
      }
    }
    .available-card{
      img{
        width: 35px;
        margin-right: 10px;
      }
    }
  }
}
.icon{
  width: 25px;
  margin-right: 5px;
  &.bigger{
    width: 30px;
    margin-right: 0px;
  }
}
.card{
  border-color: white !important;
  box-shadow: 0px 3px 99px #7a7a7a29;
}
.cart-line{
  min-height: 200px;
}
.text-smaller{
  font-size: 0.9rem;
}
.confirmation-info{
  background: #F2EDF7 0% 0% no-repeat padding-box;
  border-radius: 20px;
  padding: 30px 20px;
  font-size: 0.9rem;
  margin-top: 40px;
}
</style>
