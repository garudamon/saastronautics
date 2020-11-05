<template>
  <div class="comment">
    <div class="d-flex" v-for="(item, idx) in content" :key="item.id">
      <div class="d-none d-md-block pr-2 avatar">
        <img :src="$getProfile(item.customer.id)" alt="Profile Photo" />
      </div>
      <div class="flex-grow-1">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="title-1 m-0">{{ item.customer.firstName }}</h5>
          <LazyRating size="sm" v-if="!question" :value="item.star" />
        </div>
        <p class="sub">{{ $formattedDate(item.createdAt) }} | Member Since: {{ $formattedDate(item.customer.createdAt) }}</p>
        <p class v-html="item.description" v-if="question" />
        <p class v-html="item.review" v-else />
        <div class="reply mt-3">
          <template v-if="item.replyItems.length > 0">
            <h6 class="my-4 show-replies" @click="toggleShowReply(idx)">
              <span class="font-weight-bold">REPLIES</span>
              <span class="font-weight-light">({{item.replyItems.length}})</span>
              <span
                :class="{'fa':true, 'fa-angle-down':!item.showReply, 'fa-angle-up':item.showReply}"
              ></span>
            </h6>
            <div
              class="d-flex mb-3"
              v-for="reply in item.replyItems.slice(0, item.showReply?item.replyItems.length:3)"
              :key="reply.id"
            >
              <div class="d-none d-md-block pr-2 avatar">
                <img
                  :src="$getProfile(reply.customer.id)"
                  alt="Profile Photo"
                />
              </div>
              <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="font-weight-bold m-0">{{reply.customer.firstName}}</h5>
                </div>
                <p>{{$formattedDate(reply.createdAt)}}</p>
                <p class>{{reply.reply}}</p>
              </div>
            </div>
          </template>
          <div class="row mb-3" v-if="isLogin">
            <div class="col">
              <input
                type="email"
                class="form-control form-round form-gray border-0 px-3"
                placeholder="Type your reply here..."
                v-model="content[idx].textReply"
              />
            </div>
            <div :class="{'px-0':true, 'col-1': isLogin, 'col-2': !isLogin}">
              <button
                type="button"
                class="btn btn-primary btn-md px-4"
                @click="submitReply(idx)"
                v-if="isLogin"
              >Reply</button>
              <nuxt-link v-else to="/auth/signin" class="btn btn-primary">Login To Reply</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CommentItem',
  props: {
    question: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array
    },
    afterPost: {
      type: Function
    }
  },
  data: () => ({
    content: []
  }),
  computed: {
    ...mapState(['isLogin', 'profile'])
  },
  watch: {
    items: {
      handler(val) {
        this.content = [...val]
      },
      deep: true
    }
  },
  mounted() {
    let tmp = this.items.map(v => ({ ...v, textReply: '', showReply: false }))
    this.content = [...tmp]
  },
  methods: {
    toggleShowReply(idx) {
      let temp = this.content
      temp[idx].showReply = !temp[idx].showReply
      this.content = [...temp]
    },
    submitReply(idx) {
      let me = this
      if (this.content[idx].textReply.trim() != '') {
        let param = {
          productReviewID: this.content[idx].id,
          reply: this.content[idx].textReply.trim()
        }
        if (this.question) {
          param = {
            productQuestionID: this.content[idx].id,
            reply: this.content[idx].textReply.trim()
          }
        }
        this.$axios
          .post(
            `/product/${this.question ? 'question' : 'review'}/reply/`,
            param
          )
          .then(res => {
            let {
              data: { success, data, message }
            } = res
            if (success) {
              this.$swal('Success', message, 'success').then(() => {
                ;(me.content[idx].replyItems = [
                  ...me.content[idx].replyItems,
                  {
                    id: data,
                    customer: me.profile.customer,
                    reply: me.content[idx].textReply,
                    createdAt: new Date().toISOString()
                  }
                ]),
                  (me.content[idx].textReply = '')
              })
            } else {
              this.$swal('Failed', message, 'error')
            }
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  .avatar {
    min-width: 55px;
    img {
      border-radius: 5px;
      width: 45px;
    }
  }
  .fa-angle-down,
  .fa-angle-up {
    color: var(--primary-color-red);
  }
  .show-replies {
    cursor: pointer;
  }
  .sub {
    font-size: 12px;
    color: #8c8c8c;
  }
  p {
    margin-bottom: 0px;
  }
}
</style>
