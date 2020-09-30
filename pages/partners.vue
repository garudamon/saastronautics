<template>
  <div>
    <div class="container">
      <!-- lead -->
      <div class="row">
        <div class="col-12 col-md-10 mx-auto text-center">
          <h1 class="title-1 display-5 font-weight-normal d-none d-md-block">
            Reach More Users by Launching Your SaaS Tools with
            <span class="text-red title-1">Saastronautics</span>
          </h1>
          <h1 class="title-1 display-5 font-weight-normal d-block d-md-none">
            Reach More Users by Launching Your SaaS Tools with
            <span class="text-red title-1">Saastronautics</span>
          </h1>
        </div>
        <div class="col-12 col-md-10 mx-auto text-center">
          <p class="px-md-3 py-4">
            Do you develop SaaS tools to help companies manage their digital
            transformation of the workplace? At Saastronautics, we understand
            that the future of business is automation and digitization.
          </p>
          <nuxt-link class="btn btn-primary btn-lg" to="/partners-apply"
            >Submit Your Product</nuxt-link
          >
        </div>
      </div>
      <!-- what we do -->
      <LazyImageParagraphSideBySide
        :imageUrl="imageTechIs"
        :title="['Technology Is', 'Changing The Way', 'We Do Business']"
        :descriptions="[
          'That\'s why we put together this platform from both developers and end-users. We want to create a platform that adds value to digital marketers, organizations, and developers.',
          'When your organization registers with our partner program, your company gets access to early adopters that provide you with the feedback you need to optimize your SaaS offering.'
        ]"
      />
    </div>
    <!-- What We Offer -->
    <LazyFeatureGray
      title="Here is what you can expect"
      :items="offer"
      size="col-md-4 mb-3 mb-md-5 px-4"
    />

    <LazyCustomerFeedback :feedback="feedback" />

    <LazySubscribePanel />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imageTechIs: require('~/assets/images/partners/partners.jpg'),
      offer: [
        {
          image: require('~/assets/images/partners/expect-1.png'),
          title: `Keep a Larger Share of
<br/>the Sales You Make`,
          description:
            "We want to create an environment of prosperity for all parties. It's for this reason that we want to make our partners feel like they are part of a platform that offers them as much value as the end-user. Saastronautics gives our Partners the lion's share of the sale."
        },
        {
          image: require('~/assets/images/partners/expect-2.png'),
          title: `Get Dedicated Support<br/>and Consultation`,
          description:
            "We'll never leave you alone in the digital environment. With Saastronautics, you get access to a platform, and a team, of SaaS professionals that understand your business. We consult with you on branding issues, marketing strategy, and generating more MRR for your company."
        },
        {
          image: require('~/assets/images/partners/expect-3.png'),
          title: `Leverage the Power of the<br/>Saastronautics Community`,
          description:
            'As a member of the platform, you have access to the Saastronautics community of more than 35,000 digital entrepreneurs.Receive real-world feedback from our user base, allowing you to grow your SaaS offering in line with market expectations.'
        },
        {
          image: require('~/assets/images/partners/expect-4.png'),
          title: `Launch a Live Product on<br/>the Platform`,
          description:
            "When you list your SaaS solution with Saastronautics, it's a live version and not a beta application or program. We expect our partners to launch market-ready SaaS tools that offer real value to our community."
        },
        {
          image: require('~/assets/images/partners/expect-5.png'),
          title: `Present the Right<br/>SaaS Solution`,
          description:
            'We ensure that all of the SaaS tools available on our platform meet the needs of marketers, digital entrepreneurs, and marketing agencies. We vet all of the SaaS tools on our platform to ensure they add value to the community.'
        },
        {
          image: require('~/assets/images/partners/expect-6.png'),
          title: `Benefit from Stability`,
          description:
            "You can expect a massive influx of new users to your product offering. Our platform of stable users is looking for the next SaaS tool that will revolutionize their digital transformation - Do you have a tool that can change the way people do business? We're interested."
        }
      ],
      feedback: [
        {
          name: 'Maharucha',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad miniveniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          rating: 5,
          photo: 'https://api.adorable.io/avatars/200/abott@adorable'
        },
        {
          name: 'Mahardika',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad miniveniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          rating: 4,
          photo: 'https://api.adorable.io/avatars/200/abott@adorable'
        },
        {
          name: 'Alan Abdurrahman',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad miniveniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
          rating: 4.8,
          photo: 'https://api.adorable.io/avatars/200/abott@adorable'
        },
        {
          name: 'Rajj Ibn Abdillah',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad miniveniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          rating: 5,
          photo: 'https://api.adorable.io/avatars/200/abott@adorable'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
