<template>
  <div class="row">
    <div
      class="col-12 col-md-6 text-center mb-5"
      v-for="item in member"
      :key="`${item.name}-${item.position}`"
    >
      <div class="h-100 team-member py-3 py-md-4 mx-md-2 px-3 px-md-4">
        <div class="p-3">
          <img :src="item.imageUrl" :alt="`${item.name}'s photo`" />
        </div>
        <p class="font-weight-bold mt-3 mb-0">{{ item.name }}</p>
        <p class="text-uppercase text-red m-0">{{ item.position }}</p>
        <p class="py-4 mb-4">{{ item.description }}</p>
        <div class="bottom-div pb-3">
          <p>
            <a href="#">
              <i class="fa px-3 fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa px-3 fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa px-3 fa-linkedin"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['member']
}
</script>

<style lang="scss" scoped>
.team-member {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
  border-radius: 10px;
  img {
    width: 100px;
    border-radius: 100%;
  }
  a {
    color: #ff4370;
  }
  .bottom-div {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
