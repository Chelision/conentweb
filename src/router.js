import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index/home'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/index/index.vue'),
      children: [
        {
          path: 'home',
          component: () => import('./views/home/home.vue')
        },
        {
          path: 'products',
          component: () => import('./views/products/products.vue')
        },
        {
          path: 'solutions',
          component: () => import('./views/solutions/solutions.vue')
        },
        {
          path: 'law',
          component: () => import('./views/law/law.vue')
        },
        {
          path: 'news',
          component: () => import('./views/news/news.vue'),
          children: [
            {
              path: 'innerNews',
              component: () => import('./views/news/innerNews.vue')
            },
            {
              path: 'outerNews',
              component: () => import('./views/news/outerNews.vue')
            },
            {
              path: 'detailNew',
              component: () => import('./views/news/detailnew.vue')
            }
          ]
        },
        {
          path: 'support',
          component: () => import('./views/support/support.vue'),
          children: [
            {
              path: 'service',
              component: () => import('./views/support/service.vue')
            },
            {
              path: 'common',
              component: () => import('./views/support/common.vue')
            },
            {
              path: 'customer',
              component: () => import('./views/support/customer.vue')
            },
            {
              path: 'gyl',
              component: () => import('./views/support/gyl.vue')
            },
            {
              path: 'cfz',
              component: () => import('./views/support/cfz.vue')
            },
            {
              path: 'lmzm',
              component: () => import('./views/support/lmzm.vue')
            },
            {
              path: 'sbbb',
              component: () => import('./views/support/sbbb.vue')
            }
          ]
        },
        {
          path: 'about',
          component: () => import('./views/about/about.vue')
        },
        {
          path: 'invitation',
          component: () => import('./views/invitation/invitation.vue')
        }
      ]
    }
  ]
})
