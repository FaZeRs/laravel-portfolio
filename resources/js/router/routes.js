import Index from '~/pages/index'

export default [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import(/* webpackChunkName: "experience" */ '~/pages/experience')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "services" */ '~/pages/services')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '~/pages/portfolio')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '~/pages/contact')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "dashboard" */ '~/pages/admin/Dashboard')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '~/pages/admin/Login')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "not-found" */ '~/pages/errors/404')
  }
]
