// nuxt.config.js
import { readFileSync } from 'fs'

// package.jsonを読み込み
const pkg = JSON.parse(readFileSync('./package.json', 'utf8'))

const gtmID = 'GTM-NF5443D8'
const gtmHeadTag = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmID}');`
const gtmBodyTag = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`

export default defineNuxtConfig({
  // 互換性の日付設定
  compatibilityDate: '2025-08-25',

  // SEO向上のためSSGを有効化
  ssr: true,

  app: {
    head: {
      title: 'Yuma Mitsuyoshi - Engineering Manager & Full-Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'バックエンド開発を軸とした技術マネジメントとフルスタック開発に従事。10年以上の開発経験を活かし、チーム育成と技術革新を推進しています。' },
        { name: 'keywords', content: 'Yuma Mitsuyoshi,Engineering Manager,Full-Stack Developer,Backend Developer,PHP,Go,Java,Vue.js,Nuxt.js,Web Development,Team Management,技術マネジメント,フルスタック開発,バックエンド開発' },
        { name: 'author', content: 'Yuma Mitsuyoshi' },
        { name: 'robots', content: 'index,follow' },
        { name: 'googlebot', content: 'index,follow' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:site_name', content: 'Yuma Mitsuyoshi Portfolio' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ja_JP' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@MitsuyoshiYuma' },
        { name: 'twitter:creator', content: '@MitsuyoshiYuma' },
        { name: 'theme-color', content: '#2563eb' },
        { name: 'msapplication-TileColor', content: '#2563eb' },
        { name: 'application-name', content: 'Yuma Mitsuyoshi Portfolio' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#2563eb' },
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//www.googletagmanager.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
      script: [
        {
          hid: 'gtmHead',
          innerHTML: gtmHeadTag,
        },
      ],
      noscript: [
        {
          hid: 'gtmBody',
          innerHTML: gtmBodyTag,
          pbody: true,
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        gtmHead: ['innerHTML'],
        gtmBody: ['innerHTML'],
      },
    },
  },

  // CSS設定
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  // プラグイン設定
  plugins: [
    '~/plugins/fontawesome.js',
    { src: '~/plugins/firebase.js', mode: 'client' },
  ],

  // モジュール設定
  modules: ['@nuxtjs/tailwindcss'],

  // ランタイム設定
  runtimeConfig: {
    public: {
  // Firebase client-side config (set these in your .env or hosting environment)
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || '',
  FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || '',
  FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL || '',
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || '',
  FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET || '',
  FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
  FIREBASE_APP_ID: process.env.FIREBASE_APP_ID || '',
  FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID || '',
    },
  },

  // Vite設定（Nuxt 4ではデフォルトでVite）
  vite: {
    // Viteの設定をカスタマイズ可能
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    },
  },

  // Nitro設定
  nitro: {
    compressPublicAssets: true,
  },

  // Vue 3の互換性設定
  vue: {
    compilerOptions: {
      // Vue 3の新機能を有効化
    },
  },
})
