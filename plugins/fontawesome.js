import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebookSquare,
  faGithubSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See https://github.com/FortAwesome/vue-fontawesome#basic
library.add(faFacebookSquare, faGithubSquare, faTwitterSquare)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
