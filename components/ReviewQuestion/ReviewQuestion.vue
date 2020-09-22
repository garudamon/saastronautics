<template>
  <div class="container review-question pb-5">
    <div class="row">
      <div class="col-12 pt-5 mt-0 mt-md-5 px-0 font-weight-bold">
        <ul class="nav nav-tabs border-none">
          <li class="nav-item">
            <a
              :class="{
                'title-1 nav-link py-4 px-5': true,
                active: active == 'review'
              }"
              @click="
                () => {
                  active = 'review'
                  return false
                }
              "
              >Reviews</a
            >
          </li>
          <li class="nav-item">
            <a
              :class="{
                'title-1 nav-link py-4 px-5': true,
                active: active == 'question'
              }"
              @click="
                () => {
                  active = 'question'
                  return false
                }
              "
              >Questions</a
            >
          </li>
        </ul>
      </div>
      <div class="col-12 p-5 post-comment">
        <div :class="{ active: active == 'review' }">
          <LazyReviewQuestionPost
            key="review"
            :product="product"
            :afterPost="() => fetchData('review')"
          />
          <h2 class="title-1 my-5">Recent Review</h2>
          <LazyCommentItem
            :items="items['review']"
            key="review-items"
            class="mt-3"
          />
        </div>
        <div :class="{ active: active == 'question' }">
          <LazyReviewQuestionPost
            :question="true"
            key="question"
            :product="product"
            :afterPost="() => fetchData('question')"
          />
          <h2 class="title-1 my-5">Recent Questions</h2>
          <LazyCommentItem
            :items="items['question']"
            class="mt-3"
            :question="true"
            key="question-items"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewQuestion',
  props: ['product'],
  data: () => ({
    active: 'review',
    items: {
      review: [],
      question: []
    }
  }),
  mounted() {
    this.fetchData('review')
    this.fetchData('question')
  },
  methods: {
    fetchData(uri) {
      if (typeof this.product.id != 'undefined') {
        this.$axios
          .get(`/product/${uri}/product/${this.product.id}`)
          .then(response => {
            let {
              data: { data, success }
            } = response
            if (success) {
              console.log(uri, data)
              if (data != null) {
                let temp = this.items
                temp[`${uri}`] = [...data]
                this.items = { ...temp }
              }
            }
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.post-comment {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
  border-radius: 10px;
  > div {
    display: none;
    &.active {
      display: block;
    }
  }
}
.nav-link {
  cursor: pointer;
  letter-spacing: 1px;
  font-weight: normal;
}
</style>
