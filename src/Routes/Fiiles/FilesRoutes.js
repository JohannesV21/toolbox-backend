import { Router } from 'express'
import { FormattedFilesController } from '../../Controllers/Files/FormattedFilesController.js'
import { FilesListController } from '../../Controllers/Files/FileListController.js'

const router = Router()

// Ruta para obtener los datos formateados de los archivo(s).
router.get('/data', FormattedFilesController)

// Ruta para obtener la lista de archivos desde la api externa.
router.get('/list', FilesListController)

export default router
