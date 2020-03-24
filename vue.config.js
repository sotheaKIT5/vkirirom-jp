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
      headless: true,
      postProcess: route => {
        // Defer scripts and tell Vue it's been server rendered to trigger hydration
        route.html = route.html
          .replace(/<script (.*?)>/g, "<script $1 defer>")
          .replace('id="app"', 'id="app" data-server-rendered="true"');
        return route;
      }
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
