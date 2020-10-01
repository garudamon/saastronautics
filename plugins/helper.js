import Vue from 'vue'
import moment from 'moment'
const Cookie = require('js-cookie')
const Helper = {
  install(Vue) {
    ;(Vue.prototype.$getImage = id => {
      return `${process.env.API_URL}/product/image/banner/${id}`
    }),
      (Vue.prototype.$getProfile = id => {
        return `${process.env.API_URL}/customer/image/profile/${id}`
      }),
      (Vue.prototype.$getImageOther = (id, idx) => {
        return `${process.env.API_URL}/product/image/other/${id}/${idx}`
      }),
      (Vue.prototype.$formattedDate = string => {
        return moment(string).format('MMM DD YYYY')
      }),
      (Vue.prototype.$formattedMoney = number => {
        if (number == null) number = 0
        return '$' + number.toLocaleString()
      }),
      (Vue.prototype.$affiliateSet = referral => {
        let existing = Cookie.get('_ref')
        if (existing != 'undefined') {
          Cookie.set('_ref', referral, {
            expires: 30
          })
        }
      }),
      (Vue.prototype.$affiliateGet = () => {
        let existing = Cookie.get('_ref')
        if (existing != 'undefined') {
          return existing
        } else {
          return ''
        }
      })
  }
}

Vue.use(Helper)
