import Index from '~/pages/index'
import Experience from '~/pages/experience'
import Services from '~/pages/services'
import Portfolio from '~/pages/portfolio'
import Contact from '~/pages/contact'
import NotFound from '~/pages/errors/404'

export default [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '*',
    component: NotFound
  }
]
