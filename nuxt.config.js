export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Saastronautics',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Primary Meta Tags
      { hid: 'title', property: 'title', content: 'Saastronautics | We connect powerful tools with intrepid businesses' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || 'Saastronautics is a launchpad for SaaS startups. Join our community of entrepreneurs and enjoy lifetime deals on SaaS tools that help grow your business.'
      },
      // Open Graph / Facebook
      { hid: 'og:title', property: 'og:title', content: 'Saastronautics | We connect powerful tools with intrepid businesses' },
      { hid: 'og:description', property: 'og:description', content: process.env.npm_package_description || 'Saastronautics is a launchpad for SaaS startups. Join our community of entrepreneurs and enjoy lifetime deals on SaaS tools that help grow your business.' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Saastronautics' },
      { hid: 'og:url', property: 'og:url', content: process.env.BASE_URL },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:email', property: 'og:email', content: 'support@saastronautics.com' },
      { hid: 'og:image', property: 'og:image', content: process.env.BASE_URL + '/images/saastronautics-website-preview.png' },
      // Twitter
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', property: 'twitter:url', content: process.env.BASE_URL },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Saastronautics | We connect powerful tools with intrepid businesses' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'Saastronautics is a launchpad for SaaS startups. Join our community of entrepreneurs and enjoy lifetime deals on SaaS tools that help grow your business.' },
      { hid: 'twitter:image', property: 'twitter:image', content: process.env.BASE_URL + '/images/saastronautics-website-preview.png' },
    ],
    script: [
      {
        src: 'https://cdn.refmonkey.com/refmonkey.js'
      },
      // {
      //   src: 'https://cdn.scaleflex.it/plugins/js-cloudimage-responsive/4.6.1/js-cloudimage-responsive.min.js'
      // },
      {
        src: '/refmonkey.js'
      }
      // {
      //   src: '/cloudimage.js'
      // }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        as: 'style',
        href:
          'https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        integrity:
          'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/bootstrap.min.css', '@/assets/styles/styles.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/ga', ssr: false },
    { src: '~/plugins/pixel', ssr: false },
    { src: '~/plugins/mt', ssr: false },
    { src: '~/plugins/flickity', ssr: false },
    { src: '~/plugins/swal', ssr: false },
    { src: '~/plugins/video-embed', ssr: false },
    { src: '@/plugins/aos', mode: "client", ssr: false },
    '~/plugins/axios',
    '~/plugins/helper'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // DOc: https://github.com/nuxt/components
    '@nuxt/components'
  ],
  components: true,
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
