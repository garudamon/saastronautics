const Cookie = require('js-cookie')
export default function({ store, redirect }) {
  if (store.state.isLogin) {
    return redirect('/account')
  }
}
