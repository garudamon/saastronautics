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
            <img :src="$getStaticImage(item.image)" :alt="item.title" />
          </div>
          <p class="py-0">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <div class="container mt-5 pt-5">
      <div class="row text-center">
        <div class="col-12 mb-5 text-center">
          <h1 class="title-1 mb-3">Affiliate Commission Structure</h1>
          <hr class="solid mb-5" width="10%" />
          <p>
            Earn a 25% commission on each and every sale attributed to your
            unique affiliate link. Earn unlimited income as we have no limits or
            caps on how much you can earn through our affiliate program.
          </p>
        </div>
      </div>
      <div class="row text-center py-5 mt-5 justify-content-around awesome-row">
        <div class="col-12 mb-5 text-center">
          <h1 class="title-1 mb-4">
            Are you the right fit for Saastronautics?
          </h1>
          <hr class="solid" width="10%" />
        </div>
        <p>
          Regardless of whether you are an experienced affiliate marketer or a
          total beginner, as long as you are a true Saastronaut, you can apply
          to become a Saastronautics affiliate. Saastronautics will help you
          with your affiliate marketing journey by onboarding you and providing
          strategies and content for you to get a jumpstart.
        </p>
        <p>
          Our affiliate applications are open to everyone, but there is a
          vetting process. We look to see you have an audience of entrepreneurs,
          business owners, agency owners, digital marketers, freelancers,
          designers, and/or consultants. So, if you’re a true Saastronaut and
          you love the deals we bring and can promote to your audience, sign up
          for our affiliate program today!
        </p>
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