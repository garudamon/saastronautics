<template>
  <div>
    <div class="post">
      <textarea rows="13" class="p-3" v-model="comment"></textarea>
      <span class="fa fa-smile-o" @click="showEmoji = !showEmoji"></span>
      <span class="fa fa-paperclip"></span>
      <no-ssr>
        <VEmojiPicker v-if="showEmoji" @select="selectEmoji" />
      </no-ssr>
    </div>
    <div class="d-flex justify-content-between pt-3">
      <button class="btn btn-primary" v-if="isLogin">
        Post your {{ `${question ? 'question' : 'review'}` }}
      </button>
      <nuxt-link v-else to="/auth/signin" class="btn btn-primary">
        Signin first for {{ `${question ? 'question' : 'review'}` }}
      </nuxt-link>
      <div class="d-flex align-items-center" v-if="!question">
        <h6 class="font-weight-bold m-0 pr-2">Rate Our Product</h6>
        <LazyRating size="sm" :callback="() => {}" />
      </div>
    </div>
  </div>
</template>

<script>
import VEmojiPicker from 'v-emoji-picker'
import { mapState } from 'vuex'
export default {
  name: 'ReviewQuestionPost',
  components: {
    VEmojiPicker
  },
  props: {
    question: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    comment: '',
    showEmoji: false
  }),
  computed: {
    ...mapState(['isLogin'])
  },
  methods: {
    selectEmoji(emoji) {
      this.showEmoji = false
      this.comment = `${this.comment} ${emoji.data}`
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  position: relative;
  .fa {
    color: var(--primary-color-red);
    position: absolute;
    right: 2em;
    bottom: 2em;
    cursor: pointer;
    &.fa-smile-o {
      right: 3.5em;
    }
  }
  textarea {
    width: 100% !important;
    border: none;
    background-color: var(--primary-gray-smooth);
    border-radius: 10px;
    resize: none;
    &:focus {
      outline: 0;
    }
  }
  .emoji-picker {
    position: absolute;
    right: 2em;
    top: 2em;
    height: 280px;
  }
}
</style>
