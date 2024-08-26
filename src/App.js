import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import moment from 'moment'
import clc from 'cli-color'
import consoleStamp from 'console-stamp'
import indexRoutes from './Routes/IndexRoutes.js'
import filesRoutes from './Routes/Fiiles/FilesRoutes.js'
import 'dotenv/config'
import limiter from './Middleware/RateLimitMiddleware.js'

const app = express()
const port = process.env.PORT

// ---- Debug ----\\
const morganDateFormat = 'yyyy-MM-DD HH:mm:ss'
const morganDebugFormat = `[:customDate] - ${clc.cyan(':method')} ${clc.yellow(
  ':url'
)} :status :response-time ms - :res[content-length]]`
const consoleTimeFormat = `:date(yyyy-mm-dd HH:MM:ss) ${clc.blue(':label')}`

// logs configs
morgan.token('customDate', (req, res) => moment().format(morganDateFormat))
consoleStamp(console, { format: consoleTimeFormat })
app.use(morgan(morganDebugFormat))

app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use('/', indexRoutes)
app.use('/files', [limiter], filesRoutes)

app.listen(port, () => {
  console.log(`Starting ToolBox API on port ${port}`)
})
