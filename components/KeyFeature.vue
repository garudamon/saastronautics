<template>
  <div class="d-flex align-items-center class key-feature p-3 h-100">
    <div class="icon">
      <img :src="$getStaticImage('detail/icon-check.png')" alt="Icon Checked" />
    </div>
    <div class="pl-3">{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: ['description']
}
</script>

<style lang="scss" scoped>
.key-feature {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0 0 99px #0000001A;
  border-radius: 5px;
  overflow: hidden;
  .icon {
    img {
      width: 25px;
      max-width: 25px;
    }
  }
}
</style>
