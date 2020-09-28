<template>
  <div>
    <div class="container">
      <!-- lead -->
      <div class="row">
        <!-- <div class="col-12 col-md-12 mx-auto text-center">
          <h1 class="faq-title font-weight-bold d-md-block">Frequently Asked Questions</h1>
        </div>-->
        <div class="col-6 faq-img">
          <img src="~/assets/images/support/support_robo.svg" alt />
        </div>
        <div class="col-6 faq-title pl-md-2">
          <h1 class="title-1 d-md-block mb-3">Frequently Asked Questions</h1>
          <h2
            class="title-1 d-md-block"
          >We always provide the best service for our customers.</h2>
        </div>
      </div>
      <!-- card FAQ -->
      <div class="row px-4 mb-5">
        <div class="col-12 col-sm-6 mb-5 px-md-3" v-for="item in cardQuestion" :key="item.id">
          <div class="support-card card card-bg-white p-4">
            <div class="card-body graphik-reg">
              <h6 class="card-title font-weight-bold mb-3">{{ item.title }}</h6>
              <p class="card-text">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LazySubscribePanel />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cardQuestion: [
        {
          title: 'Lorem ipsum dolor sit amet adipiscing elit?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit tempora vel sapiente consectetur dicta, quia deserunt exercitationem cupiditate fugiat corporis perspiciatis magnam veniam sit nulla ad ipsam quo laboriosam. Iste, sunt.'
        },
        {
          title: 'Lorem ipsum dolor sit amet adipiscing elit?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit tempora vel sapiente consectetur dicta, quia deserunt exercitationem cupiditate fugiat corporis perspiciatis magnam veniam sit nulla ad ipsam quo laboriosam. Iste, sunt.'
        },
        {
          title: 'Lorem ipsum dolor sit amet adipiscing elit?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit tempora vel sapiente consectetur dicta, quia deserunt exercitationem cupiditate fugiat corporis perspiciatis magnam veniam sit nulla ad ipsam quo laboriosam. Iste, sunt.'
        },
        {
          title: 'Lorem ipsum dolor sit amet adipiscing elit?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit tempora vel sapiente consectetur dicta, quia deserunt exercitationem cupiditate fugiat corporis perspiciatis magnam veniam sit nulla ad ipsam quo laboriosam. Iste, sunt.'
        },
        {
          title: 'Lorem ipsum dolor sit amet adipiscing elit?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit tempora vel sapiente consectetur dicta, quia deserunt exercitationem cupiditate fugiat corporis perspiciatis magnam veniam sit nulla ad ipsam quo laboriosam. Iste, sunt.'
        },
        {
          title: 'Lorem ipsum dolor sit amet adipiscing elit?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit tempora vel sapiente consectetur dicta, quia deserunt exercitationem cupiditate fugiat corporis perspiciatis magnam veniam sit nulla ad ipsam quo laboriosam. Iste, sunt.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.title-1 {
  letter-spacing: 0.9px;
}

.container {
  margin-top: -40px;
}

.faq-title {
  padding-top: 80px;
  h1 {
    font-size: 45px;
  }
  h2 {
    color: #ff4370;
  }
}

.faq-img {
  img {
    width: 90%;
  }
}

.support-card {
  box-shadow: 0px 3px 99px #7a7a7a29;
  border-radius: 10px;
}
</style>
