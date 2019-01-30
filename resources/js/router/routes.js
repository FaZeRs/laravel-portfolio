const Index = () => import('~/pages/index').then(m => m.default || m)
const Experience = () => import('~/pages/experience').then(m => m.default || m)
const Services = () => import('~/pages/services').then(m => m.default || m)
const Portfolio = () => import('~/pages/portfolio').then(m => m.default || m)
const Contact = () => import('~/pages/contact').then(m => m.default || m)
const NotFound = () => import('~/pages/errors/404').then(m => m.default || m)

export default [
  { path: '/', name: 'index', component: Index },
  { path: '/experience', name: 'experience', component: Experience },
  { path: '/services', name: 'services', component: Services },
  { path: '/portfolio', name: 'portfolio', component: Portfolio },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '*', component: NotFound }
]
