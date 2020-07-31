<template>
  <div>
    <div class="container">
      <!-- lead -->
      <div class="row">
        <div class="col-12 col-md-11 mx-auto text-center">
          <h1 class="display-4 font-weight-normal d-none d-md-block">
            Launch Your Workflow into Hyperspace with
            <span class="text-danger">Saastronautics</span>
          </h1>
          <h1 class="display-5 font-weight-normal d-block d-md-none">
            Launch Your Workflow into Hyperspace with
            <span class="text-danger">Saastronautics</span>
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
          <form class="row">
            <div class="col-8">
              <input
                type="password"
                class="form-control form-round form-gray border-0 px-3"
                placeholder="Enter your email address"
              />
            </div>
            <div class="col px-0">
              <button type="submit" class="btn btn-primary btn-md px-4">
                Submit
              </button>
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
          <h2 class="text-center font-weight-bold">
            What Can You Do with Saastronautics?
          </h2>
        </div>
        <div
          class="col-12 col-md-4 text-left px-4"
          v-for="item in features"
          :key="item.title"
        >
          <img :src="item.image" :alt="item.title" />
          <h5 class="text-capitalize font-weight-bold py-4">
            {{ item.title }}
          </h5>
          <p class="py-0">{{ item.description }}</p>
        </div>
      </div>
      <!-- what we do -->
      <div class="row what-we-do py-5 d-flex align-items-center px-md-4 my-5">
        <div class="col-12 col-md-6">
          <img src="~/assets/images/we-do.png" alt="We Do" />
        </div>
        <div class="col-12 col-md-6">
          <h2 class="font-weight-bold mb-4">What We Do?</h2>
          <p>
            Saastronautics gives SaaS tool developers and organizations a
            platform to promote their tech solutions to early adopters.
          </p>
          <p>
            We provide the support in selecting, executing, and reviewing the
            SaaS tools on our platform. You get real-world feedback from our
            user base, allowing you to make adjustments to your tools to meet
            your customers’ expectations.
          </p>
        </div>
      </div>
    </div>
    <!-- why we're different -->
    <div class="why py-5">
      <div class="container">
        <div class="row px-md-4">
          <div class="col-12 mb-5">
            <h2 class="text-center font-weight-bold">
              Why We Are Different?
            </h2>
          </div>
          <div class="col-12 col-md-3" v-for="item in why" :key="item.title">
            <img :src="item.image" :alt="item.title" />
            <h5 class="text-capitalize font-weight-bold pt-4 pb-2">
              {{ item.title }}
            </h5>
            <p class="py-0">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- customer feedback -->
    <div class="feedback mt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mt-5 pt-5">
            <h2 class="font-weight-bold mb-4">Our Customers Love What We Do</h2>
            <p>
              Our platform offers intelligent, intuitive, and innovative SaaS
              solutions to professionals in all fields
            </p>
          </div>
        </div>
      </div>
      <no-ssr placeholder="Loading...">
        <flickity class="comment py-5 mb-5" :options="flickityOptions">
          <div
            class="comment-item my-5 mx-0 mx-md-5 p-3 p-md-0"
            v-for="item in feedback"
            :key="item.name"
          >
            <div
              class="inner d-flex align-items-center justify-content-center pt-5 px-5"
            >
              <div class="row">
                <div class="col-12">
                  <p class="border-bottom pb-5">{{ item.comment }}</p>
                </div>
                <div
                  class="col-12 d-flex justify-content-between align-items-center pb-md-4"
                >
                  <div class="customer-info pb-3 pb-md-0">
                    <img
                      :src="item.photo"
                      :alt="item.name"
                      class="avatar d-none d-md-inline"
                    />
                    <span class="font-weight-bold pl-2">{{ item.name }}</span>
                  </div>
                  <rating class="d-none d-md-block " />
                </div>
              </div>
            </div>
          </div>
        </flickity>
      </no-ssr>
    </div>
    <!-- best selling -->
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="font-weight-bold mb-4">Best Selling Deals</h2>
        </div>
        <div class="col-12 col-md-8 mx-auto text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud exercitation ullamco.
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div
          class="col-12 col-md-4 product mb-5 px-4 pb-3"
          v-for="item in bestDeals"
          :key="item.id"
        >
          <div class="product-image mb-3">
            <img :src="item.image" :alt="item.name" />
          </div>
          <div class="mb-3">
            <span class="badge badge-info text-uppercase p-2">{{
              item.tag
            }}</span>
          </div>
          <h6 class="font-weight-bold">{{ item.name }}</h6>
          <rating size="sm" space="mr-1" class="mb-5" />
          <nuxt-link :to="`product/detail/${item.id}`"
            >Learn More &#8594;</nuxt-link
          >
        </div>
      </div>
    </div>
    <!-- subscribe -->
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-md-7 mx-auto p-5 subscribe my-5 d-flex align-items-center"
        >
          <div class="row">
            <div class="col-12 col-md-4">
              <img src="~/assets/images/gift-icon.png" alt="Gift Illustrator" />
            </div>
            <div class="col-12 col-md-8 text-center">
              <h3 class="font-weight-bold">
                Sign Up and Launch Your Workflow into Hyperspace!
              </h3>
              <p class="py-2">
                Stay in the loop of the latest innovations to manage and improve
                your digital transformation.
              </p>
              <form class="row d-flex justify-content-center">
                <div class="col-7 pr-0 mr-2">
                  <input
                    type="password"
                    class="form-control form-round border-0 px-3"
                    placeholder="Enter your email address"
                  />
                </div>
                <div class="col-3 px-0">
                  <button type="submit" class="btn btn-primary btn-md px-4">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from '~/components/Rating.vue'
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
      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
      },
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
      bestDeals: [
        {
          image: require('~/assets/dummy/product-capture-1.png'),
          tag: 'coming soon',
          name: 'Product Name',
          id: 'product-id-1'
        },
        {
          image: require('~/assets/dummy/product-capture-2.png'),
          tag: 'coming soon',
          name: 'Product Name',
          id: 'product-id-2'
        },
        {
          image: require('~/assets/dummy/product-capture-3.png'),
          tag: 'coming soon',
          name: 'Product Name',
          id: 'product-id-3'
        },
        {
          image: require('~/assets/dummy/product-capture-4.png'),
          tag: 'coming soon',
          name: 'Product Name',
          id: 'product-id-4'
        },
        {
          image: require('~/assets/dummy/product-capture-5.png'),
          tag: 'coming soon',
          name: 'Product Name',
          id: 'product-id-5'
        },
        {
          image: require('~/assets/dummy/product-capture-6.png'),
          tag: 'coming soon',
          name: 'Product Name',
          id: 'product-id-6'
        }
      ]
    }
  },
  components: {
    Rating
  }
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
.feedback {
  .comment {
    .comment-item {
      width: 65%;
      min-height: 350px;
      .inner {
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
        border-radius: 10px;
        position: relative;
        &:after {
          content: '”';
          display: block;
          position: absolute;
          color: #aee6ff;
          top: 50px;
          font-size: 200px;
          line-height: 0;
          font-weight: 700;
        }
        .customer-info {
          .avatar {
            border-radius: 100%;
            width: 50px;
          }
        }
      }
    }
  }
}
.product {
  .product-image {
    overflow: hidden;
    height: 215px;
    border-radius: 5px;
    img {
      width: 100%;
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
.subscribe {
  background-color: #f5f4f8;
  border-radius: 5px;
  img {
    width: 100%;
  }
  h3 {
    color: #4b028c;
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
