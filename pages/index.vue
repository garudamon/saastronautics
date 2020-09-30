<template>
  <div>
    <div class="container">
      <!-- lead -->
      <div class="row">
        <div class="col-12 col-md-11 mx-auto text-center">
          <h1 class="title-1 display-5 font-weight-normal d-none d-md-block">
            Launch Your Workflow into Hyperspace with
            <span class="text-red title-1">Saastronautics</span>
          </h1>
          <h1 class="display-5 font-weight-normal d-block d-md-none">
            Launch Your Workflow into Hyperspace with
            <span
              class="text-red title-1 font-weight-bold"
            >Saastronautics</span>
          </h1>
        </div>
        <div class="col-12 col-md-10 mx-auto text-center">
          <p class="px-md-4 py-4">
            Join our online community of entrepreneurs and digital marketers to
            receive the best deals on software solutions designed to grow your
            business.
          </p>
        </div>
        <div class="col-12 col-md-5 mx-auto">
          <form class="row" @submit="subscribe">
            <div class="col-8">
              <input
                type="email"
                :class="{
                  'form-control form-round form-gray border-0 px-3': true,
                  error: error.email ? true : false
                }"
                placeholder="Enter your email address"
                v-model="email"
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
          <img src="~/assets/images/homepage.svg" alt="Hero Image" />
        </div>
      </div>
      <!-- main feature -->
      <div class="row features px-md-4 py-5">
        <div class="col-12 py-5">
          <h1 class="title-1 text-center">What Can You Do with Saastronautics?</h1>
        </div>
        <div class="col-12 col-md-4 text-left px-4" v-for="item in features" :key="item.title">
          <img :src="item.image" :alt="item.title" />
          <h5 class="title-2 text-capitalize font-weight-bold py-4">{{ item.title }}</h5>
          <p class="py-0">{{ item.description }}</p>
        </div>
      </div>
      <!-- what we do -->
      <ImageParagraphSideBySide
        :imageUrl="imageWhatWeDo"
        title="What We Do?"
        :descriptions="[
          'Saastronautics gives SaaS tool developers and organizations a platform to promote their tech solutions to early adopters.',
          'We provide the support in selecting, executing, and reviewing the SaaS tools on our platform. You get real-world feedback from our user base, allowing you to make adjustments to your tools to meet your customers’ expectations.'
        ]"
        fadeType = "fade-right"
      />
    </div>
    <!-- why we're different -->
    <LazyFeatureGray title="Why We Are Different?" :items="why" />
    <!-- customer feedback -->
    <LazyCustomerFeedback :feedback="feedback" />
    <!-- best selling -->
    <LazyBestSellingDeals />
    <!-- <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="title-2 font-weight-bold mb-4">Best Selling Deals</h1>
        </div>
        <div class="col-12 col-md-10 mx-auto text-center graphik-reg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud exercitation ullamco.
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div
          class="col-12 col-md-4 product mb-5 px-4 pb-3"
          v-for="item in bestSellingProduct"
          :key="item.id"
        >
          <div class="product-image mb-3">
            <a :href="'/' + item.productMaster.uniqName">
              <img :src="$getImage(item.productMaster.id)" :alt="item.name" />
            </a>
          </div>
          <div class="mb-4">
            <span
              class="badge badge-info text-uppercase mx-1 py-2 px-3"
              v-for="tag in item.productMaster.productTagMaster"
              :key="tag.id"
            >{{ tag.tagMaster && tag.tagMaster.name }}</span>
          </div>
          <div class="title-link">
            <a :href="'/' + item.productMaster.uniqName">
              <h5 class="maison-demi font-weight-bold">{{ item.productMaster.name }}</h5>
            </a>
          </div>
          <rating size="sm" space="mr-1" class="mb-3" :value="item.rating" />
          <div class="price row mb-5">
            <div class="col-2 active-price font-weight-bold">
              <span>${{ item.productMaster.activePrice }}</span>
            </div>
            <div class="col inactive-price">
              <span>${{ item.productMaster.inActivePrice }}</span>
            </div>
          </div>
          <nuxt-link class="maison-demi" :to="`/${item.productMaster.uniqName}`">Learn More &#8594;</nuxt-link>
        </div>
        <div
          v-for="n in (6 - this.bestSellingProduct.length)"
          :key="n"
          class="col-12 col-md-4 product mb-5 px-4 pb-3"
        >
          <LazyComingSoon />
        </div>
      </div>
    </div> -->
    <!-- subscribe -->
    <LazySubscribePanel />
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
      ],
      imageWhatWeDo: require('~/assets/images/we-do.png'),
      email: '',
      error: {},
      bestSellingProduct: []
    }
  },
  components: {},
  watch: {
    email: function(val) {
      if (!this.validEmail(val))
        this.error = { ...this.error, email: 'Email not valid' }
      else delete this.error['email']
    }
  },
  mounted() {
    this.loadBestSellingProduct()
    if (this.$route.query.aff) {
      this.$affiliateSet(this.$route.query.aff)
    }
  },
  methods: {
    loadBestSellingProduct() {
      this.$axios.get('/product/bestselling/all?limit=6').then(response => {
        let {
          data: { data, success }
        } = response
        if (success) {
          this.bestSellingProduct = [...data]
        }
      })
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    subscribe(e) {
      e.preventDefault()
      if (!this.validEmail(this.email)) {
        this.error = { ...this.error, email: 'Email not valid' }
      } else {
        this.$axios
          .post('/emailcommunity/insert/', { email: this.email })
          .then(response => {
            if (response.data.success) {
              this.email = ''
              this.$swal(
                'Welcome to our community!',
                `${response.data.message}`,
                'success'
              )
            } else {
              this.$swal('Ooh dude!', `${response.data.message}`, 'error')
            }
          })
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  img {
    width: 100%;
  }
}
.features {
  img {
    height: 70px;
     border-radius: 10px;
  }
}

.product {
  transition: all 500ms;
  &:hover {
    transform: translateY(-10px);
  }
  .product-image {
    overflow: hidden;
    height: 215px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    img {
      max-width: 100% !important;
      border-radius: 5px;
    }
  }
  .title-link {
    a {
      color: black;
      &:hover {
        color: var(--primary-color-purple);
        text-decoration: none;
      }
    }
  }
  a {
    color: #ff4370;
    &:hover {
      text-decoration: underline;
    }
  }
  .badge-info {
    border-radius: 5px;
    background-color: #12e3ff;
  }
}
@media (max-width: 768px) {
  .flickity-viewport {
    height: auto !important;
  }
  .feedback .comment .comment-item {
    width: 80%;
  }
}
</style>
