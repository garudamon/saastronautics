<template>
  <div
    class="row img-p-sbs py-5 d-flex align-items-center px-md-4 my-5"
    v-if="rtl"
  >
    <div class="col-12 col-md-6 pr-0 pr-md-5">
      <h2 class="font-weight-bold mb-4" v-if="typeof title == 'object'">
        <div v-for="text in title" :key="text">{{ text }}</div>
      </h2>
      <h2 class="font-weight-bold mb-4" v-else>{{ title }}</h2>
      <p v-for="(text, i) in descriptions" :key="i">{{ text }}</p>
    </div>
    <div class="col-12 col-md-6 text-right">
      <img :src="imageUrl" :alt="title" />
    </div>
  </div>
  <div class="row img-p-sbs py-5 d-flex align-items-center px-md-4 my-5" v-else>
    <div class="col-12 col-md-6">
      <img :src="imageUrl" :alt="title" />
    </div>
    <div class="col-12 col-md-6">
      <h2 class="font-weight-bold mb-4" v-if="typeof title == 'object'">
        <div v-for="text in title" :key="text">{{ text }}</div>
      </h2>
      <h2 class="font-weight-bold mb-4" v-else>{{ title }}</h2>
      <p v-for="(text, i) in descriptions" :key="i">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imageUrl', 'title', 'descriptions', 'rtl']
}
</script>

<style></style>
