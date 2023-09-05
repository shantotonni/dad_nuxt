//for server
//let api_url = 'https://exchange.acibd.com/'
//for Local
let api_url = 'http://127.0.0.1:8000/'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DadHQ',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DadHQ website' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.4.1.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js' },
      { src: '/assets/lib/easing/easing.min.js' },
      { src: '/assets/lib/wow/wow.min.js' },
      { src: '/assets/lib/owlcarousel/owl.carousel.min.js' },
      { src: '/assets/lib/isotope/isotope.pkgd.min.js' },
      { src: '/assets/lib/lightbox/js/lightbox.min.js' },
      { src: '/assets/lib/waypoints/waypoints.min.js' },
      { src: '/assets/lib/counterup/counterup.min.js' },
      { src: '/assets/lib/slick/slick.min.js' },
      { src: '/assets/js/main.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/assets/img/icon/fav.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap',type: 'text/css' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',type: 'text/css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css' ,type: 'text/css'},
      { rel: 'stylesheet', href: '/assets/lib/flaticon/font/flaticon.css' ,type: 'text/css'},
      { rel: 'stylesheet', href: '/assets/lib/animate/animate.min.css' ,type: 'text/css'},
      { rel: 'stylesheet', href: '/assets/lib/owlcarousel/assets/owl.carousel.min.css' ,type: 'text/css'},
      { rel: 'stylesheet', href: '/assets/lib/lightbox/css/lightbox.min.css' ,type: 'text/css'},
      { rel: 'stylesheet', href: '/assets/lib/slick/slick.css' ,type: 'text/css'},
      { rel: 'stylesheet', href: '/assets/lib/slick/slick-theme.css' ,type: 'text/css'},
      { rel: 'stylesheet', href: '/assets/css/style.css' ,type: 'text/css'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  //plugins: ['~/plugins/vee-validate.js', '~/plugins/toaster.js', '~/plugins/global-components.js'],
  plugins: [
    { src: '~/plugins/vue-datepicker.js', ssr: false },
    {src: '~/plugins/editor', ssr: false},
    '~/plugins/base_url.js','~/plugins/toaster.js','~/plugins/filter.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
   // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
    '@nuxtjs/i18n',
  ],
  i18n: {
    lazy: true,
    langDir : "locales",
    strategy: 'prefix_except_default',
    locales: [
      {
        code: "en-US",
        iso:"en-US",
        name: "English(US)",
        file: "en-US.json"
      },
      {
        code: "bn-BD",
        iso:"bn-BD",
        name: "Bangla",
        file: "bn-BD.json"
      }
    ],
    defaultLocale: "bn-BD",
    vueI18n: {
       fallbackLocale: 'bn-BD',
    }
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
           type: 'Bearer'
        },
        user: {
          property: false,
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get' }
        }
      }
    },
    redirect: {
      //home: '/customer/dashboard',
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
   // baseURL: 'http://192.168.100.63/exchange/'
    baseURL: api_url + '/'
  },

  router:{
    middleware:['auth']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
