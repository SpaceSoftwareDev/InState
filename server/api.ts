import express from "express"
import mou from "./routes/mou"

const api = express()
const apiRouter = express.Router()

apiRouter.use(mou)

api.use('/api/v1', apiRouter)

export default api