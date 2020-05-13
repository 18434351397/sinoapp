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
  }
]
// 导出router，方便在index里引用
export default contractRouter
