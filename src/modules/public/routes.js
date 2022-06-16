import home from './home.vue'
import empty from './404.vue'

const router =  [
  {
    path: '/',
    component: home,
    children: [
      {
        name: 'qiankun-sub-custmoer',
        path: '/qiankun-sub-custmoer*',

      }
    ]
  },
  {
    path: '/404',
    component: empty
  }
]

export default router