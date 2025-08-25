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

  // Nuxt 4のデフォルトでSPAモード
  ssr: false,

  app: {
    head: {
      title: pkg.name,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: pkg.description },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
      // 必要に応じて環境変数を公開
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
