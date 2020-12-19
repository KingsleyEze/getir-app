import http from 'http'
import { env, mongo, port, ip, apiRoot } from './config'
import mongoose from './services/mongoose'
import express from './services/express'
import {
  clientError,
  serverError,
  notFound
} from './services/response'
import api from './routes/index'

const app = express(apiRoot, api, [clientError(), serverError(), notFound()])
const server = http.createServer(app)

mongoose.connect(mongo.uri, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
  })
})

export default app
