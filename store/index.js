export const state = () => ({
  isLogin: false,
  _token: ''
})

export const mutations = {
  setLogin(state, payload) {
    state.isLogin = payload
  }
}
