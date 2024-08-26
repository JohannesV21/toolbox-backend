/**
 * Formatea los datos de un archivo CSV.
 *
 * Procesa un archivo CSV para verificar que cumpla con un formato específico, luego convierte los datos en un array de objetos.
 * El formato esperado del CSV debe tener cuatro columnas: 'file', 'text', 'number', y 'hex'. Las filas de datos deben seguir este esquema:
 * - `text` (cadena de texto variable)
 * - `number` (número entero)
 * - `hex` (cadena hexadecimal de longitud 32)
 *
 * @param {string} fileData - Contenido del archivo CSV como una cadena.
 * @returns {Object[]} - Array de objetos con las propiedades `text`, `number` y `hex`.
 * @throws {Error} - Lanza un error si el formato del CSV es incorrecto o si los datos no cumplen con las validaciones.
 */
export const formatFileData = (fileData) => {
  const lines = fileData.split('\n')
  const headers = lines[0].trim().split(',')

  if (
    headers.length !== 4 ||
    headers[0] !== 'file' ||
    headers[1] !== 'text' ||
    headers[2] !== 'number' ||
    headers[3] !== 'hex'
  ) {
    throw new Error('CSV format is incorrect')
  }

  const formattedLines = []

  // Procesa cada línea del archivo a partir de la segunda
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim().split(',')

    if (line.length === 4) {
      const [, text, number, hex] = line

      // Validaciones para agregar la linea
      if (text && !isNaN(number) && hex.length === 32) {
        formattedLines.push({
          text: text.trim(),
          number: parseInt(number, 10),
          hex: hex.trim()
        })
      }
    }
  }

  return formattedLines
}
