<template>
  <div v-if="productMaster.id">
    <div class="container">
      <!-- lead -->
      <div class="row">
        <div class="col-12 col-md-11 mx-auto text-center">
          <Rating :value="productMaster.rating" />
          <h6 class="mb-4 mt-5">
            <span
              class="badge badge-deals text-uppercase mx-2 py-2 px-3"
              v-for="tag in productMaster.productTagMaster"
              :key="tag.id"
              >{{ tag.tagMaster && tag.tagMaster.name }}</span
            >
          </h6>
          <h1 class="title-1 display-md-5 d-none d-md-block">
            {{ productMaster.title }}
          </h1>
          <h1 class="title-1 display-md-5 font-weight-normal d-block d-md-none">
            {{ productMaster.title }}
          </h1>
        </div>
        <div class="col-12 col-md-10 mx-auto text-center">
          <p class="px-md-4 py-1">{{ productMaster.subtitle }}</p>
        </div>
        <div class="col-12 mx-auto py-4 text-center hero-image">
          <img
            :src="$getImage(productMaster.id)"
            :alt="`Overview ${productMaster.name}`"
          />
        </div>
      </div>
      <div class="row">
        <div v-html="productMaster.longDescription" class="px-md-4 py-4"></div>
      </div>
      <div class="row pt-5">
        <div
          class="col-12 col-md-6 mb-4"
          v-for="feature in productMaster.productTLDRMaster"
          :key="feature.id"
        >
          <LazyKeyFeature :description="feature.description" />
        </div>
      </div>
      <LazyVideoEmbedDescription
        :title="productMaster.videoDescription"
        :videoUrl="productMaster.videoURL"
      />
      <LazyImageParagraphSideBySideDeals
        :title="productMaster.title2"
        :imageUrl="$getImageOther(productMaster.id, 2)"
        :descriptions="[productMaster.description2]"
        v-if="productMaster.title2.length > 0"
      />
      <LazyImageParagraphSideBySideDeals
        :rtl="true"
        :title="productMaster.title3"
        :imageUrl="$getImageOther(productMaster.id, 3)"
        :descriptions="[productMaster.description3]"
        v-if="productMaster.title3.length > 0"
      />
      <LazyImageParagraphSideBySideDeals
        :title="productMaster.title4"
        :imageUrl="$getImageOther(productMaster.id, 4)"
        :descriptions="[productMaster.description4]"
        v-if="productMaster.title4.length > 0"
      />
      <LazyImageParagraphSideBySideDeals
        :rtl="true"
        :title="productMaster.title5"
        :imageUrl="$getImageOther(productMaster.id, 5)"
        :descriptions="[productMaster.description5]"
        v-if="productMaster.title5.length > 0"
      />
      <LazyImageParagraphSideBySideDeals
        :title="productMaster.title6"
        :imageUrl="$getImageOther(productMaster.id, 6)"
        :descriptions="[productMaster.description6]"
        v-if="productMaster.title6.length > 0"
      />
      <LazyImageParagraphSideBySideDeals
        :rtl="true"
        :title="productMaster.title7"
        :imageUrl="$getImageOther(productMaster.id, 7)"
        :descriptions="[productMaster.description7]"
        v-if="productMaster.title7.length > 0"
      />
      <!-- Product Expect  -->
      <div class="row product-expect">
        <div class="col-12">
          <p class="px-md-4">{{ productMaster.featureExpect }}</p>
        </div>
        <div
          class="col-12"
          v-for="featureExpectList in productMaster.productFeatureExpectMaster"
          :key="featureExpectList.id"
        >
          <ul>
            <li class="font-weight-bold">
              {{ featureExpectList.title }}
              <p>{{ featureExpectList.description }}</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- Plans and Features -->
      <div class="border-plansfeature"></div>
      <div class="row px-md-4 mb-5 pt-5 plans-feature">
        <div class="col">
          <h1 class="title-1">Plans and Features</h1>
          <h5 class="title-1">Deal Terms</h5>
          <div
            v-for="dealterm in productMaster.productDealMaster"
            :key="dealterm.id"
          >
            <ul>
              <li>{{ dealterm.description }}</li>
            </ul>
          </div>
          <h5 class="title-1">Feature Included in All Plans</h5>
          <div
            v-for="featuresinc in productMaster.productFeatureMaster"
            :key="featuresinc.id"
          >
            <ul>
              <li>{{ featuresinc.description }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <LazyPricingTable :product="productMaster" />
    <LazyReviewQuestion :product="this.productMaster" />
    <div v-if="!isLogin">
      <LazySubscribePanel />
    </div>
    <div v-else class="my-5"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProductDetail',
  data() {
    return {
      image2: require('~/assets/images/partners/partners.svg'),
      // productdetail: {
      //     category: ['lead generation', 'marketing', 'sales'],
      //     name: 'Product Name',
      //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      //     overviewImage: require('~/assets/images/detail/overview-image.png'),
      //     keyFeature: [
      //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor exercitation ullamco laboris nisi ut aliquip ex ea commodo',
      //         'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
      //         'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
      //         'U do nt exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat exercitation ullamco laboris nisi ut aliquip ex ea commodo'
      //     ]
      // },
      productMaster: {}
    }
  },
  head() {
    return {
      titleTemplate: this.productMaster.id
        ? `${this.productMaster.name} - %s`
        : `%s`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.productMaster.longDescription
        }
      ]
    }
  },
  fetch() {
    this.getDetail()
  },
  mounted() {
    /* remark by frank
    if(this.$route.query.aff){
      this.$affiliateSet(this.$route.query.aff)
    }
    */
  },
  computed: {
    ...mapState(['isLogin'])
  },
  methods: {
    getDetail() {
      if (typeof this.$route.params.id != 'undefined') {
        this.$axios
          .get(`/product/unique/${this.$route.params.id}`)
          .then(response => {
            let {
              data: { success, data }
            } = response
            if (success)
              this.productMaster = {
                ...data
              }
              console.log(data);
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-image {
  img {
    border-radius: 20px;
  }
}

.product-expect {
  ul {
    list-style: round !important;
  }
}

.plans-feature {
  ul {
    list-style: none;
  }

  li {
    padding-left: 0.3em;
  }

  li:before {
    content: '\f00c';
    /* FontAwesome Unicode */
    font-family: FontAwesome;
    display: inline-block;
    margin-right: 0.5em;
    margin-left: -1.3em;
    /* same as padding-left set on li */
    width: 1.3em;
    /* same as padding-left set on li */
    color: var(--primary-color-red);
  }
}

.border-plansfeature {
  border-top: 1.7px solid gray;
  margin: 0 1.7em;
}
</style>
