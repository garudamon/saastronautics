export default function({ store, redirect }) {
  // If the user is not authenticated
  if (store.state.isLogin == false) {
    return redirect('/auth/signin')
  }
}
