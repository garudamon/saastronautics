const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  isLogin: false,
  _token: ''
})

export const mutations = {
  setLogin(state, payload) {
    state.isLogin = payload
  },
  setToken(state, payload) {
    state._token = payload
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = parsed._token
        if (auth != 'undefined') {
          commit('setLogin', true)
          commit('setToken', auth)
        }
      } catch (err) {
        // No valid cookie found
      }
    }
  }
}
