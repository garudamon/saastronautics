<template>
  <div v-if="liveDealsDetail">
    <div class="container">
      <!-- lead -->
      <div class="row">
        <div class="col-12 col-md-11 mx-auto text-center">
          <Rating :value="liveDealsDetail.rating" />
          <h6 class="mb-4 mt-5">
            <span
              class="badge badge-primary text-uppercase mx-2 py-2 px-3"
              v-for="tag in liveDealsDetail.productTagMaster"
              :key="tag.id"
              >{{ tag.tagMaster && tag.tagMaster.name }}</span
            >
          </h6>

          <h1 class="display-4 font-weight-bold d-none d-md-block">
            {{ liveDealsDetail.name }}
          </h1>
          <h1 class="display-5 font-weight-normal d-block d-md-none">
            {{ liveDealsDetail.name }}
          </h1>
        </div>
        <div class="col-12 col-md-10 mx-auto text-center">
          <p class="px-md-4 py-4">
            {{ liveDealsDetail.longDescription }}
          </p>
        </div>
        <div class="col-12 col-md-9 mx-auto py-4 text-center hero-image">
          <img
            :src="$getImage(liveDealsDetail.id)"
            :alt="`Overview ${liveDealsDetail.name}`"
          />
        </div>
      </div>
      <div class="row pt-5">
        <div
          class="col-12 col-md-6 mb-4"
          v-for="feature in liveDealsDetail.productTLDRMaster"
          :key="feature.id"
        >
          <LazyKeyFeature :description="feature.description" />
        </div>
      </div>
      <LazyImageParagraphSideBySide
        title="Lorem Ipsum Dolor Sit Amet Adispiscing"
        :imageUrl="image1"
        :descriptions="[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste na tus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        ]"
      />
      <LazyImageParagraphSideBySide
        :rtl="true"
        title="Sit Amet Adispiscing Lorem Ipsum Dolor "
        :imageUrl="image2"
        :descriptions="[
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste na tus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        ]"
      />
    </div>
    <LazyPricingTable
      :pricingList="liveDealsDetail.productPriceMaster"
      :desc="liveDealsDetail.shortDescription"
    />
    <LazyReviewQuestion />
    <LazySubscribePanel />
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
      image1: require('~/assets/images/we-do.png'),
      image2: require('~/assets/images/partners/technology-is.png'),
      productdetail: {
        category: ['lead generation', 'marketing', 'sales'],
        name: 'Product Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        overviewImage: require('~/assets/images/detail/overview-image.png'),
        keyFeature: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor exercitation ullamco laboris nisi ut aliquip ex ea commodo',
          'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
          'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
          'U do nt exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat exercitation ullamco laboris nisi ut aliquip ex ea commodo'
        ]
      },
      liveDealsDetail: {}
    }
  },
  async fetch() {
    this.getDetail()
  },
  mounted() {},
  methods: {
    getDetail() {
      if (typeof this.$route.params.id != 'undefined') {
        this.$axios
          .get(`/product/detail/${this.$route.params.id}`)
          .then(response => {
            let {
              data: { success, data }
            } = response
            if (success) this.liveDealsDetail = { ...data }
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
</style>
