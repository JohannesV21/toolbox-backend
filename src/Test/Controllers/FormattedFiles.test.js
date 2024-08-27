// // import chai from 'chai'
// // import { stub, restore } from 'sinon'
// // const { expect } = chai
// // // import {
// // //   getFileService,
// // //   fetchFilesData
// // // } from '../path/to/Services/Files/FilesServices.js'
// // import { FormattedFilesController } from '../../Controllers/Files/FormattedFilesController.js'
// // import {
// //   fetchFilesData,
// //   getFileService
// // } from '../../Services/Files/FilesServices.js'

// // // Test suite for FormattedFilesController
// // describe('FormattedFilesController', () => {
// //   let req, res, next

// //   beforeEach(() => {
// //     req = {
// //       query: {}
// //     }
// //     res = {
// //       status: stub().returnsThis(),
// //       send: stub().returnsThis(),
// //       json: stub().returnsThis()
// //     }
// //     next = stub()
// //   })

// //   afterEach(() => {
// //     restore()
// //   })

// //   it('should call getFileService with fileName when fileName is provided', async () => {
// //     const mockFileName = 'testFile.csv'
// //     const mockData = { file: mockFileName, lines: [] }
// //     req.query.fileName = mockFileName

// //     stub(getFileService).resolves(mockData)

// //     await FormattedFilesController(req, res, next)

// //     expect(getFileService.calledOnceWithExactly(mockFileName)).to.be.true
// //     expect(res.status.calledOnceWithExactly(200)).to.be.true
// //     expect(res.send.calledOnceWithExactly(mockData)).to.be.true
// //   })

// //   it('should call fetchFilesData when fileName is not provided', async () => {
// //     const mockData = [{ file: 'file1.csv', lines: [] }]

// //     stub(fetchFilesData).resolves(mockData)

// //     await FormattedFilesController(req, res, next)

// //     expect(fetchFilesData.calledOnce).to.be.true
// //     expect(res.status.calledOnceWithExactly(200)).to.be.true
// //     expect(res.send.calledOnceWithExactly(mockData)).to.be.true
// //   })

// //   it('should handle errors and return the correct status and message', async () => {
// //     const mockError = new Error('Some error occurred')
// //     mockError.status = 500
// //     mockError.type = 'INTERNAL_ERROR'
// //     mockError.errorData = { code: 'ERR500' }

// //     stub(fetchFilesData).rejects(mockError)

// //     await FormattedFilesController(req, res, next)

// //     expect(fetchFilesData.calledOnce).to.be.true
// //     expect(res.status.calledOnceWithExactly(500)).to.be.true
// //     expect(
// //       res.json.calledOnceWithExactly({
// //         error: 'INTERNAL_ERROR',
// //         message: 'ERR500 - Some error occurred'
// //       })
// //     ).to.be.true
// //   })
// // })

// import { expect } from 'chai'
// import nock from 'nock'
// // import { getFileService, fetchFilesData } from '../services/FilesServices.js'
// import { FormattedFilesController } from '../../Controllers/Files/FormattedFilesController.js'

// describe('FormattedFilesController', () => {
//   let req, res

//   beforeEach(() => {
//     req = {
//       query: {}
//     }
//     res = {
//       status: function (code) {
//         this.statusCode = code
//         return this
//       },
//       send: function (data) {
//         this.data = data
//       },
//       json: function (data) {
//         this.data = data
//       }
//     }

//     nock.cleanAll() // Limpia todos los mocks de nock antes de cada prueba
//   })

//   it('should return formatted file data when fileName is provided', async () => {
//     const fileName = 'testFile.csv'
//     const mockData = { file: fileName, lines: [] }

//     req.query.fileName = fileName

//     nock('https://echo-serv.tbxnet.com')
//       .get(`/v1/secret/file/${fileName}`)
//       .reply(200, mockData)

//     await FormattedFilesController(req, res)

//     expect(res.statusCode).to.equal(200)
//     expect(res.data).to.deep.equal(mockData)
//   })

//   it('should return data from fetchFilesData when no fileName is provided', async () => {
//     const mockData = [{ file: 'testFile1.csv', lines: [] }]

//     nock('https://echo-serv.tbxnet.com')
//       .get('/v1/secret/files')
//       .reply(200, mockData)

//     await FormattedFilesController(req, res)

//     expect(res.statusCode).to.equal(200)
//     expect(res.data).to.deep.equal(mockData)
//   })

//   it('should handle errors correctly and return proper error message', async () => {
//     req.query.fileName = 'nonExistentFile.csv'

//     nock('https://echo-serv.tbxnet.com')
//       .get('/v1/secret/file/nonExistentFile.csv')
//       .reply(404, { message: 'File not found' })

//     await FormattedFilesController(req, res)

//     expect(res.statusCode).to.equal(404)
//     expect(res.data).to.have.property('message', 'undefined - File not found')
//   })
// })

// // import { expect } from 'chai'
// // import nock from 'nock'
// // // import { FormattedFilesController } from '../path/to/your/controller';
// // import express from 'express'
// // import { FormattedFilesController } from '../../Controllers/Files/FormattedFilesController.js'
// // // import { getFileService, fetchFilesData } from '../path/to/your/services';

// // // Configuración de express y la ruta para las pruebas
// // const app = express()
// // app.use(express.json())
// // app.use('/files', (req, res) => FormattedFilesController(req, res))

// // // Mock de los servicios
// // const mockFetchFilesData = [
// //   {
// //     file: 'test2.csv',
// //     lines: [
// //       {
// //         text: 'GDVgFfjkhSEqWVtxHGbQ',
// //         number: 6715,
// //         hex: '5f56a011b738cefef46dbe169661dbaa'
// //       }
// //     ]
// //   },
// //   {
// //     file: 'test3.csv',
// //     lines: [
// //       {
// //         text: 'TcfxFmgr',
// //         number: 439620,
// //         hex: '19bef38ce43212d98d7576cd72dae4e5'
// //       },
// //       {
// //         text: 'GTCaOOdbgbgiTAOQtEDHOPArIWE',
// //         number: 7424720,
// //         hex: '54a8085f29a6b8c27da89e3b17e30fbf'
// //       },
// //       {
// //         text: 'CpUbhjTpTEAjMkOPdlyYSilyg',
// //         number: 4843,
// //         hex: 'c9bb6d0f545ebf7735f6ada5a895183b'
// //       }
// //     ]
// //   }
// // ]

// // describe('FormattedFilesController', () => {
// //   afterEach(() => {
// //     nock.cleanAll()
// //   })

// //   it('should return formatted files data when no fileName is provided', async () => {
// //     // Mock de fetchFilesData
// //     const scope = nock('http://localhost:3005')
// //       .get('/files/data')
// //       .reply(200, mockFetchFilesData)

// //     const req = {
// //       query: {}
// //     }
// //     const res = {
// //       status: function (code) {
// //         this.statusCode = code
// //         return this
// //       },
// //       send: function (data) {
// //         this.body = data
// //         return this
// //       }
// //     }

// //     await FormattedFilesController(req, res)

// //     expect(res.statusCode).to.equal(200)
// //     expect(res.body).to.deep.equal(mockFetchFilesData)
// //     scope.done()
// //   })

// //   it('should return specific file data when fileName is provided', async () => {
// //     const fileName = 'test9.csv'
// //     const fileData = `file,text,number,hex
// // test9.csv,hWWSw
// // test9.csv,pk,08737,a48571fb98e77469cc4907e0fd50fc9e
// // test9.csv,KlGgYVQAyYRbGw,080489592,06a4e7a98b900d0d97e3b0970e8503f8
// // test9.csv,MObLIF,0916,758f0ea69e17bc3935f6ada5a895183b
// // test9.csv,svBeYwkgmCkfKhJF,4820,72c753749bb4c127a84722ffbe2bc63c
// // test9.csv,jsVPUSPTpspOXCQusRrBaB,3,6ebf8f75df03f0b3c699ca5f5b55fe4b
// // test9.csv,JBC,6683,4ea0125ca05ea19009210dcfffd9038e
// // test9.csv,RazHOFwULEaaDbSESCOTxtHjBH,0965865,8a1924fb4b7f8de3efd8e66d3481b4b5
// // test9.csv,RahjjvtZZEoFm,89,96801792e535d6850ed2faddf56bcdd0,,
// // test9.csv,KgUeb
// // test9.csv,GSjHOmmVaDwqT,89,413e0479900966843158cbf79c3b2460
// // test9.csv,ahasitYVYJikjFQztXgrnEaF,64418667689498740375171205675829,5cefcf5517b2621b141804b5a8782aff
// // test9.csv,Gb,8214,de6874de5dfe29a1ebe72258905b66eb
// // test9.csv,bxSTcnJwDr,6569,9049f66282d139ee309a8b3579628704`

// //     const scope = nock('http://localhost:3005')
// //       .get(`/files/data?fileName=${fileName}`)
// //       .reply(200, fileData)

// //     const req = {
// //       query: { fileName }
// //     }
// //     const res = {
// //       status: function (code) {
// //         this.statusCode = code
// //         return this
// //       },
// //       send: function (data) {
// //         this.body = data
// //         return this
// //       }
// //     }

// //     await FormattedFilesController(req, res)

// //     expect(res.statusCode).to.equal(200)
// //     expect(res.body).to.equal(fileData)
// //     scope.done()
// //   })

// //   it('should handle errors properly', async () => {
// //     const fileName = 'test9.csv'
// //     const errorMessage = 'Internal Server Error'

// //     const scope = nock('http://localhost:3005')
// //       .get(`/files/data?fileName=${fileName}`)
// //       .reply(500, { error: 'Error', message: errorMessage })

// //     const req = {
// //       query: { fileName }
// //     }
// //     const res = {
// //       status: function (code) {
// //         this.statusCode = code
// //         return this
// //       },
// //       json: function (data) {
// //         this.body = data
// //         return this
// //       }
// //     }

// //     await FormattedFilesController(req, res)

// //     expect(res.statusCode).to.equal(500)
// //     expect(res.body).to.have.property('error').that.equals('Error')
// //     expect(res.body).to.have.property('message').that.contains(errorMessage)
// //     scope.done()
// //   })
// // })
