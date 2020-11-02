const path = require('path')
const mix = require('laravel-mix')
require('vuetifyjs-mix-extension')

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.vue', '.ts'],
    alias: {
      '~': path.join(__dirname, './resources/js'),
      'vue-api-query':  path.resolve(
        __dirname,
        'node_modules/vue-api-query/src/'
      )
    }
  },
  output: {
    chunkFilename: mix.inProduction() ? 'js/[name].[chunkhash].js' : 'js/[name].js',
  }
})

mix.js('resources/js/app.js', 'public/js').vuetify('vuetify-loader')
mix.sass('resources/sass/app.scss', 'public/css')

if (mix.inProduction()) {
  mix.sourceMaps()
}
