<template>
  <div>
    <div class="product-image mb-3">
      <img
        :src="$getStaticImage('comingsoon-02.svg')"
        alt="Saastrobot Coming Soon"
      />
    </div>
    <div class="mb-3">
      <span class="badge badge-deals text-uppercase p-2">Coming Soon</span>
    </div>
    <div class="title-link">
      <a href="#" class="disabled">
        <h5 class="maison-demi font-weight-bold">Upcoming Product</h5>
      </a>
    </div>
    <rating size="sm" space="mr-1" class="mb-3" />
    <div class="price row mb-5">
      <div class="col-2 active-price font-weight-bold">
        <span>$0</span>
      </div>
      <div class="col inactive-price">
        <span>$0</span>
      </div>
    </div>
    <nuxt-link class="maison-demi disabled" :to="`/`"
      >Learn More &#8594;</nuxt-link
    >
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
      width: 95%;
      border-radius: 5px;
      box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.33);
    }
  }
  a {
    color: #ff4370;
    &:hover {
      text-decoration: underline;
    }
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
  pointer-events: none;
}
</style>
