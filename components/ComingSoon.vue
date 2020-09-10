<template>
  <div>
    <div class="product-image mb-3">
      <img src="~/assets/images/saastrobot-comingsoon-01.png" alt="comingsoon" />
    </div>
    <div class="mb-3">
      <span class="badge badge-info text-uppercase p-2">
        coming soon
      </span>
    </div>
    <h6 class="font-weight-bold">Product Coming Soon</h6>
    <rating size="sm" space="mr-1" class="mb-5" />
    <a href onclick="return false;">Learn More &#8594;</a>
  </div>
</template>
        
<script>
export default {
  // props: ['comingsoon'],
  data() {
    return {
    }
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
      max-width: 70% !important;
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
@media (max-width: 768px) {
  .flickity-viewport {
    height: auto !important;
  }
  .feedback .comment .comment-item {
    width: 80%;
  }
}
</style>
