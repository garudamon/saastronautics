<template>
  <div class="container review-question pb-5">
    <div class="row">
      <div class="col-12 pt-5 mt-0 mt-md-5 px-0 font-weight-bold">
        <ul class="nav nav-tabs border-none">
          <li class="nav-item">
            <a
              :class="{
                'nav-link py-4 px-5': true,
                active: active == 'reviews'
              }"
              @click="
                () => {
                  active = 'reviews'
                  return false
                }
              "
            >Reviews</a>
          </li>
          <li class="nav-item">
            <a
              :class="{
                'nav-link py-4 px-5': true,
                active: active == 'question'
              }"
              @click="
                () => {
                  active = 'question'
                  return false
                }
              "
            >Question</a>
          </li>
        </ul>
      </div>
      <div class="col-12 p-5 post-comment">
        <div :class="{ active: active == 'reviews' }">
          <LazyReviewQuestionPost key="reviews" :product="product" />
          <h2 class="font-weight-bold my-5">Recent Reviews</h2>
          <LazyCommentItem key="reviews-items" class="mt-3" :product="product" />
        </div>
        <div :class="{ active: active == 'question' }">
          <LazyReviewQuestionPost :question="true" key="question" :product="product" />
          <h2 class="font-weight-bold my-5">Recent Questions</h2>
          <LazyCommentItem class="mt-3" :question="true" key="question-items" :product="product" />
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
    active: 'reviews'
  })
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
}
</style>
