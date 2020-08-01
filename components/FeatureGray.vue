<template>
  <div class="gray-feature py-5">
    <div class="container">
      <div class="row px-md-4">
        <div class="col-12 mb-5 text-center">
          <h2 class="font-weight-bold">
            {{ title }}
          </h2>
          <p v-if="description">
            {{ description }}
          </p>
        </div>
        <div class="col-12 col-md" v-for="item in items" :key="item.title">
          <img :src="item.image" :alt="item.title" />
          <h5 class="text-capitalize font-weight-bold pt-4 pb-2">
            {{ item.title }}
          </h5>
          <p class="py-0">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'items']
}
</script>

<style></style>
