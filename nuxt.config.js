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
        let postsInfo = [
          ...posts.items.map(post => {
            return { route: `posts/${post.fields.id}`, payload: post }
          })
        ];
        let pageLength = Math.ceil(posts.items.length/16);
        let pageInfo = [];
        // for (let i = 1; i <= pageLength; i++) {
        //   pageInfo.push({ query: { page: i }, payload: posts });
        // }
        let array = [...postsInfo, ...pageInfo];
        return array;
      })
    }
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'NKP福岡(北九州/小倉/筑豊/筑後/久留米/飯塚/筑紫野/宗像)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'k-oiBMXwq3jjGXakvELq7CpJguVvtthHQOuN0Oqmyow' },
      { 
        hid: 'description', 
      　name: 'description', 
        content: '北九州、小倉、筑豊、筑後、久留米、飯塚、筑紫野、宗像、ポルチオ、痙攣、オーガズム、クリイキ、中イキ、ポルチオイキ、福岡、性感開発' }
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
    { src: '~plugins/ga.js', mode: 'client' },
    'plugins/contentful',
    // {
    //   src: 'plugins/video',
    //   mode: 'client'
    // }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/moment'
  ],
  moment: {
    locales: ['ja']
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap'
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

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://keirenavmatome.xyz',
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: process.env.CTF_BLOG_POST_TYPE_ID
        })
      ]).then(([ posts ]) => {
        let postsInfo = [
          ...posts.items.map(post => {
            return { route: `posts/${post.fields.id}`, payload: post }
          })
        ];
        let pageLength = Math.ceil(posts.items.length/16);
        let pageInfo = [];
        // for (let i = 1; i <= pageLength; i++) {
        //   pageInfo.push({ query: { page: i }, payload: posts });
        // }
        let array = [...postsInfo, ...pageInfo];
        return array;
      })
    }
  }
}
