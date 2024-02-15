import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import router from '../router/index'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify()

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
