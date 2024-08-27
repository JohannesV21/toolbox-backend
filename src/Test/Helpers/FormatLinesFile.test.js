import { expect } from 'chai'
import { formatFileData } from '../../Utiils/Helpers/Formatters/FormatLinesFiles.js'

describe('Pruebas unitarias para el helper formatFileData', function () {
  it('Debería generar un error por formato de archivo CSV incorrecto', function () {
    const incorrectCSV =
      'file,text,wrongHeader,hex\n' +
      'file1.csv,Some text,123,abcdef1234567890abcdef1234567890'

    expect(() => formatFileData(incorrectCSV)).to.throw(
      'CSV format is incorrect'
    )
  })

  it('Debe retornar datos correctamente formateados para que sean válidos.', function () {
    const validCSV =
      'file,text,number,hex\n' +
      'file1.csv,RgTya,64075909,70ad29aacf0b690b0467fe2b2767f765\n' +
      'file1.csv,AtjW,6,d33a8ca5d36d3106219f66f939774cf5\n' +
      'file1.csv,PNzRfORtKtEDOzmIVrQuSh,74088708,3e29651a63a5202a5661e05a060401fb\n' +
      'file1.csv,d,6173,f9e1bcdb9e3784acc448af34f4727252'

    const expected = [
      {
        text: 'RgTya',
        number: 64075909,
        hex: '70ad29aacf0b690b0467fe2b2767f765'
      },
      {
        text: 'AtjW',
        number: 6,
        hex: 'd33a8ca5d36d3106219f66f939774cf5'
      },
      {
        text: 'PNzRfORtKtEDOzmIVrQuSh',
        number: 74088708,
        hex: '3e29651a63a5202a5661e05a060401fb'
      },
      {
        text: 'd',
        number: 6173,
        hex: 'f9e1bcdb9e3784acc448af34f4727252'
      }
    ]

    const result = formatFileData(validCSV)

    expect(result).to.deep.equal(expected)
  })

  it('Deberia ignorar las lineas con datos incorrectos o faltantes.', function () {
    const csvWithIncorrectData = `file,text,number,hex\n
      file2.csv,Some text,invalidNumber,abcdef1234567890abcdef1234567890\n
      file2.csv,Another text,123,shortHex\n
      file2.csv,Valid text,123456789,1234567890abcdef1234567890abcdef\n
      file2.csv,Any text,123456789,,`

    const expected = [
      {
        text: 'Valid text',
        number: 123456789,
        hex: '1234567890abcdef1234567890abcdef'
      }
    ]

    const result = formatFileData(csvWithIncorrectData)

    expect(result).to.deep.equal(expected)
  })

  it('Deberia retornar un array vacio si no hay lineas correctas en el archivo', function () {
    const emptyCSV = `file,text,number,hex\n
    file1.csv,dfjkdf,2323,1234567890abcdef1234567890abcdef,,\n
    file1.csv,dfjkdf,2323,1234567890abcdef1234567890af\n
    file2.csv,,,,\n
    ,,,,,\n`

    const result = formatFileData(emptyCSV)

    expect(result).to.deep.equal([])
  })
})
