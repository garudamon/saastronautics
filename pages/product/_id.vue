<template>
  <div v-if="productMaster.id">
    <div class="container">
      <!-- lead -->
      <div class="row">
        <div class="col-12 col-md-11 mx-auto text-center">
          <Rating :value="productMaster.rating" />
          <h6 class="mb-4 mt-5">
            <span
              class="badge badge-primary text-uppercase mx-2 py-2 px-3"
              v-for="tag in productMaster.productTagMaster"
              :key="tag.id"
            >{{ tag.tagMaster && tag.tagMaster.name }}</span>
          </h6>

          <h1 class="display-4 font-weight-bold d-none d-md-block">{{ productMaster.name }}</h1>
          <h1 class="display-5 font-weight-normal d-block d-md-none">{{ productMaster.name }}</h1>
        </div>
        <div class="col-12 col-md-10 mx-auto text-center">
          <p class="px-md-4 py-4">{{ productMaster.longDescription }}</p>
        </div>
        <div class="col-12 col-md-9 mx-auto py-4 text-center hero-image">
          <img :src="$getImage(productMaster.id)" :alt="`Overview ${productMaster.name}`" />
        </div>
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
      <LazyImageParagraphSideBySide
        :title="productMaster.title2"
        :imageUrl="$getImageOther(productMaster.id, 2)"
        :descriptions="[
          productMaster.description2
        ]"
      />
      <LazyImageParagraphSideBySide
        :rtl="true"
        :title="productMaster.title3"
        :imageUrl="$getImageOther(productMaster.id, 3)"
        :descriptions="[
          productMaster.description3
        ]"
      />
      <LazyImageParagraphSideBySide
        :title="productMaster.videoTitle"
        :videoUrl="productMaster.videoURL"
        :descriptions="[
          productMaster.videoDescription
        ]"
      />
    </div>
    <LazyPricingTable :product="productMaster" />
    <LazyReviewQuestion :product="this.productMaster" />
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
            if (success) this.productMaster = { ...data }
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
