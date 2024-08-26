import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import consoleStamp from 'console-stamp'
import indexRoutes from './Routes/IndexRoutes.js'
import filesRoutes from './Routes/Fiiles/FilesRoutes.js'
import 'dotenv/config'
import limiter from './Middleware/RateLimitMiddleware.js'
import { configureLogs } from './Config/LogConfigs.js'

const app = express()
const port = process.env.PORT

app.disable('x-powered-by')
app.use(cors())
app.use(express.json())

// Configurar logs
configureLogs(app, morgan, consoleStamp)

app.use('/', indexRoutes)
app.use('/files', [limiter], filesRoutes)

app.listen(port, () => {
  console.log(`Starting ToolBox API on port ${port}`)
})
