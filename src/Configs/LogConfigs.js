// Utils/logConfig.js
import moment from 'moment'
import clc from 'cli-color'

export const configureLogs = (app, morgan, consoleStamp) => {
  // ---- Debug ----\\
  const morganDateFormat = 'yyyy-MM-DD HH:mm:ss'
  const morganDebugFormat = `[:customDate] - ${clc.cyan(
    ':method'
  )} ${clc.yellow(':url')} :status :response-time ms - :res[content-length]]`
  const consoleTimeFormat = `:date(yyyy-mm-dd HH:MM:ss) ${clc.blue(':label')}`

  // Configuración de logs con morgan
  morgan.token('customDate', (req, res) => moment().format(morganDateFormat))
  app.use(morgan(morganDebugFormat))

  // Configuración de logs en consola
  consoleStamp(console, { format: consoleTimeFormat })
}
