module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true
    }
  },
  pluginOptions: {
    prerenderSpa: {
      renderRoutes: [
        "/",
        "/about",
        "/contact",
        "/service/ai",
        "/service/pwa",
        "/service/blockchain",
        "/service/iot",
        "/service/arvr",
        "/service/marketing",
        "/service/cc",
        "/service/odoo",
        "/service/rpa",
        "/service/cybersecurity",
        "/service/security",
        "/solution/security",
        "/solution/hrm",
        "/solution/mapping",
        "/solution/kpi",
        "/solution/ls",
        "/solution/contactcenter",
        "/solution/qrcode",
        "/solution/sms"
      ],
      useRenderEvent: true,
      onlyProduction: true
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
