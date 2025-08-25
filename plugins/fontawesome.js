// plugins/fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookSquare, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

// CSSの自動追加を防ぐ（nuxt.configでスタイルを読み込んでいるため）
config.autoAddCss = false

// アイコンをライブラリに追加
library.add(faFacebookSquare, faGithubSquare, faTwitterSquare)

export default defineNuxtPlugin((nuxtApp) => {
  // Vue 3 / Nuxt 4でのコンポーネント登録
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
