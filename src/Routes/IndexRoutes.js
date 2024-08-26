import { Router } from 'express'
import { WelcomeApi } from '../Controllers/index.js'

const router = Router()

// Ruta de Health Check.
router.get('/', WelcomeApi)

export default router
