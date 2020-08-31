<template>
  <div>
    <!-- title -->
    <div class="container">
      <div class="row img-p-sbs pt-2 pb-5 d-flex px-md-4 my-5 header">
        <div class="col-12 col-md-6 pr-0 pr-md-5">
          <span class="badge badge-info text-uppercase p-2">FEATURED DEALS</span>
          <h1 class="font-weight-bold mt-4 mb-1 header-title">Lorem ipsum dolor</h1>
          <h1 class="font-weight-bold header-subtitle">Sit Amet Consectetur</h1>
          <rating size="sm" space="mr-3" class="my-4" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitse d do eiusmod tempor incididunt ut labore et dolore magil na aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea.</p>
          <button type="submit" class="btn btn-primary btn-md px-5 mt-1">Learn More</button>
        </div>
        <div class="col-12 col-md-6 text-md-right text-center mt-md-0 mt-5">
          <img src="~/assets/dummy/product-capture-7.png" />
        </div>
      </div>
    </div>
    <!-- live deals -->
    <div class="container">
      <div class="row">
        <div class="col-12 offset-md-7 col-md-5 mt-md-2">
          <div class="input-group">
            <input type="text" class="form-control pl-3" placeholder="Search Product" />
            <div class="input-group-append">
              <span class="input-group-text bg-transparent">
                <i class="fa fa-search"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="col-12 text-center mt-5">
          <h2 class="font-weight-bold mb-4">Live Deals</h2>
        </div>
      </div>
      <div class="row mt-5">
        <div
          class="col-12 col-md-4 product mb-5 px-4 pb-3"
          v-for="item in liveDealsProduct"
          :key="item.id"
        >
          <div class="product-image mb-3">
            <img :src="$getImage(item.id)" :alt="item.name" />
          </div>
          <div class="mb-3" v-if="item.productTagMaster">
            <span class="badge badge-info text-uppercase p-2">
              {{
              item.productTagMaster.tagMaster && item.productTagMaster.tagMaster.name
              }}
            </span>
          </div>
          <h6 class="font-weight-bold">{{ item.name }}</h6>
          <rating size="sm" space="mr-1" class="mb-5" :value="item.rating" />
          <nuxt-link :to="`deals-detail/${item.id}`">Learn More &#8594;</nuxt-link>
        </div>
      </div>
    </div>
    <!-- subscribe -->
    <LazySubscribePanel />
  </div>
</template>

<script>
export default {
  data() {
    return {
      liveDealsProduct: []
    }
  },
  mounted() {
    this.loadLiveDealsProduct()
  },
  methods: {
    loadLiveDealsProduct() {
      this.$axios.get('/product/all?limit=6').then(response => {
        let {
          data: { data, success }
        } = response
        if (success) {
          this.liveDealsProduct = [...data]
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  .header-subtitle {
    color: #ff4370;
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
}

.badge-info {
  border-radius: 5px;
  background-color: #12e3ff;
}

.input-group {
  border-radius: 33px;
  background-color: white;
  overflow: hidden;
  border: 1.5px solid gray;
  max-width: 450px;
  input {
    border: none;
    outline: none;
  }
  .input-group-append {
    border: none;
    cursor: pointer;
    .input-group-text {
      border: none;
      .fa {
        color: var(--primary-color-red);
      }
    }
  }
}
</style>
