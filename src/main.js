import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser, faLock, faArrowLeft, faArrowRight,  faEllipsis} from '@fortawesome/free-solid-svg-icons'

import { faSquarePlus, faCalendarDays, faPenToSquare, faTrashCan, faEye, faClock, } from '@fortawesome/free-regular-svg-icons'




/* add icons to the library */
library.add(faUser, faLock, faArrowLeft, faArrowRight, faSquarePlus, faCalendarDays, faPenToSquare, faTrashCan, faEye, faClock, faEllipsis)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
