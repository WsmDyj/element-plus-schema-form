import { createApp } from 'vue'
import App from './App.vue'

import { setupElPlus } from './element-plus'

import { setupRouter } from './router/index'

const app = createApp(App)
setupRouter(app)
setupElPlus(app)

app.mount('#app')
