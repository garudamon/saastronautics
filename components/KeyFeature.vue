<template>
  <div class="d-flex align-items-center class key-feature p-3">
    <div class="icon">
      <img src="~/assets/images/detail/icon-check.png" alt="Checked" />
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
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
  border-radius: 10px;
  overflow: hidden;
  .icon {
    img {
      width: 25px;
      max-width: 25px;
    }
  }
}
</style>
