import { createRouter, createWebHashHistory } from 'vue-router'
import explain from './views/explain/index.vue'
const pagesRouter = []

const explainDocs = import.meta.glob('../docs/*.md')
for (const path in explainDocs) {
  let name = (/docs\/(.*).md/.exec(path))[1]
  pagesRouter.push({
    path: '/' + name,
    component: explainDocs[path],
    name
  });
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...pagesRouter,
    {
      path: '/',
      redirect: '/explain'
    },
    {
      path: '/steps',
      component: () => import('./views/steps/index.vue')
    },
    {
      path: '/example',
      component: () => import('./views/home/index.vue')
    },
    {
      path: '/explain',
      name: 'explain',
      component: explain,
      children: pagesRouter
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

// config router
export function setupRouter (app) {
  app.use(router)
}