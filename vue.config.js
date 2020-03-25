module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true
    }
  },
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/", "/a2a-digital-jp", "/about"],
      useRenderEvent: true,
      onlyProduction: true,
      headless: true
    },
    i18n: {
      locale: "ja",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true
    }
  },
  transpileDependencies: ["vuetify"]
};
