import './shared/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './app/App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(Quasar, {
  plugins: {} // import Quasar plugins and add here
})

app.mount('#app')
