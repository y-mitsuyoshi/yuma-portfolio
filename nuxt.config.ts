import { defineNuxtConfig } from 'nuxt/config'

const gtmID = 'GTM-NF5443D8'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'yuma-portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'My slick Nuxt.js project' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        {
          key: 'gtmHead',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmID}');`,
        },
      ],
      noscript: [
        {
          key: 'gtmBody',
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          tagPosition: 'bodyClose',
        },
      ],
    },
  },


  modules: ['@nuxtjs/tailwindcss'],

  build: {
    transpile: ['@firebase/app', '@firebase/analytics', 'firebase'],
  },

  devtools: {
    enabled: true
  },

  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    }
  }
})
