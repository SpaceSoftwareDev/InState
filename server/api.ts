import express from "express"
import mou from "./routes/mou"
import doc from "./routes/doc"
const api = express()
const apiRouter = express.Router()

apiRouter.use(mou)
apiRouter.use(doc)

api.use('/api/v1', apiRouter)

export default api