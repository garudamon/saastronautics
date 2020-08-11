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
        <div class="col-12 col-lg-10 mx-auto mt-5">
          <div class="row">
            <div
              class="col-12 col-md-4 pb-3 px-4 item pt-5"
              v-for="(data, idx) in pricingList"
              :key="data.title"
              :class="{'border-right': data.title=='single', 'border': data.title=='multiple'}"
            >
              <div class="ribbon" v-if="idx == pricingList.length - 1"></div>
              <p class="h6 text-uppercase text-center pkg font-weight-bold my-0">{{data.title}}</p>
              <p
                class="h1 text-uppercase font-weight-bold pb-4 text-center border-bottom price"
              >{{data.price}}</p>
              <div
                v-for="(isTrue, text) in data.feature"
                :key="text"
                class="py-3 d-flex align-items-center border-bottom"
              >
                <span v-if="isTrue" class="fa fa-check text-success d-block"></span>
                <span v-else class="fa fa-times text-danger d-block"></span>
                <div class="flex-grow-1 pl-2 font-weight-light">{{text}}</div>
              </div>
              <div class="pt-4 text-center">
                <nuxt-link to="#" class="btn btn-primary">{{data.textLink}}</nuxt-link>
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
          price: '$49',
          textLink: 'Buy 1 Code',
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
          price: '$60',
          textLink: 'Buy 2 Codes',
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
          price: '$100',
          textLink: 'Buy 3 Codes',
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
  .item {
    position: relative;
    &:last-child {
      background-color: white;
      overflow: hidden;
      border-color: #fcc2d0 !important;
    }
    .pkg {
      color: #610588;
    }
    .price {
      color: #ff436f;
    }
    &.border {
      border-radius: 10px;
    }
    .border-bottom {
      border-bottom-color: rgba($color: #000000, $alpha: 0.06) !important;
      > div:last-child {
        border-bottom: none !important;
      }
    }

    .ribbon {
      width: 24px;
      height: 35px;
      background: transparent linear-gradient(180deg, #ff4370 0%, #4b028c 100%)
        0% 0% no-repeat padding-box;
      position: absolute;
      right: 30px;
      top: -350px;
      animation: drop forwards 0.8s 1s cubic-bezier(0.165, 0.84, 0.44, 1);
      &:before {
        content: '';
        position: absolute;
        z-index: 2;
        left: 0;
        bottom: -12px;
        border-left: 12px solid #4b028c;
        border-right: 12px solid #4b028c;
        border-bottom: 12px solid transparent;
      }
    }
    @keyframes drop {
      0% {
        top: -350px;
      }
      100% {
        top: 0;
      }
    }
  }
}
</style>