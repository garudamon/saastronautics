<template>
  <div class="white-feature py-5 mb-5">
    <div class="container">
      <div class="row px-md-4 pt-5">
        <div class="col-12 mb-5 text-center">
          <h1 class="title-1">{{ title }}</h1>
          <p v-if="description">{{ description }}</p>
        </div>
        <div
          :class="['col-12', size, 'text-center']"
          v-for="item in items"
          :key="item.title"
        >
          <div class="mb-5">
            <img :src="item.image" :alt="item.title" />
          </div>
          <p class="py-0">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <div class="container mt-5 pt-5">
      <div class="row text-center">
        <div class="col-12 mb-5 text-center">
          <h1 class="title-1 mb-3">Affiliate Commission Structure</h1>
          <hr class="solid mb-5" width="10%">
          <p class="pb-3">
            Earn unlimited income. Up to 100% commission per referral.*
          </p>
          <p>
            Earn 100% on new Saastronautics customer first transactions and 5%
            on sales to existing customers (up to $50/order).
          </p>
        </div>
      </div>
      <div class="row text-center py-5 mt-5 justify-content-around awesome-row">
        <div class="col-12 mb-5 text-center">
          <h1 class="title-1 mb-4">What makes an awesome Support Affiliate?</h1>
          <hr class="solid" width="10%">
        </div>
        <div class="col-5">
            <h3 class="title-1">
              You LOVE Us
            </h3>
            <p>
              You have used and love AppSumo deals and you’re able to
              confidently promote them to your audience.
            </p>
          </div>
          <div class="col-5">
            <h3 class="title-1">
              It's WHO you know
            </h3>
            <p>
              You have an audience of entrepreneurs, bloggers, designers, freelancers, or business consultants
            </p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    description: { type: String },
    items: { type: Array },
    size: { type: String, default: 'col-md' }
  }
}
</script>

<style lang="scss" scoped>
.white-feature {
  background-color: white;
  img {
    height: 125px;
  }
}

.awesome-row {
  padding: 0 3rem;
}
hr.solid {
  margin: 0 auto;
  border-top: 5px solid #ff4370;
}
</style>