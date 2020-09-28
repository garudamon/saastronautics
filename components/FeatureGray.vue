<template>
  <div class="gray-feature py-5" >
    <div class="container">
      <div class="row px-md-4" >
        <div class="col-12 mb-5 text-center">
          <h1 class="title-1">{{ title }}</h1>
          <p v-if="description">{{ description }}</p>
        </div>
        <div :class="['col-12', size ]" v-for="item in items" :key="item.title" >
          <img :src="item.image" :alt="item.title"  />
          <h5 class="title-2 text-capitalize font-weight-bold pt-4 pb-2" v-html="item.title" />
          <p class="py-0">{{ item.description }}</p>
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

<style></style>
