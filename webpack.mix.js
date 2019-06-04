const path = require('path')
const mix = require('laravel-mix')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '~': path.join(__dirname, './resources/js')
    }
  },
  plugins: [
    // new BundleAnalyzerPlugin()
    new VuetifyLoaderPlugin()
  ]
})

mix.js('resources/js/app.js', 'public/js')
mix.sass('resources/sass/app.scss', 'public/css')

if (mix.inProduction()) {
  mix.extract()
  mix.sourceMaps()
  mix.version()
  mix.disableNotifications()
}
