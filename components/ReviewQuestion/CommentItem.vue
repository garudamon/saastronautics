<template>
  <div class="comment">
    <div class="d-flex" v-for="item in items" :key="item.id">
      <div class="d-none d-md-block pr-2 avatar">
        <img src="https://randomuser.me/api/portraits/men/40.jpg" alt="user ava" />
      </div>
      <div class="flex-grow-1">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="font-weight-bold m-0">{{item.customer.firstName}}</h5>
          <LazyRating size="sm" v-if="!question" :value="item.star" />
        </div>
        <p>{{item.createdAt}}</p>
        <p class v-html="item.review" />
        <div class="reply" v-show="false">
          <h6 class="my-4">
            <span class="font-weight-bold">REPLIES</span>
            <span class="font-weight-light">(2)</span>
            <span class="fa fa-angle-up"></span>
          </h6>
          <div class="d-flex mb-3" v-for="i in 3" :key="i">
            <div class="d-none d-md-block pr-2 avatar">
              <img src="https://randomuser.me/api/portraits/men/40.jpg" alt="user ava" />
            </div>
            <div class="flex-grow-1">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="font-weight-bold m-0">Rahul</h5>
              </div>
              <p>17 August 2020</p>
              <p class>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex eas commodo consequat. Duis aute irure dolor
                in repren henderit in voluptate velit esse cillum dolore eu
                fugiat is nulla pariatur. Quis nostrud exercitation ullamco
                laboris nisi ut aliquip. Duisai aute irure dolor in
                reprehenderit in voluptate velit esse cilium dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat nonis
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    question: {
      type: Boolean,
      default: false
    },
    product: {
      type: Object
    }
  },
  data: () => ({
    items: []
  }),
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      let uri = this.question ? 'question' : 'review'
      if (typeof this.product.id != 'undefined') {
        this.$axios
          .get(`/product/${uri}/product/${this.product.id}`)
          .then(response => {
            if (response.data.success) this.items = [...response.data.data]
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
}
</style>
