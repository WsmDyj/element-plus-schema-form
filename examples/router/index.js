import { createRouter, createWebHashHistory } from 'vue-router'
import { RootRoute } from './modules/basic'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...RootRoute,
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }]
})

// config router
export function setupRouter (app) {
  app.use(router)
}