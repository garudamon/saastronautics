<template>
  <div>
    <div class="post">
      <textarea
        rows="13"
        class="p-3"
        v-model="comment"
        :readonly="!isLogin"
      ></textarea>
      <span class="fa fa-smile-o" @click="openEmoji"></span>
      <span class="fa fa-paperclip"></span>
      <client-only>
        <VEmojiPicker v-if="showEmoji" @select="selectEmoji" />
      </client-only>
    </div>
    <div class="d-flex justify-content-between pt-3">
      <button class="btn btn-primary" v-if="isLogin" @click="submit">
        Post your {{ `${question ? 'question' : 'review'}` }}
      </button>
      <nuxt-link v-else to="/auth/signin" class="btn btn-primary"
        >Login To Post {{ `${question ? 'question' : 'review'}` }}</nuxt-link
      >
      <div class="d-flex align-items-center" v-if="!question">
        <h6 class="font-weight-bold m-0 pr-2">Rate Our Product</h6>
        <LazyRating
          size="sm"
          :callback="
            i => {
              setStar(i)
            }
          "
        />
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
    },
    product: {
      type: Object
    },
    afterPost: {
      type: Function
    }
  },
  data: () => ({
    comment: '',
    showEmoji: false,
    star: 0
  }),
  computed: {
    ...mapState(['isLogin'])
  },
  methods: {
    selectEmoji(emoji) {
      this.comment = `${this.comment} ${emoji.data}`
    },
    setStar(i) {
      this.star = i
    },
    submit() {
      if (!this.question) {
        this.$axios
          .post('/product/review', {
            productMasterID: this.product.id,
            review: this.comment,
            star: this.star
          })
          .then(response => {
            if (response.data.success) {
              this.comment = ''
              this.afterPost()
              this.$swal('Success!', `${response.data.message}`, 'success')
            }
          })
      } else {
        this.$axios
          .post('/product/question', {
            productMasterID: this.product.id,
            description: this.comment
          })
          .then(response => {
            if (response.data.success) {
              this.comment = ''
              this.afterPost()
              this.$swal('Success!', `${response.data.message}`, 'success')
            }
          })
      }
      return false
    },
    openEmoji() {
      if (this.isLogin) {
        this.showEmoji = !this.showEmoji
      }
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
    bottom: 3.5em;
    height: 280px;
  }
}
</style>
