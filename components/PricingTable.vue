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
              class="col-12 col-md-4 px-4 pt-5 item"
              v-for="(data, idx) in pricingList"
              :key="data.title"
              :class="{
                'border-right': data.title.toLowerCase() == 'single',
                border: data.title.toLowerCase() == 'multiple'
              }"
            >
              <div class="ribbon" v-if="idx == pricingList.length - 1"></div>
              <p
                class="h6 text-uppercase text-center pkg font-weight-bold my-0"
              >
                {{ data.title.toLowerCase() }}
              </p>
              <p
                class="h1 text-uppercase font-weight-bold pb-4 text-center border-bottom price"
              >
                {{ `USD ${data.activePrice}` }}
              </p>
              <div
                v-for="feature in data.productPriceFeatureMaster"
                :key="feature.id"
                class="py-3 d-flex align-items-center border-bottom"
              >
                <span class="fa fa-check text-success d-block"></span>
                <div class="flex-grow-1 pl-2 font-weight-light">
                  {{ feature.description }}
                </div>
              </div>
              <div class="pt-4 text-center action">
                <nuxt-link to="#" class="btn btn-primary">{{
                  `Buy ${data.codes} ${data.codes > 1 ? 'codes' : 'code'}`
                }}</nuxt-link>
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
  name: 'PricingTable',
  props: ['pricingList'],
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.pricing {
  background-color: #f5f4f8;
  .item {
    position: relative;
    padding-bottom: 60px;
    .action {
      position: absolute;
      bottom: 15px;
      left: 0px;
      right: 0px;
    }
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
