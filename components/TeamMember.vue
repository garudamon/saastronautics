<template>
  <div class="row" >
    <div class="col-12 col-md-6 mb-5" v-for="item in member" :key="`${item.name}-${item.position}`">
      <div class="h-100 team-member py-3 pt-md-4 mx-md-2 px-3 px-md-4" data-aos="zoom-in" data-aos-duration="1000">
        <div class="row" >
          <div class="col-4 text-center">
            <div>
              <img :src="item.imageUrl" :alt="`${item.name}'s photo`" />
            </div>
          </div>
          <div class="col">
            <h5 class="font-weight-bold mt-3 mb-1">{{ item.name }}</h5>
            <p class="text-red m-0">{{ item.position }}</p>
            <div class="bottom-div">
              <p>
                <a :href="item.twitter" target="_blank">
                  <i class="fa px-3 fa-twitter"></i>
                </a>
                <a :href="item.linkedin" target="_blank">
                  <i class="fa px-3 fa-linkedin"></i>
                </a>
              </p>
            </div>
          </div>
        </div>

        <p class="py-4">{{ item.description }}</p>
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
  box-shadow: 0 3px 50px #7A7A7A29;
  border-radius: 5px;
  img {
    width: 120px;
    border-radius: 100%;
  }
  a {
    color: #ff4370;
  }
  .bottom-div {
    position: absolute;
    top: 5;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    p {
      margin-bottom: 0 !important;
    }
  }
}
</style>
