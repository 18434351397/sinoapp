// 特色路由文件
const characteristicRouter = [
  // 加路由，更换此处路径
  {
    path: '/sealapproveform', // 印信使用审批
    component: () => import('../views/sealapproveform'),
    name: 'sealapproveform'
  },
  {
    path: '/sealpreservationform', // 印章保管登记
    component: () => import('../views/sealpreservationform'),
    name: 'sealpreservationform'
  },
  {
    path: '/bizcompanychangeform', // 分子公司设立与变更
    component: () => import('../views/bizcompanychangeform'),
    name: 'bizcompanychangeform'
  },
  {
    path: '/postmanageform', // 发文管理
    component: () => import('../views/postmanageform'),
    name: 'postmanageform'
  },
  {
    path: '/sealdestoryform', // 印章销毁
    component: () => import('../views/sealdestoryform'),
    name: 'sealdestoryform'
  },
  {
    path: '/sealrecordform', // 印章刻制备案
    component: () => import('../views/sealrecordform'),
    name: 'sealrecordform'
  }
]
// 导出router，方便在index里引用
export default characteristicRouter
