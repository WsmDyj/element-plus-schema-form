import LAYOUT from '../../layouts/index.vue'
export const RootRoute = [
  {
    path: '/',
    component: LAYOUT,
    children: [
      {
        path: '/',
        component: () => import('../../views/home/index.vue')
      }
    ]
  },
  {
    path: '/document',
    component: LAYOUT,
    children: [
      {
        path: '/document',
        component: () => import('../../views/document/index.vue')
      }
    ]
  }
]