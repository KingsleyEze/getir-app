import { Router } from 'express'
import { middleware as body } from 'bodymen'
import { dateValidator as isDate } from '../../validators'
import { record as recordController } from './controllers'

const router = new Router()

router.post('/', body({
  startDate: {
    type: String,
    required: true,
    validate: isDate
  },
  endDate: {
    type: String,
    required: true,
    validate: isDate
  },
  minCount: {
    type: Number,
    required: true,
    min: 0
  },
  maxCount: {
    type: Number,
    required: true,
    min: 0
  }
}), recordController)

export default router
