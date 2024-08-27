import { Router } from 'express'
import { WelcomeApi } from '../Controllers/IndexController.js'

const router = Router()

// Ruta de Health Check.
router.get('/', WelcomeApi)

export default router
