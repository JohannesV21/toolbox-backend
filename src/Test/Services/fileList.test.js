import { expect } from 'chai'
import nock from 'nock'
import { getFilesListService } from '../../Services/Files/FilesServices.js'

describe('Pruebas unitarias para getFilesListService', function () {
  const BACK_URL = 'https://echo-serv.tbxnet.com/v1/secret'

  beforeEach(() => {
    nock.cleanAll()
  })

  it('Deberia retornar una lista de archivos', async function () {
    const mockFilesList = [
      'test1.csv',
      'test2.csv',
      'test3.csv',
      'test18.csv',
      'test4.csv',
      'test5.csv',
      'test6.csv',
      'test9.csv',
      'test15.csv'
    ]

    nock(BACK_URL).get('/files').reply(200, { files: mockFilesList })

    const files = await getFilesListService()

    expect(files).to.deep.equal(mockFilesList)
  })

  it('Deberia dar error no autorizado al no pasarle el API_KEY', async function () {
    nock(BACK_URL).get(`/files`).reply(401, { message: 'API KEY is required' })
    try {
      await getFilesListService()
    } catch (err) {
      expect(err).to.have.property('message', 'API KEY is required')
      expect(err).to.have.property('status', 401)
    }
  })

  it('Deberia reflejar error en el servidor', async function () {
    nock(BACK_URL).get('/files').reply(500, { message: 'server error' })

    try {
      await getFilesListService()
    } catch (error) {
      expect(error).to.have.property('message', 'server error')
    }
  })
})

// ###### Funciona

// import { deepStrictEqual, strictEqual } from 'assert'
// import nock from 'nock'
// import { getFilesListService } from '../Services/Files/FilesServices.js'

// describe('Pruebas unitarias para getFilesListService', function () {
//   const BACK_URL = 'https://echo-serv.tbxnet.com/v1/secret'

//   beforeEach(() => {
//     nock.cleanAll()
//   })

//   it('Debería retornar una lista de archivos', async function () {
//     const mockFilesList = [
//       'test1.csv',
//       'test2.csv',
//       'test3.csv',
//       'test18.csv',
//       'test4.csv',
//       'test5.csv',
//       'test6.csv',
//       'test9.csv',
//       'test15.csv'
//     ]

//     nock(BACK_URL).get('/files').reply(200, { files: mockFilesList })

//     const files = await getFilesListService()

//     deepStrictEqual(files, mockFilesList)
//   })

//   // Descomentar para pruebas adicionales:
//   it('Debería dar error no autorizado al no pasarle el API_KEY', async function () {
//     nock(BACK_URL).get('/files').reply(401, { message: 'API KEY is required' })
//     try {
//       await getFilesListService()
//     } catch (err) {
//       strictEqual(err.message, 'API KEY is required')
//       strictEqual(err.status, 401)
//     }
//   })

//   it('Debería reflejar error en el servidor', async function () {
//     nock(BACK_URL).get('/files').reply(500, { message: 'server error' })

//     try {
//       await getFilesListService()
//     } catch (error) {
//       strictEqual(error.message, 'server error')
//     }
//   })
// })
