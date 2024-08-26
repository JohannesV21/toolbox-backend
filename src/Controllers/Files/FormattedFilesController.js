import {
  fetchFilesData,
  getFileService
} from '../../Services/Files/FilesServices.js'

/**
 * Controlador para obtener los datos de un archivo en específico o de todos los archivos con los datos correctamente formateados y validados dependiendo de si se proporciona el parámetro `fileName` en la query string.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {string} [req.query.fileName] - Nombre del archivo para obtener datos específicos.
 * @param {Object} res - El objeto de respuesta HTTP.
 *
 * @returns {Promise<void>} - Envía una respuesta HTTP con el estado 200 y los datos formateados del archivo(s) o los datos de un archivo especifico en caso de éxito,
 * o un error con el estado correspondiente en caso de fallo.
 */
export const FormattedFilesController = async (req, res) => {
  try {
    console.log(req.query.fileName)
    const fileName = req.query.fileName
    let data = {}

    if (fileName) {
      data = await getFileService(fileName)
    } else {
      data = await fetchFilesData()
    }
    // const data = await getFilesListService();
    res.status(200).send(data)
  } catch (error) {
    console.error(`Error fetching files data in controller: ${error.message}`)
    res.status(error.status || 500).json({
      error: error.type,
      message: `${error.errorData?.code} - ${error.message}`
    })
  }
}
