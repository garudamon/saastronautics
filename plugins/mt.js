export default ({ app }) => {
  /*
   ** Only run on client-side and only in production mode
   */
  if (process.env.NODE_ENV !== 'production') return
  ;(function(w, d, t, u, n, a, m) {
    w['MauticTrackingObject'] = n
    ;(w[n] =
      w[n] ||
      function() {
        ;(w[n].q = w[n].q || []).push(arguments)
      }),
      (a = d.createElement(t)),
      (m = d.getElementsByTagName(t)[0])
    a.async = 1
    a.src = u
    m.parentNode.insertBefore(a, m)
  })(
    window,
    document,
    'script',
    'https://mail.saastronautics.com/mautic/mtc.js',
    'mt'
  )

  app.router.afterEach(() => {
    mt('send', 'pageview')
  })
}
