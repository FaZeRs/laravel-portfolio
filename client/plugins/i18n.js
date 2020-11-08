export default function({$axios, app}) {
  $axios.interceptors.request.use((config) => {
    const locale = app.i18n.locale;
    if (locale) {
      config.headers['Content-Language'] = locale
    }
    return config;
  });
}
