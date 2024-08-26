import { Router } from 'express'
import { WelcomeApi } from '../Controllers/index.js'

const router = Router()

router.get('/', WelcomeApi)

export default router
