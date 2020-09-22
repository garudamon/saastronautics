<template>
  <div>
    <LazyDashboardTopBar />
    <div class="row py-5">
      <div class="col-12 col-md-4" v-for="item in items" :key="item.header">
        <div class="item py-5 px-3 d-flex flex-column justify-content-center align-items-center">
          <img :src="item.image" :alt="item.header" />
          <h5 class="gordita-bold text-capitalize pt-4">{{item.header}}</h5>
          <p class="text-center">{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'account',
  data() {
    return {
      items: [
        {
          image: require('~/assets/images/analytic.svg'),
          header: 'profile setting',
          desc: 'Lorem ipsum dolor sit amet consectetur'
        },
        {
          image: require('~/assets/images/disk.svg'),
          header: 'my deals',
          desc: 'Lorem ipsum dolor sit amet consectetur'
        },
        {
          image: require('~/assets/images/nfc-card.svg'),
          header: 'payment setting',
          desc: 'Lorem ipsum dolor sit amet consectetur'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
h5 {
  letter-spacing: 1px;
}
.item {
  border-radius: 20px;
  border: thin solid rgba($color: #bdbdbd, $alpha: 0.3);
  background: white;
  cursor: pointer;
  transition: all 500ms;
  &:hover {
    transform: translateY(-10px);
  }
}
</style>
