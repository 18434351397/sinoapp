const biddingRouter = [
  {
    path: '/bizcustinfoform', // 客户管理
    component: () => import('../views/addCustomer'),
    name: 'bizcustinfoform'
  },
  {
    path: '/bizsupplierinfoform', // 供应商管理
    component: () => import('../views/bizsupplierinfoform'),
    name: 'bizsupplierinfoform'
  },
  {
    path: '/projptenderrecord', // 投标备案
    component: () => import('../views/projptenderrecord'),
    name: 'projptenderrecord'
  },
  {
    path: '/projpcontractreview', // 合同评审
    component: () => import('../views/projpcontractreview'),
    name: 'projpcontractreview'
  },
  {
    path: '/projptenderpreq', // 投标保证金
    component: () => import('../views/projptenderpreq'),
    name: 'projptenderpreq'
  },
  {
    path: '/projptenderpreqpay', // 付业务往来款
    component: () => import('../views/projptenderpreqpay'),
    name: 'projptenderpreqpay'
  },
  {
    path: '/projptenderquote', // 投标报价
    component: () => import('../views/projptenderquote'),
    name: 'projptenderquote'
  },
  {
    path: '/projptenderletter', // 投标保函
    component: () => import('../views/projptenderletter'),
    name: 'projptenderletter'
  },
  {
    path: '/projpchanceform', // 商机修订
    component: () => import('../views/projpchanceform'),
    name: 'projpchanceform'
  }
]
export default biddingRouter
