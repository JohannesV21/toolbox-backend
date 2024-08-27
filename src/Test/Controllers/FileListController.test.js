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

describe('FilesListController', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should return the list of files successfully', async () => {
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

  //   it('should handle errors properly', async () => {
  //     const errorMessage = 'SYS-ERR - Not Found'

  //     nock('http://localhost:3005')
  //       .get('/files/data')
  //       .reply(500, { error: 'Server Error', message: errorMessage })

  //     const req = {}
  //     const res = {
  //       statusCode: 500,
  //       body: { error: 'Server Error', message: errorMessage },
  //       status: function (code) {
  //         this.statusCode = code
  //         return this
  //       },
  //       json: function (data) {
  //         // Cambiamos send() por json()
  //         this.body = data
  //         return this
  //       }
  //     }
  //     console.log(res)

  //     const response = await FilesListController(req, res)
  //     console.log(response)

  //     expect(res.statusCode).to.equal(500)
  //     expect(res.body).to.have.property('error').that.equals('Server Error')
  //     expect(res.body).to.have.property('message').that.contains(errorMessage)
  //   })
})
