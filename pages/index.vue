<template>
  <div>
    <div class="container">
      <!-- lead -->
      <div class="row">
        <div class="col-12 col-md-11 mx-auto text-center">
          <h1 class="display-4 font-weight-normal">
            Launch Your Workflow into Hyperspace with
            <span class="text-danger">Saastronautics</span>
          </h1>
        </div>
        <div class="col-12 col-md-10 mx-auto text-center">
          <p
            class="px-md-4 py-4"
          >Join our online community of entrepreneurs and digital marketers to receive the best deals on software solutions designed to grow your business.</p>
        </div>
        <div class="col-12 col-md-5 mx-auto">
          <form class="row">
            <div class="col-8">
              <input
                type="password"
                class="form-control form-round border-0 px-3"
                placeholder="Enter your email address"
              />
            </div>
            <div class="col px-0">
              <button type="submit" class="btn btn-primary btn-md px-4">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <!-- hero image -->
      <div class="row hero">
        <div class="col-12 text-center pt-5 pb-4">
          <img src="~/assets/images/hero-image.png" alt="Hero Image" />
        </div>
      </div>
      <!-- main feature -->
      <div class="row features px-md-4 py-5">
        <div class="col-12 py-5">
          <h2 class="text-center font-weight-bold">What Can You Do with Saastronautics?</h2>
        </div>
        <div class="col-12 col-md-4 text-left px-4" v-for="item in features" :key="item.title">
          <img :src="item.image" :alt="item.title" />
          <h5 class="text-capitalize font-weight-bold py-4">{{item.title}}</h5>
          <p class="py-0">{{item.description}}</p>
        </div>
      </div>
      <!-- what we do -->
      <div class="row what-we-do py-5 d-flex align-items-center px-md-4 my-5">
        <div class="col-12 col-md-6">
          <img src="~/assets/images/we-do.png" alt="We Do" />
        </div>
        <div class="col-12 col-md-6">
          <h2 class="font-weight-bold">What We Do?</h2>
          <p>Saastronautics gives SaaS tool developers and organizations a platform to promote their tech solutions to early adopters.</p>
          <p>We provide the support in selecting, executing, and reviewing the SaaS tools on our platform. You get real-world feedback from our user base, allowing you to make adjustments to your tools to meet your customers’ expectations.</p>
        </div>
      </div>
    </div>
    <!-- why we're different -->
    <div class="why py-5">
      <div class="container">
        <div class="row px-md-4">
          <div class="col-12 mb-5">
            <h2 class="text-center font-weight-bold">Why We Are Different?</h2>
          </div>
          <div class="col-12 col-md-3" v-for="item in why" :key="item.title">
            <img :src="item.image" :alt="item.title" />
            <h5 class="text-capitalize font-weight-bold pt-4 pb-2">{{item.title}}</h5>
            <p class="py-0">{{item.description}}</p>
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
      features: [
        {
          image: require('~/assets/images/main-feature-drive.png'),
          title: 'Drive a digital transformation',
          description:
            'Outdated legacy systems running your company are doing nothing to enhance your employee and customer experience.'
        },
        {
          image: require('~/assets/images/main-feature-optimize.png'),
          title: 'optimize your workflows',
          description:
            'Improve productivity and efficiency with your staff and eliminate bottlenecks and hurdles for your team and customers.'
        },
        {
          image: require('~/assets/images/main-feature-automate.png'),
          title: 'automate your workplace',
          description:
            'Give your employees more time to deal with parts of your business that bring in more revenue and join the digital era'
        }
      ],
      why: [
        {
          image: require('~/assets/images/different-new-deals.png'),
          title: 'Hot New Deals',
          description:
            'We bring you the best deals, and exclusive offers on SaaS tools designed to boost your business.'
        },
        {
          image: require('~/assets/images/different-best-prices.png'),
          title: 'Best Prices',
          description:
            'Save money and take advantage of our exclusive pricing deals on the latest technology solutions.'
        },
        {
          image: require('~/assets/images/different-top-product.png'),
          title: 'Top-Notch Products',
          description:
            'Our products go through a thorough testing phase to ensure that we add value to your business.'
        },
        {
          image: require('~/assets/images/different-satisfaction.png'),
          title: 'Satisfaction Guarantee',
          description:
            'Our 30-day money-back guarantee ensures you get the value you need or you don’t pay.'
        }
      ]
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  img {
    width: 90%;
  }
}
.features {
  img {
    height: 70px;
  }
}
.what-we-do {
  img {
    width: 90%;
  }
}
.why {
  background-color: #f5f4f8;
  img {
    height: 70px;
  }
}
</style>
