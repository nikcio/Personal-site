import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default defineNuxtPlugin((nuxtApp) => {
  library.add(far, fas, fab)
  
  // This is important, we are going to let Nuxt worry about the CSS
  config.autoAddCss = false
  
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})