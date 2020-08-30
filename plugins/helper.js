import Vue from 'vue'
const Helper = {
  install(Vue) {
    Vue.prototype.$getImage = id => {
      return `${process.env.baseUrl}/product/image/banner/${id}`
    }
  }
}

Vue.use(Helper)
