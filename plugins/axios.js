const Cookie = process.client ? require('js-cookie') : undefined

export default function({ $axios, redirect, store }) {
  let _token = ''
  if (Cookie !== undefined && Cookie.get('_token') != null)
    _token = Cookie.get('_token')

  $axios.onRequest(config => {
    if (store.state._token)
      config.headers['Authorization'] = 'Bearer ' + store.state._token
    config.url = `${process.env.baseUrl}${config.url}`
  })

  $axios.onResponse(response => {
    console.log('response from axios', response)
    let {
      data: { success, message }
    } = response
    console.log('teretttt', success, message)
    if (!success && message == 'Token is invalid') {
      Cookie.remove('_token')
      store.commit('setLogin', false)
      store.commit('setToken', '')
      redirect('/auth/login')
    }
  })

  $axios.onError((error, store) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      location.href = '/400'
    }
    if (code === 401) {
      Cookie.remove('_token')
      location.href = '/auth/login'
    }
    if (code === 502) {
      location.href = '/502'
    }
  })
}
