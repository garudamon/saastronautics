<template>
  <div
    class="row img-p-sbs py-5 d-flex align-items-center px-md-4 my-5"
    v-if="rtl"
  >
    <div class="col-12 col-md-6 pr-0 pr-md-5">
      <h1 class="mb-4" v-if="typeof title == 'object'">
        <div class="title-1" v-for="text in title" :key="text">{{ text }}</div>
      </h1>
      <h1 class="title-1 mb-4" v-else>{{ title }}</h1>
      <p v-for="(text, i) in descriptions" :key="i">{{ text }}</p>
    </div>
    <div class="col-12 col-md-6 text-right" >
      <video-embed :src="videoUrl" v-if="videoUrl" />
      <img :src="imageUrl" :alt="title" data-aos="fade-left" data-aos-duration="1000" v-else />
    </div>
  </div>
  <div class="row img-p-sbs py-5 d-flex align-items-center px-md-4 my-5" v-else>
    <div class="col-12 col-md-6">
      <video-embed :src="videoUrl" v-if="videoUrl" />
      <img :src="imageUrl" :alt="title" data-aos="fade-right" data-aos-duration="1000" v-else />
    </div>
    <div class="col-12 col-md-6">
      <h1 class="mb-4" v-if="typeof title == 'object'">
        <div class="title-1" v-for="text in title" :key="text">{{ text }}</div>
      </h1>
      <h1 class="title-1 mb-4" v-else>{{ title }}</h1>
      <p v-for="(text, i) in descriptions" :key="i">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imageUrl', 'title', 'descriptions', 'rtl', 'videoUrl', "fadetype"],
}
</script>

<style></style>
