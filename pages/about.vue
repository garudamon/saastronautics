<template>
  <div>
    <div class="container">
      <!-- lead -->
      <div class="row">
        <div class="col-12 col-md-12 mx-auto text-center">
          <h1 class="title-1 display-5 font-weight-normal d-none d-md-block">
            Connecting Powerful Tools With
            <br />
            <span class="text-red title-1">Intrepid Businesses</span>
          </h1>
          <h1 class="title-1 display-5 font-weight-normal d-block d-md-none">
            Connecting Powerful Tools With
            <br />
            <span class="text-red title-1">Intrepid Businesses</span>
          </h1>
        </div>
        <div class="col-12 col-md-9 mx-auto text-center">
          <p class="px-md-4 py-4">
            Saastronautics was created with one goal in mind  – to get the best new SaaS tools into as many businesses as possible. Our customers get to enjoy great deals on the best new SaaS tools, while our SaaS partners get to use our platform as a launchpad for their product.
          </p>
        </div>
      </div>
      <!-- what we do -->
      <LazyImageParagraphSideBySide
        :imageUrl="imageWhyWeDo"
        title="What We Do"
        :descriptions="[
          'Saastronautics is changing the way SaaS companies and providers are marketing and promoting their tools. Gain a core user base of people and companies interested in using your SaaS tools to boost their business. We provide early adopters with new tech that can help them grow their business.',
          'We scour the internet hunting for the latest and greatest SaaS tools. Our team puts new SaaS tools through a rigorous test and vetting process. Once we secure exclusive partnerships, we work closely with our partners to ultimately generate MRR and grow. '
        ]"
        

      />
    </div>
    
    <!-- What We Offer -->
    <LazyFeatureGray
      title="What We Offer"
      description="Exclusive deals and discounts on powerful SaaS tools that will help you launch your workflow into hyperspace!"
      :items="offer"
    />
    <div class="container">
      <!-- why we do what we do -->

      <LazyImageParagraphSideBySide
        :imageUrl="imageWhatWeDo"
        :title="['Why We Do', 'What We Do']"
        :descriptions="[
          'We understand that finding the right tool for your company is a challenging and expensive process – and we\'re here to help.',
          'The Saastronautics team has a passion for SaaS and digital transformations. We love technology solutions designed to simplify and enhance the way we do business, but we felt the best tools are often hidden amongst an ocean of mediocrity. This led us to create a platform that filters out the best from the rest, for the benefit of all our users.',
        ]"
        :rtl="true"
        fadeType = "fade-left"
      />

      <!-- meet the teams -->
      <div class="row">
        <div class="col-12 text-center mt-5 pt-5">
          <h2 class="title-1 mb-4">Meet The Team</h2>
        </div>
        <div class="col-12 col-md-7 mx-auto text-center">
          <p>
            Our team is made up of agency owners and digital marketers who actually utilize and work with a wide variety of SaaS applications everyday. We understand how SaaS tools can really launch your workflow into hyperspace. 
          </p>
        </div>
      </div>
      <LazyTeamMember class="py-5 mb-0 mb-md-5" :member="member" />
    </div>
    <LazySubscribePanel />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imageWhatWeDo: require('~/assets/images/about/what-we-do.svg'),
      imageWhyWeDo: require('~/assets/images/about/why-we-do.svg'),
      offer: [
        {
          image: require('~/assets/images/about/offer-3.png'),
          title: 'Exclusive Deals',
          description:
            'We work hard to secure exclusive deals that you won’t find anywhere else. We sieve through and test hundreds of new SaaS products to find the best tools for our community. '
        },
        {
          image: require('~/assets/images/about/offer-2.png'),
          title: 'Powerful Community',
          description:
            'Our unique community of Saastronauts are comprised of digital entrepreneurs from diverse backgrounds. We bridge the gap between the SaaS company and user.'
        },
        {
          image: require('~/assets/images/about/offer-1.png'),
          title: 'Unrivaled Support',
          description:
            'We invest our time, resources, and passion into the success of not only the SaaS company but also our community members. We are here to grow with you.'
        }
      ],
      member: [
        {
          imageUrl: require('~/assets/images/about/joon-k-lee.jpeg'),
          name: 'Joon K Lee',
          position: 'Founder & CEO',
          description:
            'Joon is the owner and Managing Director of Inquivix, Korea’s leading digital marketing agency. He has helped build and implement marketing strategies and campaigns for large enterprises like The Economist, Freshworks, and Rhenus. '
        },
        {
          imageUrl: require('~/assets/images/about/parker-casio.jpeg'),
          name: 'Parker Casio',
          position: 'Co-Founder & CMO',
          description:
            'Parker is the founder and owner of DRBRAND, through which he has worked with over 350 businesses. Parker is a self-described growth hacker who understands how to reach a big audience.'
        },
        {
          imageUrl: require('~/assets/images/about/frank-valensco.jpeg'),
          name: 'Frank Valensco',
          position: 'Co-Founder & CTO',
          description:
            'CEO and Co-founder of Sekawan Solution, a Creative IT Company based in Jakarta, Indonesia. Have been working on developing solutions and products for the last 7 years to help clients grow their business.'
        },
        {
          imageUrl: require('~/assets/images/about/gerard-brand.jpeg'),
          name: 'Gerard Brand',
          position: 'Design Director',
          description:
            'Gerard has over 10 years of experience in graphic design and videography. He won first place in the GO VIDEO national competition by Gojek for the Best Video Documentary award.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
