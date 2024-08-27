import { BACK_URL } from '../../Config/HttpServices.js'
import { expect, assert } from 'chai'
import { getFileService } from '../../Services/Files/FilesServices.js'
import nock from 'nock'

describe('Pruebas unitarias para getFileService', function () {
  afterEach(() => {
    nock.cleanAll()
  })

  it('Debería retornar los datos del archivo cuando el archivo existe', async function () {
    const fileName = 'testfile.csv'
    const mockResponse = { data: 'Contenido del archivo' }

    nock(BACK_URL).get(`/file/${fileName}`).reply(200, mockResponse)

    const result = await getFileService(fileName)

    expect(result).to.deep.equal(mockResponse)
  })

  it('Debería lanzar un error cuando el archivo no existe', async function () {
    const fileName = 'nonexistentfile.csv'
    const mockErrorResponse = { message: 'File not found' }

    nock(BACK_URL).get(`/file/${fileName}`).reply(404, mockErrorResponse)

    try {
      await getFileService(fileName)
      assert.fail('La función debería haber lanzado un error')
    } catch (error) {
      expect(error.message).to.equal('File not found')
    }
  })

  it('Debería lanzar un error de autenticación cuando el token es inválido', async function () {
    const fileName = 'testfile.csv'
    const mockErrorResponse = { message: 'Unauthorized' }

    nock(BACK_URL).get(`/file/${fileName}`).reply(401, mockErrorResponse)

    try {
      await getFileService(fileName)
      assert.fail('La función debería haber lanzado un error')
    } catch (error) {
      expect(error.message).to.equal('Unauthorized')
    }
  })
})
