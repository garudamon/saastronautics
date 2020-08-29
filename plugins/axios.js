const Cookie = process.client ? require('js-cookie') : undefined
export default function({ $axios, redirect, store }) {
  let token = ''
  if (Cookie != undefined && Cookie.get('auth') != null)
    token = JSON.parse(Cookie.get('auth'))

  if (token.accessToken) {
    $axios.setHeader('Authorization', `Bearer ${token.accessToken}`)
  }

  $axios.onRequest(config => {
    // if (store.state.auth)
    //   config.headers.common.Authorization =
    //     'Bearer ' + store.state.auth.accessToken
    config.url = `${process.env.API_URL}${config.url}`
  })

  $axios.onError((error, store) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      location.href = '/400'
    }
    if (code === 401) {
      Cookie.remove('auth')
      location.href = '/auth/login'
    }
    if (code === 502) {
      location.href = '/502'
    }
  })
}
