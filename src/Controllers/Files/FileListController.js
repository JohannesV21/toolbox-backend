import { getFilesListService } from '../../Services/Files/FilesServices.js'

/**
 * Controlador para obtener la lista de archivos desde el servicio `getFilesListService`.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 *
 * @returns {Promise<void>} - Envia una respuesta HTTP con status 200 y la lista de archivos en caso de exito,
 * o un error con el estado correspondiente en caso de fallo.
 */
export const FilesListController = async (req, res) => {
  try {
    const data = await getFilesListService()

    res.status(200).send(data)
  } catch (error) {
    console.error(`Error fetching files data in controller: ${error.message}`)
    res.status(error.status || 500).json({
      error: error.type,
      message: `${error.errorData?.code} - ${error.message}`
    })
  }
}
