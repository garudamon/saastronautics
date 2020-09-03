<template>
  <div>
    <div class="container">
      <!-- lead -->
      <div class="row">
        <div class="col-12 col-md-12 mx-auto text-center">
          <h1 class="display-4 font-weight-normal d-none d-md-block">
            The tools you need to grow your business <br />
            <span class="text-danger">shouldn't put you out of business</span>
          </h1>
          <h1 class="display-5 font-weight-normal d-block d-md-none">
            The tools you need to grow your business <br />
            <span class="text-danger">shouldn't put you out of business</span>
          </h1>
        </div>
        <div class="col-12 col-md-9 mx-auto text-center">
          <p class="px-md-4 py-4">
            Out intuitive and dynamic platform provides SaaS startups with an
            incredible opportunity to use as your launchpad for new SaaS
            solutions.
          </p>
        </div>
      </div>
      <!-- what we do -->
      <LazyImageParagraphSideBySide
        :imageUrl="imageWhyWeDo"
        title="What We Do?"
        :descriptions="[
          'Saastronautics is changing the way SaaS companies and providers are marketing and promoting their tools. Gain a core user base of people and companies interested in using your SaaS tools to boost their business. We provide early adopters with new tech that can help then automate workflows and processes.',
          'We act as a conduit to connect SaaS tool providers with end-users of the technology. With our dedicated user-base, you get access to qualified prospects looking for your SaaS solution right now.'
        ]"
      />
    </div>
    <!-- What We Offer -->
    <LazyFeatureGray
      title="What We Offer"
      description="Choose the tools that you think will benefit your business, and let us launch your workflow into hyperspace."
      :items="offer"
    />
    <div class="container">
      <!-- why we do what we do -->
      <LazyImageParagraphSideBySide
        :imageUrl="imageWhatWeDo"
        :title="['Why We Do', 'What We Do']"
        :descriptions="[
          'We understand that completing a digital transformation for your company is a challenging process, and we\'re here to help.',
          'Our platform provides you with all the resources and tools you need to transform your workflows. Create a digital workspace that elevates your employee and customer experience by working with a platform that offers you the tools you need to succeed.',
          'At Saastronautics, were always looking for innovations in technology that simplify the digital workplace.'
        ]"
        :rtl="true"
      />
      <!-- meet the teams -->
      <div class="row">
        <div class="col-12 text-center mt-5 pt-5">
          <h2 class="font-weight-bold mb-4">Meet The Team</h2>
        </div>
        <div class="col-12 col-md-7 mx-auto text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      imageWhatWeDo: require('~/assets/images/about/we-do.png'),
      imageWhyWeDo: require('~/assets/images/about/why-we-do.png'),
      offer: [
        {
          image: require('~/assets/images/about/offer-3.png'),
          title: 'Unique Platform',
          description:
            'Promote your SaaS tools to users who are looking for solutions to their digital workplace and improve your offering by receiving real-world feedback from users through our platform.'
        },
        {
          image: require('~/assets/images/about/offer-2.png'),
          title: 'Use Data Any Way You Want',
          description:
            "Whether you're testing a new product or trying to boost sales, our platform allows you to tweak your tools, design new products and know what your audience demands from your offering."
        },
        {
          image: require('~/assets/images/about/offer-1.png'),
          title: 'Boost Your Business',
          description:
            'We have a comprehensive listing of the best SaaS solutions available with special pricing that allows you to benefit from savings on your SaaS tools.'
        }
      ],
      member: [
        {
          imageUrl: require('~/assets/images/about/joon-k-lee.jpeg'),
          name: 'Joon K Lee',
          position: 'Co-Founder & CEO',
          description:
            'Joon is the founder and CEO of Saastronautics and has many successful business ventures under his belt, including Inquivix. Inquivix is Korea’s leading digital marketing agency that helps large-sized global enterprises enter the Korean market.'
        },
        {
          imageUrl: require('~/assets/images/about/parker-casio.jpeg'),
          name: 'Parker Casio',
          position: 'Co-Founder & Head of Growth',
          description:
            'Head of Marketing at Saastronautics, Casio is the founder and owner of DRBRAND, through which he has worked with over 350 businesses. Parker is a self-described growth hacker who understands how to reach a big audience.'
        },
        {
          imageUrl: require('~/assets/images/about/frank-valensco.jpeg'),
          name: 'Frank Valensco',
          position: 'Co-Founder & Head of Product',
          description:
            'Head of Product at Saastronautics. CEO and Co-founder of Sekawan Solution, a Creative IT Company based in Jakarta, Indonesia. Have been working on developing solutions and products for the last 7 years to help clients grow their business.'
        },
        {
          imageUrl: require('~/assets/images/about/gerard-brand.jpeg'),
          name: 'Gerard Brand',
          position: 'Head of Design',
          description:
            'Head of Design at Saastronautics. Gerard has over 10 years of experience in graphic design and videography. He won first place in the GO VIDEO national competition by Gojek for the Best Video Documentary award.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
