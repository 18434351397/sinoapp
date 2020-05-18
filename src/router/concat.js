import biddingRouter from './biddingManagement'
import contractRouter from './contractRouter'
import characteristicRouter from './characteristicRouter'
import costRouter from './costManagementRouter'
const RouterList = [...contractRouter, ...biddingRouter, ...characteristicRouter, ...costRouter]

export default RouterList
