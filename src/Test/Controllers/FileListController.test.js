import { expect } from 'chai'
import nock from 'nock'
import { FilesListController } from '../../Controllers/Files/FileListController.js'

const mockFilesListData = [
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

describe('Pruebas unitarias de FilesListController', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('Deberia retornar una lista de archivos', async () => {
    // Mock de getFilesListService
    nock('http://localhost:3005')
      .get('/files/data')
      .reply(200, mockFilesListData)

    const req = {}
    const res = {
      statusCode: null,
      body: null,
      status: function (code) {
        this.statusCode = code
        return this
      },
      send: function (data) {
        this.body = data
        return this
      }
    }

    await FilesListController(req, res)

    expect(res.statusCode).to.equal(200)
    expect(res.body).to.deep.equal(mockFilesListData)
  })
})
