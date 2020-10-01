<template>
  <div :class="`col-12 ${fluid?'':'col-md-5 card-bg-white'} p-5 text-center`">
    <p class="pt-5">
      <span class="fa fa-3x fa-spinner fa-spin"></span>
    </p>
    <p class="pb-5">Loading...</p>
  </div>
</template>

<script>
export default {
  props: ['fluid']
}
</script>

<style>

</style>