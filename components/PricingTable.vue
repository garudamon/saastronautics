<template>
  <div class="pricing py-5">
    <div class="container">
      <div class="row text-center">
        <div class="col-12">
          <h2 class="font-weight-bold mb-4">Pricing</h2>
        </div>
        <div class="col-12 col-md-8 mx-auto">
          <p>
            Our platform offers intelligent, intuitive, and innovative SaaS
            solutions to professionals in all fields
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-10 mx-auto">
          <div class="row">
            <div
              class="col-12 col-md-4 py-3"
              v-for="data in pricingList"
              :key="data.title"
              :class="{'border-right': data.title=='single', 'border': data.title=='multiple'}"
            >
              <p class="h6 text-uppercase text-center">{{data.title}}</p>
              <p
                class="h1 text-uppercase font-weight-bold pb-4 text-center border-bottom"
              >{{data.price}}</p>
              <div
                v-for="(isTrue, text) in data.feature"
                :key="text"
                class="py-3 d-flex align-items-center border-bottom"
              >
                <span v-if="isTrue" class="fa fa-check text-success d-block"></span>
                <span v-else class="fa fa-times text-danger d-block"></span>
                <div class="flex-grow-1 pl-2">{{text}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pricingList: [
        {
          title: 'single',
          price: 49,
          feature: {
            'All Features Included 5 Custom Domains': true,
            'All Features Included 5 Custom Domains': true,
            'Unlimited Forms And Surveys': false,
            'Unlimited Responses': false,
            'Real-Time Polls And Survey Results': false,
            'Paypal Payments': false,
            'Page Break And Logic Jumps': false
          }
        },
        {
          title: 'double',
          price: 60,
          feature: {
            'All Features Included 5 Custom Domains': true,
            'All Features Included 5 Custom Domains': true,
            'Unlimited Forms And Surveys': true,
            'Unlimited Responses': true,
            'Real-Time Polls And Survey Results': true,
            'Paypal Payments': false,
            'Page Break And Logic Jumps': false
          }
        },
        {
          title: 'multiple',
          price: 100,
          feature: {
            'All Features Included 5 Custom Domains': true,
            'All Features Included 5 Custom Domains': true,
            'Unlimited Forms And Surveys': true,
            'Unlimited Responses': true,
            'Real-Time Polls And Survey Results': true,
            'Paypal Payments': true,
            'Page Break And Logic Jumps': true
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.pricing {
  background-color: #f5f4f8;
  .border {
    border-radius: 10px;
    > div:last-child {
      border-bottom: none !important;
    }
  }
}
</style>