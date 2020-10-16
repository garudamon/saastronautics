<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="title-2 font-weight-bold mb-4">Featured Deals</h1>
      </div>
      <div class="col-12 col-md-10 mx-auto text-center graphik-reg">
        <p>
          Don’t miss out on these exclusive deals at an extraordinary low price. 
        </p>
      </div>
    </div>
    <div class="row my-5">
      <div v-for="n in 3" :key="n" class="col-12 col-md-4 product mb-5 px-4 pb-3">
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