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
  }
]
export default biddingRouter
