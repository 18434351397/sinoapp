// 合同路由文件
const contractRouter = [
 // 加路由，更换此处路径
  {
    path: '/projpcontractreview',
    component: () => import('../views/projpcontractreview'),
    name: 'projpcontractreview'
  }
]
// 导出router，方便在index里引用
export default contractRouter
