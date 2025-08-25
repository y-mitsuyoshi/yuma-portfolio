// plugins/fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebookSquare,
  faGithubSquare,
  faTwitterSquare,
  faJs,
  faPython,
  faGolang,
  faPhp,
  faRProject,
  faVuejs,
  faReact,
  faAws,
  faGoogle,
  faDocker,
  faLinux,
  faGitAlt,
  faGithub,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons'
import {
  faRss,
  faGem,
  faCode,
  faDatabase,
  faServer,
  faCircleCheck,
  faBug,
  faChartLine,
  faProjectDiagram,
  faSitemap,
  faWhiskeyGlass,
  faPlaneDeparture,
  faFilm,
  faChessBoard,
  faUser,
  faBriefcase,
  faLaptopCode,
  faHome,
  faHeart,
  faBars,
  faTimes,
  faChevronDown,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

// CSSの自動追加を防ぐ（nuxt.configでスタイルを読み込んでいるため）
config.autoAddCss = false

// アイコンをライブラリに追加
library.add(
  faFacebookSquare,
  faGithubSquare,
  faTwitterSquare,
  faRss,
  faGem,
  faJs,
  faPython,
  faGolang,
  faCode,
  faPhp,
  faRProject,
  faVuejs,
  faReact,
  faDatabase,
  faAws,
  faGoogle,
  faDocker,
  faLinux,
  faServer,
  faGitAlt,
  faGithub,
  faGitlab,
  faCircleCheck,
  faBug,
  faChartLine,
  faProjectDiagram,
  faSitemap,
  faWhiskeyGlass,
  faPlaneDeparture,
  faFilm,
  faChessBoard,
  faUser,
  faBriefcase,
  faLaptopCode,
  faHome,
  faHeart,
  faBars,
  faTimes,
  faChevronDown,
  faUsers
)

export default defineNuxtPlugin((nuxtApp) => {
  // Vue 3 / Nuxt 4でのコンポーネント登録
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
