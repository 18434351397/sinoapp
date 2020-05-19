const costRouter = [
  {
    path: '/bizfeesreimbursementform', // 报销发起
    component: () => import('../views/bizfeesreimbursementform'),
    name: 'bizfeesreimbursementform'
  },
  {
    path: '/bizfeesloanform', // 个人借款
    component: () => import('../views/bizfeesloanform'),
    name: 'bizfeesloanform'
  },
  {
    path: '/bizfeestransferform', // 内部收益划转
    component: () => import('../views/bizfeestransferform'),
    name: 'bizfeestransferform'
  },
  {
    path: '/projpinvoicereq', // 开发票/收据
    component: () => import('../views/projpinvoicereq'),
    name: 'projpinvoicereq'
  }
]
export default costRouter
