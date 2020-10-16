<template>
  <div class="container">
    <div class="row img-p-sbs pt-2 pb-5 d-flex px-md-4 my-5 header">
      <div class="col-12 col-md-6 pr-0 pr-md-5">
        <span class="badge badge-info text-uppercase p-2">COMING SOON</span>
        <h1 class="title-1 mt-4 mb-1 header-title">Upcoming Product</h1>
        <rating size="sm" space="mr-3" class="my-4" :value="rating" />
        <p>
          Our Exclusive deals and discounts on powerful SaaS tools that will
          help you launch your workflow into hyperspace!
        </p>
        <a
          href="#"
          target="_blank"
          class="btn btn-primary btn-md px-5 mt-1 text-white disabled"
          >Learn More</a
        >
      </div>
      <div class="col-12 col-md-6 text-md-right text-center mt-md-0 mt-5">
        <img
          src="~/assets/images/saastrobot-comingsoon-02.jpg"
          alt="Coming Soon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 0
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