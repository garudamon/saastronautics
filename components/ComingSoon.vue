<template>
  <div>
    <div class="product-image mb-3">
      <img src="~/assets/images/saastrobot-comingsoon-02.jpg" alt="comingsoon" />
    </div>
    <div class="mb-3">
      <span class="badge badge-info text-uppercase p-2">Coming Soon</span>
    </div>
    <div class="title-link">
      <a href="#">
        <h5 class="maison-demi font-weight-bold">Product Name</h5>
      </a>
    </div>
    <rating size="sm" space="mr-1" class="mb-5" />
    <!-- <nuxt-link class="maison-demi" :to="#">Learn More &#8594;</nuxt-link> -->
    <nuxt-link class="maison-demi" :class="!disabled ? 'disabled' : ''" :to="`/`">Learn More &#8594;</nuxt-link>
  </div>
</template>
        
<script>
export default {
  // props: ['comingsoon'],
  data() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.product {
  .product-image {
    overflow: hidden;
    height: 215px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    img {
      max-width: 100% !important;
      border-radius: 5px;
      margin-left: auto;
      margin-right: auto;
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
.title-link {
  a {
    color: black;
    &:hover {
      color: var(--primary-color-purple);
      text-decoration: none;
    }
  }
}
.disabled {
  color: lightgrey;
  pointer-events: none;
}
</style>
