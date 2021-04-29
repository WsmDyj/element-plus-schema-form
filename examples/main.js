import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.less'
import { setupElPlus } from './element-plus'
import highlight from './directive/highlight'
import { setupRouter } from './router'

const app = createApp(App)
highlight.install(app)
setupRouter(app)
setupElPlus(app)

app.mount('#app')
