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
            href="#"
            target="_blank"
            class="btn btn-primary btn-lg px-5 text-white mb-3"
            >Become a Saastronautics Affiliate</a
          >
        </div>
        <div class="col-12 col-md-6 text-center align-self-center">
          <img src="~/assets/images/gift-icon@2x.png" alt="Saastrobot Gift Affiliate" />
        </div>
      </div>
    </div>
    <LazyFeatureAffiliate
      title="What's in it for you?"
      description="Get paid to grow with Saastronautics. Enjoy high commission rates with no limits on how much you can get paid. It’s free to join!"
      :items="whats"
    />
    <div class="container pt-3 pb-5 text-center">
      <h1 class="title-1 mt-4 mb-3">
        Become A Saastronautics Affiliate
      </h1>
      <p>Sign up and boost your income!</p>
      <a
        href="#"
        target="_blank"
        class="btn btn-primary btn-lg px-5 text-white mt-3 mb-5"
        >Become a Saastronautics Affiliate</a
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      whats: [
        {
          image: require('~/assets/images/icon/hot-new-deals.svg'),
          description:
            'Pay-Per-Sale for each initial transaction sale you deliver'
        },
        {
          image: require('~/assets/images/icon/best-prices.svg'),
          description: 'Unlimited commissions. 30-Day Cookie'
        },
        {
          image: require('~/assets/images/icon/top-notch-products.svg'),
          description:
            'A unique affiliate URL for tracking all of your referrals and sales so we can pay you'
        },
        {
          image: require('~/assets/images/icon/satisfaction-guarantee.svg'),
          description:
            'A custom dashboard you can log in to 24 hours a day to check your stats'
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