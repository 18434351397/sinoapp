import biddingRouter from './biddingManagement'
import contractRouter from './contractRouter'
const RouterList = [...contractRouter, ...biddingRouter]

export default RouterList
