<template>
  <div>
    <div class="container">
      <!-- lead -->
      <div class="row mb-5">
        <div class="col-12 col-md-12 mx-auto text-center">
          <h1 class="faq-title font-weight-bold d-md-block">
            Frequently Asked Questions
          </h1>
        </div>
      </div>
      <!-- card FAQ -->
      <div class="row px-4 mb-5">
        <div class="col-12 col-sm-6 mb-5 px-4" v-for="item in cardQuestion" :key="item.id">
          <div class="card card-bg-white p-4">
            <div class="card-body">
              <h6
                class="card-title font-weight-bold mb-3"
              >{{ item.title }}</h6>
              <p
                class="card-text"
              >{{ item.description }}</p>
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
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.faq-title{
  font-size: 45px;
}
</style>
