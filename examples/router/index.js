import { createRouter, createWebHistory } from 'vue-router'
import { RootRoute } from './modules/basic'

const router = createRouter({
  history: createWebHistory(),
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