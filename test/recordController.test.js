import request from 'supertest'
import app from '../src/app'

describe('Invalid record controller requests', () => {
  test('None valid api it should response 404', done => {
    request(app)
      .get('/records/not-valid-url')
      .then(response => {
        expect(response.statusCode).toBe(404)
        done()
      })
  })

  test('Bad request parameter it should response 400', done => {
    request(app)
      .post('/api/records/search')
      .send({ date: '2077-2-20' })
      .then(response => {
        expect(response.statusCode).toBe(400)
        done()
      })
  })

  test('Correct parameters with wrong values it should response 400', done => {
    request(app)
      .post('/api/records/search')
      .send({
        startDate: 'hello',
        endDate: 'world',
        minCount: 'getir',
        maxCount: 'app'
      })
      .then(response => {
        expect(response.statusCode).toBe(400)
        done()
      })
  })
})

describe('Valid record controller requests', () => {
  test('Correct parameters with matching values it should response 200 with records', done => {
    request(app)
      .post('/api/records/search')
      .send({
        startDate: '2016-01-26',
        endDate: '2018-02-02',
        minCount: 2700,
        maxCount: 3000
      })
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.code).toBe(0)
        expect(response.body.msg).toBe('Success')
        done()
      })
  })
})
