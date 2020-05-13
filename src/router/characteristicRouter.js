// 特色路由文件
const characteristicRouter = [
  // 加路由，更换此处路径
  {
    path: '/sealapproveform',
    component: () => import('../views/sealapproveform'),
    name: 'sealapproveform'
  },
  {
    path: '/sealpreservationform',
    component: () => import('../views/sealpreservationform'),
    name: 'sealpreservationform'
  }
]
// 导出router，方便在index里引用
export default characteristicRouter
