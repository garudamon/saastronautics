export const state = () => ({
  isLogin: false
})

export const mutations = {
  setLogin(state, payload) {
    state.isLogin = payload
  }
}
