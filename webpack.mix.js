const path = require('path')
const mix = require('laravel-mix')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

mix.config.vue.esModule = true

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '~': path.join(__dirname, './resources/assets/js'),
      Components: path.resolve(__dirname, 'resources/assets/js/components'),
      Lang: path.resolve(__dirname, 'resources/assets/js/lang'),
      Layouts: path.resolve(__dirname, 'resources/assets/js/layouts'),
      Middleware: path.resolve(__dirname, 'resources/assets/js/middleware'),
      Pages: path.resolve(__dirname, 'resources/assets/js/pages'),
      Partials: path.resolve(__dirname, 'resources/assets/js/partials'),
      Plugins: path.resolve(__dirname, 'resources/assets/js/plugins'),
      Routes: path.resolve(__dirname, 'resources/assets/js/router'),
      Store: path.resolve(__dirname, 'resources/assets/js/store')
    }
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  output: {
    chunkFilename: mix.inProduction() ? 'js/[name].[chunkhash].js' : 'js/[name].js',
    publicPath: mix.config.hmr ? '//localhost:8080' : '/'
  },
  node: {
    fs: 'empty'
  }
})

mix.browserSync({
  proxy: 'dev.naurislinde.com'
})

mix.js('resources/assets/js/app.js', 'public/js/app.js')
mix.sass('resources/assets/sass/app.scss', 'public/css/app.css')

if (mix.inProduction()) {
  mix.extract([
    '@fortawesome/fontawesome',
    '@fortawesome/fontawesome-free-brands',
    '@fortawesome/fontawesome-free-solid',
    '@fortawesome/vue-fontawesome',
    'axios',
    'babel-polyfill',
    'js-cookie',
    'lodash',
    'promise',
    'v-img',
    'vee-validate',
    'vue',
    'vue-cookie-law',
    'vue-i18n',
    'vue-meta',
    'vue-recaptcha',
    'vue-router',
    'vuetify',
    'vuex',
    'vuex-router-sync'
  ])

  mix.version()
  mix.disableNotifications()
}
