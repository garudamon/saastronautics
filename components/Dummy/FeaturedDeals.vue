<template>
  <div class="container">
    <div class="row img-p-sbs pt-2 pb-5 d-flex px-md-4 my-5 header">
      <div class="col-12 col-md-6 pr-0 pr-md-5">
        <span class="badge badge-info text-uppercase p-2">FEATURED DEALS</span>
        <h1 class="title-1 mt-4 mb-1 header-title">Retarget Kit</h1>
        <rating size="sm" space="mr-3" class="my-4" :value="rating" />
        <p>
          RetargetKit is the all-in-one retargeting toolkit for digital
          marketers. Create brand awareness, control social media marketing ads
          and increase sales by retargeting your one-time visitors. Grow social
          verified leads 10x faster. Save time, money & effort.
        </p>
        <a
          href="https://saastro.ltd/retargetkit"
          class="btn btn-primary btn-md px-5 mt-1 text-white"
          >Learn More</a
        >
      </div>
      <div class="col-12 col-md-6 text-md-right text-center mt-md-0 mt-5">
        <img src="~/assets/dummy/product-capture-1.png" alt="Retarget Kit" />
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
.badge-info {
  border-radius: 5px;
  background-color: #12e3ff;
}
</style>