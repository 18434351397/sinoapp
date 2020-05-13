import biddingRouter from './biddingManagement'
import contractRouter from './contractRouter'
import characteristicRouter from './characteristicRouter'
const RouterList = [...contractRouter, ...biddingRouter, ...characteristicRouter]

export default RouterList
