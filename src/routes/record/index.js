import { Router } from 'express'
import { middleware as body } from 'bodymen'
import { dateValidator as isDate } from '../../validators'
import { recordController } from './controllers'

const router = new Router()

/**
 * @api {post} /search - Finds the matching search criteria
 * @apiName Record Search
 * @apiGroup Record
 * @apiParam startDate - The start date for the createdAt field
 * @apiParam endDate - The end date for the createdAt field
 * @apiParam minCount  - Mininum sum of counts
 * @apiParam maxCount Maximum sum of counts
 */
router.post('/search', body({
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
