<template>
  <div>
    <div class="container">
      <!-- lead -->
      <div class="row">
        <!-- <div class="col-12 col-md-12 mx-auto text-center">
          <h1 class="faq-title font-weight-bold d-md-block">Frequently Asked Questions</h1>
        </div>-->
        <div class="col-6 faq-img">
          <img src="~/assets/images/support/support_robo.svg" alt />
        </div>
        <div class="col-6 faq-title pl-md-2">
          <h1 class="title-1 d-md-block mb-3">Frequently Asked Questions</h1>
          <h2
            class="title-1 d-md-block"
          >We always provide the best service for our customers.</h2>
        </div>
      </div>
      <!-- card FAQ -->
      <div class="row px-4 mb-5">
        <div class="col-12 col-sm-6 mb-5 px-md-3" v-for="item in cardQuestion" :key="item.id">
          <div class="support-card card card-bg-white p-4">
            <div class="card-body graphik-reg">
              <h6 class="card-title font-weight-bold mb-3">{{ item.title }}</h6>
              <p class="card-text" v-html="item.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LazySubscribePanel />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cardQuestion: [
        {
          title: 'What is a Lifetime Deal?',
          description:
            'A lifetime deal (LTD) refers to some of the exclusive deals we have on our marketplace. Most of our deals are lifetime deals and that means, if you purchased the deal, you have lifetime access to the product. Lifetime refers to the lifetime of the product.'
        },
        {
          title: 'How do I redeem my purchases?',
          description:
            'You can go to your account dashboard by clicking on the My Account button on the top right corner of our website. From your account dashboard, click on My Purchases and find the deal you wanted to redeem. Click on the ellipsis (3 dots), click Redeem, and follow the instructions.'
        },
        {
          title: 'What is your Refund Policy?',
          description:
            'We offer a 30-day money-back guarantee. You can refund your purchase within 30 days for 100% of the purchase price. Some of our deals may not allow refunds, in which case, we will make note of it in the deal details clearly.'
        },
        {
          title: 'What are Expired Deals?',
          description:
            'Our deals are exclusive from our partners and they have a time-limit on duration. Expired deals refer to our deals that have ended. These deals have ended and you will not be able to purchase them. Make sure you don’t miss out on our deals!'
        },
        {
          title: 'Who do I go to for product support?',
          description:
            'For technical matters about the SaaS product itself, you should directly support the SaaS company’s support team. For questions about the deals, you can contact Saastronautics support at support@saastronautics.com. '
        },
        {
          title: 'Can I request a deal or submit my own product?',
          description:
            'Yes! If you have any specific SaaS tools you want to see on Saastronautics, you can reach out to us at support@saastronautics.com. If you are looking to submit your own product, you can fill out our  <a href=\'/partners-apply\'>Partners Application.</a>'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.title-1 {
  letter-spacing: 0.9px;
}

.container {
  margin-top: -40px;
}

.faq-title {
  padding-top: 80px;
  h1 {
    font-size: 45px;
  }
  h2 {
    color: #ff4370;
  }
}

.faq-img {
  img {
    width: 90%;
  }
}

.support-card {
  box-shadow: 0px 3px 99px #7a7a7a29;
  border-radius: 10px;
  min-height: 270px;
}
</style>
