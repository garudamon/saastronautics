<template>
  <div class="container">
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
      <div class="col-12 col-md-4 product mb-5 px-4 pb-3">
        <div class="product-image mb-3">
          <a href="https://saastro.ltd/retargetkit">
            <img src="~/assets/images/saastrobot-comingsoon-02.jpg" alt="Retarget Kit" />
          </a>
        </div>
        <div class="mb-3">
          <span class="badge badge-info text-uppercase mx-1 py-2 px-3">Productivity</span>
        </div>
        <div class="title-link">
          <a href="https://saastro.ltd/retargetkit">
            <h5 class="maison-demi font-weight-bold">Retargetkit</h5>
          </a>
        </div>
        <rating size="sm" space="mr-1" class="mb-3" :value="rating" />
        <div class="price row mb-5">
          <div class="col-2 active-price font-weight-bold">
            <span>$69</span>
          </div>
          <div class="col inactive-price">
            <span>$99</span>
          </div>
        </div>
        <a class="maison-demi" href="https://saastro.ltd/retargetkit">Learn More &#8594;</a>
      </div>
      <div v-for="n in 2" :key="n" class="col-12 col-md-4 product mb-5 px-4 pb-3">
        <LazyComingSoon />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 5
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>