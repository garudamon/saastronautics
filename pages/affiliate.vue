<template>
  <div class="gray-background py-3">
    <div class="container">
      <div class="row img-header pt-2 pb-5 d-flex px-md-4 header">
        <div class="col-12 col-md-6 pr-0 pr-md-5 align-self-center">
          <h1 class="title-1 mt-4 mb-3">
            Boost your income and grow with us!
          </h1>
          <p>
            Sign up for Saastronautics's Affiliate Program
          </p>
          <a
            href="#affiliateform"
            class="btn btn-primary btn-lg px-5 text-white mb-3"
            >Become a Saastronautics Affiliate</a
          >
        </div>
        <div class="col-12 col-md-6 text-center align-self-center">
          <img
            :src="$getStaticImage('gift-icon@2x.png')"
            alt="Saastrobot Gift Affiliate"
          />
        </div>
      </div>
    </div>
    <LazyFeatureAffiliate
      title="What's in it for you?"
      description="Get paid to grow with Saastronautics. Enjoy high commission rates with no limits on how much you can get paid. It’s free to join!"
      :items="whats"
    />
    <div id="affiliateform" class="container pt-3 pb-5 text-center">
      <h1 class="title-1 mt-4 mb-3">
        Become A Saastronautics Affiliate
      </h1>
      <p>Sign up and boost your income!</p>
      <div ref="questionscoutPanel"></div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      let questionscoutScript = document.createElement('script')
      questionscoutScript.setAttribute('id', 'ubygvcszuhsnqwbujcu')
      questionscoutScript.setAttribute('src', '/questionscoutaffiliate.js')
      this.$refs.questionscoutPanel.appendChild(questionscoutScript)
    }, 500)
  },
  data() {
    return {
      whats: [
        {
          image: 'icon/hot-new-deals.svg',
          description:
            'Earn money on each and every sale you make'
        },
        {
          image: 'icon/best-prices.svg',
          description: 'Unlimited commissions with 60-day cookies'
        },
        {
          image: 'icon/top-notch-products.svg',
          description:
            'Track all of your clicks and conversions through your unique affiliate link'
        },
        {
          image: 'icon/satisfaction-guarantee.svg',
          description:
            'Watch your earnings grow from your own personalized dashboard'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.gray-background {
  background-color: #f5f4f8;
  margin-top: -80px !important;
  .btn {
    font-size: 14px;
    padding: 0.7rem 3.5rem;
  }
  .img-header {
    img {
      width: 55%;
      border-radius: 10px;
    }
  }
}
</style>