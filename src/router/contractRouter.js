// 合同路由文件
const contractRouter = [
  // 加路由，更换此处路径
  {
    path: '/projpcontractreview',
    component: () => import('../views/projpcontractreview'), // 销售合同
    name: 'projpcontractreview'
  },
  {
    path: '/projpriskbond',
    component: () => import('../views/projpriskbond'), // 风险保证金
    name: 'projpriskbond'
  },
  {
    path: '/projpcontractpurchaseform',
    component: () => import('../views/projpcontractpurchaseform'), // 风险保证金
    name: 'projpcontractpurchaseform'
  },
  {
    path: '/projpriskbondthaw',
    component: () => import('../views/projpriskbondthaw'), // 风险保证金解冻
    name: 'projpriskbondthaw'
  }
]
// 导出router，方便在index里引用
export default contractRouter
