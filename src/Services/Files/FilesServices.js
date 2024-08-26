import { BACK_URL, http } from '../../Configs/HttpServices.js'
import { mapError } from '../../Utiils/Helpers/Errors/ErrorHelper.js'
import { formatFileData } from '../../Utiils/Helpers/Formatters/FormatLinesFiles.js'
import pLimit from 'p-limit'

// Establece un límite de concurrencia
const limit = pLimit(10)

export const fetchFilesData = async () => {
  const filesList = await getFilesListService()

  try {
    const dataPromises = filesList.map((fileName) =>
      limit(async () => {
        try {
          console.log('FileName: ', fileName)
          const fileData = await getFileService(fileName)
          console.log('FileData: ', fileData)
          const formattedData = formatFileData(fileData)
          return { file: fileName, lines: formattedData }
        } catch (error) {
          console.error(`Error fetching data for file: ${fileName}`, error)
          return null
        }
      })
    )

    const results = await Promise.all(dataPromises)

    // Filtra los resultados nulos y los archivos sin datos
    const data = results.filter((result) => result && result.lines.length > 0)

    console.log('Data fetching: ', data)

    return data
  } catch (error) {
    console.error('Error fetching files data: ', error)
    throw error
  }
}

export const getFilesListService = async () => {
  try {
    const response = await http.get(`${BACK_URL}/files`, {
      headers: { Authorization: 'Bearer aSuperSecretKey' }
    })

    console.log('Data Files List: ', response.data.files)

    return response.data.files
  } catch (error) {
    const mappedError = mapError(error)
    console.error(`Error in Files List Services: ${mappedError.message}`)
    throw mappedError
  }
}

export const getFileService = async (fileName) => {
  try {
    const response = await http.get(`${BACK_URL}/file/${fileName}`, {
      headers: { Authorization: 'Bearer aSuperSecretKey' }
    })
    console.log('Data Services: ', response.data)
    return response.data
  } catch (error) {
    const mappedError = mapError(error)
    console.error(
      `Error in File (${fileName}) Services : ${mappedError.message}`
    )

    throw mappedError
  }
}
