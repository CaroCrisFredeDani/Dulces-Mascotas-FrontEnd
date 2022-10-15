import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'   
import CoreuiVue from '@coreui/vue'

const app =createApp(App)
app.use(CoreuiVue)
app.use(router)
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
