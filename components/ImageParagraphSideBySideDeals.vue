<template>
  <div
    class="row img-p-sbs py-md-3 d-flex align-items-center px-md-4 mb-5 mt-md-3"
    v-if="rtl"
  >
    <div
      class="col-12 col-md-6 pr-0 pr-md-5 pt-md-0 pt-3 order-last order-md-first"
    >
      <h1 class="mb-4" v-if="typeof title == 'object'">
        <div class="title-1" v-for="text in title" :key="text">{{ text }}</div>
      </h1>
      <h1 class="title-1 mb-4" v-else>{{ title }}</h1>
      <div v-html="text" v-for="(text, i) in descriptions" :key="i"></div>
    </div>
    <div class="col-12 col-md-6 text-center text-md-right pt-md-0 pt-3 order-first aos">
      <video-embed :src="videoUrl" v-if="videoUrl" />
      <VuePureLightbox
        :thumbnail="imageUrl"
        :images="[imageUrl]"
        :alternate-text="title"
        v-else
      ></VuePureLightbox>
    </div>
  </div>
  <div
    class="row img-p-sbs py-md-3 d-flex align-items-center px-md-4 mb-5 mt-md-3"
    v-else
  >
    <div class="col-12 col-md-6 pt-md-0 pt-3 aos">
      <video-embed :src="videoUrl" v-if="videoUrl" />
      <VuePureLightbox
        :thumbnail="imageUrl"
        :images="[imageUrl]"
        :alternate-text="title"
        v-else
      ></VuePureLightbox>
    </div>
    <div class="col-12 col-md-6 pt-md-0 pt-3">
      <h1 class="mb-4" v-if="typeof title == 'object'">
        <div class="title-1" v-for="text in title" :key="text">{{ text }}</div>
      </h1>
      <h1 class="title-1 mb-4" v-else>{{ title }}</h1>
      <div v-html="text" v-for="(text, i) in descriptions" :key="i"></div>
    </div>
  </div>
</template>

<script>
import VuePureLightbox from 'vue-pure-lightbox'
import styles from 'vue-pure-lightbox/dist/VuePureLightbox.css'

export default {
  components: {
    VuePureLightbox
  },
  props: ['imageUrl', 'title', 'descriptions', 'rtl', 'videoUrl', 'fadeType']
}
</script>

<style lang="scss" scoped>
.aos {
  overflow-x: hidden;
}
</style>

<style>
.lightbox__image img {
  padding: 3.5vmax
}
</style>
