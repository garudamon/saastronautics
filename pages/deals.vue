<template>
  <div>
    <!-- title -->
    <LazyComingSoonDeals />
    <!-- <div class="container" v-if="Object.keys(featuredDeals).length > 0">
      <div class="row img-p-sbs pt-2 pb-5 d-flex px-md-4 my-5 header">
        <div class="col-12 col-md-6 pr-0 pr-md-5">
          <span class="badge badge-deals text-uppercase p-2">FEATURED DEALS</span>
          <h1 class="title-1 mt-4 mb-1 header-title">{{featuredDeals.name}}</h1>
  
          <rating size="sm" space="mr-3" class="my-4" :value="featuredDeals.rating" />
          <p>{{featuredDeals.shortDescription}}</p>
          <nuxt-link :to="`/${featuredDeals.uniqName}`" class="btn btn-primary btn-md px-5 mt-1">Learn More</nuxt-link>
        </div>
        <div class="col-12 col-md-6 text-md-right text-center mt-md-0 mt-5">
          <img :src="$getImage(featuredDeals.id)" />
        </div>
      </div>
    </div>-->
    <!-- live deals -->
    <div class="container">
      <div class="row px-md-4">
        <div class="col-12 offset-md-7 col-md-5 mt-md-2">
          <div class="input-group">
            <input
              type="text"
              class="form-control pl-3"
              placeholder="Search Product"
              v-model="keyword"
              @keyup.enter="loadLiveDealsProduct"
            />
            <div class="input-group-append" @click="loadLiveDealsProduct">
              <span class="input-group-text bg-transparent">
                <i class="fa fa-search"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="col-12 text-center mt-5">
          <h2 class="title-1 mb-4">Live Deals</h2>
        </div>
      </div>
      <div class="row my-5">
        <div
          class="col-12 col-md-4 product mb-5 px-4 pb-3"
          v-for="item in liveDealsProduct"
          :key="item.id"
        >
          <div class="product-image mb-3">
            <a :href="'/' + item.uniqName">
              <img :src="$getImage(item.id)" :alt="item.name" />
            </a>
          </div>
          <div>
            <h6 class="mb-4">
              <span
                class="badge badge-deals text-uppercase mx-1 py-2 px-3"
                v-for="tag in item.productTagMaster"
                :key="tag.id"
                >{{ tag.tagMaster && tag.tagMaster.name }}</span
              >
            </h6>
          </div>
          <div class="title-link">
            <a :href="'/' + item.uniqName">
              <h5 class="maison-demi font-weight-bold">{{ item.name }}</h5>
            </a>
          </div>
          <rating size="sm" space="mr-1" class="mb-3" :value="item.rating" />
          <div class="price row mb-5">
            <div class="col-2 active-price font-weight-bold">
              <span>${{ item.activePrice }}</span>
            </div>
            <div class="col inactive-price">
              <span>${{ item.inActivePrice }}</span>
            </div>
          </div>
          <nuxt-link class="maison-demi" :to="`/${item.uniqName}`"
            >Learn More &#8594;</nuxt-link
          >
        </div>
        <div
          v-for="n in 6 - this.liveDealsProduct.length"
          :key="n"
          class="col-12 col-md-4 product mb-5 px-4 pb-3"
        >
          <LazyComingSoon />
        </div>
      </div>
    </div>
    <!-- subscribe -->
    <div v-if="!isLogin">
      <LazySubscribePanel />
    </div>
    <div v-else class="my-5"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  head: {
      title: 'Deals',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Our Exclusive deals and discounts on powerful SaaS tools that will help you launch your workflow into hyperspace!'
        }
      ],
    },
  name: 'Deals',
  data() {
    return {
      liveDealsProduct: [],
      keyword: ''
    }
  },
  fetch() {
    this.loadLiveDealsProduct()
  },
  computed: {
    featuredDeals: function() {
      if (this.liveDealsProduct.length < 1) return {}
      return this.liveDealsProduct.find(v => v.featuredDeals == true)
    }
  },
  mounted() {
    this.$fetch()
  },
  computed: {
    ...mapState(['isLogin'])
  },
  methods: {
    loadLiveDealsProduct() {
      let url = `/product/all?limit=50&status=1`

      if (this.keyword.trim() != '') url += `&keyword=${this.keyword}`

      this.$axios.get(url).then(response => {
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
      max-width: 99% !important;
      border-radius: 5px;
      box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.33);
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
