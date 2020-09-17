import Vue from 'vue'
import moment from 'moment'
const Helper = {
  install(Vue) {
    ;(Vue.prototype.$getImage = id => {
      return `${process.env.baseUrl}/product/image/banner/${id}`
    }),
      (Vue.prototype.$getProfile = id => {
        return `${process.env.baseUrl}/customer/image/profile/${id}`
      }),
      (Vue.prototype.$formattedDate = string => {
        return moment(string).format('DD MMMM YYYY')
      }),
      (Vue.prototype.$formattedMoney = number => {
        return '$' + number.toLocaleString()
      })
  }
}

Vue.use(Helper)
