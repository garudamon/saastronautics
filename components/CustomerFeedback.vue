<template>
  <div class="feedback mt-5">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mt-5">
          <h1 class="title-2 font-weight-bold mb-4">{{ title }}</h1>
          <div class="row justify-content-center">
            <div class="col-7">
              <p>{{ subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <client-only placeholder="Loading...">
      <flickity class="comment pt-5 pb-3" :options="flickityOptions">
        <div
          class="comment-item my-5 mx-0 mx-md-5 p-3 p-md-0"
          v-for="item in feedback"
          :key="item.name"
        >
          <div
            class="inner d-flex align-items-center justify-content-center pt-3 px-3 pt-md-5 px-md-5"
          >
            <div class="row">
              <div class="col-11">
                <p class="border-bottom pb-5">{{ item.comment }}</p>
              </div>
              <div
                class="col-12 d-flex justify-content-between align-items-center pb-md-4"
              >
                <div class="customer-info pb-3 pb-md-0">
                  <img
                    :src="$getStaticImage(item.photo)"
                    :alt="item.name"
                    class="avatar d-none d-md-inline"
                  />
                  <span class="font-weight-bold pl-md-2">{{ item.name }}</span>
                </div>
                <LazyRating class="d-none d-md-block" :value="item.rating" />
              </div>
            </div>
          </div>
        </div>
      </flickity>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        watchCSS: true
      }
    }
  },
  props: ['feedback', 'title', 'subtitle']
}
</script>

<style lang="scss" scoped>
.feedback {
  .comment {
    .comment-item {
      width: 65%;
      min-height: 350px;
      .inner {
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
        border-radius: 10px;
        position: relative;
        &:after {
          content: '”';
          display: block;
          position: absolute;
          color: #aee6ff;
          top: 50px;
          font-size: 200px;
          line-height: 0;
          font-weight: 700;
        }
        .customer-info {
          .avatar {
            border-radius: 100%;
            width: 50px;
          }
        }
      }
    }
  }
}
.comment:after {
  content: 'flickity';
  display: none;
}

@media (max-width: 768px) {
  .feedback {
    .comment {
      .comment-item {
        width: 100%;
      }
    }
  }
  .comment:after {
    content: '';
  }
}
</style>