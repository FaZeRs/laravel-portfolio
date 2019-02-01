const path = require('path')
const mix = require('laravel-mix')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '~': path.join(__dirname, './resources/js'),
      Components: path.resolve(__dirname, 'resources/js/components'),
      Lang: path.resolve(__dirname, 'resources/js/lang'),
      Layouts: path.resolve(__dirname, 'resources/js/layouts'),
      Middleware: path.resolve(__dirname, 'resources/js/middleware'),
      Pages: path.resolve(__dirname, 'resources/js/pages'),
      Partials: path.resolve(__dirname, 'resources/js/partials'),
      Plugins: path.resolve(__dirname, 'resources/js/plugins'),
      Routes: path.resolve(__dirname, 'resources/js/router'),
      Store: path.resolve(__dirname, 'resources/js/store')
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
