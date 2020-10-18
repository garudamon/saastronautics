<template>
  <div>
    <div class="container">
      <!-- lead -->
      <div class="row">
        <div class="col-12 col-md-10 mx-auto text-center">
          <h1 class="title-1 display-5 font-weight-normal d-none d-md-block">
            Reach More Users by Launching Your SaaS with
            <span class="text-red title-1">Saastronautics</span>
          </h1>
          <h1 class="title-1 display-5 font-weight-normal d-block d-md-none">
            Reach More Users by Launching Your SaaS Tools with
            <span class="text-red title-1">Saastronautics</span>
          </h1>
        </div>
        <div class="col-12 col-md-10 mx-auto text-center">
          <p class="px-md-3 py-4">
            Grow your core userbase, collect invaluable feedback, gain funds for
            reinvestment, and leverage your campaign to grow your MRR.
          </p>
          <nuxt-link class="btn btn-primary btn-lg" to="/partners-apply"
            >Submit Your Product</nuxt-link
          >
        </div>
      </div>
      <!-- what we do -->
      <LazyImageParagraphSideBySide
        :imageUrl="imageTechIs"
        :title="['Our Success Is Measured', 'in Our Partners’ Success']"
        :descriptions="[
          'When you partner with Saastronautics, you have a dedicated team focused on your success. We’re not simply throwing your product on our site and saying our goodbyes when the campaign is over. We are actively involved throughout the entire project lifecycle.',
          'We are with you from the awareness campaigns ramping up to the deal launch to the end of the campaign and beyond. We’re staying on board to help you shift gears and generate MRR. '
        ]"
      />
    </div>
    <!-- What We Offer -->
    <LazyFeatureGray
      title="Why Choose Saastronautics?"
      :items="offer"
      size="col-md-4 mb-3 mb-md-5 px-4"
    />
    <!-- white background features -->
    <div class="container">
      <div class="row features px-md-4 py-5">
        <div class="col-12 py-5">
          <h1 class="title-1 text-center">Is Your Product Ready?</h1>
        </div>
        <div
          class="col-12 col-md-4 text-left px-4"
          v-for="item in features"
          :key="item.title"
        >
        <div class="text-center mb-3">
          <img :src="$getStaticImage(item.image)" :alt="item.title" />
        </div>
          <h5 class="title-2 text-capitalize font-weight-bold py-4">
            {{ item.title }}
          </h5>
          <p class="py-0">{{ item.description }}</p>
        </div>
      </div>
    </div>

    <LazyCustomerFeedback
      :feedback="feedback"
      title="Our Partners Love What We Do"
      subtitle="Read what our actual partners have to say about us."
    />
    <LazySubmitProductPanel />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imageTechIs: 'partners/saastronautics-partners.svg',
      offer: [
        {
          image: 'icon/keep-a-larger-share-of-the-sales.svg',
          title: `Keep a Larger Share of
          <br/>the Sales You Make`,
          description:
            "We want to create an environment of prosperity for all parties. It's for this reason that we want to make our partners feel like they are part of a platform that offers them as much value as the end-user. Saastronautics gives our Partners the lion's share of the sale."
        },
        {
          image: 'icon/get-a-dedicated-support.svg',
          title: `Get Dedicated Support<br/>and Consultation`,
          description:
            "We'll never leave you alone in the digital environment. With Saastronautics, you get access to a platform, and a team, of SaaS professionals that understand your business. We consult with you on branding issues, marketing strategy, and generating more MRR for your company."
        },
        {
          image: 'icon/leverage-the-power.svg',
          title: `Leverage the Power of the<br/>Saastronautics Community`,
          description:
            'As our partner, you have access to the Saastronautics community consisting of entrepreneurs, agency owners, digital marketers, and freelancers. Receive real-world feedback from our user base, allowing you to grow your SaaS offering in line with market expectations..'
        }
      ],
      features: [
        {
          image: 'icon/product-is-live.svg',
          title: `Product is Live`,
          description:
            'We are looking for partners with products that are live and not a beta application or program. We expect our partners to launch market-ready SaaS tools that offer real value to our community.'
        },
        {
          image: 'icon/product-fits-our-audience.svg',
          title: `Product Fits Our Audience`,
          description:
            'We ensure that all of the SaaS tools available on our platform meet the needs of our audience. We vet all of the SaaS tools on our platform to ensure they add value to the community.'
        },
        {
          image: 'icon/product-is-stable.svg',
          title: `Product is Stable`,
          description:
            'You can expect a massive influx of new users and we want to make sure your product can handle it. We want partners who are open to feedback and will continue to develop.'
        }
      ],
      feedback: [
        {
          name: 'Fikry Fatullah - Founder, Kirim Email',
          comment:
            'Perhaps there is only a small group of people who can say they knew Parker from the beginning, and I’m glad that I’m one of them. Parker was, and still is, one of my company’s earliest clients; on the other hand, He’s also the one that I seek advice to discuss a product or marketing strategy on a global scale. When he recommended tools or services for my business, I’ve listened, and you should too.',
          rating: 5,
          photo: 'partners/kirim-email-logo.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.features {
  img {
    width: 160px;
    border-radius: 10px;
  }
}
</style>
