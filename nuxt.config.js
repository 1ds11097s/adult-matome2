require('dotenv').config()
const client = require('./plugins/contentful').default

export default {
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: process.env.CTF_BLOG_POST_TYPE_ID
        })
      ]).then(([ posts ]) => {
        return [
          ...posts.items.map(post => {
            return { route: `posts/${post.fields.id}`, payload: post }
          })
        ]
      })
    }
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '最強の痙攣絶頂動画をひたすら紹介！',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'k-oiBMXwq3jjGXakvELq7CpJguVvtthHQOuN0Oqmyow' },
      { 
        hid: 'description', 
      　name: 'description', 
        content: '女性が本能のままにイキまくる痙攣絶頂動画をひたすら紹介しているサイトです。ポルチオ、痙攣、オーガズム、脳イキ、中イキ、Gスポット、クリトリスなど様々なパターンによる快楽でイキまくります。世の中にある痙攣絶頂動画はすべてこのサイトで網羅されています。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    'plugins/contentful',
    {
      src: 'plugins/video',
      mode: 'client'
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/vuetify'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/dotenv'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  env: {
    // contentful
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },
}
