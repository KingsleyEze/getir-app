import { Router } from 'express'
import recordController from './record'

const router = new Router()

router.use('/records', recordController)

export default router
