const biddingRouter = [
  {
    path: '/bizcustinfoform',
    component: () => import('../views/addCustomer'),
    name: 'bizcustinfoform'
  },
  {
    path: '/bizsupplierinfoform',
    component: () => import('../views/bizsupplierinfoform'),
    name: 'bizsupplierinfoform'
  },
  {
    path: '/projptenderrecord',
    component: () => import('../views/projptenderrecord'),
    name: 'projptenderrecord'
  },
  {
    path: '/projpcontractreview',
    component: () => import('../views/projpcontractreview'),
    name: 'projpcontractreview'
  },
  {
    path: '/projptenderpreq',
    component: () => import('../views/projptenderpreq'),
    name: 'projptenderpreq'
  },
  {
    path: '/projptenderquote',
    component: () => import('../views/projptenderquote'),
    name: 'projptenderquote'
  },
  {
    path: '/projptenderletter',
    component: () => import('../views/projptenderletter'),
    name: 'projptenderletter'
  }
]
export default biddingRouter
