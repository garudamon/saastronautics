<template>
  <div>
    <span v-for="i in 5" :key="i" :class="`star ${space}`" @mouseover="hover(i)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.03"
        height="20"
        viewBox="0 0 20.03 20"
        v-if="size == 'sm'"
      >
        <path
          :class="{ trueStar: isTrueStar(i), falseStar: isFalseStar(i) }"
          d="M19.5,7.167l-6.158-.941L10.581.348a.652.652,0,0,0-1.133,0L6.689,6.226.532,7.167A.626.626,0,0,0,.179,8.223l4.473,4.585L3.594,19.29a.626.626,0,0,0,.921.648l5.5-3.04,5.5,3.04a.626.626,0,0,0,.921-.648l-1.057-6.482,4.473-4.585A.626.626,0,0,0,19.5,7.167Z"
          transform="translate(0 -0.019)"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27.343"
        height="27.302"
        viewBox="0 0 27.343 27.302"
        v-else
      >
        <path
          :class="{ trueStar: isTrueStar(i), falseStar: isFalseStar(i) }"
          d="M26.617,9.777,18.212,8.493,14.444.468a.889.889,0,0,0-1.546,0L9.132,8.493.726,9.777a.854.854,0,0,0-.482,1.441L6.35,17.478,4.907,26.327a.855.855,0,0,0,1.257.885l7.508-4.149,7.508,4.15a.855.855,0,0,0,1.257-.885l-1.443-8.849L27.1,11.22a.855.855,0,0,0-.482-1.442Z"
          transform="translate(0 -0.019)"
        />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'md'
    },
    space: {
      type: String,
      default: 'ml-1'
    },
    callback: {
      type: Function,
      default: null
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    give: 0
  }),
  methods: {
    hover(i) {
      if (this.callback != null) {
        this.give = i
        this.callback(this.give)
      }
    },
    isTrueStar(i) {
      if (this.callback == null) return this.value >= i
      else return this.give >= i
    },
    isFalseStar(i) {
      if (this.callback == null) return i > this.value
      else return i > this.give
    }
  }
}
</script>

<style lang="scss" scoped>
.star {
  cursor: pointer;
}
.trueStar {
  fill: #ffd148;
}
.falseStar {
  fill: #999;
}
</style>
