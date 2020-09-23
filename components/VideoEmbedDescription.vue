<template>
  <div class="row py-5 d-flex align-items-center px-md-4 mt-3">
    <div class="col-12 pr-0 pr-md-5">
      <h2 class="font-weight-bold mb-4" v-if="typeof title == 'object'">
        <div class="title-1" v-for="text in title" :key="text">{{ text }}</div>
      </h2>
      <h2 class="title-1 mb-4" v-else>{{ title }}</h2>
    </div>
    <div class="col-12 mb-4">
      <video-embed :src="videoUrl" />
    </div>
    <div class="col-12">
      <p v-for="(text, i) in descriptions" :key="i">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'descriptions', 'videoUrl']
}
</script>

<style></style>
